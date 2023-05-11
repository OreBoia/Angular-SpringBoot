import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';

export interface PeriodicElement {
  inputPos: number;
  position: number;
  status: string;
  description: string;
  input: string;
  screen: string;
  download: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, inputPos: 1, status: 'Idle', description: 'desc', input: 'input', screen: 'screen', download: 'download'},

];

@Component({
  selector: 'app-input-manager',
  templateUrl: './input-manager.component.html',
  styleUrls: ['./input-manager.component.css']
})
export class InputManagerComponent {

  displayedColumns: string[] = ['select', 'inputPos', 'status', 'description', 'inp', 'screen', 'download'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
