var crypticoTest = function () {
    function print(string) {
        document.write(string + "<p>");
    }
    print("<h1>未签名:</h1>");
    var PassPhrase = "The Moon is a Harsh Mistress.";
    var Bits = 512;
    print("Matt's 口令: " + PassPhrase);
    print("Bit 长度: " + Bits);
    var MattsRSAkey = cryptico.generateRSAKey(PassPhrase, Bits);
    var MattsPublicKeyString = cryptico.publicKeyString(MattsRSAkey);
    print("Matt's 公钥:");
    print(MattsPublicKeyString);
    var PlainText = "Matt, I need you to help me with my Starcraft strategy.";
    print("Sam's 消息: " + PlainText);
    var EncryptionResult = cryptico.encrypt(PlainText, MattsPublicKeyString);
    print("密文:");
    print(EncryptionResult.cipher);
    var DecryptionResult = cryptico.decrypt(EncryptionResult.cipher, MattsRSAkey);
    print("译文： message:");
    print(DecryptionResult.plaintext);
    print("签名：: " + DecryptionResult.signature);
    print("<h1>签名，完好签名:</h1>");
    var PassPhrase = "There Ain't No Such Thing As A Free Lunch.";
    var Bits = 512;
    var SamsRSAkey = cryptico.generateRSAKey(PassPhrase, Bits);
    var PlainText = "Matt, I need you to help me with my Starcraft strategy.";
    var EncryptionResult = cryptico.encrypt(PlainText, MattsPublicKeyString, SamsRSAkey);
    print("Sam's 公钥 ID: " + cryptico.publicKeyID(cryptico.publicKeyString(SamsRSAkey)));
    print("密文:");
    print(EncryptionResult.cipher);
    var DecryptionResult = cryptico.decrypt(EncryptionResult.cipher, MattsRSAkey);
    print("译文:");
    print(DecryptionResult.plaintext);
    print("DecryptionResult.signature（签名）: " + DecryptionResult.signature);
    print("公钥:");
    print(DecryptionResult.publicKeyString);
    print("公钥 ID:");
    print(cryptico.publicKeyID(DecryptionResult.publicKeyString));
    print("<h1>签名, 伪造签名:</h1>");
    EncryptionResult.cipher = "FrD9P9pbSuCpaMExcHI/6WHbrOgLlIWWegHrWRLN027+DekkaVzumh8QbCS7\n\
6BZJpfQ0H0b/pEvPCnE9RNqFFQ==?h7W8J7KrqDd7TCDlOolSUPwRNxoJYoQ\n\
o7h62SDsfLTfKcdzi6DUTfEq7DgsIKIZd8nYYrDmn3F1utFlgVja2mXSD7FY\n\
RRNvYbmpmu3WBozG77hyFup3IlEQeOkKLBk9G1uEYGcrXiIktJiYBvn8ltVP\n\
Qdo6cViIkwYjEdNoCIanYsSO+YB20EyuKfDj0p62QW9sAVx8jeQmY+f7cvWj\n\
/3evPfZ2D3gaXXT+QY2mu+0ap8P89rPFmrlMgMVFRye4FEWHSkSiKtrddt1y\n\
DZoMxwxFytKA2QciN7MHgZRZ16kcO1KjpPlb9jSXDbzllCWDhigN+kvBog4L\n\
GvhTe0CEn5HKGpWx1+TGbC7pim6/KOFo34DScLOrclUNGl0VY8W+/+EBXhin\n\
dthvRRcjy+0BRn4tDpC4QJjdJoXCqDmT3NRU=";
    print("密文:");
    print(EncryptionResult.cipher);
    var DecryptionResult = cryptico.decrypt(EncryptionResult.cipher, MattsRSAkey);
    print("译文:");
    print(DecryptionResult.plaintext);
    print("DecryptionResult.signature（签名）: " + DecryptionResult.signature);
    print("公钥：");
    print(DecryptionResult.publicKeyString);
    print("公钥 ID:");
    print(cryptico.publicKeyID(DecryptionResult.publicKeyString));
};
