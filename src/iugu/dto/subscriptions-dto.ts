export class CreateSubscriptionDto {
  readonly customer_id: string;

  readonly plan_identifier?: string;

  readonly expires_at?: Date;

  readonly only_on_charge_success?: boolean;

  readonly ignore_due_email?: boolean;

  readonly payable_with?: 'all' | 'credit_card' | 'bank_slip' | 'pix';

  readonly credits_based?: boolean;

  readonly price_cents?: number;

  readonly suspend_on_invoice_expired?: boolean;

  readonly only_charge_on_due_date?: boolean;
}

export class Subscription extends CreateSubscriptionDto {
  readonly suspended: boolean;

  readonly active: boolean;

  readonly in_trial?: boolean | null;

  readonly plan_name: string;

  readonly customer_name: string;

  readonly customer_email: string;

  readonly cycled_at: string;
}
