import { z } from 'zod';

export const StatsSchema = z.object({
  totalVolunteers: z.literal(30),
  boardMembers: z.literal(9),
  fieldVolunteers: z.literal(21),
  regionalBranches: z.literal(3),
  completedRosterRegistrants: z.literal(1734),
  completedRosterAccepted: z.literal(361),
  surgicalSuturingTrainedEstimate: z.literal(100),
  completedProgramTypes: z.literal(6),
  completedRosterEditions: z.literal(7),
  collaboratingInstitutionsCount: z.literal(9),
  note: z.string(),
});

export type Stats = z.infer<typeof StatsSchema>;
