import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent implements OnInit {
  public Editor = ClassicEditor;
    editorData = '<p>Hello, world!</p>'
  constructor() { }

  ngOnInit() {
  }

}
