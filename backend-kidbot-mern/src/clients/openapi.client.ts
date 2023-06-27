import axios from 'axios';

export default class OpenAIApiClient {

  private apiKey: string = process.env.OPENAI_API_KEY || '';
  private endpoint: string = process.env.OPENAI_ENDPOINT || '';

  async generateStory(storyPrompt: string): Promise<any> {
    const requestBody = {
      model: 'text-davinci-003',
      prompt: storyPrompt,
      max_tokens: 2046,
      temperature: 0
    };

    const headersConfig = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.apiKey}`,
      },
    };

    try {
      const response = await axios.post(this.endpoint, requestBody, headersConfig);
      const responseBody = response.data;
      const storyText = responseBody.choices[0].text;
      return storyText;
    } catch (error) {
      return new Error('Error al generar la historia');
    }
  }
}
