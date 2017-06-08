import Vue from 'vue'
import Vuetify from 'vuetify'

import { play } from 'vue-play'

import PostCard from '../src/renderer/components/PostCard.vue'
import '../src/renderer/main.styl'
Vue.use(Vuetify)

play('MyButton')
  .add('with text', {
    template: `<v-btn @click="$log('123')">Hello</v-btn>`
  })

play(PostCard)
  .add('Base Setup',`
    <post-card
      title="Some title bro eat cookies"
      img="https://i.imgur.com/RRbmyvl.jpg"/>
`)
