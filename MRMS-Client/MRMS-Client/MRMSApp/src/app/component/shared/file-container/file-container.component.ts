import { Component,Input,Output,OnInit, EventEmitter } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { throwError } from 'rxjs';
import { FileContainer } from '../../../models/common/file-container';
import { FileTypes } from '../../../models/common/file-types';
import { FileTypeService } from '../../../services/common/file-type.service';
import { NotificationService } from '../../../services/Shared/notification.service';

@Component({
  selector: 'app-file-container',
  templateUrl: './file-container.component.html',
  styleUrls: ['./file-container.component.css']
})
export class FileContainerComponent {


  @Output() detailForm = new EventEmitter<any>();
  fileContainer: FileContainer = { fileTypeId: undefined, name: undefined, filepath: undefined,description:undefined,date:undefined}
  fileTypes: FileTypes[] = [];
  
 
  filecontainerForm: FormGroup = new FormGroup({
    //fileTypeId: new FormControl(undefined, Validators.required),
    //name: new FormControl(undefined, Validators.required),
    //filepath: new FormControl(undefined),
    fileContainerarray: new FormArray([])
  })
  constructor(
    //private orderService: OrderService,
    private fileTypeSvc: FileTypeService,
    private notifyService: NotificationService
  ) { }
  file: File = null!;
  save() {
    //if (this.filecontainerForm.invalid) return;
    ////console.log(this.orderForm.value);
    //Object.assign(this.order, this.filecontainerForm.value);
    ////console.log(this.order);
    //this.orderService.insert(this.order)
    //  .subscribe({
    //    next: r => {
    //      this.notifyService.message("Data saved", 'DISMISS');
    //    },
    //    error: err => {
    //      this.notifyService.message("Failed to load products", 'DISMISS');
    //      throwError(() => err);
    //    }
    //  })
  }


  addForms() {
    this.detailForm.emit();
  }




  handleFileInputChange(event: any): void {
    if (event.target.files.length) {
      this.file = event.target.files[0];
      this.filecontainerForm.controls['filepath'].patchValue(this.file.name);
    }
    else {
      this.filecontainerForm.controls['filepath'].patchValue("");
    }

  }

  get fileContainerFormArray() {
    return this.filecontainerForm.controls["fileContainerarray"] as FormArray;
  }
  addItem() {
    this.fileContainerFormArray.push(new FormGroup({
      fileTypeId: new FormControl(undefined, Validators.required),
      description: new FormControl(undefined, Validators.required),
      filepath: new FormControl(undefined),
      date: new FormControl(undefined, Validators.required)
    }))
  }
  removeItem(index: number) {
    if (this.fileContainerFormArray.controls.length > 1)
      this.fileContainerFormArray.removeAt(index);
  }

  submitFrom() {
    const data = {
      fileTypeId:this.fileContainer.fileTypeId,
      filePath: this.fileContainer.filepath,
      description: this.fileContainer.description,
      date:this.fileContainer.date

    }
  }

  ngOnInit(): void {
    
    this.fileTypeSvc.get()
      .subscribe({
        next: r => {
          this.fileTypes = r;
        },
        error: err => {
          this.notifyService.message("Failed to load FileTypes", 'DISMISS');
        }
      });

    //console.log(this.statusOptions)
    //this.addItem();
  }


}
