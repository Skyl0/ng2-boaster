export class ToastConfig {

  horizontal: string;
  vertical: string;
  webApiNotifyFallback: boolean;

  constructor(vertical: string, horizontal: string, fallback: boolean) {
    this.horizontal = horizontal;
    this.vertical = vertical;
    this.webApiNotifyFallback = fallback;
  }
}
