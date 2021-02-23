import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  apiUrl: string = 'http://localhost:3000/products';

  list: Bill[] = [];

  constructor(private http: HttpClient) { }

  getAll(): Observable<Bill[]> {
    return this.http.get<Bill[]>(this.apiUrl);
  }

  get(bill: Bill): Observable<Bill> {
    return this.http.get<Bill>(`${this.apiUrl}/${bill.id}`);
  }

  update(bill: Bill): Observable<Bill> {
    return this.http.patch<Bill>(`${this.apiUrl}/${bill.id}`, bill);
  }

  create(bill: Bill): void {
    this.http.post<Bill>(`${this.apiUrl}`, bill).subscribe(
      () => this.getAll()
    );
  }

  remove(bill: Bill): Observable<Bill> {
    return this.http.delete<Bill>(`${this.apiUrl}/${bill.id}`);
  }
}
