<template>
    <div
        @mouseover="isActive = true"
        @mouseleave="isActive = false"
    >
        <!-- showing btn -->
        <div
            class="
                transition ease-in-out
                hover:-translate-y-1 hover:scale-110 duration-100
                text-center rounded p-1
                bg-green-300 bg-center
            "
            :class="isActive ? 'font-bold' : ''"
        >
            {{ title }}
            <!-- youtube video thumbnail -->
            <div class="flex sm:justify-center">
                <img
                    class="
                        transition ease-in-out rounded
                    "
                    style="position: absolute;"
                    :src="thumbnail"
                    v-if="isActive"
                    alt="youtube video thumbnail"
                />
                <!-- open url tab -->
                <div
                    class="
                        transition-opaicty ease-in-out duration-300
                        hover:opacity-100 opacity-50
                        rounded-full bg-white p-1
                        mt-16
                    "
                    style="position: absolute; cursor: pointer; width: 40px; height: 40px;"
                    v-if="isActive"
                    data-tooltip-target="tooltip-animation"
                    @mouseover="isIconActive = true"
                    @mouseleave="isIconActive = false"
                    @click="openVideoURL"
                >
                    <svg
                        data-darkreader-inline-stroke="" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"></path>
                    </svg>
                </div>
                <div id="tooltip-animation" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    영상 새 창으로 열기
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps<{
    title: string;
    id: string;
}>();
const isActive = ref(false);
const isIconActive = ref(false);
const openVideoURL = () => {
    window.open(`https://www.youtube.com/watch?v=${props.id}`);
};
const thumbnail = ref(`https://img.youtube.com/vi/${props.id}/mqdefault.jpg`);
</script>