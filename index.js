var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]:value });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

var recipes = {};
var newRecipes = Object.assign({}, recipes);

function deleteFromObjectByKey(object, key) {
  delete newRecipes;
  return object;
}