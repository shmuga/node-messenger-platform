#Facebook Messenger Platform

Node Facebook Messanger Platform adapter built with promises.   
Write your best chat bot using best async techology!

##Installation
```
npm install -S node-messenger-platform
```

##Usage

There are two types of usage this node module:

```javascript
  const FBPlatform = require('node-messanger-platform')
  
  // stateless usage
  FBPlatform.send(token, {id: '123'}, {text: 'hello'})
  FBPlatform.sendImage(token, recipient, message, notificationType)
  
  // or statefull usage
  const Bot = FBPlatform.Bot(token)
  Bot.send(recipient, message, notificationType)
```

##API Reference

* [FBPlatform](#TelegramBot)
    * .Bot
      * [new Bot(token)](#FBPlatform_bot)  ⇒ <code>Object</code>
    * [.send(token, recipient, message, [notificationType])](#FBPlatform+send) ⇒ <code>Promise</code>
    * [.sendImage(token, recipient, url, [notificationType])](#FBPlatform+sendImage) ⇒ <code>Promise</code>
  
<a name="FBPlatform_bot"></a>
###Bot

Statefull class for fb messanger platform usage. Stores token in object.

### new Bot(token)
Creates an instance of FBPlatform bot using token. 

<a name="FBPlatform+send"></a>
### .send(token, recipient, message, [notificationType])

Sending message using token to recipient. 

**Returns**: <code>Promise</code>   
**See**: https://developers.facebook.com/docs/messenger-platform/send-api-reference#request   


| Param | Type | Description |
| --- | --- | --- |
| token  | <code>String</code> | Facebook Messanger Platform token. |
| recipient | <code>Object</code> | Recipient object with `id` or `phone_number` fields |
| message | <code>Object</code> | Any message object from documentation. `message` is required property |
| [notificationType] | <code>String</code> | Notification type. Default `REGULAR` |

<a name="FBPlatform+sendImage"></a>
### .sendImage(token, recipient, url, [notificationType])

Sending images using token to recipient. 

**Returns**: <code>Promise</code>   
**See**: https://developers.facebook.com/docs/messenger-platform/send-api-reference#request   


| Param | Type | Description |
| --- | --- | --- |
| token  | <code>String</code> | Facebook Messanger Platform token. |
| recipient | <code>Object</code> | Recipient object with `id` or `phone_number` fields |
| url | <code>String</code> | Image url that you want to send. |
| [notificationType] | <code>String</code> | Notification type. Default `REGULAR` |
