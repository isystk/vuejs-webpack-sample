<template>
  <article class="detail" >
    <div class="entry-header">
      <h1 class="entry-title">{{post.title}}</h1>
    </div>
    <div class="entry-content" >
      <template v-for="(e, index) in post.contents" >
      <h2 :key="index">{{e.subTitle}}</h2>
      <p :key="index" v-html="e.text"></p>
      </template>
    </div>
    <div class="clearfix"></div>
  </article>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      post : this.$store.getters.getBlogDetail(this.postId)
    }
  },
  methods: {
  },
}
</script>

