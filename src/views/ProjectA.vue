<template>
  <div class="project-container">
    <section class="slider-container">
      <!-- Left Arrow -->
      <button class="arrow left-arrow" @click="prevSlide">&#8592;</button>

      <!-- Image Display -->
      <div class="slider">
        <img :src="images[currentIndex]" alt="Slider Image" />
      </div>

      <!-- Right Arrow -->
      <button class="arrow right-arrow" @click="nextSlide">&#8594;</button>
    </section>

    <section>
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
  name: 'Slider',
  data() {
    return {
      currentIndex: 0,
      images: [
        'https://placehold.co/400',
        'https://placehold.co/600',
        'https://placehold.co/600x400',
      ],
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
.project-container {
  margin-bottom: 25px;
}
.project-container section {
  margin-bottom: 150px;
}
.slider-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 700px;
}

.slider {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

img {
  z-index: 1;
}

.left-arrow {
  margin-left: 10px;
}

.right-arrow {
  margin-right: 10px;
}
.arrow {
  cursor: pointer;
}
.arrow:hover {
  background: rgba(0, 0, 0, 0.7);
}
</style>
