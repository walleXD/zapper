<template lang="pug">
  .default-layout
    header: h1 Hello
    main: router-view
    footer: h1 Footer
</template>

<script>
  export default {
    name: 'DefaultLayout'
  }
</script>

<style lang="stylus" scoped></style>
