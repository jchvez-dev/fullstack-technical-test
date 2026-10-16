

<script setup lang="ts">
import { reactive } from 'vue'

// Accedemos al store directamente sin hacer import explícito
const taskStore = useTaskStore()

const form = reactive({
  titulo: '',
  descripcion: '',
  completado: false
})

const handleSubmit = () => {
  if (!form.titulo.trim()) return

  // Agregamos la tarea directamente al Store de Pinia
  taskStore.addTask({
    id: Date.now().toString(),
    titulo: form.titulo,
    descripcion: form.descripcion,
    completado: form.completado,
    fechaCreacion: new Date().toISOString()
  })

  // Limpiamos el formulario
  form.titulo = ''
  form.descripcion = ''
  form.completado = false
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="task-form">
    <h2>Crear Nueva Tarea</h2>

    <div class="form-group">
      <label for="titulo">Título:</label>
      <input 
        id="titulo" 
        type="text" 
        v-model="form.titulo" 
        required 
        placeholder="Ej. Estudiar Nuxt 3" 
      />
    </div>

    <div class="form-group">
      <label for="descripcion">Descripción:</label>
      <textarea 
        id="descripcion" 
        v-model="form.descripcion" 
        placeholder="Detalles de la tarea..."
      ></textarea>
    </div>

    <div class="form-group checkbox-group">
      <label>
        <input 
          type="checkbox" 
          v-model="form.completado" 
        />
        ¿Completado?
      </label>
    </div>

    <button type="submit" class="btn-submit">Guardar Tarea</button>
  </form>
</template>

<style scoped>
.task-form {
  box-sizing: border-box;
  width: 50%;
  padding: 24px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form-group label {
  font-weight: bold;
  font-size: 14px;
}

input[type="text"], textarea {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

textarea {
  resize: vertical;
  min-height: 80px;
}

.checkbox-group {
  flex-direction: row;
  align-items: center;
}

.checkbox-group label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.btn-submit {
  background-color: #0033dc;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-submit:hover {
  background-color: #012aaf;
}


@media (max-width: 768px) {
  .task-form {
    width: 100%;
  }
}
</style>
