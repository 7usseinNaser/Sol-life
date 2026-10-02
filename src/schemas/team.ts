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
  approvedByTeam: z.boolean().default(true),
  affiliation: z.string(),
  email: z.string().email(),
  linkedin: z.string(),
  instagram: z.string(),
  note: z.string(),
});

export type TeamMember = z.infer<typeof TeamMemberSchema>;
export type FeaturedContributor = z.infer<typeof FeaturedContributorSchema>;
