<template>
    <div
        class="w-1/2 mb-6 pt-16"
        style="cursor: pointer;"
        @click="openChannel"
        @mouseover="isActive = true"
        @mouseleave="isActive = false"
    >
        <!-- youtube icon -->
        <div
            class="flex justify-center -mb-4"
            :class="isActive ? 'animate-bounce duration-500' : ''"
        >
            <img src="@/static/youtube.png" @click="openChannel" />
        </div>
        <!-- title text -->
        <div
            class="
                font-bold text-center
                w-32 h-34 shadow-lg rounded bg-blue-400
                mb-8 p-3 w-auto
            "
        >
            Flux Hunter
        </div>
        <div
            class="
                flex justify-center
                rounded-full
            "
        >
            <img
                class="rounded-full -mt-10"
                :class="isActive ? 'animate-spin' : ''"
                src="@/static/ownerProfile.jpg"
                style="width: 60px; height: 60px;"
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