import {defineStore} from 'pinia';

export const SliderStore = defineStore({
    id: 'SliderStore',
    state: () => ({isCollapsed: false}),

    getters: {
        getIsCollapsed: (state) => state.isCollapsed,
    },

    actions: {
        actionCollapse(isCollapsed: boolean) {
            this.isCollapsed = isCollapsed;
        },
    },
});
