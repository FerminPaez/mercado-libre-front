import { getDescription } from '../../src/services/services'

describe('Suite of services', () => {
  test('getDescription', async () => {
    const response = await getDescription('MLA1192747326')
    expect(typeof response).tobe(Promise)
  })
})
