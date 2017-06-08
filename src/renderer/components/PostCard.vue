<template lang="pug">
  .post-card
    v-card
      v-card-row
        v-card-title
          span {{ this.title }}
        .pr-3.post-info
          span.up-votes 35K
          br
          span
            v-icon(small) mode_comment
            |100
      v-card-row(v-if="img")
        img(:src="img")
      v-card-row
        .info-container.pr-3.pl-3
          span
            v-icon book
            | subreddit
          span
            v-icon link
            | xml.com.co.uk
          span
            v-icon perm_identity
            | suppeeps
      v-card-row(actions)
        v-btn(icon)
          v-icon save
        v-spacer
        v-btn(icon)
          v-icon thumb_up
        v-btn(icon)
          v-icon thumb_down
</template>

<script>
  export default {
    name: 'PostCard',
    props: {
      title: {
        default: 'This is a damned placehlder title'
      },
      upvotesNum: {},
      commentNum: {},
      img: {
        required: false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .post-card
    .post-info
      font-size 1em
      text-align right
      i
        font-size 1em
      .up-votes
        font-size 1.3em
    .info-container
      display flex
      align-content center
      justify-content space-between
      width 100%
      font-size 0.9em
      i
        font-size 1.3em
    img
      width 100%
      display block
</style>
