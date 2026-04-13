import { Horizon, TransactionBuilder, Networks, Asset, Operation } from '@stellar/stellar-sdk';

const TESTNET_URL = 'https://horizon-testnet.stellar.org';
export const server = new Horizon.Server(TESTNET_URL);

export const fetchAccountBalance = async (publicKey) => {
  try {
    const account = await server.loadAccount(publicKey);
    const nativeBalance = account.balances.find((b) => b.asset_type === 'native');
    return nativeBalance ? nativeBalance.balance : '0.0000000';
  } catch (err) {
    console.error("Error fetching balance:", err);
    return '0.0000000'; // Assume un-funded
  }
};

export const buildPaymentTransaction = async (sourcePubKey, destination, amount) => {
  const sourceAccount = await server.loadAccount(sourcePubKey);
  
  const transaction = new TransactionBuilder(sourceAccount, {
    fee: "100",
    networkPassphrase: Networks.TESTNET,
  })
  .addOperation(Operation.payment({
    destination: destination,
    asset: Asset.native(),
    amount: String(amount),
  }))
  .setTimeout(30)
  .build();
  
  return transaction.toXDR();
};

export const submitSignedTransaction = async (signedXdr) => {
  const signedTransaction = TransactionBuilder.fromXDR(
    signedXdr,
    Networks.TESTNET
  );
  return await server.submitTransaction(signedTransaction);
};
