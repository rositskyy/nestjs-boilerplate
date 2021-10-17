import { Users } from '@core/entities';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthenticationService {
  private l = new Logger(AuthenticationService.name);
  constructor(@InjectRepository(Users) private usersRepository: Repository<Users>) {}

  public async changePassword() {}
  public async forgotPassword() {}
  public async signIn() {
    this.l.log(`[Requested]: authentication/signIn`);
    const users: Users[] = await this.usersRepository.find();
  }
  public async signUp() {}
}
