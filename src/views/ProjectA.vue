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
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/000%201%201.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/000%202%201.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/000%203.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/001%201%201.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/001%202%201.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/001%203.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/002%201%202.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/002%202.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/002%203.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/0026%201.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/003%201%202.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/003%202.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/003%203.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/004%202.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/004%203.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/005%201%201.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/005%202%201.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/005%203.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/006%201%201.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/006%203.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/006%204.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/007%202.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/007%203.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/008%201%201.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/008%202.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/009%201.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/010%202.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/010%203.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/011%201.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/012%202.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/012%203.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/013%201.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/014%201.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/015%201.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/016%201.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/017%201.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/018%201.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/019%201.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/020%201.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/023%201.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/025%201.jpg',
        'https://storage.googleapis.com/saveyourhood_bucket/mkapski/Project1/28%201.jpg',
      ],
    }
  },
}
</script>
