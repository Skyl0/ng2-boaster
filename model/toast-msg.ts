export class ToastMsg {

  imageUrl: string;
  msg: string;
  msgType: string;
  userMustDismiss: boolean;

  constructor (msg: string, msgType: string, userMustDismiss: boolean, imageUrl?: string) {
    this.msg = msg;
    this.msgType = msgType;
    this.userMustDismiss = userMustDismiss;
    if (imageUrl) {
      this.imageUrl = imageUrl;
    }
  }
}
