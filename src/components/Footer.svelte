<script>
	import { _L, locale } from 'l18n/l18n';
</script>

<footer>
    <img class="dcu" 
        src="/dcu_logo_stacked_light_blue.png"
        alt={$_L(`en: Dublin City University | ga: Ollscoil Chathair Bhaile Átha Cliath`)}/>
    <p>© <a href={`https://www.gaois.ie/${$locale}/`}>{$_L(`en: Gaois research group | ga: Grúpa taighde Gaois`)}</a>, Fiontar & Scoil na Gaeilge</p>
    <nav>
        <ul>
            <li>
                <a href="mailto:gaois@dcu.ie">{$_L(`en: E-mail | ga: Ríomhphost`)}</a>
            </li>
            <li>
                <a href="https://twitter.com/gaois_ie">
                    <img src="/twitter.svg" alt="Twitter"/>
                </a>
            </li>
            <li>
                <a href="https://github.com/gaois">
                    <img src="/github.svg" alt="GitHub"/>
                </a>
            </li>
        </ul>
    </nav>
</footer>

<style>
    footer {
        background-color: rgb(84, 192, 220);
        color: #fff;
        padding: 1rem;
        width: 100%;
    }

    .dcu {
        width: 100%;
    }

    @media screen and (min-width: 1000px) {
        footer {
            width: 60%;
        }

        .dcu {
            max-width: 70px;
        }
    }
</style>