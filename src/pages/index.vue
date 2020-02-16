<template>
  <div class="wrap">
    <Header></Header>
    <div class="content">
      <router-view></router-view>
      <SideMenu></SideMenu>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import SideMenu from '../components/SideMenu.vue';

export default {
  components: {
    Header,
    Footer,
    SideMenu
  },
  data () {
    return {
    }
  },
  methods: {
  },
}

</script>
