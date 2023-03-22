<template>
  <div class="home">
    <nav-bar>
      <router-link to="/identification" class="link">
        Identification
      </router-link>
    </nav-bar>
    <transition name="route" mode="out-in" appear>
    <h1 class="home__title">
      Home page
    </h1>
    </transition>
  </div>
</template>
<style lang="scss">
.home {
  margin: 0;
  padding: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;

  &__title {
    text-align: center;
    margin-top: 50px;
  }
}
.route-enter-from {
  opacity: 0;
  transform: translateY(100px)
}
.route-enter-active,
.route-leave-active {
  transition: all .2s ease-out
}
.route-leave-to {
  opacity: 0;
  transform: translateY(300px)
}
</style>
