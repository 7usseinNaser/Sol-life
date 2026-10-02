'use client';

import React, { useState, useTransition } from 'react';
import { submitCollaborateAction, type ActionResponse } from '@/actions/contact';
import { CollaborateFormSchema } from '@/schemas/contact';
import { Coins, PackageOpen, Building2, Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';

export const CollaborateForm: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const [supportType, setSupportType] = useState<'financial' | 'in_kind' | 'institutional'>('financial');
  const [response, setResponse] = useState<ActionResponse | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResponse(null);
    setFieldErrors({});

    const formData = new FormData(e.currentTarget);
    formData.set('supportType', supportType);

    // Client-side quick check
    const rawData = {
      name: formData.get('name') as string,
      organization: formData.get('organization') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      supportType,
      message: formData.get('message') as string,
      honeypot: formData.get('honeypot') as string,
    };

    const parsed = CollaborateFormSchema.safeParse(rawData);
    if (!parsed.success) {
      setFieldErrors(parsed.error.flatten().fieldErrors);
      return;
    }

    startTransition(async () => {
      const res = await submitCollaborateAction(null, formData);
      setResponse(res);
      if (res.errors) {
        setFieldErrors(res.errors);
      }
    });
  };

  const supportOptions = [
    {
      id: 'financial' as const,
      title: 'دعم مالي وتغطية دورات',
      desc: 'تمويل مستلزمات ورش العمل والمواد المستهلكة المباشرة للطلبة مع تقارير تدريبية ومالية شفافة.',
      icon: Coins,
      accent: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
      activeBorder: 'border-amber-400 bg-amber-500/20 text-white shadow-lg shadow-amber-500/10',
    },
    {
      id: 'in_kind' as const,
      title: 'دعم عيني ومستلزمات تدريبية',
      desc: 'توفير مجسمات محاكاة طبية، دمي إنعاش، أدوات جراحية للتدريب، ومستهلكات طبية للطلبة.',
      icon: PackageOpen,
      accent: 'border-teal-500/30 bg-teal-500/10 text-teal-300',
      activeBorder: 'border-teal-400 bg-teal-500/20 text-white shadow-lg shadow-teal-500/10',
    },
    {
      id: 'institutional' as const,
      title: 'شراكة مؤسسية وتنسيق قاعات',
      desc: 'تنسيق قاعات تدريبية، مختبرات مجهزة، أو تعاون أكاديمي ومجتمعي لتوسيع رقعة التدريب.',
      icon: Building2,
      accent: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300',
      activeBorder: 'border-cyan-400 bg-cyan-500/20 text-white shadow-lg shadow-cyan-500/10',
    },
  ];

  return (
    <div className="w-full bg-[#0B1528]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {response?.success ? (
        <div className="py-12 px-4 text-center space-y-6 animate-fade-in relative z-10">
          <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/20">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-3 max-w-lg mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              تم استلام مقترح الشراكة بنجاح!
            </h3>
            <p className="text-white/80 text-base leading-relaxed">
              {response.message}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-w-md mx-auto text-sm text-teal-300 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span>نثمّن عالياً حرصكم على دعم طلبتنا في قطاع غزة</span>
          </div>

          <button
            type="button"
            onClick={() => setResponse(null)}
            className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm transition-all"
          >
            إرسال مقترح آخر
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8 relative z-10" noValidate>
          {/* Honeypot field (hidden from real users) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="collab-hp">اترك هذا الحقل فارغاً</label>
            <input
              type="text"
              id="collab-hp"
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Form Header */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
              نموذج إبداء الرغبة في التعاون والدعم
            </h3>
            <p className="text-white/60 text-sm">
              يرجى تحديد مسار التعاون وتعبئة البيانات لنتمكن من التواصل ومناقشة تفاصيل التنفيذ.
            </p>
          </div>

          {/* Error Banner if any general message */}
          {response && !response.success && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 flex items-start gap-3 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-400" />
              <span>{response.message}</span>
            </div>
          )}

          {/* Support Type Selector */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-white/90">
              اختر مسار التعاون المطلوب <span className="text-teal-400">*</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {supportOptions.map((opt) => {
                const Icon = opt.icon;
                const isSelected = supportType === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSupportType(opt.id)}
                    className={`text-right p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between gap-3 ${
                      isSelected
                        ? opt.activeBorder
                        : 'border-white/10 bg-white/5 hover:border-white/20 text-white/80 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className={`p-2.5 rounded-xl ${opt.accent}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          isSelected
                            ? 'border-teal-400 bg-teal-500'
                            : 'border-white/30'
                        }`}
                      >
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white mb-1">{opt.title}</h4>
                      <p className="text-xs text-white/60 leading-relaxed">{opt.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
            {fieldErrors.supportType && (
              <p className="text-xs text-red-400 mt-1">{fieldErrors.supportType[0]}</p>
            )}
          </div>

          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-white/80">
                الاسم الكامل / صفة المتواصل <span className="text-teal-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="د. أحمد محمد / منسق العلاقات"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-teal-400 focus:bg-white/10 text-white placeholder-white/30 text-sm outline-none transition-all"
                required
              />
              {fieldErrors.name && (
                <p className="text-xs text-red-400">{fieldErrors.name[0]}</p>
              )}
            </div>

            {/* Organization */}
            <div className="space-y-2">
              <label htmlFor="organization" className="block text-sm font-medium text-white/80">
                اسم المؤسسة أو الجهة <span className="text-teal-400">*</span>
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                placeholder="اسم الجمعية، المركز الطبي، أو المبادرة"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-teal-400 focus:bg-white/10 text-white placeholder-white/30 text-sm outline-none transition-all"
                required
              />
              {fieldErrors.organization && (
                <p className="text-xs text-red-400">{fieldErrors.organization[0]}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-white/80">
                البريد الإلكتروني الرسمي <span className="text-teal-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="contact@organization.org"
                dir="ltr"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-teal-400 focus:bg-white/10 text-white placeholder-white/30 text-sm outline-none transition-all text-left"
                required
              />
              {fieldErrors.email && (
                <p className="text-xs text-red-400">{fieldErrors.email[0]}</p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-white/80">
                رقم الهاتف / الواتساب للتنسيق <span className="text-teal-400">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+970 59-000-0000"
                dir="ltr"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-teal-400 focus:bg-white/10 text-white placeholder-white/30 text-sm outline-none transition-all text-left"
                required
              />
              {fieldErrors.phone && (
                <p className="text-xs text-red-400">{fieldErrors.phone[0]}</p>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-white/80">
              تفاصيل مقترح التعاون أو الدعم <span className="text-teal-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="اكتب نبذة عن التسهيلات أو المستلزمات أو الدعم المقترح تقديمه لطلبة غزة..."
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-teal-400 focus:bg-white/10 text-white placeholder-white/30 text-sm outline-none transition-all resize-none"
              required
            />
            {fieldErrors.message && (
              <p className="text-xs text-red-400">{fieldErrors.message[0]}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
            <p className="text-xs text-white/50">
              * سيتم حفظ بياناتكم واستخدامها حصراً للتواصل الإداري والتنسيق التدريبي.
            </p>
            <button
              type="submit"
              disabled={isPending}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-teal-500/25 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
            >
              {isPending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>جارٍ إرسال المقترح...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>إرسال مقترح الشراكة</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
