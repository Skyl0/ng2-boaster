(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/animations')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/animations'], factory) :
	(factory((global['ng2-boaster'] = {}),global.ng.core,global.common,global.animations));
}(this, (function (exports,core,common,animations) { 'use strict';

var ToastMsg = /** @class */ (function () {
    function ToastMsg(msg, msgType, userMustDismiss, imageUrl) {
        this.msg = msg;
        this.msgType = msgType;
        this.userMustDismiss = userMustDismiss;
        if (imageUrl) {
            this.imageUrl = imageUrl;
        }
    }
    return ToastMsg;
}());

var ToastConfig = /** @class */ (function () {
    function ToastConfig(vertical, horizontal, fallback) {
        this.horizontal = horizontal;
        this.vertical = vertical;
        this.webApiNotifyFallback = fallback;
    }
    return ToastConfig;
}());

var BoasterService = /** @class */ (function () {
    function BoasterService() {
        /**
         * This is the Core of the Toasts, managing the currently shown Toasts and providing methods for other components
         * to call on to show Toasts in different styles.
         */
        // Array of the currently shown Toast Messages. Usually is empty.
        this.messages = [];
        // Timeout after which the non-dismissable Toasts are hidden.
        this.timeout = 3000;
        this.notificationsAllowed = false;
        // Create a basic Config, to show in top and right, and use WebAPI Notifications as callback, if the app is currently
        // not the focus in the browser (e.g. User browsing in another Tab)
        this.config = new ToastConfig('top', 'right', true);
    }
    BoasterService.prototype.showToast = function (text, type, userMustDismiss) {
        // Most used form of showing a Toast. User can specify the text, color (via Alert Type from Bootstrap) and
        // if the User must dismiss it via clicking.
        if (!document.hidden) {
            // Normal Case, show the Toast Msg by adding it to the Array
            this.addMessage(new ToastMsg(text, type, userMustDismiss));
        }
        else if (this.notificationsAllowed) {
            // if Notifications are allowed and document is hidden, show it via the WebAPI Notifications
            this.spawnNotification(text, '../../assets/iconset/png/045-idea.png', text);
        }
    };
    BoasterService.prototype.showDelayedToast = function (text, type, userMustDismiss, delay) {
        var _this = this;
        // same as showToast but with configurable delay.
        this.wait(delay).then(function () {
            _this.showToast(text, type, userMustDismiss);
        });
    };
    BoasterService.prototype.getMessages = function () {
        // return the Array of messages, for viewing them
        return this.messages;
    };
    BoasterService.prototype.spawnNotification = function (body, icon, title) {
        // WebAPI Notifications
        var options = {
            body: body,
            icon: icon
        };
        var n = new Notification(title, options);
        // Show for given time
        setTimeout(n.close.bind(n), this.timeout);
    };
    BoasterService.prototype.addMessage = function (msg) {
        var _this = this;
        // A new Toast is received and will be added to the array.
        this.messages.push(msg);
        if (!msg.userMustDismiss) {
            // When its a normal Toast, without the users action needed, remove it after given time
            this.wait(this.timeout).then(function () {
                _this.deleteMessage(msg);
            });
        }
    };
    BoasterService.prototype.deleteMessage = function (msg) {
        // find the message and remove it from the array.
        var index = this.messages.indexOf(msg);
        if (index > -1) {
            this.messages.splice(index, 1);
        }
    };
    BoasterService.prototype.wait = function (time) {
        return new Promise(function (resolve) { return setTimeout(resolve, time); });
    };
    BoasterService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    BoasterService.ctorParameters = function () { return []; };
    return BoasterService;
}());

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
        { type: core.Component, args: [{
                    selector: 'app-toast',
                    templateUrl: './boaster.template.html',
                    styles: [],
                    animations: [
                        animations.trigger('itemAnim', [
                            animations.transition(':enter', [
                                animations.style({ transform: 'translateY(50px)' }),
                                animations.animate(350)
                            ]),
                            animations.transition(':leave', [
                                animations.group([
                                    animations.animate('0.5s ease', animations.style({
                                        transform: 'translateY(-10px)'
                                    })),
                                    animations.animate('0.5s 0.2s ease', animations.style({
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

var BoasterModule = /** @class */ (function () {
    function BoasterModule() {
    }
    BoasterModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: [BoasterComponent],
                    providers: [BoasterService],
                    exports: [BoasterComponent]
                },] },
    ];
    /** @nocollapse */
    BoasterModule.ctorParameters = function () { return []; };
    return BoasterModule;
}());

exports.BoasterModule = BoasterModule;
exports.BoasterComponent = BoasterComponent;
exports.BoasterService = BoasterService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
