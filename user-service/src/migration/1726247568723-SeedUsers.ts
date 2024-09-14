import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedUsers1726247568723 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE users (
              id SERIAL PRIMARY KEY,
              firstName VARCHAR(100),
              lastName VARCHAR(100),
              age INT,
              gender VARCHAR(10),
              hasProblems BOOLEAN
            );
          `);
        for (let i = 1; i <= 1000000; i++) {
            await queryRunner.query(
                `INSERT INTO users (firstName, lastName, age, gender, hasProblems) VALUES ('First${i}', 'Last${i}', ${Math.floor(Math.random() * 80) + 18}, '${Math.random() > 0.5 ? 'Male' : 'Female'}', ${Math.random() > 0.8})`,
            );
        }
    }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM users`);
    }

}
