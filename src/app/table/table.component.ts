import { Component } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatRadioChange } from '@angular/material';
export interface HPCharacters {
  name: string;
  User: number;
  type: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent {
  public isCheckedPrivate = false;
  public isCheckedPublic = false;
  public counterPrivate = 0;
  public counterPublic = 0;
  public topPrivateChecked = false;
  public topPublicChecked = false;
  public valueOptions: string[] = ['Private', 'Public'];
  displayedColumns: string[] = ['User', 'name', 'RadioGroup'];
  dataSource = new MatTableDataSource<HPCharacters>([
    { User: 1, name: 'Albus', type: ''},
    { User: 2, name: 'Harry' , type: ''},
    { User: 3, name: 'Ron', type: '' },
    { User: 4, name: 'Hermione' , type: ''},
    { User: 5, name: 'Ginny' , type: ''},
  ]);
  selection = new SelectionModel<HPCharacters>(true, []);

  onChangeRadio(value: string) {
    this.counterPrivate = this.counterPublic = 0;
    this.dataSource.filteredData.forEach((element) => {
      this.rowButton(value, element);
    });
    console.log("public:", this.isCheckedPublic, "   private:", this.isCheckedPrivate);
  }
  rowButton(value: string, element: HPCharacters) {
    console.log("element:",element);
    element.type = value;
    if (element.type == "Private") {
      ++this.counterPrivate;
      this.counterPublic = this.counterPublic > 0 ? this.counterPublic - 1 : 0;
    }
    else {
      ++this.counterPublic;
      this.counterPrivate = this.counterPrivate > 0 ?  this.counterPrivate - 1 : 0;
  }
this.topPrivateChecked = (this.counterPrivate == this.dataSource.filteredData.length);
this.topPublicChecked = (this.counterPublic == this.dataSource.filteredData.length);

// (this.counterPrivate === this.dataSource.filteredData.length) ? (this.topPrivateChecked = true, this.topPublicChecked = false) : (
//   this.topPublicChecked = (this.counterPublic === this.dataSource.filteredData.length), this.topPrivateChecked = false   
// );
//var some = ~(1 > 2);
//console.log(some);
console.log("topPrivateChecked: ", this.topPrivateChecked, "    topPublicChecked: ",this.topPublicChecked);
console.log("Private row: ", this.counterPrivate, "  public row: ",this.counterPublic);
}
}