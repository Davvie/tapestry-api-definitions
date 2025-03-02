# Tapestry API TypeScript Definitions

TypeScript definitions for the [Tapestry API](https://github.com/TheIconfactory/Tapestry/blob/main/Documentation/API.md), providing [IntelliSense](https://code.visualstudio.com/docs/editor/intellisense) support (code completion and inline documentation) for developers building connectors in [VS Code](https://code.visualstudio.com), [BBEdit](https://barebones.com/products/bbedit/) and other editors.

![Demo of IntelliSense support in action](images/demo.gif)

## What is Tapestry?

[Tapestry](https://usetapestry.com/) is an amazing app by [The Iconfactory](https://iconfactory.com) that combines posts from multiple services (Bluesky, Mastodon, RSS feeds, etc.) in a unified chronological timeline.

## Usage

1. Copy [this file](tapestry.d.ts) to a preferred location

2. Reference it at the top of `plugin.js`:

```javascript
/// <reference path="/path/to/tapestry.d.ts" />
```

3. Enjoy!

## Editor Support

### Visual Studio Code
VS Code supports TypeScript definitions out of the box, so no additional setup is required.

### BBEdit
The TypeScript definitions also work in [BBEdit](https://barebones.com/products/bbedit/) with minimal setup:

1. Install the TypeScript language server:
```bash
npm install -g typescript
npm install -g typescript-language-server
```

2. BBEdit is preconfigured by default to use this language server, so no additional configuration is needed.

For an enhanced experience, you can set the language of your file to TypeScript (while keeping the `.js` file extension). This enables additional features like error detection for missing required parameters in function calls.

These commands can be accessed through the Edit menu:
* Complete
* Show Symbol Help
* Show Parameter Help (providing assistance for filling in function parameters at the current insertion point)

## Resources

- [Tapestry](https://usetapestry.com/)
- [API Documentation](https://github.com/TheIconfactory/Tapestry/blob/main/Documentation/API.md)

## License

MIT