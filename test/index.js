const htmled = require('../htmled.js');

console.log(htmled);
// Encode HTML
const encoded = htmled.encode(`<p>This is a <b>bold</b> statement.</p>`);
console.log('Encoded HTML:', encoded);

// Decode HTML
const decoded = htmled.decode('&lt;p&gt;This is a &lt;b&gt;bold&lt;/b&gt; statement.&lt;/p&gt;');
console.log('Decoded HTML:', decoded);
