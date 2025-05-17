# 📚 MoneyHub Code Reference Index

Welcome to the MoneyHub internal documentation index. Use this as a guide to quickly locate examples of various web development patterns, JavaScript/TypeScript features, and architectural decisions within the app.

---

## 🧠 JavaScript/TypeScript Features

| Concept                  | Example Location                            |
| ------------------------ | ------------------------------------------- |
| `Array.prototype.reduce` | `OverviewBudgetsPieChart.tsx` (budget sums) |
| `Array.prototype.filter` | `transactionsSortBy.ts`                     |
| `Intl.NumberFormat`      | `utils/formatters.ts`                       |
| Generics in TypeScript   | `hooks/useTransactionsData.ts`              |
| Enums & Types            | `Transactions/types.ts`                     |

---

## ⚛️ React Patterns

| Pattern               | File/Folder                                      |
| --------------------- | ------------------------------------------------ |
| Custom Hooks          | `hooks/useBudgetData.ts`, etc.                   |
| Composition / Props   | `OverviewBudgetsCategoryItem.tsx`                |
| Conditional Rendering | `OverviewTransactions/IndividualTransaction.tsx` |
| Lifted State          | `Overview.tsx`                                   |
| Component Reuse       | `OverviewBudgetsPieChart.tsx` (shared pie chart) |

---

## 🧰 Redux Toolkit + RTK Query

| Feature             | Location                             |
| ------------------- | ------------------------------------ |
| Redux Slice         | `features/Overview/overviewSlice.ts` |
| RTK Query API Slice | `services/overviewApi.ts`            |
| Dispatching Actions | `Overview.tsx`                       |
| State Selection     | `useSelector` in `Overview.tsx`      |
|                     |                                      |
|                     |                                      |
|                     |                                      |
|                     |                                      |

---

## 🎨 Styling

| Type                    | Location                       |
| ----------------------- | ------------------------------ |
| Global Styles           | `App.css`, `index.css`         |
| Feature-Specific Styles | `features/Budgets/budgets.css` |
| Sidebar Menu Styling    | `features/Sidebar/sidebar.css` |
| Sidebar Menu Styling    | `features/Sidebar/sidebar.css` |
|                         |                                |
|                         |                                |
|                         |                                |

---

## 📡 Data Fetching (RTK Query)

| Hook/File          | Purpose                           |
| ------------------ | --------------------------------- |
| `useBudgetData.ts` | Fetch budgets from the API        |
| `overviewApi.ts`   | Define endpoints (RTK Query)      |
| `overviewSlice.ts` | State management for overview tab |
|                    |                                   |
|                    |                                   |
|                    |                                   |
|                    |                                   |

---

## 📊 Data Visualization

| Chart            | File                          |
| ---------------- | ----------------------------- |
| Budget Pie Chart | `OverviewBudgetsPieChart.tsx` |

---

## 🧪 Utilities

| Utility             | File                                                |
| ------------------- | --------------------------------------------------- |
| Currency Formatter  | `utils/formatters.ts`                               |
| Transaction Sorting | `features/Transactions/utils/transactionsSortBy.ts` |

---

## 📁 Folder Conventions

| Folder       | Purpose                                       |
| ------------ | --------------------------------------------- |
| `/features/` | Feature-based structure (Budgets, Pots, etc.) |
| `/hooks/`    | Reusable custom hooks                         |
| `/utils/`    | Shared utility functions                      |
| `/services/` | RTK Query API endpoints                       |
| `/types/`    | TypeScript type definitions                   |

---

## 🧩 Future Enhancements (Plan Ahead)

- [ ] Add Authentication (JWT/Passport.js)
- [ ] Add Express/Node.js backend integration
- [ ] Implement CI/CD (GitHub Actions)
- [ ] Include automated tests (Vitest/Jest)
- [ ] Add accessibility and dark mode support
- [ ] Expand documentation to cover backend endpoints

---

_Last updated: {{DATE}}_
