<script setup>
import Hero from '@/components/Hero.vue';
const faqs = [
    {
        "question": "What type of power outlets does Taniti use?",
        "answer": "Power outlets are 120 volts (the same as in the United States)."
    },
    {
        "question": "During what hours is alcohol sold in Taniti?",
        "answer": "Alcohol is not allowed to be served or sold between the hours of midnight and 9:00 AM."
    },
    {
        "question": "What is the drinking age on Taniti?",
        "answer": "The drinking age on Taniti is 18, though it is not strictly enforced."
    },
    {
        "question": "Is English widely spoken on Taniti?",
        "answer": "Many younger Tanitians speak fluent English, but very little English is spoken in rural areas, especially by older residents."
    },
    {
        "question": "What medical facilities are available on Taniti?",
        "answer": "Taniti has one hospital and several clinics. The hospital has many multilingual employees to assist international visitors."
    },
    {
        "question": "Is Taniti safe for tourists?",
        "answer": "Violent crime is very rare on Taniti. However, as tourism increases, there are more reports of pickpocketing and other petty crimes, so visitors should remain aware of their belongings."
    },
    {
        "question": "Are businesses open on holidays?",
        "answer": "Taniti enjoys a large number of national holidays, and many tourist attractions and restaurants will be closed on these days. Visitors should plan accordingly."
    },
    {
        "question": "What currency is used on Taniti?",
        "answer": "Taniti uses the U.S. dollar as its currency, but many businesses will also accept euros and yen. Several banks facilitate currency exchange, and many businesses accept major credit cards."
    }
]
</script>

<template>
    <Hero image="https://images.pexels.com/photos/3155645/pexels-photo-3155645.jpeg"/>
    <section class="p-20">
        <h1 class="text-2xl py-8">Frequently Asked Questions</h1>
        <div class="grid grid-cols-2">
            <details v-for="faq in faqs" class="m-4 rounded-lg text-gray-800">
                <summary class="bg-gray-300 rounded-lg p-8 font-medium text-md">{{ faq.question }}</summary>
                <div class="p-4">
                    <p>{{ faq.answer }}</p>
                </div>
                
            </details>
        </div>
    </section>
</template>