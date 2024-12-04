import { Injectable } from '@angular/core';
import { GenerativeModel, GoogleGenerativeAI } from '@google/generative-ai';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class GeminiGoogleAiService {
      readonly #gemAI: GoogleGenerativeAI = new GoogleGenerativeAI(
        environment.googleAiKey
      );

      async AskGemini(question: string): Promise<string>{
        const model: GenerativeModel = this.#gemAI.getGenerativeModel({
          model: 'gemini-1.5-flash',
        })

        const response = await model.generateContent(question);
        console.log(response);
        return response.response.text();
      }
}
