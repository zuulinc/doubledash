# doubledash

Double Dash is simple utility library meant to help transition people off of jQuery.

# Installation

`npm install doubledash`

# Categories

We orginiaze our functions into categories: 

* lang
* dom
* event
* template

# Usage

`import __ from 'doubledash';`

# Namespace structure

The name space is broken down by the library, category and function name.

`{library}.{category}.{function}`

eg.
`__.dom.parents(element, target)`
__      = library
dom     = category
parents = function


## after (aka extend)

The after() function inserts specified element after the selected target.

```js
__.dom.parents.after(element, target);
```

## append

The append() function inserts specified element at the end of the selected target.

```js
__.dom.parents.after(element, target);
```

## before

The before() function inserts specified element in front of (before) the selected target.

```js
__.dom.parents.before(element, target);
```