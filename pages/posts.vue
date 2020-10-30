<template>
    <div>
      <p>{{content}}</p> 
      <button @click="refresh">refresh</button>
    </div>
</template>

<script>
export default {
    layout: 'blog',
    asyncData () {
        console.log('process', process.client ? 'client' : 'server')
        return { content: 'created at' + new Date() }
    },
    methods: {
        refresh () {
            this.$nuxt.refresh()
        }
    }
}
</script>

<style>

</style>