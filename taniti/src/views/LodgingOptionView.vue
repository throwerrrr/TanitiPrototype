<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import lodgingData from '@/assets/data/lodging.json';
import Hero from '@/components/Hero.vue'

const route = useRoute();
const router = useRouter();
const lodging = ref(null);

function loadLodging() {
    const found = lodgingData.find(item => item.id === route.params.id);
    if (found) {
        lodging.value = found;
    } else {
        router.push({ name: 'not-found' });
    }
}

onMounted(loadLodging);
watch(() => route.params.id, loadLodging);
</script>

<template>
    <div v-if="lodging">
        <Hero 
        :image="lodging.pictures?.[0]?.src"
        />
        <section class="p-20 w-fit font-light text-slate-800">
            <h1 class="text-3xl">{{ lodging.name }}</h1>
            <div class="p-2">
                <div class="flex flex-wrap items-center gap-2 mt-2 text-gray-600">
                    <div class="flex flex-wrap items-center gap-2 pr-4 border-r border-gray-500">
                        <span>{{ lodging.rating }}</span>
                        <span class="text-gray-300">•</span>
                        <span>{{ lodging.type }}</span>
                        <span class="text-gray-300">•</span>
                        <span class="font-medium text-emerald-600">{{ lodging.price_range }}</span>
                    </div>
                    <div class="flex flex-wrap items-center gap-2">
                        <span>{{ lodging.contact_phone }}</span>
                        <span class="text-gray-300">•</span>
                        <span>{{ lodging.contact_email }}</span>
                    </div>
                </div>
                <div class="mt-4 pt-4 border-t border-gray-200 flex text-sm text-gray-800 gap-4 justify-between">
                    <div>
                        <h3 class="font-medium text-lg">Hours: </h3>
                        <p>Mon-Fri: {{ lodging.business_hours.m_f }}</p>
                        <p>Sa-Sun: {{ lodging.business_hours.sa_su }}</p>
                        <details>
                            <summary class="font-medium py-2">Holiday Hours: </summary>
                            <ul>
                                <li>Christmas Eve: {{ lodging.business_hours.holidays.christmas_eve }}</li>
                                <li>Christmas: {{ lodging.business_hours.holidays.christmas }}</li>
                                <li>New Years Eve: {{ lodging.business_hours.holidays.new_years_eve }}</li>
                                <li>New Years: {{ lodging.business_hours.holidays.new_years }}</li>
                            </ul>
                        </details>
                    </div>
                    <div>
                        <h3 class="font-medium text-lg">Location</h3>
                        <p>Airport: {{ lodging.distance_from_airport }}</p>
                        <p>Cruise Port: {{ lodging.distance_from_port }}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="px-6 md:px-12 lg:px-20 pb-12">
            <div class="border rounded-lg p-6 md:p-10 pattern pattern-45 pattern-slate-300 pattern-sm">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    <div 
                        v-for="(pic, index) in lodging.pictures" 
                        :key="index"
                        class="aspect-16/10 overflow-hidden rounded-lg"
                    >
                    <img 
                        :src="pic.src"
                        :alt="`${lodging.name} photo ${index + 1}`"
                        class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    </div>
                </div>
            </div>
        </section>
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
</template>