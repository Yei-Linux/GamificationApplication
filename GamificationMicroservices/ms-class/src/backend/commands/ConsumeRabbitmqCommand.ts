import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class ConsumerRabbitmqaCommand {
  constructor() { }

  @EventPattern('message_test')
  async handleMessagePrinted(data: Record<string, unknown>) {
    console.log(data.text);
  }
}