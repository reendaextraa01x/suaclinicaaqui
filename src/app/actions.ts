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
    return { success: false, message: 'Please upload an image.' };
  }

  try {
    const input: SuggestServicesInput = {
      photoDataUri: photo,
    };
    const result = await suggestServices(input);
    return {
      success: true,
      message: `We suggest: ${result.serviceSuggestion}`,
    };
  } catch (error) {
    console.error('AI suggestion failed:', error);
    return {
      success: false,
      message: 'An error occurred. Please try again later.',
    };
  }
}
