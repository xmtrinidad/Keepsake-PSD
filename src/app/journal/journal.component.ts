import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {
  journalItems: {img: string, date: string, category: string, title: string, info: string}[] = [
    {
      img: '/assets/images/journal-1.gif',
      date: 'OCT 13 2014',
      category: 'identify',
      title: 'Sollicitudin Tortor Inceptos',
      info: 'Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh.'
    },
    {
      img: '/assets/images/journal-2.gif',
      date: 'OCT 20 2014',
      category: 'branding',
      title: 'Amet Inceptos Fringilla Fusce',
      info: 'Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh.'
    },
    {
      img: '/assets/images/journal-3.gif',
      date: 'SEP 19 2014',
      category: 'identify',
      title: 'Cursus Malesuada Justo',
      info: 'Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh.'
    },
    {
      img: '/assets/images/journal-4.gif',
      date: 'SEP 27 2014',
      category: 'identify',
      title: 'Ornare Cursus Bibendum Purus',
      info: 'Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
