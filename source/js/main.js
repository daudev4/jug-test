import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';
import {initFrames} from './modules/init-frames';
import {initAnswer} from './modules/init-answer';
import {initSubscribe} from './modules/init-subscribe';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------


initModals();
initFrames();
initAnswer();
initSubscribe();
