import { Stats, StatsSchema } from '@/schemas/stats';

export const teamStats: Stats = StatsSchema.parse({
  totalVolunteers: 30,
  boardMembers: 9,
  fieldVolunteers: 21,
  regionalBranches: 3,
  completedRosterRegistrants: 1734,
  completedRosterAccepted: 361,
  surgicalSuturingTrainedEstimate: 100,
  completedProgramTypes: 6,
  completedRosterEditions: 7,
  collaboratingInstitutionsCount: 9,
  note: 'بسبب محدودية سعة القاعات التدريبية وحرصًا على جودة التدريب، يتم الاكتفاء بعدد محدد من الطلبة في كل دورة حسب الطاقة الاستيعابية.',
});
