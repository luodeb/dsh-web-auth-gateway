import { clientBundle } from './shared/tsdown.client.ts'

export default clientBundle('dsh-web-auth-gateway', ['src/index.ts'], {
  lib: { external: ['@deepseek-ai/cordis', '@deepseek-ai/dsh-settings'] },
})
