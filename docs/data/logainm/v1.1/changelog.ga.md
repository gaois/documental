---
title: Loga athruithe
shortTitle: Loga athruithe
description: Cuntas ar athruithe a bhaineann le API Logainm
keywords: Logainm, API, logainmneacha, logainmníocht, ainmeolaíocht, Gaeilge, Fiontar & Scoil na Gaeilge, DCU
resource: Logainm
order: 4
toc: false
public: true
---

## **v1.1.0** / 2024-02-21

Tugann an eisiúint seo le fios go ndearnadh nuashonrú suntasach ar an tacar sonraí atá faoi API Logainm. Beidh na sonraí atá ar fáil tríd an API ar aon dul leo siúd atá ar fáil trí shuíomh poiblí nua [logainm.ie](https://www.logainm.ie), a seoladh i mí na Bealtaine 2022, feasta. Ba cheart go mbainfidh úsáideoirí an API tairbhe as:

- Sonraí geografacha (i.e. comhordanáidí lárphointe domhanleithid agus domhanfhaid mar aon le tagairtí d'Eangach na hÉireann) atá níos cruinne agus níos iomláine ag gabháil leis na taifid áite.
- Breis feabhais ar fheidhmíocht an API.
- [Naisc](/ga/data/logainm/v1.1/data#link) le hacmhainní seachtracha breise de chuid [Shuirbhéireacht Ordanáis Thuaisceart Éireann](https://www.nidirect.gov.uk/campaigns/ordnance-survey-of-northern-ireland) agus tionscadal [Cavan Townlands](https://cavantownlands.com/).
- [Naisc](/ga/data/logainm/v1.1/data#folklorelink) le trí bhailiúchán eile de chuid [Dúchas](https://www.duchas.ie), tionscadal digitithe Chnuasach Bhéaloideas Éireann. Is iad sin An Príomhbhailiúchán Lámhscríbhinní, An Bailiúchán Grianghraf agus An Bailiúchán Fuaime. Cuireann sé seo leis na naisc chuig Bailiúchán na Scol a bhí ar fáil cheana.

### Forbairtí breise

- Anois, is féidir an API a cheadú trí [chomhéadan grafach Swagger](https://www.logainm.ie/api/swagger/index.html) (Eochair API ag teastáil).
- Cuireadh airí nua `Source` leis an oibiacht [`geography`](/ga/data/logainm/v1.1/data#geography) a thugann le fios cá bhfuarthas na sonraí geografacha a bhaineann leis na háiteanna.

### Athraithe

- Fágtar airíonna a bhfuil luach neamhnitheach acu ar lár ó fhreagraí de chuid an API anois. Laghdaíonn sé seo méid an phálasta sa fhreagra. Ní athrú bristeach é seo ós rud é go bhfuil sé [de réir sonraíochta](/ga/data/logainm/v1.1/data).

### Dímholta

- Tá [Tailte Éireann](https://tailte.ie/) tar éis teacht i gcomharbacht ar Shuirbhéireacht Ordanáis Éireann mar a bhí. Is dócha go ndéanfar nuashonrú ar thagairtí do fhoinsí sonraí geografacha agus do na naisc a bhaineann le OSI i leaganacha eile den API amach anseo.

---

## **v1.0.1** / 2021-01-21

### Athraithe

Athruithe neamhbhristeacha:

- Réitíodh fadhb a d'fhág gur tharla earráid i gcás iarratas faoi leith ar thaifid áite aonair nuair a bhain airí nialasach le `gridReference` de chuid an taifid.
- Réitíodh cás ina dtugtaí cód stádais HTTP 500 mar fhreagra ar iarratais ar áiteanna nach ann dóibh sa bhunachar nuair ba chirte cód stádas 404 a thabhairt.

### Bainte

- Cuireadh deireadh le API v0.9 (leagan réamheisiúna).

## **v1.0.0** / 2020-07-05

Eisítear API Logainm go poiblí agus go hoifigiúil agus an t-uasdátú seo i bhfeidhm.

### Athraithe

Athruithe bristeacha:

- Déantar uimhriú leathanach a chur i bhfeidhm ar gach iarratas ar chríochphointe API a dtugtar liosta torthaí mar fhreagra air. Mura sonraítear paraiméadar leathanaigh ar bith tabharfar an chéad leathanach torthaí mar fhreagra agus uaslíon 1,000 toradh in aghaidh an leathanaigh. Cinntíonn an t-uimhriú leathanach go mbaineann feidhmíocht chobhsaí iontaofa leis an API, is cuma cad é an líon iomlán torthaí a aimsítear.
- Cuirtear meiteashonraí i dtaobh líon iomlán na dtorthaí agus i dtaobh uimhriú leathanach ar fáil i gcás gach críochphointe API a thugann liosta oibiachtaí mar fhreagra. I gcas liostaí tagartha, mar a thugtar ó chríochphointí ar nós `/api/v1.0/administrative-units`, `/api/v1.0/features`, `/api/v1.0/glossary` agus `/api/v1.0/counties`, ciallaíonn sé seo go mbíonn na torthaí neadaithe in airí dar teideal `results`.
- Rinneadh an t-airí `places` a bhain leis an oibiacht [`placeList`](/ga/data/logainm/v1.0/data) a athainmniú mar `results`. Fágann sé seo go bhfuil struchtúr na n-oibiachtaí ar liostaí iad de réir a chéile anois.

Athruithe eile:

- Leasaíodh an doiciméadacht leis na forbairtí thuasluaite a chur in iúl.

### Bainte

- Cuireadh deireadh le API v0.5.

### Dímholta

- Tá API v0.9, ar leagan réamheisiúna atá ann, dímholta anois agus cuirfear deireadh leis ar an 1 Meán Fómhair 2020.

---

## **v0.9.3** / 2020-02-08

### Forbairtí breise

- Tá [Comhroinnt Sócmhainní Thras-Fhoinse](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (CORS) cumasaithe i gcás API Logainm anois.

### Athraithe

- Leasaíodh [an bhuntreoir](/ga/data/getting-started) leis na forbairtí i dtaca le CORS a chur in iúl.

---

## **v0.9.2** / 2020-01-20

### Athraithe

- Tá feabhas ar chruinneas na n-iarratas geografach, go háirithe sa mhéid a bhaineann le comhordnáidí sráidainmneacha.
- Déantar ceartionchódú ar theagráin URI i gcás oibiachtaí `Image` agus `Audio` anois.

---

## **v0.9.1** / 2019-11-18

### Forbairtí breise

- Cuireadh na paraiméadair iarratais `Page` agus `PerPage` ar fáil chun uimhriú leathanach a éascú i gcás tacar torthaí a bhaineann le háiteanna.
- Cuireadh na hairíonna `TotalPages`, `CurrentPage` agus `CountPerPage` leis an oibiacht `placeList` agus iad le léiriú agus uimhriú leathanach i bhfeidhm ar an tacar torthaí.
- Breis teachtaireachtaí earráide cairdiúla a bhaineann leis an uimhriú (e.g. i gcás earráidí nuair atá innéacs as raon).

### Athraithe

- Leasaíodh an doiciméadacht leis na forbairtí thuasluaite a chur in iúl.
- Tugtar teachtaireachtaí earráide cairdiúla, anuas ar an gcód stádais HTTP cuí, mar chuid den fhreagra a sheoltar i gcás earráidí 400 agus 404.
