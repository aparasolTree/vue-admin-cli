<script setup lang="ts">
import userStore from "@/store/userStore";
import utils from "@/utils";
import menuService from "@/composables/menu";
import Notification from "@/components/notification.vue";
import Breadcrumb from "@/components/breadcrumb.vue";

const user = userStore();
const isFullScreen = ref<boolean>(false);
const fullScreen = () => {
    isFullScreen.value ? document.exitFullscreen() : document.documentElement.requestFullscreen();
    isFullScreen.value = !isFullScreen.value;
};
</script>

<template>
    <div class="flex items-center justify-between p-3 px-5 bg-white">
        <div class="flex items-center">
            <div @click="menuService.toggleState" class="mr-2 cursor-pointer">
                <icon-indent-right
                    theme="outline"
                    size="20"
                    fill="#06a17e"
                    v-if="menuService.close.value"
                />
                <icon-indent-left theme="outline" size="20" fill="#06a17e" v-else />
            </div>
            <Breadcrumb class="hidden md:block" />
        </div>
        <div class="relative flex items-center justify-center cursor-pointer">
            <Notification class="mr-8" />
            <icon-off-screen
                theme="outline"
                size="24"
                fill="#333"
                @click="fullScreen"
                class="mr-5"
                v-if="isFullScreen"
            />
            <icon-full-screen-one
                theme="outline"
                size="24"
                fill="#333"
                @click="fullScreen"
                class="mr-5"
                v-else
            />
            <div class="relative group">
                <div class="flex items-center justify-center">
                    <img :src="user.info?.avatar" class="object-cover w-8 h-8 rounded-full" />
                    <span class="ml-1 text-sm text-gray-600">{{ user.info?.name }}</span>
                </div>
                <section
                    class="absolute right-0 z-50 hidden px-5 bg-white border rounded-md shadow-sm group-hover:block top-full whitespace-nowrap"
                >
                    <div class="flex items-center py-3 border-b cursor-pointer">
                        <icon-log theme="outline" size="18" fill="#333" />
                        <span class="ml-2 text-xs text-gray-600">文档资料</span>
                    </div>
                    <div class="flex items-center py-3 cursor-pointer">
                        <icon-home theme="outline" size="18" fill="#333" />
                        <span class="ml-2 text-xs text-gray-600">网站首页</span>
                    </div>
                    <div class="flex items-center py-3 cursor-pointer" @click="utils.user.logout()">
                        <icon-logout theme="outline" size="18" fill="#333" />
                        <span class="ml-2 text-xs text-gray-600">退出登录</span>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>
