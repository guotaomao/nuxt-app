<template>
    <div>
      <p>{{content}}</p> 
      <button @click="refresh">refresh</button>
    </div>
</template>

<script>
import {getUserInfo} from '@/api/user'
export default {
    layout: 'blog',
    async asyncData ({res,req}) {
        console.log('server', res, req)
        if (process.server) {
          return { host: req.headers.host }
        }
        let data = await getUserInfo()
        console.log('data', data)
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