<template>
    <div>
        <header class="header_listcontent">
            <div class="container">
                <div class="header__top_listcontent">
                    <nav class="nav">
                        <div class="nav__logo">
                            <h2 class="logo"><strong><a href="#">ГидУФА</a></strong></h2>
                        </div>
                        <ul class="nav__list">
                            <li><strong><a href="#!" >История Уфы</a></strong></li>
                            <li><strong><a href="#!">Достопримечательности</a></strong></li>
                            <li><strong><a href="#!">О нас</a></strong></li>
                        </ul>
                    </nav>
                </div>
            </div>
                    <h1 class="title">{{title}}</h1>
                <el-scrollbar height="500px">
                    <div class="crypto_list"><span class="scrollbar-demo-item"
                                                   v-for="(item, index) in descriptionStore.listcontent.data"
                                                   :key="index"
                                                   @click="getItem(route.params.page+ index)"
                    >{{ item.name }}</span>
                    </div>
                </el-scrollbar>

        </header>
        </div>

</template>

<script setup>

import {useDescriptionStore} from "../store/description-store";
import {useRoute} from "vue-router";
import router from "@/router/index.js";
import Header from "@/components/Header.vue";

const route = useRoute()

const descriptionStore = useDescriptionStore()
descriptionStore.fetchListContentData(route.params.page)

const List_Title = {
    fountains: 'Фонтаны',
    museums: 'Музеи'
}
const title = List_Title[route.params.page]




const getItem = (index) => {
  return router.push(`/descriptions/${index}`)
}

</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Baloo+Chettan+2&family=Calligraffitti&display=swap');

.title{
    font-family: 'Calligraffitti', cursive;
    font-weight: 100;
    font-size: 60px;
    letter-spacing: 0.02em;
    text-align: center;
    color:  #fcfbfa;
    text-shadow: 5px 5px 0px #fd624d;
}


.header_listcontent {
    overflow: hidden;
    position: relative; //родитель для header::after
    width: 100vw;
    height: 100vh;
    padding-top: 44px;
    background: linear-gradient(132.05deg, #214931 -17.38%, #498381 78.4%, #204434);
    color: #fff;
}

.header__top_listcontent {
    margin-bottom: 50px;
}
a{
    color: white;
    text-decoration: none;
}

h1{
    text-align: center;
}
.crypto_list {
  margin-top: 10px;
  margin-bottom: 30px;
  font-family: "Calibri";
  font-size: 25px;
  font-weight: bolder;
  display: flex;
  gap: 5px;
  align-items: center;
  flex-direction: column;

  .cryptoItem {
    cursor: pointer;
  }
}
.scrollbar-demo-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin: 10px;
    text-align: center;
    background: none;
    color: white;
    cursor: pointer;
}

.scrollbar-demo-item:hover{
    color: #e38138;
}

.back {
    cursor: pointer;
    margin-top: 30px;
    font-weight: bold;
}
.back:hover {
    color: #ad1818;
}

</style>