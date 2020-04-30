<template lang="pug">
  div#Index {{ msg }}
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'

  @Component({
    name: 'Index'
  })
  export default class Index extends Vue {
    private msg: String = 'index'
  }
</script>