<script setup>
import Hero from '@/components/Hero.vue';
import ImageCard from '@/components/ImageCard.vue';

const activityGroups = [
    {
        img: "https://images.pexels.com/photos/2404370/pexels-photo-2404370.jpeg",
        navLink: "/things-to-do/water-beach",
        label: "Water & Beach"
         
    },
    {
        img: "https://images.pexels.com/photos/1486842/pexels-photo-1486842.jpeg",
        navLink: "/things-to-do/adventure-nature",
        label: "Adventure & Nature"
         
    },
    {
        img: "https://images.pexels.com/photos/11489976/pexels-photo-11489976.jpeg",
        navLink: "/things-to-do/arts-culture",
        label: "Arts & Culture"
         
    },
    {
        img: "https://images.pexels.com/photos/9005505/pexels-photo-9005505.jpeg",
        navLink: "/things-to-do/nightlife-entertainment",
        label: "Nightlife & Entertainment"
    }
]
</script>

<template>
    <Hero 
    image="https://images.pexels.com/photos/30267630/pexels-photo-30267630.jpeg"
    />
    <section>
        <div class="grid grid-cols-1 py-20 px-30 gap-y-15 gap-x-10">
        <ImageCard 
            v-for="item in activityGroups"
            :image="item.img"
            :navLink="item.navLink"
            :label="item.label"
        />
    </div>
    </section>
</template>