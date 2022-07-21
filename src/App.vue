<template>
  <div id="app">
    <div id="nav" @click="$router.push('/')">
        KGC技术博客
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
    html,body{
        margin: 0;
        padding: 0;
    }
    #nav{
        width: 100%;
        height: 50px;
        background-color: #f8f8f8;
        color: #555;
        line-height: 50px;
    }
</style>
