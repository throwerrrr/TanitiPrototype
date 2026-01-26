<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import groceryData from '@/assets/data/dining/grocery_stores.json';
import restaurantData from '@/assets/data/dining/restaurants.json';
import Hero from '@/components/Hero.vue'

const route = useRoute();
const router = useRouter();
const dinery = ref(null);
const allDining = [...restaurantData, ...groceryData]

function loadDining() {
    const found = allDining.find(item => item.id === route.params.id)
    if (found) {
        dinery.value = found;
    } else {
        router.push({ name: 'not-found' });
    }
}
onMounted(loadDining);
watch(() => route.params.id, loadDining);
</script>

<template>
    <div v-if="dinery">
        <Hero :image="dinery.pictures?.[0]?.src"/>
        <section class="p-4 md:p-12 lg:p-20 w-fit font-light text-slate-800">
            <h1 class="text-3xl">{{ dinery.name }}</h1>
            <div class="p-2">
                <div class="flex flex-wrap items-center gap-2 mt-2 text-gray-600">
                    <div v-if="dinery.cuisine_type" class="flex flex-wrap items-center gap-2 pr-4 border-r border-gray-500">
                        <span>{{ dinery.cuisine_type }} Restaurant</span>                        
                        <span class="text-gray-300">•</span>
                        <span class="font-medium text-emerald-600">{{ dinery.price_range }}</span>
                    </div>
                    <div v-else-if="dinery.type" class="flex flex-wrap items-center gap-2 pr-4 border-r border-gray-500">
                        <span>{{ dinery.type }}</span>
                    </div>
                    <div class="flex flex-wrap items-center gap-2">
                        <span>{{ dinery.contact_phone }}</span>
                        <span class="text-gray-300">•</span>
                        <span>{{ dinery.contact_email }}</span>
                    </div>
                </div>
                <div class="mt-4 pt-4 border-t border-gray-200 flex flex-col sm:flex-row text-sm text-gray-800 gap-4 justify-between">
                    <div>
                        <h3 class="font-medium text-lg">Hours: </h3>
                        <p>Mon-Fri: {{ dinery.business_hours.m_f }}</p>
                        <p>Sa-Sun: {{ dinery.business_hours.sa_su }}</p>
                        <details>
                            <summary class="font-medium py-2">Holiday Hours: </summary>
                            <ul>
                                <li>Christmas Eve: {{ dinery.business_hours.holidays.christmas_eve }}</li>
                                <li>Christmas: {{ dinery.business_hours.holidays.christmas }}</li>
                                <li>New Years Eve: {{ dinery.business_hours.holidays.new_years_eve }}</li>
                                <li>New Years: {{ dinery.business_hours.holidays.new_years }}</li>
                            </ul>
                        </details>
                    </div>
                    <div>
                        <h3 class="font-medium text-lg">Location</h3>
                        <p>Airport: {{ dinery.distance_from_airport }}</p>
                        <p>Cruise Port: {{ dinery.distance_from_port }}</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="px-6 md:px-12 lg:px-20 pb-12">
            <div class="border rounded-lg p-6 md:p-10 pattern pattern-45 pattern-slate-300 pattern-sm">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    <div 
                        v-for="(pic, index) in dinery.pictures" 
                        :key="index"
                        class="aspect-16/10 overflow-hidden rounded-lg"
                    >
                        <img 
                            :src="pic.src"
                            :alt="`${dinery.name} photo ${index + 1}`"
                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
            </div>
        </section>
    </div>

</template>