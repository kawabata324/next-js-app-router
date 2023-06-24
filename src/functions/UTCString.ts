export class UTCString {
  utc: string

  constructor(utc: string) {
    this.utc = utc
  }

  toJSTString() {
    const time = new Date(this.utc)
    time.setHours(time.getHours() + 9)
    return time.toLocaleString("ja-JP")
  }
}
