<script setup>
import { ref, onMounted, watch } from 'vue';
import Hero from '@/components/Hero.vue';
import Activity from '@/components/Activity.vue';
import { useRoute } from 'vue-router';

import waterBeachData from '@/assets/data/activites/water_beach.json';
import natureAdventureData from '@/assets/data/activites/nature_adventure.json';
import artsCultureData from '@/assets/data/activites/arts_culture.json';
import nightlifeData from '@/assets/data/activites/nightlife_entertainment.json';

const route = useRoute();
const activities = ref([]);
const pageTitle = ref('');
const heroImg = ref('');

const dataMap = {
    'water-beach': { 
        data: waterBeachData, 
        title: 'Water & Beach', 
        img: 'https://images.pexels.com/photos/2404370/pexels-photo-2404370.jpeg' 
    },
    'adventure-nature': { 
        data: natureAdventureData, 
        title: 'Nature & Adventure', 
        img: 'https://images.pexels.com/photos/1486842/pexels-photo-1486842.jpeg'
    },
    'arts-culture': { 
        data: artsCultureData, 
        title: 'Arts & Culture', 
        img: 'https://images.pexels.com/photos/11489976/pexels-photo-11489976.jpeg'
    },
    'nightlife-entertainment': { 
        data: nightlifeData, 
        title: 'Nightlife & Entertainment', 
        img: 'https://images.pexels.com/photos/9005505/pexels-photo-9005505.jpeg'
    }
};

function loadActivities() {
    const group = route.params.group;
    const config = dataMap[group];

    if (config) {
        activities.value = config.data;
        pageTitle.value = config.title;
        heroImg.value = config.img;
    }
}

onMounted(loadActivities);

watch(() => route.params.group, loadActivities);
</script>

<template>
    <Hero :image="heroImg" />
    
    <section class="px-6 md:px-12 lg:px-20 py-12">
        <header class="mb-10">
            <h1 class="text-3xl md:text-4xl font-bold text-gray-900">{{ pageTitle }}</h1>
            <p class="mt-2 text-gray-600">
                Discover {{ pageTitle.toLowerCase() }} experiences in Taniti
            </p>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Activity 
                v-for="activity in activities"
                :key="activity.id"
                :id="activity.id"
                :name="activity.name"
                :category="activity.category"
                :description="activity.description"
                :contact-phone="activity.contact_phone"
                :contact-email="activity.contact_email"
                :business-hours="activity.business_hours"
                :distance-from-airport="activity.distance_from_airport"
                :distance-from-port="activity.distance_from_port"
                :pictures="activity.pictures"
            />
        </div>

        <div v-if="activities.length === 0" class="text-center py-16">
            <p class="text-gray-500 text-lg">No activities found for this category.</p>
        </div>
    </section>
</template>