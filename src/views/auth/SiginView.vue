<script lang="ts" setup>
import { reactive } from 'vue';
import { dataFormResgister } from '@/@types';

const formState = reactive < dataFormResgister > ({
    lastName: "",
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: 0,
});
const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};
</script>
<template>
    <section class="bg-white">
        <div class="flex justify-center min-h-screen">
            <div class="hidden bg-cover lg:block lg:w-2/5"
                style="background-image: url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')">
            </div>

            <!-- from -->
            <div class="flex items-center flex-col justify-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                <div class="flex items-center flex-col justify-center">
                    <div class="w-full">
                        <h1 class="text-2xl font-semibold tracking-wider text-gray-800 capitalize ">
                            Đăng ký Tài Khoản Miễn Phí Của Bạn Bây Giờ.
                        </h1>

                        <p class="mt-4 text-gray-500">
                            Tôi sẽ giúp bạn thiết lập bạn có thể xác minh tài khoản cá nhân của mình và bắt đầu thiết
                            lập hồ
                            sơ của mình.
                        </p>

                        <a-form :layout="'vertical'" :model="formState" name="basic" autocomplete="off"
                            @finish="onFinish" @finishFailed="onFinishFailed"
                            class="grid grid-cols-1 gap-x-6 gap-y-3 pt-8 md:grid-cols-2">
                            <a-form-item label="Họ" name="lastName"
                                :rules="[{ required: true, message: 'Please input your lastName!' }]">
                                <a-input v-model:value="formState.lastName" class="px-5 py-3" placeholder="John" />
                            </a-form-item>

                            <a-form-item label="Tên" name="firstName"
                                :rules="[{ required: true, message: 'Please input your firstName!' }]">
                                <a-input v-model:value="formState.firstName" class="px-5 py-3" placeholder="Snow" />
                            </a-form-item>

                            <a-form-item label="Số điện thoại" name="phone"
                                :rules="[{ required: true, message: 'Please input your phone!' }]">
                                <a-input v-model:value="formState.phone" class="px-5 py-3"
                                    placeholder="XXX-XX-XXXX-XXX" />
                            </a-form-item>

                            <a-form-item label="Địa chỉ email" name="email"
                                :rules="[{ required: true, message: 'Please input your email!' }]">
                                <a-input v-model:value="formState.email" class="px-5 py-3"
                                    placeholder="johnsnow@example.com" />
                            </a-form-item>

                            <a-form-item label="Mật khẩu" name="password"
                                :rules="[{ required: true, message: 'Please input your password!' }]">
                                <a-input-password v-model:value="formState.password" class="px-5 py-3"
                                    placeholder="Nhập mật khẩu của bạn" />
                            </a-form-item>

                            <a-form-item label="Xác nhận mật khẩu" name="confirmPassword"
                                :rules="[{ required: true, message: 'Please input your confirmPassword!' }]">
                                <a-input-password v-model:value="formState.confirmPassword" class="px-5 py-3"
                                    placeholder="Nhập lại mật khẩu của bạn" />
                            </a-form-item>

                            <button
                                class="boder-gray flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                <span>Đăng ký </span>

                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 rtl:-scale-x-100"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>

                            <p class="text-center block m-0 text-sm leading-10 text-gray-600">Bạn đã có tài khoản
                                <router-link to="/login" class="text-sm font-medium text-blue-500 no-underline">Đăng
                                    nhập
                                    ngay</router-link>
                            </p>

                        </a-form>
                    </div>


                </div>

                <div class="">
                    <p class="block m-0 text-sm leading-10 text-gray-600">Trải nghiệm không cần đăng ký <router-link
                            to="/" class="text-sm font-medium text-blue-500 no-underline">bấm tại đây</router-link></p>
                </div>
            </div>

        </div>
    </section>
</template>

<style lang="">

</style>