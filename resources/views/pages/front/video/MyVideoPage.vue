<template>
    <FrontLayout>
        <template #content>
            <q-page class="md:container mx-auto">
                <p class="text-2xl text-gray-50">My rented videos</p>
                <br/>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-2 m-6">
                    <div v-for="(item,index) in videos" :key="index" class="relative-position bg-primary shadow-md rounded-t-lg">

                        <q-chip v-if="item.expired" class="absolute top-0 right-0 p-6 bg-negative text-white" label="Expired"></q-chip>

                        <img :src="item.poster_url" class="h-64 rounded-t-lg w-fit"/>

                        <div class="p-8">
                            <p class="text-sm text-gray-50 font-light">{{item?.title}}</p>
                            <p class="text-sm text-gray-50 font-light">Rs {{item.price}}</p>
                            <q-btn v-if="item?.expired" :href="route('rent.create',{id:item.id})" color="accent"  label="Rent"/>
                            <q-btn v-else :href="route('video.show',{id:item.id})" color="accent"  label="Play"/>
                        </div>

                    </div>
                </div>
            </q-page>

        </template>
    </FrontLayout>
</template>
<script setup>
import FrontLayout from "../../../layouts/FrontLayout.vue";
import {defineProps} from "vue";

defineProps({
    videos:Array
})
</script>
