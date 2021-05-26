# Event Functions

## on

Add an event listener

#### Parameters

*   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 
*   `eventName` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
*   `handler` **[Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** 
<br>
<br>

## on

Add an event listener to a element that is not in the dom yet.

#### Parameters

*   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 
*   `eventName` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
*   `selector` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
*   `handler` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** 
<br>
<br>

## once

Run an event callback exactly once and then automatically remove it. Works the same as the `on()` method.

#### Parameters

*   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 
*   `eventName` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
*   `handler` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)**  
<br>
<br>

## once

Run an event callback exactly once and then automatically remove it. Works the same as the `on()` method.

#### Parameters

*   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 
*   `eventName` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
*   `selector` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
*   `handler` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** 
<br>
<br>

## off

Remove an event listener. All three arguments must be identical to the ones used when setting up the listener.

#### Parameters

*   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 
*   `eventName` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
*   `eventHandler` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** 
<br>
<br>

## trigger

Trigger a native or custom event

#### Parameters

*   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 
*   `eventName` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
*   `args` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

Returns **[Event](https://developer.mozilla.org/docs/Web/API/Event)** 
