import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public listdeVideos:Array<any>=[];
  ngOnInit(): void {

    this.listdeVideos = [
      {
        title:'Video 1',
        subtitle:'Subtitle Video 1',
        img:'https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68'
      },
      {
        title:'Video 2',
        subtitle:'Subtitle Video 2',
        img:'https://i.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA'
      },
      {
        title:'Video 3',
        subtitle:'Subtitle Video 3',
        img:'https://i.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU'
      }
    ]
  }
  title = 'portfolio-app';
}
