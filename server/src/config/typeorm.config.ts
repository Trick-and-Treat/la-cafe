import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'lacafe.sqlite',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  // entities: ['dist/**/*.entity.js'],
  synchronize: true,
  logging: false,
  dropSchema: false,
};
