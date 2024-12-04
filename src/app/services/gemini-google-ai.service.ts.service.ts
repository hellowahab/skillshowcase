import { Injectable } from '@angular/core';
import { GoogleGenerativeAI ,GenerativeModel } from '@google/generative-ai';
import { envionment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeminiGoogleAiService {

  readonly #genAI: GoogleGenerativeAI = new GoogleGenerativeAI(
    envionment.googleAiKey
  );

  async askGemini(question: string): Promise<string> {
    const model: GenerativeModel = this.#genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
    });
    const response = await model.generateContent(question);
    console.log(response.response.text());
    return response.response.text();
  } 
  
}
