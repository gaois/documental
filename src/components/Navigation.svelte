<script>
	import { stores } from '@sapper/app';
	import { _L, locale } from 'l18n/l18n';
	import { beforeUpdate } from 'svelte';

	export let segment;

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

<nav class="language">
	<a class="gaois-link" href={`https://www.gaois.ie/${$locale}`}>Gaois</a>
	<a rel="prefetch" class:selected={$locale === 'en'} href={pathEN}>English</a>
	<a rel="prefetch" class:selected={$locale === 'ga'} href={pathGA}>Gaeilge</a>
</nav>

<nav class="site">
	<ul>
		<li>
			<a class="home-link" href={`/${$locale}`}>
				<img src="" alt={$_L(`en: Home | ga: Baile`)}/>
			</a>
		</li>
		<li>
			<a href>{$_L(`en: Open Data | ga: Sonraí Oscailte`)}</a>
			<ul>
				<li>
					<a href={`/${$locale}/api/logainm/v0.9/developer`}>Logainm</a>
					<ul>
						<li>
							<a href={`/${$locale}/api/logainm/v0.9/developer`}>{$_L(`en: Development | ga: Forbairt`)}</a>
						</li>
						<li>
							<a href={`/${$locale}/api/logainm/v0.9/data`}>{$_L(`en: Data dictionary | ga: Foclóir sonraí`)}</a>
						</li>
						<li>
							<a href={`/${$locale}/api/logainm/v0.9/licence`}>{$_L(`en: Licence | ga: Ceadúnas`)}</a>
						</li>
						<li>
							<a href={`/${$locale}/api/logainm/v0.9/changelog`}>{$_L(`en: Changelog | ga: Loga athruithe`)}</a>
						</li>
					</ul>
				</li>
				<li>
					<a href={`/${$locale}/api/duchas/v1.0/surnames`}>{$_L(`en: Surnames Index | ga: Innéacs Sloinnte`)}</a>
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
	.language {
		background-color: rgb(79,134,142);
		color: #fff;
		display: inline-flex;
		position: absolute;
		right: 0;
		top: 0;
		width: 100%;
	}

	.language .selected {
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
	
	.site .home-link {
		background-color: rgb(84, 192, 220);
		margin-top: 0;
	}

	.gaois-link {
		text-transform: uppercase;
	}

    @media screen and (min-width: 1000px) {
		.language {
			position: fixed;
			text-align: center;
			width: 26rem;
		}

        .site {
            width: 15%;
        }
    }
</style>