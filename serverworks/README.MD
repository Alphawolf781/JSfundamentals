### How does the web work ? 
The web works through a series of interactions between clients (like web browser) and the servers using a set of protocols.  

1. Client-Server Architecture 
the web operates on a client-server model 
- client : typically a browser (chrome, brave, firefox, safari) : that requests resources or services(web services : API's) from the server
- Server : the server provides the resources or services to the clients. it hosts websites, applications, and databases 

2. Web Protocols 
- HTTP/HTTPS : the foundation of any data exchange on the web is via HTTP 
- TCP/IP : fundamental protocols that dictate how data is transmitted over the internet 

3. Request - Response Cycle 
Client will make a request to the server , the server will in turn give a response according to the resource/service requested over the defined protocol 

A typical request from a client will then contain the following 
- Request method : ( GET, POST, UPDATE, DELETE ) (URL addresses)

4. Rendering of the page 
- From the response from the server , the browser will then render the content 
- DOM to represent our response in the format of interactiveness 
- HTML , CSS , JS 

5. DNS (Domain Name System)
- browser needs to find the servers ip address which is associated with the domain name 

6. Caching and cookies. 


### RESPONSE FROM THE SERVER 
#### JSON 
Javascript Object Notation : this is a lightweight data interchange format thats easy for humans to write , and esy for machines to parse and generate. We often use it to transmit data between a server and a web application

JSON object 
{
  "name": "Alice",
  "age": 30,
  "isStudent": false,
  "skills": ["JavaScript", "React", "Node.js"],
  "address": {
    "street": "123 Main St",
    "city": "Wonderland"
  }
}

JSON array 
{
    [
        {

        },
        {

        },
    ]
}

client <-> middleware <-> server

### Methods availed in Javascript for communication with the server 
1. XMLHttpRequest (XHR)
2. Fetch API
3. AJAX (asynchronous javascript and xml)
4. Websockets (live chats)

### Fetch API 
Used to make http/https types of requests from clients 
request -> returns a promise(making it easier to work with asynchronous operations)

In JS we have two types of operations 
1. Synchronous Operations : execution happens in a sequential manner where when a sync. operation is executed the program waits for it to complete before moving on to the next operation 
2. Asynchronous Operations : operations do not block the program's execution , these operations allow the program to continue executing other tasks while the asynchronous operation is being processed. 


### Promises 
This is a concept to represent how we handle asynchronous operations. A promise normally works within three stages 
1. Pending stage : The initial state , neither fulfilled or rejected 
2. Fulfilled stage : the operation is completed successful 
3. Rejected stage : the operation failed. 

### 
to mimic a server in JS we use a node package called json-server.
#### install json-server globally 
npm install -g json-server

1. In the terminal, ensure you are at the directory location where your .json file is 
2. run json server using the command : json-server --watch db.json 
                                       json-server db.json