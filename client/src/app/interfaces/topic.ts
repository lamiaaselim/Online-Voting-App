export interface Topic {
  _id: string;
  statement: string;
  options: { option: string, votes: number }[];
  startDate: Date;
  endDate: Date;
  isCancelled: boolean;
}
