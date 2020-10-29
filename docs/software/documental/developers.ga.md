---
teideal: Doiciméadacht Forbróirí
gearrtheideal: d'fhorbróirí
cur síos: conas Documental a bhreisiú agus a mhionathrú
eochairfhocail: doiciméadacht, logánú, idirnáisiúnú, Sapper, Svelte, Gaois, Fiontar & Scoil na Gaeilge, DCU
acmhainn: Documental
ord: 3
poiblí: fíor

---
Is feidhmchlár [Node.js](https://nodejs.org/) é Documental scríofa i Javascript. Is féidir leis rith ar fhreastalaí, ag soláthar inneachair go dinimiciúil, nó, is féidir é a úsáid mar [ghineadóir suímh stataigh](https://www.staticgen.com/about). Mínítear é seo a thuilleadh sa chuid a bhaineann le [himlonnú](../imlonnú). Stóráiltear inneachar suímh idirlín ar dhiosca i bhformáid chomhad Markdown agus níl aon bhunachar sonraí ná aon saghas sonraíochta eile stóráilte. 

Oibríonn an bogearra ar gach córas oibriúcháin coitianta: an t-aon réamhriachtanas ná Node.js a shuiteáil ar do ríomhaire. Aimseoidh agus suiteálfaidh Node.js Package Manager (NPM) gach spleáchais eile as féin i rith na cumraíochta. Tógtar Documental trí úsáid a bhaint as [Svelte](https://svelte.dev/), creatlach comhpháirteanna cosúil le React, agus [Sapper](https://sapper.svelte.dev/), creatlach feidhmchláir á chumhachtú ag Svelte. Féach an doiciméadacht le haghaidh na gcreatlach seo má bhíonn aon cheist agat ó thaobh an fheidhmchláir de, mar tá eolas den saghas sin lasmuigh de scóip an ailt seo. 

## Ag tosú

### Suiteáil agus cumraíocht

Déan an stór Documental a chlónáil ar do mheaisín: 

```cmd
git clón https://github.com/gaois/documental
```

Athraigh an chomhadlann go dtí do stór logánta agus déan spleáchais an tionscadail a shuiteáil: 

```cmd
npm suiteáil
```

### An feidhmchlár a thosú

Déan an t-ordú seo a leanas a rith chun Documental a thosú i mód forbróra: 

```cmd
npm rith dev
```



Nuair a bhíonn an feidhmchlár á rith i mód forbróra bíonn beo-athlódáil modúl ar fáil (i.e. déantar na hathruithe a dhéanann tú san eagarthóir a thaispeáint sa bhrabhsálaí láithreach bonn nuair a shábháiltear é), chomh maith le teachtaireachtaí mionsonraithe sa chonsól i dtaobh faisnéise agus earráidí. Sula ndéanann tú an feidhmchlár a imlonnú go timpeallacht freastalaí, beidh ort an feidhmchlár a thógáil sa mhód táirgeachta. Pléitear é seo sa chuid a bhaineann le [himlonnú](../deployment). 

## Struchtúr an tionscadail

Caithimis súil ar struchtúr an fhillteáin laistigh de do stór Documental. Sna fillteáin bharrleibhéil seo a leanas is dóichí a dhéanfaidh tú athruithe: 

- **`docs`**: Beidh an doiciméadacht Markdown a fhoilseofar ar do shuíomh idirlín istigh anseo .
- **`teachtaireachtaí`**: Na teaghráin aistrithe a thaispeánfar sa chomhéadan úsáideora (UI), tá siad istigh anseo. Féach [Logánú](#logánú) thíos. 
- **`src`**: Cód foinseach an fheidhmchláir, loighic ródaithe agus gnólachta san áireamh. 
- **`static`**: comhaid statacha a sholáthróidh d'fheidhmchlár, ar nós íomhánna, deilbhíní suímh nó comhaid sheachtracha CSS. 

## Cur chuige comhpháirt-bhunaithe

Bíonn cur chuige comhpháirt-bhunaithe ag creatlacha nua-aimseartha Javascript agus iad ag tógáil feidhmchláir. Má tá taithí agat ar HTML a tháirgeadh le creatlacha ar thaobh an fhreastalaí in C#, PHP, srl. , b'fhéidir nach dtiocfaidh sé seo go réidh leat i dtosach.  Ó thaobh Documental de, comhaid shingile le hiarmhír is éard atá i gceist le comhpháirteanna. De ghnáth, cuirtear iad * `src/node_modules/components`. Déanann na comhaid chomhpháirte an mharcáil, an stíl, an stad agus an loighic le haghaidh cuid áirithe den fheidhmchlár a imchochlú. D'fhéadaidís comhpháirteanna eile a iompórtáil agus iad a úsáid laistigh dá marcáil. Mar shampla, déanann **Resource.svelte** mac-chomhpháirt darb ainm **Article.svelte** a iompórtáil  agus úsáideann sé an chlib chomhpháirte `<Article/>` laistigh dá marcáil. Cé go bhfuil cuma (X)HTML ar an gclib `<Article/>`, ní mar sin a léireofar sa bhrabhsálaí é. Is amhlaidh go dtiomsófar comhpháirt an ailt, mar aon lena mac-comhpháirteanna go léir, go HTML caighdeánach bailí roimh sheoladh go dtí an cliant. Is éasca an cur chuige comhpháirt-bhunaithe a fhoghlaim nuair a chuireann tú tús le heagarthóireacht ar chomhaid .svelte. Tá tuilleadh faisnéise ar fáil sa doiciméadacht Sapper agus Svelte thuasluaite. 

\* Tabhair do d'aire gur comhpháirteanna chomh maith iad na comhaid .svelte san fhillteán `src/routes`, ach gur fusa féachaint orthu mar leathanaigh chomhfhreagracha gréasáin. 

## Coincheapa

Tá Documental bunaithe ar roinnt eochairchoincheapa.

1. **Logchaighdeáin**: léiríonn sé seo sainroghanna logánaithe/idirnáisiúnaithe an úsáideora, mar shampla, Gaeilge nó Béarla.
2. **Catagóir Doiciméadachta**: Tá dhá chatagóir in Documental; Sonraí Oscailte agus Bogearraí. Is féidir tuilleadh a chur leis, áfach. 
3. **Acmhainní**: Is éard is acmhainní ann ná bailiúchán scoite de dhoiciméad amháin nó níos mó a bhaineann le píosa bogearraí, le seirbhís nó le déantán sonraí. 
4. **Leaganacha acmhainne**: Is féidir leaganú a dhéanamh ar dhoiciméadacht le haghaidh acmhainní faoi leith. Is iondúil go ndéantar é seo trí thagairt a dhéanamh d'uimhir leagain na hacmhainne. 
5.**Doiciméid**: Leathanach singil doiciméadachta a bhaineann go sonrach le catagóir, logchaighdeán, acmhainn agus, más mian leat, leagan acmhainne.

Léirítear na coincheapa seo sna URLanna a úsáideann an suíomh idirlín docs.gaois.ie: 

> `https://docs.gaois.ie/en/data/logainm/v0.9/licence`

- **`en`**: Is ionann an logchaighdeán agus Béarla. 
- **`sonraí`**: Is ionann an chatagóir agus Sonraí Oscailte.
- **`logainm`**: Is ionann an fhoinse agus Logainm API.
- **`v0.9`**: Is ionann uimhir leagain na hacmhainne agus 0.9. 
- **`ceadúnas`**: Freagraíonn an 'ceadúnas' slug d'ainm doiciméid shingil (i.e. comhad singil sa chomhadlann `docs`. 

Mar atá ráite thuas, ní dhéantar leaganú ar gach acmhainn: 

> `https://docs.gaois.ie/ga/software/geonames2sql`

- **`ga`**: Is ionann an logchaighdeán agus Gaeilge.
- **`bogearraí`**: Is ionann an chatagóir agus Bogearraí 
- **`geonames2sql`**: Is ionann an acmhainn agus GeoNames2Sql. 

Mura bhfuil ach aon doiciméad amháin a bhaineann leis an acmhainn, níl an slug doiciméid riachtanach, faoi mar atá sa sampla roimhe seo.  

Léirítear na coincheapa seo in ainmniú na gcomhad svelte sa chomhadlann `src/routes` chomh maith. Féach an doiciméadacht a bhaineann le Sapper chun faisnéis i dtaobh ródú a fháil.

```
- routes
  - [locale]
    - [category]
      - index
      - [version]
        - [slug]
      - [slug]
  - index
```

Ina theannta sin, mar a fheiceann tú sa doiciméadacht le haghaidh [eagarthóirí](../eagarthóirí), bíonn na comhaid doiciméadachta Markdown bunaithe ar na coincheapa seo den chuid is mó. 

## Logánú

Déileálann Documental le logánú UI tríd an leabharlann [svelte-i18n](https://github.com/kaisermann/svelte-i18n) . Úsáideann sé seo an [fhormáid teachtaireacht ICU](http://userguide.icu-project.org/formatparse/messages) chun na teaghráin atá sofheicthe ag an úsáideoir a aistriú. 

Stóráiltear na haistriúcháin ar chomhaid JSON san fhillteán barrleibhéil `teachtaireachtaí`. Ainmnítear na comhaid seo san fhormáid `[logchaighdeán].json`. De réir an réamhshocraithe, is mar seo a leanas a bhíonn struchtúr an fhillteáin `teachtaireachtaí`: 

```
- messages
  - en.json
  - ga.json
```

Is féidir aistriúcháin a neadú sna comhaid JSON seo de réir aon struchtúir a mheasann tú a bheith oiriúnach, mar shampla. 

```json
{
  "navigation": {
    "api": "API",
    "changelog": "Changelog",
    "dataDictionary": "Data dictionary",
    "gettingStarted": "Getting started",
    "licence": "Licence",
    "openData": "Open Data",
    "software": "Software",
    "surnames": "Surnames Index"
  },
  ...
}
```

Níl aon srian leis an oiread neaduithe is féidir a dhéanamh ar oibiachtaí sa chomhad aistriúcháin.

Glaoimid ar theaghrán logánaithe san UI ag úsáid poncnodaireacht ar nós `$_('navigation.openData')`, nuair a thugann `navigation.openData` `Open Data` do logchaighdeán Béarla nó `Sonraí Oscailte` do logchaighdeán Gaeilge, etc.

I gcomhair blocanna níos mó téacs is féidir linn ábhar logánaithe a chur i gcomhaid Markdown ar leith, mar a dhéantar i gcás phríomhábhar doiciméadachta an tsuímh idirlín a stóráiltear san fhillteán barrleibhéil `docs` . 

## Acmhainn nua a chur leis

Cé gur féidir le baill foirne eagarthóireachta [doiciméid a chruthú agus a chur in eagar](../eagarthóirí) laistigh d'acmhainn ar leith, bíonn ionchur ón bhforbróir ag teastáil de ghnáth chun acmhainn nua a chur leis, nó chun athrú a dhéanamh ar léiriú na hacmhainne ar an nascleanúint nó ar an leathanach baile. Tugann na treoracha thíos cur síos ar conas é seo a bhaint amach. 

### An filltéan `docs` 

Bíonn fillteán comhfhreagrach laistigh den chomhadlann barrleibhéil `docs` ag teastáil ó gach acmhainn doiciméadachta . Dá mbeifeá ag cruthú acmhainn Sonraí Oscailte le haghaidh API nua, mar shampla, d'fhéadfá filltéan nua a chruthú ag `docs/data/mynewapi`. Dá mbeadh an API leaganaithe, d'fhéadfá fo-fhillteán sa bhreis a chur leis ag `docs/data/mynewapi/v1.0`. Féach an stór le haghaidh tuilleadh samplaí. Tabhair do d'aire gurbh féidir le heagarthóir inneachar an tasc seo a dhéanamh dá mbeadh tuiscint mhaith aige ar struchtúr na comhadlainne. 

### Nascleanúint

Tá an [chomhpháirt](#cur-chuige-comhpháirt-bunaithe) **Nascleanúint.svelte** lonnaithe in `src/node_modules/components`. Nuair a chuirtear an comhad seo in eagar bítear ábalta liosta na n-acmhainní a bhfuil fáil orthu ar an suíomh a leasú (le feiceáil ar thaobh chlé an scáileáin ar ghléasanna deisce).

Mar shampla, chun acmhainn nua bogearraí a chur leis, déanaimid an chuid chuí den chomhad **Navigation.svelte** a chur in eagar:

```svelte
<h2>{$_('navigation.software')}</h2>
<ul>
  <li>
    <NavigationResource category='software' resource='terminologue' heading='Terminologue' index='intro'/>
  </li>
  <li>
    <NavigationResource category='software' resource='geonames2sql' heading='GeoNames2Sql' singleton/>
  </li>
  ...
</ul>
```

Cuir mír liosta nua leis, `<li>`, agus mac-chomhpháirt `<NavigationResource/>`:

```svelte
<li>
  <NavigationResource
    category='software'
    resource='terminologue'
    heading='Terminologue'
    index='intro'/>
</li>
```

Glacann an chomhpháirt `<AcmhainnNascleanúna/>`le líon **airíonna**: 

| Airí | Cur síos |
| ---- | ---- |
| **catagóir** | An chatagóir doiciméadachta; `sonraí` nó `bogearraí`. |
| **acmhainn** | Slug na hacmhainne. Freagraíonn sé d'ainm an fhillteán acmhainne faoi `docs`. |
| **teideal**  | Teideal na hacmhainne. Má tá roinnt doiciméad ag an acmhainn, beidh sé seo le feiceáil os a gcionn sa nascleanúint. |
| **leaganisdéanaí** | Má tá an acmhainn leaganithe, sainigh an uimhir leagain is déanaí anseo. |
| **innéacs**    | Is éard atá san innéacs ná leathanach baile na hacmhainne. Pasáil an slug doiciméadachta don chéad doiciméad le bheith le feiceáil mar luach innéacs. Ní gá leis seo más acmhainn shingil atá ann. |
| **singleton** | Má tá sé seo sainithe, ciallaíonn sé nach bhfuil san acmhainn ach an t-aon doiciméad amháin agus nach gá duit airí `innéacs` a shainiú. ||

Ná déan dearmad nach mbeidh doiciméid le feiceáil sa nascleanúint mura bhfuil ceannteideal YAML de `poiblí: fíor` orthu.

### Leathanach Baile

Tá an rogha ann, más mian leat, blurba tuairisciúil faoin acmhainn a chur le leathanach baile an tsuímh idirlín. Oscail an chomhpháirt **Home.svelte** in `src/node_modules/components`.

Cosúil leis an nascleanúint, is gá dúinn comhpháirt a léiríonn an acmhainn nua a chur leis. 

```svelte
<ul>
  <li>
    <HomeResource 
      href={`/${$locale}/software/terminologue/intro`}
      heading='Terminologue'
      blurb={$_('home.sections.terminologueBlurb')}/>
  </li>
  ...
</ul>
```

| Airí | Cur Síos |
| ---- | ---- |
| **href** | An cosán coibhneasta nó dearbh-URL na hacmhainne. |
| **teideal** | Ceannteideal tuairisciúil. |
| **blurba** | Cur síos 1-2 abairt ar an acmhainn. |

Tabhair do d'aire go mb'fhéidir gur mhian leat [teaghráin logánaithe](#logánú) a phasáil le haghaidh cuid de na hairíonna. 
