<template>
    <div class="hello">
        <ul>
            <li v-for = "(post,index) in posts" :key="index">{{post}}</li>
        </ul>
    </div>
</template>

<script>
    import ServiceFactory from '../sevicer/ServiceFactory'

    const PostService = ServiceFactory.get('posts')
    export default {
        name: 'PostList',
        data() {
            return {
                posts: [],
            }
        },
        created() {
            this.fetch()
        },
        methods: {
            async fetch() {
                const {data} = await PostService.getPost()
                this.posts = data
            }
        }
    }
</script>

<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
