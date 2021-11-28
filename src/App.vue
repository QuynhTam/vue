<template>
    <div id="app">
        <Navigation></Navigation>
        <router-view/>
    </div>
</template>

<script>
    import Navigation from "./components/Navigation";

    export default {
        name: 'App',
        components: {
            Navigation
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Quicksand", sans-serif;
    }
    #app {
    @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        /*font-family: "Quicksand", sans-serif;*/
    }
    .container {
        max-width: 1440px;
        margin: 0 25px;
    }
    .link {
        text-decoration: none;
        text-transform: uppercase;
        color: black;
    }
</style>
