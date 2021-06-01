# Animate Functions

:warning: **The animate.css file is requred for all animation functions to work**: Please find the animation file here!

## End Animation Event

All animation functions return a Promise, the Promise is resolved when the animation ends.

```js
 __.animate.bounceOut(element).then(() => {
    console.log('Animation bounceOut done');
});
```
<br>
<br>

## bounce

The `bounce()` function bounces the specified `element` for attention.

The animate.css file is requred for this function to work

```js
__.animate.bounce(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** { duration: 1s, delay: 0, repeat: 1 } (optional, default `{}`)
<br>
<br>

## bounceIn

The `bounceIn()` function bounces in the specified `element`. This function shows hidden elements as a result.

The animate.css file is requred for this function to work

```js
__.animate.bounceIn(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** { direction: down|left|right|up, duration: 1s, delay: 0, repeat: 1 } (optional, default `{}`)
<br>
<br>

## bounceOut

The `bounceOut()` function bounces out the specified `element`. This function hides visible elements as a result.

The animate.css file is requred for this function to work

```js
__.animate.bounceOut(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** { direction: down|left|right|up, duration: 1s, delay: 0, repeat: 1 } (optional, default `{}`)
<br>
<br>

## fadeIn

The `fadeIn()` function fades in the specified `element`. This function shows hidden elements as a result.

The animate.css file is requred for this function to work

```js
__.animate.fadeIn(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** { direction: down|left|right|up|bottomLeft|bottomRight|topLeft|topLeft, duration: 1s, delay: 0, repeat: 1 } (optional, default `{}`)
<br>
<br>

## fadeOut

The `fadeOut()` function fades out the specified `element`. This function hides visible elements as a result.

The animate.css file is requred for this function to work

```js
__.animate.fadeOut(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** { direction: down|left|right|up|bottomLeft|bottomRight|topLeft|topLeft, duration: 1s, delay: 0, repeat: 1 } (optional, default `{}`)
<br>
<br>

## flash

The `flash()` function flashes the specified `element` for attention.

The animate.css file is requred for this function to work

```js
__.animate.flash(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** { duration: 1s, delay: 0, repeat: 1 } (optional, default `{}`)
<br>
<br>

## heartBeat

The `heartBeat()` function pulses like a heartBeat the specified `element` for attention.

The animate.css file is requred for this function to work

```js
__.animate.heartBeat(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** { duration: 1s, delay: 0, repeat: 1 } (optional, default `{}`)
<br>
<br>

## jello

The `jello()` function give a jello like effect of the specified `element` for attention.

The animate.css file is requred for this function to work

```js
__.animate.jello(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** { duration: 1s, delay: 0, repeat: 1 } (optional, default `{}`)
<br>
<br>

## pulse

The `pulse()` function pulses the specified `element` for attention.

The animate.css file is requred for this function to work

```js
__.animate.pulse(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** { duration: 1s, delay: 0, repeat: 1 } (optional, default `{}`)
<br>
<br>

## rotateIn

The `rotateIn()` function rotates in the specified `element`. This function shows hidden elements as a result.

The animate.css file is requred for this function to work

```js
__.animate.rotateIn(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** { direction: downLeft|downRight|upLeft|upLeft, duration: 1s, delay: 0, repeat: 1 } (optional, default `{}`)
<br>
<br>

## rotateOut

The `rotateOut()` function rotates out the specified `element`. This function hides visible elements as a result.

The animate.css file is requred for this function to work

```js
__.animate.rotateOut(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** { direction: downLeft|downRight|upLeft|upLeft, duration: 1s, delay: 0, repeat: 1 } (optional, default `{}`)
<br>
<br>

## rubberBand

The `rubberBand()` function give a rubberBand like effect of the specified `element` for attention.

The animate.css file is requred for this function to work

```js
__.animate.rubberBand(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** { duration: 1s, delay: 0, repeat: 1 } (optional, default `{}`)
<br>
<br>

## shake

The `shake()` function shakes the specified `element` for attention.

The animate.css file is requred for this function to work

```js
__.animate.shake(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** { duration: 1s, delay: 0, repeat: 1 } (optional, default `{}`)
<br>
<br>

## slideIn

The `slideIn()` function slides in the specified `element`. This function shows hidden elements as a result.

The animate.css file is requred for this function to work

```js
__.animate.slideIn(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** { direction: up|down|left|right, duration: 1s, delay: 0, repeat: 1 } (optional, default `{}`)
<br>
<br>

## slideOut

The `slideOut()` function slides out the specified `element`. This function hides visible elements as a result.

The animate.css file is requred for this function to work

```js
__.animate.slideOut(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** { direction: up|down|left|right, duration: 1s, delay: 0, repeat: 1 } (optional, default `{}`)
<br>
<br>

## swing

The `swings()` function swings the specified `element` for attention.

The animate.css file is requred for this function to work

```js
__.animate.swing(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** { duration: 1s, delay: 0, repeat: 1 } (optional, default `{}`)
<br>
<br>

## tada

The `tada()` function gives a magic like effect of the specified `element` for attention.

The animate.css file is requred for this function to work

```js
__.animate.tada(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** { duration: 1s, delay: 0, repeat: 1 } (optional, default `{}`)
<br>
<br>

## wobble

The `wobble()` function wobbles the specified `element` for attention.

The animate.css file is requred for this function to work

```js
__.animate.wobble(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** { duration: 1s, delay: 0, repeat: 1 } (optional, default `{}`)
<br>
<br>

## zoomingIn

The `zoomingIn()` function zooms in the specified `element`. This function shows hidden elements as a result.

The animate.css file is requred for this function to work

```js
__.animate.zoomingIn(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** { direction: up|down|left|right, duration: 1s, delay: 0, repeat: 1 } (optional, default `{}`)
<br>
<br>

## zoomingOut

The `zoomingOut()` function zooms out the specified `element`. This function hides visible elements as a result.

The animate.css file is requred for this function to work

```js
__.animate.zoomingOut(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** { direction: up|down|left|right, duration: 1s, delay: 0, repeat: 1 } (optional, default `{}`)
<br>
<br>

[1]: https://developer.mozilla.org/docs/Web/API/Element

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

