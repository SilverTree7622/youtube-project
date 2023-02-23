<template>
    <div class="w-full h-full">
        <NuxtLayout name="default" />
        <div class="grid grid-cols-1 gap-4">
            <ContentList
                v-for="(item, idx) in list"
                :ref="el => listRef.push(el)"
                :idx="idx"
                :key="item.title + idx"
                :name="item.title"
                :title="item.title"
                :id="item.id"
                :openModal="openModal"
            />
        </div>
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
const list = ref<{ title: string; ele: string; id: string; }[]>([]);
ContentBundle.list.map( item => list.value.push(item) );
list.value.reverse();
const openModal = (idx: number) => {
    console.log('idx from openModal: ', idx);
    if(isOpen.value) return;
    isOpen.value = true;
    contentIdx.value = idx;
};
const closeModal = () => {
    isOpen.value = false;
};
</script>