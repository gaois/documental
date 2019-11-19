<script>
	import { _L, locale } from 'l18n/l18n';
</script>

<footer>
    <img src="" alt={$_L(`en: Dublin City University | ga: Ollscoil Chathair Bhaile Átha Cliath`)}/>
    <p>© <a href={`https://www.gaois.ie/${$locale}/`}>{$_L(`en: Gaois research group | ga: Grúpa taighde Gaois`)}</a>, Fiontar & Scoil na Gaeilge</p>
    <nav>
        <ul>
            <li>
                <a href="mailto:gaois@dcu.ie">{$_L(`en: E-mail | ga: Ríomhphost`)}</a>
            </li>
            <li>
                <a href="https://twitter.com/gaois_ie">Twitter</a>
            </li>
            <li>
                <a href="https://github.com/gaois">GitHub</a>
            </li>
        </ul>
    </nav>
</footer>

<style>
    footer {
        background-color: #f0f2f3;
        padding: 1rem;
        text-align: center;
        width: 100%;
    }
</style>