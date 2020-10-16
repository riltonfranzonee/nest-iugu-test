import { CreateInvoiceDto } from '../iugu/dto/invoices-dto';

export default interface IInvoice {
  create: (createInvoiceDto: CreateInvoiceDto) => Promise<boolean>;
  listAll: () => any;
}
