<template>
  <div class="footer__wrapper">
    <div class="footer-container">
      <div class="name"><span>АНО "ПРОБИЗНЕС"</span></div>
      <div class="address"><span>г.Уфа, ул. Менделеева 1</span></div>
      <div class="mail"><span>probusiness@mail.ru</span></div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.footer__wrapper {
  height: 130px;

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
    padding-bottom: 20px;

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