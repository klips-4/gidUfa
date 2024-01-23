<template>
    <div v-for="(item, index) in descriptionStore.listcontent.data[route.params.page]"
         :key="index"
    >
        <h2>
            {{item}}
        </h2>

    </div>
    <h1 @click="a1">ryjgrf</h1>
</template>

<script setup>
import {onBeforeMount, ref} from "vue";

import {useDescriptionStore} from "@/store/description-store.js";
import {useRoute} from "vue-router";
const route = useRoute()
const descriptionStore = useDescriptionStore()
const {ContentArray} = defineProps()

onBeforeMount(() => {
    descriptionStore
})
const a1 = () => {
  console.log(ContentArray)
}

</script>

<style scoped>

</style>