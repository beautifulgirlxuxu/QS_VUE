<template>
  <div id="app">
    <div>姓名:{{name}}</div>
    <ul ref="movies">
      <li v-for="item in movies" :key="item.id">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      name: '',
      movies: []
    }
  },
  beforeCreate () {
    this.$nextTick(() => {
      this.name = '宇宙超级无敌美少女'
    })
  },
  mounted () {
    this.name = '旅梦开发团';
    fetch('https://www.easy-mock.com/mock/5a09867f28b23066479b8365/ajaxData/movie#!method=get')
    .then(data => data.json())
    .then(result => {
      this.movies = result.subjects   
      this.$nextTick(() => {
        this.$refs.movies.getElementsByTagName('li')[0].style.color = 'red'  
      })
    })
    .catch((err) => {
      console.log(err);
    })
  },
  components: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
