<template>
    <FrontLayout>
        <template #content>
            <q-page>
                <div class="flex justify-between items-center p-6">
                    <div>
                        <p class="text-lg font-semibold text-gray-100">Free Videos</p>
                        <p class="text-sm font-light text-gray-200">You can search a free videos here</p>
                    </div>
                    <div>
                        <q-input model-value="search"
                                 class="bg-gray-300 rounded"
                                 dense
                                 placeholder="Search"
                                 outlined/>
                    </div>

                </div>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
                    <div v-for="(item,i) in $page.props.list.data" :key="i" class="relative">
                        <YouTube
                            class="w-full h-fit"
                            :src="item.trailer_url"
                        />
                        <q-btn class="top-1/2 left-1/2" color="accent" label="play"/>

                    </div>
                </div>


            </q-page>
        </template>
    </FrontLayout>
</template>
<script setup>
import {ref} from 'vue';
import FrontLayout from "../../layouts/FrontLayout.vue";

defineProps({
    list:Object
})
const search = ref('');


</script>
