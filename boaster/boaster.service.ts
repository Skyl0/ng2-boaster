import {Injectable} from '@angular/core';
import {ToastMsg} from '../model/toast-msg';
import {ToastConfig} from '../model/toast-config';

declare var Notification: any;
declare var document: any;

@Injectable()
export class BoasterService {

    /**
     * This is the Core of the Toasts, managing the currently shown Toasts and providing methods for other components
     * to call on to show Toasts in different styles.
     */

        // Array of the currently shown Toast Messages. Usually is empty.
    messages: ToastMsg[] = [];
    // The Config used, for position.
    config: ToastConfig;
    // Timeout after which the non-dismissable Toasts are hidden.
    timeout = 3000;
    notificationsAllowed = false;

    constructor() {

        // Create a basic Config, to show in top and right, and use WebAPI Notifications as callback, if the app is currently
        // not the focus in the browser (e.g. User browsing in another Tab)
        this.config = new ToastConfig('top', 'right', true);

    }

    showToast(text: string, type: string, userMustDismiss: boolean): void {
        // Most used form of showing a Toast. User can specify the text, color (via Alert Type from Bootstrap) and
        // if the User must dismiss it via clicking.
        if (!document.hidden) {
            // Normal Case, show the Toast Msg by adding it to the Array
            this.addMessage(new ToastMsg(text, type, userMustDismiss));
        } else if (this.notificationsAllowed) {
            // if Notifications are allowed and document is hidden, show it via the WebAPI Notifications
            this.spawnNotification(text, '../../assets/iconset/png/045-idea.png', text);
        }
    }

    showDelayedToast(text: string, type: string, userMustDismiss: boolean, delay: number): void {
        // same as showToast but with configurable delay.
        this.wait(delay).then(() => {
            this.showToast(text, type, userMustDismiss);
        });
    }

    getMessages(): ToastMsg[] {
        // return the Array of messages, for viewing them
        return this.messages;
    }

    private spawnNotification(body: string, icon: string, title: string): void {
        // WebAPI Notifications
        let options = {
            body: body,
            icon: icon
        };
        let n = new Notification(title, options);
        // Show for given time
        setTimeout(n.close.bind(n), this.timeout);
    }

    private addMessage(msg: ToastMsg): void {
        // A new Toast is received and will be added to the array.
        this.messages.push(msg);
        if (!msg.userMustDismiss) {
            // When its a normal Toast, without the users action needed, remove it after given time
            this.wait(this.timeout).then(() => {
                this.deleteMessage(msg)
            });
        }
    }

    deleteMessage(msg: ToastMsg) {
        // find the message and remove it from the array.
        const index = this.messages.indexOf(msg);
        if (index > -1) {
            this.messages.splice(index, 1);
        }
    }

    wait(time: number): Promise<any> {
        return new Promise(resolve => setTimeout(resolve, time));
    }

}
