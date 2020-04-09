---
title: Terminologue a chumrú
shortTitle: Cumraíocht
description: Conas do shuiteáil Terminologue a chumrú
keywords: téarmaíocht, taighde, bogearraí, foinse oscailte, javascript, Node JS, Fiontar & Scoil na Gaeilge, DCU
resource: Terminologue
github: https://github.com/gaois/terminologue
order: 4
public: true
---

Is féidir go leor iompraíocht suiteála Terminologue a chumrú ach eagarthóireacht a dhéanamh ar an gcomhad `siteconfig.json`. Mínítear sa doiciméad seo a bhfuil i gceist leis na socruithe ar fad. *Tabhair faoi deara: caithfidh tú an feidhmchlár a atosú gach uair a dhéanann tú athruithe.*

---

```json
"readonly": false
```

Is féidir leat an socrú seo a úsáid chun do shuiteáil a chur i mód inléite amháin, mar shampla nuair atá cothabháil freastalaí á déanamh agat. Beidh codanna a bhfuil fáil orthu go poiblí fós ar fáil, lena n-áirítear bunachair téarmaíochta atá le feiceáil go poiblí, ach ní bheidh úsáideoirí in ann logáil isteach, agus ní bheidh aon úsáideoir atá logáilte isteach cheana féin in ann aon rud a shábháil. Léireofar ceannscríbhinn “inléite amháin” in aice le lógó Terminologue ar gach leathanach chun é seo a chur in iúl d’úsáideoirí.  

---

```json
"baseUrl": "http://localhost/",
"rootPath": "/",
"port": 80
```

Is ionann `baseUrl` agus an URL a thugann rochtain don phobal ar do shuiteáil. I mód táirgthe, beidh tú ag iarraidh é seo a athrú i bhfíor-URL a bheidh le feiceáil go poiblí, amhail `https://terminologue.mycompany.com/`. 

Caithfear cosán an URL, amhail `/`, a chur san áireamh mar chuid de `baseUrl` **agus** a thabhairt as féin mar `rootPath`. Mar shampla, má tá do shuiteáil ar fáil don phobal faoin URL `http://www.mycompany.com/terminologue/`, ba chóir go mbeadh na nithe seo a leanas agat:

```json
"baseUrl": "http://www.mycompany.com/terminologue/",
"rootPath": "/terminologue/"
```

Má tá aon rud seachas an port réamhshocraithe HTTP i do URL, ba chóir duit an port a chur san áireamh in `baseUrl` **agus** a thabhairt as féin mar `port`.

---

```json
"dataDir": "../data/"
```

Is é seo an cosán a théann chuig an gcomhadlann `data` (an áit a gcoinníonn Terminologue na bunachair shonraí), i gcoibhneas leis an gcomhadlann `website`.

---

```json
"admins": ["root@localhost"]
```

Is iad seo ainmneacha logáil isteach na "bhforúsáideoirí": úsáideoirí a bhfuil pribhléidí speisialta acu sa tsuiteáil seo de Terminologue. Seo a leanas na pribhléidí speisialta: bíonn rochtain iomlán, inscríofa agat ar gach rud i ngach bunachar téarmaíochta, agus feiceann tú nasc ar an leathanach baile le cuid de Terminologue inar féidir leat cuntais úsáideoirí a riar.

---

```json
"trackingCode": ""
```

Má theastaíonn uait seirbhís ar nós Google Analytics nó StatCounter a úsáid chun staitisticí ar thrácht ar shuíomh gréasáin a bhailiú, is féidir leat an cód HTML a chur anseo agus cuirfidh Terminologue isteach ag deireadh (roimh `</body>`) gach leathanaigh HTML, atá le feiceáil go poiblí, é. 

---

```json
"uilangs": [
  {"abbr": "en", "caption": "English"},
  {"abbr": "ga", "caption": "Gaeilge"},
  {"abbr": "cs", "caption": "česky"},
  {"abbr": "sv", "caption": "svenska"}
],
"uilangDefault": "en"
```

Is iad seo na teangacha UI a fheictear i ngiuirléid an mhalartóra teanga sa chúinne ag barr an scáileáin ar dheis, agus an teanga réamhshocraithe a úsáidtear le haghaidh úsáideoirí nua. Is féidir leat na socruithe seo a úsáid chun an teanga réamhshocraithe a athrú, ord na dteangacha i ngiuirléid an mhalartóra a athrú, nó teangacha áirithe a dhíchumasú.

