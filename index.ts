<div class="alert-container alert-position-{{toastSrv.config.vertical}} alert-position-{{toastSrv.config.horizontal}}">
    <div [@itemAnim] class="alert alert-{{msg.msgType}}" *ngFor="let msg of toastSrv.getMessages();" role="alert"
         (click)="dismiss(msg)">
        <button *ngIf="msg.userMustDismiss" type="button" class="close">
            <span aria-hidden="true">&times;</span>
        </button>
        <div class="toast-icon"><img src="./assets/images/appguard-v2.1.png"/></div>
        {{msg.msg}}
    </div>
</div>