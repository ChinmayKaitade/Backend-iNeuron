# NodeJS Architecture 🚀🔥

## List of content:

1. Architecture of NodeJS
2. Working of NodeJS
3. Components of NodeJS
4. Advantages

### NodeJS

- Opensource
- JavaScript Runtime Environment
- Event Driven
- Working on Blocking and Non-Blocking I/O Module
- NodeJS build on JavaScript and C/C++ (file systems, images, pdf, network calls, etc.)
- Used in Realtime Application
- Used in Single Page Application (SPA)
- IOT Applications
- Used in Data Streaming Applications
- The architecture of NodeJS comprises two main concepts: Asynchronous model that resembles the event-based approach of JavaScript, and Non-blocking I/O opearations.

### Components:

NodeJS architecture consists of several components that works together to handle incoming client requests and process responses. These components are:

1. Requests
2. NodeJS Server
3. Event Queue
4. Event Loop
5. Thread Pool
6. External Resources

### Working:

1. Incoming client requests received by NodeJS, which can be either simple (non-blocking) or complex (blocking), depending on the task to be performed.

2. Querying for specific data involves searching for particular data in a database.

3. Deleting data involves sending a request to delete specific data or performing a deleting query.

4. Updating data involves sending a request to change or update a set of data or performing an updating query on particular row of tables to update a specific entry in the database.

5. NodeJS adds incoming client requests to its event queue.

6. The event loop in NodeJS proccesses the requests one by ine and checks whether external resources are regular request are allocated with external resources. otherwise, they move on to the next step.

7. Non-blocking (simple) requests are processed in the event loop, such as I/O polling, and responses are respective clients.

### Advantages of NodeJS:

- Its asynchronous model and non-blocking I/O operations improve the scalability and performance of web applications built on other frameworks.
- NodeJS can be easily handle multiple client requests without requiring multiple threads, consuming less memory and resources.
- NodeJS is also flexible with multiple frameworks and makes the development proccess easier.
