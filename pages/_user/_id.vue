<template>
    <div>user id</div>
</template>

<script>
  export default {
     async asyncData (context) {
        //  const id = context.params.id
         console.log('async data', context)
        //  try {
        //      // using the nuxtjs/http module here exposed via context.app
        //      const post = await context.app.$http.$get(`https://api.nuxtjs.dev/posts/${id}`)
        //      return { post }
        //  } catch (error) {
        //      context.error(error) // show the nuxt error page with the thrown error
        //  }
     },
     created () {
      //  console.log('context', this.$route)
     }  
  } 
</script>

<style>

</style>