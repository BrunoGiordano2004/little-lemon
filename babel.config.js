module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          extensions: [
            ".ios.ts",
            ".android.ts",
            ".ts",
            ".ios.tsx",
            ".android.tsx",
            ".tsx",
            ".jsx",
            ".js",
            ".json",
          ],
          alias: {
            "@app": "./src",
            "@app/components": "./src/components",
            "@app/redux": "./src/redux",
            "@app-analytics": "./src/analytics",
            "@app-assets": "./src/assets",
            "@app-constants": "./src/constants",
            "@app-navigation": "./src/navigation",
            "@app-screens": "./src/screens",
            "@auth": "./src/auth",
            "@hooks": "./src/hooks",
            "@models": "./src/models",
            "@network": "./src/network",
            "@notifications": "./src/notifications",
            "@storage": "./src/storage",
            "@utils": "./src/utils",
          },
        },
      ],
    ],
  };
};
