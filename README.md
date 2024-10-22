# random-fresh-plugins

random fresh plugins for your project

## Discord

Provides the basic api needed for embedded discord applications.

```ts
import { DiscordPlugin } from "https://deno.land/x/randplug/discord.ts"

export default defineConfig({
  plugins: [
    DiscordPlugin({
        clientId: "your-client-id",
        clientSecret: "your-client-secret",
    });
  ],
});
```

## CSS Analyzer

Provides a css analyzer for your project using [css-analyzer](https://github.com/projectwallace/css-analyzer) from projectwallace.

api route: `/api/analyze-css` returns a json array of all the files analyzed.

```ts
import { CSSAnalyzerPlugin } from "https://deno.land/x/randplug/css-analyzer.ts"

export default defineConfig({
  plugins: [
    CSSAnalyzerPlugin(
      Deno.readTextFileSync("path/to/your/css/file.css"), 
      Deno.readTextFileSync("path/to/your/css/file2.css"),
      Deno.readTextFileSync("path/to/your/css/file3.css"),
      );
  ],
});
```
