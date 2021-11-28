<template>
    <div>
        Home {{env}}
    </div>
</template>
<script>
    export default {
    name:'Home',
    data(){
        return{
            env : process.env.VUE_APP_BASE_URL
        }
    }
    }
</script>