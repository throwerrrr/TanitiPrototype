<script setup>
import { RouterLink } from 'vue-router';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/things-to-do', label: 'Things To Do' },
  { to: '/places-to-stay', label: 'Places to Stay' },
  { to: '/getting-around', label: 'Getting Around' },
  { to: '/dining', label: 'Dining' },
  { to: '/travel-info', label: 'Travel Info' },
  { to: '/about', label: 'About Taniti' },
];
</script>

<template>
    <section class="h-58 bg-gray-800">
        <div class="flex flex-wrap px-20 py-20 justify-between">
            <p class="text-white text-xs p-2">
                2026 Taniti Island. All pictures are sourced from <a href="https://www.pexels.com/" target="_blank" rel="noreferrer" class="hover:text-yellow-500 underline">Pexels</a>.
            </p>
            <div class="text-white text-xs py-2">
                <RouterLink
                v-for="item in navItems"
                :to="item.to"
                class="p-2 hover:text-gray-300"
                >
                {{ item.label }}
                </RouterLink>
            </div>
        </div>
    </section>
</template>