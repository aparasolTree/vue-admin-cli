import { ConfigEnv, loadEnv, defineConfig } from "vite";
import alias from "./vite/alias";
import { parseEnv } from "./vite/util";
import setupPlugins from "./vite/plugins";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig(({ command, mode }: ConfigEnv) => {
    const isBuild = command == "build";
    const root = process.cwd();
    const env = parseEnv(loadEnv(mode, root));

    return {
        base: "/vue-admin-cli/",
        plugins: [...setupPlugins(isBuild), visualizer()],
        resolve: {
            alias,
        },
        build: {
            rollupOptions: {
                emptyOutDir: true,
                output: {
                    manualChunks(id: string) {
                        if (id.includes("node_modules")) {
                            return id.toString().split("node_modules/")[1].split("/")[0].toString();
                        }
                    },
                },
            },
        },
        server: {
            proxy: {
                "/api": {
                    target: env.VITE_API_URL,
                    changeOrigin: true,
                    rewrite: (path: string) => path.replace(/^\/api/, ""),
                },
            },
        },
    };
});
