declare class RSAKey{
  n :any;
  e :any;
  d :any;
  p :any;
  q :any;
  dmp1 :any;
  dmq1 :any;
  coeff :any;
}

declare var cryptico: {
  /**
   * 初始化RSA Key
   * @param passphrase
   * @param bitlength
   * Generates an RSA key from a passphrase.
   */
  generateRSAKey(passphrase, bitlength);
  /**
   * 生成公钥
   * @param rsakey rsa密钥
   *  Returns the ascii-armored version of the public key
   */
  publicKeyString(rsakey): RSAKey;
  /**
   * 加密
   * @param plaintext 明文
   * @param publickeystring 公钥
   * @param signingkey 签名key
   */
  encrypt(plaintext, publickeystring, signingkey?): { status, cipher };
  /**
   * 解密
   * @param ciphertext 密文
   * @param key 钥匙
   */
  decrypt(ciphertext, key): { status, plaintext, signature, publicKeyString};

  // Returns an MD5 sum of a publicKeyString for easier identification.
  publicKeyID(publicKeyString: string);
};
