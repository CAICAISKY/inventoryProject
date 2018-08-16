<template>
  <el-container>
    <el-header>
      Header
    </el-header>
    <el-container>
      <el-aside>
        <home-gider></home-gider>
      </el-aside>
      <el-main>
        Main
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import HomeGider from './components/Gider'
export default {
  name: 'Home',
  components: {
    HomeGider
  }
}
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    width: 200px;
    text-align: center;
    line-height: 200px;
    min-height: 914px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
