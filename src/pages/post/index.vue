<template>
  <Detail :post-id="$route.params.id"></Detail>
</template>

<script>
import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';
import SideMenu from '../../components/SideMenu.vue';
import Detail from '../../components/Detail.vue';

export default {
  components: {
    Header,
    Footer,
    SideMenu,
    Detail
  },
  data () {
    return {
    }
  },
  methods: {
  },
}

</script>
