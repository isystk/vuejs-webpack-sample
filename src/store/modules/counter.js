import axios from 'axios'
import data from '../../assets/data/blog.json';

const state = {
  step: 1,
  count: 0,
  blogs: []
}

const getters = {
  step: state => state.step,
  count: state => state.count,
  getBlogDetail: (state) => (id) => {
    return state.blogs.find(blog => blog.id+'' === id+'');
  }
}

const actions = {
  increment({ commit }) {
    commit('increment')
  },
  async setBlogList() {
    var blogs = await axios.get("./data/blog.json");
    commit("setBlogList", blogs);
  }
}

const mutations = {
  increment (state) {
    state.count += state.step
  },
  setBlogList(state, blogs) {
    state.blogs = blogs;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}