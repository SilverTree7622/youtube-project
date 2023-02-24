<template>
    <div>
        <!-- black background -->
        <div
            class="
                fixed top-0 left-0 right-0 bottom-0
                w-full h-full bg-black opacity-50
            "
        ></div>
        

        <!-- Main modal -->
        <div
            class="
                outline-none
                flex items-center justify-center
                fixed top-0 left-0 right-0 z-50
                overflow-x-hidden overflow-y-hidden
                w-full h-full p-4
            "
            id="defaultModal"
            aria-hidden="true"
        >
            <!-- Modal content -->
            <div
                class="
                    relative h-[calc(100%-1rem)] w-auto translate-y-[-50px] transition-all duration-300 ease-in-out min-[576px]:mt-7 min-[576px]:h-[calc(100%-3.5rem)]
                    w-full max-w-2xl
                "
            >
                <div class="
                        relative bg-white rounded-lg shadow
                        dark:bg-gray-700 flex flex-col
                        max-h-[100%]
                    "
                >
                    <!-- x close btn -->
                    <button
                        class="
                            text-gray-400 bg-transparent
                            hover:bg-gray-200 hover:text-gray-900
                            dark:hover:bg-gray-600 dark:hover:text-white
                            rounded-lg text-sm p-1.5 ml-auto inline-flex
                        "
                        type="button"
                        @click="onClose"
                        data-modal-hide="defaultModal"
                    >
                        <svg aria-hidden="true" class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                    <!-- list component -->
                    <div
                        class="
                            dark:text-white
                            text-xl font-semibold text-gray-900 p-4
                        "
                    >
                        <div class="w-full text-center">
                            {{ title }}
                        </div>
                        <component
                            class="
                                relative overflow-y-auto p-4
                            "
                            :is="context"
                        />
                    </div>
                    <!-- Modal footer -->
                    <div class="inline-block flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button data-modal-hide="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                        <button data-modal-hide="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, resolveComponent } from 'vue';
const props = defineProps<{
    name: string;
    title: string;
    onClose: () => void;
}>();
const context = defineAsyncComponent(() => import(`@/components/Content/Bundle/${props.name}.vue`));
</script>