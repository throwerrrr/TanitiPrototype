<script setup>
import Hero from '@/components/Hero.vue';
import LabeledImageCard from '@/components/LabeledImageCard.vue';
import restaurantsData from '@/assets/data/dining/restaurants.json';
import groceryData from '@/assets/data/dining/grocery_stores.json';
</script>

<template>
<Hero image="https://images.pexels.com/photos/32568165/pexels-photo-32568165.jpeg"/>

<section class="px-20 py-10">
    <div>
        <h1 class="text-2xl font-light">Restaurants</h1>
        <div class="
        border p-8 rounded-lg
        pattern pattern-slate-400 pattern-sm pattern-neg45
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <LabeledImageCard 
                v-for="restaurant in restaurantsData"
                :key="restaurant.id"
                :image="restaurant.pictures?.[0]?.src"
                :navLink="`/dining/${restaurant.id}`"
                :label="restaurant.name"
                :dollarSigns="restaurant.price_range"
                class="border"
            />
        </div>
    </div>
</section>

<section class="px-20 py-10">
    <div>
        <h1 class="text-2xl font-light">Grocery Stores</h1>
        <div class="border p-8 rounded-lg pattern pattern-slate-400 pattern-sm pattern-neg45 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <LabeledImageCard 
                v-for="store in groceryData"
                :key="store.id"
                :image="store.pictures?.[0]?.src"
                :navLink="`/dining/${store.id}`"
                :label="store.name"
                :dollarSigns="store.type"
                class="border"
            />
        </div>
    </div>
</section>
</template>