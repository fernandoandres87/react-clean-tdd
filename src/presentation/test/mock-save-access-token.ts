// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SaveAccessToken } from '@/domain/usecases'

export class SaveAccessTokenMock implements SaveAccessToken {
  accessToken: string

  async save (accessToken: string): Promise<void> {
    this.accessToken = accessToken
  }
}