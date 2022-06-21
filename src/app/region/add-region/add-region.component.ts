import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.scss']
})
export class AddRegionComponent implements OnInit {

  addRegionForm:FormGroup;

   loadRegion={
    'regionName':'Asian'
    
  }
  constructor(private builder:FormBuilder) {
    this.addRegionForm= builder.group({
      'regionName':new FormControl(null,[Validators.required,Validators.minLength(4)]),
      'regionDescription': new FormControl()
    });
   // this.addRegionForm.setValue(this.loadRegion)
  // this.addRegionForm.patchValue(this.loadRegion);
   }

  ngOnInit(): void {
    
  }
  saveRegion(){
    console.log(this.addRegionForm.value)
    
  }

}
