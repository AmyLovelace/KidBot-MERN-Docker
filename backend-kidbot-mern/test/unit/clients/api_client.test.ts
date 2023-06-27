import axios from 'axios';
import nock from 'nock';
import OpenAIApiClient from '../../../src/clients/openapi.client';
import sinon from 'sinon';

// Mockear el módulo 'axios' para simular respuestas de la API
jest.mock('axios');

describe('OpenAIApiClient', () => {
  let openAIApiClient: OpenAIApiClient;

  beforeEach(() => {
    openAIApiClient = new OpenAIApiClient();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should generate a story successfully', async () => {
    const storyPrompt = 'Once upon a time';
    const expectedStoryText = 'Once upon a time, there was a';

    const mockResponse = {
      data: {
        choices: [
          {
            text: expectedStoryText,
          },
        ],
      },
    };

    // Mockear la función 'post' de axios para devolver la respuesta simulada
    (axios.post as jest.Mock).mockResolvedValue(mockResponse);

    // Llamar al método que se va a probar
    const storyText = await openAIApiClient.generateStory(storyPrompt);

    // Verificar si el resultado obtenido coincide con el texto esperado
    expect(storyText).toBe(expectedStoryText);
  });

  it('should throw an error when generating a story', async () => {
    const storyPrompt = 'Once upon a time';

    const mockError = new Error('API error');
    
    // Mockear la función 'post' de axios para devolver un error simulado
    (axios.post as jest.Mock).mockRejectedValue(mockError);

    // Llamar al método que se va a probar y capturar el error resultante
    const resultError = await openAIApiClient.generateStory(storyPrompt);

    // Verificar si el mensaje de error coincide con el esperado
    expect(resultError.message).toBe('Error al generar la historia');
  });
});
