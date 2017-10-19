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
export { ToastMsg };
//# sourceMappingURL=toast-msg.js.map