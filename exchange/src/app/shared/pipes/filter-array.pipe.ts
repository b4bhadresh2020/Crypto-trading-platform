import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArrayPipe'
})
export class FilterArrayPipe implements PipeTransform {
  transform(array: Array<any>): Array<string> {
    array.sort((a: any, b: any) => {
      if (a.price < b.price) {
        return -1;
      } else if (a.price > b.price) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}

@Pipe({
  name: 'tradeDatePipe'
})
export class TradeDatePipe implements PipeTransform {
  transform(value, fromDate: Date, toDate: Date, args) {
    if (value === undefined || value == null) {
      return;
    }

    if (args != null) {
      if (args === 0) {
        value = value.filter(function (item) {
          return item;
        });
      } else if (args !== '0') {
        value = value.filter(function (item) {
          return item.Type.toLowerCase().indexOf(args.toLowerCase()) > -1;
        });
      }
    }

    if (fromDate === undefined || toDate === undefined) {
      return value;
    }

    // if (!fromDate.isValidDate() || !toDate.isValidDate()) {
    //   return value;
    // }

    const fd = new Date(fromDate).getDate();
    const td = new Date(toDate).getDate();
    if (fd === td) {
      return value.filter(d => {
        const date = new Date(d.TransactionDate).getDate();
        return fd === date;
      });
    } else {
      return value.filter(d => {
        const date = new Date(d.TransactionDate).getDate();
        return fd <= date && date <= td;
      });
    }
  }
}
