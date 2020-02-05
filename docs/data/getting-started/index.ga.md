---
title: Cur Chun Siúil le hacmhainní sonraí oscailte Gaois
shortTitle: Cur Chun Siúil
description: Eolas a theastaíonn sula n-idirghníomhaítear le hacmhainní sonraí oscailte Gaois
keywords: Gaois, API, fíordheimhniú, téarmaí, Fiontar & Scoil na Gaeilge, DCU
public: true
---

Tá [grúpa taighde Gaois](https://www.gaois.ie) ag [Fiontar & Scoil na Gaeilge](https://www.dcu.ie/fiontar_scoilnagaeilge/), DCU, ag cur roinnt acmhainní sonraí oscailte ar fáil don phobal. Áirítear leo Comhéadain Feidhmchláir RESTful agus déantáin eile sonraí, [Innéacs Sloinnte Éireannacha](https://docs.gaois.ie/en/data/surnames), a cuireadh le chéile i gcomhar le páirtithe na dtionscadal, san áireamh. Eisítear gach ceann de na hacmhainní seo faoi choinníollacha sonracha ceadúnaithe: le do thoil, léigh an t-eolas cuí ceadúnaithe, atá ar fáil ar an suíomh gréasáin seo sna doiciméid a ghabhann le gach acmhainn, sula mbaineann tú úsáid as na sonraí.  

Tá leagan béite poiblí de [API Logainm](/en/data/logainm/v0.9/api) ar fáil anois agus cuireann sé seo rochtain chláir ar Bhunachar Logainmneacha na hÉireann ar fáil do dhaoine. Tá ardfhorbairt á déanamh ar API eile a bhaineann le tionscadal [Dúchas](/en/data/duchas/v0.5/api) faoi láthair agus tá leagan réamheisiúna ar fáil anois. Táthar ag súil go gcuirfear tuilleadh acmhainní ar fáil amach anseo. 

Baineann patrúin choiteanna maidir le húsáid, fíordheimhniú, leaganú agus cosaint sonraí le comhéadain feidhmchláir Gaois. Déantar cur síos sa chuid eile den doiciméad seo ar na patrúin seo agus ba cheart iad a léamh sula dtéitear ar aghaidh go dtí na doiciméid ar leith a bhaineann le gach acmhainn.  

## Forléargas ar API

Cuireann Comhéadain Feidhmchláir Gaois rochtain ar roinnt achmhainní ar fáil trí scéimre sainithe URL. Faightear rochtain ar acmhainní ar leith trí chosáin uathúla atá iarcheangailte leis an óst-suíomh gréasáin. I gcásanna áirithe, d'fhéadfaí na hacmhainní a thagann ar ais a scagadh ach paraiméadair roghnacha iarratais a úsáid. Má éiríonn leis an iarratas, cuirtear acmhainní ar ais i bhfoirm JSON. Mura n-éiríonn leis an iarratas rochtain a fháil ar acmhainn, gheofar, ar a laghad, cód stádais HTTP mar fhreagra ar an iarratas. Seo a leanas sampla d'iarratas bailí API:  

> `https://www.logainm.ie/api/v0.9/1375542`

Ní mór d'úsáideoirí nó d'fheidhmchláir (cliaint) a iarrann acmhainn trí API a n-aitheantas a fhíordheimhniú. Déantar é seo ach eochair API a thabhairt le gach iarratas. Ní mór do gach cliant eochair uathúil API a fháil sula n-idirghníomhaíonn sé/sí leis an gcomhéadan. Teastaíonn fíordheimhniú chun mí-úsáid seirbhíse a chosc agus chun staitisticí ginearálta úsáide a rianú. Faightear tuilleadh sonraí thíos.   

## Leaganú API  

Éascaítear leaganacha éagsúla API le haghaidh gach API REST. Is ionann seo agus a rá go bhféadfadh níos mó ná leagan amháin de gach API a bheith inrochtana ag an am céanna. D'fhéadfadh leaganacha nua API acmhainní nó feidhmiúlachtaí breise a chur ar fáil ach seans go dteastóidh comhréir dhifriúil iarratais uathu i gcomparáid le leaganacha níos sine. Léiríonn an dara paraiméadar cosáin in URL an iarratais an spriocleagan API:  

> /api/**v0.9**/glossary

Tacófar le leaganacha níos sine ar mhaithe le héascaíocht an fhorbróra: gan leaganú, d'fhéadfadh feidhmchláir spleácha de chuid cliant cliseadh de bharr athruithe rialta ar chomhréir API. Déanfaimid ár ndícheall acmhainní nua a chur leis an suíomh de réir a chéile agus ní chuirfimid athruithe briste i bhfeidhm ach amháin mura bhfuil aon rogha eile ann. Déantar leaganacha API ach [Leaganú Séimeantach 2.0.0](https://semver.org/spec/v2.0.0.html) (semver) a úsáid agus leantar sonraíocht semver. Ar mhaithe le gontacht, áfach, ní léirítear ach pointí mórleaganacha agus mionleaganacha in aimsitheoirí aonfhoirmeacha acmhainne a bhaineann le hiarratais.

Tar éis tamaill, seans go mbeidh ort fáil réidh le seanleaganacha API ar chúiseanna cothabhála nó feidhmíochta. Nuair a chláraíonn tú le haghaidh eochair API, cuirfear ceist ort maidir le cumarsáid a fháil ó ghrúpa taighde Gaois ó am go ham. Ach glacadh le cumarsáid a fháil, cuirfear ar an eolas go luath thú maidir le hathruithe dá leithéid.

**Tabhair faoi deara:** Ar mhaithe le tástáil amháin atá leaganacha réamheisiúna API (i.e. < v1.0) agus ní dhéanfar cothabháil orthu nuair a eiseofar v1.0.

## Fíordheimhniú API 

Ní mór do chliaint a bhfuil acmhainn á hiarraidh acu tríd an API a n-aitheantas a fhíorhdeimhniú. Déantar é seo ach eochair API a chur ar aghaidh chuig an tseirbhís le gach iarratas. Tugann fíordheimhniú cosaint éigin don soláthraí seirbhíse ar mhí-úsáid a bhaintear as API a bhfuil rólódáil iarratais i gceist léi. Ligeann sé seo dúinn roinnt staitisticí úsáide a choinneáil freisin ar mhaithe le monatóireacht feidhmíochta agus feabhsú seirbhíse. Is féidir tuilleadh a fhoghlaim faoi na sonraí a choinnímid sna míreanna seo a leanas.  

### Conas eochair API a fháil 

Téigh chuig Mol Forbróra Gaois ar [gaois.ie](https://www.gaois.ie/).  Logáil isteach nó cláraigh chun cuntas a chruthú agus gheobhaidh tú rochtain ar eochair uathúil API.  

**Tabhair faoi deara:** Beidh an tseirbhís chlárúcháin ag teacht go luath. Idir an dá linn, déan teagmháil linn ag [gaois@dcu.ie](mailto:gaois@dcu.ie) chun d'eochair API a iarraidh nó a athshocrú.  

### Conas d'eochair API a chur ar aghaidh 

Is féidir d'eochair API a chur ar aghaidh chuig an tseirbhís ar bhealaí éagsúla. Roghnaigh an modh is fusa duitse.  

#### Ceanntásc HTTP 

Cuir an eochair API i gceanntásc `X-Api-Key`: 

> `'X-Api-Key: <API_KEY_HERE>' 'https://www.logainm.ie/api/v0.9/1384618'`

#### Paraiméadar iarratais GET

Cuir an eochair API i bparaiméadar `apiKey` um theaghrán iarratais GET: 

> `'https://www.logainm.ie/api/v0.9/1384618?apiKey=API_KEY_HERE'`

**Tabhair faoi deara:** D'fhéadfaí paraiméadar iarratais GET a úsáid le haghaidh iarratas nach mbaineann le GET (POST agus PUT san áireamh).

#### Fíordheimhniú Bunúsach HTTP

Mar rogha eile, cuir an eochair API ar aghaidh mar ainm úsáideora (agus pasfhocal folamh leis) ach fíordheimhniú bunúsach HTTP a úsáid:  

> `'https://API_KEY_HERE@www.logainm.ie/api/v0.9/1384618'`

## Slándáil

Freastalaítear an API le prótacal HTTPS. Cé go n-atreoraítear iarratais HTTP a chuirtear chuig an tseirbhís go dtí HTTPS go huathoibríoch, níor cheart duit idirghníomhú leis an API ach amháin má bhaineann tú úsáid as aimsitheoirí aonfhoirmeacha acmhainne a bhfuil an réimír HTTPS leo.  

Cé go gcuireann HTTPS leibhéal suntasach slándála ar fáil, chuirfimis béim ar an gcaoi nach ionann na modhanna bunúsacha fíordheimhnithe a luadh thuas agus criptiú ó cheann ceann. **Ba cheart duit Eochair API a chur ar aghaidh chuig an tseirbhís amháin**—ná cuir sonraí íogaire, go háirithe pasfhocail, sna hiarratais riamh.  

## Cóid stádais HTTP

Cuirfear an stádas a bhaineann le gach iarratas API in iúl trí chóid chaighdeánacha stádais HTTP ar an gcéad dul síos. Molaimid go láimhseálann aon fheidhmchlár a idirghníomhaíonn lenár gcomhéadain feidhmchláir na cóid stádais seo a leanas:

| Cód   | Sainmhíniú                        | Tuilleadh eolais    |
| :---- | :-------------------------------- | :------------------ |
| 200   | OK                                | Cuirfear oibiacht JSON amháin nó níos mó ar ais. |
| 400   | DROCHIARRATAS                     | Bhí comhréir an iarratais neamhbhailí—d'fhéadfaí oibiacht JSON a dhéanann cur síos ar an earráid a chur ar ais. |
| 401   | NEAMHÚDARAITHE                    | Níor cuireadh eochair bhailí API ar fáil. |
| 404   | NÍ bhFUARTHAS                     | Níl an acmhainn ann. |
| 500   | EARRAID SA FHREASTALAÍ INMHEÁNACH | Déan teagmháil linn ag [gaois@dcu.ie](mailto:gaois@dcu.ie) agus an cosán iarratais á lua agat. |

## Coinneáil sonraí agus cosaint sonraí 

Stórálaimid na sonraí seo a leanas gach uair a dhéantar iarratas le ceann dár gcomhéadain feidhmchláir:  

1. Cosán iarratais
2. Cód freagartha stádais
3. Áireamh torthaí
4. Aga freagartha an iarratais
5. Aitheantas an chliaint (a fhaightear ach tagairt a dhéanamh don eochair API a chuirtear ar fáil)  

Nascann aitheantas an chliaint d'iarratas leis na sonraí a stóráil tú i Mol Forbróra Gaois.ie (na sonraí a chuir tú ar fáil nuair a chláraigh tú don tseirbhís, mar shampla). Is féidir leat breathnú ar na sonraí thuas am ar bith i Mol Forbróra Gaois.ie. Stórálann grúpa taighde Gaois, Fiontar & Scoil na Gaeilge, DCU na sonraí seo ar bhealach a chomhlíonann RGCS.

Coimeádaimid an ceart againn féin méadracht chomhiomlán nó anaithnid a bhaineann le hiarratas API a thuairisciú agus/nó a fhoilsiú. Ní thuairisceoimid, ní fhoilseoimid nó ní roinnfimid sonraí ar leith ó chliant (i.e. aitheantas an chliaint nó sonraí eile aitheantais dá c(h)uid) le tríú páirtí ar bith. Coimeádaimid an ceart againn féin míreanna sonraí 1-4, a liostaíodh thuas, a choinneáil go deo ar mhaithe le monatóireachta feidhmíochta, taighde agus feabhsaithe seirbhíse.   

Tá tú i dteideal do chuid sonraí pearsanta a bhaint dár gcórais am ar bith. Scriosfar d'ainm úsáideora, pasfhocal, ainm, cleamhnacht eagraíochtúil, agus ceangal le hiarratais stóráilte, go hiomlán agus go buan. Déan teagmháil linn ag  [gaois@dcu.ie](mailto:gaois@dcu.ie) más mian leat go mbainfear do chuid sonraí pearsanta.  

Ach rochtain a fháil ar cheann ar bith dár gcomhéadain feidhmchláir, aontaíonn tú go gcloífidh tú leis na polasaithe agus leis na cleachtais ar fad a luaitear sa doiciméad seo.  
