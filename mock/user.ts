import { Random } from "mockjs";
import { MockMethod } from "vite-plugin-mock";
export default [
    {
        url: "/api/user/info",
        method: "get",
        response: () => {
            return {
                code: 200,
                message: "请示成功",
                status: "success",
                data: {
                    name: "徐乐",
                    age: 18,
                    avatar: "https://avatars.githubusercontent.com/u/103309515?v=4",
                    permissions: ["article_edit", "markdown_editor", "base_editor"],
                },
            };
        },
    },
    {
        url: "/api/login",
        method: "post",
        response: () => {
            return {
                code: 200,
                message: "登录成功",
                status: "success",
                data: {
                    token: Random.string(10),
                },
            };
        },
    },
] as MockMethod[];
