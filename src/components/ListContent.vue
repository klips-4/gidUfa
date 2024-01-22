<template>
    <div v-for="(item, index) in descriptionStore.listcontent.data"
         :key="index"
         >
        <h2 @click="selectPageInfo(index)"
        >
            {{item.name}}
        </h2>
      </div>


</template>

<script setup>

import {useDescriptionStore} from "../store/description-store";
import {useRoute} from "vue-router";
import router from "@/router/index.js";

const route = useRoute()
const descriptionStore = useDescriptionStore()
descriptionStore.fetchListContentData(route.params.page)

const selectPageInfo = (page) => {
    return router.push(`/new_descriptions/${page}`)
}
</script>

<style scoped>
h2:hover{
    cursor: pointer;
    color: #12c274;
}

</style>