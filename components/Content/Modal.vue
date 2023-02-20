<template>
    <div @click="onClose">
        modal
        <component :is="context" />
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, resolveComponent } from 'vue';

const props = defineProps<{
    name: string;
    onClose: () => void;
}>();
const context = defineAsyncComponent(() => import(`@/components/Content/Bundle/${props.name}.vue`));
</script>