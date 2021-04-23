<template>
  <div>
    <!-- /article/:id になるはず -->
    <router-link v-bind:to="{ path: `/article/${article.id}`}">
    {{ article.title }}
    </router-link>
    <button-component message="評価する"></button-component>
    <button-component message="評価しない"></button-component>
  </div>
</template>

<script lang="js">
import ButtonComponent from './ButtonComponent.vue'

export default {
  name: 'ArticleComponent',
  components: {
    ButtonComponent,
  },
  mounted: function() {
    console.log(this.article)
  },
  props: {
    article: {
      type: Object,
    }
    // title: {
    //   type: String,
    // },
  },
}
</script>