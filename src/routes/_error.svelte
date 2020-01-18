<script>
	import settings from 'settings';
    import { _ } from 'svelte-i18n';

	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
	<title>{status}</title>
	<meta name='description' content={error.message}>
</svelte:head>

<div class='message'>
	<h1>{status}</h1>
	{#if (status === 404)}
		<p>{$_('error.pageNotFound')}.</p>
	{:else}
		<p>{error.message}</p>
	{/if}
	{#if dev && error.stack}
		<pre>{error.stack}</pre>
	{/if}
	<hr/>
	<p>{$_('error.contact')}: <a href={`mailto:${settings.siteEmail}`}>{settings.siteEmail}</a>.</p>
</div>

<style>
	.message {
		margin-top: 1.6rem;
	}

	h1, p {
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}
	
	pre {
		overflow: auto;
		width: 100%;
	}

	hr {
		border-color: #ccc;
		color: #ccc;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}

	@media (min-width: 1000px) {	
		.message {
			margin-top: 6rem;
			padding: 0 2rem;
		}
	}
</style>