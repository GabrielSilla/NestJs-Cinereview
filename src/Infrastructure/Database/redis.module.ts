/* eslint-disable prettier/prettier */
import { CacheModule, Module } from "@nestjs/common";
import * as redisStore from 'cache-manager-redis-store';

const cache = CacheModule.register({
                store: redisStore,
                host: 'localhost',
                port: 6379
            });

@Module({
    imports: [cache],
    exports: [cache]
})

export class RedisModule {}