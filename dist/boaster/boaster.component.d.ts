import { OnInit } from '@angular/core';
import { BoasterService } from './boaster.service';
import { ToastMsg } from '../model/toast-msg';
export declare class BoasterComponent implements OnInit {
    boasterSrv: BoasterService;
    /**
     * ToastComponent is always shown and used to show Toast Notifications, when the app calls ToastService from anywhere.
     */
    constructor(boasterSrv: BoasterService);
    ngOnInit(): void;
    /**
     * dismiss given Toast Message
     * @param msg ToastMessage
     */
    dismiss(msg: ToastMsg): void;
}
