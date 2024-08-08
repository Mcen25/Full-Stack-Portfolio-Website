import { ref, computed } from "vue";

export const collapsed = ref(false);
export const toggleSidebar = () => (collapsed.value = !collapsed.value);

export const SB_WIDTH = 250;
export const SB_WIDTH_COLLAPSED = 40;
export const sidebarWidth = computed(() =>
  collapsed.value ? SB_WIDTH_COLLAPSED : SB_WIDTH
);
