# htmled

[![npm version](https://img.shields.io/npm/v/htmled.svg)](https://www.npmjs.com/package/htmled)
[![License](https://img.shields.io/github/license/SH20RAJ/htmled)](https://github.com/SH20RAJ/htmled/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/dt/htmled.svg)](https://www.npmjs.com/package/htmled)
[![GitHub issues](https://img.shields.io/github/issues/SH20RAJ/htmled)](https://github.com/SH20RAJ/htmled/issues)
[![GitHub stars](https://img.shields.io/github/stars/SH20RAJ/htmled)](https://github.com/SH20RAJ/htmled/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/SH20RAJ/htmled)](https://github.com/SH20RAJ/htmled/network)
[![Twitter Follow](https://img.shields.io/twitter/follow/sh20raj.svg?style=social&label=Follow)](https://twitter.com/sh20raj)
[![Visitors](https://api.visitorbadge.io/api/combined?path=https%3A%2F%2Fgithub.com%2FSH20RAJ%2Fhtmled&labelColor=%23ff8a65&countColor=%232ccce4&style=flat)](https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2FSH20RAJ%2Fhtmled)

A simple JavaScript library for encoding and decoding HTML entities.

## Installation

### npm

```bash
npm install htmled
```

### Browser

You can also use `htmled` directly in the browser via jsDelivr:

#### Using Latest Version (Main Branch)

```html
<script src="https://cdn.jsdelivr.net/gh/SH20RAJ/htmled@main/htmled.min.js"></script>
```

#### Using Specific Version (npm Package)

```html
<script src="https://cdn.jsdelivr.net/npm/htmled/htmled.min.js"></script>
```

### Usage

#### CommonJS (Node.js)

```javascript
// Import the Library
const htmled = require('htmled');

// Encode HTML Entities
const encoded = htmled.encode(`This is a <b>sample</b> string with some special characters like <>&'`);
console.log('Encoded HTML:', encoded);

// Decode HTML Entities
const decoded = htmled.decode('This is a &lt;b&gt;sample&lt;/b&gt; string with some special characters like &lt;&gt;&amp;\'');
console.log('Decoded HTML:', decoded);
```

#### Browser (Global)

If you're using `htmled` directly in the browser, it will be available as a global variable `htmled`.

```html
<script src="https://cdn.jsdelivr.net/gh/SH20RAJ/htmled@main/htmled.min.js"></script>
<script>
  // Encode HTML Entities
  const encoded = htmled.encode(`This is a <b>sample</b> string with some special characters like <>&'`);
  console.log('Encoded HTML:', encoded);

  // Decode HTML Entities
  const decoded = htmled.decode('This is a &lt;b&gt;sample&lt;/b&gt; string with some special characters like &lt;&gt;&amp;\'');
  console.log('Decoded HTML:', decoded);
</script>
```
[See Demo]('demo.html')

## API

### `htmled.encode(html)`

- `html`: The HTML string to encode.

Returns the encoded HTML string with HTML entities replaced.

### `htmled.decode(html)`

- `html`: The HTML string to decode.

Returns the decoded HTML string with HTML entities converted back to characters.

## Example

```javascript
const htmled = require('htmled');

// Encode HTML
const encoded = htmled.encode(`<p>This is a <b>bold</b> statement.</p>`);
console.log('Encoded HTML:', encoded);

// Decode HTML
const decoded = htmled.decode('&lt;p&gt;This is a &lt;b&gt;bold&lt;/b&gt; statement.&lt;/p&gt;');
console.log('Decoded HTML:', decoded);
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.