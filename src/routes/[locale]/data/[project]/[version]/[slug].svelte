<script context="module">
    import { readMarkdown } from 'utils/markdown';
    import { errorMessage } from 'utils/messenger';

	export async function preload(page, session) {
        const { locale, project, version, slug } = page.params;
        const path = `${locale}/data/${project}/${version}/${slug}.json`;

        const response = await this.fetch(path);
		const data = await response.json();

		if (response.status === 200) {
            const { metadata, toc, content } = readMarkdown(data.markdown, page.path);
            const monolingual = data.monolingual;

            if (!!metadata.public && metadata.public === 'true') {
                return {
                    uiLocale: locale,
                    basePath: page.path,
                    metadata,
                    monolingual,
                    toc,
                    content
                };
            } else {
                this.error(404, errorMessage(404, locale));
            }
		} else {
			this.error(response.status, data.message);
		}
    }
</script>

<script>
    import { _L, locale } from 'l18n/l18n';
    import Document from '../../../../../components/Document.svelte'
    import TableOfContents from '../../../../../components/TableOfContents.svelte'

    export let uiLocale;
    export let basePath;
    export let metadata;
    export let monolingual;
    export let toc;
    export let content;

    $: $locale = uiLocale;
    $: showTOC = !(metadata.toc !== null && metadata.toc === 'false');

    const alternateLocale = ($locale === 'en') ? 'ga' : 'en';
    
    function path(targetLocale) {
		const params = basePath.split('/');
		params[1] = targetLocale;
		return params.join('/');
	}
</script>

<svelte:head>
    {#if (!!metadata.title)}
        <title>{metadata.title}</title>
        <meta property="og:title" content={metadata.title}>
        <meta property="og:site_name" content={metadata.title}>
        <meta name="twitter:title" content={metadata.title}>
    {/if}
    {#if (!!metadata.description)}
        <meta name="description" content={metadata.description}>
        <meta property="og:description" content={metadata.description}>
        <meta name="twitter:description" content={metadata.description}>
    {/if}
    {#if (!!metadata.keywords)}
        <meta name="keywords" content={metadata.keywords}>
    {/if}

    <link rel="alternate" hreflang="en" href={`https://docs.gaois.ie${path(alternateLocale)}`}>
    <meta property="og:url" content={`https://docs.gaois.ie${path($locale)}`}>
    <meta name="twitter:url" content={`https://docs.gaois.ie${path($locale)}`}>
</svelte:head>

{#if (showTOC)}
    <TableOfContents {toc}/>
{/if}

<Document {metadata} {content} {monolingual}/>