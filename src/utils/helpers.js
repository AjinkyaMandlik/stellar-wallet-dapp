export const shortenAddress = (address) => {
  if (!address) return '';
  return `${address.slice(0, 8)}...${address.slice(-8)}`;
};
