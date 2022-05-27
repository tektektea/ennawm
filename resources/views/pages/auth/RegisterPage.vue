<template>
    <div class="h-screen w-screen grid grid-cols-5">
        <div class="col-span-2 bg-white flex items-center justify-center">
                    <div class="flex lg:w-4/6">
                        <div class="flex-1">
                            <div class="text-center">
                                <h2 class="text-4xl font-bold text-center text-gray-700 dark:text-white">ENNAWM.tv</h2>

                                <p class="mt-3 text-gray-500 dark:text-gray-300">Sign up to create account</p>
                            </div>

                            <div class="mt-8 bg-white p-16">
                                <q-form @submit="submit">
                                    <div>
                                        <label for="name" class="block font-semibold mb-2 text-sm text-gray-600 dark:text-gray-200">Name</label>
                                        <q-input type="text"
                                                 outlined
                                                 placeholder="Name"
                                                 dense
                                                 v-model="form.name"
                                                 :rules="[
                                             val=>!!val || 'Name is required',
                                         ]"
                                                 id="name"/>
                                    </div>
                                    <div class="mt-2">
                                        <label for="email" class="block font-semibold mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                        <q-input type="email"
                                                 outlined
                                                 placeholder="Email"
                                                 dense
                                                 v-model="form.email"
                                                 :rules="[
                                             val=>!!val || 'Email is required',
                                             val => val.length >=6 || 'Please enter atleast 6 digit alphanumeric'
                                         ]"
                                                 id="email"/>
                                    </div>
                                    <div class="mt-2">
                                        <label for="mobile" class="block font-semibold mb-2 text-sm text-gray-600 dark:text-gray-200">Mobile No</label>
                                        <q-input type="text"
                                                 outlined
                                                 mask="##########"
                                                 placeholder="Mobile No"
                                                 dense
                                                 v-model="form.mobile"
                                                 :rules="[
                                             val=>!!val || 'Mobile No is required',
                                         ]"
                                                 id="mobile"/>
                                    </div>

                                    <div class="mt-2">
                                        <label for="password" class="block font-semibold text-gray-600 dark:text-gray-200">Password</label>
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
                                    <div class="mt-2">
                                        <label for="confirm" class="block font-semibold text-gray-600 dark:text-gray-200">Confirm Password</label>
                                        <q-input :type="localState.confirmPasswordType"
                                                 outlined
                                                 placeholder="Confirm password"
                                                 dense
                                                 v-model="form.password_confirmation"
                                                 :rules="[
                                             val=>!!val || 'Confirm password is required',
                                             val=>val===form.password || 'Confirm password must match password'
                                         ]"
                                                 id="confirm">
                                            <template #append>
                                                <q-icon :name="localState.confirmPasswordType==='text'?'visibility':'visibility_off'"
                                                        @click="localState.confirmPasswordType=localState.confirmPasswordType==='text'?'password':'text'"
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

                                <p class="mt-6 text-sm text-center text-gray-400">I already have an account? <a :href="route('login')" class="text-blue-500 focus:outline-none focus:underline hover:underline">Sign in</a>.</p>
                            </div>
                        </div>
                    </div>

        </div>
        <div class="col-span-3 bg-primary"></div>
    </div>

</template>
<script setup>

import {useForm} from "@inertiajs/inertia-vue3";
import {reactive} from "vue";

const localState=reactive({
    passwordType:'password',
    confirmPasswordType:'password'
})
const form = useForm({
    name:'',
    mobile:'',
    email:'',
    password:'',
    password_confirmation:'',
});
const submit=e=>{

}
</script>
