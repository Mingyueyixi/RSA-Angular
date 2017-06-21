import {Component} from '@angular/core';
import {Base64} from "../../../app/common/base64_utility";

@Component({
  moduleId: module.id,
  templateUrl: 'cryptico.html'
})

export class CrypticoComponent{
  public publicKey;
  public passPhrase;
  public decryptResult: string;
  public encryptResult: string;
  private bitLenght: number;
  constructor() {
    // crypticoTest();// 调用crypticoTest.js测试代码。
  }

  /**
   * cryptico.js 的测试
   */
  generateClick(passPhrase:string,bitLenghtStr:string){
    if(passPhrase === "" || bitLenghtStr === ""){
      alert("未输入");
      return;
    }
    if (!bitLenghtStr.trim().match('[0-9].*')){
      alert("不是一个有效长度");
      return;
    }
    this.bitLenght = Number.parseInt(bitLenghtStr);
    // cryptico.d.ts
    let RSAkey = cryptico.generateRSAKey(passPhrase,this.bitLenght);//构造rsakey
    let publicKey = cryptico.publicKeyString(RSAkey);//生成公钥
    this.publicKey = publicKey;
  }
  encryptClick(contentText: string){
    //对字符串进行加密
    let content = Base64.encode(contentText.trim());
    console.log(content);
    let encryptResult = cryptico.encrypt(content,this.publicKey);//指定公钥，可因口令不同而解密失败
    console.log('加密结果：',encryptResult);// 加密状态码和密文
    this.encryptResult = encryptResult.cipher;
  }
  /**
   * @param ciphertext 密文
   * @param dencryptPhrase 解密所需口令
   */
  dencryptClick(ciphertext,dencryptPhrase){
    if (ciphertext === ""){
      return ;
    }
    let RSAkey = cryptico.generateRSAKey(dencryptPhrase,this.bitLenght);//构造rsakey
    //通过口令的RsaKey解密
    let decryptResult = cryptico.decrypt(ciphertext,RSAkey);
    let plaintext = Base64.decode(decryptResult.plaintext);
    this.decryptResult = "状态："+decryptResult.status+"  明文："+plaintext+"  签名："+decryptResult.signature+"  公钥："+decryptResult.publicKeyString;
    console.log("解密结果：",decryptResult);

  }

}
