import { CollaborateFormSchema, ContactFormSchema } from '@/schemas/contact';

export interface ActionResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

export async function submitCollaborateAction(
  prevState: ActionResponse | null,
  formData: FormData
): Promise<ActionResponse> {
  const rawData = {
    name: formData.get('name'),
    organization: formData.get('organization'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    supportType: formData.get('supportType'),
    message: formData.get('message'),
    honeypot: formData.get('honeypot'),
  };

  const parsed = CollaborateFormSchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      success: false,
      message: 'يرجى مراجعة الحقول المطلوبة والتأكد من صحتها.',
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  // Honeypot check
  if (parsed.data.honeypot && parsed.data.honeypot.length > 0) {
    return {
      success: false,
      message: 'تم رفض الإرسال التلقائي غير المصرح به.',
    };
  }

  // Simulated server submission delay
  await new Promise((resolve) => setTimeout(resolve, 600));

  return {
    success: true,
    message:
      'تم استلام مقترح الشراكة بنجاح! سيتواصل معك منسق العلاقات العامة بفريق سول لايف في أقرب وقت.',
  };
}

export async function submitContactAction(
  prevState: ActionResponse | null,
  formData: FormData
): Promise<ActionResponse> {
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    role: formData.get('role'),
    subject: formData.get('subject'),
    message: formData.get('message'),
    honeypot: formData.get('honeypot'),
  };

  const parsed = ContactFormSchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      success: false,
      message: 'يرجى تصحيح الأخطاء في النموذج قبل الإرسال.',
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  // Honeypot check
  if (parsed.data.honeypot && parsed.data.honeypot.length > 0) {
    return {
      success: false,
      message: 'تم رفض الإرسال غير المصرح به.',
    };
  }

  // Simulated server submission delay
  await new Promise((resolve) => setTimeout(resolve, 600));

  return {
    success: true,
    message:
      'تم إرسال رسالتك بنجاح إلى إدارة فريق سول لايف. شكراً لاهتمامك وتواصلك معنا.',
  };
}
