import openAi from 'openai';
import dotenv from 'dotenv';
dotenv.config();

// import { encoding_for_model } from 'tiktoken';

const client = new openAi({apiKey : process.env.openAIKey});

/*
const response= await client.responses.create({
  instructions: "give result in maximum 10 words",
  input: "BMW",
  model: "gpt-4o-mini"
  // model: "gpt-3.5-turbo",
  // messages: [
  //   { role: "user", content: "Hello world" }
  // ],
}); */

/* calculateTokens
const prompt ='node js backend developer ?';
const model = 'gpt-4o-mini';

const response= await client.responses.create({
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
*/

// Basic Terminal Chat App with OpenAI START

// Initialize conversation content array
  const context = [
    { role: "system", 
      content: "You are a helpful assistant." }
  ]

async function aiAnswer(aiQue) {
  context.push({ role: "user", content: aiQue }); // Append user question to content array
    const response = await client.responses.create({
      model: "gpt-4o-mini",
      input: context
    });
  
    context.push({role: "assistant", content: response.output_text}); // Append AI response to content array
    console.log(context+"\nAI Response:");
  console.log(response.output_text);
}

process.stdout.write("Starting chat...\n");
process.stdin.on('data', async (data) => {
const aiQue = data.toString().trim();
if (aiQue.toLowerCase() === 'exit') {
    process.stdout.write("Exiting chat...\n");
    process.exit();
}

aiAnswer(aiQue)
})



// myChat().then(response => {
//   console.log(response.output_text);
// }).catch(error => {
//   console.error("Error:", error);
// });