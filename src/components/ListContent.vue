<template>
  <div class="description-store">
    <button @click="selectPage()" class="btn-prev">Назад</button>
    <div v-for="(item, index) in descriptionStore.listcontent.data"
         :key="index"
    >
      <h2 @click="getItem(route.params.page+ index)" class="item-name">{{ item.name }}</h2>
    </div>
  </div>
</template>

<script setup>
//"Подложка" для списка элементов из выбранной рубрики card-desc

import {useDescriptionStore} from "../store/description-store";
import {useRoute} from "vue-router";
import router from "@/router/index.js";


const route = useRoute()

const descriptionStore = useDescriptionStore()
descriptionStore.fetchListContentData(route.params.page)


const selectPage = () => {
  return router.push(`/`)
}

const getItem = (index) => {
  return router.push(`/descriptions/${index}`)
}

</script>

<style scoped>

</style>