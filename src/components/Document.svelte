<script>
    import MonolingualNotice from './MonolingualNotice.svelte'

    export let metadata;
    export let content;
    export let monolingual;
</script>

<svelte:head>
	<link rel="stylesheet" href="/gfm.css">
</svelte:head>

<div class="documentation">
    {#if (!!monolingual && monolingual)}
        <MonolingualNotice/>
    {/if}

    <div class="markdown-body">
        {#if (!!metadata.title)}
            <h1>{metadata.title}</h1>
        {/if}
        {@html content}
    </div>
</div>

<style>
    .documentation {
        padding: 1rem;
        margin-bottom: 2.6rem;
        width: 100%;
    }

    @media screen and (min-width: 1000px) {
        .documentation {
            max-width: 65%;
            margin-top: 4.5rem;
            padding: 1rem 2rem;
        }
    }
</style>