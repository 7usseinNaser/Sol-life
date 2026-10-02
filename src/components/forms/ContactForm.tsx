'use client';

import React, { useState, useTransition } from 'react';
import { submitContactAction, type ActionResponse } from '@/actions/contact';
import { ContactFormSchema } from '@/schemas/contact';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  GraduationCap,
  Stethoscope,
  Building,
  HelpCircle,
  Sparkles,
} from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const [role, setRole] = useState<'student' | 'trainer' | 'institution' | 'other'>('student');
  const [response, setResponse] = useState<ActionResponse | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

  const roleOptions = [
    { id: 'student' as const, label: 'طالب / خريج صحي', icon: GraduationCap },
    { id: 'trainer' as const, label: 'طبيب / مدرب سريري', icon: Stethoscope },
    { id: 'institution' as const, label: 'ممثل مؤسسة / مركز', icon: Building },
    { id: 'other' as const, label: 'جهة أخرى / عام', icon: HelpCircle },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResponse(null);
    setFieldErrors({});

    const formData = new FormData(e.currentTarget);
    formData.set('role', role);

    // Client-side validation
    const rawData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      role,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
      honeypot: formData.get('honeypot') as string,
    };

    const parsed = ContactFormSchema.safeParse(rawData);
    if (!parsed.success) {
      setFieldErrors(parsed.error.flatten().fieldErrors);
      return;
    }

    startTransition(async () => {
      const res = await submitContactAction(null, formData);
      setResponse(res);
      if (res.errors) {
        setFieldErrors(res.errors);
      }
    });
  };

  return (
    <div className="w-full bg-[#0B1528]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Background radial lights */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {response?.success ? (
        <div className="py-12 px-4 text-center space-y-6 animate-fade-in relative z-10">
          <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/20">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-3 max-w-lg mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              تم إرسال رسالتك بنجاح!
            </h3>
            <p className="text-white/80 text-base leading-relaxed">
              {response.message}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-w-md mx-auto text-sm text-teal-300 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span>فريق سول لايف • نتعلّم • نتدرّب • نُلهم</span>
          </div>

          <button
            type="button"
            onClick={() => setResponse(null)}
            className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm transition-all"
          >
            إرسال استفسار آخر
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8 relative z-10" noValidate>
          {/* Honeypot field (hidden) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="contact-hp">اترك هذا الحقل فارغاً</label>
            <input
              type="text"
              id="contact-hp"
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Form Header */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
              أرسل استفسارك مباشرة لإدارة الفريق
            </h3>
            <p className="text-white/60 text-sm">
              يسعدنا الإجابة عن أي استفسار حول التسجيل، التدريب، أو التعاون المشترك.
            </p>
          </div>

          {/* Error Banner */}
          {response && !response.success && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 flex items-start gap-3 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-400" />
              <span>{response.message}</span>
            </div>
          )}

          {/* Role Selector */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-white/90">
              بصفتك <span className="text-teal-400">*</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {roleOptions.map((opt) => {
                const Icon = opt.icon;
                const isSelected = role === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setRole(opt.id)}
                    className={`p-3.5 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center gap-2 text-center ${
                      isSelected
                        ? 'border-teal-400 bg-teal-500/20 text-white shadow-lg shadow-teal-500/10'
                        : 'border-white/10 bg-white/5 hover:border-white/20 text-white/70 hover:text-white'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isSelected ? 'text-teal-300' : 'text-white/60'}`} />
                    <span className="text-xs font-semibold">{opt.label}</span>
                  </button>
                );
              })}
            </div>
            {fieldErrors.role && (
              <p className="text-xs text-red-400 mt-1">{fieldErrors.role[0]}</p>
            )}
          </div>

          {/* Grid fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-white/80">
                الاسم كاملاً <span className="text-teal-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="أحمد إبراهيم"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-teal-400 focus:bg-white/10 text-white placeholder-white/30 text-sm outline-none transition-all"
                required
              />
              {fieldErrors.name && (
                <p className="text-xs text-red-400">{fieldErrors.name[0]}</p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-white/80">
                رقم الهاتف / الواتساب <span className="text-teal-400">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+972 56-000-0000"
                dir="ltr"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-teal-400 focus:bg-white/10 text-white placeholder-white/30 text-sm outline-none transition-all text-left"
                required
              />
              {fieldErrors.phone && (
                <p className="text-xs text-red-400">{fieldErrors.phone[0]}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-white/80">
                البريد الإلكتروني <span className="text-teal-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="user@example.com"
                dir="ltr"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-teal-400 focus:bg-white/10 text-white placeholder-white/30 text-sm outline-none transition-all text-left"
                required
              />
              {fieldErrors.email && (
                <p className="text-xs text-red-400">{fieldErrors.email[0]}</p>
              )}
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium text-white/80">
                موضوع الاستفسار <span className="text-teal-400">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="استفسار عن موعد دورة الخياطة الجراحية"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-teal-400 focus:bg-white/10 text-white placeholder-white/30 text-sm outline-none transition-all"
                required
              />
              {fieldErrors.subject && (
                <p className="text-xs text-red-400">{fieldErrors.subject[0]}</p>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-white/80">
              تفاصيل الرسالة <span className="text-teal-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="اكتب استفسارك أو رسالتك بالتفصيل هنا..."
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-teal-400 focus:bg-white/10 text-white placeholder-white/30 text-sm outline-none transition-all resize-none"
              required
            />
            {fieldErrors.message && (
              <p className="text-xs text-red-400">{fieldErrors.message[0]}</p>
            )}
          </div>

          {/* Submit */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
            <p className="text-xs text-white/50">
              * نحرص على الرد السريع خلال 24 - 48 ساعة من إرسال الطلب.
            </p>
            <button
              type="submit"
              disabled={isPending}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-teal-500/25 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
            >
              {isPending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>جارٍ إرسال الرسالة...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>إرسال الرسالة الآن</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
