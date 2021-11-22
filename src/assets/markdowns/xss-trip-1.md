# Finding my First Live XSS Bug

I am currently taking a class called Web Security. Really cool stuff. I decided to use my 
newfound knowledge to look for real XSS vulnerabilities on the internet. Not gonna lie, I 
initially had some trouble finding a vulnerable website, but it's great that I cannot find
vulnerabilities so easily. Websites are more secure, and we can give malicious hackers a big
🖕. 

Still, I continued to search. After all, code injection is #3 on the OWASP top 10, so there
has to be something for me to find. I decided to refine my search to online forums. They are 
filled with user generated content, and they are complicated projects to manage; there are many 
components on these sites, so it's not unreasonable for a team to miss a bug occasionally (which 
is why you should do defense in depth). So, off I went, and I found a moderately active website. 
I only tested the search functionality (instead of things like making a post) because I wanted 
to keep the testing's impact limited to myself. I tried the classic 
"&lt;script&gt;alert(document.cookie)&lt;\script&gt;." It did not work because the website 
stripped the angle brackets when it reflected my search query. However, I looked at the 
source, and I saw that "&lt;script&gt;" (using the actual angle bracket) was present in the 
title portion of the page!

I broke out of the title context by searching for "&lt;/title&gt;" and then inserted my own script. 
I found the vulnerability and submitted a bug report to the site maintainers.

Make sure to sanitize the title too! 