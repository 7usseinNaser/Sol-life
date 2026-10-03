import { z } from 'zod';

export const TeamMemberSchema = z.object({
  id: z.string(),
  name: z.string(),
  roleAr: z.string(),
  roleEn: z.string(),
  category: z.enum(['board', 'branch_leader', 'field_volunteer']),
  branch: z.enum(['north', 'central', 'south', 'general']).default('general'),
  consentStatus: z.enum(['approved', 'pending']).default('approved'),
  avatar: z.string().optional(),
});

export const FeaturedContributorSchema = z.object({
  nameAr: z.string(),
  nameEn: z.string(),
  title: z.string(),
  titleAr: z.string().optional(),
  titleEn: z.string().optional(),
  roleAr: z.string().optional(),
  roleEn: z.string().optional(),
  avatar: z.string().optional(),
  approvedByTeam: z.boolean().default(true),
  affiliation: z.string(),
  affiliationEn: z.string().optional(),
  email: z.string().email(),
  linkedin: z.string(),
  github: z.string().optional(),
  instagram: z.string(),
  note: z.string(),
  noteEn: z.string().optional(),
  skills: z.array(z.string()).optional(),
  achievements: z.array(z.string()).optional(),
});

export type TeamMember = z.infer<typeof TeamMemberSchema>;
export type FeaturedContributor = z.infer<typeof FeaturedContributorSchema>;
