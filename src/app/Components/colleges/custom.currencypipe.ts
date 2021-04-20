import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: "indianCurrency"})
export class IndianCurrency implements PipeTransform {
  transform(value: number, args: string[]): any {

        if (! isNaN(value)) {
            const currencySymbol = "₹";
            // var output = Number(input).toLocaleString('en-IN');   <-- This method is not working fine in all browsers!
            const result = value.toString().split(".");

            let lastThree = result[0].substring(result[0].length - 3);
            const otherNumbers = result[0].substring(0, result[0].length - 3);
            if (otherNumbers !== "") {
                lastThree = "," + lastThree;
            }
            let output = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

            if (result.length > 1) {
                output += "." + result[1];
            }

            return currencySymbol + output;
        }

  }
}

// import { Pipe, PipeTransform } from "@angular/core";

// @Pipe({
//   name: "pricePipe"
// })
// export class PricePipePipe implements PipeTransform {

//   transform(value: number, args: string[]): any {

//     if (! isNaN(value)) {
//         const currencySymbol = "₹";
//         if (value == null) {
//           return "";
//       }
//         let InrRSOut = value;
//         InrRSOut = Math.round(InrRSOut);
//         let RV = "";
//         if (InrRSOut > 0 && InrRSOut < 1000) {
//           RV = InrRSOut.toString();
//       }
//       else if (InrRSOut >= 1000 && InrRSOut < 10000) {
//           RV = InrRSOut.toString();
//       }
//       else if (InrRSOut >= 10000 && InrRSOut < 100000) {
//           const f1 = InrRSOut.toString().substring(0, 2);
//           const f2 = InrRSOut.toString().substring(2, 5);
//           RV = f1 + "," + f2;

//       }
//       else if (InrRSOut >= 100000 && InrRSOut < 1000000) {
//           const f1 = InrRSOut.toString().substring(0, 1);
//           const f2 = InrRSOut.toString().substring(1, 3);
//           if (f2 === "00") {
//               RV = f1 + " Lacs";
//           }
//           else {
//               RV = f1 + "." + f2 + " Lacs";
//           }
//       }
//       else if (InrRSOut >= 1000000 && InrRSOut < 10000000) {
//           const f1 = InrRSOut.toString().substring(0, 2);
//           const f2 = InrRSOut.toString().substring(2, 4);
//           if (f2 === "00") {
//               RV = f1 + " Lacs";
//           }
//           else {
//               RV = f1 + "." + f2 + " Lacs";
//           }
//       }
//       else if (InrRSOut >= 10000000 && InrRSOut < 100000000) {
//           const f1 = InrRSOut.toString().substring(0, 1);
//           const f2 = InrRSOut.toString().substring(1, 3);
//           if (f2 === "00") {
//               RV = f1 + " Cr";
//           }
//           else {
//               RV = f1 + "." + f2 + " Cr";
//           }
//       }
//       else if (InrRSOut >= 100000000 && InrRSOut < 1000000000) {
//           const f1 = InrRSOut.toString().substring(0, 2);
//           const f2 = InrRSOut.toString().substring(2, 4);
//           if (f2 === "00") {
//               RV = f1 + " Cr";
//           }
//           else {
//               RV = f1 + "." + f2 + " Cr";
//           }
//       }
//       else if (InrRSOut >= 1000000000 && InrRSOut < 10000000000) {
//           const f1 = InrRSOut.toString().substring(0, 3);
//           const f2 = InrRSOut.toString().substring(3, 5);
//           if (f2 === "00") {
//               RV = f1 + " Cr";
//           }
//           else {
//               RV = f1 + "." + f2 + " Cr";
//           }
//       }
//       else if (InrRSOut >= 10000000000) {
//           const f1 = InrRSOut.toString().substring(0, 4);
//           const f2 = InrRSOut.toString().substring(6, 8);
//           if (f2 === "00") {
//               RV = f1 + " Cr";
//           }
//           else {
//               RV = f1 + "." + f2 + " Cr";
//           }
//       }
//       else {
//           RV = InrRSOut.toString();
//       }
//         return currencySymbol + RV;
//     }

// }

// }
