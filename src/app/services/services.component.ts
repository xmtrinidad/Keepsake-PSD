import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  serviceTypes: {img: string, title: string, info: string}[] = [
    {img: '/assets/images/whatwedo-1.gif', title: 'web design', info: 'Donec elit non mi porta gravida eureget metus. Aenean eu leo quam. Pellentesque ornare sem por quam venenatis vestibulum.' },
    {img: '/assets/images/whatwedo-2.gif', title: 'web design', info: 'Donec elit non mi porta gravida eureget metus. Aenean eu leo quam. Pellentesque ornare sem por quam venenatis vestibulum.' },
    {img: '/assets/images/whatwedo-3.gif', title: 'web design', info: 'Donec elit non mi porta gravida eureget metus. Aenean eu leo quam. Pellentesque ornare sem por quam venenatis vestibulum.' },
    {img: '/assets/images/whatwedo-4.gif', title: 'web design', info: 'Donec elit non mi porta gravida eureget metus. Aenean eu leo quam. Pellentesque ornare sem por quam venenatis vestibulum.' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
