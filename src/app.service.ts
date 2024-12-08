import { BadRequestException, Injectable } from '@nestjs/common';
import { chatSession } from './config/ai-model';
import { prompt } from './utils/prompt';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async genProsidic(sentence: string) {
    const fullPrompt = prompt(sentence);
    const result = await chatSession.sendMessage(fullPrompt);
    const output = result.response.text();
    // console.log(output);
    const startIndex = output.indexOf('{');
    const endIndex = output.lastIndexOf('}') + 1;

    if (startIndex !== -1 && endIndex !== -1) {
      const jsonString = output.substring(startIndex, endIndex);

      try {
        const parsedData = JSON.parse(jsonString);
        return parsedData;
      } catch (error) {
        console.error('Invalid JSON:', error);
        throw new BadRequestException();
      }
    } else {
      console.error('No valid JSON found.');
      throw new BadRequestException();
    }
  }
}
