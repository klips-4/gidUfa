<template>
  <div class="descriptions__wrapper">
    <div class="description-panel">
      <button @click="selectPage">Назад</button>
    </div>
    <div class="description-content">
      <div class="description-card">
        <div class="description-card__header">
          <div class="description-image">
            <img :src="`./src/assets/images/fountains/${descriptionStore.descriptions.data[index].image}.jpg`" alt="">
          </div>
          <div class="description-right">
            <div class="description-name"><h2>{{ descriptionStore.descriptions.data[index].name }}</h2></div>
            <div class="separator"></div>
          </div>
        </div>
        <div class="text">
          <p>{{ descriptionStore.descriptions.data[index].description }}</p>
        </div>
        <div class="description-slider">
          <swiper
              class="mySwiper"
              :modules="modules"
              :space-between="5"
              slidesPerView="2"
              :navigation="true"
              :breakpoints="{
                  480: {
                    slidesPerView: 2
                  },
                   350: {
                    slidesPerView: 1
                  }
              }"
          >
            <swiper-slide
                v-for="image in descriptionStore.descriptions.data[index].images"
            >
              <img :src="getImageUrl(image)" alt="" class="slider-images">
            </swiper-slide>

          </swiper>
          <div class="separator"></div>
        </div>
        <div class="location">
          <div class="location-address"><span>Адрес: </span></div>
          <div class="location-address-name">
            <span>
            {{ descriptionStore.descriptions.data[index].destination }}
          </span>
          </div>
        </div>
        <div class="description-service">
          <div class="invalid" data-title="Предусмотрено оборудование для людей с ограниченными возможостями"
          v-if="descriptionStore.descriptions.data[index].invalid"
          >
            <img src="/src/assets/images/special/invalid.png" alt="">
          </div>
          <div class="wc" data-title="Предусмотрен туалет"
               v-if="descriptionStore.descriptions.data[index].wc"
          >
            <img src="/src/assets/images/special/wc.png" alt="">
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

import {Swiper, SwiperSlide} from 'swiper/vue'

import {Keyboard, Navigation} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import {createLogger} from "vite";


const route = useRoute()

const index = ref(route.params.page.slice(-1))
const page = ref(route.params.page.slice(0, -1))

const selectPage = () => {
  return router.push(`/`)
}

const descriptionStore = useDescriptionStore()
descriptionStore.fetchDescriptionData(page.value)


function getImageUrl(image) {
  return new URL(`/src/assets/images/fountains/${image}.jpg`, import.meta.url).href
}

const modules = [Keyboard, Navigation]

</script>

<style src="/src/assets/style-descriptions.scss" lang="scss">

</style>