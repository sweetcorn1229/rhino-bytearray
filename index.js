function ByteArray (size) {
  let _Array = java.lang.reflect.Array;
  let _Byte = java.lang.Byte;
  this.core = _Array.newInstance(_Byte.TYPE, size);
  return size;
}

ByteArray.prototype.init = function () {
  return this.core;
}
