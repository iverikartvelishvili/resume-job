import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resume';
  jobForm!:FormGroup

  constructor(private fBuilder:FormBuilder){
     this.jobForm =  this.fBuilder.group({
     jobs:this.fBuilder.array([])
    })
  }
  getJobs():FormArray{
    return this.jobForm.get('jobs') as FormArray
  }
  newJob():FormGroup{
    return this.fBuilder.group({
      companyName:"",
      companyWorkDescription:"",
      workExps:this.fBuilder.array([])
    })
  }
  getWorkExps(jobIndex:number):FormArray{
     return this.getJobs().at(jobIndex).get("workExps") as FormArray
  }
  newWorkExp():FormGroup{
    return this.fBuilder.group({
      position:"",
      startAt:"",
      endAt:""
    })
  }
  addNewJob(){
    this.getJobs().push(this.newJob())
  }
  deleteJob(jobIndex:number){
    this.getJobs().removeAt(jobIndex)
  }
  addNewWorkExp(jobIndex:number){
    this.getWorkExps(jobIndex).push(this.newWorkExp())
  }
  deleteJobExp(jobIndex:number, expIndex:number){
    this.getWorkExps(jobIndex).removeAt(expIndex)
  }
  onFormSubmit(){
    console.log(this.jobForm.value)
  }
}
