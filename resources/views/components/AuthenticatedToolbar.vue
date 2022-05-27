<template>
    <div class="md:container mx-auto shadow-sm flex justify-between items-center">
        <div class="flex items-center gap-2">
            <div class="text-xl font-medium">Ennawm tv</div>
            <q-item>
                <q-item-section><q-item-label>Movies</q-item-label></q-item-section>
            </q-item>
            <q-item>
                <q-item-section><q-item-label>Series</q-item-label></q-item-section>
            </q-item>
            <q-item>
                <q-item-section><q-item-label>Short film</q-item-label></q-item-section>
            </q-item>
        </div>
        <div class="flex gap-2">
            <q-btn-dropdown no-caps flat v-if="$page.props.user" :label="$page.props.user?.name ?? 'Guest'">
                <q-list bordered separator class="bg-gray-800 rounded-borders text-gray-100">
                    <q-item clickable>
                        <q-item-section>
                            <q-item-label>Profile</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item clickable>
                        <q-item-section>
                            <q-item-label>Rented videos</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item clickable>
                        <q-item-section>
                            <q-item-label>Payment history</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item clickable>
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

</script>
