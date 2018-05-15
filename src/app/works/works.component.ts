import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  workImages: {img: string, alt: string}[] = [
    {img: '/assets/images/port-img-1.gif', alt: 'mock up portfolio project'},
    {img: '/assets/images/port-img-2.gif', alt: 'pie project portfolio project'},
    {img: '/assets/images/port-img-3.gif', alt: 'album cover portfolio project'},
    {img: '/assets/images/port-img-4.gif', alt: 'book portfolio project'},
    {img: '/assets/images/port-img-5.gif', alt: 'social media portfolio project'},
    {img: '/assets/images/port-img-6.gif', alt: 'business card portfolio project'},
    {img: '/assets/images/port-img-7.gif', alt: 'logo portfolio project'},
    {img: '/assets/images/port-img-8.gif', alt: 'graphic design portfolio project'},
    {img: '/assets/images/port-img-9.gif', alt: 'logo portfolio project'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
