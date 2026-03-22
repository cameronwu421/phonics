const path = require('path');

module.exports = {
  // Point to the hoisted react-native in the monorepo root node_modules.
  // In an npm workspaces monorepo, react-native is hoisted to the root,
  // so the Android CMake build needs to know where to find it.
  reactNativePath: path.resolve(__dirname, '../../node_modules/react-native'),
};
