import { z } from 'zod';

export const ProgramStatusSchema = z.enum(['completed', 'upcoming', 'future']);

export const ProgramEditionSchema = z.object({
  id: z.string(),
  editionName: z.string(),
  regionKey: z.enum(['khan_younis', 'central', 'gaza', 'all_gaza']),
  displayLocation: z.string().default('قطاع غزة'), // Privacy rule: "قطاع غزة" except CBC "خانيونس"
  hostOrganization: z.string().optional(),
  dateRange: z.string(),
  dateConfirmed: z.boolean().default(true),
  sessionsCount: z.number(),
  timeSlot: z.string().optional(),
  hoursTotal: z.number().optional(),
  trainerName: z.string(), // If missing, "CONTENT_REQUIRED"
  registrantsCount: z.number().optional(), // optional for Surgical Suturing
  acceptedCount: z.number().optional(),
  trainedEstimate: z.number().optional(), // for Surgical Suturing (~100)
  notes: z.string().optional(),
});

export const ProgramSchema = z.object({
  slug: z.string(),
  titleAr: z.string(),
  titleEn: z.string(),
  status: ProgramStatusSchema,
  category: z.string(),
  shortDescription: z.string(),
  fullDescription: z.string().optional(),
  objectives: z.array(z.string()).default([]),
  defaultLocationLevel: z.string().default('قطاع غزة'),
  collaboratorName: z.string().optional(),
  featured: z.boolean().default(false),
  editions: z.array(ProgramEditionSchema).default([]),
});

export type ProgramStatus = z.infer<typeof ProgramStatusSchema>;
export type ProgramEdition = z.infer<typeof ProgramEditionSchema>;
export type Program = z.infer<typeof ProgramSchema>;
