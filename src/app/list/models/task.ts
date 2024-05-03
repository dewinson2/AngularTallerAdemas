



export class task {
  id: number;
  
  description: string;
  state: boolean;
  name: string;
  constructor( description: string, name: string ) {
    this.id = 0;
    this.description = description;
    this.state = false;
    this.name = name;
  }
  
}