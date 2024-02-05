<template>
  <div class="footer__wrapper">
    <div class="footer-container">
      <div class="name"><span>Проект реализуется на средства гранта главы Администарции ГО г.Уфа РБ</span></div>
      <div class="address"><span>При поддержке АНО "ПРОБИЗНЕС"</span></div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.footer__wrapper {
  height: 90px;
  background: aliceblue;
}

.footer-container {
  padding-top: 40px;
  display: flex;
  justify-content: space-around;

  @media (max-width: 1280px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    background: aliceblue;
    padding-bottom: 30px;

  }
}

span {
  font-weight: 800;
  text-transform: uppercase;
  color: #3C4447;
}

.name, .address, .mail {
  margin:5px;
}

</style>