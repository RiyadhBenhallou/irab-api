import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async transformSentence(@Body() body: { sentence: string }) {
    const prosidicWriting = await this.appService.genProsidic(body.sentence);
    return prosidicWriting;
  }
}
