<template>
    <div class="Home">
        <!-- 轮播图组件 -->
        <home-banner></home-banner>
        <!-- 文章分类导航组件 -->
        <home-menu></home-menu>
        <!-- 写推荐文章组件 -->
        <home-blog></home-blog>
    </div>
</template>

<script>
    import HomeBanner from './HomeBanner.vue'
    import HomeMenu from './HomeMenu.vue'
    import HomeBlog from './HomeBlog.vue'
    export default {
        name: "Home",
        components: {
            HomeBanner,
            HomeMenu,
            HomeBlog
        },
    }
</script>
