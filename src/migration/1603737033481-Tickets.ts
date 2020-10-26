import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class Tickets1603737033481 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isUnique: true,
            isGenerated: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '100',
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'tickets',
        columns: [
          { name: 'ticketNum', type: 'integer' },
          { name: 'title', type: 'varchar' },
          { name: 'userId', type: 'uuid' },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'tickets',
      new TableForeignKey({
        name: 'UserTicket',
        columnNames: ['userId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tickets');
    await queryRunner.dropTable('users');
  }
}
