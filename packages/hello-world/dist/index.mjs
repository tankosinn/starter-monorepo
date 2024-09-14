import jiti from "file:///Users/keremmermer/Projects/monorepo-starter/node_modules/.pnpm/jiti@1.21.6/node_modules/jiti/lib/index.js";

/** @type {import("/Users/keremmermer/Projects/monorepo-starter/packages/hello-world/src/index")} */
const _module = jiti(null, {
  "esmResolve": true,
  "interopDefault": true,
  "alias": {
    "hello-world": "/Users/keremmermer/Projects/monorepo-starter/packages/hello-world"
  }
})("/Users/keremmermer/Projects/monorepo-starter/packages/hello-world/src/index.ts");

export const helloWorld = _module.helloWorld;