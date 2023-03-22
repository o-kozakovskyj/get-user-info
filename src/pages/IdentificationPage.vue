<template>
  <div class="identification-page">
    <nav-bar class="identification-page__nav">
      <router-link to="/" class="link">Home</router-link>
    </nav-bar>
    <div class="identification-page__main">
      <div class="input-group mb-3">
        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2"
          placeholder="enter your zip code" v-model="zip">
        <button class="btn btn-outline-primary" type="button" id="button-addon2" @click="getUserInfo">
          Get data
        </button>
      </div>
      <div v-if="user.length">
       <UserInfo v-model:user="user" />
      </div>
      <h4 v-else class="user-info__title">No Information</h4>
    </div>
  </div>
</template>
<script>
import UserInfo from '@/components/UserInfo.vue';
export default {
  components: {
    UserInfo,
  },
  data() {
    return {
      zip: '',
      user: {},
    };
  },
  methods: {
    getUserInfo() {
      this.fetchLocation();
    },
    fetchLocation() {
      const apiKey = 'AIzaSyCEELEMOijcmwAieMuhF5nKyHjhcqm_RNk'
      const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
      fetch(`${url}${this.zip}&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
          this.user = data.results[0].address_components;
        });
    },
  }
}
</script>
<style lang="scss">
.identification-page {
  height: 100vh;
  &__nav {
    margin-bottom: 16px;
  }
  &__main {
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 500px;
  }
  &__input {
    margin-bottom: 16px;
  }
  &__title {
    text-align: center;
    margin-top: 50px;
  }
}
</style>
