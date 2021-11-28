import Home from '../components/PostList';
import Error from '../components/Error '
import Login from '../components/Login.vue';
const routes = [
    { path: '/', component: Home },

    { path: '/login', component: Login },
    { path: '/*', component: Error}
];
export default routes;