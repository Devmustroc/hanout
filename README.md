# 🛒 Hanout - Multi-Tenant E-Commerce Platform

[![Next.js 15](https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

**Hanout** (*حَانُوت*, meaning *"Shop"* or *"Store"*) is a modern, high-performance **multi-tenant e-commerce platform** built with Next.js 15 (App Router), React 19, Tailwind CSS v4, and Radix UI / Shadcn.

It enables merchants to launch custom online storefronts with rich product displays, interactive analytics dashboards, and seamless tenant management.

---

## ✨ Features

- 🏬 **Multi-Tenant Architecture**: Isolate store management, products, and configurations per tenant.
- ⚡ **Next.js 15 App Router & React 19**: Leveraging React Server Components (RSC) and Server Actions for optimal speed and SEO.
- 🎨 **Modern Design System**: Styled with Tailwind CSS v4, Radix UI primitives, Lucide Icons, and dynamic theme switching (`next-themes`).
- 📊 **Analytics Dashboard**: Interactive sales, orders, and revenue metrics visualizer powered by **Recharts**.
- 📝 **Form Validation & Type Safety**: Robust, schema-driven forms with `react-hook-form` and `zod`.
- 🛒 **Rich UI Components**: Embla carousel product showcases, drawer panels (Vaul), Sonner toast notifications, and date pickers.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router) |
| **UI Core** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + Radix UI Primitives |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Form & Validation** | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| **Data Visualization** | [Recharts](https://recharts.org/) |
| **Icons & Toast** | [Lucide React](https://lucide.dev/) + [Sonner](https://sonner.emilkowal.ski/) |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.17` or higher
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Devmustroc/hanout.git
   cd hanout
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```text
hanout/
├── app/                  # Next.js 15 App Router pages & layouts
│   ├── (auth)/           # Authentication routes
│   ├── (dashboard)/      # Merchant dashboard & analytics
│   └── (storefront)/     # Customer-facing multi-tenant store pages
├── components/           # Reusable UI components (Radix / Shadcn)
│   ├── ui/               # Primitive UI components
│   └── dashboard/        # Analytics & management components
├── lib/                  # Utility functions & validation schemas
├── public/               # Static assets
└── styles/               # Global CSS & Tailwind v4 imports
```

---

<p align="center">
  Crafted with ❤️ by <a href="https://github.com/Devmustroc">Devmustroc</a>
</p>
