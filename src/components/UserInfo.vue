<template>
  <h5>
    City:
    <small class="text-muted">{{ user[user.length - 3].long_name }}</small>
  </h5>
  <h5>
    State:
    <small class="text-muted">{{ user[user.length - 2].long_name }}</small>
  </h5>
  <h5>
    Country:
    <small class="text-muted">{{ user[user.length - 1].long_name }}</small>
  </h5>
  <h5>
    Referrer:
    <small class="text-muted">{{ referrer }}</small>
  </h5>
  <h5>
    User Agent:
    <small class="text-muted">{{ userAgent }}</small>
  </h5>
  <h5 v-show="utm">
    UTM:
    <small class="text-muted">{{ utm }}</small>
  </h5>
  <div class="accordion">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
          aria-expanded="true" aria-controls="collapseOne">
          <h5>
            IP:
            <small class="text-muted">{{ ipAdress }}</small>
          </h5>
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
        data-bs-parent="#accordionExample">
        <div class="accordion-body">

          <h5>
            ISP:
            <small class="text-muted">{{ isp }}</small>
          </h5>
          <h5>
            Country:
            <small class="text-muted">{{ country }}</small>
          </h5>
          <h5>
            City:
            <small class="text-muted">{{ city }}</small>
          </h5>
          <h5>
            Region:
            <small class="text-muted">{{ region }}</small>
          </h5>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    user: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      ipAdress: '',
      isp: '',
      country: '',
      city: '',
      region: '',
    };
  },
  computed: {
    utm() {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      return urlParams.get("utm_source"), urlParams.get("utm_medium"), urlParams.get("utm_campaign");
    },
    referrer() {
      return window.frames.top.document.referrer;
    },
    userAgent() {
      return window.navigator.userAgent;
    },
  },
  mounted() {
    this.getIpAdress();
    this.getAdressbyIp();
  },
  methods: {
    getIpAdress() {
      fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
          this.ipAdress = data.ip;
        });
    },
    getAdressbyIp() {
      fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
          this.isp = data.org;
          this.country = data.country_name;
          this.city = data.city;
          this.region = data.region;
        });
    },
  },
}
</script>
<style>
.accordion-button {
  padding: 0;
}
</style>