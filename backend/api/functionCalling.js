const express = require('express');
const OpenAI = require("openai");
const bodyParser = require('body-parser'); // add this line

const app = express();
const port = 3000;

const openai = new OpenAI({apiKey: "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"});

app.use(bodyParser.json()); // add this line to parse JSON body

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.post('/generate-recipe', async (req, res) => {
  try {
    // You would get these from the request body, ensuring they are properly validated
    const { ingredients, mealType, goals } = req.body;

    // Call your conversation function here
    const conversationResult = await runConversation(ingredients, mealType, goals);

    // Send the result back to the client
    res.json(conversationResult);
  } catch (error) {
    console.error('Error during conversation:', error);
    res.status(500).send('An error occurred while generating the recipe: ' + error);
  }
});

function generateRecipe(ingredients, steps, nutrition) {
  // Your logic for generating a recipe
  // This should return a string or a structure that can be stringified
  return JSON.stringify({
    recipeName: "Delicious Chicken",
    ingredients: ingredients,
    steps: steps,
    nutrition: nutrition
  });
}

async function runConversation(ingredients, mealType, goals) {
  // Step 1: send the conversation and available functions to the model
  const messages = [
    { role: "user", content: `Generate ONE recipe based on: ingredients: ${ingredients}; 2. meal type: ${mealType}; 3. goal: ${goals}` },
  ];
  const tools = [
    {
      type: "function",
      function: {
        name: "generate_recipe",
        description: "Generate a recipe based on ingredients, style, and fitness goals",
        parameters: {
          type: "object",
          properties: {
            ingredients: { type: "array", type: "string", description: "List of ingredients" },
            steps: { type: "array", type: "string", description: "List of cooking steps" },
            nutrition: { type: "object", properties: {
              calories: { type: "number" },
              macros: { type: "object" },
            }, 
            description: "nutrition overview (calories, macros)" },
          },
          required: ["ingredients", "steps", "nutrition"],
        },
      },
    },
  ];


  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-1106",
    messages: messages,
    tools: tools,
    tool_choice: "auto", // auto is default, but we'll be explicit
  });
  const responseMessage = response.choices[0].message;

  // Step 2: check if the model wanted to call a function
  const toolCalls = responseMessage.tool_calls;
  console.log(responseMessage)
  if (responseMessage.tool_calls) {
    // Step 3: call the function
    // Note: the JSON response may not always be valid; be sure to handle errors
    const availableFunctions = {
      generate_recipe: generateRecipe,
    }; // only one function in this example, but you can have multiple
    messages.push(responseMessage); // extend conversation with assistant's reply
    for (const toolCall of toolCalls) {
      const functionName = toolCall.function.name;
      const functionToCall = availableFunctions[functionName];
      const functionArgs = JSON.parse(toolCall.function.arguments);
      const functionResponse = functionToCall(
        functionArgs.ingredients,
        functionArgs.steps,
        functionArgs.nutrition,
      );
      return functionResponse;
    }
    return null;
  }
}




// function generateRecipe(ingredients, steps, goals) {
//   console.log(ingredients);
//   console.log(style);
//   console.log(goals);
// }

// async function runRecipeConversation(ingredients, style, goals) {
//   const messages = [
//     { role: "user", content: "I have chicken, tomatoes, and cheese. Can you suggest a keto-friendly recipe?" },
//   ];
//   const tools = [
//     {
//       type: "function",
//       function: {
//         name: "generate_recipe",
//         description: "Generate a recipe based on ingredients, style, and fitness goals",
//         parameters: {
//           type: "object",
//           properties: {
//             ingredients: { type: "array", description: "List of ingredients" },
//             style: { type: "string", description: "Food style, e.g., keto, vegan" },
//             goals: { type: "string", description: "Fitness goals, e.g., high-protein" },
//           },
//           required: ["ingredients", style, goals],
//         },
//       },
//     },
//   ];

//   const response = await openai.chat.completions.create({
//     model: "gpt-3.5-turbo-1106",
//     messages: messages,
//     tools: tools,
//     tool_choice: "auto", // auto is default, but we'll be explicit
//   });
//   const responseMessage = response.choices[0].message;

//   // Step 2: check if the model wanted to call a function
//   const toolCalls = responseMessage.tool_calls;
//   if (responseMessage.tool_calls) {
//     // Step 3: call the function
//     // Note: the JSON response may not always be valid; be sure to handle errors
//     const availableFunctions = {
//       get_current_weather: getCurrentWeather,
//     }; // only one function in this example, but you can have multiple
//     messages.push(responseMessage); // extend conversation with assistant's reply
//     for (const toolCall of toolCalls) {
//       const functionName = toolCall.function.name;
//       const functionToCall = availableFunctions[functionName];
//       const functionArgs = JSON.parse(toolCall.function.arguments);
//       const functionResponse = functionToCall(
//         functionArgs.location,
//         functionArgs.unit
//       );
//       messages.push({
//         tool_call_id: toolCall.id,
//         role: "tool",
//         name: functionName,
//         content: functionResponse,
//       }); // extend conversation with function response
//     }
//     const secondResponse = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo-1106",
//       messages: messages,
//     }); // get a new response from the model where it can see the function response
//     return secondResponse.choices;
//   }
// }