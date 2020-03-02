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
  await fs.ensureDir('../custom-elements-testing/elements');
  await concat(files_es_2015, '../custom-elements-testing/elements/es_2015.js');
  await concat(files_es_5, '../custom-elements-testing/elements/es_5.js');
  await fs.copy('./dist/customElements/styles.css', '../custom-elements-testing/elements/styles.css');
  await fs.copy('./dist/customElements/scripts.js', '../custom-elements-testing/elements/scripts.js');
})();
