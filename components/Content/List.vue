<template>
    <div
        class="flex flex-row items-center w-auto bg-green"
        @mouseenter="onPtrEnter"
        @mouseleave="onPtrLeave"
        @click="isToggled = !isToggled"
    >
        <!-- youtube video thumbnail -->
        <div class="basis-1/3 p-1">
            <img
                class="w-64 h-48 transition ease-in-out rounded"
                :src="thumbnail"
                v-if="isToggled"
                alt="youtube video thumbnail"
            />
        </div>
        <!-- showing text btn -->
        <div
            class="
                basis-1/3
                transition ease-in-out
                hover:-translate-y-1 hover:scale-110 duration-100
                text-center rounded p-1
                bg-green-300 bg-center
            "
            :class="isToggled ? 'font-bold' : ''"
            @click="openModalAfterToggled"
        >
            {{ title }}
        </div>
        <!-- open url tab -->
        <div
            class="
                basis-1/3 w-full h-full
                flex flex-col justify-center items-center
            "
            style="cursor: pointer;"
            v-if="isToggled"
        >
            <div
                class="
                    transition-opaicty ease-in-out duration-300
                    hover:opacity-100 opacity-50
                    flex flex-col justify-center items-center
                "
                @mouseover="isIconActive = true"
                @mouseleave="isIconActive = false"
                @click="openVideoURL"
            >
                <div
                    class="
                        font-bold text-center
                        color-white bg-sky-500 rounded p-1
                    "
                >
                    영상 보러가쉴?
                </div>
                <svg
                    class="
                        w-12 h-12
                        color-white bg-sky-500
                        rounded-full bg-white p-1 m-1
                    "
                    data-darkreader-inline-stroke="" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"></path>
                </svg>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps<{
    title: string;
    id: string;
    idx: number;
    openModal: (idx: number) => void;
}>();
const isToggled = ref(false);
const isActive = ref(false);
const isIconActive = ref(false);
const onPtrEnter = () => {
    isActive.value = true;
};
const onPtrLeave = () => {
    isToggled.value = false;
    isActive.value = false;
};
const openModalAfterToggled = () => {
    if(!isToggled.value) return;
    props.openModal(props.idx);
};
const openVideoURL = () => {
    window.open(`https://www.youtube.com/watch?v=${props.id}`);
};
const thumbnail = ref(`https://img.youtube.com/vi/${props.id}/mqdefault.jpg`);
</script>