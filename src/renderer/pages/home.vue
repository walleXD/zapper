<template lang="pug">
  .home-page
    h1 Home Page
</template>

<script>
  import Snoowrap from 'snoowrap'

  /* eslint-disable no-new */
  const reddit = new Snoowrap({
    userAgent: 'Zapper Web'
  })
  reddit.getUser('not_an_aardvark').fetch().then(userInfo => {
    console.log(userInfo.name) // 'not_an_aardvark'
    console.log(userInfo.created_utc) // 1419104352
  })
//  reddit.getHot().map(post => post.title).then(console.log)
  export default {
    name: 'HomePage'
  }
</script>
