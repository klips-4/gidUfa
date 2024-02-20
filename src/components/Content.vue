<template>
  <main>
    <section class="destinations">
      <div class="container">

        <div class="destinations__row">
          <div class="destinations__content">

            <h2 class="destinations__title">
              <span>Достопримечательности</span>
            </h2>
            <div class="destinations__text">
              <p>Уфа интересна многими историческими и археологическими памятниками, ее архитектура
                характеризуется сочетанием разных стилей и традиций, сохранилось множество интересных памятников
                старины...</p>
            </div>

            <a href="#!" class="destinations__btn">Читать больше</a>

          </div>
          <div class="destinations__slider">
            <swiper
                class="swiper"
                :speed="3500"
                :space-between="140"
                :loop="true"
                :breakpoints="{
                  350: {
                    slidesPerView: 1
                  },
                     480: {
                    slidesPerView: 2
                  }
                }"
                :autoplay=" {
                delay: 2000,
                disableOnInteraction: false,
                }"
                :modules="modules"
            >
              <swiper-slide
                  v-for="slide in sliders"
              >
                <img class="slide-image" :src="getImageUrl(slide.img)" alt="">
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </section>
    <section class="information-cards">
      <div class="information-cards__title">
        <h1>Куда сходить в Уфе?</h1>
      </div>
      <div class="cards__desc">
        <CityInformationCards
            v-for="(card, index) in cardsInfo"
            :key="index"
            :card="card"
            a="Привет"
        />
      </div>
    </section>
  </main>
</template>



<script setup>

import {Swiper, SwiperSlide} from 'swiper/vue';
import {Autoplay} from 'swiper/modules';


import {ref} from "vue";
import 'swiper/css';
import 'swiper/css/autoplay'
import CityInformationCards from "./CityInformationCards.vue";



function getImageUrl(name) {
  return new URL(`/src/assets/images/${name}.jpg`, import.meta.url).href
}

const sliders = ref([
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

const cardsInfo = ref([
  {
    page: 1,
    title: 'Парки и скверы',
    description: 'Уфа считается одним из самых «зелёных» городов России по количеству растительности' +
        ' на одного горожанина и самым просторным — по количеству квадратных метров на жителя. А ещё одним' +
        ' из самых протяженных по длине — это важно учитывать при планировании прогулочных маршрутов.  ',
    img: 'vatan'
  },
  {
    page: 2,
    title: 'Религиозные здания',
    description: ' Башкортостан - многонациональная республика, где проживает более ста народностей. Самыми  ' +
        'распространёнными религиями являются ислам и православие. Уфа является местом пребывания центральных ' +
        'органов и муфтия Центрального Духовного управления  мусульман России и Европейских стран СНГ.',
    img: 'mosque'
  },
  {
    page: 3,
    title: 'Театры',
    description: ' Любителям культурно провести время стоит обязательно окунуться в чудесную атмосферу ' +
        'театральной  жизни Уфы. Основные театры Уфы: драматический театр, музыкальный, кукольный, балета, ' +
        'оперы, сатиры.',
    img: 'theatre'
  },
  {
    page: 'museums',
    title: 'Музеи',
    description: 'В Уфе находится самый главный музей Башкирии - Национальный музей Республики Башкортостан. Историю свою он ведёт ещё от Уфимского губернского музея, который был открыт в 1864 году.',
    img: 'museum'
  },
  {
    page: 'monuments',
    title: 'Памятники',
    description: 'Уфе более 400 лет. У этого города богатая и интересная история. А жители чтут и берегут все,' +
        ' что связано с прошлым их родного края. Поэтому не удивительно, что здесь много интересных памятников.' +
        ' Часть памятников посвящена национальным башкирским поэтам, скульпторам, артистам. Все они являются' +
        ' гордостью башкирского народа.',
    img: 'memorials'
  },
  {
    page: 'fountains',
    title: 'Фонтаны',
    description: 'На сегодняшний день в Уфе наиболее известны 20 фонтанов: 1) Фонтан на площади им. С. Орджоникидзе;' +
        ' 2) Фонтан на площади Конгресс-холла; 3) У кинотеатра "Искра" фонтан "Мальчик с кураем";' +
        ' 5) Фонтан перед центральным Дворцом бракосочетаний (остановка ГДК)...',
    img: 'fountains'
  },
  {
    page: 'sport',
    title: 'Спортивные сооружения',
    description: 'В Уфе есть современный ипподром "Акбузат", ледовый дворец «Уфа-Арена»' +
        ' Первая в Уфе аэротруба Free Fly — это самый доступный способ испытать ощущение полета!',
    img: 'akbuzat'
  }
])

const modules = [Autoplay]

</script>

<style lang="scss">

</style>