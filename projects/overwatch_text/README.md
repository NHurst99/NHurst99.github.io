# Overwatch Gradient Text Generator

This tool generates **custom Overwatch in-game text with gradient colors** using `<FG...>` tags.  
It supports **smooth multi-step gradients**, **hard step gradients**, automatic **200-character splitting**, and **smart space handling**.

---

## ✨ Features
- **Smooth Gradients:** Perfectly interpolates between multiple color stops.  
- **Hard Gradients:** Evenly assigns defined colors across your text.  
- **200-Character Auto Split:** Messages too long for Overwatch? No problem.  
- **Space Handling:** Spaces count in gradient steps but can remain uncolored.  
- **Flexible Colors:** Use any hex colors you want, or define hero-based palettes.  

---

## 🚀 Quick Start

### 1. Download the script

### 2. Run the script
```bash
python ow_gradient.py --text "GG Everyone!" \
  --colors "#B8860B,#FFD700,#FFF8DC,#B8860B" \
  --smooth --no-space-color
```

**Output Example:**
```
<FGB8860BFF>G<FGC39213FF>G ...
```

Paste the output directly into Overwatch's in-game chat or custom game settings.

---

## ⚙️ Arguments

| Flag | Description |
|------|-------------|
| `--text, -t` | Text to colorize. |
| `--colors, -c` | Comma-separated hex colors (e.g., `#FF0000,#00FF00`). |
| `--smooth` | Enables smooth color interpolation (default if not using `--hard`). |
| `--hard` | Uses hard color bands instead of smooth blending. |
| `--no-space-color` | Do not apply colors to spaces, but spaces still affect gradient steps. |
| `--alpha, -a` | Alpha channel (default `FF`). |
| `--max-len` | Max output length before splitting (default `200`). |

---

## 🌈 Example Gradients

### **Pride Flag Gradient**
```bash
python ow_gradient.py \
  --text "Good luck cuties! ♥" \
  --colors "#FF0000,#FF7F00,#FFFF00,#00FF00,#0000FF,#8B00FF" \
  --smooth --no-space-color
```

### **Rose Gold Gradient**
```bash
python ow_gradient.py \
  --text "GG Everyone!" \
  --colors "#B76E79,#C7858B,#D79C9D,#E6B3AF,#F0C8C2,#F8DCD3,#FFF5E1,#F8DCD3,#F0C8C2,#E6B3AF,#D79C9D,#C7858B" \
  --smooth
```

---

## 🤝 Credits
Made with 💖 by **[Nick Hurst](https://github.com/NHurst99)** with **[ChatGPT](https://openai.com)** for the Overwatch community!  
_“Design is not my passion 😅” — so I stepped in._  

---

## 📝 License
MIT License. See [LICENSE](LICENSE) for details.
