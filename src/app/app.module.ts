import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassicComponent } from './classic/classic.component';
import { DocumentComponent } from './document/document.component';
import { InlineComponent } from './inline/inline.component';
import { BalloonComponent } from './balloon/balloon.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassicComponent,
    DocumentComponent,
    InlineComponent,
    BalloonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
