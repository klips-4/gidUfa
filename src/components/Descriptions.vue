<template>
  <div class="description__wrapper">

    <button @click="selectPage()" class="btn-prev">Назад</button>

    <div class="fond">
      <span class="s1">ГИД</span>
      <span class="s2">УФА</span>
    </div>
    <div class="description-store">

      <div class="card-description">
        <div class="thumbnail"

        >
          <img :src="`./src/assets/images/fountains/${item.image}.jpg`" alt="where is the photo?" class="left">
        </div>
        <div class="right">
          <h2 class="item-name">{{ item.name }}</h2>
          <div class="coordinates">
            <span class="coordinates-item">Координаты: {{ item.coordinates }}</span>
          </div>
        </div>
        <div class="separator"></div>
        <div class="text">
          <p>{{ item.description }}</p>
          <div class="location">
            <span>Адрес: {{ item.destination }}</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//"Подложка" для подробного описания элементов из CityInformationsCards.vue

import router from "../router";
import {useDescriptionStore} from "../store/description-store";
import {useRoute} from "vue-router";
import {ref} from "vue";


const selectPage = () => {
  return router.push(`/`)
}
const route = useRoute()
const descriptionStore = useDescriptionStore()
const item = ref([])

item.value = descriptionStore.listcontent.data[route.params.page]
console.log(item.value)

</script>

<style scoped>

</style>