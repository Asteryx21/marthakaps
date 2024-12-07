<template>
  <div class="app-container">
    <Navbar />
    <main class="main-content">
      <RouterView />
    </main>
    <!-- <Footer /> -->
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
  height: 100vh;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: #333;
  margin: 25px;
  z-index: 1;
}

.main-content {
  display: flex;
  align-items: center;
  /* height: 100vh; */
  width: 100%;
  height: 100%;
}
/* Footer Styles */
.footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
  height: 50px;
}

/* @media (max-width: 452px) {
  .main-content {
    height: 1500px;
  }
}
@media (min-height: 1140px) {
  .main-content {
    display: flex;
    align-items: center;
    height: 1400px;
  }
} */
@media (max-width: 298px) {
  .app-container {
    height: auto;
  }
}
/* @media (max-height: 938px) {
  .app-container {
    height: auto;
  }
} */
/* @media (max-width: 277px) {
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
} */
</style>
