<script setup lang="ts">
import menuService from "@/composables/menu";
import { watch } from "vue";
import { useRoute } from "vue-router";
import * as icons from "@icon-park/vue-next";
const route = useRoute();

watch(route, () => menuService.setCurrentMenu(route), { immediate: true });
</script>

<template>
    <div class="admin-menu" :class="{ close: menuService.close.value }">
        <div class="menu w-[200px]" style="background-color: #30336b">
            <div class="logo">
                <icon-home theme="outline" size="18" fill="#dcdcdc" class="mr-2" />
                <span class="text-md">后台管理脚手架</span>
            </div>
            <!-- 菜单 -->
            <div class="container">
                <dl v-for="(menu, index) of menuService.menus.value" :key="index">
                    <dt @click="menuService.toggleParentMenu(menu)">
                        <section>
                            <!-- <i :class="menu.icon"></i> -->
                            <component
                                :is="icons[menu.icon!]"
                                size="18"
                                fill="#dcdcdc"
                                class="mr-2"
                            />
                            <span class="text-md">{{ menu.title }}</span>
                        </section>
                        <section>
                            <i
                                class="duration-300 fas fa-angle-down"
                                :class="{ 'rotate-180': menu.isClick }"
                            ></i>
                        </section>
                    </dt>
                    <dd :class="!menu.isClick || menuService.close.value ? 'hidden' : 'block'">
                        <div
                            :class="{ active: cmenu.isClick }"
                            v-for="(cmenu, key) of menu.children"
                            :key="key"
                            @click="$router.push({ name: cmenu.route })"
                        >
                            {{ cmenu?.title }}
                        </div>
                    </dd>
                </dl>
            </div>
        </div>
        <div class="block bg md:hidden" @click="menuService.toggleState"></div>
    </div>
</template>
<style lang="scss">
.admin-menu {
    @apply z-20;
    .menu {
        @apply h-full;
        .logo {
            @apply text-stone-50 flex items-center p-4;
        }
        .container {
            dl {
                @apply text-stone-50 text-sm relative p-4;

                dt {
                    @apply text-sm flex justify-between cursor-pointer items-center;
                    section {
                        @apply flex items-center;
                        i {
                            @apply mr-2 text-sm;
                        }
                    }
                }
                dd {
                    div:hover {
                        background-color: #535c68;
                    }
                    div {
                        @apply py-3 pl-4 my-2 text-white rounded-md cursor-pointer duration-300 bg-gray-700;
                        &.active {
                            background-color: #130f40;
                        }
                    }
                }
            }
        }
    }
}
@media screen and (min-width: 768px) {
    .admin-menu {
        &.close {
            .menu {
                width: auto;
                .logo {
                    @apply justify-center;
                    i {
                        @apply mr-0;
                    }
                    span {
                        @apply hidden;
                        &.i-icon {
                            @apply block mr-0;
                        }
                    }
                }
                .container {
                    dl {
                        dt {
                            @apply flex justify-center;

                            section {
                                i {
                                    @apply mr-0;
                                }
                                span {
                                    @apply hidden;
                                    &.i-icon {
                                        @apply block mr-0;
                                    }
                                }
                                &:nth-of-type(2) {
                                    @apply hidden;
                                }
                            }
                        }
                        &:hover {
                            dd {
                                @apply block absolute left-full top-[0px] w-[200px] bg-gray-700;
                                div {
                                    @apply m-0 rounded-none;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
@media screen and(max-width:768px) {
    .admin-menu {
        @apply h-screen w-[200px] absolute left-0 top-0 z-50;
        .menu {
            @apply h-full z-50 absolute;
            .close {
            }
        }
        .bg {
            @apply bg-gray-100 z-40 opacity-75 w-screen h-screen absolute left-0 top-0;
        }
        &.close {
            @apply hidden;
        }
    }
}
</style>
