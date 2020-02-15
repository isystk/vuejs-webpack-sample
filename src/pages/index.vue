<template>
  <div class="wrap">
    <Header></Header>
    <div class="content">
      <DetailList></DetailList>
      <SideMenu></SideMenu>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import SideMenu from '../components/SideMenu.vue';
import DetailList from '../components/DetailList.vue';

export default {
  components: {
    Header,
    Footer,
    SideMenu,
    DetailList
  },
  data () {
    return {
    }
  },
  methods: {
  },
}

</script>
