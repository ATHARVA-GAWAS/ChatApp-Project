// chat.controller.ts
import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';

@Controller('chat')
export class AppController {
  @Post()
  async handleMessage(@Body('userMessage') userMessage: string): Promise<{ response: string }> {
    try {
      // Simple response algorithm (dummy implementation)
      let response = '';

      // Check for keywords in the user's message
      if (userMessage.toLowerCase().includes('hello')) {
        response = 'Hi there!';
      } else if (userMessage.includes('how are you')) {
        response = 'I am just a computer program, but thanks for asking!';
      } 
      else if (userMessage.toLowerCase().includes('tell me about yourself')) {
        response = 'I am an chatbot, here for your help, How an I help you?';
      } 
      else if (userMessage.toLowerCase().includes('hi')) {
        response = 'Hello, How are you?';
      } 
      else if (userMessage.toLowerCase().includes('bye')) {
        response = 'Goodbye!';
      } else {
        response = 'I do not understand.';
      }

      return { response };
    } catch (error) {
      console.error('Error while processing user message:', error);
      // Log the error and throw a standardized HTTP exception
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

