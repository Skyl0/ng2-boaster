import {Component, OnInit} from '@angular/core';
import {BoastrService} from 'boastr.service';
import {ToastMsg} from '../model/toast-msg';
import {animate, group, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-toast',
    templateUrl: './toast.component.html',
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

export class ToastComponent implements OnInit {

    /**
     * ToastComponent is always shown and used to show Toast Notifications, when the app calls ToastService from anywhere.
     */

    constructor(public toastSrv: ToastService) {
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
            this.toastSrv.deleteMessage(msg);
        }
    }

}
