<template>
  <div class="card-info">
    <div class="card-info__title">
      {{ card.title }}
    </div>
    <div class="images">
      <img class="card-info__img" :src="getImageUrl(card.img)" alt="">
    </div>
    <div class="card-info__description">
      {{ card.description }}
    </div>
    <div class="btn__group"><a @click="selectPage(card.page)" class="descriptions__btn">Подробнее...</a></div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import router from "../router";


interface Props {
    card: {
        type: any
        page: {
            type: string
        }
        img: {
            type: string
        }
        title: {
            type: string
        }
        description: {
            type: string
        }
    }
}


const selectPage = (page: any) => {
  return router.push(`/listcontent/${page}`)
}

const {card} = defineProps<Props>()

function getImageUrl(name) {
  return new URL(`/src/assets/images/others/${name}.jpg`, import.meta.url).href
}
</script>

<style scoped>

</style>