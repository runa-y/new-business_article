<template>
  <div>
    <table>
      <thead>
        <tr>
          <th class="comment">コメント</th>
        </tr>
      </thead>
      <tbody>
       <tr v-for="item in comments" v-bind:key="item.id">
         <td>{{ item.comment }}</td>
       </tr>
      </tbody>
    </table>
  <h2>コメントを投稿する</h2>
  <form @submit.prevent="doAdd" class="add-form">
    <p>
      <span>コメント</span>
      <input type="text" ref="comment">
      <button type="submit">追加</button>
    </p>
  </form>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  data: function(){
    return {
      comments: []
    }
  },
  methods: {
    doAdd: function() {
      var comment = this.$refs.comment
      if (!comment.value.length) {
        return
      }
      this.uid += 1
      this.comments.push({
        id: this.uid,
        comment: comment.value,
      })
      comment.value = ''
    }
  },
}
</script>

<style>

</style>