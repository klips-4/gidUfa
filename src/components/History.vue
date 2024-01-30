<template>
    <div>
        <header class="header_listcontent">
            <div class="container">
                <div class="header__top_listcontent">
                    <Navbar/>
                </div>
            </div>
            <div class="title_wrapper">
                <h1 class="title">История Уфы</h1>
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
    margin-bottom: 30px;
}

</style>