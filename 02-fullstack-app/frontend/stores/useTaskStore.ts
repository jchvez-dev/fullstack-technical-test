import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Task {
  id?: string
  titulo: string
  descripcion: string
  completado: boolean
  fechaCreacion?: string
}

export const useTaskStore = defineStore('tasks', () => {
  const tasks = ref<Task[]>([])
  const loading = ref<boolean>(false)

  const config = useRuntimeConfig()

  const apiFetch = $fetch.create({
    baseURL: config.public.apiBase as string,
    headers: {
      'Authorization': `Bearer ${config.public.apiToken}`
    }
  })

  // Getters
  const totalTasks = computed(() => tasks.value.length)
  const completedTasks = computed(() => tasks.value.filter(t => t.completado))
  const pendingTasks = computed(() => tasks.value.filter(t => !t.completado))

  const fetchTasks = async () => {
    loading.value = true
    try {
      const data = await apiFetch<any[]>('/')
      // Mapeamos _id del backend a id para el frontend
      tasks.value = data.map(item => ({
        ...item,
        id: item.id || item._id
      }))
    } catch (error) {
      console.error('Error al obtener tareas:', error)
    } finally {
      loading.value = false
    }
  }

  const addTask = async (newTask: { titulo: string; descripcion: string; completado: boolean }) => {
    try {
      const createdTask = await apiFetch<Task>('/', {
        method: 'POST',
        body: {
          titulo: newTask.titulo,
          descripcion: newTask.descripcion,
          completado: newTask.completado
        }
      })
      const normalizedTask: Task = {
        ...createdTask,
        id: createdTask.id || createdTask._id
      }

      tasks.value.push(normalizedTask)
    } catch (error: any) {
      console.error('Error al crear la tarea:', error.data || error)
    }
  }

  const toggleTaskStatus = async (id: string) => {
    const task = tasks.value.find(t => t.id === id)
    if (!task) return

    try {
      const updated = await apiFetch<any>(`/${id}`, {
        method: 'PATCH',
        body: { completado: !task.completado }
      })
      
      task.completado = updated.completado
    } catch (error: any) {
      console.error('Error al actualizar la tarea:', error.data || error)
    }
  }

  const deleteTask = async (id: string) => {
    try {
      await apiFetch(`/${id}`, {
        method: 'DELETE'
      })
      tasks.value = tasks.value.filter(t => t.id !== id)
    } catch (error: any) {
      console.error('Error al eliminar la tarea:', error.data || error)
    }
  }

  return {
    tasks,
    loading,
    totalTasks,
    completedTasks,
    pendingTasks,
    fetchTasks,
    addTask,
    toggleTaskStatus,
    deleteTask
  }
})
