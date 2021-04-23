<template>
  <button @click="countUp">
    {{ message }}: {{ count }}
  </button>
</template>

<script lang="js">

export default {
  name: 'ButtonComponent',
  props: {
  message: {
    type: String,
   },
  },
  data: function () {
    return {
      count: 0
    }
  },
  methods: {
    countUp: function(){
      this.count++;
    }
  },
}
</script>
