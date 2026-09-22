# 🍔 Food Hour

A full-featured food delivery web app, built to practice production-grade React patterns end to end — routing, global state, forms, testing, and performance optimization — on top of real restaurant data.

> Browse live restaurants, search and filter them, open a menu with a single-open accordion, add items to a Redux-backed cart, and check out — all wrapped in an animated loading screen and a live online/offline indicator.


**🔗 Live Demo: [food-hour.netlify.app](https://food-hour.netlify.app)**

<!-- Add your demo GIF here -->
![Food Hour Demo](./demo.gif)

---

## 📖 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Notable Implementation Details](#-notable-implementation-details)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Testing](#-testing)
- [Folder Structure](#-folder-structure)
- [Author](#-author)

---

## ✨ Features

- **Live restaurant listing** fetched from a real API on load
- **Promoted restaurant cards**, added via a Higher-Order Component instead of duplicating card logic
- **Search and Top Rated filtering**, both operating on the list non-destructively
- **Restaurant menu with a single-open accordion** — opening one category collapses the rest
- **Cart management with Redux Toolkit**, reflected live in the header badge and cart page, including an empty-cart state
- **Code-split Grocery route**, lazy-loaded into its own bundle
- **About page with a live GitHub profile**, fetched and rendered from the GitHub API
- **Real online/offline detection**, shown as a live status dot beside the username
- **Custom hooks** isolating data-fetching and side-effect logic from UI components
- **Contact form validated with Formik + Yup**, with inline per-field errors
- **Animated splash screen** on first load, built with Framer Motion
- **Component tests** with React Testing Library, covering key components and user interactions

---

## 🛠️ Tech Stack

| Category            | Technology                                       |
|----------------------|---------------------------------------------------|
| Library              | React 18                                          |
| Bundler              | Parcel 2                                          |
| Routing              | React Router (v7) — `createBrowserRouter`         |
| State Management     | Redux Toolkit (`cartSlice`, `appSlice`), Context API |
| Forms & Validation   | Formik + Yup                                      |
| Styling              | Tailwind CSS v4 (`@tailwindcss/postcss`)          |
| Animation            | Framer Motion                                     |
| Icons                | lucide-react                                      |
| Testing              | Jest, React Testing Library                       |
| Data Sources         | Namastedev restaurant/menu APIs, GitHub REST API  |

---

## 🔍 Notable Implementation Details

- **HOC over prop-drilling.** The promoted-card label is added by wrapping the base card in a Higher-Order Component rather than branching inside it — the base card stays unaware that promotion exists.
- **Redux for shared state, Context for the rest.** Cart state is frequently updated and read across routes, so it lives in Redux Toolkit; the logged-in username is simple top-down data, so it's passed via Context.
- **Route-based code splitting.** Less-visited routes are lazy-loaded, keeping them out of the initial bundle until a user actually navigates there.
- **A deliberate class component.** One page intentionally uses a class component with `componentDidMount` to exercise the classic lifecycle alongside the rest of the app's hooks-based code.
- **Build-time image inlining.** Logo assets are inlined as base64 at build time, shipping with the JS bundle instead of as separate network requests.

---

## 🚀 Getting Started

Try it live at **[food-hour.netlify.app](https://food-hour.netlify.app)** — no setup needed.

To run it locally instead:

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- npm

### Installation

```bash
git clone https://github.com/<your-username>/food-hour.git
cd food-hour
npm install
```

### Run Locally

```bash
npm start
```

The app runs at `http://localhost:1234` (Parcel's default dev server).

---

## 📜 Available Scripts

| Script          | Description                              |
|------------------|--------------------------------------------|
| `npm start`      | Runs the app in development mode via Parcel |
| `npm run build`  | Builds the app for production               |
| `npm test`       | Runs the Jest / React Testing Library suite |

---

## 🧪 Testing

Tests are written with **React Testing Library** on top of **Jest**, covering:

- `Header` — login/logout button toggle and cart item count rendering
- `RestroCard` — rendering restaurant info from mock data
- `Contact` — form renders and the heading is present

```bash
npm test
```

---

## 📁 Folder Structure

```
food-hour/
├── src/
│   ├── components/
│   │   ├── Body.js               # Restaurant listing, search, top-rated filter
│   │   ├── RestroCard.js         # Card UI + withPromotedHighOrderComp HOC
│   │   ├── RestaurantMenu.js     # Menu page shell
│   │   ├── RestaurantCategory.js # Accordion menu + add-to-cart
│   │   ├── Cart.js               # Cart page (Redux-driven)
│   │   ├── About.js              # GitHub profile (class component)
│   │   ├── Contact.js            # Formik + Yup contact form
│   │   ├── Grocery.js            # Lazy-loaded route
│   │   ├── Header.js             # Nav, cart badge, online status
│   │   ├── Loading.js            # Framer Motion splash screen
│   │   ├── ShimmerCards.js       # Loading placeholder UI
│   │   ├── Error.js              # Router error boundary
│   │   └── tests/                # React Testing Library test suite
│   ├── utils/
│   │   ├── appStore.js           # Redux Toolkit store
│   │   ├── slices/
│   │   │   ├── cartSlice.js      # addItem / removeItem / clearItems
│   │   │   └── appSlice.js       # showLoading toggle
│   │   ├── UserContext.js        # Context API for logged-in user
│   │   ├── useOnlineStatus.js    # Custom hook: online/offline
│   │   ├── useRestaurantMenu.js  # Custom hook: menu fetch by id
│   │   └── constants.js          # API URLs, inlined logo assets
│   ├── mocks/                    # Mock data for tests
│   └── app.js                    # Router config + root render
├── package.json
└── README.md
```

---

## 👤 Author

**Bharat**
- GitHub: [@144bharat](https://github.com/144bharat)

---

### ⭐ If you found this project interesting, consider giving it a star on GitHub!