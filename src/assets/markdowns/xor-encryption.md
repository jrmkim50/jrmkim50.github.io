# XOR Encryption

XOR Encryption is covered in level 11 of NATAS wargames. The big topic here is XOR encryption. The  
level works like this: when you log onto the website, it checks a cookie. The cookie contains two  
pieces of information: a boolean on whether to show a password and the hex background color of the  
site. The cookie is generated with this process: 

1. Get a secret key and the stringified data object.
2. Create encrypted text by xor'ing each character with the key (which repeats until the end of  
the) string.
3. base64 encode the encrypted text and save it as a cookie.

The key to getting the website to show the password is to modify the cookie to encode an object  
where the password boolean is true. To generate this cookie, we need to figure out the secret key.  
To find the secret key, we need to realize that if c = a ^ b, then a = b ^ c and b = a ^ c. 

We can get the key with this piece of PHP:

    function xor_decrypt($text, $cookie2) {
        $key = '';
        $cookie = base64_decode($cookie2);
        for ($i=0;$i<strlen($text);$i++) {
            $key .= $text[$i] ^ $cookie[$i % strlen($cookie)];
        }
        return $key;
    }

We work with the base64 decoded version of the cookie because the original encryption process  
produces a non-base64 encoded string. We loop through the stringified data object (the text  
variable) and create the key by xor'ing each data character with the cookie character. The key  
will be repeated many times within the returned value. We take this key, and then we encrypt our  
own stringified data object. Then, we turn on developer tools to modify the cookie. When we reload  
the page, we will see the cookie!