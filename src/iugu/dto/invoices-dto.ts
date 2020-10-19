export class Item {
  description: string;

  quantity?: number;

  price_cents?: number;
}

export class Payer {
  cpf_cnpj: string;

  name: string;

  address: {
    zip_code: string;
    number: number;
  };
}

export class CreateInvoiceDto {
  email: string;

  due_date: Date;

  items: Item[];

  ensure_workday_due_date?: boolean;

  return_url?: string;

  payable_with?: string;

  payer: Payer;
}

export class RegenerateInvoiceDto {
  due_date: string;

  items?: Item[];

  ignore_due_email?: boolean;

  ignore_canceled_email?: boolean;

  current_fines_option?: boolean;

  keep_early_payment_discount?: boolean;
}
