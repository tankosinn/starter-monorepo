import { mountSuspended } from '@nuxt/test-utils/runtime'
import { expect, it } from 'vitest'
import HelloWorld from './HelloWorld.vue'

it('should return "Hello World!"', async () => {
  const component = await mountSuspended(HelloWorld)
  expect(component.text()).toBe('Hello World!')
})
