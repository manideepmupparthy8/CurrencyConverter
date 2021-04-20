import { Component, OnInit } from "@angular/core";
import { BreadcrumbService } from "../../app.breadcrumb.service";
import { FormBuilder } from "@angular/forms";
import { ConfirmationService } from "primeng/api";
import { Router } from "@angular/router";
import { DataService } from "../../data.service";
import { CurrencyPipe } from "@angular/common";

@Component({
  selector: "app-colleges",
  templateUrl: "./colleges.component.html",
  styleUrls: ["./colleges.component.scss"],
  providers: [ConfirmationService]
})
export class CollegesComponent implements OnInit {

  disableBtn = false;
  searchForm: any;
  countryValues = [
    // { label: "Active", value: "Active" },
    // { label: "Inactive", value: "Inactive" },
];
deptValues = [
  { label: "Computer Science and Engineering", value: "CSE" },
  { label: "Electronics Communication and Engineering", value: "ECE" },
  { label: "Civil Engineering", value: "Civil" },
  { label: "Mechanical Engineering", value: "Mech" },
  { label: "Electrical and Electronics Engineering", value: "EEE" },
];
currency: any;
stateValues = [];
cols = [];
values: any = [
    {
      itemName: "Sony Play Station 3",
      price: 55999,
      Qty: "1",
    },
    {
      itemName: "Apple Mac Book Pro",
      price: 196544999,
      Qty: "1",
    },
    {
      itemName: "OnePlus 9R 5G",
      price: 43999,
      Qty: "1",
    },

];
  enrollDialog = false;
  enrollForm: any;
  disableBtn1 = true;
  currencytoINR: any;
  currencytoUSD: any;
  btn: any;
  currencyPipeString: string;

constructor(private breadcrumbService: BreadcrumbService, private router: Router,
            private confirmationService: ConfirmationService, private fb: FormBuilder, private dataService: DataService) {
                // this.currencyPipeString = currencyPipe.transform(100, "USD");
    this.breadcrumbService.setItems([
        { label: "Colleges", routerLink: "/root/colleges" },
    ]);
}

ngOnInit(): void {
    this.cols = [
        { field1: "itemName", header: "Item Name" },
        { field2: "price", header: "Price." },
        { field3: "Qty", header: "Quantity" },
        // { field: "actions", header: "Actions" },
    ];
    this.searchForm = this.fb.group({
      itemName: [""],
      price : [""],
      quantity: [""],

     });
    this.enrollForm = this.fb.group({
      Sname: [""],
      dept : [""],
      contactNo: [""],

     });
    this.dataService.getCurrency().subscribe((data: any) => {
      this.currency = data;
      this.currencytoINR = data.rates.INR;
      this.currencytoUSD = data.rates.USD;
      console.log(data);
      console.log(data.rates.INR);
      console.log(data.rates.USD);
    });
}

enroll(){
  this.enrollDialog = true;
}
CancelEnroll(){
  this.enrollDialog = false;
}
confirm2() {
  this.confirmationService.confirm({
      message: "Do you want to delete this record?",
      header: "Delete Confirmation",
      icon: "pi pi-info-circle",
      // accept: () => {
      //     this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
      // },
      // reject: () => {
      //     this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      // }
  });
}
gotoEnrollList(){
  this.router.navigateByUrl("/root/enrolllist");
}

onClick()
{
  this.disableBtn = true;
  this.disableBtn1 = false;
  this.values.forEach( x  => {
    x.price = x.price / this.currencytoINR;
  });
  // this.disableBtn = true;
  // this.disableBtn1 = false;
  // this.values.forEach((x, i) => {
  //   if ( i === index)
  //   {
  //     x.price = x.price / 74.54;
  //   }
  // });
  // console.log(this.values);
}

onCurrencyChange()
{
  // console.log(index);
  this.disableBtn1 = true;
  this.disableBtn = false;
  this.values.forEach( x  => {
  x.price = x.price * this.currencytoINR;
});
//   this.disableBtn1 = true;
//   this.disableBtn = false;
//   this.values.forEach((x, i) => {
//   if ( i === index)
//   {
//     x.price = x.price * 74.54;
//   }
// });
//   console.log(this.values);
}

}
