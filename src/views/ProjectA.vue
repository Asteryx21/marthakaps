<template>
  <Project :images="images" />
</template>

<script>
import Project from '@/components/Project.vue'
export default {
  components: {
    Project,
  },
  data() {
    return {
      images: [
        '/assets/photos/000 1 1.jpg',
        '/assets/photos/000 2 1.jpg',
        '/assets/photos/000 3.jpg',
        '/assets/photos/001 1 1.jpg',
        '/assets/photos/001 2 1.jpg',
        '/assets/photos/001 3.jpg',
        '/assets/photos/002 1 2.jpg',
        '/assets/photos/002 2.jpg',
        '/assets/photos/002 3.jpg',
        '/assets/photos/003 1 2.jpg',
        '/assets/photos/003 2.jpg',
        '/assets/photos/003 3.jpg',
        '/assets/photos/004 2.jpg',
        '/assets/photos/004 3.jpg',
        '/assets/photos/005 1 1.jpg',
        '/assets/photos/005 2 1.jpg',
        '/assets/photos/005 3.jpg',
        '/assets/photos/006 1 1.jpg',
        '/assets/photos/006 3.jpg',
        '/assets/photos/006 4.jpg',
        '/assets/photos/007 2.jpg',
        '/assets/photos/007 3.jpg',
        '/assets/photos/008 1 1.jpg',
        '/assets/photos/008 2.jpg',
        '/assets/photos/009 1.jpg',
        '/assets/photos/010 2.jpg',
        '/assets/photos/010 3.jpg',
        '/assets/photos/011 1.jpg',
        '/assets/photos/012 2.jpg',
        '/assets/photos/012 3.jpg',
        '/assets/photos/013 1.jpg',
        '/assets/photos/014 1.jpg',
        '/assets/photos/015 1.jpg',
        '/assets/photos/016 1.jpg',
        '/assets/photos/017 1.jpg',
        '/assets/photos/018 1.jpg',
        '/assets/photos/019 1.jpg',
        '/assets/photos/020 1.jpg',
        '/assets/photos/023 1.jpg',
        '/assets/photos/025 1.jpg',
        '/assets/photos/0026 1.jpg',
        '/assets/photos/28 1.jpg',
      ],
    }
  },
}
</script>
