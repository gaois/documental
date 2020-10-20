---
teideal: Doiciméadacht Forbróirí
gearrtheideal: d'fhorbróirí
cur síos: conas Documental a bhreisiú agus a mhionathrú
eochairfhocail: doiciméadacht, logánú, idirnáisiúnú, Sapper, Svelte, Gaois, Fiontar & Scoil na Gaeilge, DCU
acmhainn: Documental
ord: 3
poiblí: fíor

---
Is feidhmchlár [Node.js](https://nodejs.org/) é Documental scríofa i Javascript. Is féidir leis rith ar fhreastalaí, ag soláthar inneachair go dinimiciúil, nó, is féidir é a úsáid mar [ghineadóir suímh stataigh](https://www.staticgen.com/about). Mínítear é seo tuilleadh sa chuid a bhaineann le [himlonnú](../imlonnú). Stóráiltear inneachair suímh idirlín ar dhiosca i bhformáid chomhad Markdown agus níl aon bhunachair sonraí nó aon saghas sonraíochta eile stóráilte. 

Oibríonnn an bogearra ar gach córas oibriúcháin coitianta: an t-aon réamhriachtanas ná Node.js a shuiteáil ar do ríomhaire. Aimseoidh agus suiteáilfidh Node.js Package Manager (NPM) gach spléachais eile as féin i rith na cumraíochta. Tógtar Documental trí úsáid a bhaint as [Svelte](https://svelte.dev/), creatlach comhpháirteanna cosúil le React, agus [Sapper](https://sapper.svelte.dev/), creatlach feidhmchláir á chumhachtú ag Svelte. Féach an doiciméadacht le haghaidh na gcreatlacha seo má bhíonn aon cheisteanna agat ó thaobh an fheidhmchláir de, mar tá eolas den saghas sin lasmuigh de scóip an ailt seo. 

## ag tosnú

### Suiteáil agus cumraíocht

Déan an stór Documental a chlónáil ar do mheaisín: 

```cmd
git clón https://github.com/gaois/documental
```

Athraigh an chomadlann go dtí do stór logánta agus déan spléachais an tionscadail a shuiteáil: 

```cmd
npm suiteáil
```

### An feidhmchlár a thosnú

Déan an t-ordú seo a leanas a rith chun Documental a thosnú i mód forbróra: 

```cmd
npm rith dev
```



Nuair a bhíonn an feidhmchlár á rith i mód forbróra bíonn beo-athlódáil modúl ar fáil (.i. déantar na hathruithe a dhéanann tú san eagarthóir a thaispeáint sa bhrabhsálaí láithreach bonn nuair a shábháiltear é), chomh maith le teactaireachtaí mionsonraithe sa chonsól i taobh eolais agus earráidí. Sula ndéanann tú an feidhmchlár a imlonnú go timpeallacht freastalaí, beidh ort an feidhmchlár a thógáil sa mhód táirgthe. Pléitear é seo sa chuid a bhaineann le [himlonnú] (../imlonnú). 

## Struchtúr an tionscadail

Caithimis súil ar struchtúr an fhillteáin lasitigh do do stór Documental. Sna fillteáin bharrleibhéil seo a leanas is dóichí a dhéanfaidh tú athruithe: 

- **`docs`**: Beidh an doiciméadacht Markdown a fhoilseofar ar do shuíomh idirlín istigh anseo .
- **`teachtaireachtaí`**: Na teaghráin aistrithe a thaispeánfar sa chomhéadan úsáideora (UI) tá siad istigh anseo. Féach [Logánú](#logánú) thíos. 
- **`src`**: Cód foinseach an fheidhmchláir , loighic ródaithe agus gnólachta san áireamh. 
- **`static`**: comhaid statacha a sholáthróidh d'fheidhmchlár, ar nós íomhánna, deilbhíní suímh, nó comhaid seachtracha CSS. 

## Cur chuige comhpáirt-bhunaithe

Bíonn cur chuige comhpháirt-bhunaithe ag creatlacha nua-aimseartha Javascript agus iad ag tógáil feidhmchláir. Má tá taithí agat ar HTML a tháirgeadh le creatlacha ar thaobh an fhrestalaí in C#, PHP, srl. , b'fhéidir nach dtiocfaidh sé seo go réidh leat i dtosach.  Ó thaobh Docummental de, comhaid singile le hiarmhír is ea comhpháirteanna. De ghnáth, cuirtear iad sa bhfilltéan* `src/node_modules/components`. Déanann na comhaid chomhpháirte an mharcáil, an stíl, an stad agus an loighic le haghaidh cuid áirithe den fheidhmchlár a imchochlú. D'fhéadaidís comhpháirteanna eile a iompórtáil agus iad a úsáid lastigh dá marcáil. Mar shampla, déanann **Resource.svelte** mac-chomhpháirt darb ainm **Article.svelte** a iompórtáil  agus úsáideann sé an chlib chomhpháirte `<Article/>` laistigh dá marcáil. Cé go bhfuil cuma (X)HTML ar an gclib `<Article/>`, ní mar sin a léireofar sa bhrabhsálaí é. Is amhlaidh go dtiomsófar comhpháirt an ailt, mar aon lena mac-comhpháirteanna go léir, go HTML caighdeánach bailí roimh sheoladh go dtí an cliaint. Is éasca an cur chuige comhpháirt-bunaithe a fhoghlaim nuair a thosaíonn tú ag déanamh eagarthóireachta ar chomhaid .svelte. Tá tuilleadh eolas ar fáil sa doiciméadacht Sapper agus Svelte thuas luaite. 

\* Tabhair do d'aire gur comhpháirteanna chomh maith iad na comhaid .svelte sa bhfilltéan `src/routes`, ach gur fusa féachaint orthu mar leathanaigh chomhfhreagracha gréasáin. 

## Coincheapa

Tá Documental bunaithe ar roinnt eochairchoincheapa.

1. **Logchaighdeáin**: léiríonn é seo sainroghanna logánaithe/idirnáisiúnaithe an úsáideora, m.sh. Gaeilge nó Béarla.
2. **Catagóir Doiciméadachta**: Tá dhá chatagóir in Documental; Sonraí Oscailte agus Bogearraí. Is féidir tuilleadh a chur leis, áfach. 
3. **Acmhainní**: Is éard is acmhainní ann ná bailiúchán scoite de dhoiciméad amháin nó níos mó a bhaineann le píosa bogearraí, le seirbhís nó  le déantán sonraí. 
4. **Leaganacha achmhainne**: Is féidir leaganú a dhéanamh ar dohiciméadacht le haghaidh acmhainní faoi leith. Is iondúil go ndéantar é seo tré thagairt a dhéanamh d'uimhir leagain na acmhainne. 
5.**Doimiméid**: Leathanach singil doiciméadachta a bhaineann go sonrach le catagóir, logchaighdéan, achmhainn agus, más mian leat, leagan acmhainne.

Léirítear na coincheapa seo sna URLeanna a úsáideann an suíomh idirlín docs.gaois.ie: 

> `https://docs.gaois.ie/en/data/logainm/v0.9/licence`

- **`en`**: 'Sé Béarla an logchaighdeán. 
- **`sonraí`**: 'Sé an catagóir ná Sonraí Oscailte.
- **`logainm`**: 'Sé an achmhainn ná API Logainm. 
- **`v0.9`**: 'Sé uimhir leagain an achmhainn ná 0.9. 
- **`ceadúnas`**: Freagraíonn an 'ceadúnas' slug d'ainm doiciméid singil (i.e. comhad singil sa chomadlann `docs`. 

Mar atá ráite thuas, ní dhéantar leaganú ar gach acmhainn: 

> `https://docs.gaois.ie/ga/software/geonames2sql`

- **`ga`**: 'Sé Gaeilge an logchaighdeán.
- **`bogearraí`**: 'Sé an catagóir ná Bogearraí. 
- **`geonames2sql`**: 'Sé an acmhainn ná GeoNames2Sql. 

Muna bhfuil ach aon doiciméid amháin a bhaineann leis an acmhainn, níl an slug doiciméid riachtanach, faoi mar atá sa sampla roimhe.  

Léirítear na coincheapa seo in ainmniú na gcomhad svelte sa chomadlann `src/routes` chomh maith. Féach an doiciméadacht a bhaineann le Sapper chun eolas i dtaobh ródaithe a fháil.

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

Ina theannta sin, mar a fheiceann tú sa doiciméadacht le haghaidh [eagarthóirí] (../eagarthóirí), bíonn na comhaid doiciméadachta Markdown bunaithe ar na coincheapa seo den chuid is mó. 

## Logánú

Deileálann Documental le logánú UI tríd an leabharlann [svelte-i18n](https://github.com/kaisermann/svelte-i18n) . Úsáideann sé seo an [fhormáid teachtaireacht ICU] (http://userguide.icu-project.org/formatparse/messages) chun na teaghráin atá sofheicthe ag an úsáideoir a aistriú. 

Stóráiltear na haistriúcháin ar chomhaid JSON sa bhfilltéan barrleibhéil "teachtaireachtaí". Ainmnítear na comhaid seo sa bhformáid `[logchaighdeán].json`. De réir na réamhshocraithe, is mar seo a leanas a bhíonn struchtúr an fhillteáin `teachtaireachtaí`: 

```
- messages
  - en.json
  - ga.json
```

Is féidir aistriucháin a neadú sna comhaid JSON seo de réir aon struchtúr a mheasann tú a bheith oiriúnach, m.sh. 

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

Do bhlocanna níos mó téacs is féidir linn ábhar logánaithe a chur i gcomhaid Markdown ar leith, mar a dhéantar i gcás phríomhábhar doiciméadachta an tsuímh idirlín a stóráiltear sa bhfilltéan barrleibhéil `docs` . 

## Ag cuir acmhainn nua leis

Cé gur féidir le baill fhoireann eagarthóireachta [doiciméid a chruthú agus a chur in eagar] (../eagarthóirí) laistigh d'acmhainn ar leith, bíonn ionchur ón bhforbróir ag teastáilt de ghnáth chun achmhainn nua a chuir leis, nó chun athrú a dhéanamh ar léiriú na hacmhainne ar an nascleanúint nó ar an leathanach baile. Tugann na treoracha thíos cur síos ar conas é seo a bhaint amach. 

### an filltéan `docs` 

Bíonn fillteán comhfhreagrach laistigh den chomadlann barrleibhéil `docs` ag teastáilt ó gach achmhainn doiciméadachta . Dá mbeifeá ag cruthú acmhainn Sonraí Oscailte le haghaidh API nua, mar shampla, d'fhéadfá filltéan nua a chruthú ag `docs/data/mynewapi`. Dá mbeadh an API leaganaithe, d'fhéadfá fo-fhillteán sa bhreis a chur leis ag `docs/data/mynewapi/v1.0`. Féach an stór le haghaidh tuilleadh samplaí. Tabhair do d'aire gurbh féidir le heagarthóir inneachair an tasc seo a dhéanamh da mbeadh tuiscint mhaith aige ar struchtúr na comhadlainne. 

### Nascleanúint

Tá an [chomhpháirt] (#cur-chuige-comhpháirt-bunaithe) **Nascleanúint.svelte** lonnaithe in `src/node_modules/components`. Nuair a chuirtear an comhad seo in eagar bítear ábalta liosta na n-acmhainní a bhfuil fáil orthu ar an suíomh a leasú (le feiscint ar thaobh chlé an scáileáin ar ghléasanna deisce).

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
| **catagóir** | An catagóir doiciméadachta; `sonraí` nó `bogearraí`. |
| **acmhainn** | Slug na acmhainne. Freagraíonn sé d'ainm an fhillteán acmhainne faoi `docs`. |
| **teideal**  | Teideal na hacmhainne. Má tá roinnt doiciméidí ag an acmhainn, beidh sé seo le fesicint os a gcionn sa nascleanúint. |
| **leaganisdéanaí** | Má tá an acmhainn leaganithe, sainigh an uimhir leagain is déanaí anseo. |
| **innéacs**    | Is éard atá san innéacs ná leathanach baile na hacmhainne. Pasáil an slug doiciméadachta don chéad doiciméad le bheith le feiscint mar luach innéacs. Ní gá leis seo más achmhainn singil atá ann. |
| **singleton** | Má tá sé seo sainithe, ciallaíonn sé nach bhfuil san acmhainn ach an t-aon doiciméad amháin agus nach gá duit airí `innéacs` a shainiú. ||

Ná déan dearmad nach mbeidh doiciméid le fesicint sa nascleanúint muna bhfuil ceannteideal YAML de `poiblí: fíor` orthu.

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

Tabhair do d'aire go mb'fhéidir gur mhian leat [teaghráin logánaithe] (#logánú) a phasáil le haghaidh cuid de na hairíonna. 
