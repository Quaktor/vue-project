<template>
  <div>
    <img :src="buttonImage" alt="button" @click="openPage" />
  </div>
</template>

<script>
import buttonImage from '@/assets/button-image.jpg'

export default {
  data() {
    return {
      buttonImage: buttonImage,
      page: 'http://wsb.pl',
      pageOpened: false
    }
  },
  methods: {
    openPage() {
      if (!this.pageOpened) {
        window.open(this.page, '_blank')
        this.pageOpened = true
      } else {
        window.open('https://vuejs.org/', '_blank')
      }
    }
  }
}
</script>