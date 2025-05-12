
import { createOllama } from 'ollama-ai-provider';
import {  streamText } from 'ai';

const ollama = createOllama({
  baseURL: 'http://localhost:11434/',
});

  
export async function POST(req: Request) {
    const { messages } = await req.json();
  
    const result = streamText({
      model: ollama('phi:latest'),
      messages,
    });
  
    return result.toDataStreamResponse();
  }