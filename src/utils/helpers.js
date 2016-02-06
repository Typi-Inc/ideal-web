import { toTree, toPaths as falcorToPaths } from 'falcor-path-utils';

export function values(obj) {
  if (!obj) {
    return [];
  }
  return Object.
    keys(obj).
    filter(key => key !== '$__path').
    map(key => obj[key]);
}

export function range(from, to, obj) {
  if (!obj) {
    return new Error('obj cannot be falsy');
  }
  if (to < from) {
    return new Error('to cannot be greater than from');
  }
  const result = {};
  for (let i = from; i <= to; i++) {
    result[i] = obj;
  }
  return result;
}

export function fragment(queries) {
  return toTree(falcorToPaths(queries));
}

function depthOf(obj) {
  let level = 1;
  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) continue;
    if (obj[key] && obj[key].constructor === Object) {
      const depth = depthOf(obj[key]) + 1;
      level = Math.max(depth, level);
    }
  }
  return level;
}

function* iterateTree(tree) {
  for (const key in tree) {
    if (tree.hasOwnProperty(key)) {
      const value = { [key]: tree[key] };
      yield { value, length: depthOf(value) };
    }
  }
}

export function toLengthTree(tree) {
  const result = {};
  for (const { value, length } of iterateTree(tree)) {
    if (!result[length]) {
      result[length] = {};
    }
    result[length] = {
      ...result[length],
      ...value
    };
  }
  return result;
}

export function toPaths(tree) {
  return falcorToPaths(toLengthTree(tree));
}

export function prependToPaths(toPrepend, paths) {
  if (!toPrepend && !paths) {
    return new Error('arguments cannot be falsy');
  }
  if (toPrepend.constructor !== Array) {
    return new Error('argument must be an array which will be prepented to every path');
  }
  if (paths.constructor !== Array) {
    return new Error('paths must be an array');
  }
  const result = [];
  for (const path of paths) {
    result.push(toPrepend.concat(path));
  }
  return result;
}
