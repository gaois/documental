<script>
	import { _L, locale } from 'l18n/l18n';
	//import Docs, { _metadata } from './[locale]/api/logainm/developer.en.svx';
</script>

<svelte:head>
	<title>{$_L(`en: Home | ga: Baile`)}</title>
</svelte:head>

<p>{$locale} {$_L(`en: Home | ga: Baile`)}</p>

<div>
<!--
	<h1>{_metadata.title}</h1>
	<Docs/>
-->
<h1>Hello</h1>
</div>

<style>
	h1, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	/*img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}*/

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>