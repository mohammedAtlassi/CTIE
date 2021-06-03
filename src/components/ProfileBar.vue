<template>
<div class="profile" id="profile">
    <!-- <ul class="profile-links">
        <li>
            <a class="profile-link" href="#">
                <i class="fas fa-user-circle fa-lg"></i>abc123
            </a>
        </li>
        <li><a class="profile-link" title="Se deconnecter" href="#">Se deconnecter</a></li>
    </ul> -->

</div>
</template>

<script>
export default {
  name: 'ProfileBar',
};
</script>

<style>
.profile{
  padding: 0 2rem;
  max-width: 1500px;
  margin: 0 auto;
  position: relative;
}
h1{
    display: block;
    float: left;
}
.fa-lg {
    margin-right: 10px;
}
.profile-link {
    float: left;
    font-weight: 700;
    padding: 8px;
}
.profile-link:active,
.profile-link:focus,
.profile-link:hover,
.profile-link:link,
.profile-link:visited {
    border: 0;
    color: #275a7a!important;
    text-decoration: none;
}
.profile-link:focus,
.profile-link:hover {
    background: #e6e6e6!important;
}
</style>
