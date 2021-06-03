<template>
  <div id="app">
    <header>
      <GovBar/>
      <ProfileBar/>
      <NavigationBar  msgTitle="Services et structures d'hébergement pour âgées"/>
    </header>
    <main id="main" class="page-main" role="main">
      <SearchPanel/>
    </main>
  </div>
</template>

<script>
import GovBar from './components/GovBar.vue';
import ProfileBar from './components/ProfileBar.vue';
import NavigationBar from './components/NavigationBar.vue';
import SearchPanel from './components/SearchPanel.vue';

export default {
  name: 'App',
  components: {
    GovBar,
    ProfileBar,
    NavigationBar,
    SearchPanel,
  },
};
</script>

<style>
body {
  margin: 0;
  background: #fff;
  color: #000;
  font: 400 10.5pt/14pt source-sans-pro, Arial, sans-serif;
}
.page-main {
  padding: 0 2rem;
  max-width: 1500px;
  margin: 0 auto;
  position: relative;
}
</style>
