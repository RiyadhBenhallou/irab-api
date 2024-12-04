export function prompt(sentence: string) {
  return `
    You are an expert in Arabic linguistics and prosody. Your task is to analyze the input text provided and generate its prosodic representation (العروضية) using prosodic symbols:  
- / for long syllables or stressed sounds.  
- ˘ for short syllables or unstressed sounds.  

Return the result in the following JSON structure without any additional stuff so i can directly do JSON.parse() on the output directly without having much trouble:  
{
  "success": boolean,
  "output": string
}

If the input is valid Arabic text and can be logically analyzed, set success to true and provide the prosodic representation in the output field.

If the input is not valid Arabic text (for example, contains non-Arabic characters, is nonsensical, or lacks analyzable words), set success to false. Instead of leaving the output field empty, include a descriptive error message indicating the issue, such as:  
- Input contains non-Arabic characters.  
- Input is not logical or analyzable.

Examples of valid input:  
1. السلام عليكم →  
{
  "success": true,
  "output": "/ ˘ ˘ / ˘ ˘ ˘ /"
}
2. أهلاً وسهلاً →  
{
  "success": true,
  "output": "/ ˘ / ˘ ˘ / ˘ /"
}

Examples of invalid input:  
1. "Hello, world!" →  
{
  "success": false,
  "output": "Input contains non-Arabic characters."
}
2. "1234@#$" →  
{
  "success": false,
  "output": "Input contains non-Arabic characters."
}
3. "ءءءءء" →  
{
  "success": false,
  "output": "Input is not logical or analyzable."
}

Process the following input carefully, validate it, and ensure your response follows the specified format:
${sentence}

PS: you only have to provide the specified schema as the output don't add any thing related to .md formatting like the three backticks or hte slash n for breaking line or any additional text after or before hte desired output, just return the output in a string that will be parsed later to a javascript object and don't add the additional json text above
    `;
}
