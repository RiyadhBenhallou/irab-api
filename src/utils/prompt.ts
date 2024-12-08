export function prompt(sentence) {
  return `
    You are an expert in Arabic linguistics. Your task is to analyze the input Arabic text and provide a detailed I'rab (إعراب) grammatical analysis for each word.

Return the result in the following JSON structure:
{
  "success": boolean,
  "output": {
    "word": string,
    "irab": string
  }[]
}

If the input is valid Arabic text and can be grammatically analyzed:
- Set success to true
- Provide a detailed I'rab analysis for each word
- Include the original word and its grammatical role/case
- Don't analyze special characters and punctuation marks

If the input is not valid Arabic text, set success to false with an error message:
- If contains non-Arabic characters: "Input contains non-Arabic characters."
- If not logically analyzable: "Input is not logical or grammatically analyzable."

Examples of valid input analysis:
1. "قَامَ الطَّالِبُ" →  
{
  "success": true,
  "output": [
    {"word": "قَامَ", "irab": "فعل ماضٍ مبني على الفتح"},
    {"word": "الطَّالِبُ", "irab": "فاعل مرفوع وعلامة رفعه الضمة الظاهرة"}
  ]
}

Process the following input carefully, ensuring a precise grammatical analysis:
${sentence}

Provide a comprehensive grammatical breakdown focusing on the syntactical role of each word.
    `;
}
