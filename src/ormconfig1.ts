import { ConnectionOptions } from 'typeorm';

// You can load you .env file here synchronously using dotenv package (not installed here),
// import * as dotenv from 'dotenv';
// import * as fs from 'fs';
// const environment = process.env.NODE_ENV || 'development';
// const data: any = dotenv.parse(fs.readFileSync(`${environment}.env`));
// You can also make a singleton service that load and expose the .env file content.
// ...


// Check typeORM documentation for more information.
const config: ConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'task-management',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    // autoLoadEntities: true,

    // We are using migrations, synchronize should be set to false.
    synchronize: true,

    // Run migrations automatically,
    // you can disable this if you prefer running migration manually.
    migrationsRun: true,
    logging: true,
    logger: 'file',

    // Allow both start:prod and start:dev to use migrations
    // __dirname is either dist or src folder, meaning either
    // the compiled js in prod or the ts in dev.
    migrations: [
        __dirname + '/migrations/**/*{.ts,.js}'
    
    ],
    cli: {
        // Location of migration should be inside src folder
        // to be compiled into dist/ folder.
        migrationsDir: 'src/migrations',
    },
};


// "typeorm": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js --config src/ormconfig.ts",
// "typeorm:migrate": "yarn typeorm migration:generate -n",
// "typeorm:run": "yarn typeorm migration:run",
// "typeorm:revert": "yarn typeorm migration:revert",

export = config