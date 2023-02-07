import { Financial } from '../static-data/financial.js';

export default class FinancialService {
  public getData(tableName: string): any[] {
    return Financial[tableName];
  }
}
