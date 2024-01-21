<template>
1
    <div v-for="(item, index) in descriptionStore.listcontent.data"
         :key="index"
         >
        <h2 class="item-name">{{item.name}}</h2>
        <h2 class="item-name">{{descriptionStore.listcontent.data[index].name}}</h2>
      </div>


</template>

<script setup>

import {useDescriptionStore} from "../store/description-store";
import {useRoute} from "vue-router";
import router from "../router";

const route = useRoute()
const descriptionStore = useDescriptionStore()
descriptionStore.fetchListContentData(route.params.page)


</script>

<style scoped>

</style>