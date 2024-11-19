<template>
  <div class="about-container">
    <h1>This is about page</h1>

    <div class="image-grid">
      <img src="../assets/photos/1.jpg" alt="Image Gallery" class="image-item" loading="lazy" />
      <img src="../assets/photos/2.jpg" alt="Image Gallery" class="image-item" loading="lazy" />
      <img src="../assets/photos/3.jpg" alt="Image Gallery" class="image-item" loading="lazy" />
      <img src="../assets/photos/4.jpg" alt="Image Gallery" class="image-item" loading="lazy" />
      <img src="../assets/photos/5.jpg" alt="Image Gallery" class="image-item" loading="lazy" />
    </div>
  </div>
</template>

<style scoped>
.about-container {
  text-align: center;
  padding: 20px;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
  padding: 20px;
}

.image-item {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.image-item:hover {
  transform: scale(1.05);
}
</style>
