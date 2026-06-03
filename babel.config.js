module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@theme': './lib/theme/',
          "@components":
            "./lib/components/"
          ,
          "@contexts":
            "./lib/contexts/"
          ,
          "@hooks":
            "./lib/hooks/"
          ,
          "@styles": "./lib/styles/",
          "@navigation": "./lib/navigation/",
        },
      },
    ],
  ],
};
