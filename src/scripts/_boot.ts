import './app'
import { kernel } from './kernel'

kernel.bind('appEntryPoint').toConstantValue(document.getElementById('app'))

kernel.get('App')
