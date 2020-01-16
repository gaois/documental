<script context="module">
    import localize from 'i18n/localize';
    import { readMarkdown } from 'utils/markdown';
    import { errorMessage } from 'utils/messenger';
    import { mapPath } from 'utils/server';

	export async function preload(page, session) {
        await localize(page, session);
        
        const { locale } = page.params;
        const path = mapPath(`data/article.json?${new URLSearchParams(page.params).toString()}`, session);
        const response = await this.fetch(path);
		const data = await response.json();

		if (response.status === 200) {
            const { metadata, toc, content } = readMarkdown(data.markdown, page.path);

            if (!!metadata.public && metadata.public === 'true') {
                return {
                    basePath: page.path,
                    metadata,
                    monolingual: data.monolingual,
                    toc,
                    content,
                    versions: data.versions,
                    articles: data.articles
                };
            } else {
                this.error(404, errorMessage(404, locale));
            }
		} else {
			this.error(response.status, data.message);
		}
    };
</script>

<script>
    import Project from 'components/Project.svelte'

    export let basePath;
    export let metadata;
    export let monolingual;
    export let toc;
    export let content;
    export let versions;
    export let articles;
</script>

<Project {basePath} {metadata} {monolingual} {toc} {content} {versions} {articles}/>