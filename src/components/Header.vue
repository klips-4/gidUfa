<template>
  <header class="header">
    <div class="container">
      <div class="header__top">
        <Navbar/>
      </div>
      <div class="header__row">
        <div class="header__content">
          <h1 class="header__title">ГидУФА - открой для себя город!</h1>
          <div class="header__text">
            <p>ГидУФА предлагает путешественникам и жителям города информацию о достопримечательностях,
                культуре и истории города, а также советы по организации досуга. На сайте можно найти обзоры, фотографии,
                карты и маршруты. ГидУФА является отличным инструментом для планирования путешествия или отдыха в городе.</p>
          </div>
        </div>
        <div class="header__image">
          <img src="../assets/images/ufaLogo.svg" alt="">
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>

import Navbar from "@/components/Navbar.vue";
</script>

<style lang="scss">

</style>