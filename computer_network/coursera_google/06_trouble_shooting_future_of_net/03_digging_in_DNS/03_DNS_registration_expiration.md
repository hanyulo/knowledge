
## Note
* DNS is a global system managed in a tiered hierarchy with ICANN at the top level
* Domain names need to be globally unique
* registrars
  * an organization responsible for assigning individual domain names to other organizations or individuals
  * It was responsible for the registration of almost all domains that weren't country specific



## Registration

* Basically, you create an account with the registrar, use their web UI to search for a domain name to determine if it's still available, then you agree upon a price to pay and the length of your registration.


* Once you own the domain name, you can either have the registrar's name servers act as the authoritative name servers for the domain, or you can configure your own servers to be authoritative.

* Domain names can also be transferred by one party to another and from one registrar to another.
  * The way this usually works is that the recipient registrar will generate a unique string of characters to prove that you own the domain and that you're allowed to transfer it to someone else. You configure your DNS settings to contain the string in a specific record, usually a TXT record. Once this information has propagated, it can be confirmed that you both own the domain and approve its transfer. After that, ownership would move to the new owner or registrar. An important part of domain name registration is that these registrations only exist for a fixed amount of time. You typically pay to register domain names for a certain number of years. It's important to keep on top of when your domain names might expire because once they do, they're up for grabs and anyone else could register them.
