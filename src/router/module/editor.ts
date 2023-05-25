import { RouteRecordRaw } from "vue-router";
export default {
    name: "editor",
    path: "/editor",
    component: () => import("@/layouts/admin.vue"),
    meta: { auth: true, menu: { title: "编辑器", icon: "EditOne" } },
    children: [
        {
            name: "wangeditor",
            path: "wangeditor",
            component: () => import("@/views/editor/wangeditor.vue"),
            meta: { permission: "base_editor", menu: { title: "富文本编辑器" } },
        },
    ],
} as RouteRecordRaw;
