# Tapestry API TypeScript Definitions

TypeScript definitions for the [Tapestry API](https://github.com/TheIconfactory/Tapestry/blob/main/Documentation/API.md), providing [IntelliSense](https://code.visualstudio.com/docs/editor/intellisense) support (code completion and inline documentation) for developers building connectors in [VS Code](https://code.visualstudio.com).

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

## Resources

- [Tapestry](https://usetapestry.com/)
- [API Documentation](https://github.com/TheIconfactory/Tapestry/blob/main/Documentation/API.md)

## License

MIT