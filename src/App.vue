<template>
  <div class="app-container">
    <!-- Main content, including navbar and other views -->
    <nav class="navbar">
      <RouterLink to="/" class="name-item">Martha Kapsoulaki</RouterLink>

      <!-- Dropdown Button -->
      <div ref="dropdown" class="dropdown">
        <button @click="toggleDropdown" class="dropdown-button">
          Projects
          <span class="dropdown-arrow"></span>
        </button>
        <div v-if="dropdownVisible" class="dropdown-menu">
          <RouterLink to="/project-1" class="dropdown-item">Project 1</RouterLink>
          <RouterLink to="/project-2" class="dropdown-item">Project 2</RouterLink>
          <RouterLink to="/project-3" class="dropdown-item">Project 3</RouterLink>
        </div>
      </div>
    </nav>

    <!-- Main Content (Router View) -->
    <main class="main-content">
      <RouterView />
    </main>

    <!-- Footer -->
    <div class="footer">
      <p>&copy; {{ currentYear }} Martha Kapsoulaki</p>
      <div class="social-media">
        <a href="https://facebook.com" target="_blank" class="social-icon">
          <FontAwesomeIcon :icon="['fab', 'facebook-f']" />
        </a>
        <a href="https://twitter.com" target="_blank" class="social-icon">
          <FontAwesomeIcon :icon="['fab', 'twitter']" />
        </a>
        <a href="https://instagram.com" target="_blank" class="social-icon">
          <FontAwesomeIcon :icon="['fab', 'instagram']" />
        </a>
        <a href="https://linkedin.com" target="_blank" class="social-icon">
          <FontAwesomeIcon :icon="['fab', 'linkedin-in']" />
        </a>
      </div>
    </div>
  </div>
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

    // Get the current year for the footer
    const currentYear = new Date().getFullYear()

    return {
      dropdownVisible,
      toggleDropdown,
      dropdown,
      currentYear, // Expose the current year for use in the footer
    }
  },
}
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  position: sticky;
  background-color: white;
  top: 0;
  z-index: 150;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Footer Styles */
.footer {
  /* position: sticky; */
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
  height: 50px;
}

.footer p {
  margin: 0;
}

/* Social Media Icons */
.social-media {
  margin-top: 10px;
}

.social-icon {
  color: white;
  font-size: 18px;
  margin: 0 10px;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: #ff6347; /* Change color on hover (tomato color as an example) */
}

/* Responsive Footer */
@media (max-width: 768px) {
  .social-icon {
    font-size: 16px;
  }
}
</style>
