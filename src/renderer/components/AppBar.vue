<template lang="pug">
  v-toolbar.app-bar(
    fixed,
    light
  )
    v-toolbar-side-icon(
      light,
      @click.native.stop="toggleSideDrawer")
    v-toolbar-title Title
    v-spacer
    v-btn(icon, light, disabled): v-icon search
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'AppBar',
    methods: {
      ...mapActions(['toggleSideDrawer'])
    }
  }
</script>

<style lang="stylus" scoped>
  .app-bar
    /**/
</style>
