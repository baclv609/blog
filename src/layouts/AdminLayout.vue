<script lang="ts" setup>
import { computed, createVNode, onMounted, onUnmounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { Modal } from 'ant-design-vue';
import {
  ExclamationCircleOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons-vue';

import { SliderStore } from '@/stores/Slider.ts';
import Sider from '@/layouts/common/Slider.vue';

const store = SliderStore();
const isMobile = ref(false);
const router = useRouter();

const handleResize = () => {
  const widthScreen = window.innerWidth || 0;
  isMobile.value = widthScreen <= 768;
};
const isCollapsed = computed(() => store.getIsCollapsed);
onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize();
});
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

const handleSider = () => {
  store.actionCollapse(!isCollapsed.value);
};

const appVersion = localStorage.getItem('VERSION_APP');

const confirmLogout = () => {
  Modal.confirm({
    title: 'Đăng xuất',
    icon: createVNode(ExclamationCircleOutlined),
    content: 'Bạn có chắc chắn muốn đăng xuất không?',
    okText: 'Đồng ý',
    cancelText: 'Hủy',
    onOk: () => {
      router.push({ name: 'login' });
    },
  });
};
</script>

<template>
  <a-layout style="min-height: 100vh">
    <Sider :trigger="null" :is-mobile="isMobile" />
    <a-layout :style="!isMobile
      ? {
        marginLeft: isCollapsed ? '80px' : '220px',
        transition: 'all 0.2s',
      }
      : {}
      ">
      <a-layout-header>
        <div class="flex justify-center items-center">
          <div class="!cursor-pointer px-2" @click="handleSider">
            <template v-if="isCollapsed">
              <MenuFoldOutlined />
            </template>
            <template v-else>
              <MenuUnfoldOutlined />
            </template>
          </div>
          <div class="flex items-center gap-x-1 ml-auto">
            <a-dropdown>
              <div class="flex items-center cursor-pointer">
                <a-avatar size="small" class="mr-1">
                  <template #icon>
                    <UserOutlined />
                  </template>
                </a-avatar>

                <span class="text-base"> Ha </span>
              </div>

              <template #overlay>
                <a-menu>
                  <a-menu-item>
                    <template #icon>
                      <UserOutlined />
                    </template>

                    Hồ sơ
                  </a-menu-item>

                  <a-menu-item @click="confirmLogout">
                    <template #icon>
                      <UserOutlined />
                    </template>

                    Đăng xuất
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>
        </div>
      </a-layout-header>

      <a-layout-content class="!m-4">
        <slot />
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Powered by common - v{{ appVersion }}</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style lang="scss" scoped>
:deep(.ant-layout-header) {
  padding: 0 15px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  z-index: 1;
}
</style>
