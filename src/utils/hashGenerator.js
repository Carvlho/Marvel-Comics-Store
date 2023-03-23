import CryptoJS from "crypto-js";

export const generateTimeStamp = () => Math.floor(new Date() / 1000);

export const md5Hash = (timeStamp, apiPrivateKey, apiPublicKey) => {
  return CryptoJS.MD5(`${timeStamp}${apiPrivateKey}${apiPublicKey}`);
};
