<template>
  <div class="content">
    <div class="fhlb" @click="$router.push('/category/' + id)">>>>返回列表</div>
    <div>
      <div class="titles">{{ blog.title }}</div>
      <div class="contents">{{ blog.content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogContent",
  props: ["id", "bid"],
  data() {
    return { blog: {} };
  },
  //计算属性
  computed: {},
  //监听
  watch: {},
  mounted() {
    this.blog = this.$store.state.category
      .find((r) => r.id == this.id)
      .blogs.find((r) => r.id == this.bid);
  },
};
</script>

<style lang="scss" scoped>
.centent {
  padding: 10px;
}
.fhlb {
  padding: 20px 0;
}
.titles {
  margin: 20px 0;
  text-align: center;
  font-weight: bold;
}
.contents {
  margin: 20px 0;
  text-align: center;
}
</style>