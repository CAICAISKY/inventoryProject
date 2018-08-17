<template>
  <div class="home">
    <el-container>
      <el-header>
        {{title}}
      </el-header>
      <el-container>
        <el-aside>
          <home-gider @giderClick="handleGiderClick" :giderList="giderList"></home-gider>
        </el-aside>
        <el-main>
          <home-main></home-main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HomeGider from './components/Gider'
import HomeMain from '../main/Main'

export default {
  name: 'Home',
  components: {
    HomeGider,
    HomeMain
  },
  data () {
    return {
      title: '',
      giderList: []
    }
  },
  methods: {
    getHomeData () {
      this.$axios.get('/static/mock/data.json').then(this.getHomeDataSucc)
    },
    getHomeDataSucc (res) {
      res = res.data
      if (res.msg) {
        const data = res.data
        this.title = data.title
        this.giderList = data.giders
      }
    },
    handleGiderClick (path) {
      this.$router.push(path)
    }
  },
  mounted () {
    this.getHomeData()
  }
}
</script>

<style scoped>
  .home {
    margin: 0 250px;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    height: 80px !important;
    line-height: 80px;
    padding: 0;
  }
  .el-aside {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    width: 120px !important;
    text-align: center;
    line-height: 200px;
    min-height: 914px;
    padding: 0;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    padding: 0;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
