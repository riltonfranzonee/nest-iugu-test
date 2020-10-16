class Feature {
  readonly name: string;

  readonly identifier: string;

  readonly value: number;
}

export class CreatePlanDto {
  readonly name: string;

  readonly identifier: string;

  readonly interval: number;

  readonly interval_type: 'weeks' | 'months';

  readonly value_cents: number;

  readonly payable_with?: 'all' | 'credit_card' | 'bank_slip' | 'pix';

  readonly billing_days?: number;

  readonly max_cycles?: number;

  readonly features?: Feature[];
}
