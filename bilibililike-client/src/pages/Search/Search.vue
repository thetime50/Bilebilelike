<template>
<div class="page-Search">
  <HeaderTopSearch :search-page="$route.query.page"/>
  {{$route.query.page}} Search
</div>
</template>

<script>
import HeaderTopSearch from "../../components/HeaderTopSearch/HeaderTopSearch.vue"

export default {
  name: "Search",
  components: {
    HeaderTopSearch,
  },
  data () {
    return {
    };
  }
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
</style>