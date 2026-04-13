import { Rocket, LogOut } from 'lucide-react';

const Navbar = ({ pubKey, disconnectWallet }) => {
  return (
    <>
      <div className="logo-container">
        <Rocket className="stellar-logo" color="#20e3b2" />
      </div>
      
      <h1>Stellar Testnet</h1>
      
      <div className="header">
        <div className={`status-badge ${pubKey ? 'status-connected' : 'status-disconnected'}`}>
          {pubKey ? '🟢 Connected' : '🔴 Disconnected'}
        </div>
        {pubKey && (
          <button className="btn btn-danger" onClick={disconnectWallet}>
            <LogOut size={16} /> Disconnect
          </button>
        )}
      </div>
    </>
  );
};

export default Navbar;
