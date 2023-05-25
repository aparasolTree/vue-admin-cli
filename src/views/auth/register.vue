<script setup lang="ts"></script>

<template>
    <!-- component -->
    <div class="w-screen h-screen bg-blue-400">
        <div class="flex flex-col items-center justify-center flex-1 h-full px-4 sm:px-0">
            <div
                class="flex w-full bg-white rounded-lg shadow-lg sm:w-3/4 lg:w-1/2 sm:mx-0"
                style="height: 500px"
            >
                <div class="flex flex-col w-full p-4 md:w-1/2">
                    <div class="flex flex-col justify-center flex-1 mb-8">
                        <h1 class="text-4xl font-thin text-center">用户登录</h1>
                        <div class="w-full mt-4">
                            <form class="w-3/4 mx-auto form-horizontal" method="POST" action="#">
                                <div class="flex flex-col mt-4">
                                    <input
                                        id="email"
                                        type="text"
                                        class="flex-grow h-8 px-2 border rounded border-grey-400"
                                        name="email"
                                        value
                                        placeholder="Email"
                                    />
                                </div>
                                <div class="flex flex-col mt-4">
                                    <input
                                        id="password"
                                        type="password"
                                        class="flex-grow h-8 px-2 border rounded border-grey-400"
                                        name="password"
                                        required
                                        placeholder="Password"
                                    />
                                </div>
                                <div class="flex items-center mt-4">
                                    <input
                                        type="checkbox"
                                        name="remember"
                                        id="remember"
                                        class="mr-2"
                                    />
                                    <label for="remember" class="text-sm text-grey-dark"
                                        >Remember Me</label
                                    >
                                </div>
                                <div class="flex flex-col mt-8">
                                    <button
                                        type="submit"
                                        class="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                            <div class="mt-4 text-center">
                                <a
                                    class="text-xs no-underline hover:underline text-blue-dark"
                                    href="{{ route('password.request') }}"
                                    >Forgot Your Password?</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="hidden rounded-r-lg md:block md:w-1/2"
                    style="
                        background: url('https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80');
                        background-size: cover;
                        background-position: center center;
                    "
                ></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>