Caithfidh na nithe seo a leanas a bheith ann le haghaidh gach teanga UI a liostaítear anseo:

- Comhad ina bhfuil teaghráin logánaithe le haghaidh leabharlann Screenful, amhail `website/libs/screenful/screenful-loc-en.js`.
- Comhad ina bhfuil teaghráin logánaithe atá sainiúil do Terminologue, amhail `website/localizer/en.js`.

Mar sin de, má theastaíonn uait teanga nua a chur leis, seo a leanas na rudaí a chaithfidh tú a sholáthar. Má tá Terminologue á logánú i dteanga nua agat, b’fhéidir go roinnfeá é ach é a chur isteach i stór Terminologue (mar iarratas ar tharraingt).

---

```json
"welcome": {
  "en": "<div class='intro'>Welcome to <strong>Terminologue</strong>...",
  "ga": "<div class='intro'>Fáilte go <strong>Terminologue</strong>...",
  "cs": "<div class='intro'>Vítá vás <strong>Terminologue</strong>...",
  "sv": "<div class='intro'>Välkommen till <strong>Terminologue</strong>..."
}
```

Seo a leanas an teachtaireacht fáilte a bhíonn ar an leathanach baile. Caithfidh teachtaireacht dá leithéid a bheith ann le haghaidh gach teanga UI.

---

```json
"mailconfig": {"host": "localhost", "port": 465, "secure": false, "from": "noreply@localhost"}
```

Nuair a chláraíonn úsáideoirí do Terminologue, nuair a iarrann siad pasfhocail a ndearnadh dearmad orthu a aisghabháil agus mar sin de, seolann Terminologue ríomhphoist daingnithe ach an freastalaí SMTP seo a úsáid.

Má tá na socruithe seo in easnamh nó neamhbhailí, ní tharlóidh aon rud tubaisteach, oibreoidh Terminologue mar is gnách (ach ní sheolfar ríomhphoist). 

---

```json
"licences": {
  "cc-by-4.0": {
    "title": "Creative Commons Attribution 4.0 International",
    "url": "https://creativecommons.org/licenses/by/4.0/",
    "icon": "furniture/lic-cc-by.png"
  },
  "cc-by-sa-4.0": {
    "title": "Creative Commons Attribution Share-Alike 4.0 International",
    "url": "https://creativecommons.org/licenses/by-sa/4.0/",
    "icon": "furniture/lic-cc-by-sa.png"
  },
  "odbl-1.0": {
    "title": "Open Database Licence 1.0",
    "url": "https://opendatacommons.org/licenses/odbl/summary/",
    "icon": "furniture/lic-opendata.png"
  }
}
```

Is iad seo na ceadúnais faoina bhfuil úsáideoirí in ann bunachar téarmaíochta a chur ar fáil don phobal. Nuair a chuireann úsáideoir bunachar téarmaíochta ar fáil go poiblí, beidh orthu ceann amháin de na nithe seo a leanas a roghnú.

---

```json
"defaultAbc": [
  ["a", "á", "à", "â", "ä", "ă", "ā", "ã", "å", "ą", "æ"],
  ["b"],
  ["c", "ć", "ċ", "ĉ", "č", "ç"],

  ...

  ["x"],
  ["y", "ý", "ỳ", "ŷ", "ÿ"],
  ["z", "ź", "ż", "ž"]
]
```

Ord aibítre réamhshocraithe. Úsáidfidh Terminologue é seo mura shonraigh úsáideoir ord difriúil liostaithe le haghaidh teanga sa bhunachar téarmaíochta.

---

```json
"propagatorMsSqlConnectionStrings": {
  "mytermbase": "Server=localhost\\SQLEXPRESS;Database=mydatabase;User Id=myname;Password=mypassword"
}
```

Is gné í seo a ligeann duit bunachair téarmaíochta ar leith a chumrú ionas go bhforleatar láithreach gach athrú a dhéanann úsáideoirí i mbunachar sonraí eile in Microsoft SQL Server. Is ionann an eochair (amhail `"mytermbase"`) agus ainm an bhunachair téarmaíochta in Terminologue agus is ionann an luach agus teaghrán ceangail le haghaidh bunachar sonraí Microsoft SQL Server.