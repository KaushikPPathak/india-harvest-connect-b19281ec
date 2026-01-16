import { useState, useRef, useEffect } from 'react';
import { X, Send, Loader2 } from 'lucide-react';
import aiLogo from '@/assets/ai-logo.png';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const QUICK_REPLIES = [
  { label: 'Products', message: 'What products do you export?' },
  { label: 'MOQ', message: 'What is the minimum order quantity?' },
  { label: 'Packaging', message: 'What packaging options are available?' },
  { label: 'Shipping', message: 'Do you ship worldwide?' },
  { label: 'Price Inquiry', message: 'I want to inquire about prices' },
  { label: 'Contact', message: 'How can I contact your team?' },
];

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendChat = async (userMessages: Message[]) => {
    const resp = await fetch(CHAT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({ messages: userMessages }),
    });

    if (!resp.ok) {
      const errorData = await resp.json().catch(() => ({}));
      throw new Error(errorData.error || 'Failed to get response');
    }

    const data = await resp.json();
    const assistantContent = data.choices?.[0]?.message?.content || 'Sorry, I could not process your request.';
    
    setMessages(prev => [...prev, { role: 'assistant', content: assistantContent }]);
  };

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      await sendChat(newMessages);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [
        ...prev,
        { 
          role: 'assistant', 
          content: 'Sorry, I encountered an error. Please try again or contact us directly.' 
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickReply = (message: string) => {
    sendMessage(message);
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg flex items-center justify-center transition-colors"
            aria-label="Open chat"
          >
            <img src={aiLogo} alt="AI" className="w-8 h-8 object-contain" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] h-[500px] max-h-[calc(100vh-100px)] bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-forest-dark text-white px-4 py-3 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-sm text-gold-400">SHC AI Assistant</h3>
                <p className="text-xs text-gold-200">Export Helper</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 bg-white/10 hover:bg-white/20 text-white rounded-full"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.length === 0 && (
                <div className="text-center py-4">
                  <p className="text-muted-foreground text-sm mb-4">
                    👋 Hello! How can I help you today?
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {QUICK_REPLIES.map((qr) => (
                      <button
                        key={qr.label}
                        onClick={() => handleQuickReply(qr.message)}
                        className="px-3 py-1.5 text-xs bg-gold-50 text-gold-700 rounded-full hover:bg-gold-100 transition-colors border border-gold-200"
                      >
                        {qr.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm ${
                      msg.role === 'user'
                        ? 'bg-gold-600 text-white rounded-br-md'
                        : 'bg-muted text-foreground rounded-bl-md'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              
              {isLoading && messages[messages.length - 1]?.role === 'user' && (
                <div className="flex justify-start">
                  <div className="bg-muted px-3 py-2 rounded-2xl rounded-bl-md">
                    <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies (when conversation started) */}
            {messages.length > 0 && !isLoading && (
              <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-1.5">
                  {QUICK_REPLIES.slice(0, 3).map((qr) => (
                    <button
                      key={qr.label}
                      onClick={() => handleQuickReply(qr.message)}
                      className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-full hover:bg-muted/80 transition-colors"
                    >
                      {qr.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-border">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage(input);
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 text-sm bg-muted rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-gold-500"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={!input.trim() || isLoading}
                  className="rounded-full bg-gold-600 hover:bg-gold-700 h-9 w-9"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
