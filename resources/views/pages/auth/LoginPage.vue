<template>
    <div class="bg-white grid md:grid-cols-5 h-screen w-screen dark:bg-gray-900">

        <div class="flex col-span-2 justify-center h-screen">
            <div class="flex items-center w-full  px-6 mx-auto lg:w-4/6">
                <div class="flex-1">
                    <div class="text-center">
                        <h2 class="text-4xl font-bold text-center text-gray-700 dark:text-white">ENNAWM.tv</h2>

                        <p class="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
                    </div>

                    <div class="mt-8">
                        <q-form @submit="submit">
                            <div>
                                <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                <q-input type="email"
                                         outlined
                                         placeholder="Email"
                                         dense
                                         :error="!!$page.props.errors.email"
                                         :error-message="$page.props.errors.email"
                                         v-model="form.email"
                                         id="email"/>
                            </div>

                            <div class="mt-6">
                                <div class="flex justify-between mb-2">
                                    <label for="password" class="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                    <a :href="route('password.request')" class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                                </div>
                                <q-input :type="localState.passwordType"
                                         outlined
                                         placeholder="Password"
                                         dense
                                         v-model="form.password"
                                         :rules="[
                                             val=>!!val || 'Password is required'
                                         ]"
                                         id="password">
                                    <template #append>
                                        <q-icon :name="localState.passwordType==='text'?'visibility':'visibility_off'"
                                               @click="localState.passwordType=localState.passwordType==='text'?'password':'text'"
                                        />
                                    </template>
                                </q-input>
                            </div>

                            <div class="mt-6">
                                <button type="submit"
                                        :disabled="form.processing"
                                        class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Sign in
                                </button>
                            </div>

                        </q-form>

                        <p class="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a :href="route('register')" class="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</a>.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-primary col-span-3"/>
    </div>
</template>
<script setup>

import {useForm} from "@inertiajs/inertia-vue3";
import {reactive} from "vue";
import {useQuasar} from "quasar";
import {Inertia} from "@inertiajs/inertia";

const localState=reactive({
    passwordType:'password'
})

const q = useQuasar();
const form = useForm({
    email:'',
    password:''
});
const submit=e=>{
    form.post(route('login'), {
        onStart: () => q.loading.show(),
        onError:e=>console.log(e),
        onSuccess: () => {
            console.log("success")
            Inertia.get(route('home'))
        },
        onFinish: () => q.loading.hide()
    });
}
</script>
