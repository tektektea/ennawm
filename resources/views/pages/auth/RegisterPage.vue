<template>
    <div class="h-screen w-screen grid grid-cols-5">
        <div class="col-span-5 md:col-span-2 bg-white flex flex-col items-center justify-center">
            <q-form class="w-full p-8 md:w-4/6" @submit="submit" @reset="reset">
                <div class="text-2xl   w-full text-center">Ennawm tv</div>
                <div class="text-lg  my-6 w-full text-center">Sign up to become a member</div>
                <q-separator class="w-full my-6"/>
                <q-input v-model="form.name"
                         outlined
                         label="Name"
                         :error="!!$page.props.errors.name"
                         :error-message="$page.props.errors.name"
                         :rules="[
                             value => !!value || 'Name is required'
                         ]"
                />
                <q-input v-model="form.email"
                         type="email"
                         outlined
                         label="Email"
                         :error="!!$page.props.errors.email"
                         :error-message="$page.props.errors.email"
                         :rules="[
                             value => !!value || 'Email is required'
                         ]"
                />
                <q-input v-model="form.mobile"
                         outlined
                         label="Mobile"
                         mask="##########"
                         :error="!!$page.props.errors.mobile"
                         :error-message="$page.props.errors.mobile"
                         :rules="[
                             value => !!value || 'Mobile is required'
                         ]"
                />
                <q-input v-model="form.password"
                         :type="passwordType"
                         outlined
                         label="Password"
                         :error="!!$page.props.errors.password"
                         :error-message="$page.props.errors.password"
                         :rules="[
                             value => !!value || 'Password is required',
                             value => value.length >6 || 'Too short'
                         ]"
                >
                    <template #append>
                        <q-icon @click="passwordType==='password'?'text':'password'" :name="passwordType==='password'?'visibility_off':'visibility'"/>
                    </template>
                </q-input>
                <q-input v-model="form.password_confirmation"
                         :type="confirmType"
                         outlined
                         label="Password Confirmation"
                         :error="!!$page.props.errors.password_confirmation"
                         :error-message="$page.props.errors.password_confirmation"
                         :rules="[
                             value => !!value || 'Confirm Password is required',
                             value => value ===form.password || 'Confirm password must match password'
                         ]"
                >
                    <template #append>
                        <q-icon @click="confirmType==='password'?'text':'password'" :name="confirmType==='password'?'visibility_off':'visibility'"/>
                    </template>
                </q-input>
                <div class="flex gap-2">
                    <q-btn :disable="form.processing" type="submit" color="accent" label="Register"/>
                    <q-btn type="reset" outline color="negative" label="Clear"/>
                </div>
            </q-form>
        </div>
        <div class="col-span-3 bg-primary"></div>
    </div>

</template>
<script setup>

import {useForm} from "@inertiajs/inertia-vue3";
import {reactive,ref} from "vue";
import {useQuasar} from "quasar";

const q = useQuasar();
const localState = reactive({
    passwordType: 'password',
    confirmPasswordType: 'password'
})
const confirmType = ref('password');
const passwordType = ref('password');
const form = useForm({
    name: '',
    mobile: '',
    email: '',
    password: '',
    password_confirmation: '',
});
const reset=e=>{
    form.reset();
}
const submit = e => {
    form.post(route('register.store'), {
        preserveState: true,
        onSuccess: () => q.notify({'type': 'positive', message: 'Registration success'})
    })
}
</script>
