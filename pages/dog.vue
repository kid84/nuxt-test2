<template>
  <section class="container">
    <h1>
      {{dogPageTitle}}
    </h1>
    <img :src="dogImagePath" alt="">
    <button class="button" @click="changeImagePath">
      change image
    </button>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  fetch({ app, params, store }) {
    return store
  },
  computed: mapState({
    dogImagePath: state => state.dog.dogImagePath,
    dogPageTitle: state => state.dog.dogPageTitle,
  }),
  methods: {
    ...mapActions({
      changeImagePath: 'dog/fetchDogImagePath'
    })
  }
}
</script>
