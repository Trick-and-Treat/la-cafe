import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { ProductsModule } from './products/products.module';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [ProductsModule, TypeOrmModule.forRoot(typeOrmConfig), ArticlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
