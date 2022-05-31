<template>
    <FrontLayout>
        <template #content>
            <q-page class="container mx-auto">
                <div class="relative w-full h-full">
                    <YouTube
                        class="w-full h-fit"
                        :width="width"
                        :height="height"
                        :src="$page.props.video.trailer_url"
                    />
                    <div class="p-4 absolute top-1/2">
                        <q-btn @click="rentVideo(video)" class="w-24" color="accent" :label="'Rent Rs '+video.price" icon="shopping_bag"/>
                        <div class="mt-6 text-md font-bold text-gray-50">{{$page.props.video?.title}}</div>
                        <div class="mt-6 text-sm font-semibold text-gray-50">{{$page.props.video?.description}}</div>
                    </div>
                    <div class="bg-gray-200 shadow-md p-4 absolute top-0 right-0">
                       <p class="font-semibold">Payment instruction</p>
                        <p class="font-light">Lo ti chhin vak vak ang</p>
                    </div>
                </div>
            </q-page>
        </template>
    </FrontLayout>
</template>
<script setup>
import FrontLayout from "../../../layouts/FrontLayout.vue";
import {computed, onMounted} from "vue";
import YouTube from 'vue3-youtube'
import axios from 'axios';
import {useQuasar} from "quasar";
import {usePage} from "@inertiajs/inertia-vue3";
import {Inertia} from "@inertiajs/inertia";

const props=defineProps({
    video:Object,
    order_id:String,
    amount:String,
    key:String,
    description:String,
    callback_url:String,
    user:Object
})
const q = useQuasar();
const rent=()=>{
    const {key,video,order_id,callback_url,amount,user,description} = props;
    var options = {
        "key": key, // Enter the Key ID generated from the Dashboard
        "amount": amount+'', // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": user?.name || 'NA' ,
        "description":description,
        "order_id": order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "callback_url":callback_url,
        "prefill": {
            "name": user?.name,
            "email": user?.email,
            "contact": user?.mobile
        },

        "theme": {
            "color": "#464849"
        }
    };
    var razorpay = new Razorpay(options);
    razorpay.open();
}

const rentVideo=video=>{
    const url=`http://localhost:8000/api/create-order/${video.id}`
    const prod=`http://ennawm.tbccarrental.com/api/create-order/${video.id}`

    if (props.order_id || props.key) {
        rent();
    }else {
        Inertia.post(route('payment.create',{id:video.id}),{},{
            replace:true,
            onError:err=>q.notify({type:'negative',message:err?.toString() || 'Something went wrong'}),
            onSuccess:e=>{
                rent();
            }
        });
    }

}
const width=computed(()=>q.screen.width-(q.screen.width*0.1))
const height=computed(()=>q.screen.height-(q.screen.height*0.2))

onMounted(() => console.log(usePage().props.value));
</script>
