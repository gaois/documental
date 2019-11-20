<script>
    import { _L } from 'l18n/l18n';
    
    export let toc;
</script>

<style>
    h2 {
        color: #999;
        font-size: 0.9rem;
        margin-bottom: 1rem;
        text-transform: uppercase;
    }

    div :global(a) {
        text-decoration: none;
    }

    div :global(ul) {
        font-size: 0.9rem;
        list-style: none;
        padding: 0;
    }

    div :global(ul ul) {
        padding-left: 1.2rem;
    }

    div :global(li) {
        margin: 0.2rem 0;
    }

    div :global(strong) {
        font-weight: inherit;
    }

    div :global(code) {
        font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace;
    }

    .contents {
		padding: 1rem;
    }

    .contents div {
        max-height: 80vh;
        max-height: calc(90vh - 100px);
        overflow: auto;
    }

    @media screen and (min-width: 1000px) {
        .contents {
            order: 1;
            position: fixed;
            right: 0;
            top: 5rem;
            width: 25%;
        }
    }
</style>

<nav class="contents">
    <h2>{$_L(`en: Contents | ga: Clár`)}</h2>
    <div>
        {@html toc}
    </div>
</nav>