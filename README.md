## Structure

This app is broken into different modules. Each module is broken into the following folders:
- assets
    - images
    - fonts
    - strings
    - animations
- components
- containers
- screens
- hooks
- services
- utils

## Debugging

The main debugger used for this application is Flipper with many of its extensions and plugins.

### Install Flipper
```bash
brew install --cask flipper
```

## Troubleshooting

### Environment

Make sure your environment is properly setup to run react native apps. Use the command below and find out what you're missing.
```bash
npx @react-native-community/cli doctor
```

### Eslint With VSCode

ESLint will not lint `.ts` or `.tsx` files in VSCode by default, you need to set your `.vscode/settings.json` like this:

```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```

### Autofix ESLint errors on save

If you want to enable auto-fix-on-save, you need to set your `.vscode/settings.json` like this:

```json
{
  "eslint.validate": ["javascript", "javascriptreact", "vue", "typescript", "typescriptreact"],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
