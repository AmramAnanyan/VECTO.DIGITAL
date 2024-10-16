export interface AppState {
  Featured: Record<string, any>;
  TendingNow: Array<AppState['Featured']>;
}
export const enum Featured {
  SELECT = 'SELECT'
}

export interface ActionType {
  type: string;
  payload: any;
}
