<template>
  <div class="app-container">
    <Navbar />
    <main class="main-content">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
export default {
  components: {
    Footer,
    Navbar,
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

.main-content {
  height: 1000px;
}
/* Footer Styles */
.footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
  height: 50px;
}

@media (max-width: 452px) {
  .main-content {
    display: flex;
    align-items: center;
    height: 1500px;
  }
}
@media (min-height: 1140px) {
  .main-content {
    display: flex;
    align-items: center;
    height: 1400px;
  }
}
@media (max-width: 332px) {
  .dropdown {
    margin: 0;
    padding: 0;
  }
}
@media (max-width: 277px) {
  .navbar > * {
    font-size: 10px;
  }
  .dropdown-arrow {
    font-size: 10px;
  }
  .dropdown-button {
    font-size: 10px;
  }
  .navbar {
    flex-direction: column;
  }
}
</style>
