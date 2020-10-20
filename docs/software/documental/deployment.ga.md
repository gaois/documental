---
teideal: imlonnú
cur síos: ag imlonnú Documental i dtimpeallacht freastalaí
eochairfhocail: doiciméadacht, logánú, idirnáisiúnú, Sapper, Svelte, Gaois, Fiontar & Scoil na Gaeilge, DCU
achmhainn: Documental
ord: 4
poiblí: fíor
---

Is féidir Documental a imlonnú (i) mar fheidhmchlár Node.js, nó (ii) mar shuíomh statach

## É a imlonnú mar fheidhmchlár Node.js

### Cruthaigh tiomsú táirgeachta

An chéad chéim ná tiomsú táirgeachta de d'fheidhmchlár a chruthú. Rith an t-ordú seo a leanas. Má ta tú ag rith an fheidhmchláir i mód forbartha faoi láthair beidh ort é a stopadh (`Ctrl`/`Cmd` + `C`) sula leanann tú an chéim seo. 

```cmd
npm run build
```

Táirgeann sé seo leagan optamaithe de d'fheidhmchlár atá réidh d'imlonnú táirgeachta. Aschuirtear cód an fheidhmchláir go dtí an chomhadlann `__sapper__/build`. Rith `node __sapper__/build` ó fhréamh an tionscadail chun an tiomsú tairgeachta a thástáil ar do mheaisín.

### É a imlonnú chun an fhreastalaí

Ansin beidh ort an feidhmchlár a chur ar fhreastalaí, le FTP, RDP, uath-script nó pé modh is roghain leat.

Ní foláir na comhadlanna seo a leanas a imlonnú chun fréamh an tsuímh ghréasáin ar thimpeallacht d'fhreastalaí:

```
- __sapper__/build
- docs
- node_modules
- static
```

Chruthaíomar an fillteán aschuir tiomsaithe sa chéim deiridh. Istigh sa chomhadlann `docs` a gheibhtear do chuid comhad doiciméadachta Markdown. Is ionann an fillteán `node_modules`agus fréamh do thionscadail, *ní* an fillteán ag `src/node_modules`. Sa chomhadlann `static` a gheibhtear do chuid sóchmhainní statacha. 

Maidir le himlonnaithe ina dhiaidh sin:

- Más í an doiciméadacht amháin a uasghrádaíodh (i.e. níor athraíodh aon chód feidhmchláir), ní gá ach an fillteán `docs` a úsáid
- Má shuiteálann tú nó má uasghrádann tú aon mhodúil Node.js beidh ort an chomadlann `node_modules` a imlonnú an athuair.
- A bhuí do chóras inmheánach leaganaithe docht Sapper, is sabháilte aon úsáid ina dhiaidh sin a chumasc leis an bhfillteán `__sapper__/build` seachas an fillteán a fhorscríobh. Tá de bhua ag seo freisin nach gcuireann sé isteach orthu siúd atá ceangailte leis an suíomh um an dtaca sin. 

### Á imlonnú in ISS le issnode

I dtimpeallachtaí Windows Server is féidir freastal a dhéanamh ar fheidhmchláir Node.js trí leas a bhaint as IIS mar sheachfhreastalaí aisiompaithe. 
[iisnode](https://github.com/Azure/iisnode) a éascaíonn é seo, agus ní mór duit é seo a shuiteáil ar dtús. Caithfear cúpla céim bhreise a leanúint sa chás seo:

1. Cruthaigh comhad nua i gcomhadlann fhréamh an tsuímh ghréasáin darb ainm **app.js**. Ní bheidh ach líne amháin sa chomhad seo a ghlaofaidh cód Documental ar thaobh an fhreastalaí:

  ```js
  require('./__sapper__/build/index.js');
  ```

2. Cruthaigh comhad **Web.config** nua i gcomhadlann fhréamh an tsuímh. Istigh i stór Documental tá comhad Web.config samplach maille le hanótaí. Is iad seo a leanas na rannáin is tábhachtaí den chomhad config:

  ```xml
  <configuration>
    <system.webServer>
      <handlers>
        <add name="iisnode" path="app.js" verb="*" modules="iisnode" />
      </handlers>
      <rewrite>
        <rules>
          <rule name="App">
            <match url="/*" />
            <action type="Rewrite" url="app.js" />
          </rule>
        </rules>
      </rewrite>
    </system.webServer>
  </configuration>
  ```

  Tá na feidhmeanna seo ag na rannáin thuas: (i) lódáileann siad an láimhsealaí iisnode agus (ii) atreoraíonn siad gach iarratas go dtí an comhad app.js nuair a aistrítear iad go dtí cód fheidhmchláir Documental. 



## É a imlonnú trí ghinniúint suímh stataigh

Is éard is suíomh statach ann ná bailiúchán de chomhaid réamhghinte HTML, JavaScript agus CSS, murab ionann agus suíomh freastalaí-ghinte gur féidir leis an bhfeidhmchlár an t-ábhar a léiriú agus a sheairbheáil ar eiteog ar an úsáideoir 

Rith an t-ordú seo a leanas chun suíomh statach a aschuir ó Documental:

```cmd
npm run export
```
Aschuirfear na comhaid statacha go dtí an chomhadlann `__sapper__/export`. Aon orduithe aschurtha dá éis sin déanfaidh siad forscríobh ar inneachar na comhadlainne go huathoibríoch. 

Rith `npx serve __sapper__/export` chun do shuíomh statach a thástáil.

Nuair atá tú réidh, imlonnaigh inneachar chomhadlann `__sapper__/export` go dtí fréamh an tsuímh i dtimpeallacht do fhreastalaí.

Féach na doiciméid [Sapper](https://sapper.svelte.dev/) dona thuilleadh eolais. 
