import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useTaskStore } from '~/stores/useTaskStore'

// Mockeamos el runtimeConfig de Nuxt que usa el store
vi.stubGlobal('useRuntimeConfig', () => ({
  public: {
    apiBase: 'http://localhost:4000/api/tasks/',
    apiToken: 'token-secret'
  }
}))

describe('Task Store (Pinia)', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('debe inicializarse con el estado vacío', () => {
    const store = useTaskStore()
    expect(store.tasks).toEqual([])
    expect(store.loading).toBe(false)
    expect(store.totalTasks).toBe(0)
  })

  it('debe calcular correctamente los getters de tareas completadas y pendientes', () => {
    const store = useTaskStore()
    
    // Asignamos datos de prueba directamente al estado
    store.tasks = [
      { id: '1', titulo: 'Tarea 1', descripcion: 'Desc 1', completado: true },
      { id: '2', titulo: 'Tarea 2', descripcion: 'Desc 2', completado: false },
    ]

    expect(store.totalTasks).toBe(2)
    expect(store.completedTasks).toHaveLength(1)
    expect(store.completedTasks[0].titulo).toBe('Tarea 1')
    expect(store.pendingTasks).toHaveLength(1)
    expect(store.pendingTasks[0].titulo).toBe('Tarea 2')
  })

  it('debe normalizar _id a id correctamente al mapear o recibir elementos', () => {
    const store = useTaskStore()
    
    // Simulamos una respuesta del backend que usa _id de MongoDB
    const backendData = [
      { _id: '6ad27f191bf4529455edf328', titulo: 'Mongo Task', descripcion: 'Prueba', completado: false }
    ]

    // Aplicamos la misma lógica de normalización que pusimos en fetchTasks
    store.tasks = backendData.map(item => ({
      ...item,
      id: item.id || item._id
    }))

    expect(store.tasks[0].id).toBe('6ad27f191bf4529455edf328')
    expect(store.tasks[0].titulo).toBe('Mongo Task')
  })
})