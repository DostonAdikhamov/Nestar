import { Resolver } from '@nestjs/graphql';
import { BoardArticleService } from './boardArticle.service';

@Resolver()
export class BoardArticleResolver {
    constructor(private readonly boardArticleService: BoardArticleService) {}
}
