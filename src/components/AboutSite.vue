<template>
  <div>
    <header class="header_listcontent">
      <div class="container">
        <div class="header__top_listcontent">
          <Navbar/>
        </div>
      </div>
      <div class="title_wrapper">
        <h1 class="title">О сайте</h1>
        <div class="content">
          <span>Проект реализован АНО ДПО "Пробизнес" на средства гранта главы Администарции ГО г.Уфа РБ </span>
          <span>Приложение разработано участниками проекта "Территория свободного кода" в рамках гранта главы Администарции ГО г.Уфа РБ. </span>
          <span>Был проведен конкурс проектов программирования. Заявки были
рассмотрены жюри в соответствии с положением о конкурсе. Среди участников были
выбраны наиболее перспективные проекты. Одна из групп выбрала проект,
посвященный городу Уфа и разработке web-приложения информативной площадки о
достопримечательностях.
- Информационный проект "ГидУфа" был выбран в
качестве одного из наиболее перспективных проектов. Он представляет собой web-
приложение, которое позволяет пользователям ознакомиться с интересными местами и
достопримечательностями города Уфы. Приложение содержит краткое описание, фотографии и адрес достопримечательности. Оно было разработано
с использованием различных языков программирования и технологий веб-разработки.
        </span>
          <div class="developers">
            <span>Руководитель проекта: Черепанов Игорь Александрович </span>
            <span>Преподаватель: Гайсин Шамиль Маратович</span>
            <span>Член комиссии: Гизетдинов Тимур Уралович</span>
          </div>
          <div class="footer">
            <span>Отдельное спасибо:</span>
            <span>АНО "Конный дворик Садко"</span>
            <span>ОДПНиК "Йэшлек"</span>
            <span>Администарция ГО г.Уфа РБ</span>
          </div>
          <div class="info">Сайт дополнялся информацией из свободных источников интернета. С предложениями и рекомендациями, а также об указании авторства, просим написать письмо на почту: 2986414@bk.ru</div>
        </div>
      </div>
    </header>
  </div>

</template>

<script setup>

import Navbar from "@/components/Navbar.vue";


</script>

<style lang="scss" scoped>

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

.content {
  width: 80%;
  font-size: 22px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.developers, .footer {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}

.info {
  margin-top: 10px;
  font-size: 16px;
}


</style>