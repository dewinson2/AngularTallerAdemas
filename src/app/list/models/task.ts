



export class task {
  id: number;
  
  description: string;
  state: boolean;
  constructor( description: string   ) {
    this.id = 0;
    this.description = description;
    this.state = false;
  }
  
}