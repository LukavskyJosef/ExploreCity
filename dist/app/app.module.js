"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
(0, common_1.Module)({
    imports: [
        typeorm_1.TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'explorecity',
            entities: [
                "dist/**/*.entity{.ts,.js}"
            ],
            synchronize: true,
        }),
        typeorm_1.TypeOrmModule.forFeature([]),
    ],
    controllers: [app_controller_1.AppController],
    providers: [app_service_1.AppService],
});
class AppModule {
}
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map