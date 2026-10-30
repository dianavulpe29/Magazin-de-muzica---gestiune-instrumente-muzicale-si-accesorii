# Stage 2: AI log

## Tools
- Gemini

## Conversations
- Conversație web (Generare funcții pure pe array-uri, imutabilitate și validări pentru magazinul Zeedo Shop conform cerințelor din Etapa 2)

## Key requests
### 1. Logica de date și operațiile pe array
- Asked: Am solicitat crearea fișierului `produse.js` cu funcții pure (map, filter, reduce), calculul corect al id-ului și validare pentru tema magazinului de muzică.
- Got: Cod JavaScript decuplat complet de DOM, conținând `nextId`, `adaugaProdus`, `comutaStoc`, `stergeProdus`, `cautaDupaTitlu` și secțiunile de test pentru consolă.
- Changed or rejected: Am păstrat denumirile specifice temei (`produse`, `inStoc`, `DEPARTAMENTE`) și am verificat imutabilitatea array-ului original.

## What I learned / what did not work
Am aprofundat diferența dintre mutarea directă a datelor (`push`) și returnarea unei referințe noi (`[...lista, nou]`), aspect esențial pentru viitoarea integrare în React. De asemenea, am învățat folosirea metodei `reduce` pentru găsirea valorii maxime a ID-urilor.