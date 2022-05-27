<template>
    <BackendLayout>
        <template #content>
            <q-page padding>
                <div class="flex justify-between items-center">
                    <div class="my-title">Edit Faq</div>
                    <q-breadcrumbs active-color="primary" class="text-gray-500 text-sm" style="font-size: 16px">
                        <q-breadcrumbs-el  label="Dashboard" icon="dashboard" />
                        <q-breadcrumbs-el label="Faq" icon="feed" />
                        <q-breadcrumbs-el label="Edit Faq" icon="edit"/>
                    </q-breadcrumbs>
                </div>
                <q-separator class="full-width q-my-md"/>
                <q-form @submit="submit" class="row q-col-gutter-sm">
                    <div class="col-xs-12">
                        <q-input v-model="form.question"
                                 outlined
                                 :error="!!$page.props.errors?.question"
                                 :error-message="$page.props.errors?.question"
                                 label="Question"
                                 :rules="[
                                     val=>!!val || 'Question is required'
                                 ]"/>
                    </div>
                    <div class="col-xs-12">
                        <q-input v-model="form.answer"
                                 outlined
                                 :error="!!$page.props.errors?.answer"
                                 :error-message="$page.props.errors?.answer"
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
import {onMounted} from "vue";
import {Inertia} from "@inertiajs/inertia";
import BackendLayout from "../../../layouts/BackendLayout.vue";

const q = useQuasar();
const {data,errors}=defineProps({
    data: Object,
    errors: Object
})
const form = useForm({
    id: data.id,
    question:data.question,
    answer:data.answer,
    published:data.published
});
onMounted(()=>{
    console.log('mu data ',data);
})
const submit=e=>{
    form.put(route('faq.update',form.id),{
        onSuccess: () => q.notify({type: 'positive', message: usePage().props.value.flash.success}),
        onError: () => q.notify({type: 'negative', message: usePage().props.value.flash.error}),
    })
}

</script>
