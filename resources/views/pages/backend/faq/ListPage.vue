<template>
    <BackLayout #content>
        <q-page padding>
            <div class="flex justify-between items-center">
                <div>
                    <div class="my-title">FAQ</div>
                    <div class="text-caption">Frequently asked question</div>
                </div>
                <q-breadcrumbs active-color="primary" class="text-gray-500 text-sm">
                    <q-breadcrumbs-el icon="dashboard" label="Dashboard"/>
                    <q-breadcrumbs-el icon="feed" label="Faq"/>
                </q-breadcrumbs>
            </div>


            <div class="flex justify-between items-center q-my-md">
                <q-input v-model="localState.search"
                         dense
                         outlined
                         placeholder="Search"
                         rounded
                         @keyup="handleSearch"
                >
                    <template #append>
                        <q-icon name="search"/>
                    </template>
                </q-input>
                <q-btn :href="route('faq.create')" color="primary" label="New Faq" rounded/>
            </div>
            <q-separator class="full-width q-my-sm"/>
            <div class="col-12">
                <q-list separator>
                    <q-item class="q-pa-none" v-for="(item,index) in listData.data"
                            :key="item.id"
                            @click="onMessageClick(item)">
                        <q-item-section avatar>
                            <q-chip :label="index+1" square/>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>{{ item?.question }}</q-item-label>
                            <q-item-label caption>{{ item?.answer || 'NA' }}</q-item-label>
                        </q-item-section>
                        <q-item-section side>
                            <!--                            <p class="q-ma-none text-caption text-center">{{formatDateTime(item.created_at)}}</p>-->

                            <div class="flex flex-inline justify-center q-gutter-sm">
                                <q-toggle v-model="item.published" label="published?" left-label
                                          @click="publish(item)"/>
                                <q-btn :href="route('faq.edit',item.id)" icon="edit" outline round size="12px"/>
                                <q-btn color="negative" icon="delete" outline round size="12px"
                                       @click="handleDelete(item)"/>

                            </div>
                        </q-item-section>
                    </q-item>
                </q-list>
            </div>
            <q-pagination
                v-model="listData.current_page"
                :max="pageCount"
                input
                @update:model-value="updatePagination"
            />
        </q-page>
    </BackLayout>
</template>
<script setup>
import BackLayout from "../../../layouts/BackLayout.vue";
import {computed, onMounted, reactive} from "vue";
import {Inertia} from "@inertiajs/inertia";
import {useQuasar} from "quasar";
import useUtils from "../../../util/useUtils";
import {usePage} from "@inertiajs/inertia-vue3";

const q = useQuasar();
const {formatDateTime} = useUtils();
const listData = computed(() => usePage().props.value.list);

const localState = reactive({
    selected: null,
    search: '',
    listData: {
        per_page: 15,
        data: [],
        current_page: 1,
        total: 1
    },
})
const publish = item => {
    Inertia.put(route('faq.publish', item.id), {}, {
        onSuccess: () => q.notify({type: 'positive', message: usePage().props.value.flash.success}),
        onError: () => q.notify({type: 'negative', message: usePage().props.value.flash.error}),
    });
}
const handleDelete = (item) => {
    q.dialog({
        title: 'Confirm',
        message: 'Would you like to delete?',
        cancel: true,
        persistent: true
    }).onOk(() => {
        Inertia.delete(route('faq.destroy', item.id))
    }).onCancel(() => {
        // console.log('>>>> Cancel')
    }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
    })
}

const onMessageClick = item => {
    localState.selected = item;
}

const handleSearch = e => {
    localState.search = e.target.value;
    if (e.keyCode === 13)
        fetchMessage(1);
}
const updatePagination = (value) => {
    fetchMessage(value)
}

//
const fetchMessage = (page) => {
    Inertia.get(route('faq.index'), {
        page,
        search: localState.search
    }, {preserveState: true, replace: true})
}
onMounted(() => {
    const page = usePage();

    console.log('page=>> ', page.props.value?.list);
    const {current_page, total, per_page, data} = page.props.value?.list
    localState.listData.current_page = current_page;
    localState.listData.data = data;
    localState.listData.total = total;
    localState.listData.per_page = per_page;
});
const pageCount = computed(() => Math.ceil(listData.value.total / listData.value.per_page));

</script>
