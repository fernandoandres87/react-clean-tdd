// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { LocalSaveAccessToken } from '@/data/usecases/save-access-token/local-save-access-token'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SaveAccessToken } from '@/domain/usecases'
import { makeLocalStorageAdapter } from '@/main/factories/cache/local-storage-adapter-factory'

export const makeLocalSaveAccessToken = (): SaveAccessToken => {
  return new LocalSaveAccessToken(makeLocalStorageAdapter())
}
