import { Component, type OnInit } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { database } from './data';

export interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
  birthday: string;
}

const mockData = () => {
  return new Promise<Person[]>(resolve => {
    setTimeout(() => {
      resolve(database);
    }, 200);
  });
};

@Component({
  selector: 'app-table',
  imports: [NzTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {
  listOfData: Person[] = [];
  tableLoading = false;

  async ngOnInit() {
    this.listOfData = await this.getPersonList();
  }

  async getPersonList() {
    this.tableLoading = true;
    const personList = await mockData();
    this.tableLoading = false;

    return personList;
  }
}
