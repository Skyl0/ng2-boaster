import {Component, OnInit} from '@angular/core';
import {BoasterService} from './boaster.service';
import {ToastMsg} from '../model/toast-msg';
import {animate, group, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-toast',
    template: '<div class="alert-container alert-position-{{boasterSrv.config.vertical}} alert-position-{{boasterSrv.config.horizontal}}">\n' +
    '    <div [@itemAnim] class="alert alert-{{msg.msgType}}" *ngFor="let msg of boasterSrv.getMessages();" role="alert"\n' +
    '         (click)="dismiss(msg)">\n' +
    '        <button *ngIf="msg.userMustDismiss" type="button" class="close">\n' +
    '            <span aria-hidden="true">&times;</span>\n' +
    '        </button>\n' +
    '        <div class="toast-icon"></div>\n' +
    '        {{msg.msg}}\n' +
    '    </div>\n' +
    '</div>',
    styles: [],
    animations: [
        trigger('itemAnim', [
            transition(':enter', [
                style({transform: 'translateY(50px)'}),
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
})

export class BoasterComponent implements OnInit {

    /**
     * ToastComponent is always shown and used to show Toast Notifications, when the app calls ToastService from anywhere.
     */

    constructor(public boasterSrv: BoasterService) {
    }

    ngOnInit() {

    }

    /**
     * dismiss given Toast Message
     * @param msg ToastMessage
     */

    dismiss(msg: ToastMsg): void {
        // Some Messages must be dismissed by clicking on them
        if (msg.userMustDismiss) {
            this.boasterSrv.deleteMessage(msg);
        }
    }

}
