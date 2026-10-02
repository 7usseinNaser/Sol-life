import { z } from 'zod';

export const CollaborateFormSchema = z.object({
  name: z.string().min(3, 'يرجى كتابة الاسم الثلاثي أو الثنائي على الأقل'),
  organization: z.string().min(2, 'يرجى تحديد اسم المؤسسة أو الجهة'),
  email: z.string().email('يرجى إدخال بريد إلكتروني صحيح'),
  phone: z.string().min(8, 'يرجى إدخال رقم هاتف أو واتساب صحيح'),
  supportType: z.enum(['financial', 'in_kind', 'institutional'], {
    errorMap: () => ({ message: 'يرجى اختيار نموذج التعاون المناسب' }),
  }),
  message: z.string().min(10, 'يرجى كتابة تفاصيل مقترح التعاون (10 أحرف على الأقل)'),
  honeypot: z.string().max(0, 'حقل سبام غير مصرح به').optional().or(z.literal('')),
});

export const ContactFormSchema = z.object({
  name: z.string().min(3, 'يرجى كتابة الاسم كاملاً'),
  email: z.string().email('يرجى إدخال بريد إلكتروني صالح للتواصل'),
  phone: z.string().min(8, 'يرجى كتابة رقم الهاتف للتواصل'),
  role: z.enum(['student', 'trainer', 'institution', 'other'], {
    errorMap: () => ({ message: 'يرجى تحديد صفتك' }),
  }),
  subject: z.string().min(3, 'يرجى كتابة موضوع الاستفسار'),
  message: z.string().min(10, 'يرجى كتابة تفاصيل الرسالة (10 أحرف على الأقل)'),
  honeypot: z.string().max(0, 'حقل سبام غير مصرح به').optional().or(z.literal('')),
});

export type CollaborateFormData = z.infer<typeof CollaborateFormSchema>;
export type ContactFormData = z.infer<typeof ContactFormSchema>;
