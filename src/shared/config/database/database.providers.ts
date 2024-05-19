/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'news',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
        migrations: [/*...*/],
        migrationsTableName: "custom_migration_table",
      });

      return dataSource.initialize();
    },
  },
];