<script lang="ts">
import { computed, defineComponent, reactive, toRefs, watch } from 'vue';
import { PieChartOutlined } from '@ant-design/icons-vue';
import { SliderStore } from '@/stores/Slider.ts';

export default defineComponent({
  name: 'MenuLayout',
  components: {
    PieChartOutlined,
  },
  props: {
    isMobile: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const store = SliderStore();
    const isCollapsed = computed(() => store.getIsCollapsed);
    const handleSider = () => {
      if (props.isMobile) {
        store.actionCollapse(!isCollapsed.value);
      }
    };
    const state = reactive({
      collapsed: false,
      selectedKeys: ['1'],
      openKeys: ['sub1'],
      preOpenKeys: ['sub1'],
    });

    watch(
      () => state.openKeys,
      (_val, oldVal) => {
        state.preOpenKeys = oldVal;
      },
    );
    const toggleCollapsed = () => {
      state.collapsed = !state.collapsed;
      state.openKeys = state.collapsed ? [] : state.preOpenKeys;
    };

    return {
      ...toRefs(state),
      toggleCollapsed,
      handleSider,
    };
  },
});
</script>

<template>
  <div>
    <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" mode="inline" theme="dark"
      :inline-collapsed="collapsed">
      <a-menu-item key="1">
        <template #icon>
          <PieChartOutlined />
        </template>
        <router-link :to="{ name: 'dashboard' }"> Tổng quan </router-link>
      </a-menu-item>

      <a-menu-item key="2">
        <template #icon>
          <PieChartOutlined />
        </template>
        <router-link to="/admin/blog">Blog</router-link>
      </a-menu-item>

      <a-menu-item key="3">
        <template #icon>
          <PieChartOutlined />
        </template>
        <router-link to="/admin/category"> Danh mục </router-link>
      </a-menu-item>

      <a-sub-menu key="4">
        <template #title>
          <span>
            <PieChartOutlined />
            <span>Team</span>
          </span>
        </template>
        <a-menu-item key="3.1">Team 1</a-menu-item>
        <a-menu-item key="3.2">Team 2</a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="5">
        <template #title>
          <span>
            <PieChartOutlined />
            <span>Product</span>
          </span>
        </template>
        <a-menu-item key="5.1"><router-link to="/admin/auth/all">Admin</router-link></a-menu-item>
        <a-menu-item key="5.2">Biên tập viên</a-menu-item>
        <a-menu-item key="5.2">Người dùng</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
