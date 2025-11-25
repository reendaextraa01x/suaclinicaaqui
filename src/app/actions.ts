// @/app/actions.ts
'use server';

import {
  suggestServices,
  type SuggestServicesInput,
} from '@/ai/flows/service-recommendations-from-image';

export type FormState = {
  success: boolean;
  message: string;
};

export async function getServiceSuggestion(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const photo = formData.get('photoDataUri');

  if (!photo || typeof photo !== 'string') {
    return { success: false, message: 'Por favor, carregue uma imagem.' };
  }

  try {
    const input: SuggestServicesInput = {
      photoDataUri: photo,
    };
    const result = await suggestServices(input);
    return {
      success: true,
      message: `Nossa sugestão para você é: ${result.serviceSuggestion}`,
    };
  } catch (error) {
    console.error('Falha na sugestão da IA:', error);
    return {
      success: false,
      message: 'Ocorreu um erro. Por favor, tente novamente mais tarde.',
    };
  }
}
