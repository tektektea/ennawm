<template>
    <BackendLayout #content>
        <q-page padding>
            <div class="flex justify-between items-center">
                <div>
                    <div class="text-lg font-semibold">Videos</div>
                    <div class="text-caption">List of uploaded videos</div>
                </div>
                <q-breadcrumbs active-color="primary" class="text-gray-500 text-sm">
                    <q-breadcrumbs-el icon="dashboard" label="Dashboard"/>
                    <q-breadcrumbs-el icon="movie" label="Videos"/>
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
                <q-btn :href="route('video.create')" color="primary" label="New Video" rounded/>
            </div>
            <q-separator class="full-width q-my-sm"/>
            <div class="col-12">
                <q-list separator class="bg-white shadow-sm rounded-borders">
                    <q-item  v-for="(item,index) in listData.data"
                            :key="item.id"
                            @click="onMessageClick(item)">
                        <q-item-section avatar>
                            <img width="120" :src="item.poster_url"/>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>{{ item?.title }}</q-item-label>
                            <q-item-label caption>RS.{{ item?.price || 'NA' }}</q-item-label>
                            <q-item-label caption>{{ item?.description || 'NA' }}</q-item-label>
                        </q-item-section>
                        <q-item-section side>
                            <!--                            <p class="q-ma-none text-caption text-center">{{formatDateTime(item.created_at)}}</p>-->

                            <div class="flex flex-inline justify-center q-gutter-sm">
                                <q-btn :href="route('video.edit',item.id)" icon="edit" outline round size="12px"/>
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
    </BackendLayout>
</template>
<script setup>
import {computed, onMounted, reactive} from "vue";
import {Inertia} from "@inertiajs/inertia";
import {useQuasar} from "quasar";
import {usePage} from "@inertiajs/inertia-vue3";
import BackendLayout from "../../../layouts/BackendLayout.vue";

const q = useQuasar();
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

const handleDelete = (item) => {
    q.dialog({
        title: 'Confirm',
        message: 'Would you like to delete?',
        cancel: true,
        persistent: true
    }).onOk(() => {
        Inertia.delete(route('video.destroy', item.id))
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

    const {current_page, total, per_page, data} = page.props.value?.list
    localState.listData.current_page = current_page;
    localState.listData.data = data;
    localState.listData.total = total;
    localState.listData.per_page = per_page;
});
const pageCount = computed(() => Math.ceil(listData.value.total / listData.value.per_page));

</script>
