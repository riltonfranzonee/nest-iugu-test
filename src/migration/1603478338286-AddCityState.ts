import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class AddCityState1603478338286 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

    await queryRunner.createTable(
      new Table({
        name: 'estado',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isUnique: true,
            isGenerated: true,
          },
          {
            name: 'nome',
            type: 'varchar',
            length: '50',
          },
          {
            name: 'uf',
            type: 'varchar',
            length: '2',
          },
          {
            name: 'codigoIBGE',
            type: 'integer',
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'cidade',
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
            name: 'nome',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'estadoId',
            type: 'integer',
          },
          {
            name: 'codigoIBGE',
            type: 'varchar',
            length: '6',
          },
          {
            name: 'codigoIBGE7',
            type: 'varchar',
            length: '7',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'cidade',
      new TableForeignKey({
        name: 'CidadeEstado',
        columnNames: ['estadoId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'estado',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('cidade', 'CidadeEstado');

    await queryRunner.dropTable('cidade');
    await queryRunner.dropTable('estado');
  }
}
