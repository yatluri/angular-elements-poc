const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files_es_2015 = [
    './dist/customElements/runtime-es2015.js',
    './dist/customElements/polyfills-es2015.js',
    './dist/customElements/main-es2015.js'
  ];
  const files_es_5 = [
    './dist/customElements/runtime-es5.js',
    './dist/customElements/polyfills-es5.js',
    './dist/customElements/main-es5.js'
  ];
  await fs.ensureDir('elements');
  await concat(files_es_2015, 'elements/es_2015.js');
  await concat(files_es_5, 'elements/es_5.js');
  await fs.copy('./dist/customElements/styles.css', 'elements/styles.css');
  await fs.copy('./dist/customElements/scripts.js', 'elements/scripts.js');
})();
