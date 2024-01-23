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
          <img :src="`./src/assets/images/fountains/${descriptionStore.descriptions.data[index].image}.jpg`"
               alt="where is the photo?" class="left">
        </div>
        <div class="right">
          <h2 class="item-name">{{ descriptionStore.descriptions.data[index].name }}</h2>
          <div class="coordinates">
            <span class="coordinates-item">Координаты: {{
                descriptionStore.descriptions.data[index].coordinates
              }}</span>
          </div>
        </div>
        <div class="separator"></div>
        <div class="text">
          <p>{{ descriptionStore.descriptions.data[index].description }}</p>
          <div class="location">
            <span>Адрес: {{ descriptionStore.descriptions.data[index].destination }}</span>
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

const route = useRoute()

const index = ref(route.params.page.slice(-1))
const page = ref(route.params.page.slice(0, -1))

const selectPage = () => {
  return router.push(`/`)
}

const descriptionStore = useDescriptionStore()
descriptionStore.fetchDescriptionData(page.value)


</script>

<style scoped>

</style>