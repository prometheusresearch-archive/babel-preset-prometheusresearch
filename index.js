module.exports = {
  presets: [
    require.resolve('babel-preset-react-app'),
  ],
  plugins: [
    // Support decorators syntax for a while
    require.resolve('babel-plugin-transform-decorators-legacy'),
    // Support export extensions
    require.resolve('babel-plugin-transform-export-extensions'),
  ],
};
