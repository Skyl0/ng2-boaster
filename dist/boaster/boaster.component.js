import { Component } from '@angular/core';
import { BoasterService } from './boaster.service';
import { animate, group, style, transition, trigger } from '@angular/animations';
var BoasterComponent = /** @class */ (function () {
    /**
     * ToastComponent is always shown and used to show Toast Notifications, when the app calls ToastService from anywhere.
     */
    function BoasterComponent(boasterSrv) {
        this.boasterSrv = boasterSrv;
    }
    BoasterComponent.prototype.ngOnInit = function () {
    };
    /**
     * dismiss given Toast Message
     * @param msg ToastMessage
     */
    BoasterComponent.prototype.dismiss = function (msg) {
        // Some Messages must be dismissed by clicking on them
        if (msg.userMustDismiss) {
            this.boasterSrv.deleteMessage(msg);
        }
    };
    BoasterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-toast',
                    templateUrl: './boaster.template.html',
                    styles: [],
                    animations: [
                        trigger('itemAnim', [
                            transition(':enter', [
                                style({ transform: 'translateY(50px)' }),
                                animate(350)
                            ]),
                            transition(':leave', [
                                group([
                                    animate('0.5s ease', style({
                                        transform: 'translateY(-10px)'
                                    })),
                                    animate('0.5s 0.2s ease', style({
                                        opacity: 0
                                    }))
                                ])
                            ])
                        ])
                    ]
                },] },
    ];
    /** @nocollapse */
    BoasterComponent.ctorParameters = function () { return [
        { type: BoasterService, },
    ]; };
    return BoasterComponent;
}());
export { BoasterComponent };
//# sourceMappingURL=boaster.component.js.map