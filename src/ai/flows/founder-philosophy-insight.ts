'use server';
/**
 * @fileOverview An AI agent that answers questions about Syed's product development philosophy
 * and its application in DevNexus.
 *
 * - founderPhilosophyInsight - A function that handles natural language questions about Syed's philosophy.
 * - FounderPhilosophyInsightInput - The input type for the founderPhilosophyInsight function.
 * - FounderPhilosophyInsightOutput - The return type for the founderPhilosophyInsight function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FounderPhilosophyInsightInputSchema = z.object({
  question: z.string().describe("A natural language question about Syed's product development philosophy, problem-solving approach, or how these principles are embodied in DevNexus."),
});
export type FounderPhilosophyInsightInput = z.infer<typeof FounderPhilosophyInsightInputSchema>;

const FounderPhilosophyInsightOutputSchema = z.object({
  answer: z.string().describe("An answer to the user's question, based on Syed's product development philosophy and the context provided."),
});
export type FounderPhilosophyInsightOutput = z.infer<typeof FounderPhilosophyInsightOutputSchema>;

export async function founderPhilosophyInsight(input: FounderPhilosophyInsightInput): Promise<FounderPhilosophyInsightOutput> {
  return founderPhilosophyInsightFlow(input);
}

const founderPhilosophyInsightPrompt = ai.definePrompt({
  name: 'founderPhilosophyInsightPrompt',
  input: {schema: FounderPhilosophyInsightInputSchema},
  output: {schema: FounderPhilosophyInsightOutputSchema},
  prompt: `You are an AI assistant designed to answer questions about Syed Sharfuddin Shuaib's product development philosophy, his problem-solving approach, and how these principles are embodied in his flagship project, DevNexus. Below is the core philosophy and context:

### Syed's Philosophy:
Most developers build projects to learn technology. I build products to solve problems. DevNexus started because I experienced the same challenges many engineering students face—finding reliable resources, discovering opportunities, and staying consistent with learning. That experience shaped how I approach product development today: identify real problems, design meaningful solutions, and build products people can actually use.

### DevNexus Context:
DevNexus is a production-ready ecosystem designed to help students learn, earn, collaborate, and grow through one integrated platform. It combines learning, earning, networking, AI assistance, academic resources (PYQs, Model Papers, Notes), podcasts, and community into a single ecosystem. It was built after identifying real challenges faced by engineering students, aiming to simplify learning, earning, and growth for students.

### Core Areas of Focus:
Education, Productivity, Community, AI, User Experience.

Based on the above information, answer the following question thoroughly and insightfully. If the question cannot be answered directly from the provided context, state that you cannot answer it from the given information.

Question: {{{question}}}`,
});

const founderPhilosophyInsightFlow = ai.defineFlow(
  {
    name: 'founderPhilosophyInsightFlow',
    inputSchema: FounderPhilosophyInsightInputSchema,
    outputSchema: FounderPhilosophyInsightOutputSchema,
  },
  async (input) => {
    const {output} = await founderPhilosophyInsightPrompt(input);
    return output!;
  }
);
