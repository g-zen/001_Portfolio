new Vue({
  el: '#app',
  data () {
    return {
      products: null
    }
  },
  mounted () {
    axios
      .get('products.json')
      .then(response => (this.products = response.data.products))
  },
})
