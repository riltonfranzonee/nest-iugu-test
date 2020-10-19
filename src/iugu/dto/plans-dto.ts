class Feature {
  readonly name: string;

  readonly identifier: string;

  readonly value: number;
}

class Price {
  readonly currency: string;

  readonly id: string;

  readonly plan_id: string;

  readonly value_cents: string;
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

export class Plan {
  readonly id: string;

  readonly name: string;

  readonly identifier: string;

  readonly interval: number;

  readonly interval_type: 'weeks' | 'months';

  readonly features: Feature[];

  readonly prices: Price[];

  readonly created_at: string;

  readonly updated_at: string;
}
