"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCityDto = exports.CreateCityDto = exports.CitiesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const city_entity_1 = require("./city.entity");
let CitiesService = class CitiesService {
    cityRepository;
    constructor(cityRepository) {
        this.cityRepository = cityRepository;
    }
    async findAll() {
        return await this.cityRepository.find({ order: { name: 'ASC' } });
    }
    async findOne(id) {
        return await this.cityRepository.findOne({ where: { id } });
    }
    async create(createCityDto) {
        const newCity = this.cityRepository.create(createCityDto);
        return await this.cityRepository.save(newCity);
    }
    async update(id, updateCityDto) {
        await this.cityRepository.update(id, updateCityDto);
        return this.findOne(id);
    }
    async remove(id) {
        await this.cityRepository.delete(id);
    }
};
exports.CitiesService = CitiesService;
exports.CitiesService = CitiesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(city_entity_1.City)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], CitiesService);
class CreateCityDto {
    name;
}
exports.CreateCityDto = CreateCityDto;
class UpdateCityDto {
    name;
}
exports.UpdateCityDto = UpdateCityDto;
//# sourceMappingURL=citites.service.js.map