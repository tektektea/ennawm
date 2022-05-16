<template>
    <FrontLayout>
        <template #content>
            <div class="">
               <HeroSlideComponent/>
            </div>
            <div class="my-6">
                <FeatureComponent/>
            </div>
            <div class="my-6">
                <FaqComponent/>
            </div>
            <div class="my-6">
                <DownloadAppComponent/>
            </div>
        </template>
    </FrontLayout>
</template>
<script setup>
import FrontLayout from "../layouts/FrontLayout.vue";
import FeatureComponent from "../components/FeatureComponent.vue";
import FaqComponent from "../components/FaqComponent.vue";
import DownloadAppComponent from "../components/DownloadAppComponent.vue";
import HeroSlideComponent from "../components/HeroSlideComponent.vue";
</script>
