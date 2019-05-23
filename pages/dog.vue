<template>
  <section class="container">
    <h1>
      {{dogPageTitle}}
    </h1>
    <img :src="dogImagePath" alt="">
    <button class="button" @click="fetchDogImagePath">
      change image
    </button>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { namespace } from 'vuex-class';
import Logo from '~/components/Logo.vue'
import * as dog from "~/store/dog";
const Dog = namespace(dog.name);

// export default {
//   // fetch({ app, params, store }) {
//   //   return store
//   // },
//   computed: mapState({
//     dogImagePath: state => state.dog.dogImagePath,
//     dogPageTitle: state => state.dog.dogPageTitle,
//   }),
//   methods: {
//     ...mapActions({
//       fetchDogImagePath: 'dog/fetchDogImagePath'
//     })
//   }
// }

@Component({
  components: {
    Logo
  }
})
export default class DogPage extends Vue {
  @Dog.State dogImagePath;
  @Dog.State dogPageTitle;
  @Dog.Action fetchDogImagePath;
}

</script>
