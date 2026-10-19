# ZeedoInventory

An inventory management application for music stores, dedicated to managing musical instruments, sound gear, and audio accessories.

## Data model

| Field | Type | Notes |
| :--- | :--- | :--- |
| `name` | text | required, max 100 chars, e.g., product title |
| `inStock` | boolean | toggled from the list, default true |
| `department` | fixed values | `Instrumente cu corzi`, `Clape & Sintetizatoare`, `Accesorii & Audio` |
| `category` | relation | `Chitare`, `Sintetizatoare`, `Audio & Căști` (from week 10) |
| `user` | relation | store manager / operator (from week 11) |

## Stage 2 Verification Checklist

| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S2-R1 | JS file linked, logs on page load | [index.html#L68] | open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | [produse.js#L8-L27]| read |
| S2-R3 | list, count, search, add, toggle, delete | [produse.js#L30-L92] | console output |
| S2-R4 | add rejects empty name and invalid tag | [produse.js#L54-L68]| last 2 console lines |
| S2-R5 | original array unchanged after add | [produse.js#L111]| console line |
| S2-R6 | README Stage 2 section + AI log | [README.md](README.md), [ai-log/etapa-02.md](ai-log/etapa-02.md) | read |
| S2-R7 | commit "Stage 2" pushed | [Link to Stage 2 commit]| commit history |

Sample data used across all stages:
1. **Fender Player Stratocaster**, active (in stock), `Instrumente cu corzi`
2. **Sintetizator Korg Minilogue XD**, done (out of stock), `Clape & Sintetizatoare`
3. **Căști Audio-Technica ATH-M50x**, active (in stock), `Accesorii & Audio`

## How to run
Open `index.html` in a browser. No build step, no server required.

## AI usage
| Tool | Used for |
| :--- | :--- |
| Gemini | Assistance with HTML5 structure, CSS Grid/Flexbox layouts, theme adaptation, and documentation setup for Stage 1. |

Details per stage: see the `ai-log/` folder.

## Stage 3: Vite and React project
The app now lives in `frontend/`, built with Vite. The data from stage 2 moved into the main component; the list is still printed raw.

## Stage 4 Verification Checklist

| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S4-R1 | 2+ components in src/components/ | [frontend/src/components/](https://github.com/dianavulpe29/Magazin-de-muzica---gestiune-instrumente-muzicale-si-accesorii/tree/main/frontend/src/components) | open folder |
| S4-R2 | card receives data through props | [ProdusCard.jsx](https://github.com/dianavulpe29/Magazin-de-muzica---gestiune-instrumente-muzicale-si-accesorii/blob/main/frontend/src/components/ProdusCard.jsx) | read |
| S4-R3 | map + key={id}, no console warnings | [ProdusList.jsx](https://github.com/dianavulpe29/Magazin-de-muzica---gestiune-instrumente-muzicale-si-accesorii/blob/main/frontend/src/components/ProdusList.jsx) | F12, Console |
| S4-R4 | message for empty list | [ProdusList.jsx](https://github.com/dianavulpe29/Magazin-de-muzica---gestiune-instrumente-muzicale-si-accesorii/blob/main/frontend/src/components/ProdusList.jsx) | set array to [] |
| S4-R5 | state changes the card look | [ProdusCard.jsx](https://github.com/dianavulpe29/Magazin-de-muzica---gestiune-instrumente-muzicale-si-accesorii/blob/main/frontend/src/components/ProdusCard.jsx) | toggle inStoc flag |
| S4-R6 | README Stage 4 section + AI log | [README.md](README.md), [ai-log/etapa-04.md](ai-log/etapa-04.md) | read |
| S4-R7 | commit "Stage 4" pushed | [Link to commit](https://github.com/dianavulpe29/Magazin-de-muzica---gestiune-instrumente-muzicale-si-accesorii/commits/main) | commit history |

## How to run
```bash
cd frontend
npm install
npm run dev

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: Components built from data
- [ ] Stage 5: local state and events