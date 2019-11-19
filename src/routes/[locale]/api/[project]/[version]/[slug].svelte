<script context="module">
	export async function preload(page, session) {
        const { locale, project, version, slug } = page.params;
        const path = `${locale}/api/${project}/${version}/${slug}.json`;

        const response = await this.fetch(path);
		const data = await response.json();

		if (response.status === 200) {
			return {
                basePath: page.path,
                markdown: data
            };
		} else {
			this.error(response.status, data.message);
		}
    }
</script>

<script>
    import { _L, locale } from 'l18n/l18n';
    import { readMarkdown } from 'utils/markdown';

    export let basePath;
    export let markdown;

    const { metadata, toc, content } = readMarkdown(markdown, basePath);

    if (metadata.public !== null && !metadata.public) {

    }
</script>

<svelte:head>
    {#if (metadata.title)}
        <title>{metadata.title}</title>
        <meta property="og:title" content={metadata.title}/>
        <meta property="og:site_name" content={metadata.title}/>
        <meta name="twitter:title" content={metadata.title}/>
    {/if}
    {#if (metadata.description)}
        <title>{metadata.description}</title>
        <meta name="description" content={metadata.description}/>
        <meta property="og:description" content={metadata.description}/>
        <meta name="twitter:description" content={metadata.description}/>
    {/if}
    
	<link rel="stylesheet" href="/gfm.css">
</svelte:head>

<div class="toc">
    {@html toc}
</div>

<div class="markdown-body">
    {@html content}
</div>