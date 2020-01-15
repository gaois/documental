<script>
	import { stores } from '@sapper/app';
	import { onMount } from 'svelte';
	import { _, locale } from 'svelte-i18n';

	import Footer from 'components/Footer.svelte';
	import Header from 'components/Header.svelte';
	import InternetExplorerNotice from 'components/InternetExplorerNotice.svelte';
	import Navigation from 'components/Navigation.svelte';

	const { page } = stores();
</script>

<div class='skip'>
	<a href={`${$page.path}#main`}>
		{$_(`global.skip`)}
	</a>
</div>

<Header/>

<div class='container'>
	<Navigation/>
	<main id='main'>
		<slot></slot>
	</main>
</div>

<Footer/>

<InternetExplorerNotice/>

<style>
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
		background-color: rgb(79,134,142);
		border-radius: 3px;
		color: #fff;
		font-size: 1rem;
		height: auto;
		left: 0;
		margin: 0 auto;
		opacity: 0.9;
		padding: 15px 20px;
		position: relative;
		text-align: center;
		text-decoration: none;
		width: 75%;
		z-index: 9999;
	}

	.container {
		display: flex;
		flex-direction: column;
	}

	:global(.js) .container {
		margin-top: 6.4rem;
	}

	main {
		display: flex;
		flex-direction: column;
		height: 100%;
		padding: 0 1rem 1rem 1rem;
		width: 100%;
	}

	@media screen and (min-width: 1000px) {
		.skip a:focus,
		.skip a:active {
			font-size: 3.5rem;
			padding: 30px 45px;
			width: 75%;
		}
		
		.container, main {
			flex-direction: row;
			justify-content: space-between;
		}

		:global(.js) .container {
			margin-top: 0;
		}
	}
</style>