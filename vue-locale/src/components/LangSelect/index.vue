<template>
  <el-dropdown trigger="click" class="international" @command="handleSetLanguage">
    <el-button type="primary">
      {{$t('login.switchLanguage')}}
    </el-button>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="zh" :disabled="language==='zh'">中文</el-dropdown-item>
      <el-dropdown-item command="en" :disabled="language==='en'">English</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
  export default {
    data() {
      return {
        //   数据全局适用

      }
    },
    computed: {//数据通过getters由中央分配到组件中
      language() {
        return this.$store.getters.language;
      }
    },
    methods: {
      handleSetLanguage(lang) {
        this.$i18n.locale = lang
        this.$store.dispatch('setLanguage', lang)
      }
    }
  }

</script>

<style>


</style>
