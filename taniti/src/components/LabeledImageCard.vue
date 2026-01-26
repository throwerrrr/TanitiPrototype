<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    image: {
        type: String,
        required: true
    },
    navLink: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    dollarSigns: {
        type: String,
        default: 0,
    }
})
</script>

<template>
    <RouterLink 
        :to="navLink" 
        class="block overflow-hidden rounded-lg group"
    >
        <div class="relative w-full h-48 overflow-hidden ">
            <img 
                :src="image" 
                :alt="label" 
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
        </div>
        
        <div class="flex items-center justify-between px-4 py-4 bg-white">
            <span class="text-gray-800 font-medium text-left px-2">
                {{ label }}
            </span>
            <span class="text-gray-400 font-medium px-2">
                {{ dollarSigns }}
            </span>
        </div>
    </RouterLink>
</template>
