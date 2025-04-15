// lib/appwrite.js
import { Client, Account } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // ODER dein Selfhost
  .setProject("6755b8a200280489136a"); // ← deine Drive-Projekt-ID

const account = new Account(client);

export { account };
