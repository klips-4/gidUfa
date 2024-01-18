<template>
  <div class="description-store">

    <div v-for="(item, index) in descriptionStore.descriptions.data"
         :key="index"
         @click="showId(item.id)"
         >
        <h2 class="item-name">{{item.name}}</h2>
        <h2 class="item-name">{{descriptionStore.descriptions.data[index].name}}</h2>
      </div>

      </div>

</template>

<script setup>
//"Подложка" для подробного описания элементов из CityInformationsCards.vue

import {useDescriptionStore} from "../store/description-store";

const descriptionStore = useDescriptionStore()
descriptionStore.fetchDescriptionData("fountains")

const showId = (index) => {
  console.log(index)
}


</script>

<style scoped>

</style>