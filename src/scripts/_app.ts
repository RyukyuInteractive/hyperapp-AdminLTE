import { kernel } from './kernel'

import './_logo'
import './_root'
import './_routes'
import './app'
import './components/box-widget'
import './components/chart'
import './components/control-sidebar'
import './components/header'
import './components/layout'
import './components/sidebar'

kernel.bind('appEntryPoint').toConstantValue(document.getElementById('app'))

kernel.get('App')
