<template>
 <div>
   <h2>{{ article.title }}</h2>
   <p>{{ article.content }}</p>
   <comment msg="コメント"/>
   <router-link to="/">記事一覧</router-link>
 </div>
</template>

<script lang="js">
import { articleList } from '@/data/articleList'
import Comment from './Comment.vue'
export default {
  name: 'ArticleContent01',
  computed: {
    id() {
      return Number(this.$route.params.id);
    },
    article() {
      return articleList.find(article => article.id === this.id);
    },
    title() {
      return this.article.title;
    },
    content() {
      return this.article.content;
    }
  },
  components: {
   Comment,
  },
  props: {
    comment: {
      type: Object,
    }
  },
}
  //created: function(){
   // this.article = this.$route.params.id;
  //  return:{
  //    article: articleList.find(article => article.id === this.id), // idでarticleListから検索
  //    title: this.article.title,
  //    content: this.article.content,
  //    article:{
  //      id:'',
  //      title:'',
  //      content:'',
  //    },
  //  };
  //},


/**
 * 1, 2の処理は、created: function() {} の中でやると良い
 * 検索したarticleを、this.articleでアクセスできるような定義をしておく。
 *
 * 1. URLから渡ってきたidを取得（this.$route.params.id）
 * 2. articleListのなかから、idで検索（javascript 配列 find）
 * 3. article.title, article.content
 */
</script>

<style scoped>

</style>