<script setup>
import Hero from '@/components/Hero.vue';
import ImageCard from '../components/ImageCard.vue';

const imageCards = [
    {
        img: "https://images.pexels.com/photos/30267630/pexels-photo-30267630.jpeg",
        navLink: "/things-to-do",
        label: "Things to Do"
         
    },
    {
        img: "https://images.pexels.com/photos/5371573/pexels-photo-5371573.jpeg",
        navLink: "/places-to-stay",
        label: "Places to Stay"
         
    },
    {
        img: "https://images.pexels.com/photos/32568165/pexels-photo-32568165.jpeg",
        navLink: "/dining",
        label: "Dining"
         
    },
    {
        img: "https://images.pexels.com/photos/6942671/pexels-photo-6942671.jpeg",
        navLink: "/travel-info",
        label: "Travel Info"
         
    }
]
</script>

<template>
    <Hero 
        image="https://images.pexels.com/photos/1266831/pexels-photo-1266831.jpeg" 
        title="Taniti Island"
        subtitle="Find your paradise on the small pacific island of Taniti."
        />

    <div class="grid grid-cols-1 sm:grid-cols-2 py-10 px-4 md:py-16 md:px-12 lg:py-20 lg:px-30 gap-y-8 gap-x-6 md:gap-y-15 md:gap-x-10">
        <ImageCard 
            v-for="item in imageCards"
            :image="item.img"
            :navLink="item.navLink"
            :label="item.label"
        />
    </div>
</template>