<script setup>
const props = defineProps({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    contactPhone: {
        type: String,
        default: ''
    },
    contactEmail: {
        type: String,
        default: ''
    },
    businessHours: {
        type: Object,
        default: () => ({})
    },
    distanceFromAirport: {
        type: String,
        default: ''
    },
    distanceFromPort: {
        type: String,
        default: ''
    },
    pictures: {
        type: Array,
        default: () => []
    }
})

const mainImage = props.pictures?.[0]?.src || 'https://images.pexels.com/photos/2404370/pexels-photo-2404370.jpeg';
</script>

<template>
    <article class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div class="relative h-48 overflow-hidden">
            <img 
                :src="mainImage" 
                :alt="props.name"
                class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <span class="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {{ props.category }}
            </span>
        </div>

        
        <div class="p-5">
        
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ props.name }}</h3>
            <p class="text-gray-600 text-sm mb-4 line-clamp-2">{{ props.description }}</p>

        
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        
                <div class="space-y-2">
                    <h4 class="font-semibold text-gray-800 flex items-center gap-2">
                        Contact
                    </h4>
                    <p v-if="props.contactPhone" class="text-gray-600">{{ props.contactPhone }}</p>
                    <a 
                        v-if="props.contactEmail" 
                        :href="`mailto:${props.contactEmail}`"
                        class="text-emerald-600 hover:text-emerald-700 hover:underline block truncate"
                    >
                        {{ props.contactEmail }}
                    </a>
                </div>

                <div class="space-y-2">
                    <h4 class="font-semibold text-gray-800 flex items-center gap-2">
                        Location
                    </h4>
                    <p v-if="props.distanceFromAirport" class="text-gray-600">
                        <span class="font-medium">Airport:</span> {{ props.distanceFromAirport }}
                    </p>
                    <p v-if="props.distanceFromPort" class="text-gray-600">
                        <span class="font-medium">Cruise Port:</span> {{ props.distanceFromPort }}
                    </p>
                </div>
            </div>

            <div v-if="props.businessHours && Object.keys(props.businessHours).length" class="mt-4 pt-4 border-t border-gray-100">
                <h4 class="font-semibold text-gray-800 flex items-center gap-2 mb-2">
                    Hours
                </h4>
                <div class="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-600">
                    <p v-if="props.businessHours['M-F']">
                        <span class="font-medium">Mon-Fri:</span> {{ props.businessHours['M-F'] }}
                    </p>
                    <p v-if="props.businessHours['Sa-Su']">
                        <span class="font-medium">Sat-Sun:</span> {{ props.businessHours['Sa-Su'] }}
                    </p>
                </div>
            </div>
        </div>
    </article>
</template>