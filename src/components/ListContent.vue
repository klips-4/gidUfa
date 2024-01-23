<template>
    <div v-for="(item, index) in descriptionStore.listcontent.data"
         :key="index"
         >
        <h2 @click="selectPageInfo(index)"
        >
            {{item.name}}
        </h2>
        <new-descriptions
                v-for="(card, index) in ContentArray"
                :key="index"
                :ContentArray="card"
        />
      </div>


</template>

<script setup>

import {useDescriptionStore} from "../store/description-store";
import {useRoute} from "vue-router";
import router from "@/router/index.js";
import NewDescriptions from "@/components/NewDescriptions.vue";


const route = useRoute()
const descriptionStore = useDescriptionStore()
descriptionStore.fetchListContentData(route.params.page)
const ContentArray = []

const selectPageInfo = (index) => {
    ContentArray.push(descriptionStore.listcontent.data[index])
    return router.push(`/new_descriptions/${index}`)
}
</script>

<style scoped>
h2:hover{
    cursor: pointer;
    color: #12c274;
}

</style>