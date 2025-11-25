'use client';

import { useState, useRef, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import Image from 'next/image';
import { UploadCloud, WandSparkles, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getServiceSuggestion, type FormState } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full font-bold bg-primary text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_15px_hsl(var(--primary))]">
      {pending ? (
        <>
          <WandSparkles className="mr-2 h-4 w-4 animate-spin" />
          Analisando...
        </>
      ) : (
        <>
          <WandSparkles className="mr-2 h-4 w-4" />
          Obter Sugestão
        </>
      )}
    </Button>
  );
}

export function AiRecommender() {
  const initialState: FormState = { success: false, message: '' };
  const [state, formAction] = useActionState(getServiceSuggestion, initialState);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [dataUri, setDataUri] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setDataUri(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => {
    setImagePreview(null);
    setDataUri('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const wrappedFormAction = (formData: FormData) => {
    if (!dataUri) {
      toast({
        variant: "destructive",
        title: "Nenhuma imagem selecionada",
        description: "Por favor, carregue uma imagem do seu rosto para obter uma sugestão.",
      });
      return;
    }
    formAction(formData);
  }

  return (
    <section id="booking" className="w-full py-20 sm:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-2xl mx-auto border-primary/30 bg-card shadow-2xl shadow-primary/10">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-4xl text-primary">Consultor de Beleza IA</CardTitle>
            <CardDescription className="md:text-lg text-foreground/80">
              Não sabe qual serviço é o certo para você? Carregue uma foto do seu rosto e nossa IA sugerirá o tratamento perfeito.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={wrappedFormAction} className="space-y-6">
              <input type="hidden" name="photoDataUri" value={dataUri} />
              <div className="space-y-2">
                <div
                  className="relative flex justify-center items-center w-full h-64 border-2 border-dashed border-muted-foreground/50 rounded-lg cursor-pointer transition-colors hover:bg-muted/50 hover:border-primary"
                  onClick={() => fileInputRef.current?.click()}
                >
                  {imagePreview ? (
                    <>
                      <Image
                        src={imagePreview}
                        alt="Pré-visualização da imagem"
                        fill
                        className="object-contain rounded-lg p-2"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2 z-10 h-8 w-8 rounded-full"
                        onClick={(e) => { e.stopPropagation(); clearImage(); }}
                      >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Remover imagem</span>
                      </Button>
                    </>
                  ) : (
                    <div className="text-center">
                      <UploadCloud className="mx-auto h-12 w-12 text-muted-foreground" />
                      <p className="mt-2 text-sm font-semibold text-foreground/90">Clique para carregar uma foto</p>
                      <p className="text-xs text-muted-foreground">PNG, JPG ou WEBP</p>
                    </div>
                  )}
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  name="image"
                  className="hidden"
                  accept="image/png, image/jpeg, image/webp"
                  onChange={handleFileChange}
                />
              </div>

              {imagePreview && (
                <SubmitButton />
              )}
            </form>

            {state.message && (
              <div className={`mt-6 text-center p-4 rounded-md ${state.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                <p className="font-bold">{state.message}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
