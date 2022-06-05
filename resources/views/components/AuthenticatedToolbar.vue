<template>
    <div class="container w-full  mx-auto shadow-sm flex justify-between items-center">
        <div class="flex items-center gap-2">
            <div @click="backHome" class="flex gap-1 cursor-pointer">
                <q-icon size="32px" name="play_arrow" color="accent"/>
                <div class="text-2xl font-medium">Ennawm</div>
            </div>
            <q-item :href="route('video.rented')"  v-if="!!$page.props.user" class="xs-hide">
                <q-item-section><q-item-label>Rented Videos</q-item-label></q-item-section>
            </q-item>
<!--            <q-item class="xs-hide">-->
<!--                <q-item-section><q-item-label>Series</q-item-label></q-item-section>-->
<!--            </q-item>-->
<!--            <q-item class="xs-hide">-->
<!--                <q-item-section><q-item-label>Short film</q-item-label></q-item-section>-->
<!--            </q-item>-->
        </div>
        <div class="flex gap-2">
            <q-btn :href="route('video.free')" color="accent" label="Free Video"/>
            <q-btn-dropdown no-caps flat v-if="$page.props.user" :label="$page.props.user?.name ?? 'Guest'">
                <q-list bordered separator class="bg-gray-800 rounded-borders text-gray-100">
                    <q-item :href="route('profile.create')" clickable>
                        <q-item-section>
                            <q-item-label>Profile</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item :href="route('video.rented')" clickable>
                        <q-item-section>
                            <q-item-label>Rented videos</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item :href="route('payment.list')" clickable>
                        <q-item-section>
                            <q-item-label>Payment history</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item :href="route('change-password.create')" clickable>
                        <q-item-section>
                            <q-item-label>Change password</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item @click="logout" clickable>
                        <q-item-section>
                            <q-item-label>Logout</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-btn-dropdown>
            <q-btn :href="route('login')" v-else label="Login" flat></q-btn>


        </div>
    </div>
</template>
<script setup>
import {Inertia} from "@inertiajs/inertia";
import {useQuasar} from "quasar";

const q = useQuasar();
const logout=e=>{
    Inertia.post(route('logout'),{},{
        onError:()=>q.notify({type:'negative',message:'Something went wrong'})
    })
}
const backHome = () => Inertia.get(route('home'))


</script>
