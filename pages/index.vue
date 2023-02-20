<template>
    <div>
        <NuxtLayout name="default" />
        <ContentList
            v-for="(item, idx) in list"
            :ref="el => listRef.push(el)"
            :key="item.title + idx"
            :name="item.title"
            :idx="idx"
            :title="item.title"
            @click="openModal(idx)"
        />
        <ContentModal
            v-if="isOpen"
            :name="list[contentIdx].ele"
            :onClose="closeModal"
        />
    </div>
</template>

<script setup lang="ts">
import ContentBundle from '~~/static/ContentBundle.json';
import { ref } from 'vue';
const listRef = ref<HTMLElement[]>([]);
let contentIdx = ref<number>(0);
const isOpen = ref(false);
const list = ref<{ title: string; ele: string; }[]>([]);
ContentBundle.list.map( item => list.value.push(item) );
const openModal = (idx: number) => {
    if(isOpen.value) return;
    isOpen.value = true;
    contentIdx.value = idx;
};
const closeModal = () => {
    isOpen.value = false;
};
</script>