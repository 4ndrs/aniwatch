import { getSdk } from "@/app/gql/sdk";
import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient("https://graphql.anilist.co");

export const sdk = getSdk(client);
