import { Task } from './Task.model';

export interface DialogData {
  tasks: Task[];
  type: string;
  title: string;
  index?: number;
}
