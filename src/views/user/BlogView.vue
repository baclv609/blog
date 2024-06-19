<script setup lang="ts">
import { ref } from 'vue';
import PageSidebar from '@/components/post/PageSidebar.vue';
const arrItemPosts = ref<any>([
    {
        thumbnail: "https://plus.unsplash.com/premium_photo-1682093389784-a048b841abc7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tag: "Android",
        title: "11 of the Best Laptops Evaluated Based on Budget",
        date: "July 30, 2020"
    },
    {
        thumbnail: "https://images.unsplash.com/photo-1716738703767-e277c57b2a90?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tag: "Android",
        title: "11 of the Best Laptops Evaluated Based on Budget",
        date: "Ngày 30 tháng 7 năm 2020"
    },
    {
        thumbnail: "https://images.unsplash.com/photo-1716386480038-1e375da14e1a?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tag: "Android",
        title: "The 18 Practices for Building Responsive Web Applications",
        date: "July 30, 2020"
    },

    {
        thumbnail: "https://s.yimg.com/ny/api/res/1.2/sAhAlLfLEeeF4g5ckNQgrw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://s.yimg.com/os/creatr-uploaded-images/2024-05/68b40ed1-113e-11ef-bffd-5c33bd129929",
        tag: "Apple",
        title: "11 of the Best Laptops Evaluated Based on Budget",
        date: "July 30, 2020"
    },

    {
        thumbnail: "https://images.unsplash.com/photo-1716190565404-a22c408a5c4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tag: "Apple",
        title: "11 of the Best Laptops Evaluated Based on Budget",
        date: "Ngày 30 tháng 7 năm 2020"
    },
    {
        thumbnail: "https://images.unsplash.com/photo-1716595792584-9546ff238176?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tag: "Apple",
        title: "11 of the Best Laptops Evaluated Based on Budget",
        date: "July 30, 2020"
    }
])
</script>
<template>
    <div>
        <section class="container-content my-8">
            <div class="grid grid-cols-12 gap-8 px-5">
                <div class="lg:col-span-9 col-span-12">
                    <div class="flex flex-col md:flex-row gap-5 px-2 mb-5" v-for="(item, index) in arrItemPosts"
                        :key="index">
                        <div class="relative">
                            <a href="#">
                                <img class="rounded-lg md:w-[420px] lg:w-[420px] max-w-[100%]" :src="item.thumbnail" />
                            </a>
                            <span
                                class="absolute top-3 left-3 bg-[#f63a3a] text-white font-normal p-1 rounded text-[10px] leading-3">
                                {{ item.tag }}</span>
                        </div>
                        <div>
                            <a href="#" class="no-underline text-[#161618]">
                                <h2 class="text-[21px] font-bold">{{ item.title }}</h2>
                            </a>

                            <p class="mt-1 leading-5 text-sm font-normal text-[#979797]">qua <span
                                    class="text-cus-red">Mẹo viết blog của Sora</span> - {{ item.date }}</p>
                            <p class="mt-2 leading-5 text-base font-normal text-[#626262]">Lorem Ipsum chỉ đơn giản là
                                văn bản giả của ngành in ấn và sắp chữ. Lorem Ipsum đã…</p>
                        </div>

                    </div>


                </div>
                <div class="col-span-12 lg:col-span-3">
                    <PageSidebar />
                </div>
            </div>
        </section>
        <section class="py-24 ">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div
                    class="flex justify-center  gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                    <div class="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
                        <div class="flex items-center">
                            <img src="https://pagedone.io/asset/uploads/1696244317.png" alt="blogs tailwind section"
                                class="rounded-t-2xl w-full">
                        </div>
                        <div class="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                            <span class="text-indigo-600 font-medium mb-3 block">Jan 01, 2023</span>
                            <h4 class="text-xl text-gray-900 font-medium leading-8 mb-5">Clever ways to
                                invest in product to organize your portfolio</h4>
                            <p class="text-gray-500 leading-6 mb-10">Discover smart investment strategies to
                                streamline and organize your portfolio..</p>
                            <a href="javascript:;" class="cursor-pointer text-lg text-indigo-600 font-semibold">Read
                                more..</a>
                        </div>
                    </div>
                    <div class="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
                        <div class="flex items-center">
                            <img src="https://pagedone.io/asset/uploads/1696244340.png" alt="blogs tailwind section"
                                class="rounded-t-2xl w-full">
                        </div>
                        <div class="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                            <span class="text-indigo-600 font-medium mb-3 block">Feb 01, 2023</span>
                            <h4 class="text-xl text-gray-900 font-medium leading-8 mb-5">How to grow your
                                profit through systematic investment with us</h4>
                            <p class="text-gray-500 leading-6 mb-10">Unlock the power of systematic
                                investment with us and watch your profits soar. Our..</p>
                            <a href="javascript:;" class="cursor-pointer text-lg text-indigo-600 font-semibold">Read
                                more..</a>
                        </div>
                    </div>
                    <div class="group w-full max-   lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
                        <div class="flex items-center">
                            <img src="https://pagedone.io/asset/uploads/1696244356.png" alt="blogs tailwind section"
                                class="rounded-t-2xl w-full">
                        </div>
                        <div class="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                            <span class="text-indigo-600 font-medium mb-3 block">Mar 01, 20233</span>
                            <h4 class="text-xl text-gray-900 font-medium leading-8 mb-5">How to analyze
                                every holdings of your portfolio</h4>
                            <p class="text-gray-500 leading-6 mb-10">Our comprehensive guide will equip you
                                with the tools and insights needed to..</p>
                            <a href="javascript:;" class="cursor-pointer text-lg text-indigo-600 font-semibold">Read
                                more..</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<style lang="scss"></style>