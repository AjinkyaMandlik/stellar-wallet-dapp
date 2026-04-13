import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

const SendTransaction = ({ onSend, loading, error, txHash }) => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSend(recipient.trim(), amount);
  };

  return (
    <>
      <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '2rem 0' }} />

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Recipient Address</label>
          <input 
            type="text" 
            className="input-field" 
            placeholder="G..." 
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            disabled={loading}
            required 
          />
        </div>

        <div className="form-group">
          <label>Amount (XLM)</label>
          <input 
            type="number" 
            step="0.0000001" 
            className="input-field" 
            placeholder="0.0" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            disabled={loading}
            required 
          />
        </div>

        <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1em' }} disabled={loading}>
          {loading ? (
            <>Processing...</>
          ) : (
            <><Send size={18} /> Send XLM</>
          )}
        </button>
      </form>

      {error && (
        <div className="alert alert-error">
          <AlertCircle size={20} style={{ flexShrink: 0 }} />
          <span>{error}</span>
        </div>
      )}

      {txHash && (
        <div className="alert alert-success">
          <CheckCircle2 size={20} style={{ flexShrink: 0 }} />
          <div>
            <strong>Transaction Successful!</strong>
            <div style={{ marginTop: '0.5em', fontSize: '0.9em' }}>
              <a 
                href={`https://stellar.expert/explorer/testnet/tx/${txHash}`} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'inherit' }}
              >
                View on Explorer &rarr;
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SendTransaction;
