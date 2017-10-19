import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoasterService } from './boaster.service';
import { BoasterComponent } from './boaster.component';
var BoasterModule = /** @class */ (function () {
    function BoasterModule() {
    }
    BoasterModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [BoasterComponent],
                    providers: [BoasterService],
                    exports: [BoasterComponent]
                },] },
    ];
    /** @nocollapse */
    BoasterModule.ctorParameters = function () { return []; };
    return BoasterModule;
}());
export { BoasterModule };
//# sourceMappingURL=boaster.module.js.map