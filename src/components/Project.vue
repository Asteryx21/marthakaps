<template>
  <div class="project-container">
    <section class="slider-container">
      <!-- Image Display -->
      <div class="slider">
        <img :src="images[currentIndex]" alt="Slider Image" loading="lazy" />
      </div>

      <!-- Arrow Buttons (Below the Image) -->
      <div class="arrow-container">
        <span class="arrow" @click="prevSlide">&#8592;</span>
        <span class="indicator">{{ currentIndex + 1 }}/{{ images.length }}</span>
        <span class="arrow" @click="nextSlide">&#8594;</span>
      </div>
    </section>

    <section class="text-container">
      Lorem ipsum dolor sit amet. Sit architecto officiis quo rerum velit ut repudiandae nisi est
      pariatur assumenda. Quo nesciunt eius ea earum sint rem libero incidunt id quae aperiam. Qui
      facere quos At velit omnis qui internos placeat cum pariatur quos rem culpa amet. Non omnis
      velit rem impedit voluptatem sed magni dicta sed ipsum internos et suscipit laboriosam et
      velit nesciunt non tempore magni. Eum repellat nulla hic omnis velit non harum earum ut quam
      voluptatem ut velit enim id rerum nihil et dolorem voluptas? Ut aspernatur cupiditate et
      reprehenderit fugit ea reprehenderit repudiandae et sunt similique ut dignissimos totam et
      deleniti suscipit. Et quia nisi sit enim obcaecati ut natus necessitatibus? Est quia ipsam sed
      voluptates quibusdam quo adipisci dolorem cum quam mollitia sed tenetur voluptatem. Vel nihil
      Quis ut sunt facere qui quia voluptatem et minus autem ea dolorem libero eos excepturi dolore
      et delectus Quis?
    </section>
  </div>
</template>
<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
    },
  },
}
</script>

<style scoped>
.slider-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
}
.text-container {
  margin: 10px 0;
}
.slider {
  width: 100%;
  height: 400px; /* Set a fixed height for the slider */
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 100%; /* Make the image responsive */
  height: 100%; /* Ensure the image fits the fixed height */
  object-fit: contain;
}

.arrow-container {
  display: flex;
  align-items: center; /* Center the arrows and indicator vertically */
  padding: 10px 0;
}

.arrow {
  font-size: 2rem;
  color: black;
  user-select: none;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.indicator {
  font-size: 1.2rem;
  margin: 0 10px;
  color: gray;
  user-select: none;
}
</style>
