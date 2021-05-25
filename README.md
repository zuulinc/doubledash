# Double Dash

Double Dash is simple utility library meant to help transition people off of jQuery.

## Installation

`npm install doubledash`

## Categories

We orginiaze our functions into categories: 

* lang
* dom
* event
* template

## Usage

`import __ from 'doubledash';`

## Namespace structure

The name space is broken down by the library, category and function name.

```js
{library}.{category}.{function}
```

eg.\
```js
__.dom.parents(element, target)
```

library  = __  
category = dom  
function = parents  

### after

The `after()` function inserts the specified `element` after the specified `target`.

```js
__.dom.after(element, target);
```

### append

The `append()` function inserts the specified `element` at the end of the specified `target`.

```js
__.dom.after(element, target);
```

### before

The `before()` function inserts the specified `element` in front of (before) the specified `target`.

```js
__.dom.before(element, target);
```

### children

The `children()` function returns all direct children of the specified `element`. Optional a `selector` can be added to narrow down your returned results.

```js
__.dom.children(element, selector);
```

### clone

The `clone()` function makes a copy of the specified `element`, including child nodes, text and attributes.

```js
__.dom.clone(element);
```

### create

The `create()` function creates the HTML element specified by the `tag`. Optional `attributes` and `text` can be added.

```js
__.dom.create(tag, attributes, text);
```

### index

The `index()` function returns the index position of the specified `element` relative to the element siblings.

```js
__.dom.index(element);
```

### empty

The `empty()` function removes all child nodes and content from the specified `element`.

```js
__.dom.empty(element);
```

### find

The `find()` function allow you to select and manipulate HTML elements. Optional element to start your search on, by default it uses the entire document. 

Selectors are used to "find" (or select) HTML elements based on their name, id, classes, types, attributes, values of attributes and much more. It's based on the existing CSS Selectors.

```js
__.dom.find(selector, element);
```

### findOne

The `findOne()` function is similar to `find()` but will only return a single element. Optional element to start your search on, by default it uses the entire document. 

Selectors are used to "find" (or select) HTML elements based on their name, id, classes, types, attributes, values of attributes and much more. It's based on the existing CSS Selectors.

```js
__.dom.findOne(selector, element);
```

### next

The `next()` function returns the next sibling element of the specified `element`. Optionally a `selector` can be added to be more specific. 

Sibling elements are elements that share the same parent.

```js
__.dom.next(element, selector);
```

### parents

The `parents()` function returns all ancestor elements of the specified `element`. Optionally add a `selector` to match elements against.

An ancestor is a parent, grandparent, great-grandparent, and so on. 

```js
__.dom.parents(element, selector);
```

### prepend

The `prepend()` function inserts the specified `element` at the beginning of the specified `target`.

```js
__.dom.prepend(element, target);
```

### prev

The `prev()` function returns the previous sibling element of the specified `element`.  Optionally a `selector` can be added to be more specific. 

Sibling elements are elements that share the same parent.

```js
__.dom.prev(element, selector);
```

### remove

The `remove()` function removes the specified `element` and its child elements.

```js
__.dom.remove(element);
```

### siblings

The `siblings()` function returns all sibling elements of the specified `element`.

Sibling elements are elements that share the same parent.

```js
__.dom.siblings(element);
```
