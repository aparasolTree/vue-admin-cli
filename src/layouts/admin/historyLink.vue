<script setup lang="ts">
import menuService from "@/composables/menu";
</script>

<template>
    <div
        class="hidden p-3 border-t border-b shadow-sm md:block bg-gray-50"
        v-show="menuService.history.value.length"
    >
        <div class="grid justify-start grid-flow-col gap-3">
            <div
                v-for="item of menuService.history.value"
                class="flex items-center justify-between px-3 py-2 text-sm duration-300 bg-white border rounded-sm shadow-sm cursor-pointer hover:bg-blue-700 hover:text-white"
                :class="{ 'bg-blue-600 text-white': $route.name == item.route }"
            >
                <router-link :to="{ name: item.route }">{{ item.title }}</router-link>
                <icon-close-one
                    theme="outline"
                    size="18"
                    class="ml-2"
                    :class="{ 'text-white': $route.name == item.route }"
                    @click="menuService.removeHistoryMenu(item)"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>
