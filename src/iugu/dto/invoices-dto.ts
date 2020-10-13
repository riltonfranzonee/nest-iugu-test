export class CreateInvoiceDto {
  email: string;
  due_date: Date;
  items: Item[];
  ensure_workday_due_date?: boolean;
  return_url?: string;
  payable_with?: string;
  payer: {
    cpf_cnpj: string;
    name: string;
    address: {
      zip_code: string;
      number: number;
    }
  }
}

class Item {
  description: string;
  quantity?: number;
  price_cents?: number; 
}
