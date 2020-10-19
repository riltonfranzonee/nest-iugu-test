import { CreateTokenDto, Token } from '../iugu/dto/tokens-dto';

export default interface IToken {
  create: (createTokenDto: CreateTokenDto) => Promise<Token>;
}
