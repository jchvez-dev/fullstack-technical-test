<script setup lang="ts">
const taskStore = useTaskStore()
</script>

<template>
  <div class="statics">
    <div><strong>Total:</strong> {{ taskStore.totalTasks }}</div>
    <div><strong>Completadas:</strong> {{ taskStore.completedTasks.length }}</div>
    <div><strong>Pendientes:</strong> {{ taskStore.pendingTasks.length }}</div>
  </div>
</template>

<style>
.statics {
  box-sizing: border-box;
  width: 100%;
  margin: 30px 0;
  background-color: #f3f4f6;
  padding: 15px;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  color: #4b5563;
}
</style>
