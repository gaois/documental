<script>
	import { onMount } from 'svelte';
	import Navigation from '../components/Navigation.svelte';
	import { _L, locale } from '../l18n/l18n';

	export let segment;

	function setDocumentLang() {
		document.documentElement.lang = $locale;
	}

	let currentLocale = $locale;

	$: if (currentLocale !== $locale) {
		setDocumentLang();
		currentLocale = $locale;
	}

	onMount(() => setDocumentLang());
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<div class="skip">
	<a href="#main">
		{$_L(`en: Skip to main content | ga: Léim go príomhábhar an leathanaigh`)}
	</a>
</div>

<Navigation {segment}/>

<main id="app-main">
	<slot></slot>
</main>