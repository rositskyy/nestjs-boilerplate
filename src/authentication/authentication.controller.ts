import { Body, Controller, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { AuthenticationService } from './authentication.service';
import { SignInDto, SignUpDto } from './dto';

@Controller('/authentication')
@ApiTags('authentication')
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}

  @Post('signUp')
  async signUp(@Res() response: Response, @Body() body: SignUpDto) {
    return response.status(201).send();
  }

  @Post('signIn')
  async signIn(@Res() response: Response, @Body() body: SignInDto) {
    return response.status(200).send();
  }
}
