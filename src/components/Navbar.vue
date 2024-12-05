<template>
  <nav class="navbar">
    <RouterLink to="/" class="name-item">Martha Kapsoulaki</RouterLink>

    <!-- Hamburger/Close Button -->
    <div ref="dropdown" class="dropdown">
      <button @click="toggleDropdown" class="dropdown-button">
        <div :class="['hamburger-icon', dropdownVisible ? 'open' : '']"></div>
      </button>

      <!-- Full-Screen Dropdown Menu -->
      <transition name="fade">
        <div v-if="dropdownVisible" class="full-page-menu">
          <div class="menu-content">
            <RouterLink to="/about" class="menu-item" @click="closeMenu">About</RouterLink>
            <RouterLink to="/contact" class="menu-item" @click="closeMenu">Contact</RouterLink>
            <div class="menu-item" @click="toggleProjects">
              Projects
              <span :class="['dropdown-arrow', projectsVisible ? 'rotated' : '']"></span>
            </div>
            <!-- Inner Dropdown for Projects -->
            <transition name="slide">
              <div v-if="projectsVisible" class="projects-dropdown">
                <RouterLink to="/project-1" class="dropdown-item" @click="closeMenu"
                  >Project 1</RouterLink
                >
                <RouterLink to="/project-2" class="dropdown-item" @click="closeMenu"
                  >Project 2</RouterLink
                >
                <RouterLink to="/project-3" class="dropdown-item" @click="closeMenu"
                  >Project 3</RouterLink
                >
              </div>
            </transition>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  setup() {
    const dropdownVisible = ref(false)
    const projectsVisible = ref(false)
    const dropdown = ref(null)

    // Toggle the full-page menu visibility
    const toggleDropdown = () => {
      dropdownVisible.value = !dropdownVisible.value
      if (!dropdownVisible.value) {
        projectsVisible.value = false // Close projects menu when main menu closes
      }
    }

    // Toggle the visibility of the projects list
    const toggleProjects = () => {
      projectsVisible.value = !projectsVisible.value
    }

    // Close the menu when a menu link is clicked
    const closeMenu = () => {
      dropdownVisible.value = false
      projectsVisible.value = false
    }

    // Close the dropdown if clicked outside
    const closeDropdown = (event) => {
      if (dropdown.value && !dropdown.value.contains(event.target)) {
        dropdownVisible.value = false
        projectsVisible.value = false
      }
    }

    // Add event listeners on mount
    onMounted(() => {
      document.addEventListener('click', closeDropdown)
    })

    // Remove event listeners on unmount
    onBeforeUnmount(() => {
      document.removeEventListener('click', closeDropdown)
    })

    return {
      dropdownVisible,
      projectsVisible,
      toggleDropdown,
      toggleProjects,
      closeMenu,
      dropdown,
    }
  },
}
</script>
