import { Component, OnInit } from '@angular/core';
import { HttpTransactionsService } from 'src/app/services/http-transactions.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-prime-ng',
  templateUrl: './prime-ng.component.html',
  styleUrls: ['./prime-ng.component.css']
})
export class PrimeNgComponent implements OnInit {

  cols: any[] = [];
  subcols: any[] = [];
  tabledata: any = [];

  constructor(
    private http: HttpTransactionsService
  ) { }

  ngOnInit() {
    let get_process_details = this.http.processDetails.request().subscribe(
      (response: HttpResponse<any>) => {
        if (response.type == 4) {
          console.log(response.body);
          this.tabledata = response.body.data;
          this.sortData(this.cols[0]);
          get_process_details.unsubscribe();
        }
      },
      (error: Error) => {
        alert(error.stack);
        console.log(error);
        get_process_details.unsubscribe();
      }
    )

    this.cols = [
      {
        type: 'column',
        field: 'process_name',
        header: 'Process Name',
        sortable: true,
        sortmode: null
      },
      {
        type: 'column',
        field: 'users',
        header: 'Users',
        sortable: true,
        sortmode: null
      },
      {
        type: 'column',
        field: 'aht',
        header: 'AHT',
        sortable: true,
        sortmode: null
      },
      {
        type: 'column',
        field: 'automatability',
        header: 'Automatibility',
        sortable: true,
        sortmode: null
      },
      {
        type: 'supercolumn',
        field: 'transactions',
        header: 'Transactions',
        no_of_subcols: 2,
      },
      {
        type: 'subcolumn',
        field: 'total',
        header: 'Total',
        superfield: 'transactions',
        sortable: true,
        sortmode: null
      },
      {
        type: 'subcolumn',
        field: 'per_day',
        header: 'Per Day',
        superfield: 'transactions',
        sortable: true,
        sortmode: null
      },
      {
        type: 'column',
        field: 'top_applications',
        header: 'Top 3 Applications'
      },
      {
        type: 'column',
        field: 'top_urls',
        header: 'Top 3 URLs'
      },

    ];
    for (let col of this.cols) {
      if (col.subcols) {
        for (let subcol of col.subcols) {
          this.subcols.push(subcol);
        }
      }
    }

  }

  sortData(col: any) {
    if (col.sortable) {
      for (let column of this.cols) {
        if (column != col)
          column.sortmode = null;
      }
      if (col.sortmode == 'asc') {
        this.tabledata.sort((a, b) => {
          if (col.superfield) {
            if (a[col.superfield][col.field] > b[col.superfield][col.field]) {
              return -1;
            }
            if (a[col.superfield][col.field] < b[col.superfield][col.field]) {
              return 1;
            }
            return 0;
          }
          if (a[col.field] > b[col.field]) {
            return -1;
          }
          if (a[col.field] < b[col.field]) {
            return 1;
          }
          return 0;
        });
        col.sortmode = 'desc';
      } else {
        this.tabledata.sort((a, b) => {
          if (col.superfield) {
            if (a[col.superfield][col.field] < b[col.superfield][col.field]) {
              return -1;
            }
            if (a[col.superfield][col.field] > b[col.superfield][col.field]) {
              return 1;
            }
            return 0;
          }
          if (a[col.field] < b[col.field]) {
            return -1;
          }
          if (a[col.field] > b[col.field]) {
            return 1;
          }
          return 0;
        });
        col.sortmode = 'asc';
      }
    }
  }

  stringify(obj: any) {
    if (typeof obj == "object")
      return JSON.stringify(obj);
    return obj;
  }


}
