export class Student {
  readonly name: string;
  readonly birthDate: Date;
  readonly description: string;

  constructor(name: string, birthDate: Date, description: string) {
    this.name = name;
    this.birthDate = birthDate;
    this.description = description;
  }
}
