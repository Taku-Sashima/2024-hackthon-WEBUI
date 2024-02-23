//接続したいPCのIPアドレスに変える
const raw_host = process.env.API_HOST || 'localhost:8000'

export const host = `http://${raw_host}`
export const ws_host = `ws://${raw_host}`
