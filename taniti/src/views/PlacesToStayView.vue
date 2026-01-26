<script setup>
import { ref, computed } from 'vue';
import Hero from '@/components/Hero.vue';
import LabeledImageCard from '@/components/LabeledImageCard.vue';
import lodgingData from '@/assets/data/lodging.json';

const itemsPerPage = 6;
const currentPage = ref(0);

const totalPages = computed(() => Math.ceil(lodgingData.length / itemsPerPage));

const visibleLodging = computed(() => {
    const start = currentPage.value * itemsPerPage;
    return lodgingData.slice(start, start + itemsPerPage);
});

const canGoPrev = computed(() => currentPage.value > 0);
const canGoNext = computed(() => currentPage.value < totalPages.value - 1);

function prevPage() {
    if (canGoPrev.value) currentPage.value--;
}

function nextPage() {
    if (canGoNext.value) currentPage.value++;
}
</script>

<template>
<Hero image="https://images.pexels.com/photos/12391805/pexels-photo-12391805.jpeg"/>
<section class="px-4 py-6 md:px-12 md:py-8 lg:px-20 lg:py-10">
    <div>
        <h1 class="text-2xl font-light">Guide to Locations in Taniti</h1>
        <div class="py-4">
            <h3 class="text-lg font-light">Taniti City</h3>
            <p>Explore the native architecture and white sandy beaches in walkable Taniti City.</p>
        </div>
        <div class="py-4">
            <h3 class="text-lg font-light">Merriton Landing</h3>
            <p>A rapidly developing area on the north side of Yellow Leaf Bay. Easily explored on foot and very tourist friendly!</p>
        </div>
    </div>
</section>
<section class="px-4 py-6 md:px-12 md:py-8 lg:px-20 lg:py-10">
    <div class="p-4 md:p-10 border border-gray-700 rounded-lg
    pattern pattern-slate-300 pattern-sm pattern-neg45">
        <div class="flex items-center justify-between">
            <h1 class="text-2xl font-light">Explore your options</h1>
            <div class="flex items-center gap-2">
                <span class="text-sm text-gray-500">{{ currentPage + 1 }} / {{ totalPages }}</span>
                <button 
                    @click="prevPage" 
                    :disabled="!canGoPrev"
                    class="p-2 rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    aria-label="Previous page"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button 
                    @click="nextPage" 
                    :disabled="!canGoNext"
                    class="p-2 rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    aria-label="Next page"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
        <div class="
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 
        mt-6">
            <LabeledImageCard 
                v-for="lodge in visibleLodging"
                :key="lodge.id"
                :image="lodge.pictures?.[0]?.src"
                :navLink="`/places-to-stay/${lodge.id}`"
                :label="lodge.name"
                :dollarSigns="lodge.price_range"
                class="border border-gray-800"
            />
        </div>
    </div>
</section>
</template>