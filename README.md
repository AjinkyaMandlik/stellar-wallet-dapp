# 🚀 Stellar Wallet dApp – White Belt

This repository contains my submission for **Level 1 – White Belt Stellar Development Program**.
It is a fully functional decentralized application (dApp) built on the **Stellar Testnet** using React and Vite.

---

## 🌐 Live Demo

👉 <img width="1347" height="705" alt="Screenshot 2026-04-13 233755" src="https://github.com/user-attachments/assets/5bbcfbc0-20ca-499c-996c-9efd1732bde5" />
<img width="1355" height="724" alt="Screenshot 2026-04-13 233704" src="https://github.com/user-attachments/assets/dbce7e28-b3e4-4131-8290-e65ac03aa699" />
<img width="1358" height="706" alt="Screenshot 2026-04-13 233427" src="https://github.com/user-attachments/assets/60d17a97-8411-4d02-8c92-1e1632884b20" />
<img width="1349" height="715" alt="Screenshot 2026-04-13 233220" src="https://github.com/user-attachments/assets/a51098c1-bd39-4a23-bbb5-fdc7d3ce7351" />
<img width="1357" height="725" alt="Screenshot 2026-04-13 233106" src="https://github.com/user-attachments/assets/333391b8-dc4f-4695-bb8c-4e8f6fc37b97" />
<img width="1355" height="724" alt="Screenshot 2026-04-13 233704" src="https://github.com/user-attachments/assets/2b94112a-8d59-41b3-80e2-8e05283b1630" />
<img width="1358" height="706" alt="Screenshot 2026-04-13 233427" src="https://github.com/user-attachments/assets/b4e61c3b-a867-4cea-a319-c434a27dd9cd" />
<img width="1349" height="715" alt="Screenshot 2026-04-13 233220" src="https://github.com/user-attachments/assets/d7572ab9-01c3-4366-b5f5-d29d3602e03d" />
<img width="1347" height="705" alt="Screenshot 2026-04-13 233755" src="https://github.com/user-attachments/assets/e88c5843-c23b-44d4-b8aa-a07195e4951a" />
https://stellar-wallet-dapp.netlify.app/

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
