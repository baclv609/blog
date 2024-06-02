<script setup lang="ts">
import { ref } from 'vue'
import RecentPosts from '@/components/post/RecentPosts.vue'
import PageSidebar from '@/components/post/PageSidebar.vue'

const arrItems = ref([
    {
        thumbnail: "https://s.yimg.com/ny/api/res/1.2/sAhAlLfLEeeF4g5ckNQgrw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://s.yimg.com/os/creatr-uploaded-images/2024-05/68b40ed1-113e-11ef-bffd-5c33bd129929",
        tag: "Trí tuệ nhân tạo",
        title: "Trình duyệt Opera cho phép bạn áp dụng chế độ tối cho trang web Trình duyệt Opera cho phép bạn áp dụng chế độ tối cho trang web Trình duyệt Opera cho phép bạn áp dụng chế độ tối cho trang web Trình duyệt Opera cho phép bạn áp dụng chế độ tối cho trang web",
        content: "Ngày 25 tháng 5 năm 2024",
        date: "25/5/2024"
    },
    {
        thumbnail: "https://images.unsplash.com/photo-1716738703767-e277c57b2a90?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tag: "Android",
        title: "11 máy tính xách tay tốt nhất được đánh giá dựa trên ngân sách",
        content: "Mẹo viết blog của Sora"
    },
    {
        thumbnail: "https://images.unsplash.com/photo-1715464881886-0fd63cd7997b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tag: "Android",
        title: "18 phương pháp xây dựng ứng dụng web đáp ứng",
        content: "Ngày 30 tháng 7 năm 2020"
    },
    {
        thumbnail: "https://images.unsplash.com/photo-1716918658730-1aa57f9d4e5c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tag: "Android",
        title: "10 Lời khuyên để bạn mua được chiếc điện thoại tốt nhất hiện nay",
        content: "Ngày 30 tháng 7 năm 2020"
    },
    {
        thumbnail: "https://images.unsplash.com/photo-1716595792584-9546ff238176?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tag: "Android",
        title: "Apple Macbook Pro là sản phẩm tốt nhất theo đánh giá của người tiêu dùng",
        content: "Ngày 30 tháng 7 năm 2020"
    }
])
const arrItemPosts = ref([
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
        <section class="w-full py-14 bg-[#ecf0f1]">
            <div class="container-content">
                <div class="flex flex-col md:flex-row">
                    <!-- Tablet and Desktop Layout -->
                    <div class="layout mx-auto max-w-[100%] md:grid-cols-2 md:grid-rows-2 md:gap-7">
                        <div class="layout-item relative col-span-2 row-span-2">
                            <img class="max-w-[100%] h-[100%] rounded " :src="arrItems[0].thumbnail"
                                :alt="arrItems[0].title">
                            <div class="layout-item-content">
                                <div class="mb-3">
                                    <span
                                        class="bg-[#f63a3a] text-white font-normal p-1 rounded text-[10px] leading-3">{{
                                            arrItems[0].tag
                                        }}</span>
                                </div>
                                <h3 class="text-white font-bold text-xl line-clamp-1">{{ arrItems[0].title }}</h3>
                                <p class="mt-1 text-[#c5c5ca] text-[12px] font-normal">{{ arrItems[0].content }}</p>
                            </div>
                        </div>
                        <div class="layout-item relative" v-for="(item, index) in arrItems.slice(1)" :key="index">
                            <img class="max-w-[100%] h-[100%] rounded" :src="item.thumbnail" :alt="item.title">
                            <div class="layout-item-content">
                                <!-- <span class="h-4 bg-[red] text-white font-normal my-2 leading-3">{{ item.tag }}</span> -->
                                <h3 class="text-white font-bold text-[12px] line-clamp-1">{{ item.title }}</h3>
                                <p class="mt-1 text-[#c5c5ca] text-[12px] font-normal">{{ item.content }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Công nghệ -->
        <section class="mt-[30px] py-[25px] w-full">
            <div class="container-content">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="text-sm font-semibold h-7 px-4 bg-[#EFF0F4] leading-7">Công nghệ</h3>
                    <a href="#" class="text-sm font-semibold text-cus-red h-7 px-4 bg-[#EFF0F4] leading-7">Xem tất cả</a>
                </div>
                <div>
                    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-5">
                        <div v-for="(item, index) in arrItemPosts" :key="index" class="flex flex-col">
                            <div class="relative mb-2">
                                <img :src="item.thumbnail" alt="" width="100%" class="max-h-[230px]">
                                <span
                                    class="absolute top-3 left-2 bg-[#f63a3a] text-white font-normal p-1 rounded text-[10px] leading-3">{{
                                        item.tag }}</span>
                            </div>
                            <div>
                                <a href="#" class="no-underline ">
                                    <h2 class="m-0 text-title-black line-clamp-2">{{ item.title }}
                                    </h2>
                                </a>
                                <span class="mt-1 text-meta-grey">{{ item.date }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- WHAT'S NEW? -->
        <!-- <section class="mt-[30px] py-[25px] w-full">
            <div class="container-content">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="text-sm font-semibold h-7 px-4 bg-[#EFF0F4] leading-7">WHAT'S NEW?</h3>
                    <a href="#" class="text-sm font-semibold text-cus-red h-7 px-4 bg-[#EFF0F4] leading-7">View all</a>
                </div>

            </div>
        </section> -->
        <RecentPosts :dataPosts="arrItemPosts" />
        <div>
            <div>
                <!-- <PageSidebar /> -->
            </div>
            <div>
                <!-- <PageSidebar /> -->
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.layout {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 7px;

    @media (max-width: 767px) {

        .layout-item:nth-child(1),
        .layout-item:nth-child(2),
        .layout-item:nth-child(3),
        .layout-item:nth-child(4),
        .layout-item:nth-child(5) {
            grid-column: span 4;
        }
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);

        .layout-item:nth-child(1) {
            grid-column: span 2;
            grid-row: span 2;
        }
    }

    &-item-content {
        width: 100%;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
        overflow: hidden;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 15px;
        border-radius: 0.25rem;
        /* 4px */
    }
}

.layout-item:nth-child(1) {
    grid-column: span 2;
    grid-row: span 2;
}
</style>