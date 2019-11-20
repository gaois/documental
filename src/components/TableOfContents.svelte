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
        border-left: 1px solid #ddd;
		padding: 1rem;
    }

    @media screen and (min-width: 1000px) {
        .contents {
            order: 1;
            position: fixed;
            right: 2rem;
            top: 4rem;
        }
    }
</style>

<div class="contents">
    <h2>{$_L(`en: Contents | ga: Clár`)}</h2>
    <div>
        {@html toc}
    </div>
</div>