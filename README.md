# Level 1 - White Belt Stellar dApp

This repository contains my submission for the **Level 1 - White Belt** Stellar development program. It is a fully functional decentralized application (dApp) built on the Stellar Testnet using React and Vite.

## 🚀 Features & Technical Requirements Met
The dApp successfully implements the core fundamentals of Stellar development:
1. **Wallet Setup & Connection:** Securely integrates the `@stellar/freighter-api` to connect to and interface with the Freighter browser extension natively.
2. **Disconnect Functionality:** Safely clears application state and public key scopes.
3. **Balance Handling:** Utilizes `@stellar/stellar-sdk` alongside Horizon to query and render the user's live XLM (native) balance.
4. **Transaction Flow:** Constructs, signs, and executes cross-wallet testnet XLM payments.
5. **Real-Time Feedback:** Gracefully handles block validation, outputting a success dialogue with a direct link to the Stellar Expert block explorer!
6. **Premium Aesthetics:** Features a fully custom glassmorphic dark-mode UI with dynamic interactive components.

## 📂 Architecture Overview
The monolithic React app was successfully refactored into a scalable component-driven architecture:
- `src/services/walletService.js` — Decoupled logic handling Freighter wallet auth prompts.
- `src/services/stellarService.js` — Dedicated backend wrapper communicating directly with Horizon APIs.
- `src/components/` — Individual, highly cohesive React UI modules.

## 💻 Running the App Locally

### Prerequisites
- Node.js installed on your machine.
- Freighter Wallet extension installed in your browser and switched to the **Testnet**.

### Installation
1. Clone this repository:
```bash
git clone <your-repository-url>
cd <your-repository-folder>
```

2. Install the necessary dependencies:
```bash
npm install
```

3. Boot up the Vite development server:
```bash
npm run dev
```

4. Go to `http://localhost:5173` in your browser. Connect Freighter and start testing!

## 🛠 Tech Stack
- Frontend: `React.js` (Vite)
- Stellar Integration: `@stellar/freighter-api`, `@stellar/stellar-sdk`
- Styling: Custom Vanilla CSS (`styles.css`) + `lucide-react` icons
