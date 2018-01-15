import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
 
// 组件状态配置存储仓，实现数据集中与共享
Vue.use(Vuex) 
const store = new Vuex.Store({
    modules: {
        app
    },
    getters
})

export default store
 
