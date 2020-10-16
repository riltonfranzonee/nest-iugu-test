export class CreateCustomerDto {
  readonly email: string;

  readonly name: string;

  readonly notes?: string;

  readonly cpf_cnpj?: string;

  readonly zip_code?: string;

  readonly number?: number;

  readonly street?: string;
}

export class Customer extends CreateCustomerDto {
  readonly id: string;

  readonly custom_variables: any[];

  readonly created_at: string;

  readonly updated_at: string;

  readonly state: string;

  readonly district: string;

  readonly payment_methods: any;
}
