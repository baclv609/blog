<script setup lang="ts">
import PageSidebar from './PageSidebar.vue';

// import { ref } from 'vue';

const props = defineProps<{
    dataPosts: {
        thumbnail: string;
        tag: string;
        title: string;
        date: string;
    }[];
}>();
</script>

<template>
    <div class="w-full py-14">
        <div class="container-content grid grid-cols-12">
            <section class="col-span-12 md:col-span-9 sm:col-span-12">
                <h3 class="post-group__title text-base uppercase font-semibold h-7 px-4 text-[#555] leading-7 mb-6">
                    TIN GÌ MỚI?</h3>
                <!-- top những bài viết -->
                <div class="post-group__content">
                    <div class="grid grid-cols-12">
                        <!-- top 1` -->
                        <div class="col-span-12 md:col-span-6 sm:col-span-6 px-4">
                            <div class="">
                                <a href="#">
                                    <img src="https://cms.botble.com/storage/news/1-540x360.jpg" alt=""
                                        class="max-w-full h-auto object-cover rounded-lg">
                                </a>
                                <div class="post__content my-12">
                                    <a href="#" class="no-underline">
                                        <h4 class="line-clamp-2 no-underline text-sm text-[#363636]">Breakthrough in
                                            Quantum Computing: Computing Power Reaches Milestone</h4>
                                    </a>
                                    <p class="text-[12px] text-[#555]">Researchers achieve a significant milestone in
                                        quantum computing, unlocking unprecedented computing power that has the
                                        potential to revolutionize various industries.</p>
                                    <span class="">May 25, 2024</span>
                                </div>
                            </div>
                        </div>

                        <!--  -->
                        <div class="col-span-12 md:col-span-6 sm:col-span-6 px-4">
                            <div v-for="(item, index) in props.dataPosts" ::key="index"
                                class="flex items-center gap-2 m-0 pb-4">
                                <a href="#">
                                    <img :src="item.thumbnail" alt="" class="w-16 h-16 object-cover rounded-lg">
                                </a>
                                <div class="post__header">
                                    <a href="#" class="no-underline">
                                        <h4 class="line-clamp-2 no-underline text-sm text-[#363636]">{{ item.title }}
                                        </h4>
                                    </a>
                                    <p class="text-[12px] text-[#555]">{{ item.date }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <!-- Bài viết gần đây -->
            <aside class="col-span-12 md:col-span-3 sm:col-span-12">
                <div class="page-sidebar">
                    <div class="widget widget__recent-post p-4">
                        <!-- <div class="widget__header p-4 bg-[#f9f9f9]">
                            <h3 class="widget__title text-[#363636] text-xl mb-0 font-semibold">Recent Posts</h3>
                        </div> -->
                        <PageSidebar />
                    </div>
                </div>
            </aside>
        </div>
    </div>
</template>
<style lang="scss">
.widget {
    background-color: #fff;
    box-shadow: 0 0 7px rgba(0, 0, 0, .1);
    margin-bottom: 30px;
    border-radius: 5px;
}
</style>