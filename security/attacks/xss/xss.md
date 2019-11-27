# Cross Site Scripting (XSS)

## How it works
1. hacker injects malicious script to vulnerable web app
    * into src, DOM, etc. based on different XSS attack
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
1. hacker send malicious email to user
2. user click on image in email
3. redirect user to vulnerable page with malicious script in query string
    * `www.bank.com?page=<img onerror="alert(hack!!)" src="invalid-src">`


### Stored XSS
1. hacker input some malicious script
2. app save those data into server (comment blog)
3. user browse the website and load the malicious script

### DOM-Based XSS





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
