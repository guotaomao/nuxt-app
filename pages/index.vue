<template>
  <div class="container">
      <!-- <Logo /> -->
      <NuxtLink to="/posts">NuxtLinked</NuxtLink>
  </div>
</template>

<script>
import {getUserInfo} from '@/api/user'

export default {
  head () {
    
  },
  async asyncData (context) {
        // console.log('context', context)
        let data = await getUserInfo()
        // console.log('data', data)
        return { content: 'created at' + new Date() }
    },
   mounted() {
  }
}
</script>

<style>





</style>
