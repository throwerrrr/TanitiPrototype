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
    }
})
</script>

<template>
    <RouterLink 
        :to="navLink" 
        class="relative block w-full h-56 overflow-hidden rounded-lg group"
    >
        <img 
            :src="image" 
            :alt="label" 
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        <div class="absolute inset-0 bg-black/40"></div>
        
        <span class="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold">
            {{ label }}
        </span>
    </RouterLink>
</template>