function _ByteArray (size) {
  let _Array = java.lang.reflect.Array;
  let _Byte = java.lang.Byte;
  return _Array.newInstance(_Byte.TYPE, size);
}

if (this.module) {
  module.exports = {
    ByteArray: _ByteArray
  };
}
