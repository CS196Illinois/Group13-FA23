# RESTful API Research

REST = REpresentational State Transfer

The formal constraints (as defined on wikipedia:

1. Client-server architecture should be separate, such that neither the client or server need know how data is stored or used by the other.
2. All data should be stateless, each API call should give a response that can be understand in isolation, without the need of prior context.
3. All data should be cacheable, but front end has existing options to handle it, not my main issue at the moment.
4. The system should be "layered" in that transfered data can pass thorugh intermediary service without issue.
5. Code on demand is an optional constraint in that code can be transfered to the client to be executed client side.
6. I would rewrite the Wikipedia portion of Uniform interface but I'm just going to copy it here since it's fantastic:
* Resource identification in requests: Individual resources are identified in requests, for example using URIs in RESTful Web services. The resources themselves are conceptually separate from the representations that are returned to the client. For example, the server could send data from its database as HTML, XML or as JSON—none of which are the server's internal representation.
* Resource manipulation through representations: When a client holds a representation of a resource, including any metadata attached, it has enough information to modify or delete the resource's state.
* Self-descriptive messages: Each message includes enough information to describe how to process the message. For example, which parser to invoke can be specified by a media type.
* Hypermedia as the engine of application state (HATEOAS) - Having accessed an initial URI for the REST application—analogous to a human Web user accessing the home page of a website—a REST client should then be able to use server-provided links dynamically to discover all the available resources it needs. As access proceeds, the server responds with text that includes hyperlinks to other resources that are currently available. There is no need for the client to be hard-coded with information regarding the structure of the server.
