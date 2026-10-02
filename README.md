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

## Status
- [x] Stage 1: static mockup
- [ ] Stage 2: data logic in JavaScript