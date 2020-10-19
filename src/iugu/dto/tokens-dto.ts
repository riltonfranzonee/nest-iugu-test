import { Item, Payer } from './invoices-dto';

export class CreditCardData {
  readonly number: string;

  readonly verification_value: string;

  readonly first_name: string;

  readonly last_name: string;

  readonly month: string;

  readonly year: string;
}

export class CreateTokenDto {
  readonly account_id = process.env.IUGU_ACCOUNT_ID;

  readonly method: 'credit_card';

  readonly data: CreditCardData;

  readonly test?: boolean;
}

export class CardInfo {
  readonly brand: string;

  readonly holder_name: string;

  readonly display_number: string;

  readonly bin: string;

  readonly month: number;

  readonly year: number;
}

export class Token {
  readonly id: string;

  readonly method: 'credit_card';

  readonly extra_info: CardInfo;

  readonly test: boolean;
}

export class ChargeDto {
  readonly method?: 'bank_slip';

  readonly token?: string;

  readonly customer_payment_method_id?: string;

  readonly restrict_payment_method?: boolean;

  readonly invoice_id?: string;

  readonly email?: string;

  readonly months?: number;

  readonly discount_cents?: number;

  readonly bank_slip_extra_days?: number;

  readonly keep_dunning?: boolean;

  readonly items?: Item[];

  readonly payer?: Payer;

  readonly order_id?: string;
}

export class Charge {
  readonly message?: string;

  readonly errors: any[];

  readonly success: boolean;

  readonly url: string;

  readonly pdf: string;

  readonly identification?: string;

  readonly invoice_id: string;
}
