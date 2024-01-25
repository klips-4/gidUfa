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
        <div class="description-slider">
          <swiper
              :modules="modules"
              :space-between="50"
              navigation
          >
            <swiper-slide
                v-for="image in images"
            ><img :src="getImageUrl(image.img)" alt="" class="slider-images"></swiper-slide>
          </swiper>
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

import { Swiper, SwiperSlide } from 'swiper/vue'
import {Autoplay} from "swiper/modules";


const route = useRoute()

const index = ref(route.params.page.slice(-1))
const page = ref(route.params.page.slice(0, -1))

const selectPage = () => {
  return router.push(`/`)
}

const descriptionStore = useDescriptionStore()
descriptionStore.fetchDescriptionData(page.value)


function getImageUrl(number) {

    return new URL(`/src/assets/images/fountains/${number}`, import.meta.url).href
}
const modules = [Autoplay]

const images = ref([
  {id: 1, img: '1'},
  {id: 2, img: '2'},
  {id: 3, img: '3'},
  {id: 4, img: '4'},
  {id: 5, img: '5'},
  {id: 6, img: '6'},
  {id: 7, img: '7'},
  {id: 8, img: '8'},
  {id: 9, img: '9'},
])

</script>

<style src="/src/assets/style-descriptions.scss" lang="scss">

</style>