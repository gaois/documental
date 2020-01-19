---
title: Loga athruithe
shortTitle: Loga athruithe
description: Cuntas ar athruithe a bhaineann le API Dúchas
keywords: Dúchas, comhéadan feidhmchláir, béaloideas, stair, scéalaíocht, Fiontar & Scoil na Gaeilge, DCU
project: Dúchas
order: 4
toc: false
public: true
---

## **v0.5.2** / 2019-10-24

### Athruithe

- Cuirtear an API ar fáil trí fhearann poiblí www.duchas.ie anois. Leasaíodh an doiciméadacht chun tagairtí don fhearann tástála a bhaint.

---

## **v0.5.1** / 2019-07-08

### Forbairtí breise

- Cuireadh na hairíonna `DateCreated` agus `DateModified` le gach oibíocht den chineál `page` sa Phríomhbhailiúchán agus i mBailiúchán na Scol.

### Athruithe

- Réitíodh fadhb a tharla nuair a rinneadh iarratas ar an bPríomhbhailiúchán nó ar Bhailiúchán na Scol agus na paraiméadair iarratais `CreatedBefore`, `CreatedSince`, `ModifiedBefore`, nó `ModifiedSince` socraithe. Tharlaíodh aga freagartha fada agus/nó earráid stádas 500 uaireanta mar thoradh ar an bhfadhb seo.
- Ní chuirtear ach leathanaigh imleabhair atá sannta san áireamh sa fhreagra a thugtar ar iarratais a bhfuil paraiméadair seachas `VolumeID` nó `VolumeNumber` luaite leo. Is é sin nach seoltar ach leathanaigh atá sannta le mír imleabhair nó atá marcáilte mar leathanaigh teidil sa fhreagra; fágtar leathanaigh atá bán ar lár ón fhreagra. Déantar amhlaidh chun nach dtabharfar ach torthaí atá ábhartha sa fhreagra agus chun méid an phálasta sa fhreagra a laghdú. Moltar d'úsáideoirí ar mian leo idir leathanaigh shannta agus leathanaigh neamhshannta a fháil atriail tríd na bailiúcháin de réir aitheantóirí na n-imleabhar. Is féidir innéacs aitheantóirí imleabhair a fháil tríd na críochphointí `/cbe/volumes` agus `/cbes/volumes`.