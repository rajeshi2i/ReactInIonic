import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestReactComponent } from './test-react/test-react';
import { TestAngularComponent } from './test-angular/test-angular';
@NgModule({
	declarations: [TestReactComponent,
    TestAngularComponent],
	imports: [CommonModule],
	exports: [TestReactComponent,
    TestAngularComponent]
})
export class ComponentsModule {}
