<script setup lang="ts"></script>

<template>
    <div class="bg-gradient-to-r from-purple-300 to-blue-200">
        <div class="flex items-center justify-center w-full min-h-screen py-16">
            <div class="pb-8 overflow-hidden bg-white shadow sm:rounded-lg px-28">
                <div class="pt-8 text-center border-t border-gray-200">
                    <h1 class="font-bold text-purple-400 text-9xl">500</h1>
                    <h1 class="py-8 text-3xl font-medium">你访问的页面不存在</h1>
                    <!-- <p
						class="px-12 pb-8 text-2xl font-medium"
					>Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>-->
                    <router-link
                        to="/"
                        class="px-6 py-3 mr-6 font-semibold text-white rounded-md bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500"
                        >首页</router-link
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.text-9xl {
    font-size: 14rem;
}
@media (max-width: 645px) {
    .text-9xl {
        font-size: 5.75rem;
    }
    .text-6xl {
        font-size: 1.75rem;
    }
    .text-2xl {
        font-size: 1rem;
        line-height: 1.2rem;
    }
    .py-8 {
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    .px-6 {
        padding-left: 1.2rem;
        padding-right: 1.2rem;
    }
    .mr-6 {
        margin-right: 0.5rem;
    }
    .px-12 {
        padding-left: 1rem;
        padding-right: 1rem;
    }
}
</style>
