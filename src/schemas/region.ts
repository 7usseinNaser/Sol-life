import { z } from 'zod';

export const RegionSchema = z.object({
  id: z.string(),
  labelAr: z.string(),
  labelEn: z.string(),
  shortLabel: z.string(),
  description: z.string(),
  activities: z.array(z.string()).default([]),
  imagePlaceholder: z.string(),
});

export type Region = z.infer<typeof RegionSchema>;
