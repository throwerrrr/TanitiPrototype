import { createRouter, createWebHistory } from 'vue-router';
import AboutTanitiView from '@/views/AboutTaniti'
import ActivitiesView from '@/views/Activities.vue';
import DiningView from '@/views/Dining';
import DiningOptionView from '@/views/DiningOption';
import GettingAroundView from '@/views/GettingAround';
import HomeView from '@/views/Home';
import LodgingOptionView from '@/views/LodgingOption';
import PlacesToStayView from '@/views/PlacesToStay';
import ThingsToDoView from '@/views/ThingsToDo';
import TravelInfoView from '@/views/TravelInfo';
import NotFoundView from '@/views/NotFound';


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