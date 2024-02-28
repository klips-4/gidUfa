<template>
                    <nav class="nav">
                        <div class="nav__logo">
                            <h2 class="logo"><strong>
                                <router-link class="NavRouter" :to="'/'">ГидУФА</router-link></strong></h2>
                        </div>
                        <router-link class="nav__list NavRouter"
                                     v-for="item in menuItems"
                                     :key="item.url"
                                     :to="item.url"
                        >{{ item.title }}
                        </router-link>
                    </nav>

</template>

<script setup>
import {ref} from "vue";

const menuItems = ref([
    {title: 'История Уфы', url: '/history'},
    {title: 'Достопримечательности', url: '/'},
    {title: 'О сайте', url: '/aboutsite'}
])

</script>

<style lang="scss">

.NavRouter {
  text-decoration: none;
  color: white;
}

</style>