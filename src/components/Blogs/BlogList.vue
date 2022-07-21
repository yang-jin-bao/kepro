<template>
  <div class="list">
    <div class="category">"{{ category.category }}"类目下文章列表</div>
    <div @click="$router.push('/')">>>>返回首页</div>
    <div
      class="blogs"
      @click="gotoContent(item.id)"
      v-for="(item, index) in category.blogs"
      :key="index"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogList",
  props: ["id"],
  data() {
    return { category: {} };
  },
  mounted() {
    this.category = this.$store.state.category.find((r) => r.id == this.id);
  },
  //方法
  methods: {
    gotoContent(bid) {
      this.$router.push(`/category/${this.id}/${bid}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  padding: 10px;
}

.category {
  margin: 20px 0;
  font-size: 20px;
  font-weight: bold;
}

.blogs {
  margin: 10px 0;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}
</style>