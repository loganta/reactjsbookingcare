import EventEmitter from 'events';

const _emitter = new EventEmitter();
_emitter.setMaxListeners(0); //unlimit listeners
const emitter = _emitter;

export default emitter;