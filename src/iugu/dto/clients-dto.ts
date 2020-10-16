export class CreateClientDto {
  readonly email: string;

  readonly name: string;

  readonly notes?: string;

  readonly cpf_cnpj?: string;

  readonly zip_code?: string;

  readonly number?: number;

  readonly street?: string;
}

export class Client {
  id: string;

  name: string;

  notes: string;

  custom_variables: any[];
}
