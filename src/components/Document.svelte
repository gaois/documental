<script>
    import MonolingualNotice from './MonolingualNotice.svelte'

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
        {@html content}
    </div>
</div>

<style>
    .documentation {
        padding: 1rem;
        width: 100%;
    }

    @media screen and (min-width: 1000px) {
        .documentation {
            max-width: 52em;
            padding: 1rem 2rem;
        }
    }
</style>