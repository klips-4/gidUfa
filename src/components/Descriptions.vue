<template>
    <div class="descriptions__wrapper">
        <div class="fond">
            <span class="s1">ГИД</span>
            <span class="s2">УФА</span>
        </div>
        <div class="description-panel">
            <div @click="selectPage(page)" class="button_back">Вернуться к списку</div>
        </div>

        <div class="description-content">

            <div @click="prevSlide" class="prevSlide"><img src="../assets/images/prev.png" alt=""></div>
            <div class="description-card">
                <div class="description-card__header">
                    <div class="description-image">
                        <img :src="`/src/assets/images/${page}/${descriptionStore.descriptions.data[index].image}.jpg`"
                             alt="">
                    </div>
                    <div class="description-right">
                        <div class="description-name"><h2>{{ descriptionStore.descriptions.data[index].name }}</h2>
                        </div>
                        <div class="separator-block">
                            <div @click="prevSlide"><img src="../assets/images/prev.png" alt=""></div>
                            <div class="separator"></div>
                            <div @click="nextSlide"><img src="../assets/images/next.png" alt=""></div>
                        </div>
                        <div class="location ">
                            <div v-if="descriptionStore.descriptions.data[index].coordinates" class="location-address">
                                <div class="coordinates">
                       <span>
                  Координаты:
                </span>
                                    <a class="button_back" :href="`https://yandex.ru/maps/?pt=${descriptionStore.descriptions.data[index].coordinates}&z=18&l=map`">
                                        {{ descriptionStore.descriptions.data[index].coordinates }}
                                    </a>
                                </div>
                            </div>
                            <div v-else class="location-address">
                                <div class="address">
                     <span>
                  Адрес:
                </span>
                                    <span>
             {{ descriptionStore.descriptions.data[index].address }}
          </span>
                                </div>
                                <div class="website">
                                    <span>Сайт: </span>
                                    <a class="button_back" :href="descriptionStore.descriptions.data[index].website">
                                        {{ descriptionStore.descriptions.data[index].website }}
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div class="description-service">
                            <div class="invalid"
                                 data-title="Предусмотрено оборудование для людей с ограниченными возможостями"
                                 v-if="descriptionStore.descriptions.data[index].invalid"
                            >
                                <img src="/src/assets/images/special/invalid.png" alt="">
                            </div>
                            <div class="wc" data-title="Предусмотрен туалет"
                                 v-if="descriptionStore.descriptions.data[index].wc"
                            >
                                <img src="/src/assets/images/special/wc.png" alt="">
                            </div>
                            <div class="food" data-title="Предусмотрены места для питания"
                                 v-if="descriptionStore.descriptions.data[index].food"
                            >
                                <img src="/src/assets/images/special/food.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text">
                    <p>{{ descriptionStore.descriptions.data[index].description }}</p>
                </div>
                <div class="description-slider">
                    <swiper
                            class="mySwiper"
                            :pagination="true"
                            :modules="modules"
                            :space-between="5"
                            slidesPerView="2"
                            :navigation="true"
                            :breakpoints="{
                     1270: {
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
                </div>
            </div>
            <div @click="nextSlide" class="nextSlide"><img src="../assets/images/next.png" alt=""></div>
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

import {Navigation} from "swiper/modules";
import {Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const route = useRoute()

const temp_index = ref(route.params.page.indexOf('-'))
const index = ref(route.params.page.slice(temp_index.value + 1))
const page = ref(route.params.page.slice(0, temp_index.value))

const selectPage = (page) => {
    return router.push(`/listcontent/${page}`)
}

const descriptionStore = useDescriptionStore()
descriptionStore.fetchDescriptionData(page.value)


function getImageUrl(image) {
    return new URL(`/src/assets/images/${page.value}/${image}.jpg`, import.meta.url).href
}


const prevSlide = () => {
    if (index.value <= 0) {
        index.value = String(descriptionStore.descriptions.data.length - 1)
        return index.value
    }
    return index.value--
}

const nextSlide = () => {
    if (index.value >= descriptionStore.descriptions.data.length - 1) {
        index.value = String(0)
        return index.value
    }
    return index.value++
}

const modules = [Navigation, Pagination]


</script>

<style src="/src/assets/style-descriptions.scss" lang="scss">

</style>