<template>
    <FrontLayout>
        <template #content>

            <div class="w-full flex items-center justify-center">
                <q-form @submit="submit" @reset="reset" class="p-8 shadow-md rounded w-full bg-primary flex flex-col  md:w-2/6">
                    <p class="text-gray-100 text-3xl w-full text-center font-bold font-sans">Change password</p>
                    <q-separator class="my-2"/>
                    <label class="text-gray-100 font-semibold mb-2" for="old">Old Password</label>
                    <q-input v-model="form.old_password"
                             :type="oldType"
                             name="old"
                             dense
                             outlined
                             bg-color="white"
                             :error="!!$page.props.errors.old_password"
                             :error-message="$page.props.errors.old_password"
                             rounded
                             :rules="[
                             val=>!!val || 'Old password is required',
                         ]"
                    >
                        <template #append>
                            <q-icon :name="oldType==='password'?'visibility_off':'visibility'"
                                    @click="oldType=oldType==='password'?'text':'password'"/>
                        </template>
                    </q-input>
                    <label class="text-gray-100 font-semibold mb-2" for="password">New Password</label>
                    <q-input v-model="form.password"
                             :type="newType"
                             name="confirm"
                             dense
                             outlined
                             bg-color="white"
                             :error="!!$page.props.errors.password"
                             :error-message="$page.props.errors.password"
                             rounded
                             :rules="[
                             val=>!!val || 'New password is required',
                             val=>val.length>=6 || 'Password must be atleast 6 digit',
                         ]"
                    >
                        <template #append>
                            <q-icon :name="newType==='password'?'visibility_off':'visibility'"
                                    @click="newType=newType==='password'?'text':'password'"/>
                        </template>
                    </q-input>
                    <label class="text-gray-100 font-semibold mb-2" for="confirm">Confirm New Password</label>
                    <q-input v-model="form.password_confirmation"
                             :type="confirmType"
                             name="confirm"
                             dense
                             outlined
                             bg-color="white"
                             :error="!!$page.props.errors.password_confirmation"
                             :error-message="$page.props.errors.password_confirmation"
                             rounded
                             :rules="[
                             val=>!!val || 'Confirm password is required',
                             val=>val===form.password_confirmation || 'Confirm password must match password',
                         ]"
                    >
                        <template #append>
                            <q-icon :name="confirmType==='password'?'visibility_off':'visibility'"
                                    @click="confirmType=confirmType==='password'?'text':'password'"/>
                        </template>
                    </q-input>
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
import {ref} from 'vue';

const props = defineProps({
    user: Object
})
const q = useQuasar();

const oldType=ref('password')
const newType=ref('password')
const confirmType=ref('password')

const form = useForm({
    old_password: '',
    password:'',
    password_confirmation:''
})

const submit = e => {
    form.put(route('change-password.update'), {
        onStart: () => q.loading.show(),
        onFinish: () => q.loading.hide(),
        onSuccess: () => q.notify({type: 'positive', message: 'Password updated successfully'})
    })
}
const reset = e => {
    form.old_password = '';
    form.password = '';
    form.password_confirmation=''
}
</script>
