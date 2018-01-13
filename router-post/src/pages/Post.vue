<template>
  <div class="post">
      <div v-if="loading" class="loading">
          Loading
      </div>
      <!-- v-if 根据布尔值判断是否渲染页面元素 -->
      <div class="error" v-if="error">
          {{error}}
      </div>
      <transition name="slide">
          <div class="content" v-if="post">
              <h2>{{post.title}}</h2>
              <p>{{post.body}}</p>
          </div>
      </transition>
  </div>
</template>

<script>
// 前后端分离，api 全面接管数据请求
import {getPost} from '@/api.js'
export default {
    data() {
        return {
            loading: false,
            error: null,
            post: null
        }
    },
    created() {
        this.fetchData() 
    },
    watch: {
            '$route': 'fetchData'
    },
    methods: {
        fetchData() {
            // 路由是同一个组件， error 要时时更新
            this.error = this.post = null
            this.loading = true
            // 封装好的函数,动态路由映射
            getPost(this.$route.params.id, (err, post) => {
                this.loading = false
                if (err) {
                    this.error = err.toString()
                }else {
                    this.post = post
                }
            })
        }
    }
}
</script>

<style>
    .loading {
        position: absolute;
        top: 10px;
        right: 10px;
    }
    .error {
        color: red;
    }
    .content {
        transition: all .35s ease;
        position: absolute;
    }
    .slide-enter {
        opacity: 0;
        transform: translate(30px, 0);
    }
    .slide-leave-active {
        opacity: 0;
        transform: translate(-30px, 0);
    }
</style>
