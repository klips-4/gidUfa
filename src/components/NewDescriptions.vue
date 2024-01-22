<template>
    <div v-for="(item, index) in descriptionStore.listcontent.data[route.params.page]"
         :key="index"
    >
        <h2>
            {{item}}
        </h2>
    </div>
</template>

<script setup>
import {useDescriptionStore} from "@/store/description-store.js";
import {useRoute} from "vue-router";

const route = useRoute()
const descriptionStore = useDescriptionStore()


</script>

<style scoped>

</style>