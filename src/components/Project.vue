<template>
  <div class="project-container">
    <section class="slider-container">
      <!-- Slider -->
      <div class="slider">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="index === currentIndex ? image : null"
          :alt="'Slider Image ' + (index + 1)"
          :loading="index === currentIndex ? 'lazy' : null"
          decoding="async"
          :class="{ visible: index === currentIndex, hidden: index !== currentIndex }"
        />
      </div>

      <!-- Arrows and Indicator -->
      <div class="arrow-container">
        <span class="arrow left-arrow" @click="prevSlide">
          <font-awesome-icon :icon="['fas', 'angle-left']" />
        </span>
        <!-- <span class="indicator">{{ currentIndex + 1 }}/{{ images.length }}</span> -->
        <span class="arrow right-arrow" @click="nextSlide">
          <font-awesome-icon :icon="['fas', 'angle-right']" />
        </span>
      </div>
    </section>

    <!-- Text Content -->
    <section class="text-container">
      <slot></slot>
    </section>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
library.add(faAngleLeft, faAngleRight)

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
.project-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.slider-container {
  position: relative;
  width: 100%;
  max-width: 800px; /* Optional: Adjust based on your design */
  margin-bottom: 25px;
}

.slider {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.slider img {
  display: none;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: opacity 0.5s ease;
}
.slider img.visible {
  display: block;
}
.slider img.hidden {
  opacity: 0;
}

/* Arrow Styling */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2.5rem;
  color: black;
  user-select: none;
  cursor: pointer;
  z-index: 10;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.arrow i {
  font-size: 1.5rem; /* Adjust the icon size */
}

.arrow.left-arrow {
  left: -50px;
}
.arrow.right-arrow {
  right: -50px;
}

/* Indicator Styling */
.indicator {
  text-align: center;
  font-size: 1.2rem;
  margin-top: 10px;
  color: gray;
  user-select: none;
}

/* Text Container */
.text-container {
  margin: 0 50px;
  text-align: justify;
}

/* Media Query for Small Screens */
@media screen and (max-width: 898px) {
  .arrow {
    position: static; /* Reset position */
    margin: 10px 5px; /* Add some margin */
    transform: none; /* Reset transform */
    background: none; /* Optional: Remove background */
    font-size: 2rem; /* Adjust size */
    border-radius: 0; /* Remove rounded edges */
  }

  .slider-container {
    display: flex;
    flex-direction: column; /* Stack content vertically */
    align-items: center;
  }

  .arrow-container {
    display: flex;
    justify-content: center;
    gap: 15px; /* Space between arrows */
    margin-top: 10px;
  }
}
</style>
