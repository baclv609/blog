<template>
    <div class="nav-top">
        <!-- nav-top -->
        <div class="md:block hidden nav-top text-[#666] w-full">
            <div class="container-content px-6 mx-auto flex justify-between items-center">
                <div class="">
                </div>
                <div class=" flex gap-3">
                    <a href="/login">login</a>
                    <a href="/sigin">singin</a>
                </div>
            </div>
        </div>
        <nav v-if="{ isOpen: false }" class="relative bg-white shadow w-full  mx-auto">
            <div class="container-content px-6 py-3 mx-auto">
                <div class="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <a href="/">
                                <img class="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="">
                            </a>

                            <!-- Search input on desktop screen -->
                            <div class="hidden mx-10 md:block">
                                <div class="relative">
                                    <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                                stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                        </svg>
                                    </span>

                                    <input type="text"
                                        class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white boder-gray rounded-md focus:border-blue-400  focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                                        placeholder="Tìm kiếm">
                                </div>
                            </div>
                        </div>

                        <!-- Mobile menu button -->
                        <div class="flex md:hidden">
                            <button x-cloak @click="isOpen = !isOpen" type="button" class="text-gray-500"
                                aria-label="toggle menu">
                                <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                                </svg>

                                <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                    <div :class="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']"
                        class="absolute inset-x-0 z-20 w-full px-6 py-2 transition-all duration-300 ease-in-out bg-white top-[60px]  md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
                        <div class="flex flex-col md:flex-row md:mx-1">
                            <router-link  v-for="item in objMenu"
                                class="my-2 text-sm leading-5 text-gray-700 transition-colors duration-300 transform md:mx-4 md:my-0 no-underline"
                                :to="item.link">{{ item.name }}</router-link >
                        </div>

                        <!-- Search input on mobile screen -->
                        <div class="my-4 md:hidden">
                            <div class="relative">
                                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                    </svg>
                                </span>

                                <input type="text"
                                    class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white boder-gray rounded-md focus:border-blue-400  focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                                    placeholder="Tìm kiếm">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- <div class="py-3 mt-3 -mx-3 overflow-y-auto whitespace-nowrap scroll-hidden">
                    <a class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform hover:underline md:my-0"
                        href="#">News</a>
                    <a class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform hover:underline md:my-0"
                        href="#">Sublime</a>
                </div> -->
            </div>
        </nav>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref<boolean>(true)
const objMenu = ref<any>([
    { name: 'Trang chủ', link: '/' },
    { name: 'Tin tức', link: '/blog' },
    { name: 'Đăng bài', link: '/listBlog' },
    { name: 'Chủ đề', link: '/category' },
    { name: 'Liên hệ', link: '/contact' },
]);
</script>
<style scoped>
.scroll-hidden::-webkit-scrollbar {
    height: 0px;
    background: transparent;
}

</style>