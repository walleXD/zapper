<template lang="pug">
  v-navigation-drawer.side-drawer.grey.lighten-4.pb-0(
    v-model="isDrawerOpen",
    temporary,
    clipped,
    height="100%",
    light
  )
    v-list

      template(v-for="(item, i) in items")

        v-layout(
          row,
          v-if="item.heading"
          align-center,
          :key="i"
        )
          v-flex(xs6)
            v-subheader(v-if="item.heading", light)
              | {{ item.heading }}

        v-divider.my-4(
          dark,
          v-else-if="item.divider",
          :key="i"
        )

        v-list-item(
          :key="i",
          v-else
        )
          v-list-tile(
            :to="item.to",
            :href="item.href",
            :router="item.router",
            :target="item.target",
            :tag="item.tag"
          )
            v-list-tile-action
              v-icon(v-if="item.icon") {{ item.icon }}
              i.mdi.icon.icon--dark(
                v-else,
                :class="item.m_icon"
              )
            v-list-tile-content
              v-list-tile-title {{ item.text }}

</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'SideDrawer',
    data: () => ({
      items: [
        { icon: 'home', text: 'r/FrontPage', to: '/', router: true },
        { divider: true },
        { icon: 'settings', text: 'Settings', to: '/settings', router: true },
        { icon: 'info', text: 'About', to: '/about', router: true }
      ]
    }),
    methods: {
      ...mapActions(['setSideDrawerState']),
      ...mapGetters(['sideDrawerOpenState'])
    },
    computed: {
      isDrawerOpen: {
        get () {
          return this.sideDrawerOpenState()
        },
        set (value) {
          this.setSideDrawerState(value)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .side-drawer
    /**/
</style>
