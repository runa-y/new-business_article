import Vue from 'vue'
import VueRouter from 'vue-router'
import ArticleContent01 from './components/ArticleContent01.vue'
import { articleList } from './data/articleList'
import ArticleList from './components/ArticleList.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'ArticleList',
        component: ArticleList,
      },
      {
        path: '/articleList',
        name: 'articleList',
        component: {articleList},
      },
      {
        path: '/article/:id',
        name: 'ArticleContent01',
        component: ArticleContent01,
      },
    ],
  })
