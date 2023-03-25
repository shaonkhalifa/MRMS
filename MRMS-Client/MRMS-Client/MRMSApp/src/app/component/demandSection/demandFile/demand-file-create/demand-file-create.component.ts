import { FileContainer } from './../../../../models/common/file-container';
import { Component } from '@angular/core';

@Component({
  selector: 'app-demand-file-create',
  templateUrl: './demand-file-create.component.html',
  styleUrls: ['./demand-file-create.component.css']
})
export class DemandFileCreateComponent {
constructor(){}

rows: FileContainer[] = [];

addItem() {
  const lastItem = this.rows[this.rows.length - 1];
  if (!lastItem || Object.values(lastItem).every(val => val !== null)) {
    this.rows.push({
      fileTypeId : 0,
      name: '',
      description: '',
      date: new Date(),
      file: null
    });
  }
}

  onItemChanged(rowData: any, index: number) {
    this.rows[index] = rowData;
  }
  onChildFileChange(file : File, index : number){
    if(file && file.size > 0){
      this.rows[index].file = file;
    }
  }

  onItemRemoved(index: number) {
    this.rows.splice(index, 1);
  }


  ngOnInit(): void {
    this.rows.push({
      fileTypeId : 0,
      name: '',
      description: '',
      date: new Date(),
      file: null
    });
  }
}
