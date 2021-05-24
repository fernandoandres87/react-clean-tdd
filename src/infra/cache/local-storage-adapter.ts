// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SetStorage } from '@/data/protocols/cache/set-storage'

export class LocalStorageAdapter implements SetStorage {
  async set (key: string, value: any): Promise<any> {
    localStorage.setItem(key, value)
  }
}
