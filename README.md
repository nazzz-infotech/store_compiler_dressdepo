# Dressdepo Layout Renderer

A lightweight layout engine for rendering dynamic store layouts using XML-based structure.

---

## ✨ Features

* 📦 Component-based layout system (Row, Column, Grid, etc.)
* 🎨 Built-in UI elements (Text, Image, Shapes)
* ⚡ Fast rendering with React
* 🧩 Extensible component registry
* 🧾 XML-driven layout parsing

---

## 📦 Installation

```bash
pnpm add store-compiler-dressdepo
# or
npm install store-compiler-dressdepo
```

---

## 🚀 Usage

```tsx
import { StoreRenderer } from "store-compiler-dressdepo";
import "store-compiler-dressdepo/style.css";

const xml = `
<store>
  <row>
    <text>Hello World</text>
  </row>
</store>
`;

export default function App() {
  return <StoreRenderer xml={xml} />;
}
```

---

## 🧠 How it works

1. XML is parsed into nodes
2. Nodes are compiled into React components
3. Components are rendered dynamically

---

## 📁 Supported Components

* Row
* Column
* Grid / ResponsiveGrid
* Text
* Image
* ProductCard
* Shapes (Circle, Star, Triangle, etc.)

---

## 🎨 Styling

Includes default styles:

```tsx
import "store-compiler-dressdepo/style.css";
```

---

## 🔧 Development

```bash
pnpm install
pnpm build
```

---

## 📄 License

MIT
