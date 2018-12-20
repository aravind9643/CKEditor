import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassicComponent } from './classic/classic.component';
import { DocumentComponent } from './document/document.component';
import { InlineComponent } from './inline/inline.component';

const routes: Routes = [
  { path: 'classic', component: ClassicComponent },
  { path: 'document', component: DocumentComponent },
  { path: 'inline', component: InlineComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
