
<template>
        <q-layout @scroll="onScroll" view="hHh lpR fFf">

            <q-header  :class="headerClass">
                <q-toolbar style="height: 70px">
                   <authenticated-toolbar/>
                </q-toolbar>
            </q-header>

            <q-page-container class="md:container mx-auto">
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
import {computed, ref} from "vue";
const {ziggy}=defineProps({ziggy:Object})
const click=e=>{
    console.log("test ", ziggy);
}
const position = ref(0);
const headerClass=computed(()=>position.value===0?['bg-transparent' ,'text-gray-100', 'font-semibold']:['bg-primary', 'shadow-md' ,'text-gray-100', 'font-semibold'])

const onScroll=val=>{
    console.log(val);
    position.value = val.position;
}
</script>
