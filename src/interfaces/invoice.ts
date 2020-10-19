import {
  CreateInvoiceDto,
  RegenerateInvoiceDto,
} from '../iugu/dto/invoices-dto';

export default interface IInvoice {
  create: (createInvoiceDto: CreateInvoiceDto) => Promise<boolean>;
  regenerate: (
    id: string,
    regenrateInvoiceDto: RegenerateInvoiceDto,
  ) => Promise<boolean>;
  cancel: (id: string) => Promise<boolean>;
  sendEmail: (id: string) => Promise<boolean>;
  find: (id: string) => any;
  findAll: () => any;
  refund: (id: string, partial_value_refund_cents?: number) => Promise<boolean>;
}
