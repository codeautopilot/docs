const path = require('path');
const fs = require('fs');

// Verify @docusaurus/core is installed
const docusaurusCorePath = path.resolve(__dirname, 'node_modules', '@docusaurus', 'core');
if (!fs.existsSync(docusaurusCorePath)) {
  throw new Error('@docusaurus/core is not installed in node_modules');
}

module.exports = {
  presets: [require.resolve('@docusaurus/core/lib/babel/preset')],
  env: {
    development: {
      presets: [
        // Add any development-specific presets here
      ],
      plugins: [
        // Add any development-specific plugins here
      ],
    },
    production: {
      presets: [
        // Add any production-specific presets here
      ],
      plugins: [
        // Add any production-specific plugins here
      ],
    },
  },
};