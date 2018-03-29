import { kernel } from './kernel'
import './app';

kernel.bind('appEntryPoint').toConstantValue(document.getElementById('app'))

kernel.get('App')
