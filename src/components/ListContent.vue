<template>
  <div>
    <header class="header_listcontent">
      <div class="container">
        <div class="header__top_listcontent">
          <Navbar/>
        </div>
      </div>
      <div class="title_wrapper">
        <h1 class="title">{{Title}}</h1>
        <div class="searchInput">
          <el-input placeholder="Введите название" v-model="input"/>
        </div>
      </div>
      <div class="crypto_list">

                        <span v-if="visible" class="scrollbar-demo-item"
                              v-for="(item, index) in descriptionStore.listcontent.data"
                              :key="item.name"
                              @click="getItem(route.params.page + '-' + index)"

                        >{{ item.name }}</span>
        <span class="scrollbar-demo-item" v-if="!visible"
              @click="getItem(route.params.page + (item.id-1))"
        >{{ item.name}}</span>
        </div>
    </header>
  </div>
</template> "
<script setup>

import {useDescriptionStore} from "../store/description-store";
import {useRoute} from "vue-router";

import {useDebounce,} from '@vueuse/core'
import {ref, watch} from "vue";
import Navbar from "@/components/Navbar.vue";

const route = useRoute()
import router from "@/router/index.js";

const descriptionStore = useDescriptionStore()
descriptionStore.fetchListContentData(route.params.page)


const List_Title = {
  fountains: 'Фонтаны',
  museums: 'Музеи'
}
const Title = ref(List_Title[route.params.page])
const visible = ref(true)

const input = ref('')
const search = useDebounce(input, 1000)
const item = ref()


watch(search, () => {
  item.value = descriptionStore.listcontent.data.find(o => o.name.toLowerCase() === search.value.toLowerCase())
  if (item.value != undefined) {
      visible.value = false
  } else visible.value = true
});

const getItem = (index) => {
  return router.push(`/descriptions/${index}`)
}

</script>

<style lang="scss" scoped>


.description-none {
  display: none;
}

.title_wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;

}

.title {
  font-family: 'Calligraffitti', cursive;
  font-weight: 100;
  font-size: 60px;
  letter-spacing: 0.02em;
  text-align: center;
  color: #fcfbfa;
  text-shadow: 5px 5px 0px #fd624d;
}

.searchInput {
  width: 40vw;
  margin: 10px;
  align-content: center;
}

.header_listcontent {
  overflow: auto;
  position: relative; //родитель для header::after
  width: 100vw;
  height: 100vh;
  padding-top: 44px;
  background: linear-gradient(132.05deg, #214931 -17.38%, #498381 78.4%, #204434);
  color: #fff;

}

.header__top_listcontent {
  margin-bottom: 30px;
}

h1 {
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
}

.cryptoItem {
    cursor: pointer;
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

.scrollbar-demo-item:hover {
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

#element::-webkit-scrollbar {
  width: 10px;
}

#element::-webkit-scrollbar-track {
  -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
  background-color: #f9f9fd;
  border-radius: 10px;
}

#element::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #fd624d;
}




</style>