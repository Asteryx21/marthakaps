<template>
  <div class="about-text">
    <p>
      Lorem ipsum dolor sit amet. Sit architecto officiis quo rerum velit ut repudiandae nisi est
      pariatur assumenda. Quo nesciunt eius ea earum sint rem libero incidunt id quae aperiam.
    </p>

    <div class="cv-actions">
      <!-- View -->
      <a :href="cvPdf" target="_blank" rel="noopener">
        View CV
      </a>

      <!-- Download -->
      <a :href="cvPdf" download>
        Download CV
      </a>
    </div>
  </div>
</template>
<script setup>
import cvPdf from '@/assets/marthakaps_cv.pdf'
</script>
<style>
.about-text {
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 536px;
  max-width: 536px;
  margin: auto;
}

.cv-actions {
  display: flex;
  gap: 20px;
  cursor: pointer;
}

.cv-actions a {
  text-decoration: none;
  border: 1px solid black;
  padding: 10px 18px;
  font-size: 0.9rem;
  color: black;
  transition: all 0.2s ease;
}

.cv-actions a:hover {
  background: black;
  color: white;
}

@media (max-width: 596px) {
  .about-text {
    min-width: 200px;
    max-width: 200px;
  }

  .cv-actions {
    flex-direction: column;
    gap: 12px;
  }
}
</style>
