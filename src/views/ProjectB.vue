<template>
  <Project :images="images">
    <!-- <p></p> -->
    H PRWTH EINAI 1000 H DEUTERI EINAI 1500 H TRITI 2000
  </Project>
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
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project2/test%201000%20.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project2/test%201500%20copy.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project2/test%202000.jpg',
      ],
    }
  },
}
</script>
