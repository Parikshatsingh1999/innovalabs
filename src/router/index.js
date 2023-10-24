import { createRouter, createWebHistory } from "vue-router";
import mainPage from "../components/MainPage.vue"
import dynamicBlocks from '../components/DynamicBlocks.vue'
import communicationPage from "../components/communication/CommunicationPage.vue"
import paginatedList from '../components/PaginatedList.vue'
import Notfound from '../components/NotFound.vue'

const routes = [
    {
        path: "/",
        name: "home",
        component: mainPage,
    },
    {
        path: "/blocks",
        name: "blocks",
        component: dynamicBlocks,
    },
    {
        path: "/communication",
        name: "communication",
        component: communicationPage,
    },
    {
        path: "/paginated",
        name: "paginated",
        component: paginatedList,
    },
    {
        path: '/:pathMatch(.*)*',
        name: "notfound",
        component: Notfound
    }
];



export const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});