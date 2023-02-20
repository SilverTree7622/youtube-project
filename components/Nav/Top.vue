<template>
    <div class="flex sm:justify-center space-x-4" style="cursor: pointer;">
        <img src="../../youtube.png" @click="openChannel" />
    </div>
</template>

<script setup lang="ts">
const openChannel = () => {
    window.open('https://www.youtube.com/channel/UCBJnFgIQ9YORTiz10_Mgy_A');
};
</script>