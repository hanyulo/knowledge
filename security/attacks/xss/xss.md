# Cross Site Scripting (XSS)

## How it works
1. hacker injects malicious script to vulnerable web app
    * into src of app such ass database, client-side code, etc. based on different types XSS attack
        1. Stored
        2. Reflected
        3. DOMBased
2. user request data from web app server, and download the HTML and Scripts which include malicious script from hacker
3. user's browser execute the malicious script and hacker get whatever he wants

## Why Dangerous
* malicious script can access following
    1. non-httpOnly-flag cookie
        * sessionId
    2. web storage
        * JWT Token

## XSS Types

### Reflected XSS
* malicious attach on request/response and flow to app
1. hacker send malicious email to user
2. user click on image in email
3. redirect user to vulnerable page with malicious script in query string
    * `www.bank.com?page=<img onerror="alert(hack!!)" src="invalid-src">`


### Stored XSS
* store malicious script in database
1. hacker input some malicious script
2. app save those data into server (comment of blog)
3. user browse the website and load the malicious script

### DOM-Based XSS
* DOM manipulation
1. a todo list app has fllowing code
    ```js
      const elem = document.createElement('div');
      elem.innerHTML = maliciousCode
      document.getElementById('xyz').appendChlid
    ```
2. hacker write malicious code as normal content
3. maclicious code is injected into app through elem.innerHTML



## Solution
* focus on sanitation on client-side code
* don't use dangerouslySetInnerHTML in react on client-side
* escape
    * escape `"` as `&quot`.
    * use encodeURI function

## References



## TO READ
* [DOM-XSS explained - acunetix](https://www.acunetix.com/blog/articles/dom-xss-explained/)
* [XSS - WPHacked](https://secure.wphackedhelp.com/blog/wordpress-xss-attack/)
* [XSS On React](https://stackoverflow.com/questions/33644499/what-does-it-mean-when-they-say-react-is-xss-protected)
* [XSS Cheatsheet](https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet)
* [Reflected XSS](https://security.stackexchange.com/questions/65142/what-is-reflected-xss)
* [Types of XSS](https://www.acunetix.com/websitesecurity/xss/)
* [how to prevent XSS](https://www.acunetix.com/blog/articles/preventing-xss-attacks/)
* [XSS Example](https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet)
