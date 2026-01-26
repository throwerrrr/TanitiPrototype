<script setup>
import Hero from '@/components/Hero.vue';
import { RouterLink } from 'vue-router'

const heroImg = "https://images.pexels.com/photos/1266832/pexels-photo-1266832.jpeg"
const asideImages = [
    {
        src: "https://images.pexels.com/photos/2674066/pexels-photo-2674066.jpeg",
        alt: "Island shore with boats and mountains"
    },
    {
        src: "https://images.pexels.com/photos/66258/staniel-cay-swimming-pig-seagull-fish-66258.jpeg",
        alt: "Bird standing on swimming pig's back"
    },
    {
        src:"https://images.pexels.com/photos/4321157/pexels-photo-4321157.jpeg",
        alt: "Three surfers idling in blue water"
    }
]
const navItems = [
    {
        "topic": "dining",
        "navLink": "/dining"
    },
    {
        "topic": "transportation",
        "navLink": "/getting-around"
    },
    {
        "topic": "lodging",
        "navLink": "/places-to-stay"
    },
    {
        "topic": "activities",
        "navLink": "/things-to-do"
    },
]

const tanitiDescription = "Taniti is a small, tropical island in the Pacific. While the island has an area of less than 500 square miles, the terrain is varied and includes both sandy and rocky beaches, a small but safe harbor, lush tropical rainforests, and a mountainous interior that includes a small, active volcano. Taniti has an indigenous population of about 20,000. Until a recent increase in tourism, most the Tanitian economy was dominated by fishing or agriculture."
</script>

<template>
    <Hero :image="heroImg"/>
    <div class="p-4 md:p-12 lg:p-20 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <section class="lg:col-span-2 lg:mr-15">
            <div>
                <h1 class="text-3xl">About Taniti</h1>
                <p class="py-4">{{ tanitiDescription }}</p>
            </div>
            <div>
                <div v-for="item in navItems" class="py-2">
                    <h2 class="text-lg">Questions about {{ item.topic }}?</h2>
                    <p>Visit our <RouterLink :to="item.navLink" class="text-teal-600 font-medium hover:text-teal-900 hover:underline">{{ item.topic }}</RouterLink> page.</p>
                </div>
                
            </div>
        </section>
        <aside class="lg:col-span-1 flex flex-wrap gap-2">
            <div 
                        v-for="(pic, index) in asideImages" 
                        :key="index"
                        class="aspect-16/10 overflow-hidden rounded-lg"
                    >
                        <img 
                            :src="pic.src"
                            :alt="pic.alt"
                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
        </aside>
    </div>
</template>