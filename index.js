import openAi from 'openai';
import dotenv from 'dotenv';
dotenv.config();

import { encoding_for_model } from 'tiktoken';

const openai = new openAi({
  apiKey: process.env.openAIKey,
});

/*
const response= await openai.responses.create({
  instructions: "give result in maximum 10 words",
  input: "BMW",
  model: "gpt-4o-mini"
  // model: "gpt-3.5-turbo",
  // messages: [
  //   { role: "user", content: "Hello world" }
  // ],
}); */

const prompt ='node js backend developer ?';
const model = 'gpt-4o-mini';

const response= await openai.responses.create({
  input: [
    // { role: "system", content: "answer in english language" },
    // { role: "developer", content: "give a basic example in nodejs" },
    { role: "user", content: prompt },

  ],
  model: model
});

console.log(response.usage);

function calculateTokens() {
  const encoder= encoding_for_model(model);
  const tokenData= encoder.encode(prompt);
  console.log("Number of tokens used:", tokenData);
}

calculateTokens() 