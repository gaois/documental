<script context="module">
    import { locale, waitLocale } from 'svelte-i18n';
    
	export async function preload(page, session) {
        locale.set(session.locale);
        return await waitLocale();
    };
</script>

<script>
    import Home from 'components/Home.svelte';
</script>

<Home/>