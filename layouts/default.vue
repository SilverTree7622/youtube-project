<template>
    <div>
        <NavTop />
        <ContentHeader />
        <ContentList
            v-for="(item, idx) in list"
            :key="item.title + idx"
            :name="item.title"
            :title="item.title"
            @click="openModal"
        />
        <ContentModal ref="modalRef" v-if="isOpen"/>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const modalRef = ref();
const list = ref<{ title: string; description: string; }[]>([]);
list.value.push(
    {
        title: '폼_미쳤다',
        description: '유튜브 프로젝트들 desc',
    }
);
const isOpen = ref(false);
const openModal = () => {
    const { value } = modalRef;
    
};
</script>