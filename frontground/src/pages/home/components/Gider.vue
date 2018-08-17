<template>
  <el-menu default-active="1">
    <router-link tag="el-menu-item"
      :to="'/home/'+item.path"
      v-for="(item, index) of giderList"
      :key="index"
      :index="index + 1 + ''"
    >
      {{item.name}}
    </router-link>
  </el-menu>
</template>

<script>
export default {
  name: 'HomeGider',
  props: {
    giderList: Array
  },
  methods: {
    handleGiderClick (path) {
      this.$emit('giderClick', path)
    }
  }
}
</script>

<style scoped>
  .el-menu {
    border-right: solid 0px
  }
</style>
