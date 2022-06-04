
<template>
        <q-layout @scroll="onScroll" view="hHh lpR fff">

            <q-header  :class="headerClass">
                <q-toolbar style="height: 70px">
                   <authenticated-toolbar/>
                </q-toolbar>
            </q-header>

            <q-page-container>
                <slot name="content"></slot>
            </q-page-container>

            <q-footer elevated class="bg-grey-8 text-white">
                <q-toolbar>
                    <q-toolbar-title>
                        <q-avatar>
                            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                        </q-avatar>
                        <div>Title</div>
                    </q-toolbar-title>
                </q-toolbar>
            </q-footer>

        </q-layout>

</template>
<script setup>
import AuthenticatedToolbar from "../components/AuthenticatedToolbar.vue";
import {computed, ref, watch} from "vue";
import {usePage} from "@inertiajs/inertia-vue3";
const {ziggy}=defineProps({ziggy:Object})
const click=e=>{
    console.log("test ", ziggy);
}
const success=computed(()=>usePage().props.value?.success)
const error=computed(()=>usePage().props.value?.error)
const position = ref(0);
const headerClass=computed(()=>position.value===0?['bg-transparent' ,'text-gray-100', 'font-semibold']:['bg-primary', 'shadow-md' ,'text-gray-100', 'font-semibold'])

watch(success,(newVal,oldValue)=>{
    console.log("New val "+newVal)
    if (oldValue !== newVal) {
        !!newVal && q.notify({type:'positive',message:newVal});
    }
})
watch(error,(newVal,oldValue)=>{
    console.log("New val "+newVal)
    if (oldValue !== newVal) {
        !!newVal && q.notify({type:'negative',message:newVal});
    }
})
const onScroll=val=>{
    console.log(val);
    position.value = val.position;
}
</script>
