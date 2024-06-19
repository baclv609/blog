<script lang="ts" setup>
import { computed, ref } from "vue";
import Menu from "./Menu.vue";
import { SliderStore } from "@/stores/Slider.ts";

defineProps({
  isMobile: {
    type: Boolean,
    default: false,
  },
});
const store = SliderStore();
const isCollapsed = computed(() => store.getIsCollapsed);
const handleSider = () => {
  store.actionCollapse(!isCollapsed.value);
};
const selectedKeys = ref(["1"]);
const collapsed = ref(false);
</script>

<template>
  <div>
    <a-layout-sider
        :width="!isCollapsed ? 220 : 80"
        :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }"
        v-model:collapsed="isCollapsed"
        :trigger="null"
        collapsible
        v-if="!isMobile"
    >
      <div class="logo-wrapper mb-3 flex justify-center ">
        <img
            v-if="!isCollapsed"
            alt="Logo full"
            src="@/assets/images/vue.svg"
            class="w-[120px] max-h-[64px]"
        />
        <img
            v-else
            alt="Logo"
            src="@/assets/images/vue.svg"
            class="w-[30px] max-h-[64px]"
        />
      </div>
      <Menu :isMobile="false"></Menu>
    </a-layout-sider>

    <div v-if="isMobile">
      <a-drawer
          :width="256"
          placement="left"
          :closable="false"
          :open="isCollapsed"
          @close="handleSider"
          :body-style="{ padding: 0 }"
          class="slider-drawer theme-dark-drawer"
      >
        <div clasisMobiles="logo-wrapper mb-2 mt-2">
          <img
              alt="Logo full"
              src="@/assets/images/vue.svg"
              class="w-[120px] max-h-[64px]"
          />
        </div>
        <Menu :isMobile="false" />
      </a-drawer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.logo-wrapper {
  height: 64px;
  // padding-left: 24px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

:deep(ant-badge) {
  position: absolute;
  right: 16px;
  top: 12px;

  &:deep(-count) {
    box-shadow: none;
    min-width: 18px;
    height: 18px;
    font-size: 8px;
    line-height: 18px;
  }
}

.layout-sider-pc {
  height: 100vh;
}

.layout-sider-mobile {
  .ant-drawer-body {
    padding: 0;
  }
}
</style>
