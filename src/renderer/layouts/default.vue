<template lang="pug">
  v-app.default-layout
    side-drawer
    app-bar
    main: v-container(fluid): router-view
    v-footer.app-footer
      span.hidden-xs-only
        a(
        href="http://asterixmedia.com",
        @click.prevent="openInNativeBrowser"
      ) Designed by Asterix*Media
      v-spacer
      span Zapper © {{ new Date().getFullYear() }}
</template>

<script>
  import { shell } from 'electron'
  import {
    AppBar,
    SideDrawer
  } from '../components'

  export default {
    name: 'DefaultLayout',
    components: {
      SideDrawer,
      AppBar
    },
    methods: {
      openInNativeBrowser (event) {
        shell.openExternal(event.target.href)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .default-layout
    .app-footer
      a
        text-decoration none
        color white
</style>
