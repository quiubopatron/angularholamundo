import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  // anno: number  = new Date().getFullYear();
  // mes: number = new Date().tologetUTCMonth();
  // dia: number = new Date().getUTCDay();
  fecha: string = new Date().toLocaleDateString('en-US');

  constructor() {
  }
  ngOnInit(): void {
  }
}
