import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';
import { SessionsModule } from 'src/sessions/sessions.module';
import { UtilsService } from 'src/utils/utils.service';
import { LoggerService } from 'src/logger/logger.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, UtilsService, LoggerService],
  imports: [
    UsersModule,
    PassportModule,
    SessionsModule,
    CacheModule.register(),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_ACCESS_SECRET'),
        signOptions: {
          expiresIn: configService.get<string>('JWT_ACCESS_EXPIRY'),
        },
      }),
    }),
  ],
})
export class AuthModule {}
