import { CreateInvoiceDto } from '../iugu/dto/invoices-dto';

export default interface InvoiceI{
  create: (CreateInvoiceDto) => Promise<boolean>;
  listAll: () => any;
}