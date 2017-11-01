import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BoasterService} from './boaster.service';
import {BoasterComponent} from './boaster.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    imports: [CommonModule, BrowserAnimationsModule],
    declarations: [BoasterComponent],
    providers: [BoasterService],
    exports: [BoasterComponent]
})
export class BoasterModule {
}
