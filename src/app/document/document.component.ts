import { Component, OnInit } from '@angular/core';
// import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  // public Editor = DecoupledEditor;

  constructor() { }

  ngOnInit() {
  }

  // public onReady(editor) {
  //   editor.ui.view.editable.element.parentElement.insertBefore(
  //     editor.ui.view.toolbar.element,
  //     editor.ui.view.editable.element
  //   );
  // }
}
