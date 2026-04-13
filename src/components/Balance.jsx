import { shortenAddress } from '../utils/helpers';

const Balance = ({ pubKey, balance, loading }) => {
  return (
    <>
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ fontSize: '0.9em', color: 'rgba(255,255,255,0.5)', marginBottom: '0.5em' }}>
          Wallet Address
        </div>
        <div className="wallet-address">
          {shortenAddress(pubKey)}
        </div>
      </div>

      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '0.9em', color: 'rgba(255,255,255,0.5)', marginBottom: '0.5em' }}>
          Available Balance
        </div>
        <div className="balance-display">
          <span className="balance-amount">{loading ? '...' : parseFloat(balance).toFixed(4)}</span>
          <span className="balance-currency">XLM</span>
        </div>
      </div>
    </>
  );
};

export default Balance;
