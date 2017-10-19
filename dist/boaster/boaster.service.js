import { Injectable } from '@angular/core';
import { ToastMsg } from '../model/toast-msg';
import { ToastConfig } from '../model/toast-config';
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
        { type: Injectable },
    ];
    /** @nocollapse */
    BoasterService.ctorParameters = function () { return []; };
    return BoasterService;
}());
export { BoasterService };
//# sourceMappingURL=boaster.service.js.map