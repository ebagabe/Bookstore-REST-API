## Development of a Rest API with Express and MongoDB

The communication protocol HTTP is based on requests and responses in client-server communication.

Every request-response process using HTTP is always initiated by the client side of the request. The server side of the request never sends a response "actively" to the client side without it being a result of a request.

Parts of the request include:

1. URL, also known as the path or route, always starting with http:// or https://.
    
2. Header, which sends information related to the client or the type of request. Some data sent through headers include:
    
    - Host, the domain of the server that will receive the request.
    - User-agent, identifying the client, such as data from the browser where the request is originating.
    - Content-Type, the format of the data being sent in the request body, for example, JSON, string, etc. Check the complete list of data types and how they should be declared in the header.
    - Authorization, authentication credentials for accessing protected resources.
    - Accept, specifying the expected return format in the response, for example, JSON.
3. Body, where data sent by the client to be received by the server is transmitted. This is typically used for more structured data and in POST, PUT, or PATCH requests. The data type sent in the body should match the one specified in Content-Type, for example, application/json.
    
4. Parameters, inserted into the URL for sending specific data. These are commonly used for sending variable information such as search terms, IDs, etc.
    
5. HTTP method, among those accepted by the route, specifying the type of operation requested by the client. The most common methods are GET, POST, PUT, and DELETE. Further exploration of these methods will be covered in more depth during the course.

The response to an HTTP request is sent by the server side of the communication back to the client side. The response contains information related to the request, which can include a confirmation of the operation, requested data, or relevant error messages in case of a failure in communication.

The parts that can make up the response are:

1. Response status, which includes the HTTP version used, the status code, and the status message. For example, HTTP/1.1 200 OK.
    
2. Headers, providing additional information about the response or the content of the response. For example:
    
    - Content-Type
    - Content-Length, representing the size in bytes of the response body
    - Cache-Control, which includes cache instructions for the response
    - Set-Cookie, which adds a cookie value to the browser. If you want to learn more, check out this article on what cookies are and how they are used.
3. Body, the response body containing the data or content requested by the client through the request and sent by the server. The data format of the body depends on the format specified in Content-Type, for example, JSON.

PUT vs PATCH In the project, the PUT method was used to make changes to a record (the Update part of CRUD). However, there is also the PATCH method, which also updates a record. So, what is the difference between them?

PUT completely replaces the current resource with the new data received in the request. If the previous resource does not exist, it will be created. Despite this, it is not the recommended method for creating new resources; for that, there is the POST method. PATCH partially updates an existing resource. Unlike PUT, which needs to receive a complete resource for a complete replacement, PATCH can receive only the data to be modified, updating only those fields.
