<template>
  <nav class="navbar">
    <RouterLink to="/" class="name-item">Martha Kapsoulaki</RouterLink>

    <!-- Dropdown Button -->
    <div ref="dropdown" class="dropdown">
      <button @click="toggleDropdown" class="dropdown-button">
        Projects<span class="dropdown-arrow"></span>
      </button>
      <div v-if="dropdownVisible" class="dropdown-menu">
        <RouterLink to="/project-1" class="dropdown-item">Project 1</RouterLink>
        <RouterLink to="/project-2" class="dropdown-item">Project 2</RouterLink>
        <RouterLink to="/project-3" class="dropdown-item">Project 3</RouterLink>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'
export default {
  setup() {
    const dropdownVisible = ref(false)
    const dropdown = ref(null)

    // Toggle the dropdown visibility
    const toggleDropdown = () => {
      dropdownVisible.value = !dropdownVisible.value
    }

    // Close the dropdown if the click is outside the dropdown
    const closeDropdown = (event) => {
      if (dropdownVisible.value && dropdown.value && !dropdown.value.contains(event.target)) {
        dropdownVisible.value = false
      }
    }

    // Add event listener on mounted
    onMounted(() => {
      document.addEventListener('click', closeDropdown)
    })

    // Clean up event listener on beforeUnmount
    onBeforeUnmount(() => {
      document.removeEventListener('click', closeDropdown)
    })

    return {
      dropdownVisible,
      toggleDropdown,
      dropdown,
    }
  },
}
</script>
