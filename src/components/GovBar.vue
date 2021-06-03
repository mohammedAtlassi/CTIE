<template>
    <div class="govbar" id="govbar">
        <a href="http://gouvernement.lu/fr.html" target="_blank" class="govbar-logo" lang="fr" title="Gouvernement du Grand-Duché de Luxembourg (Nouvelle fenêtre)">
        <img src="//cdn.public.lu/pictures/logos/gov/gov-light.png" srcset="//cdn.public.lu/pictures/logos/gov/gov-light-hdpi.png 1.5x,
          //cdn.public.lu/pictures/logos/gov/gov-light-xhdpi.png 2x,
          //cdn.public.lu/pictures/logos/gov/gov-light-xxhdpi.png 3x" alt="Gouvernement du Grand-Duché de Luxembourg (Nouvelle fenêtre)">
        </a>
        <ul class="govbar-links">
            <li><a class="govbar-link" target="_blank" title="luxembourg.lu (nouvelle fenêtre)" href="http://luxembourg.lu">luxembourg.lu</a></li>
            <li><a class="govbar-link" target="_blank" title="guichet.lu (nouvelle fenêtre)" href="http://guichet.lu">guichet.lu</a></li>
            <li><a class="govbar-link" target="_blank" title="crossgov.lu (nouvelle fenêtre)" href="http://gouvernement.lu">gov.lu</a></li>
        </ul><br/><br/>
        <ul class="profile-links">
        <li>
            <a class="profile-link" href="#">
                <i class="fas fa-user-circle fa-lg"></i>abc123
            </a>
        </li>
        <li><a class="profile-link" title="Se deconnecter" href="#">Se deconnecter</a></li>
    </ul>
    </div>

</template>

<script>
export default {
  name: 'GovBar',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.profile-links {
    float: right;
    list-style: none;
    margin: 0;
    padding: 0;
}
.profile-links li {
    float: left;
}
.govbar {
		background: #fff;
		border-bottom: 1px solid #cccaca;
		font-family: Helvetica, Arial, sans-serif;
		font-size: 12px;
		overflow: hidden;
		height: 70px;
		width: 100%;
		z-index: 30000
	}
	.govbar::after,
	.govbar::before {
		content: '';
		display: table
	}
	.govbar-logo {
		border: 0;
		float: left;
		padding: 3px 8px
	}
	.govbar-logo.newwindow:after {
		display: none
	}
	.govbar-logo img {
		border: 0;
		display: block;
		height: 40px
	}
	.govbar-links {
		float: right;
		list-style: none;
		margin: 0;
		padding: 0
	}
	.govbar-links li {
		float: left
	}
	.govbar-link {
		float: left;
		font-weight: 700;
		padding: 8px
	}
	.govbar-link:active,
	.govbar-link:focus,
	.govbar-link:hover,
	.govbar-link:link,
	.govbar-link:visited {
		border: 0;
		color: #275a7a!important;
		text-decoration: none
	}
	.govbar-link:focus,
	.govbar-link:hover {
		background: #e6e6e6!important
	}
	.govbar-more {
		font-weight: 400
	}
</style>
