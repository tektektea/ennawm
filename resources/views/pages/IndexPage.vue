<template>
    <FrontLayout>
        <template #content>
            <div class="flex flex-col">
                <div class="w-full">
                    <FeatureVideos :videos="$page.props.features"/>
                </div>
                <div class="container mx-auto my-6 text-white">
                    <VideoList :videos="$page.props.videos"/>
                </div>
                <div class="container mx-auto my-6 text-white">
                    <FaqComponent/>
                </div>
                <div class="container mx-auto my-6">
                    <DownloadAppComponent/>
                </div>
            </div>

        </template>
    </FrontLayout>
</template>
<script setup>
import FrontLayout from "../layouts/FrontLayout.vue";
import FaqComponent from "../components/FaqComponent.vue";
import DownloadAppComponent from "../components/DownloadAppComponent.vue";
import FeatureVideos from "../components/FeatureVideos.vue";
import VideoList from "../components/VideoList.vue";


</script>
