<script context="module">
    import { defaultLocale } from 'i18n/settings';
    import { locale, waitLocale } from 'svelte-i18n';
    
	export async function preload(page, session) {
        locale.set(session.locale || defaultLocale);
        return await waitLocale();
    };
</script>

<script>
    import Home from 'components/Home.svelte';
</script>

<Home/>