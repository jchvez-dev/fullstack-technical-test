<script setup lang="ts">
import GridTask from './components/GridTask.vue';
import StatisticsTask from './components/StatisticsTask.vue';

const taskStore = useTaskStore()
onMounted(() => {
  taskStore.fetchTasks()
})
</script>

<template>
  <main class="main-container">
    <h1>
      Gestión de Tareas
    </h1>
    <section>
      <TaskForm />
      <div class="list">
        <StatisticsTask />
        <GridTask />
      </div>
    </section>

  </main>
</template>

<style>
/**reset styles */
body {
  margin: 0;
}

.main-container {
  width: 100vw;
  height: 90vh;
  font-family: system-ui, -apple-system, sans-serif;
  color: #1f2937;
}

.main-container h1 {
  display: block;
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 10px;
}

.main-container section {
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 24px;
}

.main-container .list {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 24px;
}

@media (max-width: 768px) {
  .main-container section {
    flex-wrap: wrap;
  }

  .main-container .list {
    width: 100%;
  }
}
</style>
