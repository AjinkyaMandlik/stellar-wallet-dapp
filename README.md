# 🚀 Stellar Wallet dApp – White Belt

This repository contains my submission for **Level 1 – White Belt Stellar Development Program**.
It is a fully functional decentralized application (dApp) built on the **Stellar Testnet** using React and Vite.

---

## 🌐 Live Demo

👉 https://stellar-wallet-dapp-aj.netlify.app

---

## 🎯 Objective

To build a simple and functional Stellar dApp that allows users to:

* Connect their Freighter wallet
* View XLM balance
* Send XLM transactions on Stellar Testnet

---

## 🚀 Features

### 🔗 Wallet Integration

* Connect Freighter wallet using `@stellar/freighter-api`
* Securely fetch public key
* Disconnect wallet functionality

### 💰 Balance Handling

* Fetch real-time XLM balance using Stellar Horizon API
* Display balance clearly in UI

### 💸 Transaction Flow

* Send XLM to another wallet on testnet
* Build and sign transactions using Stellar SDK

### ✅ Real-Time Feedback

* Display transaction success/failure
* Show transaction hash
* Provide link to Stellar Expert explorer

### 🎨 UI/UX

* Clean and responsive interface
* Dark mode with glassmorphism design
* Interactive components for better user experience

---

## 📂 Project Structure

```
stellar-wallet-dapp/
│
├── src/
│   ├── components/
│   │   ├── WalletConnect.jsx
│   │   ├── Balance.jsx
│   │   ├── SendTransaction.jsx
│   │   └── Navbar.jsx
│   │
│   ├── services/
│   │   ├── walletService.js
│   │   ├── stellarService.js
│   │
│   ├── utils/
│   │   └── helpers.js
│   │
│   ├── App.jsx
│   ├── index.jsx
│   └── styles.css
│
├── public/
├── package.json
└── README.md
```

---

## 📸 Screenshots

### 🔗 Wallet Connection
![Wallet](./screenshots/wallet.png)

### 💰 Balance Display
![Balance](./screenshots/balance.png)

### 💸 Transaction Success
![Transaction](./screenshots/transaction.png)

---

## ⚠️ Error Handling

* Handles wallet not installed
* Handles user rejection during connection
* Handles transaction failures
* Displays user-friendly error messages

---

## 🧪 Testnet Info

* Network: Stellar Testnet
* Fund your wallet using Friendbot: https://friendbot.stellar.org

---

## 💻 Running the App Locally

### Prerequisites

* Node.js installed
* Freighter Wallet extension installed
* Freighter set to **Testnet**

### Installation

```bash
git clone https://github.com/AjinkyaMandlik/stellar-wallet-dapp.git
cd stellar-wallet-dapp
npm install
npm run dev
```

Open in browser:
👉 http://localhost:5173

---

## 🛠 Tech Stack

* **Frontend:** React.js (Vite)
* **Blockchain:** Stellar Testnet
* **Wallet:** Freighter
* **SDK:** `@stellar/stellar-sdk`
* **API:** `@stellar/freighter-api`
* **Styling:** Custom Vanilla CSS + `lucide-react`

---

## 📦 Deliverables

* ✅ GitHub Repository
* ✅ Live Deployed App (Netlify)
* ✅ Working Stellar dApp
* ✅ Clean UI + Functional Features

---

## 🙌 Acknowledgement

This project is built as part of the **Stellar White Belt Level 1 Program**, focusing on fundamental blockchain development concepts.

---

## ⭐ Future Improvements

* Add transaction history
* Add multi-asset support
* Improve UI animations
* Mobile responsiveness enhancements

---

## 📌 Author

**Ajinkya Mandlik**

---

⭐ If you like this project, feel free to star the repository!
