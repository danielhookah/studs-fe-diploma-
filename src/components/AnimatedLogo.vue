<template>
  <div>
    <h1 class="huge-title">ST<span class="animate__animated animate__flip">U</span>DS</h1>
    <h3 class="mt-4 fade-in-out">can do this.</h3>
  </div>
</template>

<script>

export default {
  name: 'AnimatedLogo'
}
</script>

<style scoped lang="scss">
  .animate__animated.animate__flip {
    --animate-duration: 3s;
    animation-iteration-count: infinite;
  }

  .fade-in-out {
    animation-iteration-count: infinite;
  }

  .huge-title {
    padding-top: 20px;
    span {
      display: inline-block;
    }
  }
</style>
