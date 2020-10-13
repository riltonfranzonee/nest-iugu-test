import { CreateInvoiceDto } from '../iugu/dto/invoices-dto';

export default interface IInvoice {
  create: (CreateInvoiceDto) => Promise<boolean>;
  listAll: () => any;
}