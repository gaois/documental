<script context="module">
    import localize from 'i18n/localize';
    
	export async function preload(page, session) {
        await localize(page, session);
    };
</script>

<script>
    import Home from 'components/Home.svelte';
</script>

<Home/>