import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepo: Repository<Article>,
  ) {}

  create(createArticleDto: CreateArticleDto) {
    return this.articleRepo.save(createArticleDto);
  }

  findAll() {
    return this.articleRepo.find();
  }

  async findOne(id: number) {
    const article = await this.articleRepo.findOne({ where: { id } });

    if (!article) {
      throw new NotFoundException('Article not found');
    }

    return article;
  }

  async update(id: number, updateArticleDto: UpdateArticleDto) {
    await this.findOne(id);
    await this.articleRepo.update(id, updateArticleDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.articleRepo.delete(id);
    return null;
  }
}
