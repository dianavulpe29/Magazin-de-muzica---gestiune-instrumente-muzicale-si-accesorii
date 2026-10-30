# Stage 5: AI log

## Tools
- Gemini

## Conversations
- Conversatie web (Tratarea starii locale cu useState, actualizari imutabile, propagarea evenimentelor onToggle si onDelete, comutarea temei cu data-theme)

## Key requests
### 1. State local si evenimente
- Asked: Am solicitat implementarea starii locale pentru lista de produse si pentru tema grafica, adaugarea functiilor de toggle/delete si a butonului de comutare a temei.
- Got: Codul pentru App.jsx, ProdusList.jsx, ProdusCard.jsx si regulile CSS aferente.
- Changed or rejected: Adaptat denumirile pentru entitatile Zeedo Shop (produse, inStoc, ProdusCard, ProdusList).

## What I learned / what did not work
Am invatat cum se pastreaza datele dinamice in useState, importanta functiilor imutabile (map, filter), cum se transmit callback-urile prin props de la parinte la copii si cum se gestioneaza temele prin atributul data-theme pe elementul html.