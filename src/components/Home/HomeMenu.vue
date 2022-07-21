<template>
  <div class="menu">
    <div
      @click="gotoList(item.id)"
      v-for="(item, index) in $store.state.category"
      :key="index"
    >
      <div class="bg" v-bind:style="{ backgroundColor: bc() }">
        {{ item.category | showFirst }}
      </div>

      <div class="name">{{ item.category }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeMenu",
  filters: {
    showFirst(val) {
      return val.substr(0, 1);
    },
  },
  //方法
  methods: {
    bc() {
      let arr = [3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e"];
      let color = "#";
      for (let i = 0; i < 3; i++) {
        color += arr[Math.floor(Math.random() * 10)];
      }
      return color;
    },
    gotoList(id) {
      this.$router.push("/category/" + id);
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  flex-wrap: wrap;
}
.menu > div {
  width: 25%;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.bg {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  text-align: center;
  line-height: 44px;
}
</style>