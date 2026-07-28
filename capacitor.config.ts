import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.zaatot.app',
  appName: 'Zaatot',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
}

export default config
