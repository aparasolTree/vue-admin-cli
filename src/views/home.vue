<script setup lang="ts">
import utils from "@/utils";
</script>

<template>
    <div class="flex flex-col items-center justify-center w-screen h-screen bg-gray-700">
        <img
            src="https://avatars.githubusercontent.com/u/103309515?v=4"
            class="object-cover w-40 h-40 mb-5 border-8 border-white rounded-full"
        />
        <div>
            <router-link :to="{ name: 'admin.home' }" class="xl-button">后台管理</router-link>
            <router-link
                v-if="!utils.user.isLogin()"
                :to="{ name: 'login' }"
                class="ml-3 xl-button xl-danger"
                >用户登录</router-link
            >
        </div>
    </div>
</template>
