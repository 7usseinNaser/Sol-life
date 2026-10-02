import { z } from 'zod';

export const InstitutionSchema = z.object({
  id: z.string(),
  nameAr: z.string(),
  nameEn: z.string(),
  category: z.enum(['medical', 'municipal', 'youth_community', 'tech_support']),
  confirmedPartner: z.boolean().default(false), // true only when officially designated "partner"
  relationshipLabel: z.literal('جهات نتعاون ونتواصل معها'),
  notes: z.string().optional(),
});

export type Institution = z.infer<typeof InstitutionSchema>;
