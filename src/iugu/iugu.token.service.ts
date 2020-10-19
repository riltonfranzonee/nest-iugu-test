import { Injectable } from '@nestjs/common';

import { CreateTokenDto, Token, ChargeDto, Charge } from './dto/tokens-dto';

import IToken from '../interfaces/token';

import api from './api';

@Injectable()
export class IuguTokenService implements IToken {
  public async create(createTokenDto: CreateTokenDto): Promise<Token> {
    try {
      const { data } = await api.post(`/payment_token`, createTokenDto);

      return data;
    } catch (error) {
      console.log(error.response.data.errors);
    }
  }

  public async charge(chargeDto: ChargeDto): Promise<Charge> {
    try {
      const { data } = await api.post('/charge', chargeDto);

      return data;
    } catch (error) {
      console.log(error.response.data.errors);
    }
  }
}
