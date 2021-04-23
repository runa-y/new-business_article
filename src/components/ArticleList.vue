<template>
  <div class="ArticleList">
    <h2>ニュースサイト</h2>
    <ul>
    <li
      v-for="item in articleList"
      v-bind:key="item.id"
      v-bind:title="item.title">
      <article-component :article="item"></article-component>
    </li>
    </ul>
  </div>
</template>

<script>

import ArticleComponent from './ArticleComponent.vue'
import { articleList } from '@/data/articleList'

export default {
  name: 'ArticleList',
  data: function() {
    return {
      // items: [
      //   { title: '記事１タイトル'},
      //   { title: '記事２タイトル'},
      //   { title: '記事３タイトル'}
      // ],
      articleList,
    }
  },
  mounted: function() {
    console.log({
      a: 'ArticleList',
      articleList: this.articleList,
    })
  },
  components: {
    'article-component': ArticleComponent,
  },
}
</script>

<style scoped>


</style>
