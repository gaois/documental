---
teideal: Imlonnú
cur síos: Documental a imlonnú go dtí timpeallacht freastalaí
eochairfhocail: doiciméadacht, logánú, idirnáisiúnú, Sapper, Svelte, Gaois, Fiontar & Scoil na Gaeilge, DCU
acmhainn: Documental
ord: 4
poiblí: fíor
---

Is féidir Documental a imlonnú mar (i) fheidhmchlár de chuid Node.js nó mar (ii) shuíomh gréasáin statach.

## Imlonnú mar fheidhmchlár de chuid Node.js

### Cruathaigh tógáil táirgthe

Is í an chéad chéim ná tógáil táirgthe a chruthú de d'fheidhmchlár. Rith an t-ordú seo a leanas. Tabhair faoi deara go mbeidh ort an feidhmchlár a stopadh (`Ctrl`/`Cmd` + `C`) má tá tú á rith sa mhód forbartha sula leanfaidh tú an chéim seo.

```cmd
npm run build
```

Déanann sé sin leagan optamaithe de d'fheidhmchlár atá réidh don imlonnú táirgthe. Déantar cód an fheidhmchláir a aischur go dtí an t-eolaire '__sapper__/build`. Rith 'node__sapper__/build` ó fhréamh an tionscadail chun an tógáil táirgthe ar do mheaisín a thástáil.

### Imlonnaigh go dtí an freastalaí

Beidh ort an feidhmchlár a chur ar fhreastalaí ansin, le FTP, le RDP, le script uathoibrithe nó cibé modh is fearr leat.
Caithfidh na heolairí seo a leanas imlonnú go dtí fréamh an tsuímh gréasáin ar do thimpeallacht freastalaí:
```
- __sapper__/build
- docs
- node_modules
- static
```

Chruthaíomar an fillteán tógála táirgthe sa chéim roimhe seo. Tá do chuid comhaid doiciméadachta Markdown san eolaire 'docs'. Is ionann an fillteán 'node_modules` agus an fillteán i do fhréamh tionscadail, *ní* an fillteán ag 'src/node_modules`. Tá do chuid sócmhainní statacha san eolaire 'static'.

Maidir le himlonnaithe iartheachtacha:

- Murar uasdátaíodh ach an doiciméadacht (i.e. níor athróidh cód feidhmchláir ar bith) ní ga duit ach an fillteán 'docs' a imlonnú. Má dhéanann tú aon mhodúl Node.js a shuiteáil nó a uasdátú beidh ort an t-eolaire 'node_modules` a ath-imlonnú
- As siocair go n-úsáideann Sapper comhad leaganaithe láidir inmheánach don chód feidhmchláir, tá sé slán sábháilte imlonnuithe iartheachtacha a chumaisc isteach san fhillteán '__sapper__/build' in ionad an fillteán a fhorscríobh. Cuireann sé sin cosc ar fhadhbanna do na húsaideoirí atá nasctha leis an suíomh gréasáin faoi láthair.
### Ag imlonnú go dtí IIS le iisnode

Ar thimpeallachtaí Windows Server is féidir freastal ar fheidhmchláir Node.js trí IIS a úsáid mar sheachfhreastalaí aisiompaithe. Eascaíonn [iisnode] (https://github.com/Azure/iisnode) é sin, a gcaithfidh tú a shuiteáil ar dtús. Ní mór cúpla céim sa bhreis a leanúint sa chás sin:
1. Cruathaigh comhad nua sa suíomh gréasáin darb ainm **app.js**. Beidh líne shingil amháin sa chomad a ghlaonn taobh-freastalaí Documental: 
  ```js
  require('./__sapper__/build/index.js');
  ```

2. Cruathaigh comhad **Web.config** nua in eolaire fhréamh an tsuímh gréasáin. Tá comhad sámplach Web.config le nótaí mínithe sa stór Documental. Seo a leanas na rannáin is tabhachtaí den chomad cumraithe:

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

  Is é an ról atá acu siúd ná (i) an "issnode hander" a lódáil agus (ii) gach iarratas a atreorú go dtí an comhad app.js ina dtugtar iad don chód feidhmchláir Documental.
## Imlonnaigh le giniúint suímh stataí

Is ionann suíomh statach agus bailiúchán comhad réamh-ghinte HTML, JavaScript agus CSS. Tá sé sin difriúil le suíomh gréasáin freastalaí-ghinte ina bhféadfadh inneachar a rindreáil agus a thabhairt don úsáideoir ar an toirt trí fheidhmchlár. Mar chomparáid, ní bhíonn an oiread sin cothabhála de dhíth i gcás suíomhanna statacha agus ní bhíonn mórán cumraíochta nó cumraíocht ar bith, de dhíth ar thaobh an fhreastalaí. 
Rith an t-ordú a leanas chun suíomh statach a aschur ó Documental:
```cmd
npm run export
```

Aschuirfear na comhaid statacha go dtí an eolaire '__sapper__/export`. Déanfaidh ordaithe easpórtála ina dhiaidh sin inneachair an eolaire sin a fhorscríobh go huathoibríoch. Rith 'npx serve __sapper__/export` chun do shuíomh statach a thástáil.

Agus tú réidh, imlonnaigh inneachair an eolaire '__sapper__/export` go dtí fréamh an tsuímh gréasáin i do thimpeallacht freastalaí.

Féach ar na caipéisí  [Sapper] (https://sapper.svelte.dev/) chun tuilleadh faisnéise a fháil.
