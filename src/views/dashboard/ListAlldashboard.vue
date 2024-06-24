<template>
    <a-table :columns="columns" :data-source="data" @change="onChange" />
</template>
<script lang="ts" setup>
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Chinese Score',
        dataIndex: 'chinese',
        sorter: {
            compare: (a: any, b: any) => a.chinese - b.chinese,
            multiple: 3,
        },
    },
    {
        title: 'Math Score',
        dataIndex: 'math',
        sorter: {
            compare: (a: any, b: any) => a.math - b.math,
            multiple: 2,
        },
    },
    {
        title: 'English Score',
        dataIndex: 'english',
        sorter: {
            compare: (a: any, b: any) => a.english - b.english,
            multiple: 1,
        },
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        chinese: 98,
        math: 60,
        english: 70,
    },
    {
        key: '2',
        name: 'Jim Green',
        chinese: 98,
        math: 66,
        english: 89,
    },
    {
        key: '3',
        name: 'Joe Black',
        chinese: 98,
        math: 90,
        english: 70,
    },
    {
        key: '4',
        name: 'Jim Red',
        chinese: 88,
        math: 99,
        english: 89,
    },
    {
        key: '5',
        name: 'Jake White',
        chinese: 90,
        math: 85,
        english: 80,
    },
    {
        key: '6',
        name: 'Jake White',
        chinese: 90,
        math: 85,
        english: 80,
    },
    {
        key: '7',
        name: 'Jake White',
        chinese: 90,
        math: 85,
        english: 80,
    },
    {
        key: '8',
        name: 'Jake White',
        chinese: 90,
        math: 85,
        english: 80,
    },
    {
        key: '9',
        name: 'Jake White',
        chinese: 90,
        math: 85,
        english: 80,
    },
    {
        key: '10',
        name: 'Jake White',
        chinese: 90,
        math: 85,
        english: 80,
    },
    {
        key: '11',
        name: 'Jake White',
        chinese: 90,
        math: 85,
        english: 80,
    },
    {
        key: '12',
        name: 'Jake White',
        chinese: 90,
        math: 85,
        english: 80,
    },
    {
        key: '13',
        name: 'Jake White',
        chinese: 90,
        math: 85,
        english: 80,
    },
    {
        key: '14',
        name: 'Jake White',
        chinese: 90,
        math: 85,
        english: 80,
    },
    {
        key: '15',
        name: 'Jake White',
        chinese: 90,
        math: 85,
        english: 80,
    },
    {
        key: '16',
        name: 'Jake White',
        chinese: 90,
        math: 85,
        english: 80,
    },
    {
        key: '17',
        name: 'Jake White',
        chinese: 90,
        math: 85,
        english: 80,
    },
    {
        key: '18',
        name: 'Jake White',
        chinese: 90,
        math: 85,
        english: 80,
    },
    {
        key: '19',
        name: 'Jake White',
        chinese: 90,
        math: 85,
        english: 80,
    },
    {
        key: '20',
        name: 'Jake White',
        chinese: 90,
        math: 85,
        english: 80,
    }
];

function onChange(pagination: any, filters: any, sorter: any, extra: any) {
    console.log('params', pagination, filters, sorter, extra);
}
</script>