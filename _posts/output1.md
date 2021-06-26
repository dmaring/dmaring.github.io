![](https://miro.medium.com/max/4000/1*TVzmg84fncajRjQIW_c2-A.jpeg)

What happens when you type holbertonschool.com in your browser and press Enter
==============================================================================

[![Drew Maring](https://miro.medium.com/fit/c/56/56/1*dmbNkD5D-u45r44go_cf0g.png)](https://medium.com/@andrew.maring?source=post_page-----d157044b9dd8--------------------------------)[

Drew Maring

](https://medium.com/@andrew.maring?source=post_page-----d157044b9dd8--------------------------------)[

Aug 26, 2019·5 min read

](https://medium.com/@andrew.maring/what-happens-when-you-type-holbertonschool-com-in-your-browser-and-press-enter-d157044b9dd8?source=post_page-----d157044b9dd8--------------------------------)

The internet is truly an amazing conglomeration of technologies, software, and entities working together (somewhat) seamlessly. We often take it for granted what happens when we pick up our smart phones and check the weather or the latest news. In this blog post we will discuss what really happens when you type a url in the address bar. We’ll discuss the technologies and entities involved to get you those coveted bits of information to your screen.

The Request and DNS
===================

After you press enter after typing holbertonschool.com a chain of communications is kicked off. First and foremost, we must find out how to get to the server that houses the resources we want to procure. In this case holbertonschool.com is are target destination. However, what is “holbertonschool.com”? Well, it’s a name of a domain that was registered with **Internet Corporation for Assigned Names and Numbers (**[**ICANN**](https://en.wikipedia.org/wiki/ICANN)**).** A domain name functions like an entry in the phone book. In case of a phone book, we look up names of people to find their address and phone number. This allows us to not have to remember numbers and streets but have a reference to that information by means of an individuals name. In the case of DNS, we know the domain name (and sometimes subdomain like www) of the site that we want to visit. The browser requests to our local machine to do a DNS lookup via the computers DNS resolver. The DNS resolver contacts our locally configured DNS server (usually belonging to our ISP or set manually by the user) to match up the domain with an IP address. The IP address is analogous to the phone number in our phone book analogy.

TCP/IP
======

So you may be wondering what we do with this IP address that we obtained by making a request through our browser. The internet is made up of millions of tinier networks located all around the world. IP addressing is the schema that is used to address, locate, and deliver data (IP packets) from one network to another.

On top of IP there are transport protocols (aka layer 4 protocols) that define how the communications should take place. Transmission Control Protocol (TCP) is defined as a connection oriented protocol. This means that the connection between the two entities communicating will complete a handshake to identify each other and communicate back and forth information simultaneously making sure that each side has received all information correctly.

Alternatively, the User Datagram Protocol (UDP) is a connectionless protocol. This means that in a UDP connection, the information being sent back and forth between the entities is not acknowledged or error checked. This is important for realtime traffic situations like when you are having a Voice over IP (VoIP) call or doing a video chat.

Firewall
========

Throughout the route from us contacting the holbertonschool.com site there are various switches, routers, and security devices. One such security device is a Firewall. A Firewall exists to filter traffic from flowing in either the outgoing or incoming direction. It allows entities to protect themselves from exposing points of entry where malicious users could enter their networks and do harm. Firewalls can be placed anywhere between the connection from point A to point B on the internet. However, they are usually placed at the boundary of a network or security zone. Firewalls also exist on computers and devices with an operating system. This allows for a form of defense locally.

HTTPS/SSL
=========

Connecting to our site through [https://www.holbertonschool.com](https://www.holbertonschool.com) we use the HTTPS protocol. HTTPS is a secure form of HTTP. HTTP traffic does not inherently protect the information being sent between a client and server. HTTPS does this through means of encryption and SSL. Secure Socket Layer and the newer Transport Security Layer are the protocols used on top of HTTP to deliver this security. They are in charge of setting up and encrypting data from the client to the server. An SSL/TLS certificate is registered for a site using HTTPS. This certificate is like a passport or social security number. It is an identification that uniquely belongs to an entity and can be varified by a trusted third party.

Load-balancer
=============

Load balancers help with the balance of traffic on route from the source requester (us) to the destination (the servers housing [https://www.holbertonschool.com).](https://www.holbertonschool.com).) Most often they are located in a data center sitting in front of servers housing multiple instances of a resource. In this case the load balancer is sitting in front of multiple servers each serving the [www.holbertonschool.com](http://www.holbertonschool.com) website. The load balancer directs incoming requests for clients like us to the various backend servers available. There are various methods to load balance traffic via round robin, utilization of the servers, incoming source addresses, amongst others.

Web server
==========

On our journey to retrieve [https://www.holbertonschool.com](https://www.holbertonschool.com) we have finally reached the web server. The web server is the entity that clients directly communicate with to retrieve information. In this case we will be strictly communicating with the web server as a client. The web server in turn will serve information to us. It will request information to complete our request from the application server which holds the business logic for many web applications. The web server will ask the application serve what it should serve and then present that information back to us.

Application server
==================

The application server houses the business logic of [https://www.holbertonschool.com.](https://www.holbertonschool.com.) The web server front end receives the request for information from us, the client. The web server is only tasked with figuring out how to display that information to the user. What to display to the user is handled by the application server. The application server receives requests for information from the web server front end, runs logic to get that information, and sends it back to the Web Server front end.

Database
========

The Database is the source of truth of information for the entire web app. The application server is usually the only entity the interacts directly with the database. The database will hold things such as user information, product information, class information, etc. Reference information that is needed to support the application is housed here.

In our route to navigate to [https://www.holbertonschool.com](https://www.holbertonschool.com) we have touched on some of the high level entities involved in completing or request. This is by no means an exhaustive description of all of the other things that are happening with things like the Document Object Model rendering of the browser, the actual routing of the IP packets, or the software that makes up the application stack. Those items require a deeper dive and I encourage you to investigate them for a better understanding of the full process.