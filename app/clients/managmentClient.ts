import { ManagementClient } from "@kontent-ai/management-sdk";

export const client = new ManagementClient({
  environmentId: process.env.KONTENT_ENVIRONMENT_ID,
  apiKey: process.env.KONTENT_MANAGMENT_API_KEY || "",
});
