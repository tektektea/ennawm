<template>
    <q-carousel
        v-model="slide"
        transition-prev="jump-right"
        transition-next="jump-left"
        swipeable
        animated
        control-color="white"
        prev-icon="arrow_left"
        next-icon="arrow_right"
        navigation-icon="radio_button_unchecked"
        navigation
        padding
        arrows
        class="bg-transparent q-pa-none q-ma-none"
    >
        <q-carousel-slide v-for="(item,i) in videos"
                          :key="i"
                          :name="i"
                          class="q-ma-none q-pa-none column no-wrap flex-center">
            <div class="relative w-full h-full">
                <YouTube
                    :width="width"
                    class="w-full h-fit"
                    :src="item.trailer_url"
                     />
                <div class="p-4 ml-24 absolute top-1/2">
                    <q-btn v-if="authenticated" :href="route('video.show',item.id)" class="w-24" color="accent" label="Play" icon="play_arrow"/>
                    <q-btn v-else :href="route('video.create',item.id)" class="w-24" color="accent" :label="'Rent : Rs '+item.price" icon="play_arrow"/>
                    <div class="mt-2 p-2 bg-secondary text-md font-bold text-gray-50">{{item?.title}}</div>
                    <div class="mt-2 p-2 bg-secondary text-md font-bold text-gray-50">Amount Rs.{{item?.price}}</div>
                    <div class="mt-2 p-2 bg-secondary text-sm font-semibold text-gray-50">{{item?.description}}</div>

                </div>
            </div>
        </q-carousel-slide>

    </q-carousel>
</template>

<script setup>
import {computed, ref} from "vue";
import YouTube from 'vue3-youtube'
import {useQuasar} from "quasar";
import {usePage} from "@inertiajs/inertia-vue3";

defineProps({
    videos:Array
})
const q = useQuasar();
const lorem=ref('fadfasdf')
const slide = ref(0);
const width=computed(()=>q.screen.width-8)
const height=computed(()=>q.screen.height/2)
const authenticated=computed(()=>!!usePage().props.value?.user)
</script>
<style>
.q-carousel__slide{
    padding: 0 !important;
}
</style>
