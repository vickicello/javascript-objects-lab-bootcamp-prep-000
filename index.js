var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]:value });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
      var obj = { prop: 1 };
      return (obj, 'prop2', 2);
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var obj = { prop: 1 };
      var newObj = destructivelyDeleteFromObjectByKey(obj, 'prop');
      return object;
}


function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
}