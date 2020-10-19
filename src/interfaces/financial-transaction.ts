export default interface IFinancialTransaction {
  findAll: () => Promise<any[]>;
  advance: (transactions: number[]) => Promise<any>;
}
