import { useState, useEffect } from 'react';
import { connectFreighter, signWithFreighter } from './services/walletService';
import { fetchAccountBalance, buildPaymentTransaction, submitSignedTransaction } from './services/stellarService';

import Navbar from './components/Navbar';
import WalletConnect from './components/WalletConnect';
import Balance from './components/Balance';
import SendTransaction from './components/SendTransaction';

function App() {
  const [pubKey, setPubKey] = useState('');
  const [balance, setBalance] = useState('0.0000000');
  const [loading, setLoading] = useState(false);
  
  const [txHash, setTxHash] = useState('');
  const [error, setError] = useState('');

  // Check connection on load
  useEffect(() => {
    const init = async () => {
      try {
        const address = await connectFreighter();
        if (address) {
          setPubKey(address);
          handleFetchBalance(address);
        }
      } catch (err) {
        // Silently fail on init if they haven't connected yet
      }
    };
    init();
  }, []);

  const handleFetchBalance = async (publicKey) => {
    setLoading(true);
    const bal = await fetchAccountBalance(publicKey);
    setBalance(bal);
    setLoading(false);
  };

  const handleConnect = async () => {
    setError('');
    setTxHash('');
    setLoading(true);
    try {
      const address = await connectFreighter();
      if (address) {
        setPubKey(address);
        await handleFetchBalance(address);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDisconnect = () => {
    setPubKey('');
    setBalance('0.0000000');
    setTxHash('');
    setError('');
  };

  const handleSendTransaction = async (recipient, amount) => {
    if (!recipient || !amount || isNaN(amount) || Number(amount) <= 0) {
      setError("Please enter a valid recipient address and amount.");
      return;
    }

    setError('');
    setTxHash('');
    setLoading(true);

    try {
      // 1. Build
      const xdr = await buildPaymentTransaction(pubKey, recipient, amount);
      // 2. Sign
      const signedXdr = await signWithFreighter(xdr);
      // 3. Submit
      const response = await submitSignedTransaction(signedXdr);
      setTxHash(response.hash);
      
      // Update balance
      handleFetchBalance(pubKey);
      
    } catch (err) {
      console.error(err);
      setError(err?.response?.data?.extras?.result_codes?.transaction || err.message || "Transaction failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <Navbar pubKey={pubKey} disconnectWallet={handleDisconnect} />
      
      <div className="card">
        {!pubKey ? (
          <WalletConnect onConnect={handleConnect} loading={loading} />
        ) : (
          <div>
            <Balance pubKey={pubKey} balance={balance} loading={loading} />
            <SendTransaction 
              onSend={handleSendTransaction} 
              loading={loading} 
              error={error} 
              txHash={txHash} 
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
