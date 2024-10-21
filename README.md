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
