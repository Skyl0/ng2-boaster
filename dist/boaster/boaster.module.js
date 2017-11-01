import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoasterService } from './boaster.service';
import { BoasterComponent } from './boaster.component';
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
var BoasterModule = (function () {
    function BoasterModule() {
    }
    return BoasterModule;
}());
export { BoasterModule };
BoasterModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NoopAnimationsModule],
                declarations: [BoasterComponent],
                providers: [BoasterService],
                exports: [BoasterComponent]
            },] },
];
/** @nocollapse */
BoasterModule.ctorParameters = function () { return []; };
//# sourceMappingURL=boaster.module.js.map