<template>
  <div class="blog">
    <h4>推荐文章</h4>
    <div v-for="(item, index) in $store.state.hotblogs.blogs" :key="index">
      <div class="bg">
        {{ item.title }}
        <div class="name">Angular</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBlog",
};
</script>

<style lang="scss" scoped>
.blog {
  padding: 10px;
}

h4 {
  margin-left: 10px;
  margin-bottom: 20px;
}

.bg {
  width: 100%;
  height: 100px;
  background: #ccc;
  text-align: center;
  line-height: 100px;
  margin-bottom: 10px;
  border-radius: 5px;
  position: relative;
}

.name {
  position: absolute;
  background: #666;
  color: white;
  width: 80px;
  height: 30px;
  line-height: 30px;
  right: 10px;
  bottom: 10px;
  border-radius: 3px;
}
</style>