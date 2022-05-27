<template>
    <BackendLayout #page>
        <div class="flex justify-between items-center p-6">
            <div class="my-title">Term and Conditions</div>
            <q-btn :href="route('web-resource.edit',data.type)" flat icon="edit" round/>
        </div>
        <q-separator class="w-full my-8"/>
        <div class="p-6" v-html="data.content">

        </div>
    </BackendLayout>

</template>
<script setup>
import BackendLayout from "../../../layouts/BackendLayout.vue";
export default {
    components: {BackendLayout}
}
const props=defineProps({
    data:Object
})
const {data} = props;

</script>
