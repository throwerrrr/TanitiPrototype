<script setup>
const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    subtitle: {
        type: String,
        default: ''
    },
    image: {
        type: String,
    },
    caption: {
        type: String,
        default: 'Image sourced from: pexels.com'
    }
});
</script>

<template>
    <section class='h-96 bg-cover bg-center bg-no-repeat' 
            :style="{ backgroundImage: 'url(' + image + ')' }"
    >
    <div class="w-full h-full bg-black/55 py-30">
        <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
        >
        <div class="text-center">
            <h1 class="text-6xl font-serif font-semibold text-white">
            {{ title }}
            </h1>
            <p class="my-4 font-light italic text-white">
            {{ subtitle }}
            </p>
        </div>
        <div>
            <p class="my-4 font-light italic text-xs text-white/40">
            {{ caption }}
            </p>
        </div>
        </div>
    </div>
</section>
</template>