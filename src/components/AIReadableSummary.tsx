/**
 * AI-Readable Summary Component
 * Optimized for RAG (Retrieval-Augmented Generation) systems
 * Visible but subtle for AI crawlers like ChatGPT, Perplexity, and Google SGE
 */

interface AIReadableSummaryProps {
  children: React.ReactNode;
  className?: string;
}

const AIReadableSummary = ({ children, className = "" }: AIReadableSummaryProps) => {
  return (
    <div 
      className={`ai-summary text-[10px] leading-tight text-muted-foreground/60 bg-muted/30 rounded-lg p-3 mb-6 border border-border/30 ${className}`}
      aria-hidden="false"
      data-geo-optimized="true"
      data-rag-summary="true"
    >
      {children}
    </div>
  );
};

export default AIReadableSummary;
