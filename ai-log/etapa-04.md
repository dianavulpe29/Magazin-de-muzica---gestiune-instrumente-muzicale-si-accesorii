# Stage 4: AI log

## Tools
- Gemini

## Conversations
- Conversatie web (Separarea interfetei in componente React: ProdusCard si ProdusList, transmiterea props-urilor si randare conditionata)

## Key requests
### 1. Componente din date
- Asked: Am solicitat crearea componentelor ProdusCard si ProdusList pentru tema Zeedo Shop, respectand props-urile si randarea cu map si key.
- Got: Codul pentru ProdusCard.jsx, ProdusList.jsx, integrarea lor in App.jsx si maparea corecta a claselor CSS pentru etichetele departamentelor.
- Changed or rejected: Pastrat denumirile specifice temei (ProdusCard, ProdusList, proprietatea inStoc).

## What I learned / what did not work
Am invatat cum se transmit datele prin props de la parinte la copil, de ce atributul key={produs.id} este obligatoriu direct pe elementul generat din map, si cum se implementeaza randarea conditionata pentru starea elementului (clasa done) si pentru cazul in care lista este goala.