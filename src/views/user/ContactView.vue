<script>

</script>
<template>
    <div>
        <!-- Contact Us -->
        <div class="container-content px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div class="max-w-2xl lg:max-w-5xl mx-auto">
                <div class="text-center">
                    <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl">
                        Liên hệ chúng tôi
                    </h1>
                    <p class="mt-1 text-gray-600">
                        Chúng tôi muốn nói về cách chúng tôi có thể giúp bạn.
                    </p>
                </div>

                <div class="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
                    <!-- Card -->
                    <div class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 boder-gray">
                        <h2 class="mb-8 text-xl font-semibold text-gray-800">
                            Điền vào mẫu
                        </h2>

                        <form>
                            <div class="grid gap-4 ">
                                <!-- Grid -->
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label for="firstname" class="sr-only">Họ</label>
                                        <input type="text" name="firstname" id="firstname"
                                            class="py-3 px-4 block w-full  boder-gray rounded-lg text-sm focus:border-blue-400 focus:ring-blue-500"
                                            placeholder="Họ">
                                    </div>

                                    <div>
                                        <label for="lastname" class="sr-only">Tên</label>
                                        <input type="text" name="lastname" id="lastname"
                                            class="py-3 px-4 block w-full  boder-gray rounded-lg text-sm focus:border-blue-400 focus:ring-blue-500"
                                            placeholder="Tên">
                                    </div>
                                </div>
                                <!-- End Grid -->

                                <div>
                                    <label for="email" class="sr-only">E-mail</label>
                                    <input type="email" name="email" id="email"
                                        autocomplete="email"
                                        class="py-3 px-4 block w-full  boder-gray rounded-lg text-sm focus:border-blue-400 focus:ring-blue-500"
                                        placeholder="E-mail">
                                </div>

                                <div>
                                    <label for="phone" class="sr-only">Số Điện Thoại</label>
                                    <input type="text" name="phone" id="phone"
                                        class="py-3 px-4 block w-full boder-gray rounded-lg text-sm focus:border-blue-400 focus:ring-blue-500"
                                        placeholder="Số Điện Thoại">
                                </div>

                                <div>
                                    <label for="contact" class="sr-only">Nội dung</label>
                                    <textarea id="contact" name="contact" rows="4"
                                        class="py-3 px-4 block w-full border boder-gray rounded-lg text-sm focus:border-blue-400 focus:ring-blue-500"
                                        placeholder="Nội dung"></textarea>
                                </div>
                            </div>
                            <!-- End Grid -->

                            <div class="mt-4 grid">
                                <button type="submit"
                                    class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700">Gửi yêu cầu</button>
                            </div>

                            <div class="mt-3 text-center">
                                <p class="text-sm text-gray-500">
                                    Chúng tôi sẽ liên hệ lại với bạn sau 1-2 ngày làm việc.
                                </p>
                            </div>
                        </form>
                    </div>
                    <!-- End Card -->

                    <div class="divide-y divide-gray-200">
                        <!-- Icon Block -->
                        <div class="flex gap-x-7 py-6">
                            <svg class="flex-shrink-0 size-6 mt-1.5 text-gray-800" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                <path d="M12 17h.01" />
                            </svg>
                            <div class="grow">
                                <h3 class="font-semibold text-gray-800">Kiến thức cơ bản</h3>
                                <p class="mt-1 text-sm text-gray-500">Chúng tôi sẵn sàng trợ giúp nếu bạn có bất kỳ câu hỏi hoặc mã nào.</p>
                                <a class="no-underline mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800"
                                    href="#">
                                    Liên hệ hỗ trợ
                                    <svg class="flex-shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1"
                                        width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                                            fill="currentColor" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <!-- End Icon Block -->

                        <!-- Icon Block -->
                        <div class="flex gap-x-7 py-6">
                            <svg class="flex-shrink-0 size-6 mt-1.5 text-gray-800" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                                <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                            </svg>
                            <div class="grow">
                                <h3 class="font-semibold text-gray-800">Câu hỏi thường gặp</h3>
                                <p class="mt-1 text-sm text-gray-500">Tìm kiếm Câu hỏi thường gặp của chúng tôi để biết câu trả lời cho bất kỳ điều gì bạn có thể hỏi.</p>
                                <a class="no-underline mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800"
                                    href="#">
                                    Truy cập Câu hỏi thường gặp
                                    <svg class="flex-shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1"
                                        width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                                            fill="currentColor" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <!-- End Icon Block -->

                        <!-- Icon Block -->
                        <div class=" flex gap-x-7 py-6">
                            <svg class="flex-shrink-0 size-6 mt-1.5 text-gray-800" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="m7 11 2-2-2-2" />
                                <path d="M11 13h4" />
                                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                            </svg>
                            <div class="grow">
                                <h3 class="font-semibold text-gray-800">API nhà phát triển</h3>
                                <p class="mt-1 text-sm text-gray-500">Hãy xem hướng dẫn bắt đầu phát triển nhanh của chúng tôi.</p>
                                <a class="no-underline mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800"
                                    href="#">
                                    Liên hệ bán hàng
                                    <svg class="flex-shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1"
                                        width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                                            fill="currentColor" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <!-- End Icon Block -->

                        <!-- Icon Block -->
                        <div class=" flex gap-x-7 py-6">
                            <svg class="flex-shrink-0 size-6 mt-1.5 text-gray-800" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path
                                    d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                                <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                            </svg>
                            <div class="grow">
                                <h3 class="font-semibold text-gray-800">Liên hệ với chúng tôi qua email</h3>
                                <p class="mt-1 text-sm text-gray-500">Thay vào đó, nếu bạn muốn viết email cho chúng tôi, vui lòng sử dụng</p>
                                <a class="no-underline mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800"
                                    href="#">
                                    example@site.com
                                </a>
                            </div>
                        </div>
                        <!-- End Icon Block -->
                    </div>
                </div>
            </div>
        </div>
        <!-- End Contact Us -->
    </div>
</template>
<style lang="scss">

</style>