import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { TestReactComponent } from './test-react/test-react';
import { TestAngularComponent } from './test-angular/test-angular';
@NgModule({
	declarations: [TestReactComponent,
    TestAngularComponent],
	imports: [CommonModule, IonicModule],
	exports: [TestReactComponent,
    TestAngularComponent]
})
export class ComponentsModule {}
