<script setup>
import { ref } from 'vue';
const arrCategory = ref([
    {
        title: "Chính trị",
        link: "chinh-tri",
        thumbnail: "https://assets-global.website-files.com/658fab387c2eeaabe2975079/65963a1daee00667c94ae67a_ic-politics.svg",
    },
    {
        title: "Khoa học",
        link: "khoa-hoc",
        thumbnail: "https://assets-global.website-files.com/658fab387c2eeaabe2975079/659639d690cf72849d69a026_ic-science.svg",
    },
    {
        title: "Giải trí",
        link: "giai-tri",
        thumbnail: "https://assets-global.website-files.com/658fab387c2eeaabe2975079/6598d9cbb3e321ccea3b3fd4_ic-entertainment.svg",
    },
    {
        title: "Kinh doanh",
        link: "kinh-doanh",
        thumbnail: "https://assets-global.website-files.com/658fab387c2eeaabe2975079/6598d9c368533b35ff482de9_ic-business.svg",
    },
])
const date = new Date();
const days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1;
const currentDay = date.getDate();
const currentDayName = days[date.getDay()];
const currentDate = `${currentDay}/${currentMonth}/${currentYear}`;
console.log(currentDayName);
console.log(currentDate);

</script>
<template>
    <div class="bg-[#eceff2] ">
        <div class="container-content py-[80px] mt-[120px]">
            <h2 class="font-normal text-4xl mb-6">Khám phá theo danh mục</h2>
            <div class="category-list">
                <!-- Loop through the array and populate the divs -->
                <div v-for="category in arrCategory" :key="category.title"
                    class="p-6 flex flex-col gap-[70px] bg-white">
                    <div>
                        <router-link class="text-[#363636]" :to="`/category/${category.title}`">
                            <h3 class="text-[#363636] text-2xl mb-6 font-normal">{{ category.title }}</h3>
                        </router-link>
                        <div class="text-sm font-medium">Đi tới <router-link class="text-[#363636]"
                                :to="`/category/${category.title}`">{{
                                    category.title }}</router-link></div>
                    </div>
                    <img :src="category.thumbnail" class="w-[80px] h-[80px]" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.category-list{
    grid-column-gap: 30px;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid;
}
@media screen and (max-width: 991px) {
    .category-list {
        grid-row-gap: 30px;
        grid-template-columns: 1fr 1fr;
    }
}
@media screen and (max-width: 767px) {
    .category-list {
        grid-column-gap: 20px;
        grid-row-gap: 20px;
    }
}
@media screen and (max-width: 479px) {
    .category-list {
        grid-template-columns: 1fr;
    }
}
</style>