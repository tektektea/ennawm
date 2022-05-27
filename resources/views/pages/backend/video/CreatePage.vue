<template>
    <BackendLayout>
        <template #content>
            <q-page padding>
                <div class="flex justify-between items-center">
                    <div class="text-lg font-bold">New Faq</div>
                    <q-breadcrumbs active-color="primary" class="text-gray-500 text-xs">
                        <q-breadcrumbs-el  label="Dashboard" icon="dashboard" />
                        <q-breadcrumbs-el label="Videos" icon="feed" />
                        <q-breadcrumbs-el label="New Video" icon="save"/>
                    </q-breadcrumbs>
                </div>
                <q-separator class="full-width q-my-md"/>
                <q-form @submit="submit" class="row q-col-gutter-sm">
                    <div class="col-xs-12">
                        <q-input v-model="form.uid"
                                 outlined
                                 label="UID"
                                 :error="!!$page.props.errors?.uid"
                                 :error-message="$page.props.errors?.uid"
                                 :rules="[
                                     val=>!!val || 'UID is required'
                                 ]"/>
                    </div>
                    <div class="col-xs-12">
                        <q-input v-model="form.title"
                                 outlined
                                 label="Title"
                                 :error="!!$page.props.errors?.title"
                                 :error-message="$page.props.errors?.title"
                                 :rules="[
                                     val=>!!val || 'Title is required'
                                 ]"/>
                    </div>
                    <div class="col-xs-12">
                        <q-input v-model="form.poster_url"
                                 outlined
                                 label="Poster URL"
                                 :error="!!$page.props.errors?.poster_url"
                                 :error-message="$page.props.errors?.poster_url"
                                 :rules="[
                                     val=>!!val || 'Poster URL is required'
                                 ]"/>
                    </div>
                    <div class="col-xs-12">
                        <q-input v-model="form.trailer_url"
                                 outlined
                                 :error="!!$page.props.errors?.trailer_url"
                                 :error-message="$page.props.errors?.trailer_url"
                                 label="Trailer Url"
                                 :rules="[
                                     val=>!!val || 'Trailer URL is required'
                                 ]"/>
                    </div>
                    <div class="col-xs-12">
                        <q-input v-model="form.description"
                                 type="textarea"
                                 outlined
                                 label="Description"
                        />
                    </div>
                    <div class="col-xs-12">
                        <q-input v-model="form.price"
                                 outlined
                                 :error="!!$page.props.errors?.price"
                                 :error-message="$page.props.errors?.price"
                                 label="Price"
                                 :rules="[
                                     val=>!!val || 'Price is required'
                                 ]"/>
                    </div>
                    <div class="col-xs-12">
                        <q-separator/>
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
import {reactive} from "vue";
import BackendLayout from "../../../layouts/BackendLayout.vue";

const q = useQuasar();
const form = useForm({
    uid:'',
    title:'',
    poster_url:'',
    trailer_url:'',
    price:0,
    description:''
});
const errors=reactive({})
const submit=e=>{
    form.post(route('video.store'),{
        preserveState:true,
        onSuccess: (e) => q.notify({type: 'positive', message: usePage().props.value?.success}),
        onError: (error) => q.notify({type: 'negative', message: 'Something went wrong'}),
    })
}

</script>
