import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { RESOURCES } from '@/data/resources';
import { BookOpen, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resources & Startup Checklists — Knowledge Hub',
  description:
    'Free guides, startup launch checklists, GST explanations, and marketplace selling tutorials for founders in India.',
};

export default function ResourcesPage() {
  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-b from-brand-50/60 to-white py-16 sm:py-24 border-b border-slate-200/60 text-center">
        <Container>
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-100 text-brand-800 mb-4 border border-brand-200">
              Knowledge Base
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Actionable Business Guides <br />
              <span className="text-brand-600">& Startup Checklists</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Practical, jargon-free resources designed to help founders navigate entity formation, tax compliance, marketplace growth, and brand strategy.
            </p>
          </div>
        </Container>
      </div>

      {/* Articles Grid */}
      <Section background="white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESOURCES.map((article) => (
              <Card key={article.id} hoverable className="flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <Badge variant="emerald" size="sm">
                      {article.category}
                    </Badge>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug hover:text-brand-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Checklist Items if present */}
                  {article.checklistItems && article.checklistItems.length > 0 && (
                    <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                        Key Milestones Covered:
                      </p>
                      <ul className="space-y-1.5">
                        {article.checklistItems.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>By {article.author}</span>
                  <span className="font-semibold text-brand-600 hover:text-brand-700">
                    Published {article.publishedDate}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}

