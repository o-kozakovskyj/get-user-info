<template>
    <nav class="navbar navbar-expand-md bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Logo
        </a>
        <button 
          class="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <slot></slot>
          </div>
        </div>
      </div>
    </nav>
</template>
<script>
export default {
  name: "nav-bar"
};
</script>

