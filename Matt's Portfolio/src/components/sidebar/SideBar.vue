<script setup lang="ts">
import { collapsed, toggleSidebar, sidebarWidth } from "./state";

// export default {
//   props: {},
//   setup() {
//     return { collapsed, toggleSidebar, sidebarWidth };
//   },
// };
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <span class="collapse-icon" @click="toggleSidebar">
      <i class="fas fa-angle-double-left"></i>
    </span>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #0d1b2a;
  --sidebar-item-hover: #1b263b;
  --sidebar-item-active: #415a77;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}
</style>
