<script context="module">
	export async function preload(page, session) {
        const { locale } = page.params;
        const uiLocale = locale;

        return { uiLocale };
    }
</script>

<script>
	import { _L, locale } from 'l18n/l18n';
    import Index from '../index.svelte';

    export let uiLocale;

    $: $locale = uiLocale;
</script>

<Index/>