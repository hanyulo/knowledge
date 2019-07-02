# Cross Site Request Forgery (Sea Surf, CSRF)
* Not serious than XSS, since CSRF only allows for __state changes__ to occur and therefore cannot cater attacks that require the attacker receiving the contents of the HTTP response.
* a malicious entity tricks a victim into performing actions on behalf of the attacker.
* The impact of attack depends on the level of permissions that victim being exploited has.
* Only be effective when victim is authenticated. (Victim has been logged in).
* Not useful for public data.
* Only steal data from victims who has additional privilege.


## Overview
1. Trick user click on malicious links.
2. Send crafted request to victim's browser. (Control victim's browser ??)
3. Victim's browser will send legitimate request to web app on hacker's behave.
 * The request will be sent with the values that the attacker wants, including any Cookies that the victim has associated with that website.
4. Since any request will carry the cookie, the web application will see user in login-in status. Now hacker can post/get any data he want by controlling user's account through CSRF

## Example
### CSRF on GET
1. Send malicious link to user through social engineering (say an image)
```html
<!-- say the target web application process transaction through get request, the parameters are amount of money and who you transfer to respectively -->
http://example.com/transfer?amount=1000000&account=hacker
```
2. When user click on the img (in login status), victim's browser will send request to web app and do the transaction.

### CSRF on POST
1. Trick victim to click on any thing to load page from hacker's server
```html
<body onload="document.csrf.submit()">

<form action="http://example.com/transfer" method="POST" name="csrf">
	<input type="hidden" name="amount" value="1000000">
	<input type="hidden" name="account" value="Fred">
</form>

```
2. As soon as the hacker's page loaded, the form will send POST request to the exploited web.

#### Note
* Hacker can also use iframe to reach the goal
 1. Put an invisible iframe in hacker's web app.
 2. onLoad(() => { // load the iframe }).
 3. iframe send the post request.



## Prevent CSRF
### CSRF Token
Using CSRF tokens. How do CSRF tokens work?

1. Real bank Server sends the client a complicated token each time the user surf the website.
2. Client submits a form with the complicated token.
3. The server rejects the request if the token is invalid.

An attacker would have to somehow get the CSRF token from your site, and they would have to use JavaScript to do so. Thus, if your site does not support CORS, then there's no way for the attacker to get the CSRF token, eliminating the threat.

### Same Site Cookies
When user surf on hackers.com and once the page loaded the call back function initiate CSRF attack. It send the cookies and request on behave of the user to third party website (bank website). Because the browser will include the cookie automatically for the request origin. Same Site Cookies can prevent it.

```js
Set-Cookie: CookieName=CookieValue; SameSite=Lax;
Set-Cookie: CookieName=CookieValue; SameSite=Strict;

```
#### Strict
* When the SameSite attribute is set as Strict, the cookie will not be sent along with requests initiated by third party websites.

* bad for browsing experience
  1. link to facebook profile page on your own website
  2. facebook.com set its cookie as SameSite=Strict
  3. user click on the link and navigate to the profile page but be redirected to home page. User has to login in again.
  4. The reason is hat facebook's cookie was not sent by the request.

#### Lex
* Only accept top-level navigation get request's cookie.
 * Say user surf the hacker's page and click on fake image <img src="back.com?to=hackers&amount=10000">
 * Since the bank website set SameSite=Lax, the cookie will not be sent or accepted by the bank website since the browser do no do top-level navigation(change url)
 * this can block malicious iframe, img, script tag suceessfully.

### CORS
* Say hacker forge a request set the header withCredential
  * The server can check the origin first.
  * the origin is not same as the origin like Access-Control-Allow-Origin -> server do not set the Access-Control-Allow-Credentials -> browser will not send the cookie (in the browser) to the server.



## Refs
[Acunetix](https://www.acunetix.com/websitesecurity/csrf-attacks/)
[Solution](https://github.com/pillarjs/understanding-csrf)
[Same site cookies](https://www.netsparker.com/blog/web-security/same-site-cookie-attribute-prevent-cross-site-request-forgery/)
[CSRF Token](https://stackoverflow.com/questions/5207160/what-is-a-csrf-token-what-is-its-importance-and-how-does-it-work)
[Spoofing the ORIGIN](https://stackoverflow.com/questions/21058183/whats-to-stop-malicious-code-from-spoofing-the-origin-header-to-exploit-cors)
[CSRF - TechBridge](https://blog.techbridge.cc/2017/02/25/csrf-introduction/)
