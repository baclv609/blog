<script setup>
import { ref } from 'vue';
const arrCategory = ref([
    {
        title: "Những vận động viên thể thao tiên phong mở đường cho thế hệ tương lai",
        link: "nhung-van-dong-vien-the-thao-tien-phong-mo-duong-cho-the-he-tuong-lai",
        desc: "Cùng với quan điểm từ các nhà phân tích và chuyên gia thể thao, mang đến sự hiểu biết sâu sắc về tầm quan trọng của hành trình tiên phong của họ.",
        thumbnail: "https://assets-global.website-files.com/658fab387c2eeaabe2975079/6593afefc7f4bfa5a05a9315_sports-thumb-07-p-800.jpg",
        category: "Thể thao"
    },
    {
        title: "Khám phá chi tiết về các sự kiện đáng nhớ và tinh thần con người trong thể thao",
        link: "kham-pha-chi-tiet-ve-cac-su-kien-dang-nho-va-tinh-than-con-nguoi-trong-the-thao",
        desc: "Cùng với quan điểm từ các nhà phân tích và chuyên gia thể thao, mang đến sự hiểu biết sâu sắc về tầm quan trọng của hành trình tiên phong của họ.",
        thumbnail: "https://assets-global.website-files.com/658fab387c2eeaabe2975079/6593af8cf34c0f8678c73afd_sports-thumb-04-p-500.jpg",
        category: "Thể thao"
    },
    {
        title: "Những vận động viên thể thao tiên phong mở đường cho thế hệ tương lai",
        link: "nhung-van-dong-vien-the-thao-tien-phong-mo-duong-cho-the-he-tuong-lai",
        desc: "Cùng với quan điểm từ các nhà phân tích và chuyên gia thể thao, mang đến sự hiểu biết sâu sắc về tầm quan trọng của hành trình tiên phong của họ.",
        thumbnail: "https://assets-global.website-files.com/658fab387c2eeaabe2975079/6593acd6139e1daa37e437c5_politics-thumb-03.jpg",
        category: "Chính trị"
    },
    {
        title: "Liên hợp quốc giải quyết các thách thức toàn cầu tại Đại hội đồng",
        link: "lien-hop-quoc-giai-quyet-cac-thach-thuc-toan-cau-tai-dai-hoi-dong",
        desc: "Cùng với quan điểm từ các nhà phân tích và chuyên gia thể thao, mang đến sự hiểu biết sâu sắc về tầm quan trọng của hành trình tiên phong của họ.",
        thumbnail: "https://assets-global.website-files.com/658fab387c2eeaabe2975079/6593ae08897ecdee07aa83bc_politics-thumb-04-p-500.jpg",
        category: "Chính trị"
    }
])
const arrScience = ref([
    {
        title: "Sinh học vượt ra ngoài biên giới những câu chuyện về sự sống, sự tiến hóa và những đột phá trong lĩnh vực khoa học",
        thumbnail: "https://assets-global.website-files.com/658fab387c2eeaabe2975079/6593ab5416cc4da81ee45d83_science-thumb-07-p-500.jpg",
        date: "2021-10-01",
    },
    {
        title: "Sinh học vượt ra ngoài biên giới những câu chuyện về sự sống, sự tiến hóa và những đột phá trong lĩnh vực khoa học",
        thumbnail: "https://assets-global.website-files.com/658fab387c2eeaabe2975079/6593ab5416cc4da81ee45d83_science-thumb-07-p-500.jpg",
        date: "2021-10-01",
    },
    {
        title: "Sinh học vượt ra ngoài biên giới những câu chuyện về sự sống, sự tiến hóa và những đột phá trong lĩnh vực khoa học",
        thumbnail: "https://assets-global.website-files.com/658fab387c2eeaabe2975079/6593ab5416cc4da81ee45d83_science-thumb-07-p-500.jpg",
        date: "2021-10-01",
    },
    {
        title: "Sinh học vượt ra ngoài biên giới những câu chuyện về sự sống, sự tiến hóa và những đột phá trong lĩnh vực khoa học",
        thumbnail: "https://assets-global.website-files.com/658fab387c2eeaabe2975079/6593ab5416cc4da81ee45d83_science-thumb-07-p-500.jpg",
        date: "2021-10-01",
    },
])
</script>
<template>
    <div class="container-content py-[80px]">
        <div>
            <div class="flex justify-between items-center mb-6">
                <h2 class="font-normal text-4xl">Tin mới nhất</h2>
                <router-link class="text-[#363636]" :to="`/category/`">Xem tất cả</router-link>
            </div>
            <div class="md:grid-cols-2 md:grid flex flex-col gap-y-[40px] md:gap-x-[40px]">
                <div class="wrap-left pb-[30px]">
                    <div class="">
                        <router-link class="text-[#363636] overflow-hidden" :to="`/category`">
                            <img class="news-image rounded-md object-contain" :src="arrCategory[0].thumbnail"
                                :alt="arrCategory[0].link">
                        </router-link>
                        <div class="mt-3">
                            <router-link class="text-[#363636] " :to="`/category`">
                                <p class="text-xs font-normal uppercase ">{{ arrCategory[0].category }}</p>
                            </router-link>
                            <router-link class="text-[#363636]" :to="`/category`">
                                <p class="text-2xl text-black font-normal mt-2 mb-3 line-clamp-2">{{
                                    arrCategory[0].title
                                }}</p>
                            </router-link>
                            <p class="text-[#333] line-clamp-2">{{ arrCategory[0].desc }}</p>
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="wrap-right flex flex-col gap-[30px] w-full md:pl-[30px] lg:pl-[30px] ">
                        <div class="sm:flex sm:gap-5 w-full md:flex md:gap-x-[20px] md:w-full"
                            v-for="(item, index) in arrCategory.slice(1, 4)" :key="item.link">
                            <router-link class="text-[#363636] h-[170px] news-img-v3" :to="`/category/${item.link}`">
                                <img :src="item.thumbnail" :alt="item.link"
                                    class="w-full h-full news-image rounded-md object-contain">
                            </router-link>
                            <div class="mt-3 md:mt-0 w-full">
                                <router-link class="text-[#363636]" :to="`/category/${item.link}`">
                                    <p class="text-xs font-normal uppercase">{{ item.category }}</p>
                                </router-link>
                                <router-link class="text-[#363636]" :to="`/category/${item.link}`">
                                    <p class="text-black font-normal mt-2 mb-3 line-clamp-2">{{ item.title }}</p>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-[120px]">
            <div class="flex justify-between items-center mb-6">
                <h2 class="font-normal text-4xl">Khoa học</h2>
                <router-link class="text-[#363636]" :to="`/category/`">Đi tới Khoa học</router-link>
            </div>
            <div class="md:grid-cols-2 md:grid flex flex-col gap-y-[40px] md:gap-x-[40px]">
                <div class="wrap-left pb-[30px]">
                    <div class="">
                        <router-link class="text-[#363636] overflow-hidden" :to="`/category`">
                            <img class="news-image rounded-md object-contain"
                                src="https://assets-global.website-files.com/658fab387c2eeaabe2975079/6592ae41b4985a7582a6dd60_science-thumb-01-p-800.jpg">
                        </router-link>
                        <div class="mt-3">
                            <router-link class="text-[#363636]" :to="`/category`">
                                <p class="text-2xl text-black font-normal mt-2 mb-3 line-clamp-2">{{
                                    arrCategory[0].title
                                    }}</p>
                            </router-link>
                            <p class="text-[#333] line-clamp-2 mb-3">{{ arrCategory[0].desc }}</p>
                            <router-link class="text-[#363636]" :to="`/category`">
                                <p class="text-xs font-normal uppercase ">{{ arrCategory[0].category }}</p>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="grid grid-cols-2 gap-[30px] sm:gap-x-10 sm:gap-y-10 md:gap-x-[30px] md:gap-y-[40px]">
                        <div v-for="(item, index) in arrScience" :key="index">
                            <img :src="item.thumbnail" :alt="item.title" />
                            <div class="mt-3">
                                <h3 class="text-[16px] font-medium line-clamp-2 mb-2">{{ item.title }}</h3>
                                <span class="text-xs text-[#333]">{{ item.date }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">
.wrap-right {
    border-left: 1px solid rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
    .wrap-right {
        border-left: none;
    }

    .wrap-left {
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }
}

.w-dyn-item {
    grid-column-gap: 20px;
    width: 100%;
    text-decoration: none;
    display: flex;
}

.news-img-v3 {
    width: 100%;
    max-width: 35%;
    height: 170px;
    overflow: hidden;
}

.news-image {
    object-fit: cover;
    width: 100%;
    height: 100%;

}
</style>