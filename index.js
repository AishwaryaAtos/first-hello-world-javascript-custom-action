const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `number_1 and number_2` input defined in action metadata file
  const num_1 = core.getInput('number_1');
  console.log(`First number ${num_1}!`);
  const num_2 = core.getInput('number_2');
  console.log(`Second number ${num_2}!`);
  const add = num_1 + num_2
  console.log(`Addition of two numbers ${add}!`);
  core.setOutput("sum", add);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}