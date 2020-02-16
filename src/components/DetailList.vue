<template>
  <main>
    <button @click="increment">increment {{ step }}</button>
    <span>total {{ count }}</span>
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
      blogs : this.$store.state.blogs
    }
  },
  computed: {
    step() { return this.$store.getters.step},
    count() { return this.$store.getters.count}
  },
  methods: {
    increment() {
      this.$store.dispatch('setBlogList')
    }
  }
}
</script>

