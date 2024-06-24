<template>
    {{ data.values }}
    <a-table :columns="columns" :data-source="data" />
</template>
<script lang="ts" setup>
import http from '@/api';
import { onMounted, ref } from 'vue';
const data = ref([])

onMounted(async () => {
    try {
        const res = await http.get('http://localhost:8000/api/auth/list');
        data.value = res.data;
        console.log(data);
    } catch (error) {
        console.log(error);
    }
})

const columns = [
    {
        title: 'firstName',
        dataIndex: `firstName`,
    },
    {
        title: 'phone',
        dataIndex: 'phone',

    },
    {
        title: 'role',
        dataIndex: 'role',
    },
    {
        title: 'email',
        dataIndex: 'email',
    },
];

</script>