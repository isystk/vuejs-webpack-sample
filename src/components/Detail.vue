<template>
  <article class="detail" >
    <div class="entry-header">
      <h1 class="entry-title">{{post.title}}</h1>
    </div>
    <div class="entry-content" >
      <template v-for="(e, index) in post.contents" >
      <h2 :key="`subTitle-${index}`">{{e.subTitle}}</h2>
      <p :key="`text-${index}`" v-html="e.text"></p>
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
      post : null
    }
  },
  props: ['postId'],
  created() {
    this.post = this.$store.getters.getPostDetail(this.postId);
  },
  computed: {
  },
  methods: {
  }
}
</script>

