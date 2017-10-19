import { ToastMsg } from '../model/toast-msg';
import { ToastConfig } from '../model/toast-config';
export declare class BoasterService {
    /**
     * This is the Core of the Toasts, managing the currently shown Toasts and providing methods for other components
     * to call on to show Toasts in different styles.
     */
    messages: ToastMsg[];
    config: ToastConfig;
    timeout: number;
    notificationsAllowed: boolean;
    constructor();
    showToast(text: string, type: string, userMustDismiss: boolean): void;
    showDelayedToast(text: string, type: string, userMustDismiss: boolean, delay: number): void;
    getMessages(): ToastMsg[];
    private spawnNotification(body, icon, title);
    private addMessage(msg);
    deleteMessage(msg: ToastMsg): void;
    wait(time: number): Promise<any>;
}
