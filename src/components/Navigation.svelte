<script>
	import { stores } from '@sapper/app';
	import { _L, locale } from 'l18n/l18n';
	import { beforeUpdate } from 'svelte';

	export let segment;

	const { page } = stores();

	let pathEN = path('en');
	let pathGA = path('ga');

	beforeUpdate(() => {
		pathEN = path('en');
		pathGA = path('ga');
	});

	function path(targetLocale) {
		if (!$page.path || $page.path === '/')
			return `/${targetLocale}`;

		const params = $page.path.split('/');
		params[1] = targetLocale;
		return params.join('/');
	}
</script>

<nav class="language">
	<a rel="prefetch" href={pathEN}>English</a>
	<a rel="prefetch" href={pathGA}>Gaeilge</a>
</nav>

<nav class="site">
	<ul>
		<li>
			<a href={`/${$locale}`}>
				<img src="" alt={$_L(`en: Home | ga: Baile`)}/>
			</a>
		</li>
		<li><a class='{segment === "about" ? "selected" : ""}' href='about'>about</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>blog</a></li>
	</ul>
</nav>

<style>
	.language {
		position: absolute;
		top: 1rem;
		right: 1rem;
	}

	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>