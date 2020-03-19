---
title: Suiteáil áitiúil a chumrú
shortTitle: Suiteáil
description: Terminologue a shuiteáil agus a úsáid
keywords: téarmaíocht, taighde, bogearraí, foinse oscailte, javascript, Node JS, Fiontar & Scoil na Gaeilge, DCU
resource: Terminologue
github: https://github.com/gaois/terminologue
order: 2
toc: false
public: true
---

Mínítear sa doiciméad **(1)** seo na rudaí a chaithfidh tú a dhéanamh chun tús a chur le suiteáil áitiúil de Terminologue ar do ríomhaire féin le haghaidh forbartha nó tástála, agus **(2)** tugann sé tuilleadh ábhar léitheoireachta duit má theastaíonn uait an chaoi a n-oibríonn Terminologue go hinmheánach agus/nó an chaoi a gcumraítear ar fhreastalaí táirgthe é a thuiscint.  

## Cúpla rud a chaithfidh tú a thuiscint ar dtús

Tá Terminologue gréasánbhunaithe. Ciallaíonn sé seo go ritheann Terminologue ar fhreastalaí agus úsáideann daoine brabhsálaithe gréasáin chun rochtain a fháil air tríd an idirlíon, cosúil le suíomh gréasáin ar bith eile. Sa doiciméad seo, mínímid an bealach a gcumraítear Terminologue ar do ríomhaire féin, agus do ríomhaire á úsáid agat amhail is gur freastalaí é, le haghaidh forbartha agus tástála.

Tá cúl Terminologue (= na píosaí a ritheann ar an bhfreastalaí) scríofa in [Node.js](https://nodejs.org/). Ciallaíonn sé seo gurb ionann an cód foinseach agus JavaScript (taobh freastalaí) agus go ritheann sé ar bheagnach gach córas oibriúcháin, lena n-áirítear GNU/Linux agus Microsoft Windows. An t-aon réamhriachtanas a bhaineann leis seo ná Node.js a shuiteáil ar do ríomhaire. Aimseoidh agus suiteálfaidh Bainisteoir Pacáiste Node.js gach réamhriachtanas agus gach spleáchas eile go huathoibríoch agus é á chumrú agat.  

Maidir le sonraí a stóráil ar an bhfreastalaí, lena n-áirítear gach bunachar téarmaí, sonraí a bhaineann le húsáideoirí agus mar sin de, úsáideann Terminologue [SQLite](https://www.sqlite.org/). Bainistíonn Bainisteoir Pacáiste Node.js an réamhriachtanas seo chomh maith. Tá SQLite comhadbhunaithe (= is ionann gach bunachar sonraí agus comhad éigin ar do ríomhaire). Ciallaíonn sé seo nach gcaithfidh tú inneall bunachar sonraí ar bith a shuiteáil ar do ríomhaire.  

## Na céimeanna

1. Suiteáil [Node.js](https://nodejs.org/) ar do ríomhaire.

2. Íoslódáil gach rud ón stór agus cuir i gcomhadlann ar do ríomhaire iad. Tabharfaidh tú faoi deara go bhfaightear na rudaí a d’íoslódáil tú i bhfochomhadlanna éagsula, agus is iad `data` (an áit a gcoinníonn Terminologue a mbunachair shonraí) agus `website` (an áit a a bhfuil fíorshuíomh gréasáin Terminologue) na fochomhadlanna is tábhachtaí. 

3. Ach an teirminéal (má tá tú ar GNU/Linux) nó an leid ordaithe (má tá tú ar Microsoft Windows) a úsáid, téigh chuig an bhfochomhadlann `website` agus rith  `npm install`. Lainseálfaidh sé seo Bainisteoir Pacáiste Node.js (NPM) a íoslódálfaidh agus a shuiteálfaidh (sa chomhadlann `website/node_modules`) gach spleáchas a theastaíonn ó Terminologue. D’fhéadfadh sé seo cúpla nóiméad a ghlacadh.

4. San fhochomhadlann `website`, athainmnigh an comhad `siteconfig.template.json` agus tabhair `siteconfig.json` air.

5. San fhochomhadlann `data`, athainmnigh an comhad `terminologue.template.sqlite` agus tabhair `terminologue.sqlite` air.  

6. San fhochomhadlann `website`, rith `node init.js`. Is script í seo a chruthóidh cuntas duit i do shuiteáil áitiúil de Terminologue. Tabharfaidh an script ainm úsáideora agus pasfhocal duit. Cuimhnigh ar an eolas seo nó scríobh síos é.

7. San fhochomhadlann `website`, rith `node terminologue.js`. Cuirfidh sé seo tús le cúl Terminologue mar fhreastalaí ar do ríomhaire. *Tabhair faoi deara: Cumraítear Terminologue le rith ar phort 80 de réir réamhshocraithe. Tá sé seo dainséarach dar le suiteálacha GNU/Linux agus ní cheadóidh siad é, mura ritheann tú Terminologue le pribhléidí ardaithe. Chun Terminologue a rith le pribhléidí ardaithe, rith mar `sudo node terminologue.js` é.*

8. Oscail do bhrabhsálaí gréasáin agus téigh chuig `http://localhost/`. Ba chóir go bhfeicfeá  leathanach baile Terminologue anois agus ba chóir go mbeifeá in ann logáil isteach ach an t-ainm úsáideora agus an pasfhocal a tugadh duit i gcéim 6 a úsáid.

Comhghairdeas, tá suiteáil áitiúil de Terminologue ag rith ar do ríomhaire anois. Chun deireadh a chur léi am ar bith, brúigh `Ctrl + C` sa teirminéal nó sa leid ordaithe. 
