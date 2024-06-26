import dotenv from "dotenv"

dotenv.config()

export const BASE_URL = process.env.BASE_URL ?? "http://localhost:8000"
export const RESET_PASSWORD_LINK = process.env.RESET_PASSWORD_LINK ?? "http://localhost:8000/reset-password"

export const PORT = process.env.PORT ?? 8000
export const MONGODB_URI = process.env.MONGODB_URI ?? ""
export const LOG_PATH = process.env.LOG_PATH ?? "logs/"
export const JWT_SECRET = process.env.JWT_SECRET ?? ""

export const MAIL_OPTIONS = {
    config: {
        host: process.env.MAIL_HOST ?? "",
        port: process.env.MAIL_PORT ? parseInt(process.env.MAIL_PORT) : 2525,
        auth: {
            user: process.env.MAIL_USERNAME ?? "",
            pass: process.env.MAIL_PASSWORD ?? "",
        }
    },
    admin_email: process.env.ADMIN_EMAIL ?? ""
}