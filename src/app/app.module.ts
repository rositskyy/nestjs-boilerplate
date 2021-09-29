import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from 'config/configuration';
import { AuthenticationModule } from 'src/authentication/authentication.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [configuration] }), AuthenticationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
