import { kernel } from './kernel'

import './_logo'
import './_routes'
import './app'
import './components/control-sidebar'
import './components/header'
import './components/sidebar'
import './layout'

kernel.bind('appEntryPoint').toConstantValue(document.getElementById('app'))

kernel.get('App')
