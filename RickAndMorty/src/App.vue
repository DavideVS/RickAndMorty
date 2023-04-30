<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from '@/shared/components/NavBar.vue';
import { routeLinks } from './router/link-routers';
</script>

<template>

  <div class="wrapper">
  <!--<h1> App.vue</h1>-->
  <header>
    <NavBar
      title="RickAndMorty"
      :links="routeLinks"/>
  </header>
  <main>
    <RouterView/>
  </main>
  </div>
</template>

<style scoped>

.wrapper{
  display: flex;
  flex-direction: column;
}
</style>
