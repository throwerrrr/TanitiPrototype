import { createRouter, createWebHistory } from 'vue-router';
import AboutTanitiView from '@/views/AboutTanitiView.vue';
import ActivitiesView from '@/views/ActivitiesView.vue';
import DiningView from '@/views/DiningView.vue';
import DiningOptionView from '@/views/DiningOptionView.vue';
import GettingAroundView from '@/views/GettingAroundView.vue';
import HomeView from '@/views/HomeView.vue';
import LodgingOptionView from '@/views/LodgingOptionView.vue';
import PlacesToStayView from '@/views/PlacesToStayView.vue';
import ThingsToDoView from '@/views/ThingsToDoView.vue';
import TravelInfoView from '@/views/TravelInfoView.vue';
import NotFoundView from '@/views/NotFoundView.vue';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about-taniti',
            component: AboutTanitiView
        },
        {
            path: '/dining',
            name: 'dining',
            component: DiningView
        },
        {
            path: '/dining/:id',
            name: 'dining-option',
            component: DiningOptionView
        },
        {
            path: '/getting-around',
            name: 'getting-around',
            component: GettingAroundView
        },
        {
            path: '/places-to-stay',
            name: 'places-to-stay',
            component: PlacesToStayView
        },
        {
            path: '/places-to-stay/:id',
            name: 'place-to-stay',
            component: LodgingOptionView
        },
        {
            path: '/things-to-do',
            name: 'things-to-do',
            component: ThingsToDoView
        },
        {
            path: '/things-to-do/:group',
            name: 'activity-group',
            component: ActivitiesView
        },
        {
            path: '/travel-info',
            name: 'travel-info',
            component: TravelInfoView
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFoundView
        }
    ]
});

export default router;