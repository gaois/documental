---
title: Loga athruithe
description: Cuntas ar athruithe ar bith a bhaineann le API Logainm
keywords: Logainm, API, logainmneacha, logainmníocht, ainmeolaíocht, Gaeilge, Fiontar & Scoil na Gaeilge, DCU
section: Logainm
toc: false
public: true
---

## **0.9.1** / 2019-11-18

### Forbairtí breise

- Cuireadh na paraiméadair iarratais `Page` agus `PerPage` ar fáil chun uimhriú leathanach a éascú i gcás tacar torthaí a bhaineann le háiteanna.
- Cuireadh na hairíonna `TotalPages`, `CurrentPage` agus `CountPerPage` leis an oibiacht `placeList` agus iad le léiriú agus uimhriú leathanach i bhfeidhm ar an tacar torthaí.
- Breis teachtaireachtaí earráide cairdiúla a bhaineann leis an uimhriú (m.sh. i gcás earráidí nuair atá innéacs as raon).

### Athruithe

- Leasaíodh an doiciméadacht leis na forbairtí thuasluaite a chur in iúl.
- Tugtar teachtaireachtaí earráide cairdiúla, anuas ar an gcód stádais HTTP cuí, mar chuid den fhreagra a sheoltar i gcás earráidí 400 agus 404.
