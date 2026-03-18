'use server';
/**
 * @fileOverview A Genkit flow for generating a futuristic project thumbnail based on project details.
 *
 * - generateProjectThumbnail - A function that generates a project thumbnail.
 * - GenerateProjectThumbnailInput - The input type for the generateProjectThumbnail function.
 * - GenerateProjectThumbnailOutput - The return type for the generateProjectThumbnail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateProjectThumbnailInputSchema = z.object({
  projectTitle: z.string().describe('The title of the project.'),
  projectDescription: z
    .string()
    .describe('A brief description of the project.'),
});
export type GenerateProjectThumbnailInput = z.infer<
  typeof GenerateProjectThumbnailInputSchema
>;

const GenerateProjectThumbnailOutputSchema = z.object({
  thumbnailDataUri: z
    .string()
    .describe(
      "A data URI of the generated project thumbnail image, including MIME type and Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type GenerateProjectThumbnailOutput = z.infer<
  typeof GenerateProjectThumbnailOutputSchema
>;

export async function generateProjectThumbnail(
  input: GenerateProjectThumbnailInput
): Promise<GenerateProjectThumbnailOutput> {
  return generateProjectThumbnailFlow(input);
}

const generateThumbnailPrompt = ai.definePrompt({
  name: 'generateThumbnailPrompt',
  input: { schema: GenerateProjectThumbnailInputSchema },
  output: { schema: GenerateProjectThumbnailOutputSchema },
  prompt: `Generate a visually appealing, highly futuristic, technological, and minimalist thumbnail image for a No-Code AI project.

The thumbnail should incorporate elements related to Artificial Intelligence, No-Code development, and a sleek, modern design aesthetic. Use a dark mode color palette with electric blue, vibrant violet, or lime green neon accents against a background of midnight blue, anthracite gray, and black.

The thumbnail should abstractly represent the project concept without using specific text or detailed graphics that would make it look like a specific logo.

Project Title: {{{projectTitle}}}
Project Description: {{{projectDescription}}}

Consider these details to inspire the visual concept. The final image should be a standalone abstract representation, suitable as a project thumbnail.`,
});

const generateProjectThumbnailFlow = ai.defineFlow(
  {
    name: 'generateProjectThumbnailFlow',
    inputSchema: GenerateProjectThumbnailInputSchema,
    outputSchema: GenerateProjectThumbnailOutputSchema,
  },
  async (input) => {
    const promptText = `A futuristic, abstract, and minimalist thumbnail for a No-Code AI project titled "${input.projectTitle}" and described as "${input.projectDescription}". The image should feature a dark background with vibrant neon electric blue, violet, or lime green accents, suggesting AI, data, and interconnected systems. Use glassmorphism effects subtly.`;

    const { media } = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: promptText,
    });

    if (!media || !media.url) {
      throw new Error('Failed to generate thumbnail image.');
    }

    return { thumbnailDataUri: media.url };
  }
);
