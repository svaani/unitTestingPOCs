import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include :["7_vitest/source/**/__tests/**.js"],
  },
})