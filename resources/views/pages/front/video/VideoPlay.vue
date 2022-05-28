<template>
    <FrontLayout>
        <template #content>
            <q-page class="bg-secondary">
                <div class="font-semibold text-lg text-gray-100">{{video?.title}}</div>
                <div :style="boxStyle" id="embedBox">
                </div>

            </q-page>
        </template>
    </FrontLayout>

</template>
<script setup>
import {computed, onMounted} from "vue";
import FrontLayout from "../../../layouts/FrontLayout.vue";
import {useQuasar} from "quasar";
import {usePage} from "@inertiajs/inertia-vue3";
const props=defineProps({
    video:Object,
    otp:String,
    playbackInfo: String
})
const q = useQuasar();

onMounted(()=>{
    const message = usePage().props.value?.error;
    message && q.notify({type:'negative',message:message || 'Something went wrong'})
    var video = new VdoPlayer({
        otp: props.otp,
        playbackInfo: props.playbackInfo,
        theme: "9ae8bbe8dd964ddc9bdb932cca1cb59a",
        // the container can be any DOM element on website
        container: document.querySelector("#embedBox"),
    });

// you can directly call any methods of VdoPlayer class from here. e.g:
// video.addEventListener(`load`, () => {
//   video.play(); // this will auto-start the video
//   console.log('loaded');
// });
})


const boxStyle=computed(()=>({
    width:q.screen.width,
    height:q.screen.height
}))


</script>
