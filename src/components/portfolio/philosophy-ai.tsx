"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sparkles, Send, Loader2 } from "lucide-react";
import { founderPhilosophyInsight } from "@/ai/flows/founder-philosophy-insight";

export function PhilosophyAI() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    setAnswer(null);
    try {
      const result = await founderPhilosophyInsight({ question });
      setAnswer(result.answer);
    } catch (error) {
      setAnswer("I couldn't retrieve an insight at this moment. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="philosophy" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
             <h2 className="text-sm font-headline font-bold tracking-[0.2em] text-primary uppercase">My Philosophy</h2>
             <h3 className="text-4xl md:text-5xl font-headline font-bold leading-tight">Why I Build Products, Not Just Projects.</h3>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p className="text-foreground font-medium">
              "Most developers build projects to learn technology. I build products to solve problems."
            </p>
            <p>
              DevNexus started because I experienced the same challenges many engineering students face—finding reliable resources, discovering opportunities, and staying consistent with learning.
            </p>
            <p>
              That experience shaped how I approach product development today: identify real problems, design meaningful solutions, and build products people can actually use.
            </p>
          </div>
        </div>

        <div className="glass p-8 rounded-3xl border-primary/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <Sparkles className="w-6 h-6 text-primary/40 animate-pulse" />
          </div>
          
          <div className="space-y-6 relative z-10">
            <div>
              <p className="font-headline font-bold text-xl mb-2">Philosophy Insight AI</p>
              <p className="text-muted-foreground text-sm">Ask about my approach to product building or DevNexus.</p>
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input 
                placeholder="How does Syed solve problems?"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="rounded-xl bg-white/5 border-white/10 focus:border-primary/50 transition-all"
              />
              <Button type="submit" size="icon" disabled={loading} className="rounded-xl bg-primary text-primary-foreground">
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </Button>
            </form>

            <div className="min-h-[150px] p-6 rounded-2xl bg-black/40 border border-white/5 text-sm text-muted-foreground leading-relaxed italic">
              {answer ? (
                <p className="text-foreground not-italic whitespace-pre-line">{answer}</p>
              ) : (
                <div className="space-y-4">
                  <div className="h-4 w-3/4 bg-white/5 rounded animate-pulse" />
                  <div className="h-4 w-1/2 bg-white/5 rounded animate-pulse" />
                  <p className="text-center pt-8 text-white/20">Ask a question to see my philosophy in action...</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 blur-[80px] rounded-full" />
        </div>
      </div>
    </section>
  );
}
