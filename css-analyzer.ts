// deno-lint-ignore-file no-explicit-any
import { analyze } from "npm:@projectwallace/css-analyzer";
import type { Plugin } from "$fresh/server.ts";

export function CSSAnalyzerPlugin(...sources: string[]): Plugin {
  return {
    name: "CSS Analyzer",
    routes: [
      {
        path: "/api/analyze-css",
        handler: () => {
          const results: any[] = [];
          for (const source of sources) {
            results.push(analyze(source));
          }
          return new Response(JSON.stringify(results), {
            headers: {
              "Content-Type": "application/json",
            },
          });
        },
      },
    ],
  };
}
