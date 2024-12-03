<script>
export default {
  setup() {
    const currentYear = new Date().getFullYear()

    return {
      currentYear,
    }
  },
}
</script>
<template>
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
</template>
