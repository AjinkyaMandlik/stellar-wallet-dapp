import { isAllowed, setAllowed, getAddress, signTransaction } from '@stellar/freighter-api';

export const connectFreighter = async () => {
  try {
    const { isAllowed: allowed } = await isAllowed();
    if (!allowed) {
      const { isAllowed: nowAllowed } = await setAllowed();
      if (!nowAllowed) {
        throw new Error("Connection perfectly denied or failed.");
      }
    }
    
    const { address, error } = await getAddress();
    if (error) {
      throw new Error(error);
    }
    return address;
  } catch (err) {
    throw new Error(err.message || "Failed to connect wallet via Freighter.");
  }
};

export const signWithFreighter = async (xdr) => {
  try {
    const signedResult = await signTransaction(xdr, { 
      networkPassphrase: "Test SDF Network ; September 2015",
      network: "TESTNET" 
    });
    if (signedResult.error) {
      throw new Error(signedResult.error);
    }
    return signedResult.signedTxXdr;
  } catch (err) {
    throw new Error(err.message || "User rejected signature or signing failed.");
  }
};
