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
exports.StudentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const student_entity_1 = require("./student.entity");
let StudentsService = class StudentsService {
    studentRepository;
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
    }
    getStudents() {
        return this.studentRepository.find({
            relations: {
                class: true,
            }
        });
    }
    getStudent(id) {
        return this.studentRepository.findOne({
            where: {
                id
            },
            relations: {
                class: true
            }
        });
    }
    createStudent(data) {
        const student = new student_entity_1.Student();
        student.firstName = data.firstName;
        student.lastName = data.lastName;
        student.classId = data.classId;
        return this.studentRepository.save(student);
    }
    async deleteStudent(id) {
        await this.studentRepository.delete(id);
    }
    async updateStudent(id, data) {
        const student = await this.getStudent(id);
        student.firstName = data.firstName;
        student.lastName = data.lastName;
        return this.studentRepository.save(student);
    }
};
exports.StudentsService = StudentsService;
exports.StudentsService = StudentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(student_entity_1.Student)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], StudentsService);
//# sourceMappingURL=students.service.js.map