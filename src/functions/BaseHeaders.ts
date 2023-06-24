export class BaseHeaders {
  static getQiitaBaseHeader(): Headers {
    const headers = new Headers()
    headers.append("Authorization", `Bearer ${process.env.QIITA_API_TOKEN}`)
    return headers
  }
}
