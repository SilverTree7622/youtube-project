<template>
    <div
        class="mb-6"
        style="cursor: pointer;"
        @click="openChannel"
        @mouseover="isActive = true"
        @mouseleave="isActive = false"
    >
        <!-- youtube icon -->
        <div
            class="flex sm:justify-center -mb-4"
            :class="isActive ? 'animate-bounce duration-500' : ''"
        >
            <img src="@/static/youtube.png" @click="openChannel" />
        </div>
        <!-- title text -->
        <div
            class="
                place-items-center
                container content-center
                font-bold text-center
                w-32 h-34 shadow-lg rounded bg-blue-400
                mb-8
                p-3
                w-auto
            "
        >
            유튜브 프로젝트
        </div>
        <div>
            <img
                class="
                    place-items-center
                    container content-center
                    rounded-full
                    -mt-8
                "
                :class="isActive ? 'animate-spin' : ''"
                :src="thumbnail"
                alt="youtube channel thumbnail"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ContentBundle from '~~/static/ContentBundle.json';
const isActive = ref(false);

const openChannel = () => {
    window.open('https://www.youtube.com/channel/UCBJnFgIQ9YORTiz10_Mgy_A');
};
const owner = ContentBundle.profile.owner;
const thumbnail = `http://gdata.youtube.com/feeds/api/users/communitychannel?fields=yt:${owner},media:thumbnail&alt=json-in-script&format=5&callback=showImage`;
</script>