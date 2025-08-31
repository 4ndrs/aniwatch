import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://graphql.anilist.co", // public endpoint
  documents: "app/**/*.graphql",
  generates: {
    "app/gql/": {
      preset: "client", // emits typed gql + hooks/helpers
      plugins: [],
    },
    "app/gql/sdk.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: { rawRequest: false },
    },
  },
};

export default config;
