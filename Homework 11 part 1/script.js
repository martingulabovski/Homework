let prompts = [
  prompt("Enter your name "),
  prompt("What is your mood today?"),
  prompt("What kind of activity did you do today?"),
];


alert(
`My name is ${prompts[0]}. 
${prompts[0]} is a nice person! 
Today their mood is ${prompts[1]}. 
They were ${prompts[2]} all day.`
);
