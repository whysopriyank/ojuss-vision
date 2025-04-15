// app/page.tsx
"use client";
import { useState, useCallback } from 'react';
import CameraPreview from './components/CameraPreview';
//import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Helper function to create message components
const HumanMessage = ({ text }: { text: string }) => (
  <div className="flex gap-3 items-start">
    <Avatar className="h-8 w-8">
      <AvatarImage src="/avatars/human.png" alt="Human" />
      <AvatarFallback>H</AvatarFallback>
    </Avatar>
    <div className="flex-1 space-y-2">
      <div className="flex items-center gap-2">
        <p className="text-sm font-medium text-zinc-900">You</p>
      </div>
      <div className="rounded-lg bg-zinc-100 px-3 py-2 text-sm text-zinc-800">
        {text}
      </div>
    </div>
  </div>
);

const GeminiMessage = ({ text }: { text: string }) => (
  <div className="flex gap-3 items-start">
    <Avatar className="h-8 w-8 bg-blue-600">
      <AvatarImage src="/avatars/gemini.png" alt="Gemini" />
      <AvatarFallback>AI</AvatarFallback>
    </Avatar>
    <div className="flex-1 space-y-2">
      <div className="flex items-center gap-2">
        <p className="text-sm font-medium text-zinc-900">Ojuss</p>
      </div>
      <div className="rounded-lg bg-white border border-zinc-200 px-3 py-2 text-sm text-zinc-800">
        {text}
      </div>
    </div>
  </div>
);

export default function Home() {
  const [messages, setMessages] = useState<{ type: 'Patient' | 'Ojuss', text: string }[]>([]);

  const handleTranscription = useCallback((transcription: string) => {
    setMessages(prev => [...prev, { type: 'Ojuss', text: transcription }]);
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold text-zinc-800 mb-6 text-center">
        Ojuss AI
      </h1>
      
      <div className="flex flex-col gap-6 w-full max-w-3xl mx-auto">
        {/* Camera UI - Top Section */}
        <div className="w-full">
          <CameraPreview onTranscription={handleTranscription} />
        </div>

        {/* Transcript UI - Bottom Section */}
        // <div className="w-full bg-white rounded-lg border border-zinc-200 shadow-sm">
        //   <ScrollArea className="h-[400px] p-4">
        //     <div className="space-y-6">
        //       <GeminiMessage text="Hi! I'm Ojuss. I can see and hear you. Let's chat!" />
        //       {messages.map((message, index) => (
        //         message.type === 'Patient' ? (
        //           <HumanMessage key={`msg-${index}`} text={message.text} />
        //         ) : (
        //           <GeminiMessage key={`msg-${index}`} text={message.text} />
        //         )
        //       ))}
        //     </div>
        //   </ScrollArea>
        // </div>
      </div>
    </div>
  );
}
