<script setup lang="ts">
import WangEditor from "@/components/wangEditor/editor.vue";
import { ref } from "vue";
const content = ref("<p>xl</p>");
</script>

<template>
    <div class>
        <WangEditor v-model="content" />
    </div>
</template>

<style lang="scss"></style>
