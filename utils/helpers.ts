export class AppHelper {
  static fomartCurrencyVND(price: number) {
    const vnd = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    return vnd.format(price);
  }
}
