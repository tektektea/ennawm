<template>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-2 m-6">
        <div v-for="(item,index) in videos" :key="index" class="bg-primary h-64 shadow-md rounded-t-lg">
            <img :src="item.poster_url" class="rounded-t-lg w-fit"/>
            <div class="p-8">
                <p class="text-sm font-light">{{item?.title}}</p>
                <p class="text-sm font-light">Rs {{item.price}}</p>
                <q-btn :href="route('video.show',{id:item.id})" color="accent"  label="Play"/>
            </div>

        </div>
    </div>
</template>
<script setup>
import {defineProps} from "vue";

defineProps({
    videos:Array
})
</script>
