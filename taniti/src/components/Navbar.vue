<script setup>
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import logo from '@/assets/logo.png';

// Reactive state for mobile menu toggle
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};

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
  <nav class="bg-teal-700">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <!-- Logo -->
        <RouterLink class="flex shrink-0 items-center" to="/">
          <img class="h-10 w-auto" :src="logo" alt="Taniti" />
          <span class="hidden sm:block text-white text-2xl ml-2 font-semibold italic">Visit Taniti</span>
        </RouterLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex lg:items-center lg:space-x-2">
          <RouterLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            :class="[
              isActiveLink(item.to)
                ? 'bg-teal-800'
                : 'hover:bg-teal-900 hover:text-white',
              'text-white',
              'px-3',
              'py-2',
              'rounded-md',
              'uppercase',
              'text-sm',
              'lg:text-base',
              'whitespace-nowrap',
              'font-medium'              
            ]"
          >
            {{ item.label }}
          </RouterLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          type="button"
          class="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          :aria-expanded="isMobileMenuOpen"
          aria-controls="mobile-menu"
        >
          <span class="sr-only">Open main menu</span>
          <!-- Hamburger icon -->
          <svg
            v-if="!isMobileMenuOpen"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <!-- Close (X) icon -->
          <svg
            v-else
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Collapsible Mobile Menu Panel -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <div
        v-show="isMobileMenuOpen"
        id="mobile-menu"
        class="lg:hidden border-t border-teal-600"
      >
        <div class="space-y-1 px-4 pb-4 pt-2">
          <RouterLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            @click="closeMobileMenu"
            :class="[
              isActiveLink(item.to)
                ? 'bg-teal-800'
                : 'hover:bg-teal-900',
              'text-white',
              'block',
              'px-3',
              'py-3',
              'rounded-md',
              'uppercase',
              'text-base',
              'font-medium'
            ]"
          >
            {{ item.label }}
          </RouterLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>