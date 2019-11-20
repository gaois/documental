<script>
	import { stores } from '@sapper/app';
	import { _L, locale } from 'l18n/l18n';
	import { beforeUpdate } from 'svelte';

	const { page } = stores();

	$: params = $page.path.split('/');

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

<nav class="meta">
	<a class="gaois-link" href={`https://www.gaois.ie/${$locale}`}>
		<span class="arrow arrow-left"></span>
		<span class="gaois-link-text">Gaois</span>
	</a>
	<ul class="switcher">
		<li><a rel="prefetch" class:selected={$locale === 'ga'} href={pathGA}>Gaeilge</a></li>
		<li><a rel="prefetch" class:selected={$locale === 'en'} href={pathEN}>English</a></li>
	</ul>
</nav>

<nav class="site">
	<ul>
		<li>
			<a class="home-link" href={`/${$locale}`}>
				<img src="/gaois-white.svg" alt=""/>
				{$_L(`en: Documentation | ga: Doiciméadacht`)}
			</a>
		</li>
		<li>
			<a href>{$_L(`en: Open Data | ga: Sonraí Oscailte`)}</a>
			<ul>
				<li>
					<a href={`/${$locale}/data/logainm/v0.9/api`}>Logainm</a>
					<ul>
						<li>
							<a href={`/${$locale}/data/logainm/v0.9/api`}>{$_L(`en: API | ga: Comhéadan feidhmchláir`)}</a>
						</li>
						<li>
							<a href={`/${$locale}/data/logainm/v0.9/data`}>{$_L(`en: Data dictionary | ga: Foclóir sonraí`)}</a>
						</li>
						<li>
							<a href={`/${$locale}/data/logainm/v0.9/licence`}>{$_L(`en: Licence | ga: Ceadúnas`)}</a>
						</li>
						<li>
							<a href={`/${$locale}/data/logainm/v0.9/changelog`}>{$_L(`en: Changelog | ga: Loga athruithe`)}</a>
						</li>
					</ul>
				</li>
				<li>
					<a href={`/${$locale}/data/duchas/v1.0/surnames`}>{$_L(`en: Surnames Index | ga: Innéacs Sloinnte`)}</a>
				</li>
			</ul>
		</li>
		<li>
			<a href>{$_L(`en: Software | ga: Bogearraí`)}</a>
		</li>

		<!--<li><a class='{segment === "about" ? "selected" : ""}' href='about'>about</a></li>

		<li><a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>blog</a></li>-->
	</ul>
</nav>

<style>
	.meta {
		background-color: rgb(79,134,142);
		color: #fff;
		display: inline-flex;
		position: absolute;
		right: 0;
		top: 0;
		width: 100%;
	}

	.switcher {
		display: inline-flex;
		margin-left: auto;
		margin-right: 1.5em;
	}

	.switcher .selected {
		font-weight: 700;
	}

	nav {
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	li {
		display: block;
	}

	a {
		display: block;
		padding: 1em 0.5em;
		text-decoration: none;
	}

	.site ul {
		text-transform: uppercase;
	}

	.site a {
		font-weight: 700;
	}

	.site ul a {
		margin-top: 0.5em;
	}

	.site ul ul {
		color: #666;
		text-transform: none;
	}

	.site ul ul a {
		padding: 0.5em;
		margin-top: 0;
	}

	.site ul ul ul {
		margin-left: 1rem;
	}

	.site ul ul ul a {
		font-weight: 300;
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
	
	.site ul a.home-link {
		background-color: rgb(84, 192, 220);
		color: #fff;
		font-weight: 300;
		margin-bottom: 1rem;
		margin-top: 0;
		padding: 1.6rem 1.4rem 1.5rem 1rem;
		text-transform: none;
	}

	.home-link img {
		margin-bottom: 0.6rem;
	}

	.gaois-link {
		text-transform: uppercase;
	}

	.gaois-link-text {
		margin-left: 0.25rem;
	}

	.arrow {
		display: inline-block;
		width: 0.7rem;
		height: 0.7rem;
		border-top: 2px solid #fff;
		border-right: 2px solid #fff;
	}

	.arrow-left {
		transform: rotate(-135deg);
	}

    @media screen and (min-width: 1000px) {
		.meta {
			position: fixed;
			text-align: center;
			width: 28%;
		}

        .site {
            width: 18%;
        }
    }
</style>