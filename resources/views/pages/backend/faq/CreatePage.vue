<template>
    <BackendLayout>
        <template #content>
            <q-page padding>
                <div class="flex justify-between items-center">
                    <div class="my-title">New Faq</div>
                    <q-breadcrumbs active-color="primary" class="text-gray-500" style="font-size: 16px">
                        <q-breadcrumbs-el  label="Dashboard" icon="dashboard" />
                        <q-breadcrumbs-el label="Faq" icon="feed" />
                        <q-breadcrumbs-el label="New Faq" icon="save"/>
                    </q-breadcrumbs>
                </div>
                <q-separator class="full-width q-my-md"/>
                <q-form @submit="submit" class="row q-col-gutter-sm">
                    <div class="col-xs-12">
                        <q-input v-model="form.question"
                                 outlined
                                 label="Question"
                                 :rules="[
                                     val=>!!val || 'Question is required'
                                 ]"/>
                    </div>
                    <div class="col-xs-12">
                        <q-input v-model="form.answer"
                                 outlined
                                 label="Answer"
                                 :rules="[
                                     val=>!!val || 'Answer is required'
                                 ]"/>
                    </div>
                    <div class="col-xs-12">
                        <q-checkbox v-model="form.published" label="Do you want to published?"/>

                    </div>
                    <div class="col-xs-12 q-gutter-md">
                        <q-btn :disable="form.processing" class="sized-btn" type="submit" rounded color="primary" label="Save"/>
                        <q-btn class="sized-btn" type="reset" rounded color="negative" label="Reset"/>
                    </div>
                </q-form>
            </q-page>
        </template>
    </BackendLayout>
</template>
<script setup>
import {useForm, usePage} from "@inertiajs/inertia-vue3";
import {useQuasar} from "quasar";
import BackendLayout from "../../../layouts/BackendLayout.vue";

const q = useQuasar();
const form = useForm({
    question:'',
    answer:'',
    published:false
});
const submit=e=>{
    form.post(route('faq.store'),{
        onSuccess: () => q.notify({type: 'positive', message: usePage().props.value.flash.success}),
        onError: () => q.notify({type: 'negative', message: usePage().props.value.flash.error}),
    })
}

</script>
