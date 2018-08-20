<template>
  <el-menu default-active="0">
    <template  v-for="(item, index) of giderList">
      <router-link :to="'/home/'+item.path" :key="index">
        <el-menu-item :index="index + ''">
          {{item.name}}
        </el-menu-item>
      </router-link>
    </template>
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
