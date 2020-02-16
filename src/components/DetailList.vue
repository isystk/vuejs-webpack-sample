<template>
  <main>
    <article class="detail top" v-for="(e, index) in blogs" :key="index">
      <router-link :to="{'path': '/post/' + e.id + '/'}">
        <div class="entry-header">
          <div class="category_link">{{e.category}}</div>
          <h1 class="entry-title">{{e.title}}</h1>
        </div>
        <div class="clearfix"></div>
      </router-link>
    </article>
  </main>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      blogs : []
    }
  },
  created() {
    this.$store.dispatch('getBlogList')
      .then(data => this.blogs = data);
  },
  computed: {
  },
  methods: {
  }
}
</script>

