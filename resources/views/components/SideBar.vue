<template>
    <div>

        <q-list>
            <q-expansion-item
                v-for="(menu,index) in menus"
                :key="index"
                class="text-gray-500 text-lg"
                :label="menu.label"
                :expand-icon="menu.hasOwnProperty('children')? 'chevron_right':null"
                default-opened>

                <template v-if="menu.hasOwnProperty('children')">
                    <q-item clickable dense v-for="item in menu.children">
                        <q-item-section avatar>
                            <q-avatar>
                                <q-icon :name="item.icon"/>
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label class="text-gray-500 text-sm">{{item.label}}</q-item-label>
                        </q-item-section>
                    </q-item>
                </template>

            </q-expansion-item>
        </q-list>
    </div>

</template>
<script setup>
import {ref} from 'vue';
import BackendLayout from "../layouts/BackendLayout.vue";
defineProps({
    menu:Object
})
const menus=ref([
    {route:'admin.dashboard',label:'Dashboard',icon:'o_dashboard'},
    {route:'admin.dashboard',label:'Manage contents',icon:'o_person',
        children:[
            {label:'Videos',icon:'manage_accounts'},
            {label:'Refunds',icon:'article'}
        ]
    },
    {route:'admin.dashboard',label:'Rental',icon:'o_person',
        children:[
            {label:'Payments',icon:'manage_accounts'},
            {label:'Refunds',icon:'article'}
        ]
    },
    {route:'admin.dashboard',label:'Accounting',icon:'o_person',
        children:[
            {label:'Payments',icon:'manage_accounts'},
            {label:'Refunds',icon:'article'}
        ]
    },
    {route:'admin.dashboard',label:'Administrator',icon:'o_person',
        children:[
            {label:'Account',icon:'manage_accounts'},
            {label:'Term and condition',icon:'note_alt'},
            {label:'Privacy policy',icon:'edit_note'},
            {label:'Features Videos',icon:'browse_gallery'},
            {label:'FAQs',icon:'article'}
        ]
    },
])
</script>
