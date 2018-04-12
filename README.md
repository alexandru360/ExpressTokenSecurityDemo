# ExpressTokenSecurityDemo
###### Demo proving how to renew the security token with Express

1. npm start

2. in Postman create a request with: **http://localhost:3000/** and add headder **X-Auth-Token:test**

3. Make request and click the Header tab to see how the response header regenerates on avery request (Look for: **X-Auth-Token**)

