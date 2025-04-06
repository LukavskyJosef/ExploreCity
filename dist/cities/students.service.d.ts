import { Repository } from "typeorm";
import { Student } from "./student.entity";
import { StudentDto } from "./dto/student.dto";
export declare class StudentsService {
    private studentRepository;
    constructor(studentRepository: Repository<Student>);
    getStudents(): Promise<Student[]>;
    getStudent(id: number): Promise<Student>;
    createStudent(data: StudentDto): Promise<Student>;
    deleteStudent(id: number): Promise<void>;
    updateStudent(id: number, data: StudentDto): Promise<Student>;
}
