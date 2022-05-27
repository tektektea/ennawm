<template>
    <FrontLayout>
        <template #content>
            <q-page class="bg-secondary">
                <div>{{JSON.stringify(props.video)}}</div>
                <div id="embedBox">
                </div>
                <div>{{props.otp}}</div>
                <div>{{props.playbackInfo}}</div>
            </q-page>
        </template>
    </FrontLayout>

</template>
<script setup>
import {onMounted} from "vue";
import FrontLayout from "../../../layouts/FrontLayout.vue";
const props=defineProps({
    video:Object,
    otp:String,
    playbackInfo: String
})

onMounted(()=>{
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


</script>
