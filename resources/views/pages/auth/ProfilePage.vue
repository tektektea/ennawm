<template>
    <FrontLayout>
        <template #content>

            <div class="w-full flex items-center justify-center">
                <q-form @submit="submit" @reset="reset" class="p-8 shadow-md rounded w-full bg-primary flex flex-col  md:w-2/6">
                    <p class="text-gray-100 text-3xl w-full text-center font-bold font-sans">Profile</p>
                    <q-separator class="my-2"/>
                    <label class="text-gray-100 font-semibold mb-2" for="name">Full Name</label>
                    <q-input v-model="form.name"
                             name="name"
                             dense
                             outlined
                             bg-color="white"
                             rounded
                             :rules="[
                             val=>!!val || 'Name is required'
                         ]"
                    />
                    <label class="text-gray-100 font-semibold mb-2" for="mobile">Mobile</label>
                    <q-input v-model="form.mobile"
                             name="mobile"
                             dense
                             mask="##########"
                             outlined
                             bg-color="white"
                             rounded
                             :error="!!$page.props.errors.mobile"
                             :error-message="$page.props.errors.mobile"
                             :rules="[
                             val=>!!val || 'Mobile is required'
                         ]"
                    />
                    <label class="text-gray-100 font-semibold mb-2" for="email">Email</label>
                    <q-input v-model="form.email"
                             type="email"
                             name="email"
                             dense
                             outlined
                             bg-color="white"
                             :error="!!$page.props.errors.email"
                             :error-message="$page.props.errors.email"
                             rounded
                             :rules="[
                             val=>!!val || 'Email is required'
                         ]"
                    />
                    <div class="flex gap-2">
                        <q-btn type="submit" rounded color="primary" label="Update"/>
                        <q-btn type="reset" rounded color="negative" label="Reset"/>
                    </div>

                </q-form>

            </div>
        </template>
    </FrontLayout>
</template>
<script setup>
import FrontLayout from "../../layouts/FrontLayout.vue";
import {useForm} from "@inertiajs/inertia-vue3";
import {useQuasar} from "quasar";

const props = defineProps({
    user: Object
})
const q = useQuasar();
const form = useForm({
    name: props.user.name,
    mobile: props.user.mobile,
    email: props.user.email,
})

const submit = e => {
    form.put(route('profile.update'), {
        onStart: () => q.loading.show(),
        onFinish: () => q.loading.hide(),
        onSuccess: () => q.notify({type: 'positive', message: 'Profile updated successfully'})
    })
}
const reset = e => {
    form.name = props.user.name;
    form.mobile = props.user.mobile;
    form.email = props.user.email;
}
</script>
