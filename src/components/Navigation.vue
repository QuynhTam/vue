<template>
    <header class="header">
        <nav class="container">
            <div class="branding">
                <router-link class="head" to='/'>Blog Vue Test</router-link>
            </div>
            <div class="nav-links">
                <ul>
                    <router-link class="link" to='/'>Home</router-link>
                    <router-link class="link" to='/register'>Blogs</router-link>
                    <router-link class="link" to='/login'>Login / Register</router-link>
                </ul>
            </div>
        </nav>
    </header>
</template>
<script>
    export default {
        name: "Navigation",
    }
</script>
<style scoped>
    header {
        background-color: #fff;
        padding: 0 25px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        z-index: 99;
    }

    nav {
        display: flex;
        padding: 25px 0;
    }

    .link {
        font-weight: 500;
        padding: 0 8px;
        transition: 0.3s color ease;
        cursor: pointer;
    }

    .link:hover {
        color: #1eb8b8;
    }

    .branding {
        display: flex;
        align-items: center;
    }

    .head {
        font-weight: 600;
        font-size: 24px;
        color: #000;
        text-decoration: none;

    }

    .nav-links {
        position: relative;
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: flex-end;
    }
    ul{
        margin-right: 32px;
    }
    .link{
        margin-right: 32px;
    }
    .link:last-child{
        margin-right: 0;
    }
</style>