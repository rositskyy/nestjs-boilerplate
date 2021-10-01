import { Body, Controller, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { AuthenticationService } from './authentication.service';
import { SignInDto, SignUpDto } from './dto';

@Controller('/authentication')
@ApiTags('authentication')
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}

  @Post('signIn')
  async signIn(@Res() response: Response, @Body() body: SignInDto) {
    const result = await this.authenticationService.signIn();
    return response.status(200).send();
  }

  @Post('signUp')
  async signUp(@Res() response: Response, @Body() body: SignUpDto) {
    const result = await this.authenticationService.signUp();
    return response.status(201).send();
  }
}
