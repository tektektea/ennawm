<template>
    <FrontLayout>
        <template #content>
            <q-page class="container mx-auto">
                <p class="text-2xl text-gray-50">Payment history</p>
                <q-list class="bg-primary shadow-md rounded-borders" separator>
                    <q-item class="p-6 text-gray-50" v-for="item in payments" :key="item.id">
                        <q-item-section>
                            <q-item-label>Order ID: {{item.order_id}}</q-item-label>
                            <q-item-label>Amount: {{item.amount}}</q-item-label>
                            <q-item-label>Date: {{item.created_at}}</q-item-label>
                        </q-item-section>

                        <q-item-section side>
                            <q-chip v-if="item.status==='success'" color="success" :label="item.status"/>
                            <q-chip v-else :label="item.status"/>
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-page>
        </template>
    </FrontLayout>

</template>
<script setup>
import FrontLayout from "../../../layouts/FrontLayout.vue";
defineProps({
    payments:Array
})

</script>
