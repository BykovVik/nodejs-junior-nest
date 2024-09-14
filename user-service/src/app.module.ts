import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AppDataSource } from './ormconfig';

@Module({
  imports: [
      TypeOrmModule.forRootAsync({
            useFactory: async () => ({
              ...AppDataSource.options,
            }),
        }),
      UsersModule,
  ],
})
export class AppModule {}
