---
teideal: Imlonnú
cur síos: Documental a imlonnú go dtí timpeallacht freastalaithe
eochairfhocail: doiciméadacht, loganú, idirnáisiúnú, Sapper, Svelte, Gaois, Fiontar & Scoil na Gaeilge, DCU
acmhainn: Documental
ord: 4
poiblí: fíor
---

Is féidir Documental a imlonnú mar (i) fheidhmchlár de chuid Node.js nó mar (ii) shuíomh greasáin statach.

## Imlonnú mar fheidhmchlár de chuid Node.js

### Cruathaigh tógáil táirgthe

Is í an chéad chéim ná tógáil táirgthe a chruthú de d'fheidhmchlár. Rith an t-ordú seo a leanas. Tabhair do d'aire go mbeidh ort an feidhmchlár a stopú (`Ctrl`/`Cmd` + `C`) má tá tú á rith sa mhód forbartha sula leanann tú an chéim seo.

```cmd
npm run build
```

Déanann sé seo legan barrfheabhsaithe de d'fheidhmchlár atá réidh don imlonnú táirgthe. Tá cód an fheidhmchláir aschurtha go dtí an eolaire '__sapper__/build`. Rith 'node__sapper__/build` ó fhréamh an tionscadail chun an tógáil táirgthe a thástáil ar do mheaisín.
### Imlonnaigh go dtí an freastalaí

Beidh ort an feidhmchlár a chur ar fhreastalaí ansin, le FTP, le RDP, le script uathoibríoch nó cibé modh is fearr leat.
Caithfidh na heolairí seo a imlonnú go dtí fréamh an tsuímh greasáin ar do thimpeallacht freastalaithe:
```
- __sapper__/build
- docs
- node_modules
- static
```

Chruthaigh muid an fillteán tógáil táirgthe sa chéim roimhe seo. Tá do chuid filltéain doiciméadachta Markdown san eolaire 'docs'. Is ionann an fillteán 'node_modules` agus an fillteán i do fhréamh tionscadail, *ní hionann* an fillteán ag 'src/node_modules`. Tá do chuid sócmhainní statacha san eolaire 'static'.

Ó thaobh imlonnaithe iartheachtacha de:

- Munar uasdhátaíodh ach an doicimeádacht (i.e. níl cód feidhmchláir ar bith athraithe) ní mór duit an fillteán 'docs' a imlonnú. Má dhéanann tú aon mhodúl Node.js a shuiteáil nó a uasdhátú beidh ort an eolaire 'node_modules` a ath-iomlonnú
- As siocair go n-úsáideann Sapper córas comhad leaganaithe láidir don chód feidhmchláir, tá sé slán sábháilte imlonnaithe iartheachtacha a chumaisc isteach san fhillteán '__sapper__/build' gan an fillteán a fhorscríobh. Cuireann sé seo cosc ar fhadhbanna do na húsaideoirí atá nasctha leis an suíomh greasáin faoi láthair.
### Ag imlonnú go dtí IIS le iisnode

Ar thimpeallachtaí Windows Server is féidir freastal ar fheidhmchláir Node.js trí IIS a úsáid mar sheachfhreastalaí aisiompaithe. Tá sé seo éascaithe ag [iisnode] (https://github.com/Azure/iisnode) a gcaithfidh tú a shuiteáil ar dtús. Ní mór cúpla céim sa bhreis a leanúint sa chás seo:
1. Cruathaigh fillteán nua sa suíomh greasáin darb ainm **app.js**. Beidh líne shingil amháin ann a chuireann síos ar chód taobh-freastalaí mar: 
  ```js
  require('./__sapper__/build/index.js');
  ```

2. Cruathaigh fillteán **Web.config** nua san eolaire fhréamh an tsuímh greasáin. Tá fillteán sámplach Web.config le nótaí mínithe air. Is iad na rannáin is tabhachtaí mar a leanas:

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

  Is é an ról atá acu siúd ná (i) an issnode hander a lódáil agus (ii) gach iarratas a atreorú go dtí an fillteán app.js ina bhfuil siad tugtha don chód fheidhmchláir Documental.
## Imlonnaigh le giniúint suímh stataí

Is ionann suíomh statach agus bailliúchán d'fhillteáin réamh-ghinte HTML, JavaScript agus CSS. Is é seo in áit shuíomh greasáin freastalaí-ghinte ina d'fhéadfadh inneachar a rindreáil agus a thabhairt don úsáideoir ar eitleog ag feidhmchlár. Féadfaigh suíomhanna statacha bheith sóchoiméadta gan mórán cumraíochta ar thaobh an fhreastalaí. 
Rith an t-ordú a leanas chun suíomh statach a aschur ó Documental:
```cmd
npm run export
```

Aschuirfidh na fillteáin statacha go dtí an eolaire '__sapper__/export`. Déanfaidh ordaithe easpórtála ina dhiaidh seo ábhair an eolaire seo a fhorscríobh.
Rith 'npx serve __sapper__/export` chun do shuíomh statach a thástáil.
Agus tú réidh, imlonnaigh inneachair an eolaire '__sapper__/export` go dtí fréamh an tsuímh greasáin i dtimpeallacht do fhreastalaí.
Féach ar na caipéisí  [Sapper] (https://sapper.svelte.dev/) chun tuilleadh eolais a fháil.
