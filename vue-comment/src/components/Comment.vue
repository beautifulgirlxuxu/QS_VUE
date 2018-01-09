<template>
  <div class="comment">
      <comment-form @addComment="addComment"></comment-form>
      <comment-List :List="List" />
      <pagination @transforPage="getPage" :totalCount="totalCount" :currentPage="currentPage"/>
  </div>
</template>

<script>
import CommentForm from './commentForm';
import CommentList from './commentList';
import Pagination from './Pagination';
export default {
    components:{
        CommentForm,
        CommentList,
        Pagination,
    },
    methods:{
        addComment(msg){
            console.log(msg);
            this.totalData.push({text:msg});
            this.totalCount = this.totalData.length;
            if(this.totalCount<=this.pagesize){
                this.List = this.totalData
            }else{
                this.List = this.totalData.slice(this.totalCount-this.pagesize)
            }
            this.currentPage=1;
            this.List.reverse();
        },
        getPage(curr,size){
            this.currentPage = curr;
            if(this.totalCount<=this.pagesize){
                this.List = this.totalData;
            }else{
                let pages = Math.ceil(this.totalCount/this.pagesize)
                let res = this.totalCount%this.pagesize;
                let start =this.totalCount - this.currentPage*this.pagesize;
                if(start<0)start=0;
                this.List = this.totalData.slice(start,start+this.pagesize)
            }
            this.List.reverse();
        }
    },
    data(){
        return{
            totalCount:0,
            currentPage:1,
            pagesize:3,
            totalData:[],
            List:[]
        }
    }
}
</script>

<style>

</style>
