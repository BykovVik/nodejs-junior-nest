import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private readonly userRepository: Repository<Users>,
    ) {}

    async resetProblemsFlag(): Promise<number> {
        const count = await this.userRepository.count({ where: { hasProblems: true } });
        await this.userRepository.update({ hasProblems: true }, { hasProblems: false });
        return count;
    }
}