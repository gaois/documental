---
title: Doiciméadacht - á chruthú agus á chur in eagar
shortTitle: D'eagarthóirí
description: Conas doiciméadacht a chruthú agus a chur in eagar
keywords: doiciméadacht, logánú, idirnáisiúnú, Sapper, Svelte, Gaois, Fiontar & Scoil na Gaeilge, DCU
resource: Documental
order: 2
public: true
---

Gheofar ar an leathanach seo treoracha d'eagarthóirí inneachair atá ag scríobh nó ag aistriú doiciméad lena n-úsáid in Documental. Cé go bhfuil scríobh na doiciméadachta teicniúla ábhairín difriúil i gcomparáid le húsáid a bhaint as gnáth-phróiseálaí focal, ní hé go mbeadh saineolas teicniúil ag teastáil lena aghaidh.

## Riachtanais

Caithfear aon doiciméadacht in Documental a scríobh in Markdown. Is éard atá in Markdown ná gnáth-théacs agus roinnt siombailí eile lena chois chun rudaí ar nós ceannteideal, téacs i gcló trom, nascanna, srl., a léiriú. Úsáideann Documental leagan ar leith de Markdown ar a dtugtar Markdown le blas github, nó "github-flavoured Markdown" (GFM). Is fusa cód ríomhaireachta a mheascadh le gnáth-phrós leis an leagan seo. Mar sin féin níl tuiscint ar aon teanga ríomhchláraithe riachtanach chun Markdown a scríobh! Tá treoir gharbh ar conas scríobh in GFM le fáil [anseo](https://guides.github.com/features/mastering-markdown/), nó is féidir teacht at threoir níos mionsonraithe [anseo](https://www.markdownguide.org/). Is éard atá i gcomhaid Markdown ná comhaid téacs mar aon le hiarmhír, **.md** de ghnáth. Is féidir comhaid Markdown a chur in eagar ar ardán ar líne ar nós Github nó ar fheidhmchlár ar do ríomhaire. 

## Struchtúr an fhillteáin

Tá an doiciméadacht uile istigh san fhillteán `docs`. Mar eagarthóir, beidh tú in ann do chuid oibre ar fad a chur i gcrích anseo. Is gnách go mbíonn cuma nó cruth mar seo ar fhillteán `docs`:

```
- docs
  - data
    - logainm
      - v0.9
        - api.en.md
        - api.ga.md
  - software
    - terminologue
      - configuration.en.md
      - installation.en.md
      - intro.en.md
```

Tá máthair-fhillteán `docs` ann. Laistigh den fhillteán sin tá dhá chatagóir de dhoiciméadacht, mar atá `sonraí` (Sonraí Oscailte) agus `bogearraí` (Bogearraí). Tá **acmhainn** amháin ar a laghad istigh i ngach ceann de na fillteáin seo. Acmhainn is ea bailiúchán de dhoiciméid a bhaineann le seirbhís nó bogearraí ar leith. Má fhéachaimid ar an bhfillteán `software` feicfimid acmhainn darb ainm `terminologue` (Terminologue), go bhfuil roinnt doiciméad istigh inti. 

Má fhéachaimid ar an bhfillteán `sonraí` agus an acmhainn `logainm` (Logainm API) feicfimid gur mac díreach léi, an fillteán **leaganacha** `v0.9`. Baineann doiciméid an fhillteáin seo le leagan 0.9 den API. I gcás acmhainní áirithe, beidh raidhse leaganacha acu agus doiciméadacht shainiúil ag gabháil le gach ceann acu.  

Cuir struchtúir an fhillteáin i gcomparáid leis na URLanna a úsáideadh ar an suíomh [docs.gaois.ie](https://docs.gaois.ie) . Féach mar a mhapálann URL ar nós `https://docs.gaois.ie/en/software/terminologue/installation` nó `https://docs.gaois.ie/ga/data/logainm/v0.9/api` go dtí struchtúr an fhillteáin. 

## Ainmniú comhad

Mar a thug tú faoi deara sa chuid dheireanach, b'fhéidir, ainmnítear comhaid Markdown de réir formáid ar leith, agus bíonn feidhm aige seo ar rochtain agus léiriú na ndoiciméad ar an suíomh. Is é an fhormáid sin ná:

```
[slug].[logchaighdeán].md
```

-Is ionann **.md** agus iarmhír an chomhaid ('md' i gcomhair **M**ark**d**own).
-Úsáideann an **logchaighdeán** cód teanga ISO chun teanga an doiciméid a chur in iúl, mar shampla, `en` don Bhéarla agus `ga` don Ghaeilge.
-Ainm uathúil don chomhad is ea an **slug**.

Is féidir gurbh ionann teideal an doiciméid agus an **slug** ach fós féin caithfidh sé cloí leis na rialacha seo a leanas:

1. Úsáid litreacha beaga amháin.
2. Cuir fleiscíní (`-`) in ionad spásanna.
3. Ná húsáid aon aiceann (á, é, ó, srl.) nó carachtair speisialta ar nós `!`, `?`, nó `#`.

Seo a leanas roinnt ainmneacha bailí comhad in Documental:

- `api.ga.md`
- `deployment.en.md`
- `getting-started.ga.md`


Seo a leanas roinnt ainmneacha neamhbhailí comhad in Documental:

- `Api.en.md` (ceannlitir in úsáid)
- `deployment.md` (logchaighdeán ar lár)
- `getting started!.en.md` (gan fleiscín in ionad an spáis; carachtar speisialta in úsáid)

## Ag scríobh doiciméadachta

Anois agus comhad ullmhaithe agat, tá sé in am roinnt doiciméadachta a scríobh. Ba cheart go mbeadh dhá chuid i ngach doiciméad: (1) meiteashonraí agus (2) inneachar.

## Ag scríobh meiteashonraí

Mar is eol duit cheana, b'fhéidir, is éard is meiteashonraí ann ná sonraí a chuireann síos ar shonraí eile. I gcás na meiteashonraí i ndoiciméid Documental, cuireann siad síos ar inneachar an doiciméid (rud a phléitear sa chéad roinn eile). Scríobhaimid meiteashonraí ag barr an leathanaigh ar fad, roimh aon ní eile, i rud a dtugtar "ceannteideal meiteashonraí" air. Seo sampla de sin:

```yaml
---
teideal: Comhéadan Feidhmchláir (API) Logainm (Leagan 0.9)
gearrtheideal: API
cur síos: doiciméadacht forbróra i gcomhair API Logainm
eochairfhocail: Logainm, API, logainmneacha, logainmníocht, ainmeolaíocht, an Ghaeilge
acmhainn: Logainm
ord: 1
poiblí: fíor
---
```

Leanann na meiteashonraí thuas formáid dá nglaoitear YAML ach ní den tábhacht é seo a thuiscint. Féachaimis air seo céim ar chéim:

1. Tosaíonn agus críochnaíonn an ceanntásc le tacair de thrí fhleiscín `---`. Is sa tslí sin a bhíonn a fhios againne agus ag an ríomhaire nach cuid den inneachar é. 
2. I ngach líne sa cheanntásc, bíonn píosa amháin meiteashonraí air. 
3. Bíonn **eochairmhír** ar nós `teideal` nó `ord` ar gach líne, agus **luach** ina dhiaidh sin. Scartar eochairmhíreanna agus luachanna le hidirstad (`:`) agus spás.

Tabhair do d'aird ar phointe a trí óir má úsáideann tú dhá idirstad in aon líne amháin d'fhéadfadh sé earráid a chruthú (is amhlaidh go gceapann an ríomhaire go bhfuil tú ag iarraidh dhá phéire eochairmhír-luach a chur ar aon líne amháin). Cad atá le déanamh mar sin más gá duit idirstad eile a úsáid? Ba cheart an luach a iniamh i gcomharthaí athfhriotail, mar a léirítear thíos. Is cuma comharthaí singile nó dúbailte athfhriotail a úsáid. 

```yaml
teideal: "Gaois: Doiciméadacht níos mó agus níos faide"
```

Seo a leanas liosta iomlán de mheiteashonraí is féidir a úsáid:

```yaml
teideal:
gearrtheideal:
cur síos:
eochairfhocail:
acmhainn:
github:
npm:
nuget:
ord:
toc:
poiblí:
```

| Eochairmhír | Riachtanach |Luach|
| --- | -------- | ----- |
| `teideal` | Tá | Teideal iomlán an doiciméid. Taispeánfar é seo ag barr leathanach an doiciméid |
| `gearrtheideal` | Tá | Teideal chomh gairid agus is féidir a thaispeánfar i nascleanúint an tsuímh gréasáin |
| `cur síos` | Tá | Achoimre ghearr ar an inneachar, abairt nó dhó ar fad. B'fhéidir go dtaispeánfaí é seo i dtorthaí innill chuardaigh nó postálacha comhroinnte ar na meáin shóisialta   |
| `eochairfhocail` | Tá | Liosta, arna scaradh le camóga, d'fhocail a bhaineann le hábhar an doiciméid.|
| `acmhainn` | Níl | Ainm na hacmhainne lena mbaineann an doiciméad. Taispeánfar é seo roimh theideal an doiciméid i gcluaisín an bhrabhsálaí. |
| `github` | Níl | URL stór [GitHub](https://github.com/) a bhaineann leis an doiciméad. |
| `npm` | Níl | URL phacáiste [NPM](https://www.npmjs.com/) a bhaineann leis an doiciméad. |
| `nuget` | Níl | URL phacáiste [NuGet](https://www.nuget.org/) a bhaineann leis an doiciméad. |
| `ord` | Níl | Uimhir a sheasann don ord ardaitheach ina dtaispeánfar na doiciméid a bhaineann le hacmhainn amháin |
| `toc` | Níl | Má thugann tú an luach `bréagach` don eochairmhír seo ní thaispeánfar aon chlár ábhar leis an doiciméad. Mura dtugann, glactar leis go bhfuil an luach `fíor`.  |
| `poiblí` | Tá | Ní mór é seo a chur isteach chun go mbeidh fáil ar an doiciméad tríd an suíomh gréasáin poiblí. |

Tabhair faoi deara nach bhfuil gach réimse riachtanach. Ní mór duit an eochairmhír-luach `poiblí: fíor` a bheith agat, áfach, chun go mbeidh fáil ag an bpobal ar do leathanach.

### Ag scríobh inneachair

Maidir leis an gcuid eile den doiciméad, déantar é a scríobh in Markdown. Do cheisteanna i dtaobh Markdown, féach na hacmhainní a luaitear thuas. Is fiú cúpla rud a lua mar sin féin:

- Úsáid ceannteidil. Tugann siad struchtúr don inneachar. Déanann siad an t-ábhar níos fusa lena léamh chomh maith, go háirithe sa chomhthéacs digiteach, áit nach mbíonn leathanaigh chun an téacs a fhoroinnt. 
- Chomh fada agus nach bhfuil luach "
`bréagach` ag gabháil leis an meiteashonra `toc` (féach thuas), déanfaidh Documental clár ábhar a ghiniúint go huathoibríoch ag úsáid na gceannteideal sa doiciméad. Beidh an clár ábhar seo le feiceáil ar thaobh dheas an scáileáin ar ríomhairí deisce agus beidh rochtain air ar ghléasanna móibíleacha ach brú ar chnaipe. 
- Is gnách go léirítear cód ríomhaire (chomh maith le luachanna a úsáideann nó a aschuireann ríomhchláir) in Markdown trína iniamh le graif (<code>`</code>). Is iondúil nach n-aistrítear téacs sna blocanna cóid. Bíodh is go mb'fhéidir go bhfuil focail nó nathanna Béarla sa téacs, is gnách go bhfuil na focail agus na nathanna céanna de dhlúth agus d'inneach pé teanga ríomhchláraithe atá i gceist.

Mar fhocal scoir, is dócha gurb é an modh foghlama is fearr ná féachaint ar shamplaí atá ann cheana. Caith súil ar na comhaid san fhillteán `docs` agus féach an tslí a dtaispeántar iad ar an suíomh gréasáin [docs.gaois.ie](https://docs.gaois.ie). 

### Ag úsáid íomhánna

Is féidir íomhánna a chur in aon doiciméad ach gnáthchomhréir Markdown a úsáid:

```md
![GeoNames2Sql Command-line Interface](/images/geonames2sql.jpg)
```

Tá dhá rud nach foláir a choimeád ar intinn ó thaobh íomhánna de:

1. Ba cheart comhaid íomhánna a chur i gcomhadlann `static/images` i do thionscadal Documental
2. Mar is léir ón sampla thuas, caithfidh tú tagairt a dhéanamh don íomhá ag úsáid cosán `/íomhánna/`, mar shampla `/iomhanna/ainmcomhaidiomha.jpg`.

