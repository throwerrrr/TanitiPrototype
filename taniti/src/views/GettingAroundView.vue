<script setup>
import Hero from '@/components/Hero.vue'
</script>

<template>
    <Hero image="https://images.pexels.com/photos/6307071/pexels-photo-6307071.jpeg"/>
    <section class="py-6 px-4 md:py-8 md:px-12 lg:py-10 lg:px-20">
        <details>
            <summary class="py-6 px-4 md:py-8 md:px-6 bg-gray-300 rounded-lg text-xl md:text-2xl font-medium text-slate-900">Arriving in Taniti</summary>
            <div class="flex flex-col md:flex-row gap-6 md:gap-8 p-4">
                <div class="font-light">
                    <h3 class="text-lg font-medium py-2">By Cruise Ship</h3>
                    <p>A small cruise ship docks in Yellow Leaf Bay once per week, offering visitors a unique arrival experience with stunning views of Taniti's coastline. The ship stays overnight, allowing passengers to disembark and begin exploring the island. The harbor is conveniently located near Taniti City, putting you within easy reach of beaches, dining, and cultural attractions.
                    </p>
                </div>
                <div class="font-light">
                    <h3 class="text-lg font-medium py-2">By Air</h3>
                    <p>Most visitors arrive at Taniti's small airport, which currently accommodates small jets and propeller planes. The airport is conveniently located with easy access to rental cars and ground transportation. An expansion project is underway to allow larger jets to land within the next few years, making Taniti even more accessible to international travelers.</p>
                </div>
            </div>
        </details>
    </section>

    <section class="py-6 px-4 md:py-8 md:px-12 lg:py-10 lg:px-20">
        <details>
            <summary class="py-6 px-4 md:py-8 md:px-6 bg-gray-300 rounded-lg text-xl md:text-2xl font-medium text-slate-900">Public Transportation</summary>
            <div class="flex flex-col md:flex-row gap-6 md:gap-8 p-4">
                <div class="font-light">
                    <h3 class="text-lg font-medium py-2">Public Buses</h3>
                    <p>Public buses provide reliable service throughout Taniti City, operating daily from 5:00 AM to 11:00 PM. These buses are an affordable way to navigate the city and access nearby beaches around Yellow Leaf Bay. Routes connect major tourist areas, lodging, and attractions within the city limits.</p>
                </div>
                <div class="font-light">
                    <h3 class="text-lg font-medium">Private Buses</h3>
                    <p>Private bus services cover the rest of the island beyond Taniti City, including routes to the rainforest, volcano viewing areas, and other remote attractions. These buses operate on set schedules and provide comfortable transportation for day trips and sightseeing excursions to Taniti's natural wonders.</p>
                </div>
            </div>
        </details>
    </section>

    <section class="py-6 px-4 md:py-8 md:px-12 lg:py-10 lg:px-20">
        <details>
            <summary class="py-6 px-4 md:py-8 md:px-6 bg-gray-300 rounded-lg text-xl md:text-2xl font-medium text-slate-900">Rentals & Taxis</summary>
            <div class="flex flex-col md:flex-row flex-wrap gap-6 md:gap-8 p-4">
                <div class="font-light md:flex-1 md:min-w-[250px]">
                    <h3 class="text-lg font-medium py-2">Rental Cars</h3>
                    <p>A local rental agency located near the airport offers rental cars for visitors who want the freedom to explore Taniti at their own pace. Having a car is particularly useful for reaching the rainforest trails, volcano viewing points, and other attractions outside of Taniti City and Merriton Landing.</p>
                </div>
                <div class="font-light md:flex-1 md:min-w-[250px]">
                    <h3 class="text-lg font-medium py-2">Bikes</h3>
                    <p>Bike rentals are available from several vendors throughout the island, offering an eco-friendly way to explore Taniti's relatively flat terrain. Helmets are included with all rentals and are required by law. Biking is especially popular in Taniti City and around Merriton Landing, where the flat landscape makes cycling comfortable and enjoyable.</p>
                </div>
                <div class="font-light md:flex-1 md:min-w-[250px]">
                    <h3 class="text-lg font-medium py-2">Taxis</h3>
                    <p>Taxis are readily available in Taniti City for convenient point-to-point transportation. They're ideal for evening outings, trips to restaurants and entertainment venues, or when you're carrying beach gear and don't want to walk. Taxi service may be limited in more remote areas of the island.</p>
                </div>
            </div>
        </details>
    </section>

    <section class="py-6 px-4 md:py-8 md:px-12 lg:py-10 lg:px-20">
        <details>
            <summary class="py-6 px-4 md:py-8 md:px-6 bg-gray-300 rounded-lg text-xl md:text-2xl font-medium text-slate-900">Walking</summary>
            <div class="flex flex-col md:flex-row gap-6 md:gap-8 p-4">
                <div class="font-light">
                    <h3 class="text-lg font-medium py-2">Taniti City</h3>
                    <p>Taniti City is notably flat and very walkable, making it easy to explore on foot. The city's native architecture, sandy beaches encircling Yellow Leaf Bay, restaurants, shops, and cultural attractions are all within comfortable walking distance of most hotels and lodging. Strolling through the city is one of the best ways to experience local culture and discover hidden gems.</p>
                </div>
                <div class="font-light">
                    <h3 class="text-lg font-medium py-2">Merriton Landing</h3>
                    <p>The rapidly developing area of Merriton Landing on the north side of Yellow Leaf Bay is designed for pedestrian exploration. Many tourists choose to stay in this area specifically because it's easy to walk to the growing collection of entertainment venues, including restaurants, pubs, the new dance club, arcade, bowling alley, and art galleries. The compact layout makes car-free exploration simple and enjoyable.</p>
                </div>
            </div>
        </details>
    </section>
</template>