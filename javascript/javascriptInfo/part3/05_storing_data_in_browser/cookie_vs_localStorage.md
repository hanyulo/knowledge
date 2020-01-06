
|  | localStorage | cookie |
| --- | --- | --- |
| security - XSS | weak | strong |
| size | bigger 5M | smaller 4096 bytes |
| attach to each request | X | V |
| set by server | X | V |
| access by javascript | V | depends |
| client side | V | V (depends)|
| server side | X | V |
| expiration date | X | V |


## cookie
• security
  • httpOnly
  • sameSite
  • secures
