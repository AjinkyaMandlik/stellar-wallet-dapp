import { Wallet } from 'lucide-react';

const WalletConnect = ({ onConnect, loading }) => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem 0' }}>
      <p style={{ marginBottom: '2rem', color: 'rgba(255,255,255,0.7)' }}>
        Connect your Freighter wallet to interact with the Stellar Testnet.
      </p>
      <button className="btn btn-primary" onClick={onConnect} disabled={loading}>
        <Wallet size={18} /> {loading ? 'Connecting...' : 'Connect Freighter'}
      </button>
    </div>
  );
};

export default WalletConnect;
