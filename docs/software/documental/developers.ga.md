---
teideal: Doiciméadacht réalóra
gearrTheideal: Do réalóirí
cur síos: Conas Documental a bhreisiú agus a mionathrú
eochairfhocail: doiciméadacht, loganú, idirnáisiúnú, Sapper, Svelte, Gaois, Fiontar & Scoil na Gaeilge, DCU
acmhainn: Documental
ord: 3
poiblí: fíor
---

Is feidhmchlár [Node.js] (https://nodejs.org/) atá scríofa i JavaScript. Is féidir é a rith ar fhreastalaí agus é ag freastail ar inneachar go dinimiciúil, nó is féidir é a úsáid mar [static site generator] (https://www.staticgen.com/about). Mínítear é seo sa rannán [deployment] (../deployment). Stóráilítear gach inneachar shuíomh gréasáin ar an diosca mar fhillteáin Markdown agus níl bunachar sonraí ná cineál stóras sonraí eile ann.
Feidhmíonn an bogearra ar gach córas oibriúcháin coitianta: is é an t-aon réamhriachtanas ná Node.js a shuiteáil ar do ríomhaire. Aimseoidh an Node.js Package Manager (NPM) gach spleáchas eile agus déanfaidh sé é a shuiteáil i rith na cumraíochta. Tógadh Documental le [Svelte](https://svelte.dev/), comhpháirt creatlaí atá cosúil le React agus [Sapper](https://sapper.svelte.dev/). Breathnaigh ar an doiciméadacht do na creatlacha seo má tá aon cheist ar leibhéal feidhmchláir agat as siocair nach bpléitear na hábhair sin san alt seo.
## Ah tosnú

### Suiteáil agus cumraíocht

Déan an stór Documental a chlónáil ar do ríomhaire:

```cmd
git clone https://github.com/gaois/documental
```

Athraigh an t-eolaire go dtí d'eolaire áitiúil féin agus déan na spleáchais tionscadail a shuiteáil:

```cmd
npm install
```

### Cuir tús leis an bhfeidhmchláir

Rith an t-ordú seo a leanas chun Documental a thosú sa mhodh forbartha:

```cmd
npm run dev
```

Má rithtear an feidhmchlár sa modh forbartha tugann sé seo hot module reloading (léirítear athruithe a dhéanann tú san eagarthóir ar an mbrabhsalaí láithreach ar shabháil), eolas beacht agus teachtaireachtaí earráide sa chonsól. Roimh imlonnú an fheidhmchláir go timpeallacht freastalaithe beidh ort an feidhmchlár a thógáil sa mhodh táirge. Pléitear é seo sa rannán [deployment](../deployment).

## Struchtúr tionscadail

Féachaimis anois ar structúr na bhfillteán i do stór Documental. Is dócha go ndéanfaidh tú athruithe sna fillteáin barrleibhéil seo a leanas:

- **`docs`**: Tá an doiciméadacht Markdown a fhoilseofar ar do shuíomh gréasáin anseo.
- **`messages`**: Tá na teaghráin aistrithe a thaispeáineofar sa chomhéadain úsáideora (UI) anseo.
- **`src`**: Cód foinseach an fheidhmchláir, ródú agus loighic ghnó san áireamh.
- **`static`**: Fillteáin statacha ar a fhreastlóidh d'fheidhmchlár mar shámpla, íomhanna, deilbhíní suímh nó fillteáin CSS seachtracha.

## Cur chuige comhpháirt-bunaithe 

Bíonn cur chuige comhpháirt-bunaithe ag creatlacha JavaScript nua-aimseartha chun feidhmchlár a thógáil. Má tá tú cleachtaithe le HTML a tháirgeadh le creatlacha thaobh freastalaithe i C#, PHP, srl. seans nach mbeidh seo iomasach láithreach. Ó thaobh Documental de, is fillteáin singile le hiarmhír **.svelte** iad comhpháirteanna. Is gnách iad a chur sa bhfillteán `src/node_modules/components`. Cuimsíonn fillteáin chomhpháirte an mharcáil, an stíl, an staid agus an loighic do pháirt áirithe d'fheidhmchlár. Is féidir leo comhpháirteanna eile a iompórtáil agus iad a úsáid laistigh dá marcáil. Mar shámpla, déanann **Resource.svelte** comhpáirt mic darb ainm **Article.svelte** a iompórtáil agus úsáideann sé clib compháirte `<Article/>` laistigh dá mharcáil. Cé go bhfuil cuma chomhchosúil le (X)HTML ar an gclib `<Article/>` ní rindreáileofar é sa mbrabhsálaí mar sin. Ina hionad sin, tiomsóidh comhpháirt an ailt agus a comhpháirteanna mic uilig go dtí HTML caighdeánach bailí sula seolófar go dtí an cliant é. Tá an cur chuige comhpháirt-bunaithe sófhoghlamtha nuair a thosaíonn tú an eagarthóireacht  le fillteáin .svelte. Tá tuilleadh eolais ar fáil sa doiciméadacht Sapper agus Svelte atá thuasluaite.

\* Tabhair do d'aire gur comhpháirteanna iad na comhaid .svelte atá san fhillteán `src/routes` ach tá sé níos fusa smaoineamh orthu ag comhfhreagair do suíomhanna greasáin.

## Coincheap

Eagraítear Documental thart ar cúpla eochair-choincheap

1. **Locales**: Léiríonn sé seo sainróghanna logánaithe/idirnaisiúnaithe phearsanta an úsáideora, msh. Gaeilge nó Béarla.
2. **Documentation categories**: Tá dhá chatagóir i Documental - Open Data agus Software - is féidir tuilleadh a chur leo áfach.
3. **Resources**: Is ionann achmainní (resources) agus bailiúchán scoite de dhoicimeád amháin nó níos mó a bhfuil baint acu le píosa bogearra, 
4. **Resource versions**: Is féidir doiciméadacht a bhaineann le hacmhainní ar leith a leaganú, le tagairt déanta go dtí leagan-uimhir na hacmhainne féin.
5. **Documents**: Leathanach amháin doicimeádachta, a bhaineann le cataigóir, le logchaighdeán, le hacmhainn agus go roghnach, le leagan achmainne. 

Léirítear na coincheapa seo sna URLeanna a úsáideann an suíomh greasáin docs.gaois.ie:

> `https://docs.gaois.ie/en/data/logainm/v0.9/licence`

- **`en`**: Is é an Béarla an logchaighdeán.
- **`data`**: Is é Open Data an catagóir.
- **`logainm`**: Is í an API Logainm an acmhainn .
- **`v0.9`**: Is í leagan-uimhir an doiciméid 0.9.
- **`licence`**: Comhfreagraíonn an 'licence' sluga d'ainm doiciméid amháin (i.e. comhad amháin san eolaire 'docs').

Mar atá thuasluaite, níl gach aon achmhainn leaganaithe.

> `https://docs.gaois.ie/ga/software/geonames2sql`

- **`ga`**: Is í an Ghaeilge an logchaighdeán.
- **`software`**: Is é Software an catagóir.
- **`geonames2sql`**: Is í GeoNames2Sql an acmhainn.

Muna mbaineann ach  doiciméad amháin leis an acmhainn, níl sluga doiciméid de dhíth, is é seo an cás sa sámpla roimhe seo. 

Léirítear na coincheapa seo in ainmniú na gcomhad svelte san eolaire `src/routes`. Féach ar an doiciméadacht Sapper ar mhaithe le heolas maidir le ródú a fháil.

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

Ar an mbarr sin, mar atá infheicthe sa doiciméadacht do [editors](../editors), eagraítear go príomha an doiciméadacht Markdown thart ar na coincheapa seo.

## Logánú

Láimhseáileann Documental logánú UI tríd an leabharlann [svelte-i18n] (https://github.com/kaisermann/svelte-i18n). Úáideann sé seo an [ICU Message format] (http://userguide.icu-project.org/formatparse/messages) chun teaghráin atá infheicthe ag an úsáideoir a aistriú.

Stóráiltear aistriúcháin i gcomhaid JSON san fhillteán barr-leibhéal `messages`.Ainmnítear na comhaid seo san fhormáid `[locale].json`. De réir réamhschocraithe, is é struchtúr an fhillteáin `messages` mar a leanas: 

```
- messages
  - en.json
  - ga.json
```

Is féidir aistriúcháin a neadú laistigh de na comhaid JSON seo de réir struchtúr ar bith a oireann duit, msh.

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

Níl aon srianadh ar neadú aidhmeanna sa chomhad aistriúcháin. Glaoimid ar theaghrán san UI, ag baint úsáid as poncnodaireacht ar nós `$_('navigation.openData')` ina thugann `navigation.openData`, `Open Data` ar ais do logchaighdeán Béarla, nó `Sonraí Oscailte` do logchaighdeán Gaeilge, srl.

Ar ndóighe, is féidir linn inneachar logánaithe a chur i gcomhaid (Markdown) deighilte, mar atá leis an phríomh-inneachar doiciméadachta den suíomh greasáin atá stóráilte san fhillteán barrleibhéal `docs`.

##Acmhainn nua a chur leis

Cé gur féidir le baill foirne [doiciméid a chruthú agus a chur in eagair] (../editors) laistigh d'acmhainn ar leith, tá ionchur réalóra de dhíth de ghnáth chun acmhainn nua a chur leis nó chun táispeáint acmhainne sa nascleanúint nó ar an leathanach baile a athrú. Cuireann na treoracha a leanas síos air seo.   

### An fillteán `docs`

Tá fillteán comhfhreagrach laistigh den eolaire barrleibhéal `docs` de dhíth ar gach achmainn doiciméadachta. Dá mbeifeá ag cruthú acmhainne Open Data d'API nua mar shampla, seans go gcruthófá comhad nua ag `docs/data/mynewapi`. Más rud é go leaganadh an API seans go gcuirféa fochomad leis ag `docs/data/mynewapi/v1.0`. Féach ar an stór ar mhaithe le samplaí atá ann cheana féin a fháil.

### Nascleanúint

Tá an [chompháirt] **Navigation.svelte** lonnaithe i `src/node_modules/components`. Má dhéantar eagarthóireacht ar an gcomhad seo ligtear dúinn mionathruithe a dhéanamh ar liosta na n-achmainní a bhfuil fáil orthu ar an suíomh (taispeáintear é seo ar thaobh clé an scáileáin ar ríomhairí deisce).

Mar shampla, chun acmhainn bogearra nua a chur isteach déanann muid eagarthóireacht ar an rannán cuí den chomad **Navigation.svelte**:

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

Cuir mír liosta nua `<li>` agus comhpháirt mic `<NavigationResource/>` leis:

```svelte
<li>
  <NavigationResource
    category='software'
    resource='terminologue'
    heading='Terminologue'
    index='intro'/>
</li>
```

Glacann an chomhpháirt `<NavigationResource/>` le roinnt **props** (airíonna)

| Airí | Cur síos |
| ---- | ---- |
| **catagóir** | An catagóir doicimeádachta, `data` nó `software`. |
| **acmhainn** | An sluga acmhainne. Comhfreagraíonn sé d'ainm an fhillteáin chéanna faoi `docs`. |
| **ceannteideal**  | An teideal acmhainne. Má tá cúpla doiciméad ag an acmhainn, taispeáineofar ar a mbarr é seo sa nascleanúint. |
| **leagan is déanaí** | Má ta an acmhainn leaganaithe, sainigh an leagan-uimhir is déanaí anseo.  |
| **innéacs**    | Is é an 'leathanach baile' innéacs na hacmhainne. Déan an sluga doiciméid den chéad doiciméad atá le taispeáint a phasáil mar an luach innéacs. Níl seo riachtanach mas aonrachán é an acmhainn. |
| **aonrachán** | Má léirítear é, níl ach doiciméad amháin san acmhainn agus ní gá an airí `index` a shainiú.

Ná déan dearmad nach mbeidh doiciméad infeicthe sa nascleanúint muna bhfuil ceannteidéal YAML `public: true` aige.

### Leathanach baile 

Go roghnach, seans gur mhaith leat blurba tuairisciúil faoin acmhainn a chur leis an leathanach baile. Oscail an chomhpháirt **Home.svelte** i `src/node_modules/components`.

Mar aon leis an nascleanúint ní mór dúinn comhpháirt a chur leis a léireoidh an acmhainn nua:

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

| Airí | Cur síos |
| ---- | ---- |
| **href** | An cosán gaolmhar nó an dearbh-URL den acmhainn. |
| **ceannteidéal** | Ceannteidéal tuairisciúil. |
| **blurba** | Cur síos de mhéid 1-2 abairt faoin acmhainn. |

Tabhair do d'aire go bhfuil seans ann gur mhaith leat [localized strings](#localisation) a phasáil.
