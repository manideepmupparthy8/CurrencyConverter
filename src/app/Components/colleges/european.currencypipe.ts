// import { Pipe, PipeTransform } from "@angular/core";
// import { formatCurrency, getCurrencySymbol } from "@angular/common";
// @Pipe({
//     name: "mycurrency",
//   })
//   export class MycurrencyPipe implements PipeTransform {
//     transform(
//         value: number,
//         currencyCode: string = "EUR",
//         display:
//             | "code"
//             | "symbol"
//             | "symbol-narrow"
//             | string
//             | boolean = "symbol",
//         digitsInfo: string = "3.2-2",
//         locale: string = "fr",
//     ): string | null {
//         return formatCurrency(
//           value,
//           locale,
//           getCurrencySymbol(currencyCode, "wide"),
//           currencyCode,
//           digitsInfo,
//         );
//     }
// }


import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: "europeanCurrency"})
export class EuropeanCurrency implements PipeTransform {
  transform(value: number, args: string[]): any {

        if (! isNaN(value)) {
            const currencySymbol = "€";
            // var output = Number(input).toLocaleString('en-IN');   <-- This method is not working fine in all browsers!
            const result = value.toString().split(".");

            let lastThree = result[0].substring(result[0].length - 3);
            const otherNumbers = result[0].substring(0, result[0].length - 3);
            if (otherNumbers !== "") {
                lastThree = "." + lastThree;
            }
            let output = otherNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + lastThree;

            if (result.length > 1) {
                output += "," + result[1];
            }
            // return currencySymbol + output;
            return currencySymbol + output.slice(0, 5);
        }

  }
}
