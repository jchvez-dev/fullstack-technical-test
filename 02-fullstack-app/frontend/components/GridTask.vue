
<script setup lang="ts">
const taskStore = useTaskStore()
</script>

<template>
  <div class="task-grid-container">
    <h2 class="task-grid-title">Lista de Tareas</h2>
    
    <div v-if="taskStore.tasks.length === 0" class="task-empty">
      No hay tareas creadas aún.
    </div>
    
    <ul class="task-list">
      <li 
        v-for="task in taskStore.tasks" 
        :key="task.id"
        class="task-card"
      >
        <div class="task-info">
          <h3 :class="{ 'task-completed-title': task.completado }" class="task-title" :title="task.titulo">
            {{ task.titulo }}
          </h3>
          <p class="task-desc">
            {{ task.descripcion || 'Sin descripción' }}
          </p>
          <small class="task-date">
            Creada: {{ new Date(task.fechaCreacion).toLocaleString() }}
          </small>
        </div>

        <div class="task-actions">
          <button 
            @click="taskStore.toggleTaskStatus(task.id)"
            :class="task.completado ? 'btn-pending' : 'btn-complete'"
          >
            {{ task.completado ? 'Pendiente' : 'Completar' }}
          </button>

          <button 
            @click="taskStore.deleteTask(task.id)"
            class="btn-delete"
          >
            Eliminar
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.task-grid-container {
  width: 100%;
  max-height: 60vh;
  margin-top: 20px;
  overflow-y: auto;
}

.task-grid-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #374151;
}

.task-empty {
  color: #6b7280;
  font-style: italic;
  text-align: center;
  padding: 20px;
  background: #f9fafb;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
}

.task-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.task-card {
  padding: 16px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.task-info {
  overflow: hidden;
  max-width: 70%;
}

.task-title {
  margin: 0 0 6px 0;
  font-size: 16px;
  font-weight: 600;
  color: #111827;
}

.task-completed-title {
  text-decoration: line-through;
  color: #9ca3af;
}

.task-desc {
  margin: 0 0 8px 0;
  font-size: 14px;
  color: #4b5563;
  word-break: break-word;
}

.task-date {
  color: #9ca3af;
  font-size: 12px;
}

.task-actions {
  display: flex;
  gap: 8px;
  align-items: center;
}

.btn-complete {
  background-color: #374151;
  color: #ffffff;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
}

.btn-pending {
  background-color: #e5e7eb;
  color: #374151;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
}

.btn-delete {
  background-color: #fee2e2;
  color: #991b1b;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
}
</style>
