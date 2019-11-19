<script>
	import { stores } from '@sapper/app';
	import { _L, locale } from 'l18n/l18n';
	import { onMount } from 'svelte';
	import Footer from '../components/Footer.svelte';
	import Navigation from '../components/Navigation.svelte';

	const { page } = stores();

	export let segment;

	let currentLocale = $locale;

	const setDocumentLocale = () => document.documentElement.lang = $locale;

	$: if (currentLocale !== $locale) {
		setDocumentLocale();
		currentLocale = $locale;
	}

	onMount(() => setDocumentLocale);
</script>

<div class="skip">
	<a href={`${$page.path}#main`}>
		{$_L(`en: Skip to main content | ga: Léim go príomhábhar an leathanaigh`)}
	</a>
</div>

<div class="container">
	<Navigation {segment}/>

	<main id="main">
		<slot></slot>
	</main>
</div>

<Footer/>

<style>
/**
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
**/
	.skip {
		left: 0;
		margin-left: 0;
		position: absolute;
		text-align: center;
		top: 0;
		width: 100%;
	}

	.skip a {
		left: -99999px;
		position: absolute;
		top: 30px;
	}

	.skip a:focus,
	.skip a:active {
		position: relative;
		left: 0;
		z-index:9999;
		width: 75%;
		height: auto;
		margin: 0 auto;
		padding: 30px 45px;
		text-align: center;
		text-decoration: none;
		letter-spacing: -4px !important;
		font: bold 50px "Arial", "Freesans", sans-serif !important;
		/* color information, edit this to suit the colors of your layout */
			color: #AEAEFE;
		background: transparent url(transparent.png) repeat scroll 0 0;
		border: 1px dotted #ffb4db;
	}

	.container {
		display: flex;
		flex-direction: column;
	}

	main {
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
	}

	@media screen and (min-width: 1000px) {
		.container, main {
			flex-direction: row;
			justify-content: space-between;
		}
	}
</style>