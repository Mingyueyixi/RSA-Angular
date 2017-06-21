import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: 'jsencrypt.html'
})

export class JsEncryptComponent implements OnInit {
  publicKey: string;
  cipherText;
  constructor() {
  }

  ngOnInit() {
    // crypticoTest();// 调用crypticoTest.js测试代码。
    this.publicKey=`MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArWx6cnfc+Ugdu7CW5CtC
    OeecZqBCUooQDvHxixCxMh5Tyjg1HTkAHW99Wu9Owo4mZ4L+Cj/wpQYDToyUNXGq
    +OvvhnHSH50xc9fStMqu4SizbnLKr0j6DWWsONYK9Vst1ilBcrikZHBQ882qgETr
    3M0ipvAJg6+4tXv5Pza/a4W+n+JmYfRZDgcldoHDj4COOeZZNP8RD41BZx0kAWr9
    Mxt37xoujBnQiRlWV0Zzpy7DbnVE6TQhS2QT6w2Cjt0EF9Kw6BcIBxFYddlSaN2L
    h7HVRuVnVVrjC2RUUaQmmKQd9m7H5VHDoYHArcJjWVMYrcrgYlBkIlBwUx/YjhNz
    /wIDAQAB`;
  }

  encryptClick(inputValue: string){
    let jsEncrypt :JSEncrypt= new JSEncrypt();
    jsEncrypt.setPublicKey(this.publicKey);
    this.cipherText =jsEncrypt.encrypt(inputValue);

    console.log(this.cipherText);
  }
}
