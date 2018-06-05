# Server Sent Events
* Real time communication with server.
* single way data flow: Server -> Client in <strong>Real Time</strong>
* Usage cases:
  1. Updated status of Twitter
  2. Current Stock Price Monitor Web App.

## Advantages
* Realtime communication only with HTTP.
* Simple and lighter than WebSockets.
* Reconnection automatically without any intervention.

## Chat Application Structure
1. Ajax to send message.
2. SSE to provide message from your friends.

## How SSE be implemented

Set up header
```js
header = {
  'Content-Type': 'text/event-stream',
  'Cache-Control': 'no-cache',
  'Connection': 'keep-alive'
}

For further information you can check Example at below

```

## Example
[Voting System](https://www.terlici.com/2015/12/04/realtime-node-expressjs-with-sse.html)

## To Read
* WebSockets + tutorial example


## References
[Express App with Server Sent Events - Stefan Fidanov - terlici](https://www.terlici.com/2015/12/04/realtime-node-expressjs-with-sse.html)
