---
title: Lamháltas lochtanna agus láimhseáil earráidí
shortTitle: Láimhseáil earráidí
description: Logálaí simplí iarratais is féidir a chumrú le haghaidh fheidhmchláir ASP.NET agus ASP.NET Core
keywords: logálaí iarratais, cuardaigh, staitisticí cuardaigh, foinse oscailte, C#, .NET Core, dotnet, SQL Server, Fiontar & Scoil na Gaeilge, DCU
order: 6
toc: false
public: true
---

Tiomsaíodh Gaois.QueryLogger agus lamháltas lochtanna agus timpeallachtaí ardéilimh/ard-chomhreatha ar intinn againn. Mar chuid den phróiseas logála, cuirtear iarratais i gciú comhreathach i snáithe cúlra ar leith sula maireann na sonraí. Sin cuid den chúis gur beag an taca a chuireann an modh `Log()` le haga freagartha do fhreastalaí: is próiseas sioncronach, neasláithreach é seo ach tarlaíonn an próiseas a bhaineann leis na logálaithe a scríobh sa bhunachar sonraí go haisioncronach i snáithe eile (blas ar leith a bhaineann leis an bpatrún Táirgeora-Tomhaltóra). Úsáideann Gaois.QueryLogger struchtúir shonraí a chuireann an leabharlann [System.Threading.Channels](https://docs.microsoft.com/en-us/dotnet/api/system.threading.channels) ar fáil i dtaca le logáil aisioncronach ardfheidhmíochta.

Ach na logálaithe a chiúáil, caomhnaítear na logálaithe sa chuimhne go dtí go bhféadfaí an próiseas scríofa a atriail má tá ceist seachadta ann faoi I/O an bhunachair sonraí (b’fhéidir go bhfuil go leor tráchta ann nó go bhfuil iarratas costasach ag rith ar an mbunachar sonraí). Is féidir leat uasmhéid an chiú agus an t-eatramh atrialach a shonrú sna [socruithe cumraíochta](../configuration). Má bhaintear uasmhéid an chiú amach, cuileáiltear logálaithe ón gciú ar bhonn is túisce isteach is túisce amach.

## Seirbhís foláirimh

Ós rud é go n-úsáidtear ciú an logálaí i snáithe cúlra, ní chuirfear earráidí bunachair sonraí nó eisceachtaí a bhaineann le scríobh ar ais chuig an snáithe glaoite. Tá sé tábhachtach, áfach, go mbíonn tú ar an eolas faoi aon fhadhb a bhfuil tionchar aici ar an tseirbhís logála. Chuige sin, faightear seirbhís foláirimh ríomhphoist ar an bpointe boise ó Gaois.QueryLogger. Sonraigh do shonraí poist sna [socruithe cumraíochta](../configuration) agus cuirfear aon fhadhb in iúl duit. Ach an `AlertInterval` a shocrú, cinntítear nach bhfaigheann tú ríomhphoist dhúbailte má chúltacaítear ciú an logálaí.
