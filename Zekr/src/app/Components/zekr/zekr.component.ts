import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-zekr-count',
  templateUrl: './zekr.component.html',
  styleUrls: ['./zekr.component.scss'],
})
export class ZekrComponent implements OnInit {
  Count: number = 0;
  Zekr: any[] = [];
  selectZekr: number = 0;
  ZekrName: string;

  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
    if (localStorage.getItem('zekr')) {
      this.Zekr = JSON.parse(localStorage.getItem('zekr'));
      this.ChangeCount();
    } else {
      this.Zekr.push({
        Id: 0,
        Name: 'لا اله الا انت سبحانك اني كنت من الظالمين ',
        Count: 0,
      });
      this.Zekr.push({ Id: 1, Name: 'سبحان الله ', Count: 0 });
      this.Zekr.push({ Id: 2, Name: 'الحمد لله ', Count: 0 });
      this.Zekr.push({ Id: 3, Name: 'الله اكبر ', Count: 0 });
    }
  }
  openModalRecord(templateRecord: TemplateRef<any>) {
    this.modalRef = this.modalService.show(templateRecord);
  }
  openModalAddAzkar(templateAzkar: TemplateRef<any>) {
    this.modalRef = this.modalService.show(templateAzkar);
  }

  AddNewZekr() {
    if(this.ZekrName != ''){
      this.Zekr.push({ Id: this.Zekr.length, Name: this.ZekrName, Count: 0 });
      this.ZekrName = '';
      localStorage.setItem('zekr', JSON.stringify(this.Zekr));
      this.modalRef.hide();
    }

  }
  Increase() {
    this.Count++;
    this.Zekr[this.selectZekr].Count++;
    localStorage.setItem('zekr', JSON.stringify(this.Zekr));
  }
  ChangeCount() {
    this.Count = this.Zekr[this.selectZekr].Count;
  }
  ResetCount() {
    this.Count = 0;
    this.Zekr.forEach((res) => {
      res.Count = 0;
    });
    localStorage.setItem('zekr', JSON.stringify(this.Zekr));
  }


  ResetZekrCount() {
    this.Count = 0;
    this.Zekr[this.selectZekr].Count = 0;
    localStorage.setItem('zekr', JSON.stringify(this.Zekr));
  }
}
