<template>
  <div class="descriptions__wrapper">
    <div class="description-panel">
      <button>Назад</button>
    </div>
    <div class="description-content">
      <div class="description-card">
        <div class="description-card__header">
          <div class="description-image">
            <img :src="`./src/assets/images/fountains/${descriptionStore.descriptions.data[index].image}.jpg`" alt="">
          </div>
          <div class="description-name">{{ descriptionStore.descriptions.data[index].name }}</div>
        </div>
        <div class="text">
          <p>{{ descriptionStore.descriptions.data[index].description }}</p>
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

<style src="/src/assets/style-descriptions.scss" lang="scss">

</style>