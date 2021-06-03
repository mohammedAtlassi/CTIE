<template>
    <div class="navigationbar" id="navigationbar">
        <h5>{{ msgTitle }}</h5>
        <div><a href="#">Saisir des services</a> | <a href="#">Gestion des utilisateurs</a>
        </div>
        <div><a href="#">Home</a><span> > Gestion des utilisateurs</span></div>
    </div>
</template>

<script>
export default {
  name: 'ProfileBar',
  props: {
    msgTitle: String,
  },
};
</script>

<style>
.navigationbar{
    background: #05a0bd;
    padding: 2rem;
}
h5 {
    color: white;
}
.navigationbar a {
    color: white;
}

</style>
