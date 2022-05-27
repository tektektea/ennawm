<template>
    <BackendLayout #page>
        <div class="q-pa-md">
            <p class="my-title">Edit Privacy policy</p>
            <q-editor
                v-model="editor"
                :definitions="{
        bold: {label: 'Bold', icon: null, tip: 'My bold tooltip'}}" class="w-full"
            />
            <div class="w-full mt-4">
                <q-btn class="sized-btn" color="primary" label="Update" rounded @click="submit"/>
            </div>
        </div>

    </BackendLayout>

</template>
<script setup>
import {ref} from "vue";
import {Inertia} from "@inertiajs/inertia";
import {useQuasar} from "quasar";
import {usePage} from "@inertiajs/inertia-vue3";
import BackendLayout from "../../../layouts/BackendLayout.vue";

const props = defineProps({
    data: Object,
    flash:Object
});
const q = useQuasar();
const editor = ref(props.data.content);
const submit = e => {
    Inertia.put(route('web-resource.update', props.data.type), {
        content: editor.value
    }, {
        onSuccess: () => q.notify({type: 'positive', message: usePage().props.value?.flash?.success || 'Success'}),
        onError: () => q.notify({
            type: 'negative',
            message: usePage().props.value?.flash?.error || 'Something went wrong! Please try again'
        }),
    })
}

</script>
