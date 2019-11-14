<script context="module">
	export async function preload(page, session) {
        const { locale } = page.params;
        const uiLocale = locale;

        return { uiLocale };
    }
</script>

<script>
    import { beforeUpdate } from 'svelte';
	import { _L, locale } from '../../l18n/l18n';
    import Index from '../index.svelte';

    export let uiLocale;

    beforeUpdate(() => {
        $locale = uiLocale;
	});
</script>

<p>{uiLocale}</p>

<Index/>