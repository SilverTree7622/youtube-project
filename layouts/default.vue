<template>
    <div>
        <ContentHeader />
        <ContentList
            v-for="(item, idx) in list"
            :key="item.title + idx"
            :name="item.title"
            :title="item.title"
            @click="openModal"
        />
        <ContentModal ref="modalRef" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const modalRef = ref();
const list = ref<{ title: string; description: string; }[]>([]);
list.value.push(
    {
        title: '폼_미쳤다.ts',
        description: '유튜브 프로젝트들 desc',
    }
);
const openModal = () => {
    // todos: add or change modal context
    console.log('open modal called');
};
</script>