<script setup lang="ts">
import { ref, nextTick } from "vue";
import { echart1, echart2 } from "./echart";
import * as echarts from "echarts";
interface ICard {
    title: string;
    price: number;
    icon: string;
    iconColor: string;
    totalTitle: string;
    total: number;
}
const cards = ref<ICard[]>([
    {
        title: "总人数",
        price: 23343,
        iconColor: "text-violet-500",
        icon: "fas fa-address-card",
        total: 3892982,
        totalTitle: "总人数",
    },
    {
        title: "销售额",
        price: 18393,
        iconColor: "text-green-600",
        icon: "fas fa-apple-alt",
        total: 9387382,
        totalTitle: "总销售额",
    },
    {
        title: "订单数",
        price: 3803,
        iconColor: "text-blue-500",
        icon: "fas fa-award",
        total: 83493,
        totalTitle: "总订单数",
    },
    {
        title: "评论数",
        price: 8994,
        iconColor: "text-red-500",
        icon: "fas fa-baseball-ball",
        total: 48920,
        totalTitle: "总评论",
    },
]);

nextTick(() => {
    echarts.init(document.getElementById("echart1") as HTMLDivElement).setOption(echart1);
    echarts.init(document.getElementById("echart2") as HTMLDivElement).setOption(echart2);
});
</script>

<template>
    <div>
        <div class="grid gap-3 bg-gray-100 md:grid-cols-4">
            <el-card
                shadow="hover"
                :body-style="{ padding: '20px' }"
                v-for="(card, index) of cards"
                :key="index"
                class="cursor-pointer"
            >
                <template #header>
                    <div class="flex items-center justify-between">
                        {{ card.title }}
                        <el-tag type="danger" size="small" effect="dark">月</el-tag>
                    </div>
                </template>

                <section class="flex items-center justify-between mt-3">
                    <span class="text-3xl">$29322</span>
                    <i :class="[card.icon, card.iconColor]" class="text-5xl"></i>
                </section>
                <section class="flex justify-between mt-6 text-base">
                    {{ card.totalTitle }}
                    <span class>{{ card.total }}</span>
                </section>
            </el-card>
        </div>

        <div class="grid gap-3 mt-5 md:grid-cols-2">
            <el-card shadow="always" :body-style="{ padding: '20px' }">
                <template #header>
                    <div>用户统计</div>
                </template>
                <div id="echart1" class="w-full h-72"></div>
            </el-card>
            <el-card shadow="always" :body-style="{ padding: '20px' }">
                <template #header>
                    <div>销售客</div>
                </template>
                <div id="echart2" class="w-full h-72"></div>
            </el-card>
        </div>
    </div>
</template>

<style lang="scss"></style>
