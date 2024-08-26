export interface Option {
  option: string;
  votes: number;
}


export interface Topic {
  _id?: string;
  statement: string;
  options: Option[];
  startDate: Date;
  endDate: Date;
  isCancelled: boolean;
}
