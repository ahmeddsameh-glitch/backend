# middleware 
- make changes to the request or the response
- Types:
  - Application level
  - Router level
  - Error-handling
  - Built-in
  - Third-party
# uses 
- parsing json --> Body(JS object)
- app.METHOD
Request - Response cycle
[client] --> [middleware] --[next]--> [route(app.method)] --> [response]
if didnt pass go the response directly 
# how to use 
- ordinary : `(request,response,next) ==> {}`
- error :`(error,request,response,next) ==> {}`