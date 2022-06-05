<template>
    <q-layout view="hHh lpR fFf">

        <q-header  elevated class="bg-primary text-white">
            <q-toolbar style="height: 70px">
                <authenticated-toolbar/>
            </q-toolbar>
        </q-header>

        <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
            <SideBar/>
        </q-drawer>

        <q-page-container class="bg-gray-100">
            <slot name="content"></slot>
        </q-page-container>

    </q-layout>
</template>

<script>
import { ref } from 'vue'
import SideBar from "../components/SideBar.vue";
import AuthenticatedToolbar from "../components/AuthenticatedToolbar.vue";

export default {
    components: {AuthenticatedToolbar, SideBar},
    setup () {
        const leftDrawerOpen = ref(false)

        return {
            leftDrawerOpen,
            toggleLeftDrawer () {
                leftDrawerOpen.value = !leftDrawerOpen.value
            }
        }
    }
}
</script>
