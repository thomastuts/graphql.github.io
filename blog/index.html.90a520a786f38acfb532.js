/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var _Object$keys = __webpack_require__(1)['default'];

	var React = __webpack_require__(13);
	var id = 100;
	function renderHere(element) {
	  React.render(element, document.getElementById('r' + ++id));
	}(function () {

	  // Code used in this blog post
	  "use strict";

	  var _graphql = __webpack_require__(14);

	  // Example data set
	  var data = ppl({
	    1572451031: "Daniel Schafer",
	    4802170: "Lee Byron",
	    37000641: "Nick Schrock",
	    100001239335739: "Scott Wolchok",
	    13957785: "Alex Langenfeld",
	    1433880147: "Laney Kuenzel",
	    9020247: "William Sanville",
	    305249: "Stephen Schwink",
	    1422854581: "Mike Paleczny",
	    1117650305: "Hyohyeon Jeong",
	    728642302: "Rasmus Andersson",
	    3108935: "Nathaniel Roman",
	    1289640489: "Charles Ma",
	    597621628: "Andrew Rasmussen",
	    665215028: "Keito Uchiyama"
	  });

	  function ppl(input) {
	    _Object$keys(input).forEach(function (id) {
	      input[id] = { id: id, name: input[id] };
	    });
	    return input;
	  }

	  function makePic(user, size) {
	    return {
	      width: size,
	      height: size,
	      uri: "cdn://pic/" + user.id + "/" + size
	    };
	  }

	  function friends(user, first) {
	    var allFriends = _Object$keys(data).map(function (id) {
	      return data[id];
	    }).filter(function (v) {
	      return v !== user;
	    });
	    return {
	      totalCount: allFriends.length,
	      friends: allFriends.slice(0, first)
	    };
	  }

	  var ImageType = new _graphql.GraphQLObjectType({
	    name: 'Image',
	    fields: {
	      width: { type: _graphql.GraphQLInt },
	      height: { type: _graphql.GraphQLInt },
	      uri: { type: _graphql.GraphQLString }
	    }
	  });

	  var FriendConnection = new _graphql.GraphQLObjectType({
	    name: 'FriendConnection',
	    fields: function fields() {
	      return {
	        totalCount: { type: _graphql.GraphQLInt },
	        friends: { type: new _graphql.GraphQLList(UserType) }
	      };
	    }
	  });

	  var UserType = new _graphql.GraphQLObjectType({
	    name: 'User',
	    fields: {
	      id: { type: _graphql.GraphQLID },
	      name: { type: _graphql.GraphQLString },
	      isViewerFriend: {
	        type: _graphql.GraphQLBoolean,
	        resolve: function resolve() {
	          return true;
	        }
	      },
	      profilePicture: {
	        args: { size: { type: _graphql.GraphQLInt } },
	        type: ImageType,
	        resolve: function resolve(user, _ref) {
	          var size = _ref.size;
	          return makePic(user, size);
	        }
	      },
	      friendConnection: {
	        args: { first: { type: _graphql.GraphQLInt } },
	        type: FriendConnection,
	        resolve: function resolve(user, _ref2) {
	          var first = _ref2.first;
	          return friends(user, first);
	        }
	      }
	    }
	  });

	  // Define our schema, with one top level field, named `user`, that
	  // takes an `id` argument and returns the User with that ID.
	  var schema = new _graphql.GraphQLSchema({
	    query: new _graphql.GraphQLObjectType({
	      name: 'Query',
	      fields: {
	        user: {
	          type: UserType,
	          args: { id: { type: _graphql.GraphQLID } },
	          resolve: function resolve(_, _ref3) {
	            var id = _ref3.id;
	            return data[id];
	          }
	        }
	      }
	    })
	  });

	  global.schema20150914 = schema;
	})();
	(function () {
	  'use strict';

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	  }

	  var _coreMiniGraphiQL = __webpack_require__(176);

	  var _coreMiniGraphiQL2 = _interopRequireDefault(_coreMiniGraphiQL);

	  renderHere(React.createElement(_coreMiniGraphiQL2['default'], { schema: global.schema20150914, query: '\n{\n  user(id: 4802170) {\n    id\n    name\n    isViewerFriend\n    profilePicture(size: 50)  {\n      uri\n      width\n      height\n    }\n    friendConnection(first: 5) {\n      totalCount\n      friends {\n        id\n        name\n      }\n    }\n  }\n}\n' }));
	})();
	(function () {
	  'use strict';

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	  }

	  var _coreMiniGraphiQL = __webpack_require__(176);

	  var _coreMiniGraphiQL2 = _interopRequireDefault(_coreMiniGraphiQL);

	  renderHere(React.createElement(_coreMiniGraphiQL2['default'], { schema: global.schema20150914, query: '\n{\n  __type(name: "User") {\n    name\n    fields {\n      name\n      type {\n        name\n      }\n    }\n  }\n}\n' }));
	})();
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(2), __esModule: true };

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	module.exports = __webpack_require__(9).Object.keys;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(4);

	__webpack_require__(6)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(5);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(7)
	  , core    = __webpack_require__(9)
	  , fails   = __webpack_require__(12);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(8)
	  , core      = __webpack_require__(9)
	  , ctx       = __webpack_require__(10)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 8 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 9 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(11);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	/**
	 * GraphQL.js provides a reference implementation for the GraphQL specification
	 * but is also a useful utility for operating on GraphQL files and building
	 * sophisticated tools.
	 *
	 * This primary module exports a general purpose function for fulfilling all
	 * steps of the GraphQL specification in a single operation, but also includes
	 * utilities for every part of the GraphQL specification:
	 *
	 *   - Parsing the GraphQL language.
	 *   - Building a GraphQL type schema.
	 *   - Validating a GraphQL request against a type schema.
	 *   - Executing a GraphQL request against a type schema.
	 *
	 * This also includes utility functions for operating on GraphQL types and
	 * GraphQL documents to facilitate building tools.
	 *
	 * You may also import from each sub-directory directly. For example, the
	 * following two import statements are equivalent:
	 *
	 *     import { parse } from 'graphql';
	 *     import { parse } from 'graphql/language';
	 */

	// The primary entry point into fulfilling a GraphQL request.
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _graphql = __webpack_require__(15);

	Object.defineProperty(exports, 'graphql', {
	  enumerable: true,
	  get: function get() {
	    return _graphql.graphql;
	  }
	});

	// Create and operate on GraphQL type definitions and schema.

	var _type = __webpack_require__(164);

	Object.defineProperty(exports, 'GraphQLSchema', {
	  enumerable: true,
	  get: function get() {
	    return _type.GraphQLSchema;
	  }
	});
	Object.defineProperty(exports, 'GraphQLScalarType', {
	  enumerable: true,
	  get: function get() {
	    return _type.GraphQLScalarType;
	  }
	});
	Object.defineProperty(exports, 'GraphQLObjectType', {
	  enumerable: true,
	  get: function get() {
	    return _type.GraphQLObjectType;
	  }
	});
	Object.defineProperty(exports, 'GraphQLInterfaceType', {
	  enumerable: true,
	  get: function get() {
	    return _type.GraphQLInterfaceType;
	  }
	});
	Object.defineProperty(exports, 'GraphQLUnionType', {
	  enumerable: true,
	  get: function get() {
	    return _type.GraphQLUnionType;
	  }
	});
	Object.defineProperty(exports, 'GraphQLEnumType', {
	  enumerable: true,
	  get: function get() {
	    return _type.GraphQLEnumType;
	  }
	});
	Object.defineProperty(exports, 'GraphQLInputObjectType', {
	  enumerable: true,
	  get: function get() {
	    return _type.GraphQLInputObjectType;
	  }
	});
	Object.defineProperty(exports, 'GraphQLList', {
	  enumerable: true,
	  get: function get() {
	    return _type.GraphQLList;
	  }
	});
	Object.defineProperty(exports, 'GraphQLNonNull', {
	  enumerable: true,
	  get: function get() {
	    return _type.GraphQLNonNull;
	  }
	});
	Object.defineProperty(exports, 'GraphQLInt', {
	  enumerable: true,
	  get: function get() {
	    return _type.GraphQLInt;
	  }
	});
	Object.defineProperty(exports, 'GraphQLFloat', {
	  enumerable: true,
	  get: function get() {
	    return _type.GraphQLFloat;
	  }
	});
	Object.defineProperty(exports, 'GraphQLString', {
	  enumerable: true,
	  get: function get() {
	    return _type.GraphQLString;
	  }
	});
	Object.defineProperty(exports, 'GraphQLBoolean', {
	  enumerable: true,
	  get: function get() {
	    return _type.GraphQLBoolean;
	  }
	});
	Object.defineProperty(exports, 'GraphQLID', {
	  enumerable: true,
	  get: function get() {
	    return _type.GraphQLID;
	  }
	});
	Object.defineProperty(exports, 'isType', {
	  enumerable: true,
	  get: function get() {
	    return _type.isType;
	  }
	});
	Object.defineProperty(exports, 'isInputType', {
	  enumerable: true,
	  get: function get() {
	    return _type.isInputType;
	  }
	});
	Object.defineProperty(exports, 'isOutputType', {
	  enumerable: true,
	  get: function get() {
	    return _type.isOutputType;
	  }
	});
	Object.defineProperty(exports, 'isLeafType', {
	  enumerable: true,
	  get: function get() {
	    return _type.isLeafType;
	  }
	});
	Object.defineProperty(exports, 'isCompositeType', {
	  enumerable: true,
	  get: function get() {
	    return _type.isCompositeType;
	  }
	});
	Object.defineProperty(exports, 'isAbstractType', {
	  enumerable: true,
	  get: function get() {
	    return _type.isAbstractType;
	  }
	});
	Object.defineProperty(exports, 'getNullableType', {
	  enumerable: true,
	  get: function get() {
	    return _type.getNullableType;
	  }
	});
	Object.defineProperty(exports, 'getNamedType', {
	  enumerable: true,
	  get: function get() {
	    return _type.getNamedType;
	  }
	});

	// Parse and operate on GraphQL language source files.

	var _language = __webpack_require__(79);

	Object.defineProperty(exports, 'Source', {
	  enumerable: true,
	  get: function get() {
	    return _language.Source;
	  }
	});
	Object.defineProperty(exports, 'getLocation', {
	  enumerable: true,
	  get: function get() {
	    return _language.getLocation;
	  }
	});
	Object.defineProperty(exports, 'parse', {
	  enumerable: true,
	  get: function get() {
	    return _language.parse;
	  }
	});
	Object.defineProperty(exports, 'parseValue', {
	  enumerable: true,
	  get: function get() {
	    return _language.parseValue;
	  }
	});
	Object.defineProperty(exports, 'print', {
	  enumerable: true,
	  get: function get() {
	    return _language.print;
	  }
	});
	Object.defineProperty(exports, 'visit', {
	  enumerable: true,
	  get: function get() {
	    return _language.visit;
	  }
	});
	Object.defineProperty(exports, 'Kind', {
	  enumerable: true,
	  get: function get() {
	    return _language.Kind;
	  }
	});
	Object.defineProperty(exports, 'BREAK', {
	  enumerable: true,
	  get: function get() {
	    return _language.BREAK;
	  }
	});

	// Execute GraphQL queries.

	var _execution = __webpack_require__(165);

	Object.defineProperty(exports, 'execute', {
	  enumerable: true,
	  get: function get() {
	    return _execution.execute;
	  }
	});

	// Validate GraphQL queries.

	var _validation = __webpack_require__(166);

	Object.defineProperty(exports, 'validate', {
	  enumerable: true,
	  get: function get() {
	    return _validation.validate;
	  }
	});
	Object.defineProperty(exports, 'specifiedRules', {
	  enumerable: true,
	  get: function get() {
	    return _validation.specifiedRules;
	  }
	});

	// Create and format GraphQL errors.

	var _error = __webpack_require__(67);

	Object.defineProperty(exports, 'GraphQLError', {
	  enumerable: true,
	  get: function get() {
	    return _error.GraphQLError;
	  }
	});
	Object.defineProperty(exports, 'formatError', {
	  enumerable: true,
	  get: function get() {
	    return _error.formatError;
	  }
	});

	// Utilities for operating on GraphQL type schema and parsed sources.

	var _utilities = __webpack_require__(167);

	Object.defineProperty(exports, 'introspectionQuery', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.introspectionQuery;
	  }
	});
	Object.defineProperty(exports, 'getOperationAST', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.getOperationAST;
	  }
	});
	Object.defineProperty(exports, 'buildClientSchema', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.buildClientSchema;
	  }
	});
	Object.defineProperty(exports, 'buildASTSchema', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.buildASTSchema;
	  }
	});
	Object.defineProperty(exports, 'extendSchema', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.extendSchema;
	  }
	});
	Object.defineProperty(exports, 'printSchema', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.printSchema;
	  }
	});
	Object.defineProperty(exports, 'typeFromAST', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.typeFromAST;
	  }
	});
	Object.defineProperty(exports, 'valueFromAST', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.valueFromAST;
	  }
	});
	Object.defineProperty(exports, 'astFromValue', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.astFromValue;
	  }
	});
	Object.defineProperty(exports, 'TypeInfo', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.TypeInfo;
	  }
	});
	Object.defineProperty(exports, 'isValidJSValue', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.isValidJSValue;
	  }
	});
	Object.defineProperty(exports, 'isValidLiteralValue', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.isValidLiteralValue;
	  }
	});
	Object.defineProperty(exports, 'concatAST', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.concatAST;
	  }
	});
	Object.defineProperty(exports, 'isEqualType', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.isEqualType;
	  }
	});
	Object.defineProperty(exports, 'isTypeSubTypeOf', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.isTypeSubTypeOf;
	  }
	});
	Object.defineProperty(exports, 'doTypesOverlap', {
	  enumerable: true,
	  get: function get() {
	    return _utilities.doTypesOverlap;
	  }
	});

	// Definitions

	// Scalars

	// Predicates

	// Un-modifiers

	// Parse

	// Print

	// Visit

	// The GraphQL query recommended for a full schema introspection.

	// Gets the target Operation from a Document

	// Build a GraphQLSchema from an introspection result.

	// Build a GraphQLSchema from a parsed GraphQL Schema language AST.

	// Extends an existing GraphQLSchema from a parsed GraphQL Schema
	// language AST.

	// Print a GraphQLSchema to GraphQL Schema language.

	// Create a GraphQLType from a GraphQL language AST.

	// Create a JavaScript value from a GraphQL language AST.

	// Create a GraphQL language AST from a JavaScript value.

	// A helper to use within recursive-descent visitors which need to be aware of
	// the GraphQL type system.

	// Determine if JavaScript values adhere to a GraphQL type.

	// Determine if AST values adhere to a GraphQL type.

	// Concatenates multiple AST together.

	// Comparators for types

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	/**
	 * This is the primary entry point function for fulfilling GraphQL operations
	 * by parsing, validating, and executing a GraphQL document along side a
	 * GraphQL schema.
	 *
	 * More sophisticated GraphQL servers, such as those which persist queries,
	 * may wish to separate the validation and execution phases to a static time
	 * tooling step, and a server runtime step.
	 *
	 * schema:
	 *    The GraphQL type system to use when validating and executing a query.
	 * requestString:
	 *    A GraphQL language formatted string representing the requested operation.
	 * rootValue:
	 *    The value provided as the first argument to resolver functions on the top
	 *    level type (e.g. the query object type).
	 * variableValues:
	 *    A mapping of variable name to runtime value to use for all variables
	 *    defined in the requestString.
	 * operationName:
	 *    The name of the operation to use if requestString contains multiple
	 *    possible operations. Can be omitted if requestString contains only
	 *    one operation.
	 */
	'use strict';

	var _Promise = __webpack_require__(16)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.graphql = graphql;

	/**
	 * The result of a GraphQL parse, validation and execution.
	 *
	 * `data` is the result of a successful execution of the query.
	 * `errors` is included when any errors occurred as a non-empty array.
	 */

	var _languageSource = __webpack_require__(64);

	var _languageParser = __webpack_require__(66);

	var _validationValidate = __webpack_require__(98);

	var _executionExecute = __webpack_require__(160);

	function graphql(schema, requestString, rootValue, variableValues, operationName) {
	  return new _Promise(function (resolve) {
	    var source = new _languageSource.Source(requestString || '', 'GraphQL request');
	    var documentAST = (0, _languageParser.parse)(source);
	    var validationErrors = (0, _validationValidate.validate)(schema, documentAST);
	    if (validationErrors.length > 0) {
	      resolve({ errors: validationErrors });
	    } else {
	      resolve((0, _executionExecute.execute)(schema, documentAST, rootValue, variableValues, operationName));
	    }
	  })['catch'](function (error) {
	    return { errors: [error] };
	  });
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(17), __esModule: true };

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(18);
	__webpack_require__(19);
	__webpack_require__(36);
	__webpack_require__(43);
	module.exports = __webpack_require__(9).Promise;

/***/ },
/* 18 */
/***/ function(module, exports) {

	

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(20)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(22)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(21)
	  , defined   = __webpack_require__(5);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(23)
	  , $export        = __webpack_require__(7)
	  , redefine       = __webpack_require__(24)
	  , hide           = __webpack_require__(25)
	  , has            = __webpack_require__(29)
	  , Iterators      = __webpack_require__(30)
	  , $iterCreate    = __webpack_require__(31)
	  , setToStringTag = __webpack_require__(32)
	  , getProto       = __webpack_require__(26).getProto
	  , ITERATOR       = __webpack_require__(33)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(25);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(26)
	  , createDesc = __webpack_require__(27);
	module.exports = __webpack_require__(28) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(12)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 29 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(26)
	  , descriptor     = __webpack_require__(27)
	  , setToStringTag = __webpack_require__(32)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(25)(IteratorPrototype, __webpack_require__(33)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(26).setDesc
	  , has = __webpack_require__(29)
	  , TAG = __webpack_require__(33)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(34)('wks')
	  , uid    = __webpack_require__(35)
	  , Symbol = __webpack_require__(8).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(8)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(37);
	var Iterators = __webpack_require__(30);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(38)
	  , step             = __webpack_require__(39)
	  , Iterators        = __webpack_require__(30)
	  , toIObject        = __webpack_require__(40);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(22)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(41)
	  , defined = __webpack_require__(5);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(42);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(26)
	  , LIBRARY    = __webpack_require__(23)
	  , global     = __webpack_require__(8)
	  , ctx        = __webpack_require__(10)
	  , classof    = __webpack_require__(44)
	  , $export    = __webpack_require__(7)
	  , isObject   = __webpack_require__(45)
	  , anObject   = __webpack_require__(46)
	  , aFunction  = __webpack_require__(11)
	  , strictNew  = __webpack_require__(47)
	  , forOf      = __webpack_require__(48)
	  , setProto   = __webpack_require__(53).set
	  , same       = __webpack_require__(54)
	  , SPECIES    = __webpack_require__(33)('species')
	  , speciesConstructor = __webpack_require__(55)
	  , asap       = __webpack_require__(56)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , Wrapper;

	var testResolve = function(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	};

	var USE_NATIVE = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(28)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var PromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve),
	  this.reject  = aFunction(reject)
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , result, then;
	      try {
	        if(handler){
	          if(!ok)record.h = true;
	          result = handler === true ? value : handler(value);
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      var promise = record.p
	        , handler, console;
	      if(isUnhandled(promise)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      } record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise._d
	    , chain  = record.a || record.c
	    , i      = 0
	    , reaction;
	  if(record.h)return false;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(record.p === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = this._d = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(61)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction = new PromiseCapability(speciesConstructor(this, P))
	        , promise  = reaction.promise
	        , record   = this._d;
	      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      record.c.push(reaction);
	      if(record.a)record.a.push(reaction);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
	__webpack_require__(32)(P, PROMISE);
	__webpack_require__(62)(PROMISE);
	Wrapper = __webpack_require__(9)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = new PromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof P && sameConstructor(x.constructor, this))return x;
	    var capability = new PromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(63)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject
	      , values     = [];
	    var abrupt = perform(function(){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        var alreadyCalled = false;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled = true;
	          results[index] = value;
	          --remaining || resolve(results);
	        }, reject);
	      });
	      else resolve(results);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(42)
	  , TAG = __webpack_require__(33)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(45);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(10)
	  , call        = __webpack_require__(49)
	  , isArrayIter = __webpack_require__(50)
	  , anObject    = __webpack_require__(46)
	  , toLength    = __webpack_require__(51)
	  , getIterFn   = __webpack_require__(52);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(46);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(30)
	  , ITERATOR   = __webpack_require__(33)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(21)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(44)
	  , ITERATOR  = __webpack_require__(33)('iterator')
	  , Iterators = __webpack_require__(30);
	module.exports = __webpack_require__(9).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(26).getDesc
	  , isObject = __webpack_require__(45)
	  , anObject = __webpack_require__(46);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(10)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(46)
	  , aFunction = __webpack_require__(11)
	  , SPECIES   = __webpack_require__(33)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(8)
	  , macrotask = __webpack_require__(57).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(42)(process) == 'process'
	  , head, last, notify;

	var flush = function(){
	  var parent, domain, fn;
	  if(isNode && (parent = process.domain)){
	    process.domain = null;
	    parent.exit();
	  }
	  while(head){
	    domain = head.domain;
	    fn     = head.fn;
	    if(domain)domain.enter();
	    fn(); // <- currently we use it only for Promise - try / catch not required
	    if(domain)domain.exit();
	    head = head.next;
	  } last = undefined;
	  if(parent)parent.enter();
	};

	// Node.js
	if(isNode){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// environments with maybe non-completely correct, but existent Promise
	} else if(Promise && Promise.resolve){
	  notify = function(){
	    Promise.resolve().then(flush);
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}

	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(10)
	  , invoke             = __webpack_require__(58)
	  , html               = __webpack_require__(59)
	  , cel                = __webpack_require__(60)
	  , global             = __webpack_require__(8)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(42)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 58 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(8).document && document.documentElement;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(45)
	  , document = __webpack_require__(8).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(24);
	module.exports = function(target, src){
	  for(var key in src)redefine(target, key, src[key]);
	  return target;
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var core        = __webpack_require__(9)
	  , $           = __webpack_require__(26)
	  , DESCRIPTORS = __webpack_require__(28)
	  , SPECIES     = __webpack_require__(33)('species');

	module.exports = function(KEY){
	  var C = core[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(33)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	/**
	 * A representation of source input to GraphQL. The name is optional,
	 * but is mostly useful for clients who store GraphQL documents in
	 * source files; for example, if the GraphQL input is in a file Foo.graphql,
	 * it might be useful for name to be "Foo.graphql".
	 */
	'use strict';

	var _classCallCheck = __webpack_require__(65)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var Source = function Source(body, name) {
	  _classCallCheck(this, Source);

	  this.body = body;
	  this.name = name || 'GraphQL';
	};

	exports.Source = Source;

/***/ },
/* 65 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	exports.__esModule = true;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Configuration options to control parser behavior
	 */
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.parse = parse;
	exports.parseValue = parseValue;
	exports.parseConstValue = parseConstValue;
	exports.parseType = parseType;
	exports.parseNamedType = parseNamedType;

	var _source = __webpack_require__(64);

	var _error = __webpack_require__(67);

	var _lexer = __webpack_require__(83);

	var _kinds = __webpack_require__(81);

	/**
	 * Given a GraphQL source, parses it into a Document.
	 * Throws GraphQLError if a syntax error is encountered.
	 */

	function parse(source, options) {
	  var sourceObj = source instanceof _source.Source ? source : new _source.Source(source);
	  var parser = makeParser(sourceObj, options || {});
	  return parseDocument(parser);
	}

	/**
	 * Given a string containing a GraphQL value, parse the AST for that value.
	 * Throws GraphQLError if a syntax error is encountered.
	 *
	 * This is useful within tools that operate upon GraphQL Values directly and
	 * in isolation of complete GraphQL documents.
	 */

	function parseValue(source, options) {
	  var sourceObj = source instanceof _source.Source ? source : new _source.Source(source);
	  var parser = makeParser(sourceObj, options || {});
	  return parseValueLiteral(parser, false);
	}

	/**
	 * Converts a name lex token into a name parse node.
	 */
	function parseName(parser) {
	  var token = expect(parser, _lexer.TokenKind.NAME);
	  return {
	    kind: _kinds.NAME,
	    value: token.value,
	    loc: loc(parser, token.start)
	  };
	}

	// Implements the parsing rules in the Document section.

	/**
	 * Document : Definition+
	 */
	function parseDocument(parser) {
	  var start = parser.token.start;

	  var definitions = [];
	  do {
	    definitions.push(parseDefinition(parser));
	  } while (!skip(parser, _lexer.TokenKind.EOF));

	  return {
	    kind: _kinds.DOCUMENT,
	    definitions: definitions,
	    loc: loc(parser, start)
	  };
	}

	/**
	 * Definition :
	 *   - OperationDefinition
	 *   - FragmentDefinition
	 *   - TypeDefinition
	 *   - TypeExtensionDefinition
	 */
	function parseDefinition(parser) {
	  if (peek(parser, _lexer.TokenKind.BRACE_L)) {
	    return parseOperationDefinition(parser);
	  }

	  if (peek(parser, _lexer.TokenKind.NAME)) {
	    switch (parser.token.value) {
	      case 'query':
	      case 'mutation':
	      // Note: subscription is an experimental non-spec addition.
	      case 'subscription':
	        return parseOperationDefinition(parser);

	      case 'fragment':
	        return parseFragmentDefinition(parser);

	      case 'type':
	      case 'interface':
	      case 'union':
	      case 'scalar':
	      case 'enum':
	      case 'input':
	        return parseTypeDefinition(parser);
	      case 'extend':
	        return parseTypeExtensionDefinition(parser);
	    }
	  }

	  throw unexpected(parser);
	}

	// Implements the parsing rules in the Operations section.

	/**
	 * OperationDefinition :
	 *  - SelectionSet
	 *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
	 *
	 * OperationType : one of query mutation
	 */
	function parseOperationDefinition(parser) {
	  var start = parser.token.start;
	  if (peek(parser, _lexer.TokenKind.BRACE_L)) {
	    return {
	      kind: _kinds.OPERATION_DEFINITION,
	      operation: 'query',
	      name: null,
	      variableDefinitions: null,
	      directives: [],
	      selectionSet: parseSelectionSet(parser),
	      loc: loc(parser, start)
	    };
	  }
	  var operationToken = expect(parser, _lexer.TokenKind.NAME);
	  var operation = operationToken.value === 'mutation' ? 'mutation' : operationToken.value === 'subscription' ? 'subscription' : operationToken.value === 'query' ? 'query' : (function () {
	    throw unexpected(parser, operationToken);
	  })();
	  var name = undefined;
	  if (peek(parser, _lexer.TokenKind.NAME)) {
	    name = parseName(parser);
	  }
	  return {
	    kind: _kinds.OPERATION_DEFINITION,
	    operation: operation,
	    name: name,
	    variableDefinitions: parseVariableDefinitions(parser),
	    directives: parseDirectives(parser),
	    selectionSet: parseSelectionSet(parser),
	    loc: loc(parser, start)
	  };
	}

	/**
	 * VariableDefinitions : ( VariableDefinition+ )
	 */
	function parseVariableDefinitions(parser) {
	  return peek(parser, _lexer.TokenKind.PAREN_L) ? many(parser, _lexer.TokenKind.PAREN_L, parseVariableDefinition, _lexer.TokenKind.PAREN_R) : [];
	}

	/**
	 * VariableDefinition : Variable : Type DefaultValue?
	 */
	function parseVariableDefinition(parser) {
	  var start = parser.token.start;
	  return {
	    kind: _kinds.VARIABLE_DEFINITION,
	    variable: parseVariable(parser),
	    type: (expect(parser, _lexer.TokenKind.COLON), parseType(parser)),
	    defaultValue: skip(parser, _lexer.TokenKind.EQUALS) ? parseValueLiteral(parser, true) : null,
	    loc: loc(parser, start)
	  };
	}

	/**
	 * Variable : $ Name
	 */
	function parseVariable(parser) {
	  var start = parser.token.start;
	  expect(parser, _lexer.TokenKind.DOLLAR);
	  return {
	    kind: _kinds.VARIABLE,
	    name: parseName(parser),
	    loc: loc(parser, start)
	  };
	}

	/**
	 * SelectionSet : { Selection+ }
	 */
	function parseSelectionSet(parser) {
	  var start = parser.token.start;
	  return {
	    kind: _kinds.SELECTION_SET,
	    selections: many(parser, _lexer.TokenKind.BRACE_L, parseSelection, _lexer.TokenKind.BRACE_R),
	    loc: loc(parser, start)
	  };
	}

	/**
	 * Selection :
	 *   - Field
	 *   - FragmentSpread
	 *   - InlineFragment
	 */
	function parseSelection(parser) {
	  return peek(parser, _lexer.TokenKind.SPREAD) ? parseFragment(parser) : parseField(parser);
	}

	/**
	 * Field : Alias? Name Arguments? Directives? SelectionSet?
	 *
	 * Alias : Name :
	 */
	function parseField(parser) {
	  var start = parser.token.start;

	  var nameOrAlias = parseName(parser);
	  var alias = undefined;
	  var name = undefined;
	  if (skip(parser, _lexer.TokenKind.COLON)) {
	    alias = nameOrAlias;
	    name = parseName(parser);
	  } else {
	    alias = null;
	    name = nameOrAlias;
	  }

	  return {
	    kind: _kinds.FIELD,
	    alias: alias,
	    name: name,
	    arguments: parseArguments(parser),
	    directives: parseDirectives(parser),
	    selectionSet: peek(parser, _lexer.TokenKind.BRACE_L) ? parseSelectionSet(parser) : null,
	    loc: loc(parser, start)
	  };
	}

	/**
	 * Arguments : ( Argument+ )
	 */
	function parseArguments(parser) {
	  return peek(parser, _lexer.TokenKind.PAREN_L) ? many(parser, _lexer.TokenKind.PAREN_L, parseArgument, _lexer.TokenKind.PAREN_R) : [];
	}

	/**
	 * Argument : Name : Value
	 */
	function parseArgument(parser) {
	  var start = parser.token.start;
	  return {
	    kind: _kinds.ARGUMENT,
	    name: parseName(parser),
	    value: (expect(parser, _lexer.TokenKind.COLON), parseValueLiteral(parser, false)),
	    loc: loc(parser, start)
	  };
	}

	// Implements the parsing rules in the Fragments section.

	/**
	 * Corresponds to both FragmentSpread and InlineFragment in the spec.
	 *
	 * FragmentSpread : ... FragmentName Directives?
	 *
	 * InlineFragment : ... TypeCondition? Directives? SelectionSet
	 */
	function parseFragment(parser) {
	  var start = parser.token.start;
	  expect(parser, _lexer.TokenKind.SPREAD);
	  if (peek(parser, _lexer.TokenKind.NAME) && parser.token.value !== 'on') {
	    return {
	      kind: _kinds.FRAGMENT_SPREAD,
	      name: parseFragmentName(parser),
	      directives: parseDirectives(parser),
	      loc: loc(parser, start)
	    };
	  }
	  var typeCondition = null;
	  if (parser.token.value === 'on') {
	    advance(parser);
	    typeCondition = parseNamedType(parser);
	  }
	  return {
	    kind: _kinds.INLINE_FRAGMENT,
	    typeCondition: typeCondition,
	    directives: parseDirectives(parser),
	    selectionSet: parseSelectionSet(parser),
	    loc: loc(parser, start)
	  };
	}

	/**
	 * FragmentDefinition :
	 *   - fragment FragmentName on TypeCondition Directives? SelectionSet
	 *
	 * TypeCondition : NamedType
	 */
	function parseFragmentDefinition(parser) {
	  var start = parser.token.start;
	  expectKeyword(parser, 'fragment');
	  return {
	    kind: _kinds.FRAGMENT_DEFINITION,
	    name: parseFragmentName(parser),
	    typeCondition: (expectKeyword(parser, 'on'), parseNamedType(parser)),
	    directives: parseDirectives(parser),
	    selectionSet: parseSelectionSet(parser),
	    loc: loc(parser, start)
	  };
	}

	/**
	 * FragmentName : Name but not `on`
	 */
	function parseFragmentName(parser) {
	  if (parser.token.value === 'on') {
	    throw unexpected(parser);
	  }
	  return parseName(parser);
	}

	// Implements the parsing rules in the Values section.

	/**
	 * Value[Const] :
	 *   - [~Const] Variable
	 *   - IntValue
	 *   - FloatValue
	 *   - StringValue
	 *   - BooleanValue
	 *   - EnumValue
	 *   - ListValue[?Const]
	 *   - ObjectValue[?Const]
	 *
	 * BooleanValue : one of `true` `false`
	 *
	 * EnumValue : Name but not `true`, `false` or `null`
	 */
	function parseValueLiteral(parser, isConst) {
	  var token = parser.token;
	  switch (token.kind) {
	    case _lexer.TokenKind.BRACKET_L:
	      return parseList(parser, isConst);
	    case _lexer.TokenKind.BRACE_L:
	      return parseObject(parser, isConst);
	    case _lexer.TokenKind.INT:
	      advance(parser);
	      return {
	        kind: _kinds.INT,
	        value: token.value,
	        loc: loc(parser, token.start)
	      };
	    case _lexer.TokenKind.FLOAT:
	      advance(parser);
	      return {
	        kind: _kinds.FLOAT,
	        value: token.value,
	        loc: loc(parser, token.start)
	      };
	    case _lexer.TokenKind.STRING:
	      advance(parser);
	      return {
	        kind: _kinds.STRING,
	        value: token.value,
	        loc: loc(parser, token.start)
	      };
	    case _lexer.TokenKind.NAME:
	      if (token.value === 'true' || token.value === 'false') {
	        advance(parser);
	        return {
	          kind: _kinds.BOOLEAN,
	          value: token.value === 'true',
	          loc: loc(parser, token.start)
	        };
	      } else if (token.value !== 'null') {
	        advance(parser);
	        return {
	          kind: _kinds.ENUM,
	          value: token.value,
	          loc: loc(parser, token.start)
	        };
	      }
	      break;
	    case _lexer.TokenKind.DOLLAR:
	      if (!isConst) {
	        return parseVariable(parser);
	      }
	      break;
	  }
	  throw unexpected(parser);
	}

	function parseConstValue(parser) {
	  return parseValueLiteral(parser, true);
	}

	function parseValueValue(parser) {
	  return parseValueLiteral(parser, false);
	}

	/**
	 * ListValue[Const] :
	 *   - [ ]
	 *   - [ Value[?Const]+ ]
	 */
	function parseList(parser, isConst) {
	  var start = parser.token.start;
	  var item = isConst ? parseConstValue : parseValueValue;
	  return {
	    kind: _kinds.LIST,
	    values: any(parser, _lexer.TokenKind.BRACKET_L, item, _lexer.TokenKind.BRACKET_R),
	    loc: loc(parser, start)
	  };
	}

	/**
	 * ObjectValue[Const] :
	 *   - { }
	 *   - { ObjectField[?Const]+ }
	 */
	function parseObject(parser, isConst) {
	  var start = parser.token.start;
	  expect(parser, _lexer.TokenKind.BRACE_L);
	  var fields = [];
	  while (!skip(parser, _lexer.TokenKind.BRACE_R)) {
	    fields.push(parseObjectField(parser, isConst));
	  }
	  return {
	    kind: _kinds.OBJECT,
	    fields: fields,
	    loc: loc(parser, start)
	  };
	}

	/**
	 * ObjectField[Const] : Name : Value[?Const]
	 */
	function parseObjectField(parser, isConst) {
	  var start = parser.token.start;
	  return {
	    kind: _kinds.OBJECT_FIELD,
	    name: parseName(parser),
	    value: (expect(parser, _lexer.TokenKind.COLON), parseValueLiteral(parser, isConst)),
	    loc: loc(parser, start)
	  };
	}

	// Implements the parsing rules in the Directives section.

	/**
	 * Directives : Directive+
	 */
	function parseDirectives(parser) {
	  var directives = [];
	  while (peek(parser, _lexer.TokenKind.AT)) {
	    directives.push(parseDirective(parser));
	  }
	  return directives;
	}

	/**
	 * Directive : @ Name Arguments?
	 */
	function parseDirective(parser) {
	  var start = parser.token.start;
	  expect(parser, _lexer.TokenKind.AT);
	  return {
	    kind: _kinds.DIRECTIVE,
	    name: parseName(parser),
	    arguments: parseArguments(parser),
	    loc: loc(parser, start)
	  };
	}

	// Implements the parsing rules in the Types section.

	/**
	 * Type :
	 *   - NamedType
	 *   - ListType
	 *   - NonNullType
	 */

	function parseType(parser) {
	  var start = parser.token.start;
	  var type = undefined;
	  if (skip(parser, _lexer.TokenKind.BRACKET_L)) {
	    type = parseType(parser);
	    expect(parser, _lexer.TokenKind.BRACKET_R);
	    type = {
	      kind: _kinds.LIST_TYPE,
	      type: type,
	      loc: loc(parser, start)
	    };
	  } else {
	    type = parseNamedType(parser);
	  }
	  if (skip(parser, _lexer.TokenKind.BANG)) {
	    return {
	      kind: _kinds.NON_NULL_TYPE,
	      type: type,
	      loc: loc(parser, start)
	    };
	  }
	  return type;
	}

	/**
	 * NamedType : Name
	 */

	function parseNamedType(parser) {
	  var start = parser.token.start;
	  return {
	    kind: _kinds.NAMED_TYPE,
	    name: parseName(parser),
	    loc: loc(parser, start)
	  };
	}

	// Implements the parsing rules in the Type Definition section.

	/**
	 * TypeDefinition :
	 *   - ObjectTypeDefinition
	 *   - InterfaceTypeDefinition
	 *   - UnionTypeDefinition
	 *   - ScalarTypeDefinition
	 *   - EnumTypeDefinition
	 *   - InputObjectTypeDefinition
	 */
	function parseTypeDefinition(parser) {
	  if (!peek(parser, _lexer.TokenKind.NAME)) {
	    throw unexpected(parser);
	  }
	  switch (parser.token.value) {
	    case 'type':
	      return parseObjectTypeDefinition(parser);
	    case 'interface':
	      return parseInterfaceTypeDefinition(parser);
	    case 'union':
	      return parseUnionTypeDefinition(parser);
	    case 'scalar':
	      return parseScalarTypeDefinition(parser);
	    case 'enum':
	      return parseEnumTypeDefinition(parser);
	    case 'input':
	      return parseInputObjectTypeDefinition(parser);
	    default:
	      throw unexpected(parser);
	  }
	}

	/**
	 * ObjectTypeDefinition : type Name ImplementsInterfaces? { FieldDefinition+ }
	 */
	function parseObjectTypeDefinition(parser) {
	  var start = parser.token.start;
	  expectKeyword(parser, 'type');
	  var name = parseName(parser);
	  var interfaces = parseImplementsInterfaces(parser);
	  var fields = any(parser, _lexer.TokenKind.BRACE_L, parseFieldDefinition, _lexer.TokenKind.BRACE_R);
	  return {
	    kind: _kinds.OBJECT_TYPE_DEFINITION,
	    name: name,
	    interfaces: interfaces,
	    fields: fields,
	    loc: loc(parser, start)
	  };
	}

	/**
	 * ImplementsInterfaces : implements NamedType+
	 */
	function parseImplementsInterfaces(parser) {
	  var types = [];
	  if (parser.token.value === 'implements') {
	    advance(parser);
	    do {
	      types.push(parseNamedType(parser));
	    } while (!peek(parser, _lexer.TokenKind.BRACE_L));
	  }
	  return types;
	}

	/**
	 * FieldDefinition : Name ArgumentsDefinition? : Type
	 */
	function parseFieldDefinition(parser) {
	  var start = parser.token.start;
	  var name = parseName(parser);
	  var args = parseArgumentDefs(parser);
	  expect(parser, _lexer.TokenKind.COLON);
	  var type = parseType(parser);
	  return {
	    kind: _kinds.FIELD_DEFINITION,
	    name: name,
	    arguments: args,
	    type: type,
	    loc: loc(parser, start)
	  };
	}

	/**
	 * ArgumentsDefinition : ( InputValueDefinition+ )
	 */
	function parseArgumentDefs(parser) {
	  if (!peek(parser, _lexer.TokenKind.PAREN_L)) {
	    return [];
	  }
	  return many(parser, _lexer.TokenKind.PAREN_L, parseInputValueDef, _lexer.TokenKind.PAREN_R);
	}

	/**
	 * InputValueDefinition : Name : Type DefaultValue?
	 */
	function parseInputValueDef(parser) {
	  var start = parser.token.start;
	  var name = parseName(parser);
	  expect(parser, _lexer.TokenKind.COLON);
	  var type = parseType(parser);
	  var defaultValue = null;
	  if (skip(parser, _lexer.TokenKind.EQUALS)) {
	    defaultValue = parseConstValue(parser);
	  }
	  return {
	    kind: _kinds.INPUT_VALUE_DEFINITION,
	    name: name,
	    type: type,
	    defaultValue: defaultValue,
	    loc: loc(parser, start)
	  };
	}

	/**
	 * InterfaceTypeDefinition : interface Name { FieldDefinition+ }
	 */
	function parseInterfaceTypeDefinition(parser) {
	  var start = parser.token.start;
	  expectKeyword(parser, 'interface');
	  var name = parseName(parser);
	  var fields = any(parser, _lexer.TokenKind.BRACE_L, parseFieldDefinition, _lexer.TokenKind.BRACE_R);
	  return {
	    kind: _kinds.INTERFACE_TYPE_DEFINITION,
	    name: name,
	    fields: fields,
	    loc: loc(parser, start)
	  };
	}

	/**
	 * UnionTypeDefinition : union Name = UnionMembers
	 */
	function parseUnionTypeDefinition(parser) {
	  var start = parser.token.start;
	  expectKeyword(parser, 'union');
	  var name = parseName(parser);
	  expect(parser, _lexer.TokenKind.EQUALS);
	  var types = parseUnionMembers(parser);
	  return {
	    kind: _kinds.UNION_TYPE_DEFINITION,
	    name: name,
	    types: types,
	    loc: loc(parser, start)
	  };
	}

	/**
	 * UnionMembers :
	 *   - NamedType
	 *   - UnionMembers | NamedType
	 */
	function parseUnionMembers(parser) {
	  var members = [];
	  do {
	    members.push(parseNamedType(parser));
	  } while (skip(parser, _lexer.TokenKind.PIPE));
	  return members;
	}

	/**
	 * ScalarTypeDefinition : scalar Name
	 */
	function parseScalarTypeDefinition(parser) {
	  var start = parser.token.start;
	  expectKeyword(parser, 'scalar');
	  var name = parseName(parser);
	  return {
	    kind: _kinds.SCALAR_TYPE_DEFINITION,
	    name: name,
	    loc: loc(parser, start)
	  };
	}

	/**
	 * EnumTypeDefinition : enum Name { EnumValueDefinition+ }
	 */
	function parseEnumTypeDefinition(parser) {
	  var start = parser.token.start;
	  expectKeyword(parser, 'enum');
	  var name = parseName(parser);
	  var values = many(parser, _lexer.TokenKind.BRACE_L, parseEnumValueDefinition, _lexer.TokenKind.BRACE_R);
	  return {
	    kind: _kinds.ENUM_TYPE_DEFINITION,
	    name: name,
	    values: values,
	    loc: loc(parser, start)
	  };
	}

	/**
	 * EnumValueDefinition : EnumValue
	 *
	 * EnumValue : Name
	 */
	function parseEnumValueDefinition(parser) {
	  var start = parser.token.start;
	  var name = parseName(parser);
	  return {
	    kind: _kinds.ENUM_VALUE_DEFINITION,
	    name: name,
	    loc: loc(parser, start)
	  };
	}

	/**
	 * InputObjectTypeDefinition : input Name { InputValueDefinition+ }
	 */
	function parseInputObjectTypeDefinition(parser) {
	  var start = parser.token.start;
	  expectKeyword(parser, 'input');
	  var name = parseName(parser);
	  var fields = any(parser, _lexer.TokenKind.BRACE_L, parseInputValueDef, _lexer.TokenKind.BRACE_R);
	  return {
	    kind: _kinds.INPUT_OBJECT_TYPE_DEFINITION,
	    name: name,
	    fields: fields,
	    loc: loc(parser, start)
	  };
	}

	/**
	 * TypeExtensionDefinition : extend ObjectTypeDefinition
	 */
	function parseTypeExtensionDefinition(parser) {
	  var start = parser.token.start;
	  expectKeyword(parser, 'extend');
	  var definition = parseObjectTypeDefinition(parser);
	  return {
	    kind: _kinds.TYPE_EXTENSION_DEFINITION,
	    definition: definition,
	    loc: loc(parser, start)
	  };
	}

	// Core parsing utility functions

	/**
	 * Returns the parser object that is used to store state throughout the
	 * process of parsing.
	 */
	function makeParser(source, options) {
	  var _lexToken = (0, _lexer.lex)(source);
	  return {
	    _lexToken: _lexToken,
	    source: source,
	    options: options,
	    prevEnd: 0,
	    token: _lexToken()
	  };
	}

	/**
	 * Returns a location object, used to identify the place in
	 * the source that created a given parsed object.
	 */
	function loc(parser, start) {
	  if (parser.options.noLocation) {
	    return null;
	  }
	  if (parser.options.noSource) {
	    return { start: start, end: parser.prevEnd };
	  }
	  return { start: start, end: parser.prevEnd, source: parser.source };
	}

	/**
	 * Moves the internal parser object to the next lexed token.
	 */
	function advance(parser) {
	  var prevEnd = parser.token.end;
	  parser.prevEnd = prevEnd;
	  parser.token = parser._lexToken(prevEnd);
	}

	/**
	 * Determines if the next token is of a given kind
	 */
	function peek(parser, kind) {
	  return parser.token.kind === kind;
	}

	/**
	 * If the next token is of the given kind, return true after advancing
	 * the parser. Otherwise, do not change the parser state and return false.
	 */
	function skip(parser, kind) {
	  var match = parser.token.kind === kind;
	  if (match) {
	    advance(parser);
	  }
	  return match;
	}

	/**
	 * If the next token is of the given kind, return that token after advancing
	 * the parser. Otherwise, do not change the parser state and throw an error.
	 */
	function expect(parser, kind) {
	  var token = parser.token;
	  if (token.kind === kind) {
	    advance(parser);
	    return token;
	  }
	  throw (0, _error.syntaxError)(parser.source, token.start, 'Expected ' + (0, _lexer.getTokenKindDesc)(kind) + ', found ' + (0, _lexer.getTokenDesc)(token));
	}

	/**
	 * If the next token is a keyword with the given value, return that token after
	 * advancing the parser. Otherwise, do not change the parser state and return
	 * false.
	 */
	function expectKeyword(parser, value) {
	  var token = parser.token;
	  if (token.kind === _lexer.TokenKind.NAME && token.value === value) {
	    advance(parser);
	    return token;
	  }
	  throw (0, _error.syntaxError)(parser.source, token.start, 'Expected "' + value + '", found ' + (0, _lexer.getTokenDesc)(token));
	}

	/**
	 * Helper function for creating an error when an unexpected lexed token
	 * is encountered.
	 */
	function unexpected(parser, atToken) {
	  var token = atToken || parser.token;
	  return (0, _error.syntaxError)(parser.source, token.start, 'Unexpected ' + (0, _lexer.getTokenDesc)(token));
	}

	/**
	 * Returns a possibly empty list of parse nodes, determined by
	 * the parseFn. This list begins with a lex token of openKind
	 * and ends with a lex token of closeKind. Advances the parser
	 * to the next lex token after the closing token.
	 */
	function any(parser, openKind, parseFn, closeKind) {
	  expect(parser, openKind);
	  var nodes = [];
	  while (!skip(parser, closeKind)) {
	    nodes.push(parseFn(parser));
	  }
	  return nodes;
	}

	/**
	 * Returns a non-empty list of parse nodes, determined by
	 * the parseFn. This list begins with a lex token of openKind
	 * and ends with a lex token of closeKind. Advances the parser
	 * to the next lex token after the closing token.
	 */
	function many(parser, openKind, parseFn, closeKind) {
	  expect(parser, openKind);
	  var nodes = [parseFn(parser)];
	  while (!skip(parser, closeKind)) {
	    nodes.push(parseFn(parser));
	  }
	  return nodes;
	}

	/**
	 * By default, the parser creates AST nodes that know the location
	 * in the source that they correspond to. This configuration flag
	 * disables that behavior for performance or testing.
	 */

	/**
	 * By default, the parser creates AST nodes that contain a reference
	 * to the source that they were created from. This configuration flag
	 * disables that behavior for performance or testing.
	 */

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _GraphQLError = __webpack_require__(68);

	Object.defineProperty(exports, 'GraphQLError', {
	  enumerable: true,
	  get: function get() {
	    return _GraphQLError.GraphQLError;
	  }
	});

	var _syntaxError = __webpack_require__(93);

	Object.defineProperty(exports, 'syntaxError', {
	  enumerable: true,
	  get: function get() {
	    return _syntaxError.syntaxError;
	  }
	});

	var _locatedError = __webpack_require__(94);

	Object.defineProperty(exports, 'locatedError', {
	  enumerable: true,
	  get: function get() {
	    return _locatedError.locatedError;
	  }
	});

	var _formatError = __webpack_require__(95);

	Object.defineProperty(exports, 'formatError', {
	  enumerable: true,
	  get: function get() {
	    return _formatError.formatError;
	  }
	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _get = __webpack_require__(69)['default'];

	var _inherits = __webpack_require__(73)['default'];

	var _classCallCheck = __webpack_require__(65)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _language = __webpack_require__(79);

	var GraphQLError = (function (_Error) {
	  _inherits(GraphQLError, _Error);

	  function GraphQLError(message,
	  // A flow bug keeps us from declaring nodes as an array of Node
	  nodes, /* Node */stack, source, positions) {
	    _classCallCheck(this, GraphQLError);

	    _get(Object.getPrototypeOf(GraphQLError.prototype), 'constructor', this).call(this, message);
	    this.message = message;

	    Object.defineProperty(this, 'stack', { value: stack || message });
	    Object.defineProperty(this, 'nodes', { value: nodes });

	    // Note: flow does not yet know about Object.defineProperty with `get`.
	    Object.defineProperty(this, 'source', {
	      get: function get() {
	        if (source) {
	          return source;
	        }
	        if (nodes && nodes.length > 0) {
	          var node = nodes[0];
	          return node && node.loc && node.loc.source;
	        }
	      }
	    });

	    Object.defineProperty(this, 'positions', {
	      get: function get() {
	        if (positions) {
	          return positions;
	        }
	        if (nodes) {
	          var nodePositions = nodes.map(function (node) {
	            return node.loc && node.loc.start;
	          });
	          if (nodePositions.some(function (p) {
	            return p;
	          })) {
	            return nodePositions;
	          }
	        }
	      }
	    });

	    Object.defineProperty(this, 'locations', {
	      get: function get() {
	        var _this = this;

	        if (this.positions && this.source) {
	          return this.positions.map(function (pos) {
	            return (0, _language.getLocation)(_this.source, pos);
	          });
	        }
	      }
	    });
	  }

	  return GraphQLError;
	})(Error);

	exports.GraphQLError = GraphQLError;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$getOwnPropertyDescriptor = __webpack_require__(70)["default"];

	exports["default"] = function get(_x, _x2, _x3) {
	  var _again = true;

	  _function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    _again = false;
	    if (object === null) object = Function.prototype;

	    var desc = _Object$getOwnPropertyDescriptor(object, property);

	    if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);

	      if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        desc = parent = undefined;
	        continue _function;
	      }
	    } else if ("value" in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;

	      if (getter === undefined) {
	        return undefined;
	      }

	      return getter.call(receiver);
	    }
	  }
	};

	exports.__esModule = true;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(71), __esModule: true };

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(26);
	__webpack_require__(72);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(40);

	__webpack_require__(6)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$create = __webpack_require__(74)["default"];

	var _Object$setPrototypeOf = __webpack_require__(76)["default"];

	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	exports.__esModule = true;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(75), __esModule: true };

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(26);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(77), __esModule: true };

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(78);
	module.exports = __webpack_require__(9).Object.setPrototypeOf;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(7);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(53).set});

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _interopRequireWildcard = __webpack_require__(80)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _kinds = __webpack_require__(81);

	var Kind = _interopRequireWildcard(_kinds);

	var _location = __webpack_require__(82);

	Object.defineProperty(exports, 'getLocation', {
	  enumerable: true,
	  get: function get() {
	    return _location.getLocation;
	  }
	});
	exports.Kind = Kind;

	var _lexer = __webpack_require__(83);

	Object.defineProperty(exports, 'lex', {
	  enumerable: true,
	  get: function get() {
	    return _lexer.lex;
	  }
	});

	var _parser = __webpack_require__(66);

	Object.defineProperty(exports, 'parse', {
	  enumerable: true,
	  get: function get() {
	    return _parser.parse;
	  }
	});
	Object.defineProperty(exports, 'parseValue', {
	  enumerable: true,
	  get: function get() {
	    return _parser.parseValue;
	  }
	});

	var _printer = __webpack_require__(84);

	Object.defineProperty(exports, 'print', {
	  enumerable: true,
	  get: function get() {
	    return _printer.print;
	  }
	});

	var _source = __webpack_require__(64);

	Object.defineProperty(exports, 'Source', {
	  enumerable: true,
	  get: function get() {
	    return _source.Source;
	  }
	});

	var _visitor = __webpack_require__(85);

	Object.defineProperty(exports, 'visit', {
	  enumerable: true,
	  get: function get() {
	    return _visitor.visit;
	  }
	});
	Object.defineProperty(exports, 'BREAK', {
	  enumerable: true,
	  get: function get() {
	    return _visitor.BREAK;
	  }
	});

/***/ },
/* 80 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};

	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }

	    newObj["default"] = obj;
	    return newObj;
	  }
	};

	exports.__esModule = true;

/***/ },
/* 81 */
/***/ function(module, exports) {

	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	// Name

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var NAME = 'Name';

	exports.NAME = NAME;
	// Document

	var DOCUMENT = 'Document';
	exports.DOCUMENT = DOCUMENT;
	var OPERATION_DEFINITION = 'OperationDefinition';
	exports.OPERATION_DEFINITION = OPERATION_DEFINITION;
	var VARIABLE_DEFINITION = 'VariableDefinition';
	exports.VARIABLE_DEFINITION = VARIABLE_DEFINITION;
	var VARIABLE = 'Variable';
	exports.VARIABLE = VARIABLE;
	var SELECTION_SET = 'SelectionSet';
	exports.SELECTION_SET = SELECTION_SET;
	var FIELD = 'Field';
	exports.FIELD = FIELD;
	var ARGUMENT = 'Argument';

	exports.ARGUMENT = ARGUMENT;
	// Fragments

	var FRAGMENT_SPREAD = 'FragmentSpread';
	exports.FRAGMENT_SPREAD = FRAGMENT_SPREAD;
	var INLINE_FRAGMENT = 'InlineFragment';
	exports.INLINE_FRAGMENT = INLINE_FRAGMENT;
	var FRAGMENT_DEFINITION = 'FragmentDefinition';

	exports.FRAGMENT_DEFINITION = FRAGMENT_DEFINITION;
	// Values

	var INT = 'IntValue';
	exports.INT = INT;
	var FLOAT = 'FloatValue';
	exports.FLOAT = FLOAT;
	var STRING = 'StringValue';
	exports.STRING = STRING;
	var BOOLEAN = 'BooleanValue';
	exports.BOOLEAN = BOOLEAN;
	var ENUM = 'EnumValue';
	exports.ENUM = ENUM;
	var LIST = 'ListValue';
	exports.LIST = LIST;
	var OBJECT = 'ObjectValue';
	exports.OBJECT = OBJECT;
	var OBJECT_FIELD = 'ObjectField';

	exports.OBJECT_FIELD = OBJECT_FIELD;
	// Directives

	var DIRECTIVE = 'Directive';

	exports.DIRECTIVE = DIRECTIVE;
	// Types

	var NAMED_TYPE = 'NamedType';
	exports.NAMED_TYPE = NAMED_TYPE;
	var LIST_TYPE = 'ListType';
	exports.LIST_TYPE = LIST_TYPE;
	var NON_NULL_TYPE = 'NonNullType';

	exports.NON_NULL_TYPE = NON_NULL_TYPE;
	// Type Definitions

	var OBJECT_TYPE_DEFINITION = 'ObjectTypeDefinition';
	exports.OBJECT_TYPE_DEFINITION = OBJECT_TYPE_DEFINITION;
	var FIELD_DEFINITION = 'FieldDefinition';
	exports.FIELD_DEFINITION = FIELD_DEFINITION;
	var INPUT_VALUE_DEFINITION = 'InputValueDefinition';
	exports.INPUT_VALUE_DEFINITION = INPUT_VALUE_DEFINITION;
	var INTERFACE_TYPE_DEFINITION = 'InterfaceTypeDefinition';
	exports.INTERFACE_TYPE_DEFINITION = INTERFACE_TYPE_DEFINITION;
	var UNION_TYPE_DEFINITION = 'UnionTypeDefinition';
	exports.UNION_TYPE_DEFINITION = UNION_TYPE_DEFINITION;
	var SCALAR_TYPE_DEFINITION = 'ScalarTypeDefinition';
	exports.SCALAR_TYPE_DEFINITION = SCALAR_TYPE_DEFINITION;
	var ENUM_TYPE_DEFINITION = 'EnumTypeDefinition';
	exports.ENUM_TYPE_DEFINITION = ENUM_TYPE_DEFINITION;
	var ENUM_VALUE_DEFINITION = 'EnumValueDefinition';
	exports.ENUM_VALUE_DEFINITION = ENUM_VALUE_DEFINITION;
	var INPUT_OBJECT_TYPE_DEFINITION = 'InputObjectTypeDefinition';
	exports.INPUT_OBJECT_TYPE_DEFINITION = INPUT_OBJECT_TYPE_DEFINITION;
	var TYPE_EXTENSION_DEFINITION = 'TypeExtensionDefinition';
	exports.TYPE_EXTENSION_DEFINITION = TYPE_EXTENSION_DEFINITION;

/***/ },
/* 82 */
/***/ function(module, exports) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	/**
	 * Represents a location in a Source.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.getLocation = getLocation;

	/**
	 * Takes a Source and a UTF-8 character offset, and returns the corresponding
	 * line and column as a SourceLocation.
	 */

	function getLocation(source, position) {
	  var lineRegexp = /\r\n|[\n\r]/g;
	  var line = 1;
	  var column = position + 1;
	  var match = undefined;
	  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
	    line += 1;
	    column = position + 1 - (match.index + match[0].length);
	  }
	  return { line: line, column: column };
	}

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	/*  /
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * A representation of a lexed Token. Value only appears for non-punctuation
	 * tokens: NAME, INT, FLOAT, and STRING.
	 */
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.lex = lex;
	exports.getTokenDesc = getTokenDesc;
	exports.getTokenKindDesc = getTokenKindDesc;

	var _error = __webpack_require__(67);

	/**
	 * Given a Source object, this returns a Lexer for that source.
	 * A Lexer is a function that acts like a generator in that every time
	 * it is called, it returns the next token in the Source. Assuming the
	 * source lexes, the final Token emitted by the lexer will be of kind
	 * EOF, after which the lexer will repeatedly return EOF tokens whenever
	 * called.
	 *
	 * The argument to the lexer function is optional, and can be used to
	 * rewind or fast forward the lexer to a new position in the source.
	 */

	function lex(source) {
	  var prevPosition = 0;
	  return function nextToken(resetPosition) {
	    var token = readToken(source, resetPosition === undefined ? prevPosition : resetPosition);
	    prevPosition = token.end;
	    return token;
	  };
	}

	/**
	 * An enum describing the different kinds of tokens that the lexer emits.
	 */
	var TokenKind = {
	  EOF: 1,
	  BANG: 2,
	  DOLLAR: 3,
	  PAREN_L: 4,
	  PAREN_R: 5,
	  SPREAD: 6,
	  COLON: 7,
	  EQUALS: 8,
	  AT: 9,
	  BRACKET_L: 10,
	  BRACKET_R: 11,
	  BRACE_L: 12,
	  PIPE: 13,
	  BRACE_R: 14,
	  NAME: 15,
	  INT: 16,
	  FLOAT: 17,
	  STRING: 18
	};

	exports.TokenKind = TokenKind;
	/**
	 * A helper function to describe a token as a string for debugging
	 */

	function getTokenDesc(token) {
	  return token.value ? getTokenKindDesc(token.kind) + ' "' + token.value + '"' : getTokenKindDesc(token.kind);
	}

	/**
	 * A helper function to describe a token kind as a string for debugging
	 */

	function getTokenKindDesc(kind) {
	  return tokenDescription[kind];
	}

	var tokenDescription = {};
	tokenDescription[TokenKind.EOF] = 'EOF';
	tokenDescription[TokenKind.BANG] = '!';
	tokenDescription[TokenKind.DOLLAR] = '$';
	tokenDescription[TokenKind.PAREN_L] = '(';
	tokenDescription[TokenKind.PAREN_R] = ')';
	tokenDescription[TokenKind.SPREAD] = '...';
	tokenDescription[TokenKind.COLON] = ':';
	tokenDescription[TokenKind.EQUALS] = '=';
	tokenDescription[TokenKind.AT] = '@';
	tokenDescription[TokenKind.BRACKET_L] = '[';
	tokenDescription[TokenKind.BRACKET_R] = ']';
	tokenDescription[TokenKind.BRACE_L] = '{';
	tokenDescription[TokenKind.PIPE] = '|';
	tokenDescription[TokenKind.BRACE_R] = '}';
	tokenDescription[TokenKind.NAME] = 'Name';
	tokenDescription[TokenKind.INT] = 'Int';
	tokenDescription[TokenKind.FLOAT] = 'Float';
	tokenDescription[TokenKind.STRING] = 'String';

	var charCodeAt = String.prototype.charCodeAt;
	var slice = String.prototype.slice;

	/**
	 * Helper function for constructing the Token object.
	 */
	function makeToken(kind, start, end, value) {
	  return { kind: kind, start: start, end: end, value: value };
	}

	function printCharCode(code) {
	  return(
	    // NaN/undefined represents access beyond the end of the file.
	    isNaN(code) ? '<EOF>' :
	    // Trust JSON for ASCII.
	    code < 0x007F ? JSON.stringify(String.fromCharCode(code)) :
	    // Otherwise print the escaped form.
	    '"\\u' + ('00' + code.toString(16).toUpperCase()).slice(-4) + '"'
	  );
	}

	/**
	 * Gets the next token from the source starting at the given position.
	 *
	 * This skips over whitespace and comments until it finds the next lexable
	 * token, then lexes punctuators immediately or calls the appropriate helper
	 * function for more complicated tokens.
	 */
	function readToken(source, fromPosition) {
	  var body = source.body;
	  var bodyLength = body.length;

	  var position = positionAfterWhitespace(body, fromPosition);

	  if (position >= bodyLength) {
	    return makeToken(TokenKind.EOF, position, position);
	  }

	  var code = charCodeAt.call(body, position);

	  // SourceCharacter
	  if (code < 0x0020 && code !== 0x0009 && code !== 0x000A && code !== 0x000D) {
	    throw (0, _error.syntaxError)(source, position, 'Invalid character ' + printCharCode(code) + '.');
	  }

	  switch (code) {
	    // !
	    case 33:
	      return makeToken(TokenKind.BANG, position, position + 1);
	    // $
	    case 36:
	      return makeToken(TokenKind.DOLLAR, position, position + 1);
	    // (
	    case 40:
	      return makeToken(TokenKind.PAREN_L, position, position + 1);
	    // )
	    case 41:
	      return makeToken(TokenKind.PAREN_R, position, position + 1);
	    // .
	    case 46:
	      if (charCodeAt.call(body, position + 1) === 46 && charCodeAt.call(body, position + 2) === 46) {
	        return makeToken(TokenKind.SPREAD, position, position + 3);
	      }
	      break;
	    // :
	    case 58:
	      return makeToken(TokenKind.COLON, position, position + 1);
	    // =
	    case 61:
	      return makeToken(TokenKind.EQUALS, position, position + 1);
	    // @
	    case 64:
	      return makeToken(TokenKind.AT, position, position + 1);
	    // [
	    case 91:
	      return makeToken(TokenKind.BRACKET_L, position, position + 1);
	    // ]
	    case 93:
	      return makeToken(TokenKind.BRACKET_R, position, position + 1);
	    // {
	    case 123:
	      return makeToken(TokenKind.BRACE_L, position, position + 1);
	    // |
	    case 124:
	      return makeToken(TokenKind.PIPE, position, position + 1);
	    // }
	    case 125:
	      return makeToken(TokenKind.BRACE_R, position, position + 1);
	    // A-Z
	    case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:
	    case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:
	    case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:
	    case 89:case 90:
	    // _
	    case 95:
	    // a-z
	    case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:
	    case 105:case 106:case 107:case 108:case 109:case 110:case 111:
	    case 112:case 113:case 114:case 115:case 116:case 117:case 118:
	    case 119:case 120:case 121:case 122:
	      return readName(source, position);
	    // -
	    case 45:
	    // 0-9
	    case 48:case 49:case 50:case 51:case 52:
	    case 53:case 54:case 55:case 56:case 57:
	      return readNumber(source, position, code);
	    // "
	    case 34:
	      return readString(source, position);
	  }

	  throw (0, _error.syntaxError)(source, position, 'Unexpected character ' + printCharCode(code) + '.');
	}

	/**
	 * Reads from body starting at startPosition until it finds a non-whitespace
	 * or commented character, then returns the position of that character for
	 * lexing.
	 */
	function positionAfterWhitespace(body, startPosition) {
	  var bodyLength = body.length;
	  var position = startPosition;
	  while (position < bodyLength) {
	    var code = charCodeAt.call(body, position);
	    // Skip Ignored
	    if (
	    // BOM
	    code === 0xFEFF ||
	    // White Space
	    code === 0x0009 || // tab
	    code === 0x0020 || // space
	    // Line Terminator
	    code === 0x000A || // new line
	    code === 0x000D || // carriage return
	    // Comma
	    code === 0x002C) {
	      ++position;
	      // Skip comments
	    } else if (code === 35) {
	        // #
	        ++position;
	        while (position < bodyLength && (code = charCodeAt.call(body, position)) !== null && (
	        // SourceCharacter but not LineTerminator
	        code > 0x001F || code === 0x0009) && code !== 0x000A && code !== 0x000D) {
	          ++position;
	        }
	      } else {
	        break;
	      }
	  }
	  return position;
	}

	/**
	 * Reads a number token from the source file, either a float
	 * or an int depending on whether a decimal point appears.
	 *
	 * Int:   -?(0|[1-9][0-9]*)
	 * Float: -?(0|[1-9][0-9]*)(\.[0-9]+)?((E|e)(+|-)?[0-9]+)?
	 */
	function readNumber(source, start, firstCode) {
	  var body = source.body;
	  var code = firstCode;
	  var position = start;
	  var isFloat = false;

	  if (code === 45) {
	    // -
	    code = charCodeAt.call(body, ++position);
	  }

	  if (code === 48) {
	    // 0
	    code = charCodeAt.call(body, ++position);
	    if (code >= 48 && code <= 57) {
	      throw (0, _error.syntaxError)(source, position, 'Invalid number, unexpected digit after 0: ' + printCharCode(code) + '.');
	    }
	  } else {
	    position = readDigits(source, position, code);
	    code = charCodeAt.call(body, position);
	  }

	  if (code === 46) {
	    // .
	    isFloat = true;

	    code = charCodeAt.call(body, ++position);
	    position = readDigits(source, position, code);
	    code = charCodeAt.call(body, position);
	  }

	  if (code === 69 || code === 101) {
	    // E e
	    isFloat = true;

	    code = charCodeAt.call(body, ++position);
	    if (code === 43 || code === 45) {
	      // + -
	      code = charCodeAt.call(body, ++position);
	    }
	    position = readDigits(source, position, code);
	  }

	  return makeToken(isFloat ? TokenKind.FLOAT : TokenKind.INT, start, position, slice.call(body, start, position));
	}

	/**
	 * Returns the new position in the source after reading digits.
	 */
	function readDigits(source, start, firstCode) {
	  var body = source.body;
	  var position = start;
	  var code = firstCode;
	  if (code >= 48 && code <= 57) {
	    // 0 - 9
	    do {
	      code = charCodeAt.call(body, ++position);
	    } while (code >= 48 && code <= 57); // 0 - 9
	    return position;
	  }
	  throw (0, _error.syntaxError)(source, position, 'Invalid number, expected digit but got: ' + printCharCode(code) + '.');
	}

	/**
	 * Reads a string token from the source file.
	 *
	 * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
	 */
	function readString(source, start) {
	  var body = source.body;
	  var position = start + 1;
	  var chunkStart = position;
	  var code = 0;
	  var value = '';

	  while (position < body.length && (code = charCodeAt.call(body, position)) !== null &&
	  // not LineTerminator
	  code !== 0x000A && code !== 0x000D &&
	  // not Quote (")
	  code !== 34) {
	    // SourceCharacter
	    if (code < 0x0020 && code !== 0x0009) {
	      throw (0, _error.syntaxError)(source, position, 'Invalid character within String: ' + printCharCode(code) + '.');
	    }

	    ++position;
	    if (code === 92) {
	      // \
	      value += slice.call(body, chunkStart, position - 1);
	      code = charCodeAt.call(body, position);
	      switch (code) {
	        case 34:
	          value += '"';break;
	        case 47:
	          value += '\/';break;
	        case 92:
	          value += '\\';break;
	        case 98:
	          value += '\b';break;
	        case 102:
	          value += '\f';break;
	        case 110:
	          value += '\n';break;
	        case 114:
	          value += '\r';break;
	        case 116:
	          value += '\t';break;
	        case 117:
	          // u
	          var charCode = uniCharCode(charCodeAt.call(body, position + 1), charCodeAt.call(body, position + 2), charCodeAt.call(body, position + 3), charCodeAt.call(body, position + 4));
	          if (charCode < 0) {
	            throw (0, _error.syntaxError)(source, position, 'Invalid character escape sequence: ' + ('\\u' + body.slice(position + 1, position + 5) + '.'));
	          }
	          value += String.fromCharCode(charCode);
	          position += 4;
	          break;
	        default:
	          throw (0, _error.syntaxError)(source, position, 'Invalid character escape sequence: \\' + String.fromCharCode(code) + '.');
	      }
	      ++position;
	      chunkStart = position;
	    }
	  }

	  if (code !== 34) {
	    // quote (")
	    throw (0, _error.syntaxError)(source, position, 'Unterminated string.');
	  }

	  value += slice.call(body, chunkStart, position);
	  return makeToken(TokenKind.STRING, start, position + 1, value);
	}

	/**
	 * Converts four hexidecimal chars to the integer that the
	 * string represents. For example, uniCharCode('0','0','0','f')
	 * will return 15, and uniCharCode('0','0','f','f') returns 255.
	 *
	 * Returns a negative number on error, if a char was invalid.
	 *
	 * This is implemented by noting that char2hex() returns -1 on error,
	 * which means the result of ORing the char2hex() will also be negative.
	 */
	function uniCharCode(a, b, c, d) {
	  return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
	}

	/**
	 * Converts a hex character to its integer value.
	 * '0' becomes 0, '9' becomes 9
	 * 'A' becomes 10, 'F' becomes 15
	 * 'a' becomes 10, 'f' becomes 15
	 *
	 * Returns -1 on error.
	 */
	function char2hex(a) {
	  return a >= 48 && a <= 57 ? a - 48 : // 0-9
	  a >= 65 && a <= 70 ? a - 55 : // A-F
	  a >= 97 && a <= 102 ? a - 87 : // a-f
	  -1;
	}

	/**
	 * Reads an alphanumeric + underscore name from the source.
	 *
	 * [_A-Za-z][_0-9A-Za-z]*
	 */
	function readName(source, position) {
	  var body = source.body;
	  var bodyLength = body.length;
	  var end = position + 1;
	  var code = 0;
	  while (end !== bodyLength && (code = charCodeAt.call(body, end)) !== null && (code === 95 || // _
	  code >= 48 && code <= 57 || // 0-9
	  code >= 65 && code <= 90 || // A-Z
	  code >= 97 && code <= 122) // a-z
	  ) {
	    ++end;
	  }
	  return makeToken(TokenKind.NAME, position, end, slice.call(body, position, end));
	}

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.print = print;

	var _visitor = __webpack_require__(85);

	/**
	 * Converts an AST into a string, using one set of reasonable
	 * formatting rules.
	 */

	function print(ast) {
	  return (0, _visitor.visit)(ast, { leave: printDocASTReducer });
	}

	var printDocASTReducer = {
	  Name: function Name(node) {
	    return node.value;
	  },
	  Variable: function Variable(node) {
	    return '$' + node.name;
	  },

	  // Document

	  Document: function Document(node) {
	    return join(node.definitions, '\n\n') + '\n';
	  },

	  OperationDefinition: function OperationDefinition(node) {
	    var op = node.operation;
	    var name = node.name;
	    var varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
	    var directives = join(node.directives, ' ');
	    var selectionSet = node.selectionSet;
	    // Anonymous queries with no directives or variable definitions can use
	    // the query short form.
	    return !name && !directives && !varDefs && op === 'query' ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], ' ');
	  },

	  VariableDefinition: function VariableDefinition(_ref) {
	    var variable = _ref.variable;
	    var type = _ref.type;
	    var defaultValue = _ref.defaultValue;
	    return variable + ': ' + type + wrap(' = ', defaultValue);
	  },

	  SelectionSet: function SelectionSet(_ref2) {
	    var selections = _ref2.selections;
	    return block(selections);
	  },

	  Field: function Field(_ref3) {
	    var alias = _ref3.alias;
	    var name = _ref3.name;
	    var args = _ref3.arguments;
	    var directives = _ref3.directives;
	    var selectionSet = _ref3.selectionSet;
	    return join([wrap('', alias, ': ') + name + wrap('(', join(args, ', '), ')'), join(directives, ' '), selectionSet], ' ');
	  },

	  Argument: function Argument(_ref4) {
	    var name = _ref4.name;
	    var value = _ref4.value;
	    return name + ': ' + value;
	  },

	  // Fragments

	  FragmentSpread: function FragmentSpread(_ref5) {
	    var name = _ref5.name;
	    var directives = _ref5.directives;
	    return '...' + name + wrap(' ', join(directives, ' '));
	  },

	  InlineFragment: function InlineFragment(_ref6) {
	    var typeCondition = _ref6.typeCondition;
	    var directives = _ref6.directives;
	    var selectionSet = _ref6.selectionSet;
	    return join(['...', wrap('on ', typeCondition), join(directives, ' '), selectionSet], ' ');
	  },

	  FragmentDefinition: function FragmentDefinition(_ref7) {
	    var name = _ref7.name;
	    var typeCondition = _ref7.typeCondition;
	    var directives = _ref7.directives;
	    var selectionSet = _ref7.selectionSet;
	    return 'fragment ' + name + ' on ' + typeCondition + ' ' + wrap('', join(directives, ' '), ' ') + selectionSet;
	  },

	  // Value

	  IntValue: function IntValue(_ref8) {
	    var value = _ref8.value;
	    return value;
	  },
	  FloatValue: function FloatValue(_ref9) {
	    var value = _ref9.value;
	    return value;
	  },
	  StringValue: function StringValue(_ref10) {
	    var value = _ref10.value;
	    return JSON.stringify(value);
	  },
	  BooleanValue: function BooleanValue(_ref11) {
	    var value = _ref11.value;
	    return JSON.stringify(value);
	  },
	  EnumValue: function EnumValue(_ref12) {
	    var value = _ref12.value;
	    return value;
	  },
	  ListValue: function ListValue(_ref13) {
	    var values = _ref13.values;
	    return '[' + join(values, ', ') + ']';
	  },
	  ObjectValue: function ObjectValue(_ref14) {
	    var fields = _ref14.fields;
	    return '{' + join(fields, ', ') + '}';
	  },
	  ObjectField: function ObjectField(_ref15) {
	    var name = _ref15.name;
	    var value = _ref15.value;
	    return name + ': ' + value;
	  },

	  // Directive

	  Directive: function Directive(_ref16) {
	    var name = _ref16.name;
	    var args = _ref16.arguments;
	    return '@' + name + wrap('(', join(args, ', '), ')');
	  },

	  // Type

	  NamedType: function NamedType(_ref17) {
	    var name = _ref17.name;
	    return name;
	  },
	  ListType: function ListType(_ref18) {
	    var type = _ref18.type;
	    return '[' + type + ']';
	  },
	  NonNullType: function NonNullType(_ref19) {
	    var type = _ref19.type;
	    return type + '!';
	  },

	  // Type Definitions

	  ObjectTypeDefinition: function ObjectTypeDefinition(_ref20) {
	    var name = _ref20.name;
	    var interfaces = _ref20.interfaces;
	    var fields = _ref20.fields;
	    return 'type ' + name + ' ' + wrap('implements ', join(interfaces, ', '), ' ') + block(fields);
	  },

	  FieldDefinition: function FieldDefinition(_ref21) {
	    var name = _ref21.name;
	    var args = _ref21.arguments;
	    var type = _ref21.type;
	    return name + wrap('(', join(args, ', '), ')') + ': ' + type;
	  },

	  InputValueDefinition: function InputValueDefinition(_ref22) {
	    var name = _ref22.name;
	    var type = _ref22.type;
	    var defaultValue = _ref22.defaultValue;
	    return name + ': ' + type + wrap(' = ', defaultValue);
	  },

	  InterfaceTypeDefinition: function InterfaceTypeDefinition(_ref23) {
	    var name = _ref23.name;
	    var fields = _ref23.fields;
	    return 'interface ' + name + ' ' + block(fields);
	  },

	  UnionTypeDefinition: function UnionTypeDefinition(_ref24) {
	    var name = _ref24.name;
	    var types = _ref24.types;
	    return 'union ' + name + ' = ' + join(types, ' | ');
	  },

	  ScalarTypeDefinition: function ScalarTypeDefinition(_ref25) {
	    var name = _ref25.name;
	    return 'scalar ' + name;
	  },

	  EnumTypeDefinition: function EnumTypeDefinition(_ref26) {
	    var name = _ref26.name;
	    var values = _ref26.values;
	    return 'enum ' + name + ' ' + block(values);
	  },

	  EnumValueDefinition: function EnumValueDefinition(_ref27) {
	    var name = _ref27.name;
	    return name;
	  },

	  InputObjectTypeDefinition: function InputObjectTypeDefinition(_ref28) {
	    var name = _ref28.name;
	    var fields = _ref28.fields;
	    return 'input ' + name + ' ' + block(fields);
	  },

	  TypeExtensionDefinition: function TypeExtensionDefinition(_ref29) {
	    var definition = _ref29.definition;
	    return 'extend ' + definition;
	  }
	};

	/**
	 * Given maybeArray, print an empty string if it is null or empty, otherwise
	 * print all items together separated by separator if provided
	 */
	function join(maybeArray, separator) {
	  return maybeArray ? maybeArray.filter(function (x) {
	    return x;
	  }).join(separator || '') : '';
	}

	/**
	 * Given maybeArray, print an empty string if it is null or empty, otherwise
	 * print each item on its own line, wrapped in an indented "{ }" block.
	 */
	function block(maybeArray) {
	  return length(maybeArray) ? indent('{\n' + join(maybeArray, '\n')) + '\n}' : '';
	}

	/**
	 * If maybeString is not null or empty, then wrap with start and end, otherwise
	 * print an empty string.
	 */
	function wrap(start, maybeString, end) {
	  return maybeString ? start + maybeString + (end || '') : '';
	}

	function indent(maybeString) {
	  return maybeString && maybeString.replace(/\n/g, '\n  ');
	}

	function length(maybeArray) {
	  return maybeArray ? maybeArray.length : 0;
	}

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _slicedToArray = __webpack_require__(86)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.visit = visit;
	exports.visitInParallel = visitInParallel;
	exports.visitWithTypeInfo = visitWithTypeInfo;
	var QueryDocumentKeys = {
	  Name: [],

	  Document: ['definitions'],
	  OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
	  VariableDefinition: ['variable', 'type', 'defaultValue'],
	  Variable: ['name'],
	  SelectionSet: ['selections'],
	  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
	  Argument: ['name', 'value'],

	  FragmentSpread: ['name', 'directives'],
	  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
	  FragmentDefinition: ['name', 'typeCondition', 'directives', 'selectionSet'],

	  IntValue: [],
	  FloatValue: [],
	  StringValue: [],
	  BooleanValue: [],
	  EnumValue: [],
	  ListValue: ['values'],
	  ObjectValue: ['fields'],
	  ObjectField: ['name', 'value'],

	  Directive: ['name', 'arguments'],

	  NamedType: ['name'],
	  ListType: ['type'],
	  NonNullType: ['type'],

	  ObjectTypeDefinition: ['name', 'interfaces', 'fields'],
	  FieldDefinition: ['name', 'arguments', 'type'],
	  InputValueDefinition: ['name', 'type', 'defaultValue'],
	  InterfaceTypeDefinition: ['name', 'fields'],
	  UnionTypeDefinition: ['name', 'types'],
	  ScalarTypeDefinition: ['name'],
	  EnumTypeDefinition: ['name', 'values'],
	  EnumValueDefinition: ['name'],
	  InputObjectTypeDefinition: ['name', 'fields'],
	  TypeExtensionDefinition: ['definition']
	};

	exports.QueryDocumentKeys = QueryDocumentKeys;
	var BREAK = {};

	exports.BREAK = BREAK;
	/**
	 * visit() will walk through an AST using a depth first traversal, calling
	 * the visitor's enter function at each node in the traversal, and calling the
	 * leave function after visiting that node and all of its child nodes.
	 *
	 * By returning different values from the enter and leave functions, the
	 * behavior of the visitor can be altered, including skipping over a sub-tree of
	 * the AST (by returning false), editing the AST by returning a value or null
	 * to remove the value, or to stop the whole traversal by returning BREAK.
	 *
	 * When using visit() to edit an AST, the original AST will not be modified, and
	 * a new version of the AST with the changes applied will be returned from the
	 * visit function.
	 *
	 *     const editedAST = visit(ast, {
	 *       enter(node, key, parent, path, ancestors) {
	 *         // @return
	 *         //   undefined: no action
	 *         //   false: skip visiting this node
	 *         //   visitor.BREAK: stop visiting altogether
	 *         //   null: delete this node
	 *         //   any value: replace this node with the returned value
	 *       },
	 *       leave(node, key, parent, path, ancestors) {
	 *         // @return
	 *         //   undefined: no action
	 *         //   false: no action
	 *         //   visitor.BREAK: stop visiting altogether
	 *         //   null: delete this node
	 *         //   any value: replace this node with the returned value
	 *       }
	 *     });
	 *
	 * Alternatively to providing enter() and leave() functions, a visitor can
	 * instead provide functions named the same as the kinds of AST nodes, or
	 * enter/leave visitors at a named key, leading to four permutations of
	 * visitor API:
	 *
	 * 1) Named visitors triggered when entering a node a specific kind.
	 *
	 *     visit(ast, {
	 *       Kind(node) {
	 *         // enter the "Kind" node
	 *       }
	 *     })
	 *
	 * 2) Named visitors that trigger upon entering and leaving a node of
	 *    a specific kind.
	 *
	 *     visit(ast, {
	 *       Kind: {
	 *         enter(node) {
	 *           // enter the "Kind" node
	 *         }
	 *         leave(node) {
	 *           // leave the "Kind" node
	 *         }
	 *       }
	 *     })
	 *
	 * 3) Generic visitors that trigger upon entering and leaving any node.
	 *
	 *     visit(ast, {
	 *       enter(node) {
	 *         // enter any node
	 *       },
	 *       leave(node) {
	 *         // leave any node
	 *       }
	 *     })
	 *
	 * 4) Parallel visitors for entering and leaving nodes of a specific kind.
	 *
	 *     visit(ast, {
	 *       enter: {
	 *         Kind(node) {
	 *           // enter the "Kind" node
	 *         }
	 *       },
	 *       leave: {
	 *         Kind(node) {
	 *           // leave the "Kind" node
	 *         }
	 *       }
	 *     })
	 */

	function visit(root, visitor, keyMap) {
	  var visitorKeys = keyMap || QueryDocumentKeys;

	  var stack = undefined;
	  var inArray = Array.isArray(root);
	  var keys = [root];
	  var index = -1;
	  var edits = [];
	  var parent = undefined;
	  var path = [];
	  var ancestors = [];
	  var newRoot = root;

	  do {
	    index++;
	    var isLeaving = index === keys.length;
	    var key = undefined;
	    var node = undefined;
	    var isEdited = isLeaving && edits.length !== 0;
	    if (isLeaving) {
	      key = ancestors.length === 0 ? undefined : path.pop();
	      node = parent;
	      parent = ancestors.pop();
	      if (isEdited) {
	        if (inArray) {
	          node = node.slice();
	        } else {
	          var clone = {};
	          for (var k in node) {
	            if (node.hasOwnProperty(k)) {
	              clone[k] = node[k];
	            }
	          }
	          node = clone;
	        }
	        var editOffset = 0;
	        for (var ii = 0; ii < edits.length; ii++) {
	          var _edits$ii = _slicedToArray(edits[ii], 1);

	          var editKey = _edits$ii[0];

	          var _edits$ii2 = _slicedToArray(edits[ii], 2);

	          var editValue = _edits$ii2[1];

	          if (inArray) {
	            editKey -= editOffset;
	          }
	          if (inArray && editValue === null) {
	            node.splice(editKey, 1);
	            editOffset++;
	          } else {
	            node[editKey] = editValue;
	          }
	        }
	      }
	      index = stack.index;
	      keys = stack.keys;
	      edits = stack.edits;
	      inArray = stack.inArray;
	      stack = stack.prev;
	    } else {
	      key = parent ? inArray ? index : keys[index] : undefined;
	      node = parent ? parent[key] : newRoot;
	      if (node === null || node === undefined) {
	        continue;
	      }
	      if (parent) {
	        path.push(key);
	      }
	    }

	    var result = undefined;
	    if (!Array.isArray(node)) {
	      if (!isNode(node)) {
	        throw new Error('Invalid AST Node: ' + JSON.stringify(node));
	      }
	      var visitFn = getVisitFn(visitor, node.kind, isLeaving);
	      if (visitFn) {
	        result = visitFn.call(visitor, node, key, parent, path, ancestors);

	        if (result === BREAK) {
	          break;
	        }

	        if (result === false) {
	          if (!isLeaving) {
	            path.pop();
	            continue;
	          }
	        } else if (result !== undefined) {
	          edits.push([key, result]);
	          if (!isLeaving) {
	            if (isNode(result)) {
	              node = result;
	            } else {
	              path.pop();
	              continue;
	            }
	          }
	        }
	      }
	    }

	    if (result === undefined && isEdited) {
	      edits.push([key, node]);
	    }

	    if (!isLeaving) {
	      stack = { inArray: inArray, index: index, keys: keys, edits: edits, prev: stack };
	      inArray = Array.isArray(node);
	      keys = inArray ? node : visitorKeys[node.kind] || [];
	      index = -1;
	      edits = [];
	      if (parent) {
	        ancestors.push(parent);
	      }
	      parent = node;
	    }
	  } while (stack !== undefined);

	  if (edits.length !== 0) {
	    newRoot = edits[0][1];
	  }

	  return newRoot;
	}

	function isNode(maybeNode) {
	  return maybeNode && typeof maybeNode.kind === 'string';
	}

	/**
	 * Creates a new visitor instance which delegates to many visitors to run in
	 * parallel. Each visitor will be visited for each node before moving on.
	 *
	 * If a prior visitor edits a node, no following visitors will see that node.
	 */

	function visitInParallel(visitors) {
	  var skipping = new Array(visitors.length);

	  return {
	    enter: function enter(node) {
	      for (var i = 0; i < visitors.length; i++) {
	        if (!skipping[i]) {
	          var fn = getVisitFn(visitors[i], node.kind, /* isLeaving */false);
	          if (fn) {
	            var result = fn.apply(visitors[i], arguments);
	            if (result === false) {
	              skipping[i] = node;
	            } else if (result === BREAK) {
	              skipping[i] = BREAK;
	            } else if (result !== undefined) {
	              return result;
	            }
	          }
	        }
	      }
	    },
	    leave: function leave(node) {
	      for (var i = 0; i < visitors.length; i++) {
	        if (!skipping[i]) {
	          var fn = getVisitFn(visitors[i], node.kind, /* isLeaving */true);
	          if (fn) {
	            var result = fn.apply(visitors[i], arguments);
	            if (result === BREAK) {
	              skipping[i] = BREAK;
	            } else if (result !== undefined && result !== false) {
	              return result;
	            }
	          }
	        } else if (skipping[i] === node) {
	          skipping[i] = null;
	        }
	      }
	    }
	  };
	}

	/**
	 * Creates a new visitor instance which maintains a provided TypeInfo instance
	 * along with visiting visitor.
	 */

	function visitWithTypeInfo(typeInfo, visitor) {
	  return {
	    enter: function enter(node) {
	      typeInfo.enter(node);
	      var fn = getVisitFn(visitor, node.kind, /* isLeaving */false);
	      if (fn) {
	        var result = fn.apply(visitor, arguments);
	        if (result !== undefined) {
	          typeInfo.leave(node);
	          if (isNode(result)) {
	            typeInfo.enter(result);
	          }
	        }
	        return result;
	      }
	    },
	    leave: function leave(node) {
	      var fn = getVisitFn(visitor, node.kind, /* isLeaving */true);
	      var result = undefined;
	      if (fn) {
	        result = fn.apply(visitor, arguments);
	      }
	      typeInfo.leave(node);
	      return result;
	    }
	  };
	}

	/**
	 * Given a visitor instance, if it is leaving or not, and a node kind, return
	 * the function the visitor runtime should call.
	 */
	function getVisitFn(visitor, kind, isLeaving) {
	  var kindVisitor = visitor[kind];
	  if (kindVisitor) {
	    if (!isLeaving && typeof kindVisitor === 'function') {
	      // { Kind() {} }
	      return kindVisitor;
	    }
	    var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;
	    if (typeof kindSpecificVisitor === 'function') {
	      // { Kind: { enter() {}, leave() {} } }
	      return kindSpecificVisitor;
	    }
	  } else {
	    var specificVisitor = isLeaving ? visitor.leave : visitor.enter;
	    if (specificVisitor) {
	      if (typeof specificVisitor === 'function') {
	        // { enter() {}, leave() {} }
	        return specificVisitor;
	      }
	      var specificKindVisitor = specificVisitor[kind];
	      if (typeof specificKindVisitor === 'function') {
	        // { enter: { Kind() {} }, leave: { Kind() {} } }
	        return specificKindVisitor;
	      }
	    }
	  }
	}

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _getIterator = __webpack_require__(87)["default"];

	var _isIterable = __webpack_require__(90)["default"];

	exports["default"] = (function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;

	    try {
	      for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);

	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }

	    return _arr;
	  }

	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if (_isIterable(Object(arr))) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	})();

	exports.__esModule = true;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(88), __esModule: true };

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(36);
	__webpack_require__(19);
	module.exports = __webpack_require__(89);

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(46)
	  , get      = __webpack_require__(52);
	module.exports = __webpack_require__(9).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(91), __esModule: true };

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(36);
	__webpack_require__(19);
	module.exports = __webpack_require__(92);

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(44)
	  , ITERATOR  = __webpack_require__(33)('iterator')
	  , Iterators = __webpack_require__(30);
	module.exports = __webpack_require__(9).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.syntaxError = syntaxError;

	var _languageLocation = __webpack_require__(82);

	var _GraphQLError = __webpack_require__(68);

	/**
	 * Produces a GraphQLError representing a syntax error, containing useful
	 * descriptive information about the syntax error's position in the source.
	 */

	function syntaxError(source, position, description) {
	  var location = (0, _languageLocation.getLocation)(source, position);
	  var error = new _GraphQLError.GraphQLError('Syntax Error ' + source.name + ' (' + location.line + ':' + location.column + ') ' + description + '\n\n' + highlightSourceAtLocation(source, location), undefined, undefined, source, [position]);
	  return error;
	}

	/**
	 * Render a helpful description of the location of the error in the GraphQL
	 * Source document.
	 */
	function highlightSourceAtLocation(source, location) {
	  var line = location.line;
	  var prevLineNum = (line - 1).toString();
	  var lineNum = line.toString();
	  var nextLineNum = (line + 1).toString();
	  var padLen = nextLineNum.length;
	  var lines = source.body.split(/\r\n|[\n\r]/g);
	  return (line >= 2 ? lpad(padLen, prevLineNum) + ': ' + lines[line - 2] + '\n' : '') + lpad(padLen, lineNum) + ': ' + lines[line - 1] + '\n' + Array(2 + padLen + location.column).join(' ') + '^\n' + (line < lines.length ? lpad(padLen, nextLineNum) + ': ' + lines[line] + '\n' : '');
	}

	function lpad(len, str) {
	  return Array(len - str.length + 1).join(' ') + str;
	}

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.locatedError = locatedError;

	var _GraphQLError = __webpack_require__(68);

	/**
	 * Given an arbitrary Error, presumably thrown while attempting to execute a
	 * GraphQL operation, produce a new GraphQLError aware of the location in the
	 * document responsible for the original Error.
	 */

	function locatedError(originalError, nodes) {
	  var message = originalError ? originalError.message || String(originalError) : 'An unknown error occurred.';
	  var stack = originalError ? originalError.stack : null;
	  var error = new _GraphQLError.GraphQLError(message, nodes, stack);
	  error.originalError = originalError;
	  return error;
	}

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	/**
	 * Given a GraphQLError, format it according to the rules described by the
	 * Response Format, Errors section of the GraphQL Specification.
	 */
	'use strict';

	var _interopRequireDefault = __webpack_require__(96)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.formatError = formatError;

	var _jsutilsInvariant = __webpack_require__(97);

	var _jsutilsInvariant2 = _interopRequireDefault(_jsutilsInvariant);

	function formatError(error) {
	  (0, _jsutilsInvariant2['default'])(error, 'Received null or undefined error.');
	  return {
	    message: error.message,
	    locations: error.locations
	  };
	}

/***/ },
/* 96 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 97 */
/***/ function(module, exports) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = invariant;

	function invariant(condition, message) {
	  if (!condition) {
	    throw new Error(message);
	  }
	}

	module.exports = exports["default"];

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _createClass = __webpack_require__(99)['default'];

	var _classCallCheck = __webpack_require__(65)['default'];

	var _Map = __webpack_require__(102)['default'];

	var _Object$create = __webpack_require__(74)['default'];

	var _interopRequireDefault = __webpack_require__(96)['default'];

	var _interopRequireWildcard = __webpack_require__(80)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.validate = validate;
	exports.visitUsingRules = visitUsingRules;

	var _jsutilsInvariant = __webpack_require__(97);

	var _jsutilsInvariant2 = _interopRequireDefault(_jsutilsInvariant);

	var _error = __webpack_require__(67);

	var _languageVisitor = __webpack_require__(85);

	var _languageKinds = __webpack_require__(81);

	var Kind = _interopRequireWildcard(_languageKinds);

	var _typeSchema = __webpack_require__(109);

	var _utilitiesTypeInfo = __webpack_require__(124);

	var _specifiedRules = __webpack_require__(126);

	/**
	 * Implements the "Validation" section of the spec.
	 *
	 * Validation runs synchronously, returning an array of encountered errors, or
	 * an empty array if no errors were encountered and the document is valid.
	 *
	 * A list of specific validation rules may be provided. If not provided, the
	 * default list of rules defined by the GraphQL specification will be used.
	 *
	 * Each validation rules is a function which returns a visitor
	 * (see the language/visitor API). Visitor methods are expected to return
	 * GraphQLErrors, or Arrays of GraphQLErrors when invalid.
	 */

	function validate(schema, ast, rules) {
	  (0, _jsutilsInvariant2['default'])(schema, 'Must provide schema');
	  (0, _jsutilsInvariant2['default'])(ast, 'Must provide document');
	  (0, _jsutilsInvariant2['default'])(schema instanceof _typeSchema.GraphQLSchema, 'Schema must be an instance of GraphQLSchema. Also ensure that there are ' + 'not multiple versions of GraphQL installed in your node_modules directory.');
	  var typeInfo = new _utilitiesTypeInfo.TypeInfo(schema);
	  return visitUsingRules(schema, typeInfo, ast, rules || _specifiedRules.specifiedRules);
	}

	/**
	 * This uses a specialized visitor which runs multiple visitors in parallel,
	 * while maintaining the visitor skip and break API.
	 *
	 * @internal
	 */

	function visitUsingRules(schema, typeInfo, documentAST, rules) {
	  var context = new ValidationContext(schema, documentAST, typeInfo);
	  var visitors = rules.map(function (rule) {
	    return rule(context);
	  });
	  // Visit the whole document with each instance of all provided rules.
	  (0, _languageVisitor.visit)(documentAST, (0, _languageVisitor.visitWithTypeInfo)(typeInfo, (0, _languageVisitor.visitInParallel)(visitors)));
	  return context.getErrors();
	}

	/**
	 * An instance of this class is passed as the "this" context to all validators,
	 * allowing access to commonly useful contextual information from within a
	 * validation rule.
	 */

	var ValidationContext = (function () {
	  function ValidationContext(schema, ast, typeInfo) {
	    _classCallCheck(this, ValidationContext);

	    this._schema = schema;
	    this._ast = ast;
	    this._typeInfo = typeInfo;
	    this._errors = [];
	    this._fragmentSpreads = new _Map();
	    this._recursivelyReferencedFragments = new _Map();
	    this._variableUsages = new _Map();
	    this._recursiveVariableUsages = new _Map();
	  }

	  _createClass(ValidationContext, [{
	    key: 'reportError',
	    value: function reportError(error) {
	      this._errors.push(error);
	    }
	  }, {
	    key: 'getErrors',
	    value: function getErrors() {
	      return this._errors;
	    }
	  }, {
	    key: 'getSchema',
	    value: function getSchema() {
	      return this._schema;
	    }
	  }, {
	    key: 'getDocument',
	    value: function getDocument() {
	      return this._ast;
	    }
	  }, {
	    key: 'getFragment',
	    value: function getFragment(name) {
	      var fragments = this._fragments;
	      if (!fragments) {
	        this._fragments = fragments = this.getDocument().definitions.reduce(function (frags, statement) {
	          if (statement.kind === Kind.FRAGMENT_DEFINITION) {
	            frags[statement.name.value] = statement;
	          }
	          return frags;
	        }, {});
	      }
	      return fragments[name];
	    }
	  }, {
	    key: 'getFragmentSpreads',
	    value: function getFragmentSpreads(node) {
	      var spreads = this._fragmentSpreads.get(node);
	      if (!spreads) {
	        spreads = [];
	        var setsToVisit = [node.selectionSet];
	        while (setsToVisit.length !== 0) {
	          var set = setsToVisit.pop();
	          for (var i = 0; i < set.selections.length; i++) {
	            var selection = set.selections[i];
	            if (selection.kind === Kind.FRAGMENT_SPREAD) {
	              spreads.push(selection);
	            } else if (selection.selectionSet) {
	              setsToVisit.push(selection.selectionSet);
	            }
	          }
	        }
	        this._fragmentSpreads.set(node, spreads);
	      }
	      return spreads;
	    }
	  }, {
	    key: 'getRecursivelyReferencedFragments',
	    value: function getRecursivelyReferencedFragments(operation) {
	      var fragments = this._recursivelyReferencedFragments.get(operation);
	      if (!fragments) {
	        fragments = [];
	        var collectedNames = _Object$create(null);
	        var nodesToVisit = [operation];
	        while (nodesToVisit.length !== 0) {
	          var _node = nodesToVisit.pop();
	          var spreads = this.getFragmentSpreads(_node);
	          for (var i = 0; i < spreads.length; i++) {
	            var fragName = spreads[i].name.value;
	            if (collectedNames[fragName] !== true) {
	              collectedNames[fragName] = true;
	              var fragment = this.getFragment(fragName);
	              if (fragment) {
	                fragments.push(fragment);
	                nodesToVisit.push(fragment);
	              }
	            }
	          }
	        }
	        this._recursivelyReferencedFragments.set(operation, fragments);
	      }
	      return fragments;
	    }
	  }, {
	    key: 'getVariableUsages',
	    value: function getVariableUsages(node) {
	      var _this = this;

	      var usages = this._variableUsages.get(node);
	      if (!usages) {
	        (function () {
	          var newUsages = [];
	          var typeInfo = new _utilitiesTypeInfo.TypeInfo(_this._schema);
	          (0, _languageVisitor.visit)(node, (0, _languageVisitor.visitWithTypeInfo)(typeInfo, {
	            VariableDefinition: function VariableDefinition() {
	              return false;
	            },
	            Variable: function Variable(variable) {
	              newUsages.push({ node: variable, type: typeInfo.getInputType() });
	            }
	          }));
	          usages = newUsages;
	          _this._variableUsages.set(node, usages);
	        })();
	      }
	      return usages;
	    }
	  }, {
	    key: 'getRecursiveVariableUsages',
	    value: function getRecursiveVariableUsages(operation) {
	      var usages = this._recursiveVariableUsages.get(operation);
	      if (!usages) {
	        usages = this.getVariableUsages(operation);
	        var fragments = this.getRecursivelyReferencedFragments(operation);
	        for (var i = 0; i < fragments.length; i++) {
	          Array.prototype.push.apply(usages, this.getVariableUsages(fragments[i]));
	        }
	        this._recursiveVariableUsages.set(operation, usages);
	      }
	      return usages;
	    }
	  }, {
	    key: 'getType',
	    value: function getType() {
	      return this._typeInfo.getType();
	    }
	  }, {
	    key: 'getParentType',
	    value: function getParentType() {
	      return this._typeInfo.getParentType();
	    }
	  }, {
	    key: 'getInputType',
	    value: function getInputType() {
	      return this._typeInfo.getInputType();
	    }
	  }, {
	    key: 'getFieldDef',
	    value: function getFieldDef() {
	      return this._typeInfo.getFieldDef();
	    }
	  }, {
	    key: 'getDirective',
	    value: function getDirective() {
	      return this._typeInfo.getDirective();
	    }
	  }, {
	    key: 'getArgument',
	    value: function getArgument() {
	      return this._typeInfo.getArgument();
	    }
	  }]);

	  return ValidationContext;
	})();

	exports.ValidationContext = ValidationContext;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$defineProperty = __webpack_require__(100)["default"];

	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;

	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();

	exports.__esModule = true;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(101), __esModule: true };

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(26);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(103), __esModule: true };

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(18);
	__webpack_require__(19);
	__webpack_require__(36);
	__webpack_require__(104);
	__webpack_require__(107);
	module.exports = __webpack_require__(9).Map;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(105);

	// 23.1 Map Objects
	__webpack_require__(106)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(26)
	  , hide         = __webpack_require__(25)
	  , redefineAll  = __webpack_require__(61)
	  , ctx          = __webpack_require__(10)
	  , strictNew    = __webpack_require__(47)
	  , defined      = __webpack_require__(5)
	  , forOf        = __webpack_require__(48)
	  , $iterDefine  = __webpack_require__(22)
	  , step         = __webpack_require__(39)
	  , ID           = __webpack_require__(35)('id')
	  , $has         = __webpack_require__(29)
	  , isObject     = __webpack_require__(45)
	  , setSpecies   = __webpack_require__(62)
	  , DESCRIPTORS  = __webpack_require__(28)
	  , isExtensible = Object.isExtensible || isObject
	  , SIZE         = DESCRIPTORS ? '_s' : 'size'
	  , id           = 0;

	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!$has(it, ID)){
	    // can't set id to frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add id
	    if(!create)return 'E';
	    // add missing object id
	    hide(it, ID, ++id);
	  // return object id with prefix
	  } return 'O' + it[ID];
	};

	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = $.create(null); // index
	      that._f = undefined;      // first entry
	      that._l = undefined;      // last entry
	      that[SIZE] = 0;           // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)$.setDesc(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(26)
	  , global         = __webpack_require__(8)
	  , $export        = __webpack_require__(7)
	  , fails          = __webpack_require__(12)
	  , hide           = __webpack_require__(25)
	  , redefineAll    = __webpack_require__(61)
	  , forOf          = __webpack_require__(48)
	  , strictNew      = __webpack_require__(47)
	  , isObject       = __webpack_require__(45)
	  , setToStringTag = __webpack_require__(32)
	  , DESCRIPTORS    = __webpack_require__(28);

	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	  } else {
	    C = wrapper(function(target, iterable){
	      strictNew(target, C, NAME);
	      target._c = new Base;
	      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
	    });
	    $.each.call('add,clear,delete,forEach,get,has,set,keys,values,entries'.split(','),function(KEY){
	      var IS_ADDER = KEY == 'add' || KEY == 'set';
	      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
	        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
	        var result = this._c[KEY](a === 0 ? 0 : a, b);
	        return IS_ADDER ? this : result;
	      });
	    });
	    if('size' in proto)$.setDesc(C.prototype, 'size', {
	      get: function(){
	        return this._c.size;
	      }
	    });
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F, O);

	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(7);

	$export($export.P, 'Map', {toJSON: __webpack_require__(108)('Map')});

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var forOf   = __webpack_require__(48)
	  , classof = __webpack_require__(44);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    var arr = [];
	    forOf(this, false, arr.push, arr);
	    return arr;
	  };
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _createClass = __webpack_require__(99)['default'];

	var _classCallCheck = __webpack_require__(65)['default'];

	var _Object$keys = __webpack_require__(1)['default'];

	var _interopRequireDefault = __webpack_require__(96)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _definition = __webpack_require__(110);

	var _directives = __webpack_require__(118);

	var _introspection = __webpack_require__(120);

	var _jsutilsFind = __webpack_require__(122);

	var _jsutilsFind2 = _interopRequireDefault(_jsutilsFind);

	var _jsutilsInvariant = __webpack_require__(97);

	var _jsutilsInvariant2 = _interopRequireDefault(_jsutilsInvariant);

	var _utilitiesTypeComparators = __webpack_require__(123);

	/**
	 * Schema Definition
	 *
	 * A Schema is created by supplying the root types of each type of operation,
	 * query and mutation (optional). A schema definition is then supplied to the
	 * validator and executor.
	 *
	 * Example:
	 *
	 *     const MyAppSchema = new GraphQLSchema({
	 *       query: MyAppQueryRootType
	 *       mutation: MyAppMutationRootType
	 *     });
	 *
	 */

	var GraphQLSchema = (function () {
	  function GraphQLSchema(config) {
	    var _this = this;

	    _classCallCheck(this, GraphQLSchema);

	    (0, _jsutilsInvariant2['default'])(typeof config === 'object', 'Must provide configuration object.');

	    (0, _jsutilsInvariant2['default'])(config.query instanceof _definition.GraphQLObjectType, 'Schema query must be Object Type but got: ' + config.query + '.');
	    this._queryType = config.query;

	    (0, _jsutilsInvariant2['default'])(!config.mutation || config.mutation instanceof _definition.GraphQLObjectType, 'Schema mutation must be Object Type if provided but ' + ('got: ' + config.mutation + '.'));
	    this._mutationType = config.mutation;

	    (0, _jsutilsInvariant2['default'])(!config.subscription || config.subscription instanceof _definition.GraphQLObjectType, 'Schema subscription must be Object Type if provided but ' + ('got: ' + config.subscription + '.'));
	    this._subscriptionType = config.subscription;

	    (0, _jsutilsInvariant2['default'])(!config.directives || Array.isArray(config.directives) && config.directives.every(function (directive) {
	      return directive instanceof _directives.GraphQLDirective;
	    }), 'Schema directives must be Array<GraphQLDirective> if provided but ' + ('got: ' + config.directives + '.'));
	    // Provide `@include() and `@skip()` directives by default.
	    this._directives = config.directives || [_directives.GraphQLIncludeDirective, _directives.GraphQLSkipDirective];

	    // Build type map now to detect any errors within this schema.
	    this._typeMap = [this.getQueryType(), this.getMutationType(), this.getSubscriptionType(), _introspection.__Schema].reduce(typeMapReducer, {});

	    // Enforce correct interface implementations
	    _Object$keys(this._typeMap).forEach(function (typeName) {
	      var type = _this._typeMap[typeName];
	      if (type instanceof _definition.GraphQLObjectType) {
	        type.getInterfaces().forEach(function (iface) {
	          return assertObjectImplementsInterface(type, iface);
	        });
	      }
	    });
	  }

	  _createClass(GraphQLSchema, [{
	    key: 'getQueryType',
	    value: function getQueryType() {
	      return this._queryType;
	    }
	  }, {
	    key: 'getMutationType',
	    value: function getMutationType() {
	      return this._mutationType;
	    }
	  }, {
	    key: 'getSubscriptionType',
	    value: function getSubscriptionType() {
	      return this._subscriptionType;
	    }
	  }, {
	    key: 'getTypeMap',
	    value: function getTypeMap() {
	      return this._typeMap;
	    }
	  }, {
	    key: 'getType',
	    value: function getType(name) {
	      return this.getTypeMap()[name];
	    }
	  }, {
	    key: 'getDirectives',
	    value: function getDirectives() {
	      return this._directives;
	    }
	  }, {
	    key: 'getDirective',
	    value: function getDirective(name) {
	      return (0, _jsutilsFind2['default'])(this.getDirectives(), function (directive) {
	        return directive.name === name;
	      });
	    }
	  }]);

	  return GraphQLSchema;
	})();

	exports.GraphQLSchema = GraphQLSchema;

	function typeMapReducer(_x, _x2) {
	  var _again = true;

	  _function: while (_again) {
	    var map = _x,
	        type = _x2;
	    reducedMap = undefined;
	    _again = false;

	    if (!type) {
	      return map;
	    }
	    if (type instanceof _definition.GraphQLList || type instanceof _definition.GraphQLNonNull) {
	      _x = map;
	      _x2 = type.ofType;
	      _again = true;
	      continue _function;
	    }
	    if (map[type.name]) {
	      (0, _jsutilsInvariant2['default'])(map[type.name] === type, 'Schema must contain unique named types but contains multiple ' + ('types named "' + type + '".'));
	      return map;
	    }
	    map[type.name] = type;

	    var reducedMap = map;

	    if (type instanceof _definition.GraphQLUnionType || type instanceof _definition.GraphQLInterfaceType) {
	      reducedMap = type.getPossibleTypes().reduce(typeMapReducer, reducedMap);
	    }

	    if (type instanceof _definition.GraphQLObjectType) {
	      reducedMap = type.getInterfaces().reduce(typeMapReducer, reducedMap);
	    }

	    if (type instanceof _definition.GraphQLObjectType || type instanceof _definition.GraphQLInterfaceType || type instanceof _definition.GraphQLInputObjectType) {
	      (function () {
	        var fieldMap = type.getFields();
	        _Object$keys(fieldMap).forEach(function (fieldName) {
	          var field = fieldMap[fieldName];

	          if (field.args) {
	            var fieldArgTypes = field.args.map(function (arg) {
	              return arg.type;
	            });
	            reducedMap = fieldArgTypes.reduce(typeMapReducer, reducedMap);
	          }
	          reducedMap = typeMapReducer(reducedMap, field.type);
	        });
	      })();
	    }

	    return reducedMap;
	  }
	}

	function assertObjectImplementsInterface(object, iface) {
	  var objectFieldMap = object.getFields();
	  var ifaceFieldMap = iface.getFields();

	  // Assert each interface field is implemented.
	  _Object$keys(ifaceFieldMap).forEach(function (fieldName) {
	    var objectField = objectFieldMap[fieldName];
	    var ifaceField = ifaceFieldMap[fieldName];

	    // Assert interface field exists on object.
	    (0, _jsutilsInvariant2['default'])(objectField, '"' + iface + '" expects field "' + fieldName + '" but "' + object + '" does not ' + 'provide it.');

	    // Assert interface field type is satisfied by object field type, by being
	    // a valid subtype. (covariant)
	    (0, _jsutilsInvariant2['default'])((0, _utilitiesTypeComparators.isTypeSubTypeOf)(objectField.type, ifaceField.type), iface + '.' + fieldName + ' expects type "' + ifaceField.type + '" but ' + (object + '.' + fieldName + ' provides type "' + objectField.type + '".'));

	    // Assert each interface field arg is implemented.
	    ifaceField.args.forEach(function (ifaceArg) {
	      var argName = ifaceArg.name;
	      var objectArg = (0, _jsutilsFind2['default'])(objectField.args, function (arg) {
	        return arg.name === argName;
	      });

	      // Assert interface field arg exists on object field.
	      (0, _jsutilsInvariant2['default'])(objectArg, iface + '.' + fieldName + ' expects argument "' + argName + '" but ' + (object + '.' + fieldName + ' does not provide it.'));

	      // Assert interface field arg type matches object field arg type.
	      // (invariant)
	      (0, _jsutilsInvariant2['default'])((0, _utilitiesTypeComparators.isEqualType)(ifaceArg.type, objectArg.type), iface + '.' + fieldName + '(' + argName + ':) expects type "' + ifaceArg.type + '" ' + ('but ' + object + '.' + fieldName + '(' + argName + ':) provides ') + ('type "' + objectArg.type + '".'));
	    });

	    // Assert additional arguments must not be required.
	    objectField.args.forEach(function (objectArg) {
	      var argName = objectArg.name;
	      var ifaceArg = (0, _jsutilsFind2['default'])(ifaceField.args, function (arg) {
	        return arg.name === argName;
	      });
	      if (!ifaceArg) {
	        (0, _jsutilsInvariant2['default'])(!(objectArg.type instanceof _definition.GraphQLNonNull), object + '.' + fieldName + '(' + argName + ':) is of required type ' + ('"' + objectArg.type + '" but is not also provided by the ') + ('interface ' + iface + '.' + fieldName + '.'));
	      }
	    });
	  });
	}

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	// Predicates

	/**
	 * These are all of the possible kinds of types.
	 */
	'use strict';

	var _createClass = __webpack_require__(99)['default'];

	var _classCallCheck = __webpack_require__(65)['default'];

	var _extends = __webpack_require__(111)['default'];

	var _Object$keys = __webpack_require__(1)['default'];

	var _Map = __webpack_require__(102)['default'];

	var _Object$create = __webpack_require__(74)['default'];

	var _interopRequireDefault = __webpack_require__(96)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.isType = isType;

	/**
	 * These types may be used as input types for arguments and directives.
	 */
	exports.isInputType = isInputType;

	/**
	 * These types may be used as output types as the result of fields.
	 */
	exports.isOutputType = isOutputType;

	/**
	 * These types may describe types which may be leaf values.
	 */
	exports.isLeafType = isLeafType;

	/**
	 * These types may describe the parent context of a selection set.
	 */
	exports.isCompositeType = isCompositeType;

	/**
	 * These types may describe the parent context of a selection set.
	 */
	exports.isAbstractType = isAbstractType;

	/**
	 * These types can all accept null as a value.
	 */
	exports.getNullableType = getNullableType;

	/**
	 * These named types do not include modifiers like List or NonNull.
	 */
	exports.getNamedType = getNamedType;

	var _jsutilsInvariant = __webpack_require__(97);

	var _jsutilsInvariant2 = _interopRequireDefault(_jsutilsInvariant);

	var _jsutilsIsNullish = __webpack_require__(116);

	var _jsutilsIsNullish2 = _interopRequireDefault(_jsutilsIsNullish);

	var _jsutilsKeyMap = __webpack_require__(117);

	var _jsutilsKeyMap2 = _interopRequireDefault(_jsutilsKeyMap);

	var _languageKinds = __webpack_require__(81);

	function isType(type) {
	  return type instanceof GraphQLScalarType || type instanceof GraphQLObjectType || type instanceof GraphQLInterfaceType || type instanceof GraphQLUnionType || type instanceof GraphQLEnumType || type instanceof GraphQLInputObjectType || type instanceof GraphQLList || type instanceof GraphQLNonNull;
	}

	function isInputType(type) {
	  var namedType = getNamedType(type);
	  return namedType instanceof GraphQLScalarType || namedType instanceof GraphQLEnumType || namedType instanceof GraphQLInputObjectType;
	}

	function isOutputType(type) {
	  var namedType = getNamedType(type);
	  return namedType instanceof GraphQLScalarType || namedType instanceof GraphQLObjectType || namedType instanceof GraphQLInterfaceType || namedType instanceof GraphQLUnionType || namedType instanceof GraphQLEnumType;
	}

	function isLeafType(type) {
	  var namedType = getNamedType(type);
	  return namedType instanceof GraphQLScalarType || namedType instanceof GraphQLEnumType;
	}

	function isCompositeType(type) {
	  return type instanceof GraphQLObjectType || type instanceof GraphQLInterfaceType || type instanceof GraphQLUnionType;
	}

	function isAbstractType(type) {
	  return type instanceof GraphQLInterfaceType || type instanceof GraphQLUnionType;
	}

	function getNullableType(type) {
	  return type instanceof GraphQLNonNull ? type.ofType : type;
	}

	function getNamedType(type) {
	  var unmodifiedType = type;
	  while (unmodifiedType instanceof GraphQLList || unmodifiedType instanceof GraphQLNonNull) {
	    unmodifiedType = unmodifiedType.ofType;
	  }
	  return unmodifiedType;
	}

	/**
	 * Scalar Type Definition
	 *
	 * The leaf values of any request and input values to arguments are
	 * Scalars (or Enums) and are defined with a name and a series of functions
	 * used to parse input from ast or variables and to ensure validity.
	 *
	 * Example:
	 *
	 *     const OddType = new GraphQLScalarType({
	 *       name: 'Odd',
	 *       serialize(value) {
	 *         return value % 2 === 1 ? value : null;
	 *       }
	 *     });
	 *
	 */

	var GraphQLScalarType = (function () {
	  function GraphQLScalarType(config) {
	    _classCallCheck(this, GraphQLScalarType);

	    (0, _jsutilsInvariant2['default'])(config.name, 'Type must be named.');
	    assertValidName(config.name);
	    this.name = config.name;
	    this.description = config.description;
	    (0, _jsutilsInvariant2['default'])(typeof config.serialize === 'function', this + ' must provide "serialize" function. If this custom Scalar is ' + 'also used as an input type, ensure "parseValue" and "parseLiteral" ' + 'functions are also provided.');
	    if (config.parseValue || config.parseLiteral) {
	      (0, _jsutilsInvariant2['default'])(typeof config.parseValue === 'function' && typeof config.parseLiteral === 'function', this + ' must provide both "parseValue" and "parseLiteral" functions.');
	    }
	    this._scalarConfig = config;
	  }

	  _createClass(GraphQLScalarType, [{
	    key: 'serialize',
	    value: function serialize(value) {
	      var serializer = this._scalarConfig.serialize;
	      return serializer(value);
	    }
	  }, {
	    key: 'parseValue',
	    value: function parseValue(value) {
	      var parser = this._scalarConfig.parseValue;
	      return parser ? parser(value) : null;
	    }
	  }, {
	    key: 'parseLiteral',
	    value: function parseLiteral(valueAST) {
	      var parser = this._scalarConfig.parseLiteral;
	      return parser ? parser(valueAST) : null;
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return this.name;
	    }
	  }]);

	  return GraphQLScalarType;
	})();

	exports.GraphQLScalarType = GraphQLScalarType;

	/**
	 * Object Type Definition
	 *
	 * Almost all of the GraphQL types you define will be object types. Object types
	 * have a name, but most importantly describe their fields.
	 *
	 * Example:
	 *
	 *     const AddressType = new GraphQLObjectType({
	 *       name: 'Address',
	 *       fields: {
	 *         street: { type: GraphQLString },
	 *         number: { type: GraphQLInt },
	 *         formatted: {
	 *           type: GraphQLString,
	 *           resolve(obj) {
	 *             return obj.number + ' ' + obj.street
	 *           }
	 *         }
	 *       }
	 *     });
	 *
	 * When two types need to refer to each other, or a type needs to refer to
	 * itself in a field, you can use a function expression (aka a closure or a
	 * thunk) to supply the fields lazily.
	 *
	 * Example:
	 *
	 *     const PersonType = new GraphQLObjectType({
	 *       name: 'Person',
	 *       fields: () => ({
	 *         name: { type: GraphQLString },
	 *         bestFriend: { type: PersonType },
	 *       })
	 *     });
	 *
	 */

	var GraphQLObjectType = (function () {
	  function GraphQLObjectType(config) {
	    _classCallCheck(this, GraphQLObjectType);

	    (0, _jsutilsInvariant2['default'])(config.name, 'Type must be named.');
	    assertValidName(config.name);
	    this.name = config.name;
	    this.description = config.description;
	    if (config.isTypeOf) {
	      (0, _jsutilsInvariant2['default'])(typeof config.isTypeOf === 'function', this + ' must provide "isTypeOf" as a function.');
	    }
	    this.isTypeOf = config.isTypeOf;
	    this._typeConfig = config;
	    addImplementationToInterfaces(this);
	  }

	  _createClass(GraphQLObjectType, [{
	    key: 'getFields',
	    value: function getFields() {
	      return this._fields || (this._fields = defineFieldMap(this, this._typeConfig.fields));
	    }
	  }, {
	    key: 'getInterfaces',
	    value: function getInterfaces() {
	      return this._interfaces || (this._interfaces = defineInterfaces(this, this._typeConfig.interfaces));
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return this.name;
	    }
	  }]);

	  return GraphQLObjectType;
	})();

	exports.GraphQLObjectType = GraphQLObjectType;

	function resolveMaybeThunk(thingOrThunk) {
	  return typeof thingOrThunk === 'function' ? thingOrThunk() : thingOrThunk;
	}

	function defineInterfaces(type, interfacesOrThunk) {
	  var interfaces = resolveMaybeThunk(interfacesOrThunk);
	  if (!interfaces) {
	    return [];
	  }
	  (0, _jsutilsInvariant2['default'])(Array.isArray(interfaces), type + ' interfaces must be an Array or a function which returns an Array.');
	  interfaces.forEach(function (iface) {
	    (0, _jsutilsInvariant2['default'])(iface instanceof GraphQLInterfaceType, type + ' may only implement Interface types, it cannot ' + ('implement: ' + iface + '.'));
	    if (typeof iface.resolveType !== 'function') {
	      (0, _jsutilsInvariant2['default'])(typeof type.isTypeOf === 'function', 'Interface Type ' + iface + ' does not provide a "resolveType" function ' + ('and implementing Type ' + type + ' does not provide a "isTypeOf" ') + 'function. There is no way to resolve this implementing type ' + 'during execution.');
	    }
	  });
	  return interfaces;
	}

	function defineFieldMap(type, fields) {
	  var fieldMap = resolveMaybeThunk(fields);
	  (0, _jsutilsInvariant2['default'])(isPlainObj(fieldMap), type + ' fields must be an object with field names as keys or a ' + 'function which returns such an object.');

	  var fieldNames = _Object$keys(fieldMap);
	  (0, _jsutilsInvariant2['default'])(fieldNames.length > 0, type + ' fields must be an object with field names as keys or a ' + 'function which returns such an object.');

	  var resultFieldMap = {};
	  fieldNames.forEach(function (fieldName) {
	    assertValidName(fieldName);
	    var field = _extends({}, fieldMap[fieldName], {
	      name: fieldName
	    });
	    (0, _jsutilsInvariant2['default'])(!field.hasOwnProperty('isDeprecated'), type + '.' + fieldName + ' should provide "deprecationReason" instead ' + 'of "isDeprecated".');
	    (0, _jsutilsInvariant2['default'])(isOutputType(field.type), type + '.' + fieldName + ' field type must be Output Type but ' + ('got: ' + field.type + '.'));
	    if (!field.args) {
	      field.args = [];
	    } else {
	      (0, _jsutilsInvariant2['default'])(isPlainObj(field.args), type + '.' + fieldName + ' args must be an object with argument names ' + 'as keys.');
	      field.args = _Object$keys(field.args).map(function (argName) {
	        assertValidName(argName);
	        var arg = field.args[argName];
	        (0, _jsutilsInvariant2['default'])(isInputType(arg.type), type + '.' + fieldName + '(' + argName + ':) argument type must be ' + ('Input Type but got: ' + arg.type + '.'));
	        return {
	          name: argName,
	          description: arg.description === undefined ? null : arg.description,
	          type: arg.type,
	          defaultValue: arg.defaultValue === undefined ? null : arg.defaultValue
	        };
	      });
	    }
	    resultFieldMap[fieldName] = field;
	  });
	  return resultFieldMap;
	}

	function isPlainObj(obj) {
	  return obj && typeof obj === 'object' && !Array.isArray(obj);
	}

	/**
	 * Update the interfaces to know about this implementation.
	 * This is an rare and unfortunate use of mutation in the type definition
	 * implementations, but avoids an expensive "getPossibleTypes"
	 * implementation for Interface types.
	 */
	function addImplementationToInterfaces(impl) {
	  impl.getInterfaces().forEach(function (type) {
	    type._implementations.push(impl);
	  });
	}

	/**
	 * Interface Type Definition
	 *
	 * When a field can return one of a heterogeneous set of types, a Interface type
	 * is used to describe what types are possible, what fields are in common across
	 * all types, as well as a function to determine which type is actually used
	 * when the field is resolved.
	 *
	 * Example:
	 *
	 *     const EntityType = new GraphQLInterfaceType({
	 *       name: 'Entity',
	 *       fields: {
	 *         name: { type: GraphQLString }
	 *       }
	 *     });
	 *
	 */

	var GraphQLInterfaceType = (function () {
	  function GraphQLInterfaceType(config) {
	    _classCallCheck(this, GraphQLInterfaceType);

	    (0, _jsutilsInvariant2['default'])(config.name, 'Type must be named.');
	    assertValidName(config.name);
	    this.name = config.name;
	    this.description = config.description;
	    if (config.resolveType) {
	      (0, _jsutilsInvariant2['default'])(typeof config.resolveType === 'function', this + ' must provide "resolveType" as a function.');
	    }
	    this.resolveType = config.resolveType;
	    this._typeConfig = config;
	    this._implementations = [];
	  }

	  _createClass(GraphQLInterfaceType, [{
	    key: 'getFields',
	    value: function getFields() {
	      return this._fields || (this._fields = defineFieldMap(this, this._typeConfig.fields));
	    }
	  }, {
	    key: 'getPossibleTypes',
	    value: function getPossibleTypes() {
	      return this._implementations;
	    }
	  }, {
	    key: 'isPossibleType',
	    value: function isPossibleType(type) {
	      var possibleTypes = this._possibleTypes || (this._possibleTypes = (0, _jsutilsKeyMap2['default'])(this.getPossibleTypes(), function (possibleType) {
	        return possibleType.name;
	      }));
	      return Boolean(possibleTypes[type.name]);
	    }
	  }, {
	    key: 'getObjectType',
	    value: function getObjectType(value, info) {
	      var resolver = this.resolveType;
	      return resolver ? resolver(value, info) : getTypeOf(value, info, this);
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return this.name;
	    }
	  }]);

	  return GraphQLInterfaceType;
	})();

	exports.GraphQLInterfaceType = GraphQLInterfaceType;

	function getTypeOf(value, info, abstractType) {
	  var possibleTypes = abstractType.getPossibleTypes();
	  for (var i = 0; i < possibleTypes.length; i++) {
	    var _type = possibleTypes[i];
	    if (typeof _type.isTypeOf === 'function' && _type.isTypeOf(value, info)) {
	      return _type;
	    }
	  }
	}

	/**
	 * Union Type Definition
	 *
	 * When a field can return one of a heterogeneous set of types, a Union type
	 * is used to describe what types are possible as well as providing a function
	 * to determine which type is actually used when the field is resolved.
	 *
	 * Example:
	 *
	 *     const PetType = new GraphQLUnionType({
	 *       name: 'Pet',
	 *       types: [ DogType, CatType ],
	 *       resolveType(value) {
	 *         if (value instanceof Dog) {
	 *           return DogType;
	 *         }
	 *         if (value instanceof Cat) {
	 *           return CatType;
	 *         }
	 *       }
	 *     });
	 *
	 */

	var GraphQLUnionType = (function () {
	  function GraphQLUnionType(config) {
	    var _this = this;

	    _classCallCheck(this, GraphQLUnionType);

	    (0, _jsutilsInvariant2['default'])(config.name, 'Type must be named.');
	    assertValidName(config.name);
	    this.name = config.name;
	    this.description = config.description;
	    if (config.resolveType) {
	      (0, _jsutilsInvariant2['default'])(typeof config.resolveType === 'function', this + ' must provide "resolveType" as a function.');
	    }
	    this.resolveType = config.resolveType;
	    (0, _jsutilsInvariant2['default'])(Array.isArray(config.types) && config.types.length > 0, 'Must provide Array of types for Union ' + config.name + '.');
	    config.types.forEach(function (type) {
	      (0, _jsutilsInvariant2['default'])(type instanceof GraphQLObjectType, _this + ' may only contain Object types, it cannot contain: ' + type + '.');
	      if (typeof _this.resolveType !== 'function') {
	        (0, _jsutilsInvariant2['default'])(typeof type.isTypeOf === 'function', 'Union Type ' + _this + ' does not provide a "resolveType" function ' + ('and possible Type ' + type + ' does not provide a "isTypeOf" ') + 'function. There is no way to resolve this possible type ' + 'during execution.');
	      }
	    });
	    this._types = config.types;
	    this._typeConfig = config;
	  }

	  _createClass(GraphQLUnionType, [{
	    key: 'getPossibleTypes',
	    value: function getPossibleTypes() {
	      return this._types;
	    }
	  }, {
	    key: 'isPossibleType',
	    value: function isPossibleType(type) {
	      var possibleTypeNames = this._possibleTypeNames;
	      if (!possibleTypeNames) {
	        this._possibleTypeNames = possibleTypeNames = this.getPossibleTypes().reduce(function (map, possibleType) {
	          return (map[possibleType.name] = true, map);
	        }, {});
	      }
	      return possibleTypeNames[type.name] === true;
	    }
	  }, {
	    key: 'getObjectType',
	    value: function getObjectType(value, info) {
	      var resolver = this._typeConfig.resolveType;
	      return resolver ? resolver(value, info) : getTypeOf(value, info, this);
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return this.name;
	    }
	  }]);

	  return GraphQLUnionType;
	})();

	exports.GraphQLUnionType = GraphQLUnionType;

	/**
	 * Enum Type Definition
	 *
	 * Some leaf values of requests and input values are Enums. GraphQL serializes
	 * Enum values as strings, however internally Enums can be represented by any
	 * kind of type, often integers.
	 *
	 * Example:
	 *
	 *     const RGBType = new GraphQLEnumType({
	 *       name: 'RGB',
	 *       values: {
	 *         RED: { value: 0 },
	 *         GREEN: { value: 1 },
	 *         BLUE: { value: 2 }
	 *       }
	 *     });
	 *
	 * Note: If a value is not provided in a definition, the name of the enum value
	 * will be used as its internal value.
	 */

	var GraphQLEnumType /* <T> */ = (function () {
	  function GraphQLEnumType(config /* <T> */) {
	    _classCallCheck(this, GraphQLEnumType);

	    this.name = config.name;
	    assertValidName(config.name);
	    this.description = config.description;
	    this._values = defineEnumValues(this, config.values);
	    this._enumConfig = config;
	  }

	  _createClass(GraphQLEnumType, [{
	    key: 'getValues',
	    value: function getValues() /* <T> */{
	      return this._values;
	    }
	  }, {
	    key: 'serialize',
	    value: function serialize(value /* T */) {
	      var enumValue = this._getValueLookup().get(value);
	      return enumValue ? enumValue.name : null;
	    }
	  }, {
	    key: 'parseValue',
	    value: function parseValue(value) /* T */{
	      if (typeof value === 'string') {
	        var enumValue = this._getNameLookup()[value];
	        if (enumValue) {
	          return enumValue.value;
	        }
	      }
	    }
	  }, {
	    key: 'parseLiteral',
	    value: function parseLiteral(valueAST) /* T */{
	      if (valueAST.kind === _languageKinds.ENUM) {
	        var enumValue = this._getNameLookup()[valueAST.value];
	        if (enumValue) {
	          return enumValue.value;
	        }
	      }
	    }
	  }, {
	    key: '_getValueLookup',
	    value: function _getValueLookup() {
	      var _this2 = this;

	      if (!this._valueLookup) {
	        (function () {
	          var lookup = new _Map();
	          _this2.getValues().forEach(function (value) {
	            lookup.set(value.value, value);
	          });
	          _this2._valueLookup = lookup;
	        })();
	      }
	      return this._valueLookup;
	    }
	  }, {
	    key: '_getNameLookup',
	    value: function _getNameLookup() {
	      var _this3 = this;

	      if (!this._nameLookup) {
	        (function () {
	          var lookup = _Object$create(null);
	          _this3.getValues().forEach(function (value) {
	            lookup[value.name] = value;
	          });
	          _this3._nameLookup = lookup;
	        })();
	      }
	      return this._nameLookup;
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return this.name;
	    }
	  }]);

	  return GraphQLEnumType;
	})();

	exports.GraphQLEnumType = GraphQLEnumType;

	function defineEnumValues(type, valueMap /* <T> */
	) /* <T> */{
	  (0, _jsutilsInvariant2['default'])(isPlainObj(valueMap), type + ' values must be an object with value names as keys.');
	  var valueNames = _Object$keys(valueMap);
	  (0, _jsutilsInvariant2['default'])(valueNames.length > 0, type + ' values must be an object with value names as keys.');
	  return valueNames.map(function (valueName) {
	    assertValidName(valueName);
	    var value = valueMap[valueName];
	    (0, _jsutilsInvariant2['default'])(isPlainObj(value), type + '.' + valueName + ' must refer to an object with a "value" key ' + ('representing an internal value but got: ' + value + '.'));
	    (0, _jsutilsInvariant2['default'])(!value.hasOwnProperty('isDeprecated'), type + '.' + valueName + ' should provide "deprecationReason" instead ' + 'of "isDeprecated".');
	    return {
	      name: valueName,
	      description: value.description,
	      deprecationReason: value.deprecationReason,
	      value: (0, _jsutilsIsNullish2['default'])(value.value) ? valueName : value.value
	    };
	  });
	}

	/* <T> */ /* T */

	/**
	 * Input Object Type Definition
	 *
	 * An input object defines a structured collection of fields which may be
	 * supplied to a field argument.
	 *
	 * Using `NonNull` will ensure that a value must be provided by the query
	 *
	 * Example:
	 *
	 *     const GeoPoint = new GraphQLInputObjectType({
	 *       name: 'GeoPoint',
	 *       fields: {
	 *         lat: { type: new GraphQLNonNull(GraphQLFloat) },
	 *         lon: { type: new GraphQLNonNull(GraphQLFloat) },
	 *         alt: { type: GraphQLFloat, defaultValue: 0 },
	 *       }
	 *     });
	 *
	 */

	var GraphQLInputObjectType = (function () {
	  function GraphQLInputObjectType(config) {
	    _classCallCheck(this, GraphQLInputObjectType);

	    (0, _jsutilsInvariant2['default'])(config.name, 'Type must be named.');
	    assertValidName(config.name);
	    this.name = config.name;
	    this.description = config.description;
	    this._typeConfig = config;
	  }

	  _createClass(GraphQLInputObjectType, [{
	    key: 'getFields',
	    value: function getFields() {
	      return this._fields || (this._fields = this._defineFieldMap());
	    }
	  }, {
	    key: '_defineFieldMap',
	    value: function _defineFieldMap() {
	      var _this4 = this;

	      var fieldMap = resolveMaybeThunk(this._typeConfig.fields);
	      (0, _jsutilsInvariant2['default'])(isPlainObj(fieldMap), this + ' fields must be an object with field names as keys or a ' + 'function which returns such an object.');
	      var fieldNames = _Object$keys(fieldMap);
	      (0, _jsutilsInvariant2['default'])(fieldNames.length > 0, this + ' fields must be an object with field names as keys or a ' + 'function which returns such an object.');
	      var resultFieldMap = {};
	      fieldNames.forEach(function (fieldName) {
	        assertValidName(fieldName);
	        var field = _extends({}, fieldMap[fieldName], {
	          name: fieldName
	        });
	        (0, _jsutilsInvariant2['default'])(isInputType(field.type), _this4 + '.' + fieldName + ' field type must be Input Type but ' + ('got: ' + field.type + '.'));
	        resultFieldMap[fieldName] = field;
	      });
	      return resultFieldMap;
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return this.name;
	    }
	  }]);

	  return GraphQLInputObjectType;
	})();

	exports.GraphQLInputObjectType = GraphQLInputObjectType;

	/**
	 * List Modifier
	 *
	 * A list is a kind of type marker, a wrapping type which points to another
	 * type. Lists are often created within the context of defining the fields of
	 * an object type.
	 *
	 * Example:
	 *
	 *     const PersonType = new GraphQLObjectType({
	 *       name: 'Person',
	 *       fields: () => ({
	 *         parents: { type: new GraphQLList(Person) },
	 *         children: { type: new GraphQLList(Person) },
	 *       })
	 *     })
	 *
	 */

	var GraphQLList = (function () {
	  function GraphQLList(type) {
	    _classCallCheck(this, GraphQLList);

	    (0, _jsutilsInvariant2['default'])(isType(type), 'Can only create List of a GraphQLType but got: ' + type + '.');
	    this.ofType = type;
	  }

	  /**
	   * Non-Null Modifier
	   *
	   * A non-null is a kind of type marker, a wrapping type which points to another
	   * type. Non-null types enforce that their values are never null and can ensure
	   * an error is raised if this ever occurs during a request. It is useful for
	   * fields which you can make a strong guarantee on non-nullability, for example
	   * usually the id field of a database row will never be null.
	   *
	   * Example:
	   *
	   *     const RowType = new GraphQLObjectType({
	   *       name: 'Row',
	   *       fields: () => ({
	   *         id: { type: new GraphQLNonNull(GraphQLString) },
	   *       })
	   *     })
	   *
	   * Note: the enforcement of non-nullability occurs within the executor.
	   */

	  _createClass(GraphQLList, [{
	    key: 'toString',
	    value: function toString() {
	      return '[' + String(this.ofType) + ']';
	    }
	  }]);

	  return GraphQLList;
	})();

	exports.GraphQLList = GraphQLList;

	var GraphQLNonNull = (function () {
	  function GraphQLNonNull(type) {
	    _classCallCheck(this, GraphQLNonNull);

	    (0, _jsutilsInvariant2['default'])(isType(type) && !(type instanceof GraphQLNonNull), 'Can only create NonNull of a Nullable GraphQLType but got: ' + type + '.');
	    this.ofType = type;
	  }

	  _createClass(GraphQLNonNull, [{
	    key: 'toString',
	    value: function toString() {
	      return this.ofType.toString() + '!';
	    }
	  }]);

	  return GraphQLNonNull;
	})();

	exports.GraphQLNonNull = GraphQLNonNull;

	var NAME_RX = /^[_a-zA-Z][_a-zA-Z0-9]*$/;

	// Helper to assert that provided names are valid.
	function assertValidName(name) {
	  (0, _jsutilsInvariant2['default'])(NAME_RX.test(name), 'Names must match /^[_a-zA-Z][_a-zA-Z0-9]*$/ but "' + name + '" does not.');
	}

	/**
	 * Optionally provide a custom type resolver function. If one is not provided,
	 * the default implementation will call `isTypeOf` on each implementing
	 * Object type.
	 */

	/**
	 * Optionally provide a custom type resolver function. If one is not provided,
	 * the default implementation will call `isTypeOf` on each implementing
	 * Object type.
	 */
	/* <T> */ /* <T> */ /* T */ /* T */ /* <T> */ /* <T> */ /* <T> */ /* <T> */ /* T */ /* <T> */

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$assign = __webpack_require__(112)["default"];

	exports["default"] = _Object$assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

	exports.__esModule = true;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(113), __esModule: true };

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(114);
	module.exports = __webpack_require__(9).Object.assign;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(7);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(115)});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(26)
	  , toObject = __webpack_require__(4)
	  , IObject  = __webpack_require__(41);

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(12)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 116 */
/***/ function(module, exports) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	/**
	 * Returns true if a value is null, undefined, or NaN.
	 */
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = isNullish;

	function isNullish(value) {
	  return value === null || value === undefined || value !== value;
	}

	module.exports = exports["default"];

/***/ },
/* 117 */
/***/ function(module, exports) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	/**
	 * Creates a keyed JS object from an array, given a function to produce the keys
	 * for each value in the array.
	 *
	 * This provides a convenient lookup for the array items if the key function
	 * produces unique results.
	 *
	 *     const phoneBook = [
	 *       { name: 'Jon', num: '555-1234' },
	 *       { name: 'Jenny', num: '867-5309' }
	 *     ]
	 *
	 *     // { Jon: { name: 'Jon', num: '555-1234' },
	 *     //   Jenny: { name: 'Jenny', num: '867-5309' } }
	 *     const entriesByName = keyMap(
	 *       phoneBook,
	 *       entry => entry.name
	 *     )
	 *
	 *     // { name: 'Jenny', num: '857-6309' }
	 *     const jennyEntry = entriesByName['Jenny']
	 *
	 */
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = keyMap;

	function keyMap(list, keyFn) {
	  return list.reduce(function (map, item) {
	    return (map[keyFn(item)] = item, map);
	  }, {});
	}

	module.exports = exports["default"];

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _classCallCheck = __webpack_require__(65)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _definition = __webpack_require__(110);

	var _scalars = __webpack_require__(119);

	/**
	 * Directives are used by the GraphQL runtime as a way of modifying execution
	 * behavior. Type system creators will usually not create these directly.
	 */

	var GraphQLDirective = function GraphQLDirective(config) {
	  _classCallCheck(this, GraphQLDirective);

	  this.name = config.name;
	  this.description = config.description;
	  this.args = config.args || [];
	  this.onOperation = Boolean(config.onOperation);
	  this.onFragment = Boolean(config.onFragment);
	  this.onField = Boolean(config.onField);
	};

	exports.GraphQLDirective = GraphQLDirective;

	/**
	 * Used to conditionally include fields or fragments
	 */
	var GraphQLIncludeDirective = new GraphQLDirective({
	  name: 'include',
	  description: 'Directs the executor to include this field or fragment only when ' + 'the `if` argument is true.',
	  args: [{ name: 'if',
	    type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
	    description: 'Included when true.' }],
	  onOperation: false,
	  onFragment: true,
	  onField: true
	});

	exports.GraphQLIncludeDirective = GraphQLIncludeDirective;
	/**
	 * Used to conditionally skip (exclude) fields or fragments
	 */
	var GraphQLSkipDirective = new GraphQLDirective({
	  name: 'skip',
	  description: 'Directs the executor to skip this field or fragment when the `if` ' + 'argument is true.',
	  args: [{ name: 'if',
	    type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
	    description: 'Skipped when true.' }],
	  onOperation: false,
	  onFragment: true,
	  onField: true
	});
	exports.GraphQLSkipDirective = GraphQLSkipDirective;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _definition = __webpack_require__(110);

	var _language = __webpack_require__(79);

	// As per the GraphQL Spec, Integers are only treated as valid when a valid
	// 32-bit signed integer, providing the broadest support across platforms.
	//
	// n.b. JavaScript's integers are safe between -(2^53 - 1) and 2^53 - 1 because
	// they are internally represented as IEEE 754 doubles.
	var MAX_INT = 2147483647;
	var MIN_INT = -2147483648;

	function coerceInt(value) {
	  var num = Number(value);
	  if (num === num && num <= MAX_INT && num >= MIN_INT) {
	    return (num < 0 ? Math.ceil : Math.floor)(num);
	  }
	  return null;
	}

	var GraphQLInt = new _definition.GraphQLScalarType({
	  name: 'Int',
	  description: 'The `Int` scalar type represents non-fractional signed whole numeric ' + 'values. Int can represent values between -(2^31) and 2^31 - 1. ',
	  serialize: coerceInt,
	  parseValue: coerceInt,
	  parseLiteral: function parseLiteral(ast) {
	    if (ast.kind === _language.Kind.INT) {
	      var num = parseInt(ast.value, 10);
	      if (num <= MAX_INT && num >= MIN_INT) {
	        return num;
	      }
	    }
	    return null;
	  }
	});

	exports.GraphQLInt = GraphQLInt;
	function coerceFloat(value) {
	  var num = Number(value);
	  return num === num ? num : null;
	}

	var GraphQLFloat = new _definition.GraphQLScalarType({
	  name: 'Float',
	  description: 'The `Float` scalar type represents signed double-precision fractional ' + 'values as specified by ' + '[IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). ',
	  serialize: coerceFloat,
	  parseValue: coerceFloat,
	  parseLiteral: function parseLiteral(ast) {
	    return ast.kind === _language.Kind.FLOAT || ast.kind === _language.Kind.INT ? parseFloat(ast.value) : null;
	  }
	});

	exports.GraphQLFloat = GraphQLFloat;
	var GraphQLString = new _definition.GraphQLScalarType({
	  name: 'String',
	  description: 'The `String` scalar type represents textual data, represented as UTF-8 ' + 'character sequences. The String type is most often used by GraphQL to ' + 'represent free-form human-readable text.',
	  serialize: String,
	  parseValue: String,
	  parseLiteral: function parseLiteral(ast) {
	    return ast.kind === _language.Kind.STRING ? ast.value : null;
	  }
	});

	exports.GraphQLString = GraphQLString;
	var GraphQLBoolean = new _definition.GraphQLScalarType({
	  name: 'Boolean',
	  description: 'The `Boolean` scalar type represents `true` or `false`.',
	  serialize: Boolean,
	  parseValue: Boolean,
	  parseLiteral: function parseLiteral(ast) {
	    return ast.kind === _language.Kind.BOOLEAN ? ast.value : null;
	  }
	});

	exports.GraphQLBoolean = GraphQLBoolean;
	var GraphQLID = new _definition.GraphQLScalarType({
	  name: 'ID',
	  description: 'The `ID` scalar type represents a unique identifier, often used to ' + 'refetch an object or as key for a cache. The ID type appears in a JSON ' + 'response as a String; however, it is not intended to be human-readable. ' + 'When expected as an input type, any string (such as `"4"`) or integer ' + '(such as `4`) input value will be accepted as an ID.',
	  serialize: String,
	  parseValue: String,
	  parseLiteral: function parseLiteral(ast) {
	    return ast.kind === _language.Kind.STRING || ast.kind === _language.Kind.INT ? ast.value : null;
	  }
	});
	exports.GraphQLID = GraphQLID;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$keys = __webpack_require__(1)['default'];

	var _interopRequireDefault = __webpack_require__(96)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _jsutilsIsNullish = __webpack_require__(116);

	var _jsutilsIsNullish2 = _interopRequireDefault(_jsutilsIsNullish);

	var _utilitiesAstFromValue = __webpack_require__(121);

	var _languagePrinter = __webpack_require__(84);

	var _definition = __webpack_require__(110);

	var _scalars = __webpack_require__(119);

	var __Schema = new _definition.GraphQLObjectType({
	  name: '__Schema',
	  description: 'A GraphQL Schema defines the capabilities of a GraphQL server. It ' + 'exposes all available types and directives on the server, as well as ' + 'the entry points for query, mutation, and subscription operations.',
	  fields: function fields() {
	    return {
	      types: {
	        description: 'A list of all types supported by this server.',
	        type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__Type))),
	        resolve: function resolve(schema) {
	          var typeMap = schema.getTypeMap();
	          return _Object$keys(typeMap).map(function (key) {
	            return typeMap[key];
	          });
	        }
	      },
	      queryType: {
	        description: 'The type that query operations will be rooted at.',
	        type: new _definition.GraphQLNonNull(__Type),
	        resolve: function resolve(schema) {
	          return schema.getQueryType();
	        }
	      },
	      mutationType: {
	        description: 'If this server supports mutation, the type that ' + 'mutation operations will be rooted at.',
	        type: __Type,
	        resolve: function resolve(schema) {
	          return schema.getMutationType();
	        }
	      },
	      subscriptionType: {
	        description: 'If this server support subscription, the type that ' + 'subscription operations will be rooted at.',
	        type: __Type,
	        resolve: function resolve(schema) {
	          return schema.getSubscriptionType();
	        }
	      },
	      directives: {
	        description: 'A list of all directives supported by this server.',
	        type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__Directive))),
	        resolve: function resolve(schema) {
	          return schema.getDirectives();
	        }
	      }
	    };
	  }
	});

	exports.__Schema = __Schema;
	var __Directive = new _definition.GraphQLObjectType({
	  name: '__Directive',
	  description: 'A Directive provides a way to describe alternate runtime execution and ' + 'type validation behavior in a GraphQL document.' + '\n\nIn some cases, you need to provide options to alter GraphQL’s ' + 'execution behavior in ways field arguments will not suffice, such as ' + 'conditionally including or skipping a field. Directives provide this by ' + 'describing additional information to the executor.',
	  fields: function fields() {
	    return {
	      name: { type: new _definition.GraphQLNonNull(_scalars.GraphQLString) },
	      description: { type: _scalars.GraphQLString },
	      args: {
	        type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__InputValue))),
	        resolve: function resolve(directive) {
	          return directive.args || [];
	        }
	      },
	      onOperation: { type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean) },
	      onFragment: { type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean) },
	      onField: { type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean) }
	    };
	  }
	});

	var __Type = new _definition.GraphQLObjectType({
	  name: '__Type',
	  description: 'The fundamental unit of any GraphQL Schema is the type. There are ' + 'many kinds of types in GraphQL as represented by the `__TypeKind` enum.' + '\n\nDepending on the kind of a type, certain fields describe ' + 'information about that type. Scalar types provide no information ' + 'beyond a name and description, while Enum types provide their values. ' + 'Object and Interface types provide the fields they describe. Abstract ' + 'types, Union and Interface, provide the Object types possible ' + 'at runtime. List and NonNull types compose other types.',
	  fields: function fields() {
	    return {
	      kind: {
	        type: new _definition.GraphQLNonNull(__TypeKind),
	        resolve: function resolve(type) {
	          if (type instanceof _definition.GraphQLScalarType) {
	            return TypeKind.SCALAR;
	          } else if (type instanceof _definition.GraphQLObjectType) {
	            return TypeKind.OBJECT;
	          } else if (type instanceof _definition.GraphQLInterfaceType) {
	            return TypeKind.INTERFACE;
	          } else if (type instanceof _definition.GraphQLUnionType) {
	            return TypeKind.UNION;
	          } else if (type instanceof _definition.GraphQLEnumType) {
	            return TypeKind.ENUM;
	          } else if (type instanceof _definition.GraphQLInputObjectType) {
	            return TypeKind.INPUT_OBJECT;
	          } else if (type instanceof _definition.GraphQLList) {
	            return TypeKind.LIST;
	          } else if (type instanceof _definition.GraphQLNonNull) {
	            return TypeKind.NON_NULL;
	          }
	          throw new Error('Unknown kind of type: ' + type);
	        }
	      },
	      name: { type: _scalars.GraphQLString },
	      description: { type: _scalars.GraphQLString },
	      fields: {
	        type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__Field)),
	        args: {
	          includeDeprecated: { type: _scalars.GraphQLBoolean, defaultValue: false }
	        },
	        resolve: function resolve(type, _ref) {
	          var includeDeprecated = _ref.includeDeprecated;

	          if (type instanceof _definition.GraphQLObjectType || type instanceof _definition.GraphQLInterfaceType) {
	            var _ret = (function () {
	              var fieldMap = type.getFields();
	              var fields = _Object$keys(fieldMap).map(function (fieldName) {
	                return fieldMap[fieldName];
	              });
	              if (!includeDeprecated) {
	                fields = fields.filter(function (field) {
	                  return !field.deprecationReason;
	                });
	              }
	              return {
	                v: fields
	              };
	            })();

	            if (typeof _ret === 'object') return _ret.v;
	          }
	          return null;
	        }
	      },
	      interfaces: {
	        type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__Type)),
	        resolve: function resolve(type) {
	          if (type instanceof _definition.GraphQLObjectType) {
	            return type.getInterfaces();
	          }
	        }
	      },
	      possibleTypes: {
	        type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__Type)),
	        resolve: function resolve(type) {
	          if (type instanceof _definition.GraphQLInterfaceType || type instanceof _definition.GraphQLUnionType) {
	            return type.getPossibleTypes();
	          }
	        }
	      },
	      enumValues: {
	        type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__EnumValue)),
	        args: {
	          includeDeprecated: { type: _scalars.GraphQLBoolean, defaultValue: false }
	        },
	        resolve: function resolve(type, _ref2) {
	          var includeDeprecated = _ref2.includeDeprecated;

	          if (type instanceof _definition.GraphQLEnumType) {
	            var values = type.getValues();
	            if (!includeDeprecated) {
	              values = values.filter(function (value) {
	                return !value.deprecationReason;
	              });
	            }
	            return values;
	          }
	        }
	      },
	      inputFields: {
	        type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__InputValue)),
	        resolve: function resolve(type) {
	          if (type instanceof _definition.GraphQLInputObjectType) {
	            var _ret2 = (function () {
	              var fieldMap = type.getFields();
	              return {
	                v: _Object$keys(fieldMap).map(function (fieldName) {
	                  return fieldMap[fieldName];
	                })
	              };
	            })();

	            if (typeof _ret2 === 'object') return _ret2.v;
	          }
	        }
	      },
	      ofType: { type: __Type }
	    };
	  }
	});

	var __Field = new _definition.GraphQLObjectType({
	  name: '__Field',
	  description: 'Object and Interface types are described by a list of Fields, each of ' + 'which has a name, potentially a list of arguments, and a return type.',
	  fields: function fields() {
	    return {
	      name: { type: new _definition.GraphQLNonNull(_scalars.GraphQLString) },
	      description: { type: _scalars.GraphQLString },
	      args: {
	        type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__InputValue))),
	        resolve: function resolve(field) {
	          return field.args || [];
	        }
	      },
	      type: { type: new _definition.GraphQLNonNull(__Type) },
	      isDeprecated: {
	        type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
	        resolve: function resolve(field) {
	          return !(0, _jsutilsIsNullish2['default'])(field.deprecationReason);
	        }
	      },
	      deprecationReason: {
	        type: _scalars.GraphQLString
	      }
	    };
	  }
	});

	var __InputValue = new _definition.GraphQLObjectType({
	  name: '__InputValue',
	  description: 'Arguments provided to Fields or Directives and the input fields of an ' + 'InputObject are represented as Input Values which describe their type ' + 'and optionally a default value.',
	  fields: function fields() {
	    return {
	      name: { type: new _definition.GraphQLNonNull(_scalars.GraphQLString) },
	      description: { type: _scalars.GraphQLString },
	      type: { type: new _definition.GraphQLNonNull(__Type) },
	      defaultValue: {
	        type: _scalars.GraphQLString,
	        description: 'A GraphQL-formatted string representing the default value for this ' + 'input value.',
	        resolve: function resolve(inputVal) {
	          return (0, _jsutilsIsNullish2['default'])(inputVal.defaultValue) ? null : (0, _languagePrinter.print)((0, _utilitiesAstFromValue.astFromValue)(inputVal.defaultValue, inputVal));
	        }
	      }
	    };
	  }
	});

	var __EnumValue = new _definition.GraphQLObjectType({
	  name: '__EnumValue',
	  description: 'One possible value for a given Enum. Enum values are unique values, not ' + 'a placeholder for a string or numeric value. However an Enum value is ' + 'returned in a JSON response as a string.',
	  fields: function fields() {
	    return {
	      name: { type: new _definition.GraphQLNonNull(_scalars.GraphQLString) },
	      description: { type: _scalars.GraphQLString },
	      isDeprecated: {
	        type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
	        resolve: function resolve(enumValue) {
	          return !(0, _jsutilsIsNullish2['default'])(enumValue.deprecationReason);
	        }
	      },
	      deprecationReason: {
	        type: _scalars.GraphQLString
	      }
	    };
	  }
	});

	var TypeKind = {
	  SCALAR: 'SCALAR',
	  OBJECT: 'OBJECT',
	  INTERFACE: 'INTERFACE',
	  UNION: 'UNION',
	  ENUM: 'ENUM',
	  INPUT_OBJECT: 'INPUT_OBJECT',
	  LIST: 'LIST',
	  NON_NULL: 'NON_NULL'
	};

	exports.TypeKind = TypeKind;
	var __TypeKind = new _definition.GraphQLEnumType({
	  name: '__TypeKind',
	  description: 'An enum describing what kind of type a given `__Type` is.',
	  values: {
	    SCALAR: {
	      value: TypeKind.SCALAR,
	      description: 'Indicates this type is a scalar.'
	    },
	    OBJECT: {
	      value: TypeKind.OBJECT,
	      description: 'Indicates this type is an object. ' + '`fields` and `interfaces` are valid fields.'
	    },
	    INTERFACE: {
	      value: TypeKind.INTERFACE,
	      description: 'Indicates this type is an interface. ' + '`fields` and `possibleTypes` are valid fields.'
	    },
	    UNION: {
	      value: TypeKind.UNION,
	      description: 'Indicates this type is a union. ' + '`possibleTypes` is a valid field.'
	    },
	    ENUM: {
	      value: TypeKind.ENUM,
	      description: 'Indicates this type is an enum. ' + '`enumValues` is a valid field.'
	    },
	    INPUT_OBJECT: {
	      value: TypeKind.INPUT_OBJECT,
	      description: 'Indicates this type is an input object. ' + '`inputFields` is a valid field.'
	    },
	    LIST: {
	      value: TypeKind.LIST,
	      description: 'Indicates this type is a list. ' + '`ofType` is a valid field.'
	    },
	    NON_NULL: {
	      value: TypeKind.NON_NULL,
	      description: 'Indicates this type is a non-null. ' + '`ofType` is a valid field.'
	    }
	  }
	});

	/**
	 * Note that these are GraphQLFieldDefinition and not GraphQLFieldConfig,
	 * so the format for args is different.
	 */

	var SchemaMetaFieldDef = {
	  name: '__schema',
	  type: new _definition.GraphQLNonNull(__Schema),
	  description: 'Access the current type schema of this server.',
	  args: [],
	  resolve: function resolve(source, args, _ref3) {
	    var schema = _ref3.schema;
	    return schema;
	  }
	};

	exports.SchemaMetaFieldDef = SchemaMetaFieldDef;
	var TypeMetaFieldDef = {
	  name: '__type',
	  type: __Type,
	  description: 'Request the type information of a single type.',
	  args: [{ name: 'name', type: new _definition.GraphQLNonNull(_scalars.GraphQLString) }],
	  resolve: function resolve(source, _ref4, _ref5) {
	    var name = _ref4.name;
	    var schema = _ref5.schema;
	    return (function () {
	      return schema.getType(name);
	    })();
	  }
	};

	exports.TypeMetaFieldDef = TypeMetaFieldDef;
	var TypeNameMetaFieldDef = {
	  name: '__typename',
	  type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
	  description: 'The name of the current Object type at runtime.',
	  args: [],
	  resolve: function resolve(source, args, _ref6) {
	    var parentType = _ref6.parentType;
	    return parentType.name;
	  }
	};
	exports.TypeNameMetaFieldDef = TypeNameMetaFieldDef;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$keys = __webpack_require__(1)['default'];

	var _interopRequireDefault = __webpack_require__(96)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.astFromValue = astFromValue;

	var _jsutilsInvariant = __webpack_require__(97);

	var _jsutilsInvariant2 = _interopRequireDefault(_jsutilsInvariant);

	var _jsutilsIsNullish = __webpack_require__(116);

	var _jsutilsIsNullish2 = _interopRequireDefault(_jsutilsIsNullish);

	var _languageKinds = __webpack_require__(81);

	var _typeDefinition = __webpack_require__(110);

	var _typeScalars = __webpack_require__(119);

	/**
	 * Produces a GraphQL Value AST given a JavaScript value.
	 *
	 * Optionally, a GraphQL type may be provided, which will be used to
	 * disambiguate between value primitives.
	 *
	 * | JSON Value    | GraphQL Value        |
	 * | ------------- | -------------------- |
	 * | Object        | Input Object         |
	 * | Array         | List                 |
	 * | Boolean       | Boolean              |
	 * | String        | String / Enum Value  |
	 * | Number        | Int / Float          |
	 *
	 */

	function astFromValue(_x, _x2) {
	  var _again = true;

	  _function: while (_again) {
	    var value = _x,
	        type = _x2;
	    _value = _ret = stringNum = isIntValue = fields = undefined;
	    _again = false;

	    // Ensure flow knows that we treat function params as const.
	    var _value = value;

	    if (type instanceof _typeDefinition.GraphQLNonNull) {
	      // Note: we're not checking that the result is non-null.
	      // This function is not responsible for validating the input value.
	      _x = _value;
	      _x2 = type.ofType;
	      _again = true;
	      continue _function;
	    }

	    if ((0, _jsutilsIsNullish2['default'])(_value)) {
	      return null;
	    }

	    // Convert JavaScript array to GraphQL list. If the GraphQLType is a list, but
	    // the value is not an array, convert the value using the list's item type.
	    if (Array.isArray(_value)) {
	      var _ret = (function () {
	        var itemType = type instanceof _typeDefinition.GraphQLList ? type.ofType : null;
	        return {
	          v: {
	            kind: _languageKinds.LIST,
	            values: _value.map(function (item) {
	              var itemValue = astFromValue(item, itemType);
	              (0, _jsutilsInvariant2['default'])(itemValue, 'Could not create AST item.');
	              return itemValue;
	            })
	          }
	        };
	      })();

	      if (typeof _ret === 'object') return _ret.v;
	    } else if (type instanceof _typeDefinition.GraphQLList) {
	      // Because GraphQL will accept single values as a "list of one" when
	      // expecting a list, if there's a non-array value and an expected list type,
	      // create an AST using the list's item type.
	      _x = _value;
	      _x2 = type.ofType;
	      _again = true;
	      continue _function;
	    }

	    if (typeof _value === 'boolean') {
	      return { kind: _languageKinds.BOOLEAN, value: _value };
	    }

	    // JavaScript numbers can be Float or Int values. Use the GraphQLType to
	    // differentiate if available, otherwise prefer Int if the value is a
	    // valid Int.
	    if (typeof _value === 'number') {
	      var stringNum = String(_value);
	      var isIntValue = /^[0-9]+$/.test(stringNum);
	      if (isIntValue) {
	        if (type === _typeScalars.GraphQLFloat) {
	          return { kind: _languageKinds.FLOAT, value: stringNum + '.0' };
	        }
	        return { kind: _languageKinds.INT, value: stringNum };
	      }
	      return { kind: _languageKinds.FLOAT, value: stringNum };
	    }

	    // JavaScript strings can be Enum values or String values. Use the
	    // GraphQLType to differentiate if possible.
	    if (typeof _value === 'string') {
	      if (type instanceof _typeDefinition.GraphQLEnumType && /^[_a-zA-Z][_a-zA-Z0-9]*$/.test(_value)) {
	        return { kind: _languageKinds.ENUM, value: _value };
	      }
	      // Use JSON stringify, which uses the same string encoding as GraphQL,
	      // then remove the quotes.
	      return { kind: _languageKinds.STRING, value: JSON.stringify(_value).slice(1, -1) };
	    }

	    // last remaining possible typeof
	    (0, _jsutilsInvariant2['default'])(typeof _value === 'object' && _value !== null);

	    // Populate the fields of the input object by creating ASTs from each value
	    // in the JavaScript object.
	    var fields = [];
	    _Object$keys(_value).forEach(function (fieldName) {
	      var fieldType = undefined;
	      if (type instanceof _typeDefinition.GraphQLInputObjectType) {
	        var fieldDef = type.getFields()[fieldName];
	        fieldType = fieldDef && fieldDef.type;
	      }
	      var fieldValue = astFromValue(_value[fieldName], fieldType);
	      if (fieldValue) {
	        fields.push({
	          kind: _languageKinds.OBJECT_FIELD,
	          name: { kind: _languageKinds.NAME, value: fieldName },
	          value: fieldValue
	        });
	      }
	    });
	    return { kind: _languageKinds.OBJECT, fields: fields };
	  }
	}

/***/ },
/* 122 */
/***/ function(module, exports) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = find;

	function find(list, predicate) {
	  for (var i = 0; i < list.length; i++) {
	    if (predicate(list[i])) {
	      return list[i];
	    }
	  }
	}

	module.exports = exports["default"];

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	/**
	 * Provided two types, return true if the types are equal (invariant).
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.isEqualType = isEqualType;
	exports.isTypeSubTypeOf = isTypeSubTypeOf;
	exports.doTypesOverlap = doTypesOverlap;

	var _typeDefinition = __webpack_require__(110);

	function isEqualType(_x, _x2) {
	  var _again = true;

	  _function: while (_again) {
	    var typeA = _x,
	        typeB = _x2;
	    _again = false;

	    // Equivalent types are equal.
	    if (typeA === typeB) {
	      return true;
	    }

	    // If either type is non-null, the other must also be non-null.
	    if (typeA instanceof _typeDefinition.GraphQLNonNull && typeB instanceof _typeDefinition.GraphQLNonNull) {
	      _x = typeA.ofType;
	      _x2 = typeB.ofType;
	      _again = true;
	      continue _function;
	    }

	    // If either type is a list, the other must also be a list.
	    if (typeA instanceof _typeDefinition.GraphQLList && typeB instanceof _typeDefinition.GraphQLList) {
	      _x = typeA.ofType;
	      _x2 = typeB.ofType;
	      _again = true;
	      continue _function;
	    }

	    // Otherwise the types are not equal.
	    return false;
	  }
	}

	/**
	 * Provided a type and a super type, return true if the first type is either
	 * equal or a subset of the second super type (covariant).
	 */

	function isTypeSubTypeOf(_x3, _x4) {
	  var _again2 = true;

	  _function2: while (_again2) {
	    var maybeSubType = _x3,
	        superType = _x4;
	    _again2 = false;

	    // Equivalent type is a valid subtype
	    if (maybeSubType === superType) {
	      return true;
	    }

	    // If superType is non-null, maybeSubType must also be nullable.
	    if (superType instanceof _typeDefinition.GraphQLNonNull) {
	      if (maybeSubType instanceof _typeDefinition.GraphQLNonNull) {
	        _x3 = maybeSubType.ofType;
	        _x4 = superType.ofType;
	        _again2 = true;
	        continue _function2;
	      }
	      return false;
	    } else if (maybeSubType instanceof _typeDefinition.GraphQLNonNull) {
	      // If superType is nullable, maybeSubType may be non-null.
	      _x3 = maybeSubType.ofType;
	      _x4 = superType;
	      _again2 = true;
	      continue _function2;
	    }

	    // If superType type is a list, maybeSubType type must also be a list.
	    if (superType instanceof _typeDefinition.GraphQLList) {
	      if (maybeSubType instanceof _typeDefinition.GraphQLList) {
	        _x3 = maybeSubType.ofType;
	        _x4 = superType.ofType;
	        _again2 = true;
	        continue _function2;
	      }
	      return false;
	    } else if (maybeSubType instanceof _typeDefinition.GraphQLList) {
	      // If superType is not a list, maybeSubType must also be not a list.
	      return false;
	    }

	    // If superType type is an abstract type, maybeSubType type may be a currently
	    // possible object type.
	    if ((0, _typeDefinition.isAbstractType)(superType) && maybeSubType instanceof _typeDefinition.GraphQLObjectType && superType.isPossibleType(maybeSubType)) {
	      return true;
	    }

	    // Otherwise, the child type is not a valid subtype of the parent type.
	    return false;
	  }
	}

	/**
	 * Provided two composite types, determine if they "overlap". Two composite
	 * types overlap when the Sets of possible concrete types for each intersect.
	 *
	 * This is often used to determine if a fragment of a given type could possibly
	 * be visited in a context of another type.
	 *
	 * This function is commutative.
	 */

	function doTypesOverlap(typeA, typeB) {
	  // So flow is aware this is constant
	  var _typeB = typeB;

	  // Equivalent types overlap
	  if (typeA === _typeB) {
	    return true;
	  }

	  if (typeA instanceof _typeDefinition.GraphQLInterfaceType || typeA instanceof _typeDefinition.GraphQLUnionType) {
	    if (_typeB instanceof _typeDefinition.GraphQLInterfaceType || _typeB instanceof _typeDefinition.GraphQLUnionType) {
	      // If both types are abstract, then determine if there is any intersection
	      // between possible concrete types of each.
	      return typeA.getPossibleTypes().some(function (type) {
	        return _typeB.isPossibleType(type);
	      });
	    }
	    // Determine if the latter type is a possible concrete type of the former.
	    return typeA.isPossibleType(_typeB);
	  }

	  if (_typeB instanceof _typeDefinition.GraphQLInterfaceType || _typeB instanceof _typeDefinition.GraphQLUnionType) {
	    // Determine if the former type is a possible concrete type of the latter.
	    return _typeB.isPossibleType(typeA);
	  }

	  // Otherwise the types do not overlap.
	  return false;
	}

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _createClass = __webpack_require__(99)['default'];

	var _classCallCheck = __webpack_require__(65)['default'];

	var _interopRequireWildcard = __webpack_require__(80)['default'];

	var _interopRequireDefault = __webpack_require__(96)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _languageKinds = __webpack_require__(81);

	var Kind = _interopRequireWildcard(_languageKinds);

	var _typeDefinition = __webpack_require__(110);

	var _typeIntrospection = __webpack_require__(120);

	var _typeFromAST = __webpack_require__(125);

	var _jsutilsFind = __webpack_require__(122);

	var _jsutilsFind2 = _interopRequireDefault(_jsutilsFind);

	/**
	 * TypeInfo is a utility class which, given a GraphQL schema, can keep track
	 * of the current field and type definitions at any point in a GraphQL document
	 * AST during a recursive descent by calling `enter(node)` and `leave(node)`.
	 */

	var TypeInfo = (function () {
	  function TypeInfo(schema,
	  // NOTE: this experimental optional second parameter is only needed in order
	  // to support non-spec-compliant codebases. You should never need to use it.
	  getFieldDefFn) {
	    _classCallCheck(this, TypeInfo);

	    this._schema = schema;
	    this._typeStack = [];
	    this._parentTypeStack = [];
	    this._inputTypeStack = [];
	    this._fieldDefStack = [];
	    this._directive = null;
	    this._argument = null;
	    this._getFieldDef = getFieldDefFn || getFieldDef;
	  }

	  /**
	   * Not exactly the same as the executor's definition of getFieldDef, in this
	   * statically evaluated environment we do not always have an Object type,
	   * and need to handle Interface and Union types.
	   */

	  _createClass(TypeInfo, [{
	    key: 'getType',
	    value: function getType() {
	      if (this._typeStack.length > 0) {
	        return this._typeStack[this._typeStack.length - 1];
	      }
	    }
	  }, {
	    key: 'getParentType',
	    value: function getParentType() {
	      if (this._parentTypeStack.length > 0) {
	        return this._parentTypeStack[this._parentTypeStack.length - 1];
	      }
	    }
	  }, {
	    key: 'getInputType',
	    value: function getInputType() {
	      if (this._inputTypeStack.length > 0) {
	        return this._inputTypeStack[this._inputTypeStack.length - 1];
	      }
	    }
	  }, {
	    key: 'getFieldDef',
	    value: function getFieldDef() {
	      if (this._fieldDefStack.length > 0) {
	        return this._fieldDefStack[this._fieldDefStack.length - 1];
	      }
	    }
	  }, {
	    key: 'getDirective',
	    value: function getDirective() {
	      return this._directive;
	    }
	  }, {
	    key: 'getArgument',
	    value: function getArgument() {
	      return this._argument;
	    }

	    // Flow does not yet handle this case.
	  }, {
	    key: 'enter',
	    value: function enter(node /* Node */) {
	      var schema = this._schema;
	      switch (node.kind) {
	        case Kind.SELECTION_SET:
	          var namedType = (0, _typeDefinition.getNamedType)(this.getType());
	          var compositeType = undefined;
	          if ((0, _typeDefinition.isCompositeType)(namedType)) {
	            // isCompositeType is a type refining predicate, so this is safe.
	            compositeType = namedType;
	          }
	          this._parentTypeStack.push(compositeType);
	          break;
	        case Kind.FIELD:
	          var parentType = this.getParentType();
	          var fieldDef = undefined;
	          if (parentType) {
	            fieldDef = this._getFieldDef(schema, parentType, node);
	          }
	          this._fieldDefStack.push(fieldDef);
	          this._typeStack.push(fieldDef && fieldDef.type);
	          break;
	        case Kind.DIRECTIVE:
	          this._directive = schema.getDirective(node.name.value);
	          break;
	        case Kind.OPERATION_DEFINITION:
	          var type = undefined;
	          if (node.operation === 'query') {
	            type = schema.getQueryType();
	          } else if (node.operation === 'mutation') {
	            type = schema.getMutationType();
	          } else if (node.operation === 'subscription') {
	            type = schema.getSubscriptionType();
	          }
	          this._typeStack.push(type);
	          break;
	        case Kind.INLINE_FRAGMENT:
	        case Kind.FRAGMENT_DEFINITION:
	          var typeConditionAST = node.typeCondition;
	          var outputType = typeConditionAST ? (0, _typeFromAST.typeFromAST)(schema, typeConditionAST) : this.getType();
	          this._typeStack.push(outputType);
	          break;
	        case Kind.VARIABLE_DEFINITION:
	          var inputType = (0, _typeFromAST.typeFromAST)(schema, node.type);
	          this._inputTypeStack.push(inputType);
	          break;
	        case Kind.ARGUMENT:
	          var argDef = undefined;
	          var argType = undefined;
	          var fieldOrDirective = this.getDirective() || this.getFieldDef();
	          if (fieldOrDirective) {
	            argDef = (0, _jsutilsFind2['default'])(fieldOrDirective.args, function (arg) {
	              return arg.name === node.name.value;
	            });
	            if (argDef) {
	              argType = argDef.type;
	            }
	          }
	          this._argument = argDef;
	          this._inputTypeStack.push(argType);
	          break;
	        case Kind.LIST:
	          var listType = (0, _typeDefinition.getNullableType)(this.getInputType());
	          this._inputTypeStack.push(listType instanceof _typeDefinition.GraphQLList ? listType.ofType : undefined);
	          break;
	        case Kind.OBJECT_FIELD:
	          var objectType = (0, _typeDefinition.getNamedType)(this.getInputType());
	          var fieldType = undefined;
	          if (objectType instanceof _typeDefinition.GraphQLInputObjectType) {
	            var inputField = objectType.getFields()[node.name.value];
	            fieldType = inputField ? inputField.type : undefined;
	          }
	          this._inputTypeStack.push(fieldType);
	          break;
	      }
	    }
	  }, {
	    key: 'leave',
	    value: function leave(node) {
	      switch (node.kind) {
	        case Kind.SELECTION_SET:
	          this._parentTypeStack.pop();
	          break;
	        case Kind.FIELD:
	          this._fieldDefStack.pop();
	          this._typeStack.pop();
	          break;
	        case Kind.DIRECTIVE:
	          this._directive = null;
	          break;
	        case Kind.OPERATION_DEFINITION:
	        case Kind.INLINE_FRAGMENT:
	        case Kind.FRAGMENT_DEFINITION:
	          this._typeStack.pop();
	          break;
	        case Kind.VARIABLE_DEFINITION:
	          this._inputTypeStack.pop();
	          break;
	        case Kind.ARGUMENT:
	          this._argument = null;
	          this._inputTypeStack.pop();
	          break;
	        case Kind.LIST:
	        case Kind.OBJECT_FIELD:
	          this._inputTypeStack.pop();
	          break;
	      }
	    }
	  }]);

	  return TypeInfo;
	})();

	exports.TypeInfo = TypeInfo;
	function getFieldDef(schema, parentType, fieldAST) {
	  var name = fieldAST.name.value;
	  if (name === _typeIntrospection.SchemaMetaFieldDef.name && schema.getQueryType() === parentType) {
	    return _typeIntrospection.SchemaMetaFieldDef;
	  }
	  if (name === _typeIntrospection.TypeMetaFieldDef.name && schema.getQueryType() === parentType) {
	    return _typeIntrospection.TypeMetaFieldDef;
	  }
	  if (name === _typeIntrospection.TypeNameMetaFieldDef.name && (parentType instanceof _typeDefinition.GraphQLObjectType || parentType instanceof _typeDefinition.GraphQLInterfaceType || parentType instanceof _typeDefinition.GraphQLUnionType)) {
	    return _typeIntrospection.TypeNameMetaFieldDef;
	  }
	  if (parentType instanceof _typeDefinition.GraphQLObjectType || parentType instanceof _typeDefinition.GraphQLInterfaceType) {
	    return parentType.getFields()[name];
	  }
	}
	// It may disappear in the future.

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _interopRequireDefault = __webpack_require__(96)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.typeFromAST = typeFromAST;

	var _jsutilsInvariant = __webpack_require__(97);

	var _jsutilsInvariant2 = _interopRequireDefault(_jsutilsInvariant);

	var _languageKinds = __webpack_require__(81);

	var _typeDefinition = __webpack_require__(110);

	function typeFromAST(schema, inputTypeAST) {
	  var innerType = undefined;
	  if (inputTypeAST.kind === _languageKinds.LIST_TYPE) {
	    innerType = typeFromAST(schema, inputTypeAST.type);
	    return innerType && new _typeDefinition.GraphQLList(innerType);
	  }
	  if (inputTypeAST.kind === _languageKinds.NON_NULL_TYPE) {
	    innerType = typeFromAST(schema, inputTypeAST.type);
	    return innerType && new _typeDefinition.GraphQLNonNull(innerType);
	  }
	  (0, _jsutilsInvariant2['default'])(inputTypeAST.kind === _languageKinds.NAMED_TYPE, 'Must be a named type.');
	  return schema.getType(inputTypeAST.name.value);
	}

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	// Spec Section: "Operation Name Uniqueness"

	/**
	 * This set includes all validation rules defined by the GraphQL spec.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _rulesUniqueOperationNames = __webpack_require__(127);

	// Spec Section: "Lone Anonymous Operation"

	var _rulesLoneAnonymousOperation = __webpack_require__(128);

	// Spec Section: "Fragment Spread Type Existence"

	var _rulesKnownTypeNames = __webpack_require__(129);

	// Spec Section: "Fragments on Composite Types"

	var _rulesFragmentsOnCompositeTypes = __webpack_require__(130);

	// Spec Section: "Variables are Input Types"

	var _rulesVariablesAreInputTypes = __webpack_require__(131);

	// Spec Section: "Leaf Field Selections"

	var _rulesScalarLeafs = __webpack_require__(132);

	// Spec Section: "Field Selections on Objects, Interfaces, and Unions Types"

	var _rulesFieldsOnCorrectType = __webpack_require__(133);

	// Spec Section: "Fragment Name Uniqueness"

	var _rulesUniqueFragmentNames = __webpack_require__(134);

	// Spec Section: "Fragment spread target defined"

	var _rulesKnownFragmentNames = __webpack_require__(135);

	// Spec Section: "Fragments must be used"

	var _rulesNoUnusedFragments = __webpack_require__(136);

	// Spec Section: "Fragment spread is possible"

	var _rulesPossibleFragmentSpreads = __webpack_require__(137);

	// Spec Section: "Fragments must not form cycles"

	var _rulesNoFragmentCycles = __webpack_require__(138);

	// Spec Section: "Variable Uniqueness"

	var _rulesUniqueVariableNames = __webpack_require__(139);

	// Spec Section: "All Variable Used Defined"

	var _rulesNoUndefinedVariables = __webpack_require__(140);

	// Spec Section: "All Variables Used"

	var _rulesNoUnusedVariables = __webpack_require__(141);

	// Spec Section: "Directives Are Defined"

	var _rulesKnownDirectives = __webpack_require__(142);

	// Spec Section: "Argument Names"

	var _rulesKnownArgumentNames = __webpack_require__(143);

	// Spec Section: "Argument Uniqueness"

	var _rulesUniqueArgumentNames = __webpack_require__(144);

	// Spec Section: "Argument Values Type Correctness"

	var _rulesArgumentsOfCorrectType = __webpack_require__(145);

	// Spec Section: "Argument Optionality"

	var _rulesProvidedNonNullArguments = __webpack_require__(151);

	// Spec Section: "Variable Default Values Are Correctly Typed"

	var _rulesDefaultValuesOfCorrectType = __webpack_require__(152);

	// Spec Section: "All Variable Usages Are Allowed"

	var _rulesVariablesInAllowedPosition = __webpack_require__(153);

	// Spec Section: "Field Selection Merging"

	var _rulesOverlappingFieldsCanBeMerged = __webpack_require__(154);

	// Spec Section: "Input Object Field Uniqueness"

	var _rulesUniqueInputFieldNames = __webpack_require__(159);

	var specifiedRules = [_rulesUniqueOperationNames.UniqueOperationNames, _rulesLoneAnonymousOperation.LoneAnonymousOperation, _rulesKnownTypeNames.KnownTypeNames, _rulesFragmentsOnCompositeTypes.FragmentsOnCompositeTypes, _rulesVariablesAreInputTypes.VariablesAreInputTypes, _rulesScalarLeafs.ScalarLeafs, _rulesFieldsOnCorrectType.FieldsOnCorrectType, _rulesUniqueFragmentNames.UniqueFragmentNames, _rulesKnownFragmentNames.KnownFragmentNames, _rulesNoUnusedFragments.NoUnusedFragments, _rulesPossibleFragmentSpreads.PossibleFragmentSpreads, _rulesNoFragmentCycles.NoFragmentCycles, _rulesUniqueVariableNames.UniqueVariableNames, _rulesNoUndefinedVariables.NoUndefinedVariables, _rulesNoUnusedVariables.NoUnusedVariables, _rulesKnownDirectives.KnownDirectives, _rulesKnownArgumentNames.KnownArgumentNames, _rulesUniqueArgumentNames.UniqueArgumentNames, _rulesArgumentsOfCorrectType.ArgumentsOfCorrectType, _rulesProvidedNonNullArguments.ProvidedNonNullArguments, _rulesDefaultValuesOfCorrectType.DefaultValuesOfCorrectType, _rulesVariablesInAllowedPosition.VariablesInAllowedPosition, _rulesOverlappingFieldsCanBeMerged.OverlappingFieldsCanBeMerged, _rulesUniqueInputFieldNames.UniqueInputFieldNames];
	exports.specifiedRules = specifiedRules;

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$create = __webpack_require__(74)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.duplicateOperationNameMessage = duplicateOperationNameMessage;
	exports.UniqueOperationNames = UniqueOperationNames;

	var _error = __webpack_require__(67);

	function duplicateOperationNameMessage(operationName) {
	  return 'There can only be one operation named "' + operationName + '".';
	}

	/**
	 * Unique operation names
	 *
	 * A GraphQL document is only valid if all defined operations have unique names.
	 */

	function UniqueOperationNames(context) {
	  var knownOperationNames = _Object$create(null);
	  return {
	    OperationDefinition: function OperationDefinition(node) {
	      var operationName = node.name;
	      if (operationName) {
	        if (knownOperationNames[operationName.value]) {
	          context.reportError(new _error.GraphQLError(duplicateOperationNameMessage(operationName.value), [knownOperationNames[operationName.value], operationName]));
	        } else {
	          knownOperationNames[operationName.value] = operationName;
	        }
	      }
	      return false;
	    },
	    FragmentDefinition: function FragmentDefinition() {
	      return false;
	    }
	  };
	}

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.anonOperationNotAloneMessage = anonOperationNotAloneMessage;
	exports.LoneAnonymousOperation = LoneAnonymousOperation;

	var _error = __webpack_require__(67);

	var _languageKinds = __webpack_require__(81);

	function anonOperationNotAloneMessage() {
	  return 'This anonymous operation must be the only defined operation.';
	}

	/**
	 * Lone anonymous operation
	 *
	 * A GraphQL document is only valid if when it contains an anonymous operation
	 * (the query short-hand) that it contains only that one operation definition.
	 */

	function LoneAnonymousOperation(context) {
	  var operationCount = 0;
	  return {
	    Document: function Document(node) {
	      operationCount = node.definitions.filter(function (definition) {
	        return definition.kind === _languageKinds.OPERATION_DEFINITION;
	      }).length;
	    },
	    OperationDefinition: function OperationDefinition(node) {
	      if (!node.name && operationCount > 1) {
	        context.reportError(new _error.GraphQLError(anonOperationNotAloneMessage(), [node]));
	      }
	    }
	  };
	}

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.unknownTypeMessage = unknownTypeMessage;
	exports.KnownTypeNames = KnownTypeNames;

	var _error = __webpack_require__(67);

	function unknownTypeMessage(type) {
	  return 'Unknown type "' + type + '".';
	}

	/**
	 * Known type names
	 *
	 * A GraphQL document is only valid if referenced types (specifically
	 * variable definitions and fragment conditions) are defined by the type schema.
	 */

	function KnownTypeNames(context) {
	  return {
	    // TODO: when validating IDL, re-enable these. Experimental version does not
	    // add unreferenced types, resulting in false-positive errors. Squelched
	    // errors for now.
	    ObjectTypeDefinition: function ObjectTypeDefinition() {
	      return false;
	    },
	    InterfaceTypeDefinition: function InterfaceTypeDefinition() {
	      return false;
	    },
	    UnionTypeDefinition: function UnionTypeDefinition() {
	      return false;
	    },
	    InputObjectTypeDefinition: function InputObjectTypeDefinition() {
	      return false;
	    },
	    NamedType: function NamedType(node) {
	      var typeName = node.name.value;
	      var type = context.getSchema().getType(typeName);
	      if (!type) {
	        context.reportError(new _error.GraphQLError(unknownTypeMessage(typeName), [node]));
	      }
	    }
	  };
	}

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.inlineFragmentOnNonCompositeErrorMessage = inlineFragmentOnNonCompositeErrorMessage;
	exports.fragmentOnNonCompositeErrorMessage = fragmentOnNonCompositeErrorMessage;
	exports.FragmentsOnCompositeTypes = FragmentsOnCompositeTypes;

	var _error = __webpack_require__(67);

	var _languagePrinter = __webpack_require__(84);

	var _typeDefinition = __webpack_require__(110);

	function inlineFragmentOnNonCompositeErrorMessage(type) {
	  return 'Fragment cannot condition on non composite type "' + type + '".';
	}

	function fragmentOnNonCompositeErrorMessage(fragName, type) {
	  return 'Fragment "' + fragName + '" cannot condition on non composite ' + ('type "' + type + '".');
	}

	/**
	 * Fragments on composite type
	 *
	 * Fragments use a type condition to determine if they apply, since fragments
	 * can only be spread into a composite type (object, interface, or union), the
	 * type condition must also be a composite type.
	 */

	function FragmentsOnCompositeTypes(context) {
	  return {
	    InlineFragment: function InlineFragment(node) {
	      var type = context.getType();
	      if (node.typeCondition && type && !(0, _typeDefinition.isCompositeType)(type)) {
	        context.reportError(new _error.GraphQLError(inlineFragmentOnNonCompositeErrorMessage((0, _languagePrinter.print)(node.typeCondition)), [node.typeCondition]));
	      }
	    },
	    FragmentDefinition: function FragmentDefinition(node) {
	      var type = context.getType();
	      if (type && !(0, _typeDefinition.isCompositeType)(type)) {
	        context.reportError(new _error.GraphQLError(fragmentOnNonCompositeErrorMessage(node.name.value, (0, _languagePrinter.print)(node.typeCondition)), [node.typeCondition]));
	      }
	    }
	  };
	}

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.nonInputTypeOnVarMessage = nonInputTypeOnVarMessage;
	exports.VariablesAreInputTypes = VariablesAreInputTypes;

	var _error = __webpack_require__(67);

	var _languagePrinter = __webpack_require__(84);

	var _typeDefinition = __webpack_require__(110);

	var _utilitiesTypeFromAST = __webpack_require__(125);

	function nonInputTypeOnVarMessage(variableName, typeName) {
	  return 'Variable "$' + variableName + '" cannot be non-input type "' + typeName + '".';
	}

	/**
	 * Variables are input types
	 *
	 * A GraphQL operation is only valid if all the variables it defines are of
	 * input types (scalar, enum, or input object).
	 */

	function VariablesAreInputTypes(context) {
	  return {
	    VariableDefinition: function VariableDefinition(node) {
	      var type = (0, _utilitiesTypeFromAST.typeFromAST)(context.getSchema(), node.type);

	      // If the variable type is not an input type, return an error.
	      if (type && !(0, _typeDefinition.isInputType)(type)) {
	        var variableName = node.variable.name.value;
	        context.reportError(new _error.GraphQLError(nonInputTypeOnVarMessage(variableName, (0, _languagePrinter.print)(node.type)), [node.type]));
	      }
	    }
	  };
	}

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.noSubselectionAllowedMessage = noSubselectionAllowedMessage;
	exports.requiredSubselectionMessage = requiredSubselectionMessage;
	exports.ScalarLeafs = ScalarLeafs;

	var _error = __webpack_require__(67);

	var _typeDefinition = __webpack_require__(110);

	function noSubselectionAllowedMessage(field, type) {
	  return 'Field "' + field + '" of type "' + type + '" must not have a sub selection.';
	}

	function requiredSubselectionMessage(field, type) {
	  return 'Field "' + field + '" of type "' + type + '" must have a sub selection.';
	}

	/**
	 * Scalar leafs
	 *
	 * A GraphQL document is valid only if all leaf fields (fields without
	 * sub selections) are of scalar or enum types.
	 */

	function ScalarLeafs(context) {
	  return {
	    Field: function Field(node) {
	      var type = context.getType();
	      if (type) {
	        if ((0, _typeDefinition.isLeafType)(type)) {
	          if (node.selectionSet) {
	            context.reportError(new _error.GraphQLError(noSubselectionAllowedMessage(node.name.value, type), [node.selectionSet]));
	          }
	        } else if (!node.selectionSet) {
	          context.reportError(new _error.GraphQLError(requiredSubselectionMessage(node.name.value, type), [node]));
	        }
	      }
	    }
	  };
	}

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$keys = __webpack_require__(1)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.undefinedFieldMessage = undefinedFieldMessage;
	exports.FieldsOnCorrectType = FieldsOnCorrectType;

	var _error = __webpack_require__(67);

	var _typeDefinition = __webpack_require__(110);

	function undefinedFieldMessage(fieldName, type, suggestedTypes) {
	  var message = 'Cannot query field "' + fieldName + '" on type "' + type + '".';
	  var MAX_LENGTH = 5;
	  if (suggestedTypes.length !== 0) {
	    var suggestions = suggestedTypes.slice(0, MAX_LENGTH).map(function (t) {
	      return '"' + t + '"';
	    }).join(', ');
	    if (suggestedTypes.length > MAX_LENGTH) {
	      suggestions += ', and ' + (suggestedTypes.length - MAX_LENGTH) + ' other types';
	    }
	    message += ' However, this field exists on ' + suggestions + '.';
	    message += ' Perhaps you meant to use an inline fragment?';
	  }
	  return message;
	}

	/**
	 * Fields on correct type
	 *
	 * A GraphQL document is only valid if all fields selected are defined by the
	 * parent type, or are an allowed meta field such as __typenamme
	 */

	function FieldsOnCorrectType(context) {
	  return {
	    Field: function Field(node) {
	      var type = context.getParentType();
	      if (type) {
	        var fieldDef = context.getFieldDef();
	        if (!fieldDef) {
	          // This isn't valid. Let's find suggestions, if any.
	          var suggestedTypes = [];
	          if ((0, _typeDefinition.isAbstractType)(type)) {
	            suggestedTypes = getSiblingInterfacesIncludingField(type, node.name.value);
	            suggestedTypes = suggestedTypes.concat(getImplementationsIncludingField(type, node.name.value));
	          }
	          context.reportError(new _error.GraphQLError(undefinedFieldMessage(node.name.value, type.name, suggestedTypes), [node]));
	        }
	      }
	    }
	  };
	}

	/**
	 * Return implementations of `type` that include `fieldName` as a valid field.
	 */
	function getImplementationsIncludingField(type, fieldName) {
	  return type.getPossibleTypes().filter(function (t) {
	    return t.getFields()[fieldName] !== undefined;
	  }).map(function (t) {
	    return t.name;
	  }).sort();
	}

	/**
	 * Go through all of the implementations of type, and find other interaces
	 * that they implement. If those interfaces include `field` as a valid field,
	 * return them, sorted by how often the implementations include the other
	 * interface.
	 */
	function getSiblingInterfacesIncludingField(type, fieldName) {
	  var implementingObjects = type.getPossibleTypes().filter(function (t) {
	    return t instanceof _typeDefinition.GraphQLObjectType;
	  });

	  var suggestedInterfaces = implementingObjects.reduce(function (acc, t) {
	    t.getInterfaces().forEach(function (i) {
	      if (i.getFields()[fieldName] === undefined) {
	        return;
	      }
	      if (acc[i.name] === undefined) {
	        acc[i.name] = 0;
	      }
	      acc[i.name] += 1;
	    });
	    return acc;
	  }, {});
	  return _Object$keys(suggestedInterfaces).sort(function (a, b) {
	    return suggestedInterfaces[b] - suggestedInterfaces[a];
	  });
	}

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$create = __webpack_require__(74)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.duplicateFragmentNameMessage = duplicateFragmentNameMessage;
	exports.UniqueFragmentNames = UniqueFragmentNames;

	var _error = __webpack_require__(67);

	function duplicateFragmentNameMessage(fragName) {
	  return 'There can only be one fragment named "' + fragName + '".';
	}

	/**
	 * Unique fragment names
	 *
	 * A GraphQL document is only valid if all defined fragments have unique names.
	 */

	function UniqueFragmentNames(context) {
	  var knownFragmentNames = _Object$create(null);
	  return {
	    OperationDefinition: function OperationDefinition() {
	      return false;
	    },
	    FragmentDefinition: function FragmentDefinition(node) {
	      var fragmentName = node.name.value;
	      if (knownFragmentNames[fragmentName]) {
	        context.reportError(new _error.GraphQLError(duplicateFragmentNameMessage(fragmentName), [knownFragmentNames[fragmentName], node.name]));
	      } else {
	        knownFragmentNames[fragmentName] = node.name;
	      }
	      return false;
	    }
	  };
	}

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.unknownFragmentMessage = unknownFragmentMessage;
	exports.KnownFragmentNames = KnownFragmentNames;

	var _error = __webpack_require__(67);

	function unknownFragmentMessage(fragName) {
	  return 'Unknown fragment "' + fragName + '".';
	}

	/**
	 * Known fragment names
	 *
	 * A GraphQL document is only valid if all `...Fragment` fragment spreads refer
	 * to fragments defined in the same document.
	 */

	function KnownFragmentNames(context) {
	  return {
	    FragmentSpread: function FragmentSpread(node) {
	      var fragmentName = node.name.value;
	      var fragment = context.getFragment(fragmentName);
	      if (!fragment) {
	        context.reportError(new _error.GraphQLError(unknownFragmentMessage(fragmentName), [node.name]));
	      }
	    }
	  };
	}

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$create = __webpack_require__(74)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.unusedFragMessage = unusedFragMessage;
	exports.NoUnusedFragments = NoUnusedFragments;

	var _error = __webpack_require__(67);

	function unusedFragMessage(fragName) {
	  return 'Fragment "' + fragName + '" is never used.';
	}

	/**
	 * No unused fragments
	 *
	 * A GraphQL document is only valid if all fragment definitions are spread
	 * within operations, or spread within other fragments spread within operations.
	 */

	function NoUnusedFragments(context) {
	  var operationDefs = [];
	  var fragmentDefs = [];

	  return {
	    OperationDefinition: function OperationDefinition(node) {
	      operationDefs.push(node);
	      return false;
	    },
	    FragmentDefinition: function FragmentDefinition(node) {
	      fragmentDefs.push(node);
	      return false;
	    },
	    Document: {
	      leave: function leave() {
	        var fragmentNameUsed = _Object$create(null);
	        operationDefs.forEach(function (operation) {
	          context.getRecursivelyReferencedFragments(operation).forEach(function (fragment) {
	            fragmentNameUsed[fragment.name.value] = true;
	          });
	        });

	        fragmentDefs.forEach(function (fragmentDef) {
	          var fragName = fragmentDef.name.value;
	          if (fragmentNameUsed[fragName] !== true) {
	            context.reportError(new _error.GraphQLError(unusedFragMessage(fragName), [fragmentDef]));
	          }
	        });
	      }
	    }
	  };
	}

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.typeIncompatibleSpreadMessage = typeIncompatibleSpreadMessage;
	exports.typeIncompatibleAnonSpreadMessage = typeIncompatibleAnonSpreadMessage;
	exports.PossibleFragmentSpreads = PossibleFragmentSpreads;

	var _error = __webpack_require__(67);

	var _utilitiesTypeComparators = __webpack_require__(123);

	var _utilitiesTypeFromAST = __webpack_require__(125);

	function typeIncompatibleSpreadMessage(fragName, parentType, fragType) {
	  return 'Fragment "' + fragName + '" cannot be spread here as objects of ' + ('type "' + parentType + '" can never be of type "' + fragType + '".');
	}

	function typeIncompatibleAnonSpreadMessage(parentType, fragType) {
	  return 'Fragment cannot be spread here as objects of ' + ('type "' + parentType + '" can never be of type "' + fragType + '".');
	}

	/**
	 * Possible fragment spread
	 *
	 * A fragment spread is only valid if the type condition could ever possibly
	 * be true: if there is a non-empty intersection of the possible parent types,
	 * and possible types which pass the type condition.
	 */

	function PossibleFragmentSpreads(context) {
	  return {
	    InlineFragment: function InlineFragment(node) {
	      var fragType = context.getType();
	      var parentType = context.getParentType();
	      if (fragType && parentType && !(0, _utilitiesTypeComparators.doTypesOverlap)(fragType, parentType)) {
	        context.reportError(new _error.GraphQLError(typeIncompatibleAnonSpreadMessage(parentType, fragType), [node]));
	      }
	    },
	    FragmentSpread: function FragmentSpread(node) {
	      var fragName = node.name.value;
	      var fragType = getFragmentType(context, fragName);
	      var parentType = context.getParentType();
	      if (fragType && parentType && !(0, _utilitiesTypeComparators.doTypesOverlap)(fragType, parentType)) {
	        context.reportError(new _error.GraphQLError(typeIncompatibleSpreadMessage(fragName, parentType, fragType), [node]));
	      }
	    }
	  };
	}

	function getFragmentType(context, name) {
	  var frag = context.getFragment(name);
	  return frag && (0, _utilitiesTypeFromAST.typeFromAST)(context.getSchema(), frag.typeCondition);
	}

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$create = __webpack_require__(74)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.cycleErrorMessage = cycleErrorMessage;
	exports.NoFragmentCycles = NoFragmentCycles;

	var _error = __webpack_require__(67);

	function cycleErrorMessage(fragName, spreadNames) {
	  var via = spreadNames.length ? ' via ' + spreadNames.join(', ') : '';
	  return 'Cannot spread fragment "' + fragName + '" within itself' + via + '.';
	}

	function NoFragmentCycles(context) {
	  // Tracks already visited fragments to maintain O(N) and to ensure that cycles
	  // are not redundantly reported.
	  var visitedFrags = _Object$create(null);

	  // Array of AST nodes used to produce meaningful errors
	  var spreadPath = [];

	  // Position in the spread path
	  var spreadPathIndexByName = _Object$create(null);

	  return {
	    OperationDefinition: function OperationDefinition() {
	      return false;
	    },
	    FragmentDefinition: function FragmentDefinition(node) {
	      if (!visitedFrags[node.name.value]) {
	        detectCycleRecursive(node);
	      }
	      return false;
	    }
	  };

	  // This does a straight-forward DFS to find cycles.
	  // It does not terminate when a cycle was found but continues to explore
	  // the graph to find all possible cycles.
	  function detectCycleRecursive(fragment) {
	    var fragmentName = fragment.name.value;
	    visitedFrags[fragmentName] = true;

	    var spreadNodes = context.getFragmentSpreads(fragment);
	    if (spreadNodes.length === 0) {
	      return;
	    }

	    spreadPathIndexByName[fragmentName] = spreadPath.length;

	    for (var i = 0; i < spreadNodes.length; i++) {
	      var spreadNode = spreadNodes[i];
	      var spreadName = spreadNode.name.value;
	      var cycleIndex = spreadPathIndexByName[spreadName];

	      if (cycleIndex === undefined) {
	        spreadPath.push(spreadNode);
	        if (!visitedFrags[spreadName]) {
	          var spreadFragment = context.getFragment(spreadName);
	          if (spreadFragment) {
	            detectCycleRecursive(spreadFragment);
	          }
	        }
	        spreadPath.pop();
	      } else {
	        var cyclePath = spreadPath.slice(cycleIndex);
	        context.reportError(new _error.GraphQLError(cycleErrorMessage(spreadName, cyclePath.map(function (s) {
	          return s.name.value;
	        })), cyclePath.concat(spreadNode)));
	      }
	    }

	    spreadPathIndexByName[fragmentName] = undefined;
	  }
	}

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$create = __webpack_require__(74)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.duplicateVariableMessage = duplicateVariableMessage;
	exports.UniqueVariableNames = UniqueVariableNames;

	var _error = __webpack_require__(67);

	function duplicateVariableMessage(variableName) {
	  return 'There can be only one variable named "' + variableName + '".';
	}

	/**
	 * Unique variable names
	 *
	 * A GraphQL operation is only valid if all its variables are uniquely named.
	 */

	function UniqueVariableNames(context) {
	  var knownVariableNames = _Object$create(null);
	  return {
	    OperationDefinition: function OperationDefinition() {
	      knownVariableNames = _Object$create(null);
	    },
	    VariableDefinition: function VariableDefinition(node) {
	      var variableName = node.variable.name.value;
	      if (knownVariableNames[variableName]) {
	        context.reportError(new _error.GraphQLError(duplicateVariableMessage(variableName), [knownVariableNames[variableName], node.variable.name]));
	      } else {
	        knownVariableNames[variableName] = node.variable.name;
	      }
	    }
	  };
	}

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$create = __webpack_require__(74)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.undefinedVarMessage = undefinedVarMessage;
	exports.NoUndefinedVariables = NoUndefinedVariables;

	var _error = __webpack_require__(67);

	function undefinedVarMessage(varName, opName) {
	  return opName ? 'Variable "$' + varName + '" is not defined by operation "' + opName + '".' : 'Variable "$' + varName + '" is not defined.';
	}

	/**
	 * No undefined variables
	 *
	 * A GraphQL operation is only valid if all variables encountered, both directly
	 * and via fragment spreads, are defined by that operation.
	 */

	function NoUndefinedVariables(context) {
	  var variableNameDefined = _Object$create(null);

	  return {
	    OperationDefinition: {
	      enter: function enter() {
	        variableNameDefined = _Object$create(null);
	      },
	      leave: function leave(operation) {
	        var usages = context.getRecursiveVariableUsages(operation);

	        usages.forEach(function (_ref) {
	          var node = _ref.node;

	          var varName = node.name.value;
	          if (variableNameDefined[varName] !== true) {
	            context.reportError(new _error.GraphQLError(undefinedVarMessage(varName, operation.name && operation.name.value), [node, operation]));
	          }
	        });
	      }
	    },
	    VariableDefinition: function VariableDefinition(varDefAST) {
	      variableNameDefined[varDefAST.variable.name.value] = true;
	    }
	  };
	}

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$create = __webpack_require__(74)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.unusedVariableMessage = unusedVariableMessage;
	exports.NoUnusedVariables = NoUnusedVariables;

	var _error = __webpack_require__(67);

	function unusedVariableMessage(varName, opName) {
	  return opName ? 'Variable "$' + varName + '" is never used in operation "' + opName + '".' : 'Variable "$' + varName + '" is never used.';
	}

	/**
	 * No unused variables
	 *
	 * A GraphQL operation is only valid if all variables defined by an operation
	 * are used, either directly or within a spread fragment.
	 */

	function NoUnusedVariables(context) {
	  var variableDefs = [];

	  return {
	    OperationDefinition: {
	      enter: function enter() {
	        variableDefs = [];
	      },
	      leave: function leave(operation) {
	        var variableNameUsed = _Object$create(null);
	        var usages = context.getRecursiveVariableUsages(operation);
	        var opName = operation.name ? operation.name.value : null;

	        usages.forEach(function (_ref) {
	          var node = _ref.node;

	          variableNameUsed[node.name.value] = true;
	        });

	        variableDefs.forEach(function (variableDef) {
	          var variableName = variableDef.variable.name.value;
	          if (variableNameUsed[variableName] !== true) {
	            context.reportError(new _error.GraphQLError(unusedVariableMessage(variableName, opName), [variableDef]));
	          }
	        });
	      }
	    },
	    VariableDefinition: function VariableDefinition(def) {
	      variableDefs.push(def);
	    }
	  };
	}

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _interopRequireDefault = __webpack_require__(96)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.unknownDirectiveMessage = unknownDirectiveMessage;
	exports.misplacedDirectiveMessage = misplacedDirectiveMessage;
	exports.KnownDirectives = KnownDirectives;

	var _error = __webpack_require__(67);

	var _jsutilsFind = __webpack_require__(122);

	var _jsutilsFind2 = _interopRequireDefault(_jsutilsFind);

	var _languageKinds = __webpack_require__(81);

	function unknownDirectiveMessage(directiveName) {
	  return 'Unknown directive "' + directiveName + '".';
	}

	function misplacedDirectiveMessage(directiveName, placement) {
	  return 'Directive "' + directiveName + '" may not be used on "' + placement + '".';
	}

	/**
	 * Known directives
	 *
	 * A GraphQL document is only valid if all `@directives` are known by the
	 * schema and legally positioned.
	 */

	function KnownDirectives(context) {
	  return {
	    Directive: function Directive(node, key, parent, path, ancestors) {
	      var directiveDef = (0, _jsutilsFind2['default'])(context.getSchema().getDirectives(), function (def) {
	        return def.name === node.name.value;
	      });
	      if (!directiveDef) {
	        context.reportError(new _error.GraphQLError(unknownDirectiveMessage(node.name.value), [node]));
	        return;
	      }
	      var appliedTo = ancestors[ancestors.length - 1];
	      switch (appliedTo.kind) {
	        case _languageKinds.OPERATION_DEFINITION:
	          if (!directiveDef.onOperation) {
	            context.reportError(new _error.GraphQLError(misplacedDirectiveMessage(node.name.value, 'operation'), [node]));
	          }
	          break;
	        case _languageKinds.FIELD:
	          if (!directiveDef.onField) {
	            context.reportError(new _error.GraphQLError(misplacedDirectiveMessage(node.name.value, 'field'), [node]));
	          }
	          break;
	        case _languageKinds.FRAGMENT_SPREAD:
	        case _languageKinds.INLINE_FRAGMENT:
	        case _languageKinds.FRAGMENT_DEFINITION:
	          if (!directiveDef.onFragment) {
	            context.reportError(new _error.GraphQLError(misplacedDirectiveMessage(node.name.value, 'fragment'), [node]));
	          }
	          break;
	      }
	    }
	  };
	}

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _interopRequireDefault = __webpack_require__(96)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.unknownArgMessage = unknownArgMessage;
	exports.unknownDirectiveArgMessage = unknownDirectiveArgMessage;
	exports.KnownArgumentNames = KnownArgumentNames;

	var _error = __webpack_require__(67);

	var _jsutilsFind = __webpack_require__(122);

	var _jsutilsFind2 = _interopRequireDefault(_jsutilsFind);

	var _jsutilsInvariant = __webpack_require__(97);

	var _jsutilsInvariant2 = _interopRequireDefault(_jsutilsInvariant);

	var _languageKinds = __webpack_require__(81);

	function unknownArgMessage(argName, fieldName, type) {
	  return 'Unknown argument "' + argName + '" on field "' + fieldName + '" of ' + ('type "' + type + '".');
	}

	function unknownDirectiveArgMessage(argName, directiveName) {
	  return 'Unknown argument "' + argName + '" on directive "@' + directiveName + '".';
	}

	/**
	 * Known argument names
	 *
	 * A GraphQL field is only valid if all supplied arguments are defined by
	 * that field.
	 */

	function KnownArgumentNames(context) {
	  return {
	    Argument: function Argument(node, key, parent, path, ancestors) {
	      var argumentOf = ancestors[ancestors.length - 1];
	      if (argumentOf.kind === _languageKinds.FIELD) {
	        var fieldDef = context.getFieldDef();
	        if (fieldDef) {
	          var fieldArgDef = (0, _jsutilsFind2['default'])(fieldDef.args, function (arg) {
	            return arg.name === node.name.value;
	          });
	          if (!fieldArgDef) {
	            var parentType = context.getParentType();
	            (0, _jsutilsInvariant2['default'])(parentType);
	            context.reportError(new _error.GraphQLError(unknownArgMessage(node.name.value, fieldDef.name, parentType.name), [node]));
	          }
	        }
	      } else if (argumentOf.kind === _languageKinds.DIRECTIVE) {
	        var directive = context.getDirective();
	        if (directive) {
	          var directiveArgDef = (0, _jsutilsFind2['default'])(directive.args, function (arg) {
	            return arg.name === node.name.value;
	          });
	          if (!directiveArgDef) {
	            context.reportError(new _error.GraphQLError(unknownDirectiveArgMessage(node.name.value, directive.name), [node]));
	          }
	        }
	      }
	    }
	  };
	}

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$create = __webpack_require__(74)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.duplicateArgMessage = duplicateArgMessage;
	exports.UniqueArgumentNames = UniqueArgumentNames;

	var _error = __webpack_require__(67);

	function duplicateArgMessage(argName) {
	  return 'There can be only one argument named "' + argName + '".';
	}

	/**
	 * Unique argument names
	 *
	 * A GraphQL field or directive is only valid if all supplied arguments are
	 * uniquely named.
	 */

	function UniqueArgumentNames(context) {
	  var knownArgNames = _Object$create(null);
	  return {
	    Field: function Field() {
	      knownArgNames = _Object$create(null);
	    },
	    Directive: function Directive() {
	      knownArgNames = _Object$create(null);
	    },
	    Argument: function Argument(node) {
	      var argName = node.name.value;
	      if (knownArgNames[argName]) {
	        context.reportError(new _error.GraphQLError(duplicateArgMessage(argName), [knownArgNames[argName], node.name]));
	      } else {
	        knownArgNames[argName] = node.name;
	      }
	      return false;
	    }
	  };
	}

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.badValueMessage = badValueMessage;
	exports.ArgumentsOfCorrectType = ArgumentsOfCorrectType;

	var _error = __webpack_require__(67);

	var _languagePrinter = __webpack_require__(84);

	var _utilitiesIsValidLiteralValue = __webpack_require__(146);

	function badValueMessage(argName, type, value, verboseErrors) {
	  var message = verboseErrors ? '\n' + verboseErrors.join('\n') : '';
	  return 'Argument "' + argName + '" has invalid value ' + value + '.' + message;
	}

	/**
	 * Argument values of correct type
	 *
	 * A GraphQL document is only valid if all field argument literal values are
	 * of the type expected by their position.
	 */

	function ArgumentsOfCorrectType(context) {
	  return {
	    Argument: function Argument(argAST) {
	      var argDef = context.getArgument();
	      if (argDef) {
	        var errors = (0, _utilitiesIsValidLiteralValue.isValidLiteralValue)(argDef.type, argAST.value);
	        if (errors && errors.length > 0) {
	          context.reportError(new _error.GraphQLError(badValueMessage(argAST.name.value, argDef.type, (0, _languagePrinter.print)(argAST.value), errors), [argAST.value]));
	        }
	      }
	      return false;
	    }
	  };
	}

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _toConsumableArray = __webpack_require__(147)['default'];

	var _getIterator = __webpack_require__(87)['default'];

	var _Object$keys = __webpack_require__(1)['default'];

	var _interopRequireDefault = __webpack_require__(96)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.isValidLiteralValue = isValidLiteralValue;

	var _languagePrinter = __webpack_require__(84);

	var _languageKinds = __webpack_require__(81);

	var _typeDefinition = __webpack_require__(110);

	var _jsutilsInvariant = __webpack_require__(97);

	var _jsutilsInvariant2 = _interopRequireDefault(_jsutilsInvariant);

	var _jsutilsKeyMap = __webpack_require__(117);

	var _jsutilsKeyMap2 = _interopRequireDefault(_jsutilsKeyMap);

	var _jsutilsIsNullish = __webpack_require__(116);

	var _jsutilsIsNullish2 = _interopRequireDefault(_jsutilsIsNullish);

	/**
	 * Utility for validators which determines if a value literal AST is valid given
	 * an input type.
	 *
	 * Note that this only validates literal values, variables are assumed to
	 * provide values of the correct type.
	 */

	function isValidLiteralValue(_x, _x2) {
	  var _again = true;

	  _function: while (_again) {
	    var type = _x,
	        valueAST = _x2;
	    _ret = fields = errors = fieldASTs = _iteratorNormalCompletion = _didIteratorError = _iteratorError = fieldASTMap = _iteratorNormalCompletion2 = _didIteratorError2 = _iteratorError2 = parseResult = undefined;
	    _again = false;

	    // A value must be provided if the type is non-null.
	    if (type instanceof _typeDefinition.GraphQLNonNull) {
	      if (!valueAST) {
	        if (type.ofType.name) {
	          return ['Expected "' + type.ofType.name + '!", found null.'];
	        }
	        return ['Expected non-null value, found null.'];
	      }
	      _x = type.ofType;
	      _x2 = valueAST;
	      _again = true;
	      continue _function;
	    }

	    if (!valueAST) {
	      return [];
	    }

	    // This function only tests literals, and assumes variables will provide
	    // values of the correct type.
	    if (valueAST.kind === _languageKinds.VARIABLE) {
	      return [];
	    }

	    // Lists accept a non-list value as a list of one.
	    if (type instanceof _typeDefinition.GraphQLList) {
	      var _ret = (function () {
	        var itemType = type.ofType;
	        if (valueAST.kind === _languageKinds.LIST) {
	          return {
	            v: valueAST.values.reduce(function (acc, itemAST, index) {
	              var errors = isValidLiteralValue(itemType, itemAST);
	              return acc.concat(errors.map(function (error) {
	                return 'In element #' + index + ': ' + error;
	              }));
	            }, [])
	          };
	        }
	        return {
	          v: isValidLiteralValue(itemType, valueAST)
	        };
	      })();

	      if (typeof _ret === 'object') return _ret.v;
	    }

	    // Input objects check each defined field and look for undefined fields.
	    if (type instanceof _typeDefinition.GraphQLInputObjectType) {
	      if (valueAST.kind !== _languageKinds.OBJECT) {
	        return ['Expected "' + type.name + '", found not an object.'];
	      }
	      var fields = type.getFields();

	      var errors = [];

	      // Ensure every provided field is defined.
	      var fieldASTs = valueAST.fields;
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = _getIterator(fieldASTs), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var providedFieldAST = _step.value;

	          if (!fields[providedFieldAST.name.value]) {
	            errors.push('In field "' + providedFieldAST.name.value + '": Unknown field.');
	          }
	        }

	        // Ensure every defined field is valid.
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator['return']) {
	            _iterator['return']();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }

	      var fieldASTMap = (0, _jsutilsKeyMap2['default'])(fieldASTs, function (fieldAST) {
	        return fieldAST.name.value;
	      });
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;

	      try {
	        var _loop = function () {
	          var fieldName = _step2.value;

	          var result = isValidLiteralValue(fields[fieldName].type, fieldASTMap[fieldName] && fieldASTMap[fieldName].value);
	          errors.push.apply(errors, _toConsumableArray(result.map(function (error) {
	            return 'In field "' + fieldName + '": ' + error;
	          })));
	        };

	        for (var _iterator2 = _getIterator(_Object$keys(fields)), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          _loop();
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2['return']) {
	            _iterator2['return']();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }

	      return errors;
	    }

	    (0, _jsutilsInvariant2['default'])(type instanceof _typeDefinition.GraphQLScalarType || type instanceof _typeDefinition.GraphQLEnumType, 'Must be input type');

	    // Scalar/Enum input checks to ensure the type can parse the value to
	    // a non-null value.
	    var parseResult = type.parseLiteral(valueAST);
	    if ((0, _jsutilsIsNullish2['default'])(parseResult)) {
	      return ['Expected type "' + type.name + '", found ' + (0, _languagePrinter.print)(valueAST) + '.'];
	    }

	    return [];
	  }
	}

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Array$from = __webpack_require__(148)["default"];

	exports["default"] = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

	    return arr2;
	  } else {
	    return _Array$from(arr);
	  }
	};

	exports.__esModule = true;

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(149), __esModule: true };

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(19);
	__webpack_require__(150);
	module.exports = __webpack_require__(9).Array.from;

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(10)
	  , $export     = __webpack_require__(7)
	  , toObject    = __webpack_require__(4)
	  , call        = __webpack_require__(49)
	  , isArrayIter = __webpack_require__(50)
	  , toLength    = __webpack_require__(51)
	  , getIterFn   = __webpack_require__(52);
	$export($export.S + $export.F * !__webpack_require__(63)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , $$      = arguments
	      , $$len   = $$.length
	      , mapfn   = $$len > 1 ? $$[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _interopRequireDefault = __webpack_require__(96)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.missingFieldArgMessage = missingFieldArgMessage;
	exports.missingDirectiveArgMessage = missingDirectiveArgMessage;
	exports.ProvidedNonNullArguments = ProvidedNonNullArguments;

	var _error = __webpack_require__(67);

	var _jsutilsKeyMap = __webpack_require__(117);

	var _jsutilsKeyMap2 = _interopRequireDefault(_jsutilsKeyMap);

	var _typeDefinition = __webpack_require__(110);

	function missingFieldArgMessage(fieldName, argName, type) {
	  return 'Field "' + fieldName + '" argument "' + argName + '" of type "' + type + '" ' + 'is required but not provided.';
	}

	function missingDirectiveArgMessage(directiveName, argName, type) {
	  return 'Directive "@' + directiveName + '" argument "' + argName + '" of type ' + ('"' + type + '" is required but not provided.');
	}

	/**
	 * Provided required arguments
	 *
	 * A field or directive is only valid if all required (non-null) field arguments
	 * have been provided.
	 */

	function ProvidedNonNullArguments(context) {
	  return {
	    Field: {
	      // Validate on leave to allow for deeper errors to appear first.
	      leave: function leave(fieldAST) {
	        var fieldDef = context.getFieldDef();
	        if (!fieldDef) {
	          return false;
	        }
	        var argASTs = fieldAST.arguments || [];

	        var argASTMap = (0, _jsutilsKeyMap2['default'])(argASTs, function (arg) {
	          return arg.name.value;
	        });
	        fieldDef.args.forEach(function (argDef) {
	          var argAST = argASTMap[argDef.name];
	          if (!argAST && argDef.type instanceof _typeDefinition.GraphQLNonNull) {
	            context.reportError(new _error.GraphQLError(missingFieldArgMessage(fieldAST.name.value, argDef.name, argDef.type), [fieldAST]));
	          }
	        });
	      }
	    },

	    Directive: {
	      // Validate on leave to allow for deeper errors to appear first.
	      leave: function leave(directiveAST) {
	        var directiveDef = context.getDirective();
	        if (!directiveDef) {
	          return false;
	        }
	        var argASTs = directiveAST.arguments || [];

	        var argASTMap = (0, _jsutilsKeyMap2['default'])(argASTs, function (arg) {
	          return arg.name.value;
	        });
	        directiveDef.args.forEach(function (argDef) {
	          var argAST = argASTMap[argDef.name];
	          if (!argAST && argDef.type instanceof _typeDefinition.GraphQLNonNull) {
	            context.reportError(new _error.GraphQLError(missingDirectiveArgMessage(directiveAST.name.value, argDef.name, argDef.type), [directiveAST]));
	          }
	        });
	      }
	    }
	  };
	}

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.defaultForNonNullArgMessage = defaultForNonNullArgMessage;
	exports.badValueForDefaultArgMessage = badValueForDefaultArgMessage;
	exports.DefaultValuesOfCorrectType = DefaultValuesOfCorrectType;

	var _error = __webpack_require__(67);

	var _languagePrinter = __webpack_require__(84);

	var _typeDefinition = __webpack_require__(110);

	var _utilitiesIsValidLiteralValue = __webpack_require__(146);

	function defaultForNonNullArgMessage(varName, type, guessType) {
	  return 'Variable "$' + varName + '" of type "' + type + '" is required and will not ' + ('use the default value. Perhaps you meant to use type "' + guessType + '".');
	}

	function badValueForDefaultArgMessage(varName, type, value, verboseErrors) {
	  var message = verboseErrors ? '\n' + verboseErrors.join('\n') : '';
	  return 'Variable "$' + varName + ' has invalid default value ' + value + '.' + message;
	}

	/**
	 * Variable default values of correct type
	 *
	 * A GraphQL document is only valid if all variable default values are of the
	 * type expected by their definition.
	 */

	function DefaultValuesOfCorrectType(context) {
	  return {
	    VariableDefinition: function VariableDefinition(varDefAST) {
	      var name = varDefAST.variable.name.value;
	      var defaultValue = varDefAST.defaultValue;
	      var type = context.getInputType();
	      if (type instanceof _typeDefinition.GraphQLNonNull && defaultValue) {
	        context.reportError(new _error.GraphQLError(defaultForNonNullArgMessage(name, type, type.ofType), [defaultValue]));
	      }
	      if (type && defaultValue) {
	        var errors = (0, _utilitiesIsValidLiteralValue.isValidLiteralValue)(type, defaultValue);
	        if (errors && errors.length > 0) {
	          context.reportError(new _error.GraphQLError(badValueForDefaultArgMessage(name, type, (0, _languagePrinter.print)(defaultValue), errors), [defaultValue]));
	        }
	      }
	      return false;
	    },
	    SelectionSet: function SelectionSet() {
	      return false;
	    },
	    FragmentDefinition: function FragmentDefinition() {
	      return false;
	    }
	  };
	}

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$create = __webpack_require__(74)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.badVarPosMessage = badVarPosMessage;
	exports.VariablesInAllowedPosition = VariablesInAllowedPosition;

	var _error = __webpack_require__(67);

	var _typeDefinition = __webpack_require__(110);

	var _utilitiesTypeComparators = __webpack_require__(123);

	var _utilitiesTypeFromAST = __webpack_require__(125);

	function badVarPosMessage(varName, varType, expectedType) {
	  return 'Variable "$' + varName + '" of type "' + varType + '" used in position ' + ('expecting type "' + expectedType + '".');
	}

	/**
	 * Variables passed to field arguments conform to type
	 */

	function VariablesInAllowedPosition(context) {
	  var varDefMap = _Object$create(null);

	  return {
	    OperationDefinition: {
	      enter: function enter() {
	        varDefMap = _Object$create(null);
	      },
	      leave: function leave(operation) {
	        var usages = context.getRecursiveVariableUsages(operation);

	        usages.forEach(function (_ref) {
	          var node = _ref.node;
	          var type = _ref.type;

	          var varName = node.name.value;
	          var varDef = varDefMap[varName];
	          if (varDef && type) {
	            // A var type is allowed if it is the same or more strict (e.g. is
	            // a subtype of) than the expected type. It can be more strict if
	            // the variable type is non-null when the expected type is nullable.
	            // If both are list types, the variable item type can be more strict
	            // than the expected item type (contravariant).
	            var varType = (0, _utilitiesTypeFromAST.typeFromAST)(context.getSchema(), varDef.type);
	            if (varType && !(0, _utilitiesTypeComparators.isTypeSubTypeOf)(effectiveType(varType, varDef), type)) {
	              context.reportError(new _error.GraphQLError(badVarPosMessage(varName, varType, type), [varDef, node]));
	            }
	          }
	        });
	      }
	    },
	    VariableDefinition: function VariableDefinition(varDefAST) {
	      varDefMap[varDefAST.variable.name.value] = varDefAST;
	    }
	  };
	}

	// If a variable definition has a default value, it's effectively non-null.
	function effectiveType(varType, varDef) {
	  return !varDef.defaultValue || varType instanceof _typeDefinition.GraphQLNonNull ? varType : new _typeDefinition.GraphQLNonNull(varType);
	}

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _createClass = __webpack_require__(99)['default'];

	var _classCallCheck = __webpack_require__(65)['default'];

	var _slicedToArray = __webpack_require__(86)['default'];

	var _Object$keys = __webpack_require__(1)['default'];

	var _Map = __webpack_require__(102)['default'];

	var _Set = __webpack_require__(155)['default'];

	var _interopRequireDefault = __webpack_require__(96)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.fieldsConflictMessage = fieldsConflictMessage;
	exports.OverlappingFieldsCanBeMerged = OverlappingFieldsCanBeMerged;

	// Field name and reason.

	// Reason is a string, or a nested list of conflicts.

	// Tuple defining an AST in a context

	// Map of array of those.

	var _error = __webpack_require__(67);

	var _jsutilsFind = __webpack_require__(122);

	var _jsutilsFind2 = _interopRequireDefault(_jsutilsFind);

	var _languageKinds = __webpack_require__(81);

	var _languagePrinter = __webpack_require__(84);

	var _typeDefinition = __webpack_require__(110);

	var _utilitiesTypeComparators = __webpack_require__(123);

	var _utilitiesTypeFromAST = __webpack_require__(125);

	function fieldsConflictMessage(responseName, reason) {
	  return 'Fields "' + responseName + '" conflict because ' + reasonMessage(reason) + '.';
	}

	function reasonMessage(reason) {
	  if (Array.isArray(reason)) {
	    return reason.map(function (_ref) {
	      var _ref2 = _slicedToArray(_ref, 2);

	      var responseName = _ref2[0];
	      var subreason = _ref2[1];
	      return 'subfields "' + responseName + '" conflict because ' + reasonMessage(subreason);
	    }).join(' and ');
	  }
	  return reason;
	}

	/**
	 * Overlapping fields can be merged
	 *
	 * A selection set is only valid if all fields (including spreading any
	 * fragments) either correspond to distinct response names or can be merged
	 * without ambiguity.
	 */

	function OverlappingFieldsCanBeMerged(context) {
	  var comparedSet = new PairSet();

	  function findConflicts(fieldMap) {
	    var conflicts = [];
	    _Object$keys(fieldMap).forEach(function (responseName) {
	      var fields = fieldMap[responseName];
	      if (fields.length > 1) {
	        for (var i = 0; i < fields.length; i++) {
	          for (var j = i; j < fields.length; j++) {
	            var conflict = findConflict(responseName, fields[i], fields[j]);
	            if (conflict) {
	              conflicts.push(conflict);
	            }
	          }
	        }
	      }
	    });
	    return conflicts;
	  }

	  function findConflict(responseName, field1, field2) {
	    var _field1 = _slicedToArray(field1, 3);

	    var parentType1 = _field1[0];
	    var ast1 = _field1[1];
	    var def1 = _field1[2];

	    var _field2 = _slicedToArray(field2, 3);

	    var parentType2 = _field2[0];
	    var ast2 = _field2[1];
	    var def2 = _field2[2];

	    // Not a pair.
	    if (ast1 === ast2) {
	      return;
	    }

	    // If the statically known parent types could not possibly apply at the same
	    // time, then it is safe to permit them to diverge as they will not present
	    // any ambiguity by differing.
	    // It is known that two parent types could never overlap if they are
	    // different Object types. Interface or Union types might overlap - if not
	    // in the current state of the schema, then perhaps in some future version,
	    // thus may not safely diverge.
	    if (parentType1 !== parentType2 && parentType1 instanceof _typeDefinition.GraphQLObjectType && parentType2 instanceof _typeDefinition.GraphQLObjectType) {
	      return;
	    }

	    // Memoize, do not report the same issue twice.
	    if (comparedSet.has(ast1, ast2)) {
	      return;
	    }
	    comparedSet.add(ast1, ast2);

	    var name1 = ast1.name.value;
	    var name2 = ast2.name.value;
	    if (name1 !== name2) {
	      return [[responseName, name1 + ' and ' + name2 + ' are different fields'], [ast1], [ast2]];
	    }

	    var type1 = def1 && def1.type;
	    var type2 = def2 && def2.type;
	    if (type1 && type2 && !(0, _utilitiesTypeComparators.isEqualType)(type1, type2)) {
	      return [[responseName, 'they return differing types ' + type1 + ' and ' + type2], [ast1], [ast2]];
	    }

	    if (!sameArguments(ast1.arguments || [], ast2.arguments || [])) {
	      return [[responseName, 'they have differing arguments'], [ast1], [ast2]];
	    }

	    var selectionSet1 = ast1.selectionSet;
	    var selectionSet2 = ast2.selectionSet;
	    if (selectionSet1 && selectionSet2) {
	      var visitedFragmentNames = {};
	      var subfieldMap = collectFieldASTsAndDefs(context, (0, _typeDefinition.getNamedType)(type1), selectionSet1, visitedFragmentNames);
	      subfieldMap = collectFieldASTsAndDefs(context, (0, _typeDefinition.getNamedType)(type2), selectionSet2, visitedFragmentNames, subfieldMap);
	      var conflicts = findConflicts(subfieldMap);
	      if (conflicts.length > 0) {
	        return [[responseName, conflicts.map(function (_ref3) {
	          var _ref32 = _slicedToArray(_ref3, 1);

	          var reason = _ref32[0];
	          return reason;
	        })], conflicts.reduce(function (allFields, _ref4) {
	          var _ref42 = _slicedToArray(_ref4, 2);

	          var fields1 = _ref42[1];
	          return allFields.concat(fields1);
	        }, [ast1]), conflicts.reduce(function (allFields, _ref5) {
	          var _ref52 = _slicedToArray(_ref5, 3);

	          var fields2 = _ref52[2];
	          return allFields.concat(fields2);
	        }, [ast2])];
	      }
	    }
	  }

	  return {
	    SelectionSet: {
	      // Note: we validate on the reverse traversal so deeper conflicts will be
	      // caught first, for clearer error messages.
	      leave: function leave(selectionSet) {
	        var fieldMap = collectFieldASTsAndDefs(context, context.getParentType(), selectionSet);
	        var conflicts = findConflicts(fieldMap);
	        conflicts.forEach(function (_ref6) {
	          var _ref62 = _slicedToArray(_ref6, 3);

	          var _ref62$0 = _slicedToArray(_ref62[0], 2);

	          var responseName = _ref62$0[0];
	          var reason = _ref62$0[1];
	          var fields1 = _ref62[1];
	          var fields2 = _ref62[2];
	          return context.reportError(new _error.GraphQLError(fieldsConflictMessage(responseName, reason), fields1.concat(fields2)));
	        });
	      }
	    }
	  };
	}

	function sameArguments(arguments1, arguments2) {
	  if (arguments1.length !== arguments2.length) {
	    return false;
	  }
	  return arguments1.every(function (argument1) {
	    var argument2 = (0, _jsutilsFind2['default'])(arguments2, function (argument) {
	      return argument.name.value === argument1.name.value;
	    });
	    if (!argument2) {
	      return false;
	    }
	    return sameValue(argument1.value, argument2.value);
	  });
	}

	function sameValue(value1, value2) {
	  return !value1 && !value2 || (0, _languagePrinter.print)(value1) === (0, _languagePrinter.print)(value2);
	}

	/**
	 * Given a selectionSet, adds all of the fields in that selection to
	 * the passed in map of fields, and returns it at the end.
	 *
	 * Note: This is not the same as execution's collectFields because at static
	 * time we do not know what object type will be used, so we unconditionally
	 * spread in all fragments.
	 */
	function collectFieldASTsAndDefs(context, parentType, selectionSet, visitedFragmentNames, astAndDefs) {
	  var _visitedFragmentNames = visitedFragmentNames || {};
	  var _astAndDefs = astAndDefs || {};
	  for (var i = 0; i < selectionSet.selections.length; i++) {
	    var selection = selectionSet.selections[i];
	    switch (selection.kind) {
	      case _languageKinds.FIELD:
	        var fieldName = selection.name.value;
	        var fieldDef = undefined;
	        if (parentType instanceof _typeDefinition.GraphQLObjectType || parentType instanceof _typeDefinition.GraphQLInterfaceType) {
	          fieldDef = parentType.getFields()[fieldName];
	        }
	        var responseName = selection.alias ? selection.alias.value : fieldName;
	        if (!_astAndDefs[responseName]) {
	          _astAndDefs[responseName] = [];
	        }
	        _astAndDefs[responseName].push([parentType, selection, fieldDef]);
	        break;
	      case _languageKinds.INLINE_FRAGMENT:
	        var typeCondition = selection.typeCondition;
	        var inlineFragmentType = typeCondition ? (0, _utilitiesTypeFromAST.typeFromAST)(context.getSchema(), selection.typeCondition) : parentType;
	        _astAndDefs = collectFieldASTsAndDefs(context, inlineFragmentType, selection.selectionSet, _visitedFragmentNames, _astAndDefs);
	        break;
	      case _languageKinds.FRAGMENT_SPREAD:
	        var fragName = selection.name.value;
	        if (_visitedFragmentNames[fragName]) {
	          continue;
	        }
	        _visitedFragmentNames[fragName] = true;
	        var fragment = context.getFragment(fragName);
	        if (!fragment) {
	          continue;
	        }
	        var fragmentType = (0, _utilitiesTypeFromAST.typeFromAST)(context.getSchema(), fragment.typeCondition);
	        _astAndDefs = collectFieldASTsAndDefs(context, fragmentType, fragment.selectionSet, _visitedFragmentNames, _astAndDefs);
	        break;
	    }
	  }
	  return _astAndDefs;
	}

	/**
	 * A way to keep track of pairs of things when the ordering of the pair does
	 * not matter. We do this by maintaining a sort of double adjacency sets.
	 */

	var PairSet = (function () {
	  function PairSet() {
	    _classCallCheck(this, PairSet);

	    this._data = new _Map();
	  }

	  _createClass(PairSet, [{
	    key: 'has',
	    value: function has(a, b) {
	      var first = this._data.get(a);
	      return first && first.has(b);
	    }
	  }, {
	    key: 'add',
	    value: function add(a, b) {
	      _pairSetAdd(this._data, a, b);
	      _pairSetAdd(this._data, b, a);
	    }
	  }]);

	  return PairSet;
	})();

	function _pairSetAdd(data, a, b) {
	  var set = data.get(a);
	  if (!set) {
	    set = new _Set();
	    data.set(a, set);
	  }
	  set.add(b);
	}

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(156), __esModule: true };

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(18);
	__webpack_require__(19);
	__webpack_require__(36);
	__webpack_require__(157);
	__webpack_require__(158);
	module.exports = __webpack_require__(9).Set;

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(105);

	// 23.2 Set Objects
	__webpack_require__(106)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(7);

	$export($export.P, 'Set', {toJSON: __webpack_require__(108)('Set')});

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$create = __webpack_require__(74)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.duplicateInputFieldMessage = duplicateInputFieldMessage;
	exports.UniqueInputFieldNames = UniqueInputFieldNames;

	var _error = __webpack_require__(67);

	function duplicateInputFieldMessage(fieldName) {
	  return 'There can be only one input field named "' + fieldName + '".';
	}

	/**
	 * Unique input field names
	 *
	 * A GraphQL input object value is only valid if all supplied fields are
	 * uniquely named.
	 */

	function UniqueInputFieldNames(context) {
	  var knownNameStack = [];
	  var knownNames = _Object$create(null);

	  return {
	    ObjectValue: {
	      enter: function enter() {
	        knownNameStack.push(knownNames);
	        knownNames = _Object$create(null);
	      },
	      leave: function leave() {
	        knownNames = knownNameStack.pop();
	      }
	    },
	    ObjectField: function ObjectField(node) {
	      var fieldName = node.name.value;
	      if (knownNames[fieldName]) {
	        context.reportError(new _error.GraphQLError(duplicateInputFieldMessage(fieldName), [knownNames[fieldName], node.name]));
	      } else {
	        knownNames[fieldName] = node.name;
	      }
	      return false;
	    }
	  };
	}

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	/**
	 * Terminology
	 *
	 * "Definitions" are the generic name for top-level statements in the document.
	 * Examples of this include:
	 * 1) Operations (such as a query)
	 * 2) Fragments
	 *
	 * "Operations" are a generic name for requests in the document.
	 * Examples of this include:
	 * 1) query,
	 * 2) mutation
	 *
	 * "Selections" are the definitions that can appear legally and at
	 * single level of the query. These include:
	 * 1) field references e.g "a"
	 * 2) fragment "spreads" e.g. "...c"
	 * 3) inline fragment "spreads" e.g. "...on Type { a }"
	 */

	/**
	 * Data that must be available at all points during query execution.
	 *
	 * Namely, schema of the type system that is currently executing,
	 * and the fragments defined in the query document
	 */
	'use strict';

	/**
	 * The result of execution. `data` is the result of executing the
	 * query, `errors` is null if no errors occurred, and is a
	 * non-empty array if an error occurred.
	 */

	var _Promise = __webpack_require__(16)['default'];

	var _Object$create = __webpack_require__(74)['default'];

	var _Object$keys = __webpack_require__(1)['default'];

	var _interopRequireDefault = __webpack_require__(96)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.execute = execute;

	var _error = __webpack_require__(67);

	var _jsutilsFind = __webpack_require__(122);

	var _jsutilsFind2 = _interopRequireDefault(_jsutilsFind);

	var _jsutilsInvariant = __webpack_require__(97);

	var _jsutilsInvariant2 = _interopRequireDefault(_jsutilsInvariant);

	var _jsutilsIsNullish = __webpack_require__(116);

	var _jsutilsIsNullish2 = _interopRequireDefault(_jsutilsIsNullish);

	var _utilitiesTypeFromAST = __webpack_require__(125);

	var _language = __webpack_require__(79);

	var _values = __webpack_require__(161);

	var _typeDefinition = __webpack_require__(110);

	var _typeSchema = __webpack_require__(109);

	var _typeIntrospection = __webpack_require__(120);

	var _typeDirectives = __webpack_require__(118);

	/**
	 * Implements the "Evaluating requests" section of the GraphQL specification.
	 *
	 * Returns a Promise that will eventually be resolved and never rejected.
	 *
	 * If the arguments to this function do not result in a legal execution context,
	 * a GraphQLError will be thrown immediately explaining the invalid input.
	 */

	function execute(schema, documentAST, rootValue, variableValues, operationName) {
	  (0, _jsutilsInvariant2['default'])(schema, 'Must provide schema');
	  (0, _jsutilsInvariant2['default'])(schema instanceof _typeSchema.GraphQLSchema, 'Schema must be an instance of GraphQLSchema. Also ensure that there are ' + 'not multiple versions of GraphQL installed in your node_modules directory.');

	  // If a valid context cannot be created due to incorrect arguments,
	  // this will throw an error.
	  var context = buildExecutionContext(schema, documentAST, rootValue, variableValues, operationName);

	  // Return a Promise that will eventually resolve to the data described by
	  // The "Response" section of the GraphQL specification.
	  //
	  // If errors are encountered while executing a GraphQL field, only that
	  // field and its descendants will be omitted, and sibling fields will still
	  // be executed. An execution which encounters errors will still result in a
	  // resolved Promise.
	  return new _Promise(function (resolve) {
	    resolve(executeOperation(context, context.operation, rootValue));
	  })['catch'](function (error) {
	    // Errors from sub-fields of a NonNull type may propagate to the top level,
	    // at which point we still log the error and null the parent field, which
	    // in this case is the entire response.
	    context.errors.push(error);
	    return null;
	  }).then(function (data) {
	    if (!context.errors.length) {
	      return { data: data };
	    }
	    return { data: data, errors: context.errors };
	  });
	}

	/**
	 * Constructs a ExecutionContext object from the arguments passed to
	 * execute, which we will pass throughout the other execution methods.
	 *
	 * Throws a GraphQLError if a valid execution context cannot be created.
	 */
	function buildExecutionContext(schema, documentAST, rootValue, rawVariableValues, operationName) {
	  var errors = [];
	  var operation = undefined;
	  var fragments = _Object$create(null);
	  documentAST.definitions.forEach(function (definition) {
	    switch (definition.kind) {
	      case _language.Kind.OPERATION_DEFINITION:
	        if (!operationName && operation) {
	          throw new _error.GraphQLError('Must provide operation name if query contains multiple operations.');
	        }
	        if (!operationName || definition.name && definition.name.value === operationName) {
	          operation = definition;
	        }
	        break;
	      case _language.Kind.FRAGMENT_DEFINITION:
	        fragments[definition.name.value] = definition;
	        break;
	      default:
	        throw new _error.GraphQLError('GraphQL cannot execute a request containing a ' + definition.kind + '.', definition);
	    }
	  });
	  if (!operation) {
	    if (!operationName) {
	      throw new _error.GraphQLError('Unknown operation named "' + operationName + '".');
	    } else {
	      throw new _error.GraphQLError('Must provide an operation.');
	    }
	  }
	  var variableValues = (0, _values.getVariableValues)(schema, operation.variableDefinitions || [], rawVariableValues || {});
	  var exeContext = { schema: schema, fragments: fragments, rootValue: rootValue, operation: operation, variableValues: variableValues, errors: errors };
	  return exeContext;
	}

	/**
	 * Implements the "Evaluating operations" section of the spec.
	 */
	function executeOperation(exeContext, operation, rootValue) {
	  var type = getOperationRootType(exeContext.schema, operation);
	  var fields = collectFields(exeContext, type, operation.selectionSet, _Object$create(null), _Object$create(null));

	  if (operation.operation === 'mutation') {
	    return executeFieldsSerially(exeContext, type, rootValue, fields);
	  }
	  return executeFields(exeContext, type, rootValue, fields);
	}

	/**
	 * Extracts the root type of the operation from the schema.
	 */
	function getOperationRootType(schema, operation) {
	  switch (operation.operation) {
	    case 'query':
	      return schema.getQueryType();
	    case 'mutation':
	      var mutationType = schema.getMutationType();
	      if (!mutationType) {
	        throw new _error.GraphQLError('Schema is not configured for mutations', [operation]);
	      }
	      return mutationType;
	    case 'subscription':
	      var subscriptionType = schema.getSubscriptionType();
	      if (!subscriptionType) {
	        throw new _error.GraphQLError('Schema is not configured for subscriptions', [operation]);
	      }
	      return subscriptionType;
	    default:
	      throw new _error.GraphQLError('Can only execute queries, mutations and subscriptions', [operation]);
	  }
	}

	/**
	 * Implements the "Evaluating selection sets" section of the spec
	 * for "write" mode.
	 */
	function executeFieldsSerially(exeContext, parentType, sourceValue, fields) {
	  return _Object$keys(fields).reduce(function (prevPromise, responseName) {
	    return prevPromise.then(function (results) {
	      var fieldASTs = fields[responseName];
	      var result = resolveField(exeContext, parentType, sourceValue, fieldASTs);
	      if (result === undefined) {
	        return results;
	      }
	      if (isThenable(result)) {
	        return result.then(function (resolvedResult) {
	          results[responseName] = resolvedResult;
	          return results;
	        });
	      }
	      results[responseName] = result;
	      return results;
	    });
	  }, _Promise.resolve({}));
	}

	/**
	 * Implements the "Evaluating selection sets" section of the spec
	 * for "read" mode.
	 */
	function executeFields(exeContext, parentType, sourceValue, fields) {
	  var containsPromise = false;

	  var finalResults = _Object$keys(fields).reduce(function (results, responseName) {
	    var fieldASTs = fields[responseName];
	    var result = resolveField(exeContext, parentType, sourceValue, fieldASTs);
	    if (result === undefined) {
	      return results;
	    }
	    results[responseName] = result;
	    if (isThenable(result)) {
	      containsPromise = true;
	    }
	    return results;
	  }, _Object$create(null));

	  // If there are no promises, we can just return the object
	  if (!containsPromise) {
	    return finalResults;
	  }

	  // Otherwise, results is a map from field name to the result
	  // of resolving that field, which is possibly a promise. Return
	  // a promise that will return this same map, but with any
	  // promises replaced with the values they resolved to.
	  return promiseForObject(finalResults);
	}

	/**
	 * Given a selectionSet, adds all of the fields in that selection to
	 * the passed in map of fields, and returns it at the end.
	 *
	 * CollectFields requires the "runtime type" of an object. For a field which
	 * returns and Interface or Union type, the "runtime type" will be the actual
	 * Object type returned by that field.
	 */
	function collectFields(exeContext, runtimeType, selectionSet, fields, visitedFragmentNames) {
	  for (var i = 0; i < selectionSet.selections.length; i++) {
	    var selection = selectionSet.selections[i];
	    switch (selection.kind) {
	      case _language.Kind.FIELD:
	        if (!shouldIncludeNode(exeContext, selection.directives)) {
	          continue;
	        }
	        var name = getFieldEntryKey(selection);
	        if (!fields[name]) {
	          fields[name] = [];
	        }
	        fields[name].push(selection);
	        break;
	      case _language.Kind.INLINE_FRAGMENT:
	        if (!shouldIncludeNode(exeContext, selection.directives) || !doesFragmentConditionMatch(exeContext, selection, runtimeType)) {
	          continue;
	        }
	        collectFields(exeContext, runtimeType, selection.selectionSet, fields, visitedFragmentNames);
	        break;
	      case _language.Kind.FRAGMENT_SPREAD:
	        var fragName = selection.name.value;
	        if (visitedFragmentNames[fragName] || !shouldIncludeNode(exeContext, selection.directives)) {
	          continue;
	        }
	        visitedFragmentNames[fragName] = true;
	        var fragment = exeContext.fragments[fragName];
	        if (!fragment || !shouldIncludeNode(exeContext, fragment.directives) || !doesFragmentConditionMatch(exeContext, fragment, runtimeType)) {
	          continue;
	        }
	        collectFields(exeContext, runtimeType, fragment.selectionSet, fields, visitedFragmentNames);
	        break;
	    }
	  }
	  return fields;
	}

	/**
	 * Determines if a field should be included based on the @include and @skip
	 * directives, where @skip has higher precidence than @include.
	 */
	function shouldIncludeNode(exeContext, directives) {
	  var skipAST = directives && (0, _jsutilsFind2['default'])(directives, function (directive) {
	    return directive.name.value === _typeDirectives.GraphQLSkipDirective.name;
	  });
	  if (skipAST) {
	    var _getArgumentValues = (0, _values.getArgumentValues)(_typeDirectives.GraphQLSkipDirective.args, skipAST.arguments, exeContext.variableValues);

	    var skipIf = _getArgumentValues['if'];

	    return !skipIf;
	  }

	  var includeAST = directives && (0, _jsutilsFind2['default'])(directives, function (directive) {
	    return directive.name.value === _typeDirectives.GraphQLIncludeDirective.name;
	  });
	  if (includeAST) {
	    var _getArgumentValues2 = (0, _values.getArgumentValues)(_typeDirectives.GraphQLIncludeDirective.args, includeAST.arguments, exeContext.variableValues);

	    var includeIf = _getArgumentValues2['if'];

	    return Boolean(includeIf);
	  }

	  return true;
	}

	/**
	 * Determines if a fragment is applicable to the given type.
	 */
	function doesFragmentConditionMatch(exeContext, fragment, type) {
	  var typeConditionAST = fragment.typeCondition;
	  if (!typeConditionAST) {
	    return true;
	  }
	  var conditionalType = (0, _utilitiesTypeFromAST.typeFromAST)(exeContext.schema, typeConditionAST);
	  if (conditionalType === type) {
	    return true;
	  }
	  if ((0, _typeDefinition.isAbstractType)(conditionalType)) {
	    return conditionalType.isPossibleType(type);
	  }
	  return false;
	}

	/**
	 * This function transforms a JS object `{[key: string]: Promise<T>}` into
	 * a `Promise<{[key: string]: T}>`
	 *
	 * This is akin to bluebird's `Promise.props`, but implemented only using
	 * `Promise.all` so it will work with any implementation of ES6 promises.
	 */
	function promiseForObject(object) {
	  var keys = _Object$keys(object);
	  var valuesAndPromises = keys.map(function (name) {
	    return object[name];
	  });
	  return _Promise.all(valuesAndPromises).then(function (values) {
	    return values.reduce(function (resolvedObject, value, i) {
	      resolvedObject[keys[i]] = value;
	      return resolvedObject;
	    }, _Object$create(null));
	  });
	}

	/**
	 * Implements the logic to compute the key of a given field’s entry
	 */
	function getFieldEntryKey(node) {
	  return node.alias ? node.alias.value : node.name.value;
	}

	/**
	 * Resolves the field on the given source object. In particular, this
	 * figures out the value that the field returns by calling its resolve function,
	 * then calls completeValue to complete promises, serialize scalars, or execute
	 * the sub-selection-set for objects.
	 */
	function resolveField(exeContext, parentType, source, fieldASTs) {
	  var fieldAST = fieldASTs[0];
	  var fieldName = fieldAST.name.value;

	  var fieldDef = getFieldDef(exeContext.schema, parentType, fieldName);
	  if (!fieldDef) {
	    return;
	  }

	  var returnType = fieldDef.type;
	  var resolveFn = fieldDef.resolve || defaultResolveFn;

	  // Build a JS object of arguments from the field.arguments AST, using the
	  // variables scope to fulfill any variable references.
	  // TODO: find a way to memoize, in case this field is within a List type.
	  var args = (0, _values.getArgumentValues)(fieldDef.args, fieldAST.arguments, exeContext.variableValues);

	  // The resolve function's optional third argument is a collection of
	  // information about the current execution state.
	  var info = {
	    fieldName: fieldName,
	    fieldASTs: fieldASTs,
	    returnType: returnType,
	    parentType: parentType,
	    schema: exeContext.schema,
	    fragments: exeContext.fragments,
	    rootValue: exeContext.rootValue,
	    operation: exeContext.operation,
	    variableValues: exeContext.variableValues
	  };

	  // Get the resolve function, regardless of if its result is normal
	  // or abrupt (error).
	  var result = resolveOrError(resolveFn, source, args, info);

	  return completeValueCatchingError(exeContext, returnType, fieldASTs, info, result);
	}

	// Isolates the "ReturnOrAbrupt" behavior to not de-opt the `resolveField`
	// function. Returns the result of resolveFn or the abrupt-return Error object.
	function resolveOrError(resolveFn, source, args, info) {
	  try {
	    return resolveFn(source, args, info);
	  } catch (error) {
	    // Sometimes a non-error is thrown, wrap it as an Error for a
	    // consistent interface.
	    return error instanceof Error ? error : new Error(error);
	  }
	}

	// This is a small wrapper around completeValue which detects and logs errors
	// in the execution context.
	function completeValueCatchingError(exeContext, returnType, fieldASTs, info, result) {
	  // If the field type is non-nullable, then it is resolved without any
	  // protection from errors.
	  if (returnType instanceof _typeDefinition.GraphQLNonNull) {
	    return completeValue(exeContext, returnType, fieldASTs, info, result);
	  }

	  // Otherwise, error protection is applied, logging the error and resolving
	  // a null value for this field if one is encountered.
	  try {
	    var completed = completeValue(exeContext, returnType, fieldASTs, info, result);
	    if (isThenable(completed)) {
	      // If `completeValue` returned a rejected promise, log the rejection
	      // error and resolve to null.
	      // Note: we don't rely on a `catch` method, but we do expect "thenable"
	      // to take a second callback for the error case.
	      return completed.then(undefined, function (error) {
	        exeContext.errors.push(error);
	        return _Promise.resolve(null);
	      });
	    }
	    return completed;
	  } catch (error) {
	    // If `completeValue` returned abruptly (threw an error), log the error
	    // and return null.
	    exeContext.errors.push(error);
	    return null;
	  }
	}

	/**
	 * Implements the instructions for completeValue as defined in the
	 * "Field entries" section of the spec.
	 *
	 * If the field type is Non-Null, then this recursively completes the value
	 * for the inner type. It throws a field error if that completion returns null,
	 * as per the "Nullability" section of the spec.
	 *
	 * If the field type is a List, then this recursively completes the value
	 * for the inner type on each item in the list.
	 *
	 * If the field type is a Scalar or Enum, ensures the completed value is a legal
	 * value of the type by calling the `serialize` method of GraphQL type
	 * definition.
	 *
	 * Otherwise, the field type expects a sub-selection set, and will complete the
	 * value by evaluating all sub-selections.
	 */
	function completeValue(exeContext, returnType, fieldASTs, info, result) {
	  // If result is a Promise, apply-lift over completeValue.
	  if (isThenable(result)) {
	    return result.then(
	    // Once resolved to a value, complete that value.
	    function (resolved) {
	      return completeValue(exeContext, returnType, fieldASTs, info, resolved);
	    },
	    // If rejected, create a located error, and continue to reject.
	    function (error) {
	      return _Promise.reject((0, _error.locatedError)(error, fieldASTs));
	    });
	  }

	  // If result is an Error, throw a located error.
	  if (result instanceof Error) {
	    throw (0, _error.locatedError)(result, fieldASTs);
	  }

	  // If field type is NonNull, complete for inner type, and throw field error
	  // if result is null.
	  if (returnType instanceof _typeDefinition.GraphQLNonNull) {
	    var completed = completeValue(exeContext, returnType.ofType, fieldASTs, info, result);
	    if (completed === null) {
	      throw new _error.GraphQLError('Cannot return null for non-nullable ' + ('field ' + info.parentType + '.' + info.fieldName + '.'), fieldASTs);
	    }
	    return completed;
	  }

	  // If result is null-like, return null.
	  if ((0, _jsutilsIsNullish2['default'])(result)) {
	    return null;
	  }

	  // If field type is List, complete each item in the list with the inner type
	  if (returnType instanceof _typeDefinition.GraphQLList) {
	    var _ret = (function () {
	      (0, _jsutilsInvariant2['default'])(Array.isArray(result), 'User Error: expected iterable, but did not find one ' + ('for field ' + info.parentType + '.' + info.fieldName + '.'));

	      // This is specified as a simple map, however we're optimizing the path
	      // where the list contains no Promises by avoiding creating another Promise.
	      var itemType = returnType.ofType;
	      var containsPromise = false;
	      var completedResults = result.map(function (item) {
	        var completedItem = completeValueCatchingError(exeContext, itemType, fieldASTs, info, item);
	        if (!containsPromise && isThenable(completedItem)) {
	          containsPromise = true;
	        }
	        return completedItem;
	      });

	      return {
	        v: containsPromise ? _Promise.all(completedResults) : completedResults
	      };
	    })();

	    if (typeof _ret === 'object') return _ret.v;
	  }

	  // If field type is Scalar or Enum, serialize to a valid value, returning
	  // null if serialization is not possible.
	  if (returnType instanceof _typeDefinition.GraphQLScalarType || returnType instanceof _typeDefinition.GraphQLEnumType) {
	    (0, _jsutilsInvariant2['default'])(returnType.serialize, 'Missing serialize method on type');
	    var serializedResult = returnType.serialize(result);
	    return (0, _jsutilsIsNullish2['default'])(serializedResult) ? null : serializedResult;
	  }

	  // Field type must be Object, Interface or Union and expect sub-selections.
	  var runtimeType = undefined;

	  if (returnType instanceof _typeDefinition.GraphQLObjectType) {
	    runtimeType = returnType;
	  } else if ((0, _typeDefinition.isAbstractType)(returnType)) {
	    var abstractType = returnType;
	    runtimeType = abstractType.getObjectType(result, info);
	    if (runtimeType && !abstractType.isPossibleType(runtimeType)) {
	      throw new _error.GraphQLError('Runtime Object type "' + runtimeType + '" is not a possible type ' + ('for "' + abstractType + '".'), fieldASTs);
	    }
	  }

	  if (!runtimeType) {
	    return null;
	  }

	  // If there is an isTypeOf predicate function, call it with the
	  // current result. If isTypeOf returns false, then raise an error rather
	  // than continuing execution.
	  if (runtimeType.isTypeOf && !runtimeType.isTypeOf(result, info)) {
	    throw new _error.GraphQLError('Expected value of type "' + runtimeType + '" but got: ' + result + '.', fieldASTs);
	  }

	  // Collect sub-fields to execute to complete this value.
	  var subFieldASTs = _Object$create(null);
	  var visitedFragmentNames = _Object$create(null);
	  for (var i = 0; i < fieldASTs.length; i++) {
	    var selectionSet = fieldASTs[i].selectionSet;
	    if (selectionSet) {
	      subFieldASTs = collectFields(exeContext, runtimeType, selectionSet, subFieldASTs, visitedFragmentNames);
	    }
	  }

	  return executeFields(exeContext, runtimeType, result, subFieldASTs);
	}

	/**
	 * If a resolve function is not given, then a default resolve behavior is used
	 * which takes the property of the source object of the same name as the field
	 * and returns it as the result, or if it's a function, returns the result
	 * of calling that function.
	 */
	function defaultResolveFn(source, args, _ref) {
	  var fieldName = _ref.fieldName;

	  // ensure source is a value for which property access is acceptable.
	  if (typeof source !== 'number' && typeof source !== 'string' && source) {
	    var property = source[fieldName];
	    return typeof property === 'function' ? property.call(source) : property;
	  }
	}

	/**
	 * Checks to see if this object acts like a Promise, i.e. has a "then"
	 * function.
	 */
	function isThenable(value) {
	  return typeof value === 'object' && value !== null && typeof value.then === 'function';
	}

	/**
	 * This method looks up the field on the given type defintion.
	 * It has special casing for the two introspection fields, __schema
	 * and __typename. __typename is special because it can always be
	 * queried as a field, even in situations where no other fields
	 * are allowed, like on a Union. __schema could get automatically
	 * added to the query type, but that would require mutating type
	 * definitions, which would cause issues.
	 */
	function getFieldDef(schema, parentType, fieldName) {
	  if (fieldName === _typeIntrospection.SchemaMetaFieldDef.name && schema.getQueryType() === parentType) {
	    return _typeIntrospection.SchemaMetaFieldDef;
	  } else if (fieldName === _typeIntrospection.TypeMetaFieldDef.name && schema.getQueryType() === parentType) {
	    return _typeIntrospection.TypeMetaFieldDef;
	  } else if (fieldName === _typeIntrospection.TypeNameMetaFieldDef.name) {
	    return _typeIntrospection.TypeNameMetaFieldDef;
	  }
	  return parentType.getFields()[fieldName];
	}

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	/**
	 * Prepares an object map of variableValues of the correct type based on the
	 * provided variable definitions and arbitrary input. If the input cannot be
	 * parsed to match the variable definitions, a GraphQLError will be thrown.
	 */
	'use strict';

	var _Object$keys = __webpack_require__(1)['default'];

	var _interopRequireDefault = __webpack_require__(96)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.getVariableValues = getVariableValues;
	exports.getArgumentValues = getArgumentValues;

	var _error = __webpack_require__(67);

	var _jsutilsInvariant = __webpack_require__(97);

	var _jsutilsInvariant2 = _interopRequireDefault(_jsutilsInvariant);

	var _jsutilsIsNullish = __webpack_require__(116);

	var _jsutilsIsNullish2 = _interopRequireDefault(_jsutilsIsNullish);

	var _jsutilsKeyMap = __webpack_require__(117);

	var _jsutilsKeyMap2 = _interopRequireDefault(_jsutilsKeyMap);

	var _utilitiesTypeFromAST = __webpack_require__(125);

	var _utilitiesValueFromAST = __webpack_require__(162);

	var _utilitiesIsValidJSValue = __webpack_require__(163);

	var _languagePrinter = __webpack_require__(84);

	var _typeDefinition = __webpack_require__(110);

	function getVariableValues(schema, definitionASTs, inputs) {
	  return definitionASTs.reduce(function (values, defAST) {
	    var varName = defAST.variable.name.value;
	    values[varName] = getVariableValue(schema, defAST, inputs[varName]);
	    return values;
	  }, {});
	}

	/**
	 * Prepares an object map of argument values given a list of argument
	 * definitions and list of argument AST nodes.
	 */

	function getArgumentValues(argDefs, argASTs, variableValues) {
	  if (!argDefs || !argASTs) {
	    return {};
	  }
	  var argASTMap = (0, _jsutilsKeyMap2['default'])(argASTs, function (arg) {
	    return arg.name.value;
	  });
	  return argDefs.reduce(function (result, argDef) {
	    var name = argDef.name;
	    var valueAST = argASTMap[name] ? argASTMap[name].value : null;
	    var value = (0, _utilitiesValueFromAST.valueFromAST)(valueAST, argDef.type, variableValues);
	    if ((0, _jsutilsIsNullish2['default'])(value)) {
	      value = argDef.defaultValue;
	    }
	    if (!(0, _jsutilsIsNullish2['default'])(value)) {
	      result[name] = value;
	    }
	    return result;
	  }, {});
	}

	/**
	 * Given a variable definition, and any value of input, return a value which
	 * adheres to the variable definition, or throw an error.
	 */
	function getVariableValue(schema, definitionAST, input) {
	  var type = (0, _utilitiesTypeFromAST.typeFromAST)(schema, definitionAST.type);
	  var variable = definitionAST.variable;
	  if (!type || !(0, _typeDefinition.isInputType)(type)) {
	    throw new _error.GraphQLError('Variable "$' + variable.name.value + '" expected value of type ' + ('"' + (0, _languagePrinter.print)(definitionAST.type) + '" which cannot be used as an input type.'), [definitionAST]);
	  }
	  var inputType = type;
	  var errors = (0, _utilitiesIsValidJSValue.isValidJSValue)(input, inputType);
	  if (!errors.length) {
	    if ((0, _jsutilsIsNullish2['default'])(input)) {
	      var defaultValue = definitionAST.defaultValue;
	      if (defaultValue) {
	        return (0, _utilitiesValueFromAST.valueFromAST)(defaultValue, inputType);
	      }
	    }
	    return coerceValue(inputType, input);
	  }
	  if ((0, _jsutilsIsNullish2['default'])(input)) {
	    throw new _error.GraphQLError('Variable "$' + variable.name.value + '" of required type ' + ('"' + (0, _languagePrinter.print)(definitionAST.type) + '" was not provided.'), [definitionAST]);
	  }
	  var message = errors ? '\n' + errors.join('\n') : '';
	  throw new _error.GraphQLError('Variable "$' + variable.name.value + '" got invalid value ' + (JSON.stringify(input) + '.' + message), [definitionAST]);
	}

	/**
	 * Given a type and any value, return a runtime value coerced to match the type.
	 */
	function coerceValue(_x, _x2) {
	  var _again = true;

	  _function: while (_again) {
	    var type = _x,
	        value = _x2;
	    _value = _ret = _ret2 = parsed = undefined;
	    _again = false;

	    // Ensure flow knows that we treat function params as const.
	    var _value = value;

	    if (type instanceof _typeDefinition.GraphQLNonNull) {
	      // Note: we're not checking that the result of coerceValue is non-null.
	      // We only call this function after calling isValidJSValue.
	      _x = type.ofType;
	      _x2 = _value;
	      _again = true;
	      continue _function;
	    }

	    if ((0, _jsutilsIsNullish2['default'])(_value)) {
	      return null;
	    }

	    if (type instanceof _typeDefinition.GraphQLList) {
	      var _ret = (function () {
	        var itemType = type.ofType;
	        // TODO: support iterable input
	        if (Array.isArray(_value)) {
	          return {
	            v: _value.map(function (item) {
	              return coerceValue(itemType, item);
	            })
	          };
	        }
	        return {
	          v: [coerceValue(itemType, _value)]
	        };
	      })();

	      if (typeof _ret === 'object') return _ret.v;
	    }

	    if (type instanceof _typeDefinition.GraphQLInputObjectType) {
	      var _ret2 = (function () {
	        if (typeof _value !== 'object' || _value === null) {
	          return {
	            v: null
	          };
	        }
	        var fields = type.getFields();
	        return {
	          v: _Object$keys(fields).reduce(function (obj, fieldName) {
	            var field = fields[fieldName];
	            var fieldValue = coerceValue(field.type, _value[fieldName]);
	            if ((0, _jsutilsIsNullish2['default'])(fieldValue)) {
	              fieldValue = field.defaultValue;
	            }
	            if (!(0, _jsutilsIsNullish2['default'])(fieldValue)) {
	              obj[fieldName] = fieldValue;
	            }
	            return obj;
	          }, {})
	        };
	      })();

	      if (typeof _ret2 === 'object') return _ret2.v;
	    }

	    (0, _jsutilsInvariant2['default'])(type instanceof _typeDefinition.GraphQLScalarType || type instanceof _typeDefinition.GraphQLEnumType, 'Must be input type');

	    var parsed = type.parseValue(_value);
	    if (!(0, _jsutilsIsNullish2['default'])(parsed)) {
	      return parsed;
	    }
	  }
	}

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	/**
	 * Produces a JavaScript value given a GraphQL Value AST.
	 *
	 * A GraphQL type must be provided, which will be used to interpret different
	 * GraphQL Value literals.
	 *
	 * | GraphQL Value        | JSON Value    |
	 * | -------------------- | ------------- |
	 * | Input Object         | Object        |
	 * | List                 | Array         |
	 * | Boolean              | Boolean       |
	 * | String / Enum Value  | String        |
	 * | Int / Float          | Number        |
	 *
	 */
	'use strict';

	var _Object$keys = __webpack_require__(1)['default'];

	var _interopRequireDefault = __webpack_require__(96)['default'];

	var _interopRequireWildcard = __webpack_require__(80)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.valueFromAST = valueFromAST;

	var _jsutilsKeyMap = __webpack_require__(117);

	var _jsutilsKeyMap2 = _interopRequireDefault(_jsutilsKeyMap);

	var _jsutilsInvariant = __webpack_require__(97);

	var _jsutilsInvariant2 = _interopRequireDefault(_jsutilsInvariant);

	var _jsutilsIsNullish = __webpack_require__(116);

	var _jsutilsIsNullish2 = _interopRequireDefault(_jsutilsIsNullish);

	var _languageKinds = __webpack_require__(81);

	var Kind = _interopRequireWildcard(_languageKinds);

	var _typeDefinition = __webpack_require__(110);

	function valueFromAST(_x, _x2, _x3) {
	  var _again = true;

	  _function: while (_again) {
	    var valueAST = _x,
	        type = _x2,
	        variables = _x3;
	    variableName = _ret = _ret2 = parsed = undefined;
	    _again = false;

	    if (type instanceof _typeDefinition.GraphQLNonNull) {
	      // Note: we're not checking that the result of valueFromAST is non-null.
	      // We're assuming that this query has been validated and the value used
	      // here is of the correct type.
	      _x = valueAST;
	      _x2 = type.ofType;
	      _x3 = variables;
	      _again = true;
	      continue _function;
	    }

	    if (!valueAST) {
	      return null;
	    }

	    if (valueAST.kind === Kind.VARIABLE) {
	      var variableName = valueAST.name.value;
	      if (!variables || !variables.hasOwnProperty(variableName)) {
	        return null;
	      }
	      // Note: we're not doing any checking that this variable is correct. We're
	      // assuming that this query has been validated and the variable usage here
	      // is of the correct type.
	      return variables[variableName];
	    }

	    if (type instanceof _typeDefinition.GraphQLList) {
	      var _ret = (function () {
	        var itemType = type.ofType;
	        if (valueAST.kind === Kind.LIST) {
	          return {
	            v: valueAST.values.map(function (itemAST) {
	              return valueFromAST(itemAST, itemType, variables);
	            })
	          };
	        }
	        return {
	          v: [valueFromAST(valueAST, itemType, variables)]
	        };
	      })();

	      if (typeof _ret === 'object') return _ret.v;
	    }

	    if (type instanceof _typeDefinition.GraphQLInputObjectType) {
	      var _ret2 = (function () {
	        var fields = type.getFields();
	        if (valueAST.kind !== Kind.OBJECT) {
	          return {
	            v: null
	          };
	        }
	        var fieldASTs = (0, _jsutilsKeyMap2['default'])(valueAST.fields, function (field) {
	          return field.name.value;
	        });
	        return {
	          v: _Object$keys(fields).reduce(function (obj, fieldName) {
	            var field = fields[fieldName];
	            var fieldAST = fieldASTs[fieldName];
	            var fieldValue = valueFromAST(fieldAST && fieldAST.value, field.type, variables);
	            if ((0, _jsutilsIsNullish2['default'])(fieldValue)) {
	              fieldValue = field.defaultValue;
	            }
	            if (!(0, _jsutilsIsNullish2['default'])(fieldValue)) {
	              obj[fieldName] = fieldValue;
	            }
	            return obj;
	          }, {})
	        };
	      })();

	      if (typeof _ret2 === 'object') return _ret2.v;
	    }

	    (0, _jsutilsInvariant2['default'])(type instanceof _typeDefinition.GraphQLScalarType || type instanceof _typeDefinition.GraphQLEnumType, 'Must be input type');

	    var parsed = type.parseLiteral(valueAST);
	    if (!(0, _jsutilsIsNullish2['default'])(parsed)) {
	      return parsed;
	    }
	  }
	}

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	/**
	 * Given a JavaScript value and a GraphQL type, determine if the value will be
	 * accepted for that type. This is primarily useful for validating the
	 * runtime values of query variables.
	 */
	'use strict';

	var _toConsumableArray = __webpack_require__(147)['default'];

	var _getIterator = __webpack_require__(87)['default'];

	var _Object$keys = __webpack_require__(1)['default'];

	var _interopRequireDefault = __webpack_require__(96)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.isValidJSValue = isValidJSValue;

	var _jsutilsInvariant = __webpack_require__(97);

	var _jsutilsInvariant2 = _interopRequireDefault(_jsutilsInvariant);

	var _jsutilsIsNullish = __webpack_require__(116);

	var _jsutilsIsNullish2 = _interopRequireDefault(_jsutilsIsNullish);

	var _typeDefinition = __webpack_require__(110);

	function isValidJSValue(_x, _x2) {
	  var _again = true;

	  _function: while (_again) {
	    var value = _x,
	        type = _x2;
	    _ret = fields = errors = _iteratorNormalCompletion = _didIteratorError = _iteratorError = _iteratorNormalCompletion2 = _didIteratorError2 = _iteratorError2 = parseResult = undefined;
	    _again = false;

	    // A value must be provided if the type is non-null.
	    if (type instanceof _typeDefinition.GraphQLNonNull) {
	      if ((0, _jsutilsIsNullish2['default'])(value)) {
	        if (type.ofType.name) {
	          return ['Expected "' + type.ofType.name + '!", found null.'];
	        }
	        return ['Expected non-null value, found null.'];
	      }
	      _x = value;
	      _x2 = type.ofType;
	      _again = true;
	      continue _function;
	    }

	    if ((0, _jsutilsIsNullish2['default'])(value)) {
	      return [];
	    }

	    // Lists accept a non-list value as a list of one.
	    if (type instanceof _typeDefinition.GraphQLList) {
	      var _ret = (function () {
	        var itemType = type.ofType;
	        if (Array.isArray(value)) {
	          return {
	            v: value.reduce(function (acc, item, index) {
	              var errors = isValidJSValue(item, itemType);
	              return acc.concat(errors.map(function (error) {
	                return 'In element #' + index + ': ' + error;
	              }));
	            }, [])
	          };
	        }
	        return {
	          v: isValidJSValue(value, itemType)
	        };
	      })();

	      if (typeof _ret === 'object') return _ret.v;
	    }

	    // Input objects check each defined field.
	    if (type instanceof _typeDefinition.GraphQLInputObjectType) {
	      if (typeof value !== 'object' || value === null) {
	        return ['Expected "' + type.name + '", found not an object.'];
	      }
	      var fields = type.getFields();

	      var errors = [];

	      // Ensure every provided field is defined.
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = _getIterator(_Object$keys(value)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var providedField = _step.value;

	          if (!fields[providedField]) {
	            errors.push('In field "' + providedField + '": Unknown field.');
	          }
	        }

	        // Ensure every defined field is valid.
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator['return']) {
	            _iterator['return']();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }

	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;

	      try {
	        var _loop = function () {
	          var fieldName = _step2.value;

	          var newErrors = isValidJSValue(value[fieldName], fields[fieldName].type);
	          errors.push.apply(errors, _toConsumableArray(newErrors.map(function (error) {
	            return 'In field "' + fieldName + '": ' + error;
	          })));
	        };

	        for (var _iterator2 = _getIterator(_Object$keys(fields)), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          _loop();
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2['return']) {
	            _iterator2['return']();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }

	      return errors;
	    }

	    (0, _jsutilsInvariant2['default'])(type instanceof _typeDefinition.GraphQLScalarType || type instanceof _typeDefinition.GraphQLEnumType, 'Must be input type');

	    // Scalar/Enum input checks to ensure the type can parse the value to
	    // a non-null value.
	    var parseResult = type.parseValue(value);
	    if ((0, _jsutilsIsNullish2['default'])(parseResult)) {
	      return ['Expected type "' + type.name + '", found ' + JSON.stringify(value) + '.'];
	    }

	    return [];
	  }
	}

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	// GraphQL Schema definition
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _schema = __webpack_require__(109);

	Object.defineProperty(exports, 'GraphQLSchema', {
	  enumerable: true,
	  get: function get() {
	    return _schema.GraphQLSchema;
	  }
	});

	var _definition = __webpack_require__(110);

	Object.defineProperty(exports, 'isType', {
	  enumerable: true,
	  get: function get() {
	    return _definition.isType;
	  }
	});
	Object.defineProperty(exports, 'isInputType', {
	  enumerable: true,
	  get: function get() {
	    return _definition.isInputType;
	  }
	});
	Object.defineProperty(exports, 'isOutputType', {
	  enumerable: true,
	  get: function get() {
	    return _definition.isOutputType;
	  }
	});
	Object.defineProperty(exports, 'isLeafType', {
	  enumerable: true,
	  get: function get() {
	    return _definition.isLeafType;
	  }
	});
	Object.defineProperty(exports, 'isCompositeType', {
	  enumerable: true,
	  get: function get() {
	    return _definition.isCompositeType;
	  }
	});
	Object.defineProperty(exports, 'isAbstractType', {
	  enumerable: true,
	  get: function get() {
	    return _definition.isAbstractType;
	  }
	});
	Object.defineProperty(exports, 'getNullableType', {
	  enumerable: true,
	  get: function get() {
	    return _definition.getNullableType;
	  }
	});
	Object.defineProperty(exports, 'getNamedType', {
	  enumerable: true,
	  get: function get() {
	    return _definition.getNamedType;
	  }
	});
	Object.defineProperty(exports, 'GraphQLScalarType', {
	  enumerable: true,
	  get: function get() {
	    return _definition.GraphQLScalarType;
	  }
	});
	Object.defineProperty(exports, 'GraphQLObjectType', {
	  enumerable: true,
	  get: function get() {
	    return _definition.GraphQLObjectType;
	  }
	});
	Object.defineProperty(exports, 'GraphQLInterfaceType', {
	  enumerable: true,
	  get: function get() {
	    return _definition.GraphQLInterfaceType;
	  }
	});
	Object.defineProperty(exports, 'GraphQLUnionType', {
	  enumerable: true,
	  get: function get() {
	    return _definition.GraphQLUnionType;
	  }
	});
	Object.defineProperty(exports, 'GraphQLEnumType', {
	  enumerable: true,
	  get: function get() {
	    return _definition.GraphQLEnumType;
	  }
	});
	Object.defineProperty(exports, 'GraphQLInputObjectType', {
	  enumerable: true,
	  get: function get() {
	    return _definition.GraphQLInputObjectType;
	  }
	});
	Object.defineProperty(exports, 'GraphQLList', {
	  enumerable: true,
	  get: function get() {
	    return _definition.GraphQLList;
	  }
	});
	Object.defineProperty(exports, 'GraphQLNonNull', {
	  enumerable: true,
	  get: function get() {
	    return _definition.GraphQLNonNull;
	  }
	});

	// Common built-in scalar instances.

	var _scalars = __webpack_require__(119);

	Object.defineProperty(exports, 'GraphQLInt', {
	  enumerable: true,
	  get: function get() {
	    return _scalars.GraphQLInt;
	  }
	});
	Object.defineProperty(exports, 'GraphQLFloat', {
	  enumerable: true,
	  get: function get() {
	    return _scalars.GraphQLFloat;
	  }
	});
	Object.defineProperty(exports, 'GraphQLString', {
	  enumerable: true,
	  get: function get() {
	    return _scalars.GraphQLString;
	  }
	});
	Object.defineProperty(exports, 'GraphQLBoolean', {
	  enumerable: true,
	  get: function get() {
	    return _scalars.GraphQLBoolean;
	  }
	});
	Object.defineProperty(exports, 'GraphQLID', {
	  enumerable: true,
	  get: function get() {
	    return _scalars.GraphQLID;
	  }
	});

	// Predicates

	// Un-modifiers

	// Definitions

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _execute = __webpack_require__(160);

	Object.defineProperty(exports, 'execute', {
	  enumerable: true,
	  get: function get() {
	    return _execute.execute;
	  }
	});

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _validate = __webpack_require__(98);

	Object.defineProperty(exports, 'validate', {
	  enumerable: true,
	  get: function get() {
	    return _validate.validate;
	  }
	});

	var _specifiedRules = __webpack_require__(126);

	Object.defineProperty(exports, 'specifiedRules', {
	  enumerable: true,
	  get: function get() {
	    return _specifiedRules.specifiedRules;
	  }
	});

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	// The GraphQL query recommended for a full schema introspection.
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _introspectionQuery = __webpack_require__(168);

	Object.defineProperty(exports, 'introspectionQuery', {
	  enumerable: true,
	  get: function get() {
	    return _introspectionQuery.introspectionQuery;
	  }
	});

	// Gets the target Operation from a Document

	var _getOperationAST = __webpack_require__(169);

	Object.defineProperty(exports, 'getOperationAST', {
	  enumerable: true,
	  get: function get() {
	    return _getOperationAST.getOperationAST;
	  }
	});

	// Build a GraphQLSchema from an introspection result.

	var _buildClientSchema = __webpack_require__(170);

	Object.defineProperty(exports, 'buildClientSchema', {
	  enumerable: true,
	  get: function get() {
	    return _buildClientSchema.buildClientSchema;
	  }
	});

	// Build a GraphQLSchema from a parsed GraphQL Schema language AST.

	var _buildASTSchema = __webpack_require__(172);

	Object.defineProperty(exports, 'buildASTSchema', {
	  enumerable: true,
	  get: function get() {
	    return _buildASTSchema.buildASTSchema;
	  }
	});

	// Extends an existing GraphQLSchema from a parsed GraphQL Schema language AST.

	var _extendSchema = __webpack_require__(173);

	Object.defineProperty(exports, 'extendSchema', {
	  enumerable: true,
	  get: function get() {
	    return _extendSchema.extendSchema;
	  }
	});

	// Print a GraphQLSchema to GraphQL Schema language.

	var _schemaPrinter = __webpack_require__(174);

	Object.defineProperty(exports, 'printSchema', {
	  enumerable: true,
	  get: function get() {
	    return _schemaPrinter.printSchema;
	  }
	});
	Object.defineProperty(exports, 'printIntrospectionSchema', {
	  enumerable: true,
	  get: function get() {
	    return _schemaPrinter.printIntrospectionSchema;
	  }
	});

	// Create a GraphQLType from a GraphQL language AST.

	var _typeFromAST = __webpack_require__(125);

	Object.defineProperty(exports, 'typeFromAST', {
	  enumerable: true,
	  get: function get() {
	    return _typeFromAST.typeFromAST;
	  }
	});

	// Create a JavaScript value from a GraphQL language AST.

	var _valueFromAST = __webpack_require__(162);

	Object.defineProperty(exports, 'valueFromAST', {
	  enumerable: true,
	  get: function get() {
	    return _valueFromAST.valueFromAST;
	  }
	});

	// Create a GraphQL language AST from a JavaScript value.

	var _astFromValue = __webpack_require__(121);

	Object.defineProperty(exports, 'astFromValue', {
	  enumerable: true,
	  get: function get() {
	    return _astFromValue.astFromValue;
	  }
	});

	// A helper to use within recursive-descent visitors which need to be aware of
	// the GraphQL type system.

	var _TypeInfo = __webpack_require__(124);

	Object.defineProperty(exports, 'TypeInfo', {
	  enumerable: true,
	  get: function get() {
	    return _TypeInfo.TypeInfo;
	  }
	});

	// Determine if JavaScript values adhere to a GraphQL type.

	var _isValidJSValue = __webpack_require__(163);

	Object.defineProperty(exports, 'isValidJSValue', {
	  enumerable: true,
	  get: function get() {
	    return _isValidJSValue.isValidJSValue;
	  }
	});

	// Determine if AST values adhere to a GraphQL type.

	var _isValidLiteralValue = __webpack_require__(146);

	Object.defineProperty(exports, 'isValidLiteralValue', {
	  enumerable: true,
	  get: function get() {
	    return _isValidLiteralValue.isValidLiteralValue;
	  }
	});

	// Concatenates multiple AST together.

	var _concatAST = __webpack_require__(175);

	Object.defineProperty(exports, 'concatAST', {
	  enumerable: true,
	  get: function get() {
	    return _concatAST.concatAST;
	  }
	});

	// Comparators for types

	var _typeComparators = __webpack_require__(123);

	Object.defineProperty(exports, 'isEqualType', {
	  enumerable: true,
	  get: function get() {
	    return _typeComparators.isEqualType;
	  }
	});
	Object.defineProperty(exports, 'isTypeSubTypeOf', {
	  enumerable: true,
	  get: function get() {
	    return _typeComparators.isTypeSubTypeOf;
	  }
	});
	Object.defineProperty(exports, 'doTypesOverlap', {
	  enumerable: true,
	  get: function get() {
	    return _typeComparators.doTypesOverlap;
	  }
	});

/***/ },
/* 168 */
/***/ function(module, exports) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var introspectionQuery = '\n  query IntrospectionQuery {\n    __schema {\n      queryType { name }\n      mutationType { name }\n      subscriptionType { name }\n      types {\n        ...FullType\n      }\n      directives {\n        name\n        description\n        args {\n          ...InputValue\n        }\n        onOperation\n        onFragment\n        onField\n      }\n    }\n  }\n\n  fragment FullType on __Type {\n    kind\n    name\n    description\n    fields(includeDeprecated: true) {\n      name\n      description\n      args {\n        ...InputValue\n      }\n      type {\n        ...TypeRef\n      }\n      isDeprecated\n      deprecationReason\n    }\n    inputFields {\n      ...InputValue\n    }\n    interfaces {\n      ...TypeRef\n    }\n    enumValues(includeDeprecated: true) {\n      name\n      description\n      isDeprecated\n      deprecationReason\n    }\n    possibleTypes {\n      ...TypeRef\n    }\n  }\n\n  fragment InputValue on __InputValue {\n    name\n    description\n    type { ...TypeRef }\n    defaultValue\n  }\n\n  fragment TypeRef on __Type {\n    kind\n    name\n    ofType {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n        }\n      }\n    }\n  }\n';

	exports.introspectionQuery = introspectionQuery;

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	/**
	 * Returns an operation AST given a document AST and optionally an operation
	 * name. If a name is not provided, an operation is only returned if only one is
	 * provided in the document.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.getOperationAST = getOperationAST;

	var _languageKinds = __webpack_require__(81);

	function getOperationAST(documentAST, operationName) {
	  var operation = null;
	  for (var i = 0; i < documentAST.definitions.length; i++) {
	    var definition = documentAST.definitions[i];
	    if (definition.kind === _languageKinds.OPERATION_DEFINITION) {
	      if (!operationName) {
	        // If no operation name was provided, only return an Operation if there
	        // is one defined in the document. Upon encountering the second, return
	        // null.
	        if (operation) {
	          return null;
	        }
	        operation = definition;
	      } else if (definition.name && definition.name.value === operationName) {
	        return definition;
	      }
	    }
	  }
	  return operation;
	}

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	/**
	 * Build a GraphQLSchema for use by client tools.
	 *
	 * Given the result of a client running the introspection query, creates and
	 * returns a GraphQLSchema instance which can be then used with all graphql-js
	 * tools, but cannot be used to execute a query, as introspection does not
	 * represent the "resolver", "parse" or "serialize" functions or any other
	 * server-internal mechanisms.
	 */
	'use strict';

	var _interopRequireDefault = __webpack_require__(96)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.buildClientSchema = buildClientSchema;

	var _jsutilsInvariant = __webpack_require__(97);

	var _jsutilsInvariant2 = _interopRequireDefault(_jsutilsInvariant);

	var _jsutilsKeyMap = __webpack_require__(117);

	var _jsutilsKeyMap2 = _interopRequireDefault(_jsutilsKeyMap);

	var _jsutilsKeyValMap = __webpack_require__(171);

	var _jsutilsKeyValMap2 = _interopRequireDefault(_jsutilsKeyValMap);

	var _valueFromAST = __webpack_require__(162);

	var _languageParser = __webpack_require__(66);

	var _typeSchema = __webpack_require__(109);

	var _typeDefinition = __webpack_require__(110);

	var _typeScalars = __webpack_require__(119);

	var _typeDirectives = __webpack_require__(118);

	var _typeIntrospection = __webpack_require__(120);

	function buildClientSchema(introspection) {

	  // Get the schema from the introspection result.
	  var schemaIntrospection = introspection.__schema;

	  // Converts the list of types into a keyMap based on the type names.
	  var typeIntrospectionMap = (0, _jsutilsKeyMap2['default'])(schemaIntrospection.types, function (type) {
	    return type.name;
	  });

	  // A cache to use to store the actual GraphQLType definition objects by name.
	  // Initialize to the GraphQL built in scalars. All functions below are inline
	  // so that this type def cache is within the scope of the closure.
	  var typeDefCache = {
	    String: _typeScalars.GraphQLString,
	    Int: _typeScalars.GraphQLInt,
	    Float: _typeScalars.GraphQLFloat,
	    Boolean: _typeScalars.GraphQLBoolean,
	    ID: _typeScalars.GraphQLID
	  };

	  // Given a type reference in introspection, return the GraphQLType instance.
	  // preferring cached instances before building new instances.
	  function getType(typeRef) {
	    if (typeRef.kind === _typeIntrospection.TypeKind.LIST) {
	      var itemRef = typeRef.ofType;
	      if (!itemRef) {
	        throw new Error('Decorated type deeper than introspection query.');
	      }
	      return new _typeDefinition.GraphQLList(getType(itemRef));
	    }
	    if (typeRef.kind === _typeIntrospection.TypeKind.NON_NULL) {
	      var nullableRef = typeRef.ofType;
	      if (!nullableRef) {
	        throw new Error('Decorated type deeper than introspection query.');
	      }
	      var nullableType = getType(nullableRef);
	      (0, _jsutilsInvariant2['default'])(!(nullableType instanceof _typeDefinition.GraphQLNonNull), 'No nesting nonnull.');
	      return new _typeDefinition.GraphQLNonNull(nullableType);
	    }
	    return getNamedType(typeRef.name);
	  }

	  function getNamedType(typeName) {
	    if (typeDefCache[typeName]) {
	      return typeDefCache[typeName];
	    }
	    var typeIntrospection = typeIntrospectionMap[typeName];
	    if (!typeIntrospection) {
	      throw new Error('Invalid or incomplete schema, unknown type: ' + typeName + '. Ensure ' + 'that a full introspection query is used in order to build a ' + 'client schema.');
	    }
	    var typeDef = buildType(typeIntrospection);
	    typeDefCache[typeName] = typeDef;
	    return typeDef;
	  }

	  function getInputType(typeRef) {
	    var type = getType(typeRef);
	    (0, _jsutilsInvariant2['default'])((0, _typeDefinition.isInputType)(type), 'Introspection must provide input type for arguments.');
	    return type;
	  }

	  function getOutputType(typeRef) {
	    var type = getType(typeRef);
	    (0, _jsutilsInvariant2['default'])((0, _typeDefinition.isOutputType)(type), 'Introspection must provide output type for fields.');
	    return type;
	  }

	  function getObjectType(typeRef) {
	    var type = getType(typeRef);
	    (0, _jsutilsInvariant2['default'])(type instanceof _typeDefinition.GraphQLObjectType, 'Introspection must provide object type for possibleTypes.');
	    return type;
	  }

	  function getInterfaceType(typeRef) {
	    var type = getType(typeRef);
	    (0, _jsutilsInvariant2['default'])(type instanceof _typeDefinition.GraphQLInterfaceType, 'Introspection must provide interface type for interfaces.');
	    return type;
	  }

	  // Given a type's introspection result, construct the correct
	  // GraphQLType instance.
	  function buildType(type) {
	    switch (type.kind) {
	      case _typeIntrospection.TypeKind.SCALAR:
	        return buildScalarDef(type);
	      case _typeIntrospection.TypeKind.OBJECT:
	        return buildObjectDef(type);
	      case _typeIntrospection.TypeKind.INTERFACE:
	        return buildInterfaceDef(type);
	      case _typeIntrospection.TypeKind.UNION:
	        return buildUnionDef(type);
	      case _typeIntrospection.TypeKind.ENUM:
	        return buildEnumDef(type);
	      case _typeIntrospection.TypeKind.INPUT_OBJECT:
	        return buildInputObjectDef(type);
	      default:
	        throw new Error('Invalid or incomplete schema, unknown kind: ' + type.kind + '. Ensure ' + 'that a full introspection query is used in order to build a ' + 'client schema.');
	    }
	  }

	  function buildScalarDef(scalarIntrospection) {
	    return new _typeDefinition.GraphQLScalarType({
	      name: scalarIntrospection.name,
	      description: scalarIntrospection.description,
	      serialize: function serialize() {
	        return null;
	      },
	      // Note: validation calls the parse functions to determine if a
	      // literal value is correct. Returning null would cause use of custom
	      // scalars to always fail validation. Returning false causes them to
	      // always pass validation.
	      parseValue: function parseValue() {
	        return false;
	      },
	      parseLiteral: function parseLiteral() {
	        return false;
	      }
	    });
	  }

	  function buildObjectDef(objectIntrospection) {
	    return new _typeDefinition.GraphQLObjectType({
	      name: objectIntrospection.name,
	      description: objectIntrospection.description,
	      interfaces: objectIntrospection.interfaces.map(getInterfaceType),
	      fields: function fields() {
	        return buildFieldDefMap(objectIntrospection);
	      }
	    });
	  }

	  function buildInterfaceDef(interfaceIntrospection) {
	    return new _typeDefinition.GraphQLInterfaceType({
	      name: interfaceIntrospection.name,
	      description: interfaceIntrospection.description,
	      fields: function fields() {
	        return buildFieldDefMap(interfaceIntrospection);
	      },
	      resolveType: function resolveType() {
	        throw new Error('Client Schema cannot be used for execution.');
	      }
	    });
	  }

	  function buildUnionDef(unionIntrospection) {
	    return new _typeDefinition.GraphQLUnionType({
	      name: unionIntrospection.name,
	      description: unionIntrospection.description,
	      types: unionIntrospection.possibleTypes.map(getObjectType),
	      resolveType: function resolveType() {
	        throw new Error('Client Schema cannot be used for execution.');
	      }
	    });
	  }

	  function buildEnumDef(enumIntrospection) {
	    return new _typeDefinition.GraphQLEnumType({
	      name: enumIntrospection.name,
	      description: enumIntrospection.description,
	      values: (0, _jsutilsKeyValMap2['default'])(enumIntrospection.enumValues, function (valueIntrospection) {
	        return valueIntrospection.name;
	      }, function (valueIntrospection) {
	        return {
	          description: valueIntrospection.description,
	          deprecationReason: valueIntrospection.deprecationReason
	        };
	      })
	    });
	  }

	  function buildInputObjectDef(inputObjectIntrospection) {
	    return new _typeDefinition.GraphQLInputObjectType({
	      name: inputObjectIntrospection.name,
	      description: inputObjectIntrospection.description,
	      fields: function fields() {
	        return buildInputValueDefMap(inputObjectIntrospection.inputFields);
	      }
	    });
	  }

	  function buildFieldDefMap(typeIntrospection) {
	    return (0, _jsutilsKeyValMap2['default'])(typeIntrospection.fields, function (fieldIntrospection) {
	      return fieldIntrospection.name;
	    }, function (fieldIntrospection) {
	      return {
	        description: fieldIntrospection.description,
	        deprecationReason: fieldIntrospection.deprecationReason,
	        type: getOutputType(fieldIntrospection.type),
	        args: buildInputValueDefMap(fieldIntrospection.args),
	        resolve: function resolve() {
	          throw new Error('Client Schema cannot be used for execution.');
	        }
	      };
	    });
	  }

	  function buildInputValueDefMap(inputValueIntrospections) {
	    return (0, _jsutilsKeyValMap2['default'])(inputValueIntrospections, function (inputValue) {
	      return inputValue.name;
	    }, buildInputValue);
	  }

	  function buildInputValue(inputValueIntrospection) {
	    var type = getInputType(inputValueIntrospection.type);
	    var defaultValue = inputValueIntrospection.defaultValue ? (0, _valueFromAST.valueFromAST)((0, _languageParser.parseValue)(inputValueIntrospection.defaultValue), type) : null;
	    return {
	      name: inputValueIntrospection.name,
	      description: inputValueIntrospection.description,
	      type: type,
	      defaultValue: defaultValue
	    };
	  }

	  function buildDirective(directiveIntrospection) {
	    return new _typeDirectives.GraphQLDirective({
	      name: directiveIntrospection.name,
	      description: directiveIntrospection.description,
	      args: directiveIntrospection.args.map(buildInputValue),
	      onOperation: directiveIntrospection.onOperation,
	      onFragment: directiveIntrospection.onFragment,
	      onField: directiveIntrospection.onField
	    });
	  }

	  // Iterate through all types, getting the type definition for each, ensuring
	  // that any type not directly referenced by a field will get created.
	  schemaIntrospection.types.forEach(function (typeIntrospection) {
	    return getNamedType(typeIntrospection.name);
	  });

	  // Get the root Query, Mutation, and Subscription types.
	  var queryType = getObjectType(schemaIntrospection.queryType);

	  var mutationType = schemaIntrospection.mutationType ? getObjectType(schemaIntrospection.mutationType) : null;

	  var subscriptionType = schemaIntrospection.subscriptionType ? getObjectType(schemaIntrospection.subscriptionType) : null;

	  // Get the directives supported by Introspection, assuming empty-set if
	  // directives were not queried for.
	  var directives = schemaIntrospection.directives ? schemaIntrospection.directives.map(buildDirective) : [];

	  // Then produce and return a Schema with these types.
	  return new _typeSchema.GraphQLSchema({
	    query: queryType,
	    mutation: mutationType,
	    subscription: subscriptionType,
	    directives: directives
	  });
	}

/***/ },
/* 171 */
/***/ function(module, exports) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	/**
	 * Creates a keyed JS object from an array, given a function to produce the keys
	 * and a function to produce the values from each item in the array.
	 *
	 *     const phoneBook = [
	 *       { name: 'Jon', num: '555-1234' },
	 *       { name: 'Jenny', num: '867-5309' }
	 *     ]
	 *
	 *     // { Jon: '555-1234', Jenny: '867-5309' }
	 *     const phonesByName = keyValMap(
	 *       phoneBook,
	 *       entry => entry.name,
	 *       entry => entry.num
	 *     )
	 *
	 */
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = keyValMap;

	function keyValMap(list, keyFn, valFn) {
	  return list.reduce(function (map, item) {
	    return (map[keyFn(item)] = valFn(item), map);
	  }, {});
	}

	module.exports = exports["default"];

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _interopRequireDefault = __webpack_require__(96)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.buildASTSchema = buildASTSchema;

	var _jsutilsInvariant = __webpack_require__(97);

	var _jsutilsInvariant2 = _interopRequireDefault(_jsutilsInvariant);

	var _jsutilsKeyMap = __webpack_require__(117);

	var _jsutilsKeyMap2 = _interopRequireDefault(_jsutilsKeyMap);

	var _jsutilsKeyValMap = __webpack_require__(171);

	var _jsutilsKeyValMap2 = _interopRequireDefault(_jsutilsKeyValMap);

	var _valueFromAST = __webpack_require__(162);

	var _languageKinds = __webpack_require__(81);

	var _type = __webpack_require__(164);

	function buildWrappedType(innerType, inputTypeAST) {
	  if (inputTypeAST.kind === _languageKinds.LIST_TYPE) {
	    return new _type.GraphQLList(buildWrappedType(innerType, inputTypeAST.type));
	  }
	  if (inputTypeAST.kind === _languageKinds.NON_NULL_TYPE) {
	    var wrappedType = buildWrappedType(innerType, inputTypeAST.type);
	    (0, _jsutilsInvariant2['default'])(!(wrappedType instanceof _type.GraphQLNonNull), 'No nesting nonnull.');
	    return new _type.GraphQLNonNull(wrappedType);
	  }
	  return innerType;
	}

	function getNamedTypeAST(typeAST) {
	  var namedType = typeAST;
	  while (namedType.kind === _languageKinds.LIST_TYPE || namedType.kind === _languageKinds.NON_NULL_TYPE) {
	    namedType = namedType.type;
	  }
	  return namedType;
	}

	/**
	 * This takes the ast of a schema document produced by parseSchema in
	 * src/language/schema/parser.js.
	 *
	 * Given that AST it constructs a GraphQLSchema. As constructed
	 * they are not particularly useful for non-introspection queries
	 * since they have no resolve methods.
	 */

	function buildASTSchema(ast, queryTypeName, mutationTypeName, subscriptionTypeName) {
	  if (!ast) {
	    throw new Error('must pass in ast');
	  }

	  if (!queryTypeName) {
	    throw new Error('must pass in query type');
	  }

	  var typeDefs = [];
	  for (var i = 0; i < ast.definitions.length; i++) {
	    var d = ast.definitions[i];
	    switch (d.kind) {
	      case _languageKinds.OBJECT_TYPE_DEFINITION:
	      case _languageKinds.INTERFACE_TYPE_DEFINITION:
	      case _languageKinds.ENUM_TYPE_DEFINITION:
	      case _languageKinds.UNION_TYPE_DEFINITION:
	      case _languageKinds.SCALAR_TYPE_DEFINITION:
	      case _languageKinds.INPUT_OBJECT_TYPE_DEFINITION:
	        typeDefs.push(d);
	    }
	  }

	  var astMap = (0, _jsutilsKeyMap2['default'])(typeDefs, function (d) {
	    return d.name.value;
	  });

	  if (!astMap[queryTypeName]) {
	    throw new Error('Specified query type ' + queryTypeName + ' not found in document.');
	  }

	  if (mutationTypeName && !astMap[mutationTypeName]) {
	    throw new Error('Specified mutation type ' + mutationTypeName + ' not found in document.');
	  }

	  if (subscriptionTypeName && !astMap[subscriptionTypeName]) {
	    throw new Error('Specified subscription type ' + subscriptionTypeName + ' not found in document.');
	  }

	  var innerTypeMap = {
	    String: _type.GraphQLString,
	    Int: _type.GraphQLInt,
	    Float: _type.GraphQLFloat,
	    Boolean: _type.GraphQLBoolean,
	    ID: _type.GraphQLID
	  };

	  typeDefs.forEach(function (def) {
	    return typeDefNamed(def.name.value);
	  });

	  return new _type.GraphQLSchema({
	    query: getObjectType(astMap[queryTypeName]),
	    mutation: mutationTypeName ? getObjectType(astMap[mutationTypeName]) : null,
	    subscription: subscriptionTypeName ? getObjectType(astMap[subscriptionTypeName]) : null
	  });

	  function getObjectType(typeAST) {
	    var type = typeDefNamed(typeAST.name.value);
	    (0, _jsutilsInvariant2['default'])(type instanceof _type.GraphQLObjectType, 'AST must provide object type.');
	    return type;
	  }

	  function produceTypeDef(typeAST) {
	    var typeName = getNamedTypeAST(typeAST).name.value;
	    var typeDef = typeDefNamed(typeName);
	    return buildWrappedType(typeDef, typeAST);
	  }

	  function typeDefNamed(typeName) {
	    if (innerTypeMap[typeName]) {
	      return innerTypeMap[typeName];
	    }

	    if (!astMap[typeName]) {
	      throw new Error('Type ' + typeName + ' not found in document');
	    }

	    var innerTypeDef = makeSchemaDef(astMap[typeName]);
	    if (!innerTypeDef) {
	      throw new Error('Nothing constructed for ' + typeName);
	    }
	    innerTypeMap[typeName] = innerTypeDef;
	    return innerTypeDef;
	  }

	  function makeSchemaDef(def) {
	    if (!def) {
	      throw new Error('def must be defined');
	    }
	    switch (def.kind) {
	      case _languageKinds.OBJECT_TYPE_DEFINITION:
	        return makeTypeDef(def);
	      case _languageKinds.INTERFACE_TYPE_DEFINITION:
	        return makeInterfaceDef(def);
	      case _languageKinds.ENUM_TYPE_DEFINITION:
	        return makeEnumDef(def);
	      case _languageKinds.UNION_TYPE_DEFINITION:
	        return makeUnionDef(def);
	      case _languageKinds.SCALAR_TYPE_DEFINITION:
	        return makeScalarDef(def);
	      case _languageKinds.INPUT_OBJECT_TYPE_DEFINITION:
	        return makeInputObjectDef(def);
	      default:
	        throw new Error(def.kind + ' not supported');
	    }
	  }

	  function makeTypeDef(def) {
	    var typeName = def.name.value;
	    var config = {
	      name: typeName,
	      fields: function fields() {
	        return makeFieldDefMap(def);
	      },
	      interfaces: function interfaces() {
	        return makeImplementedInterfaces(def);
	      }
	    };
	    return new _type.GraphQLObjectType(config);
	  }

	  function makeFieldDefMap(def) {
	    return (0, _jsutilsKeyValMap2['default'])(def.fields, function (field) {
	      return field.name.value;
	    }, function (field) {
	      return {
	        type: produceTypeDef(field.type),
	        args: makeInputValues(field.arguments)
	      };
	    });
	  }

	  function makeImplementedInterfaces(def) {
	    return def.interfaces.map(function (inter) {
	      return produceTypeDef(inter);
	    });
	  }

	  function makeInputValues(values) {
	    return (0, _jsutilsKeyValMap2['default'])(values, function (value) {
	      return value.name.value;
	    }, function (value) {
	      var type = produceTypeDef(value.type);
	      return { type: type, defaultValue: (0, _valueFromAST.valueFromAST)(value.defaultValue, type) };
	    });
	  }

	  function makeInterfaceDef(def) {
	    var typeName = def.name.value;
	    var config = {
	      name: typeName,
	      resolveType: function resolveType() {
	        return null;
	      },
	      fields: function fields() {
	        return makeFieldDefMap(def);
	      }
	    };
	    return new _type.GraphQLInterfaceType(config);
	  }

	  function makeEnumDef(def) {
	    var enumType = new _type.GraphQLEnumType({
	      name: def.name.value,
	      values: (0, _jsutilsKeyValMap2['default'])(def.values, function (v) {
	        return v.name.value;
	      }, function () {
	        return {};
	      })
	    });

	    return enumType;
	  }

	  function makeUnionDef(def) {
	    return new _type.GraphQLUnionType({
	      name: def.name.value,
	      resolveType: function resolveType() {
	        return null;
	      },
	      types: def.types.map(function (t) {
	        return produceTypeDef(t);
	      })
	    });
	  }

	  function makeScalarDef(def) {
	    return new _type.GraphQLScalarType({
	      name: def.name.value,
	      serialize: function serialize() {
	        return null;
	      },
	      // Note: validation calls the parse functions to determine if a
	      // literal value is correct. Returning null would cause use of custom
	      // scalars to always fail validation. Returning false causes them to
	      // always pass validation.
	      parseValue: function parseValue() {
	        return false;
	      },
	      parseLiteral: function parseLiteral() {
	        return false;
	      }
	    });
	  }

	  function makeInputObjectDef(def) {
	    return new _type.GraphQLInputObjectType({
	      name: def.name.value,
	      fields: function fields() {
	        return makeInputValues(def.fields);
	      }
	    });
	  }
	}

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	/**
	 * Produces a new schema given an existing schema and a document which may
	 * contain GraphQL type extensions and definitions. The original schema will
	 * remain unaltered.
	 *
	 * Because a schema represents a graph of references, a schema cannot be
	 * extended without effectively making an entire copy. We do not know until it's
	 * too late if subgraphs remain unchanged.
	 *
	 * This algorithm copies the provided schema, applying extensions while
	 * producing the copy. The original schema remains unaltered.
	 */
	'use strict';

	var _Object$keys = __webpack_require__(1)['default'];

	var _interopRequireDefault = __webpack_require__(96)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.extendSchema = extendSchema;

	var _jsutilsInvariant = __webpack_require__(97);

	var _jsutilsInvariant2 = _interopRequireDefault(_jsutilsInvariant);

	var _jsutilsKeyMap = __webpack_require__(117);

	var _jsutilsKeyMap2 = _interopRequireDefault(_jsutilsKeyMap);

	var _jsutilsKeyValMap = __webpack_require__(171);

	var _jsutilsKeyValMap2 = _interopRequireDefault(_jsutilsKeyValMap);

	var _valueFromAST = __webpack_require__(162);

	var _errorGraphQLError = __webpack_require__(68);

	var _typeSchema = __webpack_require__(109);

	var _typeDefinition = __webpack_require__(110);

	var _typeScalars = __webpack_require__(119);

	var _languageKinds = __webpack_require__(81);

	function extendSchema(schema, documentAST) {
	  (0, _jsutilsInvariant2['default'])(schema instanceof _typeSchema.GraphQLSchema, 'Must provide valid GraphQLSchema');

	  (0, _jsutilsInvariant2['default'])(documentAST && documentAST.kind === _languageKinds.DOCUMENT, 'Must provide valid Document AST');

	  // Collect the type definitions and extensions found in the document.
	  var typeDefinitionMap = {};
	  var typeExtensionsMap = {};

	  for (var i = 0; i < documentAST.definitions.length; i++) {
	    var def = documentAST.definitions[i];
	    switch (def.kind) {
	      case _languageKinds.OBJECT_TYPE_DEFINITION:
	      case _languageKinds.INTERFACE_TYPE_DEFINITION:
	      case _languageKinds.ENUM_TYPE_DEFINITION:
	      case _languageKinds.UNION_TYPE_DEFINITION:
	      case _languageKinds.SCALAR_TYPE_DEFINITION:
	      case _languageKinds.INPUT_OBJECT_TYPE_DEFINITION:
	        // Sanity check that none of the defined types conflict with the
	        // schema's existing types.
	        var typeName = def.name.value;
	        if (schema.getType(typeName)) {
	          throw new _errorGraphQLError.GraphQLError('Type "' + typeName + '" already exists in the schema. It cannot also ' + 'be defined in this type definition.', [def]);
	        }
	        typeDefinitionMap[typeName] = def;
	        break;
	      case _languageKinds.TYPE_EXTENSION_DEFINITION:
	        // Sanity check that this type extension exists within the
	        // schema's existing types.
	        var extendedTypeName = def.definition.name.value;
	        var existingType = schema.getType(extendedTypeName);
	        if (!existingType) {
	          throw new _errorGraphQLError.GraphQLError('Cannot extend type "' + extendedTypeName + '" because it does not ' + 'exist in the existing schema.', [def.definition]);
	        }
	        if (!(existingType instanceof _typeDefinition.GraphQLObjectType)) {
	          throw new _errorGraphQLError.GraphQLError('Cannot extend non-object type "' + extendedTypeName + '".', [def.definition]);
	        }
	        var extensions = typeExtensionsMap[extendedTypeName];
	        if (extensions) {
	          extensions.push(def);
	        } else {
	          extensions = [def];
	        }
	        typeExtensionsMap[extendedTypeName] = extensions;
	        break;
	    }
	  }

	  // If this document contains no new types, then return the same unmodified
	  // GraphQLSchema instance.
	  if (_Object$keys(typeExtensionsMap).length === 0 && _Object$keys(typeDefinitionMap).length === 0) {
	    return schema;
	  }

	  // A cache to use to store the actual GraphQLType definition objects by name.
	  // Initialize to the GraphQL built in scalars. All functions below are inline
	  // so that this type def cache is within the scope of the closure.
	  var typeDefCache = {
	    String: _typeScalars.GraphQLString,
	    Int: _typeScalars.GraphQLInt,
	    Float: _typeScalars.GraphQLFloat,
	    Boolean: _typeScalars.GraphQLBoolean,
	    ID: _typeScalars.GraphQLID
	  };

	  // Get the root Query, Mutation, and Subscription types.
	  var queryType = getTypeFromDef(schema.getQueryType());

	  var existingMutationType = schema.getMutationType();
	  var mutationType = existingMutationType ? getTypeFromDef(existingMutationType) : null;

	  var existingSubscriptionType = schema.getSubscriptionType();
	  var subscriptionType = existingSubscriptionType ? getTypeFromDef(existingSubscriptionType) : null;

	  // Iterate through all types, getting the type definition for each, ensuring
	  // that any type not directly referenced by a field will get created.
	  _Object$keys(schema.getTypeMap()).forEach(function (typeName) {
	    return getTypeFromDef(schema.getType(typeName));
	  });

	  // Do the same with new types.
	  _Object$keys(typeDefinitionMap).forEach(function (typeName) {
	    return getTypeFromAST(typeDefinitionMap[typeName]);
	  });

	  // Then produce and return a Schema with these types.
	  return new _typeSchema.GraphQLSchema({
	    query: queryType,
	    mutation: mutationType,
	    subscription: subscriptionType,
	    // Copy directives.
	    directives: schema.getDirectives()
	  });

	  // Below are functions used for producing this schema that have closed over
	  // this scope and have access to the schema, cache, and newly defined types.

	  function getTypeFromDef(typeDef) {
	    var type = _getNamedType(typeDef.name);
	    (0, _jsutilsInvariant2['default'])(type, 'Invalid schema');
	    return type;
	  }

	  function getTypeFromAST(astNode) {
	    var type = _getNamedType(astNode.name.value);
	    if (!type) {
	      throw new _errorGraphQLError.GraphQLError('Unknown type: "' + astNode.name.value + '". Ensure that this type exists ' + 'either in the original schema, or is added in a type definition.', [astNode]);
	    }
	    return type;
	  }

	  // Given a name, returns a type from either the existing schema or an
	  // added type.
	  function _getNamedType(typeName) {
	    var cachedTypeDef = typeDefCache[typeName];
	    if (cachedTypeDef) {
	      return cachedTypeDef;
	    }

	    var existingType = schema.getType(typeName);
	    if (existingType) {
	      var typeDef = extendType(existingType);
	      typeDefCache[typeName] = typeDef;
	      return typeDef;
	    }

	    var typeAST = typeDefinitionMap[typeName];
	    if (typeAST) {
	      var typeDef = buildType(typeAST);
	      typeDefCache[typeName] = typeDef;
	      return typeDef;
	    }
	  }

	  // Given a type's introspection result, construct the correct
	  // GraphQLType instance.
	  function extendType(type) {
	    if (type instanceof _typeDefinition.GraphQLObjectType) {
	      return extendObjectType(type);
	    }
	    if (type instanceof _typeDefinition.GraphQLInterfaceType) {
	      return extendInterfaceType(type);
	    }
	    if (type instanceof _typeDefinition.GraphQLUnionType) {
	      return extendUnionType(type);
	    }
	    return type;
	  }

	  function extendObjectType(type) {
	    return new _typeDefinition.GraphQLObjectType({
	      name: type.name,
	      description: type.description,
	      interfaces: function interfaces() {
	        return extendImplementedInterfaces(type);
	      },
	      fields: function fields() {
	        return extendFieldMap(type);
	      }
	    });
	  }

	  function extendInterfaceType(type) {
	    return new _typeDefinition.GraphQLInterfaceType({
	      name: type.name,
	      description: type.description,
	      fields: function fields() {
	        return extendFieldMap(type);
	      },
	      resolveType: throwClientSchemaExecutionError
	    });
	  }

	  function extendUnionType(type) {
	    return new _typeDefinition.GraphQLUnionType({
	      name: type.name,
	      description: type.description,
	      types: type.getPossibleTypes().map(getTypeFromDef),
	      resolveType: throwClientSchemaExecutionError
	    });
	  }

	  function extendImplementedInterfaces(type) {
	    var interfaces = type.getInterfaces().map(getTypeFromDef);

	    // If there are any extensions to the interfaces, apply those here.
	    var extensions = typeExtensionsMap[type.name];
	    if (extensions) {
	      extensions.forEach(function (extension) {
	        extension.definition.interfaces.forEach(function (namedType) {
	          var interfaceName = namedType.name.value;
	          if (interfaces.some(function (def) {
	            return def.name === interfaceName;
	          })) {
	            throw new _errorGraphQLError.GraphQLError('\'Type "' + type.name + '" already implements "' + interfaceName + '". ' + 'It cannot also be implemented in this type extension.', [namedType]);
	          }
	          interfaces.push(getTypeFromAST(namedType));
	        });
	      });
	    }

	    return interfaces;
	  }

	  function extendFieldMap(type) {
	    var newFieldMap = {};
	    var oldFieldMap = type.getFields();
	    _Object$keys(oldFieldMap).forEach(function (fieldName) {
	      var field = oldFieldMap[fieldName];
	      newFieldMap[fieldName] = {
	        description: field.description,
	        deprecationReason: field.deprecationReason,
	        type: extendFieldType(field.type),
	        args: (0, _jsutilsKeyMap2['default'])(field.args, function (arg) {
	          return arg.name;
	        }),
	        resolve: throwClientSchemaExecutionError
	      };
	    });

	    // If there are any extensions to the fields, apply those here.
	    var extensions = typeExtensionsMap[type.name];
	    if (extensions) {
	      extensions.forEach(function (extension) {
	        extension.definition.fields.forEach(function (field) {
	          var fieldName = field.name.value;
	          if (oldFieldMap[fieldName]) {
	            throw new _errorGraphQLError.GraphQLError('Field "' + type.name + '.' + fieldName + '" already exists in the ' + 'schema. It cannot also be defined in this type extension.', [field]);
	          }
	          newFieldMap[fieldName] = {
	            type: buildFieldType(field.type),
	            args: buildInputValues(field.arguments),
	            resolve: throwClientSchemaExecutionError
	          };
	        });
	      });
	    }

	    return newFieldMap;
	  }

	  function extendFieldType(type) {
	    if (type instanceof _typeDefinition.GraphQLList) {
	      return new _typeDefinition.GraphQLList(extendFieldType(type.ofType));
	    }
	    if (type instanceof _typeDefinition.GraphQLNonNull) {
	      return new _typeDefinition.GraphQLNonNull(extendFieldType(type.ofType));
	    }
	    return getTypeFromDef(type);
	  }

	  function buildType(typeAST) {
	    switch (typeAST.kind) {
	      case _languageKinds.OBJECT_TYPE_DEFINITION:
	        return buildObjectType(typeAST);
	      case _languageKinds.INTERFACE_TYPE_DEFINITION:
	        return buildInterfaceType(typeAST);
	      case _languageKinds.UNION_TYPE_DEFINITION:
	        return buildUnionType(typeAST);
	      case _languageKinds.SCALAR_TYPE_DEFINITION:
	        return buildScalarType(typeAST);
	      case _languageKinds.ENUM_TYPE_DEFINITION:
	        return buildEnumType(typeAST);
	      case _languageKinds.INPUT_OBJECT_TYPE_DEFINITION:
	        return buildInputObjectType(typeAST);
	    }
	  }

	  function buildObjectType(typeAST) {
	    return new _typeDefinition.GraphQLObjectType({
	      name: typeAST.name.value,
	      interfaces: function interfaces() {
	        return buildImplementedInterfaces(typeAST);
	      },
	      fields: function fields() {
	        return buildFieldMap(typeAST);
	      }
	    });
	  }

	  function buildInterfaceType(typeAST) {
	    return new _typeDefinition.GraphQLInterfaceType({
	      name: typeAST.name.value,
	      fields: function fields() {
	        return buildFieldMap(typeAST);
	      },
	      resolveType: throwClientSchemaExecutionError
	    });
	  }

	  function buildUnionType(typeAST) {
	    return new _typeDefinition.GraphQLUnionType({
	      name: typeAST.name.value,
	      types: typeAST.types.map(getTypeFromAST),
	      resolveType: throwClientSchemaExecutionError
	    });
	  }

	  function buildScalarType(typeAST) {
	    return new _typeDefinition.GraphQLScalarType({
	      name: typeAST.name.value,
	      serialize: function serialize() {
	        return null;
	      },
	      // Note: validation calls the parse functions to determine if a
	      // literal value is correct. Returning null would cause use of custom
	      // scalars to always fail validation. Returning false causes them to
	      // always pass validation.
	      parseValue: function parseValue() {
	        return false;
	      },
	      parseLiteral: function parseLiteral() {
	        return false;
	      }
	    });
	  }

	  function buildEnumType(typeAST) {
	    return new _typeDefinition.GraphQLEnumType({
	      name: typeAST.name.value,
	      values: (0, _jsutilsKeyValMap2['default'])(typeAST.values, function (v) {
	        return v.name.value;
	      }, function () {
	        return {};
	      })
	    });
	  }

	  function buildInputObjectType(typeAST) {
	    return new _typeDefinition.GraphQLInputObjectType({
	      name: typeAST.name.value,
	      fields: function fields() {
	        return buildInputValues(typeAST.fields);
	      }
	    });
	  }

	  function buildImplementedInterfaces(typeAST) {
	    return typeAST.interfaces.map(getTypeFromAST);
	  }

	  function buildFieldMap(typeAST) {
	    return (0, _jsutilsKeyValMap2['default'])(typeAST.fields, function (field) {
	      return field.name.value;
	    }, function (field) {
	      return {
	        type: buildFieldType(field.type),
	        args: buildInputValues(field.arguments),
	        resolve: throwClientSchemaExecutionError
	      };
	    });
	  }

	  function buildInputValues(values) {
	    return (0, _jsutilsKeyValMap2['default'])(values, function (value) {
	      return value.name.value;
	    }, function (value) {
	      var type = buildFieldType(value.type);
	      return {
	        type: type,
	        defaultValue: (0, _valueFromAST.valueFromAST)(value.defaultValue, type)
	      };
	    });
	  }

	  function buildFieldType(typeAST) {
	    if (typeAST.kind === _languageKinds.LIST_TYPE) {
	      return new _typeDefinition.GraphQLList(buildFieldType(typeAST.type));
	    }
	    if (typeAST.kind === _languageKinds.NON_NULL_TYPE) {
	      return new _typeDefinition.GraphQLNonNull(buildFieldType(typeAST.type));
	    }
	    return getTypeFromAST(typeAST);
	  }
	}

	function throwClientSchemaExecutionError() {
	  throw new Error('Client Schema cannot be used for execution.');
	}

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$keys = __webpack_require__(1)['default'];

	var _interopRequireDefault = __webpack_require__(96)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.printSchema = printSchema;
	exports.printIntrospectionSchema = printIntrospectionSchema;

	var _jsutilsInvariant = __webpack_require__(97);

	var _jsutilsInvariant2 = _interopRequireDefault(_jsutilsInvariant);

	var _jsutilsIsNullish = __webpack_require__(116);

	var _jsutilsIsNullish2 = _interopRequireDefault(_jsutilsIsNullish);

	var _utilitiesAstFromValue = __webpack_require__(121);

	var _languagePrinter = __webpack_require__(84);

	var _typeDefinition = __webpack_require__(110);

	function printSchema(schema) {
	  return printFilteredSchema(schema, isDefinedType);
	}

	function printIntrospectionSchema(schema) {
	  return printFilteredSchema(schema, isIntrospectionType);
	}

	function isDefinedType(typename) {
	  return !isIntrospectionType(typename) && !isBuiltInScalar(typename);
	}

	function isIntrospectionType(typename) {
	  return typename.indexOf('__') === 0;
	}

	function isBuiltInScalar(typename) {
	  return typename === 'String' || typename === 'Boolean' || typename === 'Int' || typename === 'Float' || typename === 'ID';
	}

	function printFilteredSchema(schema, typeFilter) {
	  var typeMap = schema.getTypeMap();
	  var types = _Object$keys(typeMap).filter(typeFilter).sort(function (name1, name2) {
	    return name1.localeCompare(name2);
	  }).map(function (typeName) {
	    return typeMap[typeName];
	  });
	  return types.map(printType).join('\n\n') + '\n';
	}

	function printType(type) {
	  if (type instanceof _typeDefinition.GraphQLScalarType) {
	    return printScalar(type);
	  } else if (type instanceof _typeDefinition.GraphQLObjectType) {
	    return printObject(type);
	  } else if (type instanceof _typeDefinition.GraphQLInterfaceType) {
	    return printInterface(type);
	  } else if (type instanceof _typeDefinition.GraphQLUnionType) {
	    return printUnion(type);
	  } else if (type instanceof _typeDefinition.GraphQLEnumType) {
	    return printEnum(type);
	  }
	  (0, _jsutilsInvariant2['default'])(type instanceof _typeDefinition.GraphQLInputObjectType);
	  return printInputObject(type);
	}

	function printScalar(type) {
	  return 'scalar ' + type.name;
	}

	function printObject(type) {
	  var interfaces = type.getInterfaces();
	  var implementedInterfaces = interfaces.length ? ' implements ' + interfaces.map(function (i) {
	    return i.name;
	  }).join(', ') : '';
	  return 'type ' + type.name + implementedInterfaces + ' {\n' + printFields(type) + '\n' + '}';
	}

	function printInterface(type) {
	  return 'interface ' + type.name + ' {\n' + printFields(type) + '\n' + '}';
	}

	function printUnion(type) {
	  return 'union ' + type.name + ' = ' + type.getPossibleTypes().join(' | ');
	}

	function printEnum(type) {
	  var values = type.getValues();
	  return 'enum ' + type.name + ' {\n' + values.map(function (v) {
	    return '  ' + v.name;
	  }).join('\n') + '\n' + '}';
	}

	function printInputObject(type) {
	  var fieldMap = type.getFields();
	  var fields = _Object$keys(fieldMap).map(function (fieldName) {
	    return fieldMap[fieldName];
	  });
	  return 'input ' + type.name + ' {\n' + fields.map(function (f) {
	    return '  ' + printInputValue(f);
	  }).join('\n') + '\n' + '}';
	}

	function printFields(type) {
	  var fieldMap = type.getFields();
	  var fields = _Object$keys(fieldMap).map(function (fieldName) {
	    return fieldMap[fieldName];
	  });
	  return fields.map(function (f) {
	    return '  ' + f.name + printArgs(f) + ': ' + f.type;
	  }).join('\n');
	}

	function printArgs(field) {
	  if (field.args.length === 0) {
	    return '';
	  }
	  return '(' + field.args.map(printInputValue).join(', ') + ')';
	}

	function printInputValue(arg) {
	  var argDecl = arg.name + ': ' + arg.type;
	  if (!(0, _jsutilsIsNullish2['default'])(arg.defaultValue)) {
	    argDecl += ' = ' + (0, _languagePrinter.print)((0, _utilitiesAstFromValue.astFromValue)(arg.defaultValue, arg.type));
	  }
	  return argDecl;
	}

/***/ },
/* 175 */
/***/ function(module, exports) {

	
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	/**
	 * Provided a collection of ASTs, presumably each from different files,
	 * concatenate the ASTs together into batched AST, useful for validating many
	 * GraphQL source files which together represent one conceptual application.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.concatAST = concatAST;

	function concatAST(asts) {
	  var batchDefinitions = [];
	  for (var i = 0; i < asts.length; i++) {
	    var definitions = asts[i].definitions;
	    for (var j = 0; j < definitions.length; j++) {
	      batchDefinitions.push(definitions[j]);
	    }
	  }
	  return {
	    kind: 'Document',
	    definitions: batchDefinitions
	  };
	}

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var _get = __webpack_require__(69)['default'];

	var _inherits = __webpack_require__(73)['default'];

	var _createClass = __webpack_require__(99)['default'];

	var _classCallCheck = __webpack_require__(65)['default'];

	var _interopRequireDefault = __webpack_require__(96)['default'];

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _marked = __webpack_require__(177);

	var _marked2 = _interopRequireDefault(_marked);

	var _graphql = __webpack_require__(14);

	module.exports = (function (_React$Component) {
	  _inherits(MiniGraphiQL, _React$Component);

	  // Lifecycle

	  function MiniGraphiQL(props) {
	    _classCallCheck(this, MiniGraphiQL);

	    _get(Object.getPrototypeOf(MiniGraphiQL.prototype), 'constructor', this).call(this);

	    // Initialize state
	    this.state = {
	      schema: props.schema,
	      query: props.query.replace(/^\s+/, ''),
	      values: props.values,
	      response: null
	    };

	    this._editorQueryID = 0;
	  }

	  _createClass(MiniGraphiQL, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'miniGraphiQL' },
	        _react2['default'].createElement(QueryEditor, {
	          schema: this.state.schema,
	          value: this.state.query,
	          onEdit: this._onEditQuery.bind(this),
	          runQuery: this._runEditorQuery.bind(this)
	        }),
	        _react2['default'].createElement(ResultViewer, { value: this.state.response })
	      );
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._runEditorQuery();
	    }

	    // Private methods

	  }, {
	    key: '_runEditorQuery',
	    value: function _runEditorQuery() {
	      var _this = this;

	      this._editorQueryID++;
	      var queryID = this._editorQueryID;

	      (0, _graphql.graphql)(this.state.schema, this.state.query, null, this.state.values).then(function (result) {
	        if (result.errors) {
	          result.errors = result.errors.map(_graphql.formatError);
	        }
	        if (queryID === _this._editorQueryID) {
	          _this.setState({ response: JSON.stringify(result, null, 2) });
	        }
	      })['catch'](function (error) {
	        if (queryID === _this._editorQueryID) {
	          _this.setState({ response: JSON.stringify(error, null, 2) });
	        }
	      });
	    }
	  }, {
	    key: '_onEditQuery',
	    value: function _onEditQuery(value) {
	      this.setState({ query: value });
	    }
	  }]);

	  return MiniGraphiQL;
	})(_react2['default'].Component);

	/**
	 * QueryEditor
	 *
	 * Maintains an instance of CodeMirror responsible for editing a GraphQL query.
	 *
	 * Props:
	 *
	 *   - schema: A GraphQLSchema instance enabling editor linting and hinting.
	 *   - value: The text of the editor.
	 *   - onEdit: A function called when the editor changes, given the edited text.
	 *
	 */

	var QueryEditor = (function (_React$Component2) {
	  _inherits(QueryEditor, _React$Component2);

	  function QueryEditor(props) {
	    _classCallCheck(this, QueryEditor);

	    _get(Object.getPrototypeOf(QueryEditor.prototype), 'constructor', this).call(this);

	    // Keep a cached version of the value, this cache will be updated when the
	    // editor is updated, which can later be used to protect the editor from
	    // unnecessary updates during the update lifecycle.
	    this.cachedValue = props.value || '';
	  }

	  /**
	   * ResultViewer
	   *
	   * Maintains an instance of CodeMirror for viewing a GraphQL response.
	   *
	   * Props:
	   *
	   *   - value: The text of the editor.
	   *
	   */

	  /**
	   * Public API for retrieving the CodeMirror instance from this
	   * React component.
	   */

	  _createClass(QueryEditor, [{
	    key: 'getCodeMirror',
	    value: function getCodeMirror() {
	      return this.editor;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      var CodeMirror = __webpack_require__(178);
	      __webpack_require__(179);
	      __webpack_require__(180);
	      __webpack_require__(181);
	      __webpack_require__(182);
	      __webpack_require__(183);
	      __webpack_require__(184);
	      __webpack_require__(186);
	      __webpack_require__(187);
	      __webpack_require__(188);

	      this.editor = CodeMirror(_react2['default'].findDOMNode(this), {
	        value: this.props.value || '',
	        viewportMargin: Infinity,
	        tabSize: 2,
	        mode: 'graphql',
	        theme: 'graphiql',
	        keyMap: 'sublime',
	        autoCloseBrackets: true,
	        matchBrackets: true,
	        showCursorWhenSelecting: true,
	        lint: {
	          schema: this.props.schema,
	          onUpdateLinting: this._didLint.bind(this)
	        },
	        hintOptions: {
	          schema: this.props.schema,
	          closeOnUnfocus: false,
	          completeSingle: false
	        },
	        extraKeys: {
	          'Cmd-Space': function CmdSpace() {
	            return _this2.editor.showHint({ completeSingle: true });
	          },
	          'Ctrl-Space': function CtrlSpace() {
	            return _this2.editor.showHint({ completeSingle: true });
	          },

	          // Editor improvements
	          'Ctrl-Left': 'goSubwordLeft',
	          'Ctrl-Right': 'goSubwordRight',
	          'Alt-Left': 'goGroupLeft',
	          'Alt-Right': 'goGroupRight'
	        }
	      });

	      this.editor.on('change', this._onEdit.bind(this));
	      this.editor.on('keyup', this._onKeyUp.bind(this));
	      this.editor.on('hasCompletion', this._onHasCompletion.bind(this));
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.editor = null;
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      // Ensure the changes caused by this update are not interpretted as
	      // user-input changes which could otherwise result in an infinite
	      // event loop.
	      this.ignoreChangeEvent = true;
	      if (this.props.schema !== prevProps.schema) {
	        this.editor.options.lint.schema = this.props.schema;
	        this.editor.options.hintOptions.schema = this.props.schema;
	        CodeMirror.signal(this.editor, 'change', this.editor);
	      }
	      if (this.props.value !== prevProps.value && this.props.value !== this.cachedValue) {
	        this.cachedValue = this.props.value;
	        this.editor.setValue(this.props.value);
	      }
	      this.ignoreChangeEvent = false;
	    }
	  }, {
	    key: '_didLint',
	    value: function _didLint(annotations) {
	      if (annotations.length === 0) {
	        this.props.runQuery();
	      }
	    }
	  }, {
	    key: '_onKeyUp',
	    value: function _onKeyUp(cm, event) {
	      var code = event.keyCode;
	      if (code >= 65 && code <= 90 || // letters
	      !event.shiftKey && code >= 48 && code <= 57 || // numbers
	      event.shiftKey && code === 189 || // underscore
	      event.shiftKey && code === 50 || // @
	      event.shiftKey && code === 57 // (
	      ) {
	          this.editor.execCommand('autocomplete');
	        }
	    }
	  }, {
	    key: '_onEdit',
	    value: function _onEdit() {
	      if (!this.ignoreChangeEvent) {
	        this.cachedValue = this.editor.getValue();
	        if (this.props.onEdit) {
	          this.props.onEdit(this.cachedValue);
	        }
	      }
	    }

	    /**
	     * Render a custom UI for CodeMirror's hint which includes additional info
	     * about the type and description for the selected context.
	     */
	  }, {
	    key: '_onHasCompletion',
	    value: function _onHasCompletion(cm, data) {
	      var _this3 = this;

	      var CodeMirror = __webpack_require__(178);
	      var wrapper;
	      var information;

	      // When a hint result is selected, we touch the UI.
	      CodeMirror.on(data, 'select', function (ctx, el) {
	        // Only the first time (usually when the hint UI is first displayed)
	        // do we create the wrapping node.
	        if (!wrapper) {
	          // Wrap the existing hint UI, so we have a place to put information.
	          var hintsUl = el.parentNode;
	          var container = hintsUl.parentNode;
	          wrapper = document.createElement('div');
	          container.appendChild(wrapper);

	          // CodeMirror vertically inverts the hint UI if there is not enough
	          // space below the cursor. Since this modified UI appends to the bottom
	          // of CodeMirror's existing UI, it could cover the cursor. This adjusts
	          // the positioning of the hint UI to accomodate.
	          var top = hintsUl.style.top;
	          var bottom = '';
	          var cursorTop = cm.cursorCoords().top;
	          if (parseInt(top, 10) < cursorTop) {
	            top = '';
	            bottom = window.innerHeight - cursorTop + 3 + 'px';
	          }

	          // Style the wrapper, remove positioning from hints. Note that usage
	          // of this option will need to specify CSS to remove some styles from
	          // the existing hint UI.
	          wrapper.className = 'CodeMirror-hints-wrapper';
	          wrapper.style.left = hintsUl.style.left;
	          wrapper.style.top = top;
	          wrapper.style.bottom = bottom;
	          hintsUl.style.left = '';
	          hintsUl.style.top = '';

	          // This "information" node will contain the additional info about the
	          // highlighted typeahead option.
	          information = document.createElement('div');
	          information.className = 'CodeMirror-hint-information';
	          if (bottom) {
	            wrapper.appendChild(information);
	            wrapper.appendChild(hintsUl);
	          } else {
	            wrapper.appendChild(hintsUl);
	            wrapper.appendChild(information);
	          }

	          // When CodeMirror attempts to remove the hint UI, we detect that it was
	          // removed from our wrapper and in turn remove the wrapper from the
	          // original container.
	          var onRemoveFn;
	          wrapper.addEventListener('DOMNodeRemoved', onRemoveFn = function (event) {
	            if (event.target === hintsUl) {
	              wrapper.removeEventListener('DOMNodeRemoved', onRemoveFn);
	              wrapper.parentNode.removeChild(wrapper);
	              wrapper = null;
	              information = null;
	              onRemoveFn = null;
	            }
	          });
	        }

	        // Now that the UI has been set up, add info to information.
	        var description = ctx.description ? (0, _marked2['default'])(ctx.description, { smartypants: true }) : 'Self descriptive.';
	        var type = ctx.type ? '<span class="infoType">' + String(ctx.type) + '</span>' : '';
	        information.innerHTML = '<div class="content">' + (description.slice(0, 3) === '<p>' ? '<p>' + type + description.slice(3) : type + description) + '</div>';

	        // Additional rendering?
	        var onHintInformationRender = _this3.props.onHintInformationRender;
	        if (onHintInformationRender) {
	          onHintInformationRender(information);
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement('div', { className: 'query-editor' });
	    }
	  }]);

	  return QueryEditor;
	})(_react2['default'].Component);

	var ResultViewer = (function (_React$Component3) {
	  _inherits(ResultViewer, _React$Component3);

	  function ResultViewer() {
	    _classCallCheck(this, ResultViewer);

	    _get(Object.getPrototypeOf(ResultViewer.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(ResultViewer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var CodeMirror = __webpack_require__(178);
	      __webpack_require__(189);

	      this.viewer = CodeMirror(_react2['default'].findDOMNode(this), {
	        value: this.props.value || '',
	        viewportMargin: Infinity,
	        readOnly: true,
	        theme: 'graphiql',
	        mode: {
	          name: 'javascript',
	          json: true
	        },
	        keyMap: 'sublime',
	        extraKeys: {
	          // Editor improvements
	          'Ctrl-Left': 'goSubwordLeft',
	          'Ctrl-Right': 'goSubwordRight',
	          'Alt-Left': 'goGroupLeft',
	          'Alt-Right': 'goGroupRight'
	        }
	      });
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.viewer = null;
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return this.props.value !== nextProps.value;
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.viewer.setValue(this.props.value || '');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement('div', { className: 'result-window' });
	    }
	  }]);

	  return ResultViewer;
	})(_react2['default'].Component);

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * marked - a markdown parser
	 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
	 * https://github.com/chjj/marked
	 */

	;(function() {

	/**
	 * Block-Level Grammar
	 */

	var block = {
	  newline: /^\n+/,
	  code: /^( {4}[^\n]+\n*)+/,
	  fences: noop,
	  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
	  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
	  nptable: noop,
	  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
	  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
	  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
	  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
	  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
	  table: noop,
	  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
	  text: /^[^\n]+/
	};

	block.bullet = /(?:[*+-]|\d+\.)/;
	block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
	block.item = replace(block.item, 'gm')
	  (/bull/g, block.bullet)
	  ();

	block.list = replace(block.list)
	  (/bull/g, block.bullet)
	  ('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
	  ('def', '\\n+(?=' + block.def.source + ')')
	  ();

	block.blockquote = replace(block.blockquote)
	  ('def', block.def)
	  ();

	block._tag = '(?!(?:'
	  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
	  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
	  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';

	block.html = replace(block.html)
	  ('comment', /<!--[\s\S]*?-->/)
	  ('closed', /<(tag)[\s\S]+?<\/\1>/)
	  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
	  (/tag/g, block._tag)
	  ();

	block.paragraph = replace(block.paragraph)
	  ('hr', block.hr)
	  ('heading', block.heading)
	  ('lheading', block.lheading)
	  ('blockquote', block.blockquote)
	  ('tag', '<' + block._tag)
	  ('def', block.def)
	  ();

	/**
	 * Normal Block Grammar
	 */

	block.normal = merge({}, block);

	/**
	 * GFM Block Grammar
	 */

	block.gfm = merge({}, block.normal, {
	  fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
	  paragraph: /^/,
	  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
	});

	block.gfm.paragraph = replace(block.paragraph)
	  ('(?!', '(?!'
	    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
	    + block.list.source.replace('\\1', '\\3') + '|')
	  ();

	/**
	 * GFM + Tables Block Grammar
	 */

	block.tables = merge({}, block.gfm, {
	  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
	  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
	});

	/**
	 * Block Lexer
	 */

	function Lexer(options) {
	  this.tokens = [];
	  this.tokens.links = {};
	  this.options = options || marked.defaults;
	  this.rules = block.normal;

	  if (this.options.gfm) {
	    if (this.options.tables) {
	      this.rules = block.tables;
	    } else {
	      this.rules = block.gfm;
	    }
	  }
	}

	/**
	 * Expose Block Rules
	 */

	Lexer.rules = block;

	/**
	 * Static Lex Method
	 */

	Lexer.lex = function(src, options) {
	  var lexer = new Lexer(options);
	  return lexer.lex(src);
	};

	/**
	 * Preprocessing
	 */

	Lexer.prototype.lex = function(src) {
	  src = src
	    .replace(/\r\n|\r/g, '\n')
	    .replace(/\t/g, '    ')
	    .replace(/\u00a0/g, ' ')
	    .replace(/\u2424/g, '\n');

	  return this.token(src, true);
	};

	/**
	 * Lexing
	 */

	Lexer.prototype.token = function(src, top, bq) {
	  var src = src.replace(/^ +$/gm, '')
	    , next
	    , loose
	    , cap
	    , bull
	    , b
	    , item
	    , space
	    , i
	    , l;

	  while (src) {
	    // newline
	    if (cap = this.rules.newline.exec(src)) {
	      src = src.substring(cap[0].length);
	      if (cap[0].length > 1) {
	        this.tokens.push({
	          type: 'space'
	        });
	      }
	    }

	    // code
	    if (cap = this.rules.code.exec(src)) {
	      src = src.substring(cap[0].length);
	      cap = cap[0].replace(/^ {4}/gm, '');
	      this.tokens.push({
	        type: 'code',
	        text: !this.options.pedantic
	          ? cap.replace(/\n+$/, '')
	          : cap
	      });
	      continue;
	    }

	    // fences (gfm)
	    if (cap = this.rules.fences.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'code',
	        lang: cap[2],
	        text: cap[3] || ''
	      });
	      continue;
	    }

	    // heading
	    if (cap = this.rules.heading.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'heading',
	        depth: cap[1].length,
	        text: cap[2]
	      });
	      continue;
	    }

	    // table no leading pipe (gfm)
	    if (top && (cap = this.rules.nptable.exec(src))) {
	      src = src.substring(cap[0].length);

	      item = {
	        type: 'table',
	        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	        cells: cap[3].replace(/\n$/, '').split('\n')
	      };

	      for (i = 0; i < item.align.length; i++) {
	        if (/^ *-+: *$/.test(item.align[i])) {
	          item.align[i] = 'right';
	        } else if (/^ *:-+: *$/.test(item.align[i])) {
	          item.align[i] = 'center';
	        } else if (/^ *:-+ *$/.test(item.align[i])) {
	          item.align[i] = 'left';
	        } else {
	          item.align[i] = null;
	        }
	      }

	      for (i = 0; i < item.cells.length; i++) {
	        item.cells[i] = item.cells[i].split(/ *\| */);
	      }

	      this.tokens.push(item);

	      continue;
	    }

	    // lheading
	    if (cap = this.rules.lheading.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'heading',
	        depth: cap[2] === '=' ? 1 : 2,
	        text: cap[1]
	      });
	      continue;
	    }

	    // hr
	    if (cap = this.rules.hr.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'hr'
	      });
	      continue;
	    }

	    // blockquote
	    if (cap = this.rules.blockquote.exec(src)) {
	      src = src.substring(cap[0].length);

	      this.tokens.push({
	        type: 'blockquote_start'
	      });

	      cap = cap[0].replace(/^ *> ?/gm, '');

	      // Pass `top` to keep the current
	      // "toplevel" state. This is exactly
	      // how markdown.pl works.
	      this.token(cap, top, true);

	      this.tokens.push({
	        type: 'blockquote_end'
	      });

	      continue;
	    }

	    // list
	    if (cap = this.rules.list.exec(src)) {
	      src = src.substring(cap[0].length);
	      bull = cap[2];

	      this.tokens.push({
	        type: 'list_start',
	        ordered: bull.length > 1
	      });

	      // Get each top-level item.
	      cap = cap[0].match(this.rules.item);

	      next = false;
	      l = cap.length;
	      i = 0;

	      for (; i < l; i++) {
	        item = cap[i];

	        // Remove the list item's bullet
	        // so it is seen as the next token.
	        space = item.length;
	        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

	        // Outdent whatever the
	        // list item contains. Hacky.
	        if (~item.indexOf('\n ')) {
	          space -= item.length;
	          item = !this.options.pedantic
	            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
	            : item.replace(/^ {1,4}/gm, '');
	        }

	        // Determine whether the next list item belongs here.
	        // Backpedal if it does not belong in this list.
	        if (this.options.smartLists && i !== l - 1) {
	          b = block.bullet.exec(cap[i + 1])[0];
	          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
	            src = cap.slice(i + 1).join('\n') + src;
	            i = l - 1;
	          }
	        }

	        // Determine whether item is loose or not.
	        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
	        // for discount behavior.
	        loose = next || /\n\n(?!\s*$)/.test(item);
	        if (i !== l - 1) {
	          next = item.charAt(item.length - 1) === '\n';
	          if (!loose) loose = next;
	        }

	        this.tokens.push({
	          type: loose
	            ? 'loose_item_start'
	            : 'list_item_start'
	        });

	        // Recurse.
	        this.token(item, false, bq);

	        this.tokens.push({
	          type: 'list_item_end'
	        });
	      }

	      this.tokens.push({
	        type: 'list_end'
	      });

	      continue;
	    }

	    // html
	    if (cap = this.rules.html.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: this.options.sanitize
	          ? 'paragraph'
	          : 'html',
	        pre: !this.options.sanitizer
	          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
	        text: cap[0]
	      });
	      continue;
	    }

	    // def
	    if ((!bq && top) && (cap = this.rules.def.exec(src))) {
	      src = src.substring(cap[0].length);
	      this.tokens.links[cap[1].toLowerCase()] = {
	        href: cap[2],
	        title: cap[3]
	      };
	      continue;
	    }

	    // table (gfm)
	    if (top && (cap = this.rules.table.exec(src))) {
	      src = src.substring(cap[0].length);

	      item = {
	        type: 'table',
	        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
	      };

	      for (i = 0; i < item.align.length; i++) {
	        if (/^ *-+: *$/.test(item.align[i])) {
	          item.align[i] = 'right';
	        } else if (/^ *:-+: *$/.test(item.align[i])) {
	          item.align[i] = 'center';
	        } else if (/^ *:-+ *$/.test(item.align[i])) {
	          item.align[i] = 'left';
	        } else {
	          item.align[i] = null;
	        }
	      }

	      for (i = 0; i < item.cells.length; i++) {
	        item.cells[i] = item.cells[i]
	          .replace(/^ *\| *| *\| *$/g, '')
	          .split(/ *\| */);
	      }

	      this.tokens.push(item);

	      continue;
	    }

	    // top-level paragraph
	    if (top && (cap = this.rules.paragraph.exec(src))) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'paragraph',
	        text: cap[1].charAt(cap[1].length - 1) === '\n'
	          ? cap[1].slice(0, -1)
	          : cap[1]
	      });
	      continue;
	    }

	    // text
	    if (cap = this.rules.text.exec(src)) {
	      // Top-level should never reach here.
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'text',
	        text: cap[0]
	      });
	      continue;
	    }

	    if (src) {
	      throw new
	        Error('Infinite loop on byte: ' + src.charCodeAt(0));
	    }
	  }

	  return this.tokens;
	};

	/**
	 * Inline-Level Grammar
	 */

	var inline = {
	  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
	  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
	  url: noop,
	  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
	  link: /^!?\[(inside)\]\(href\)/,
	  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
	  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
	  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
	  em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
	  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
	  br: /^ {2,}\n(?!\s*$)/,
	  del: noop,
	  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
	};

	inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
	inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

	inline.link = replace(inline.link)
	  ('inside', inline._inside)
	  ('href', inline._href)
	  ();

	inline.reflink = replace(inline.reflink)
	  ('inside', inline._inside)
	  ();

	/**
	 * Normal Inline Grammar
	 */

	inline.normal = merge({}, inline);

	/**
	 * Pedantic Inline Grammar
	 */

	inline.pedantic = merge({}, inline.normal, {
	  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
	  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
	});

	/**
	 * GFM Inline Grammar
	 */

	inline.gfm = merge({}, inline.normal, {
	  escape: replace(inline.escape)('])', '~|])')(),
	  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
	  del: /^~~(?=\S)([\s\S]*?\S)~~/,
	  text: replace(inline.text)
	    (']|', '~]|')
	    ('|', '|https?://|')
	    ()
	});

	/**
	 * GFM + Line Breaks Inline Grammar
	 */

	inline.breaks = merge({}, inline.gfm, {
	  br: replace(inline.br)('{2,}', '*')(),
	  text: replace(inline.gfm.text)('{2,}', '*')()
	});

	/**
	 * Inline Lexer & Compiler
	 */

	function InlineLexer(links, options) {
	  this.options = options || marked.defaults;
	  this.links = links;
	  this.rules = inline.normal;
	  this.renderer = this.options.renderer || new Renderer;
	  this.renderer.options = this.options;

	  if (!this.links) {
	    throw new
	      Error('Tokens array requires a `links` property.');
	  }

	  if (this.options.gfm) {
	    if (this.options.breaks) {
	      this.rules = inline.breaks;
	    } else {
	      this.rules = inline.gfm;
	    }
	  } else if (this.options.pedantic) {
	    this.rules = inline.pedantic;
	  }
	}

	/**
	 * Expose Inline Rules
	 */

	InlineLexer.rules = inline;

	/**
	 * Static Lexing/Compiling Method
	 */

	InlineLexer.output = function(src, links, options) {
	  var inline = new InlineLexer(links, options);
	  return inline.output(src);
	};

	/**
	 * Lexing/Compiling
	 */

	InlineLexer.prototype.output = function(src) {
	  var out = ''
	    , link
	    , text
	    , href
	    , cap;

	  while (src) {
	    // escape
	    if (cap = this.rules.escape.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += cap[1];
	      continue;
	    }

	    // autolink
	    if (cap = this.rules.autolink.exec(src)) {
	      src = src.substring(cap[0].length);
	      if (cap[2] === '@') {
	        text = cap[1].charAt(6) === ':'
	          ? this.mangle(cap[1].substring(7))
	          : this.mangle(cap[1]);
	        href = this.mangle('mailto:') + text;
	      } else {
	        text = escape(cap[1]);
	        href = text;
	      }
	      out += this.renderer.link(href, null, text);
	      continue;
	    }

	    // url (gfm)
	    if (!this.inLink && (cap = this.rules.url.exec(src))) {
	      src = src.substring(cap[0].length);
	      text = escape(cap[1]);
	      href = text;
	      out += this.renderer.link(href, null, text);
	      continue;
	    }

	    // tag
	    if (cap = this.rules.tag.exec(src)) {
	      if (!this.inLink && /^<a /i.test(cap[0])) {
	        this.inLink = true;
	      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
	        this.inLink = false;
	      }
	      src = src.substring(cap[0].length);
	      out += this.options.sanitize
	        ? this.options.sanitizer
	          ? this.options.sanitizer(cap[0])
	          : escape(cap[0])
	        : cap[0]
	      continue;
	    }

	    // link
	    if (cap = this.rules.link.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.inLink = true;
	      out += this.outputLink(cap, {
	        href: cap[2],
	        title: cap[3]
	      });
	      this.inLink = false;
	      continue;
	    }

	    // reflink, nolink
	    if ((cap = this.rules.reflink.exec(src))
	        || (cap = this.rules.nolink.exec(src))) {
	      src = src.substring(cap[0].length);
	      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
	      link = this.links[link.toLowerCase()];
	      if (!link || !link.href) {
	        out += cap[0].charAt(0);
	        src = cap[0].substring(1) + src;
	        continue;
	      }
	      this.inLink = true;
	      out += this.outputLink(cap, link);
	      this.inLink = false;
	      continue;
	    }

	    // strong
	    if (cap = this.rules.strong.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.strong(this.output(cap[2] || cap[1]));
	      continue;
	    }

	    // em
	    if (cap = this.rules.em.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.em(this.output(cap[2] || cap[1]));
	      continue;
	    }

	    // code
	    if (cap = this.rules.code.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.codespan(escape(cap[2], true));
	      continue;
	    }

	    // br
	    if (cap = this.rules.br.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.br();
	      continue;
	    }

	    // del (gfm)
	    if (cap = this.rules.del.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.del(this.output(cap[1]));
	      continue;
	    }

	    // text
	    if (cap = this.rules.text.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.text(escape(this.smartypants(cap[0])));
	      continue;
	    }

	    if (src) {
	      throw new
	        Error('Infinite loop on byte: ' + src.charCodeAt(0));
	    }
	  }

	  return out;
	};

	/**
	 * Compile Link
	 */

	InlineLexer.prototype.outputLink = function(cap, link) {
	  var href = escape(link.href)
	    , title = link.title ? escape(link.title) : null;

	  return cap[0].charAt(0) !== '!'
	    ? this.renderer.link(href, title, this.output(cap[1]))
	    : this.renderer.image(href, title, escape(cap[1]));
	};

	/**
	 * Smartypants Transformations
	 */

	InlineLexer.prototype.smartypants = function(text) {
	  if (!this.options.smartypants) return text;
	  return text
	    // em-dashes
	    .replace(/---/g, '\u2014')
	    // en-dashes
	    .replace(/--/g, '\u2013')
	    // opening singles
	    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
	    // closing singles & apostrophes
	    .replace(/'/g, '\u2019')
	    // opening doubles
	    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
	    // closing doubles
	    .replace(/"/g, '\u201d')
	    // ellipses
	    .replace(/\.{3}/g, '\u2026');
	};

	/**
	 * Mangle Links
	 */

	InlineLexer.prototype.mangle = function(text) {
	  if (!this.options.mangle) return text;
	  var out = ''
	    , l = text.length
	    , i = 0
	    , ch;

	  for (; i < l; i++) {
	    ch = text.charCodeAt(i);
	    if (Math.random() > 0.5) {
	      ch = 'x' + ch.toString(16);
	    }
	    out += '&#' + ch + ';';
	  }

	  return out;
	};

	/**
	 * Renderer
	 */

	function Renderer(options) {
	  this.options = options || {};
	}

	Renderer.prototype.code = function(code, lang, escaped) {
	  if (this.options.highlight) {
	    var out = this.options.highlight(code, lang);
	    if (out != null && out !== code) {
	      escaped = true;
	      code = out;
	    }
	  }

	  if (!lang) {
	    return '<pre><code>'
	      + (escaped ? code : escape(code, true))
	      + '\n</code></pre>';
	  }

	  return '<pre><code class="'
	    + this.options.langPrefix
	    + escape(lang, true)
	    + '">'
	    + (escaped ? code : escape(code, true))
	    + '\n</code></pre>\n';
	};

	Renderer.prototype.blockquote = function(quote) {
	  return '<blockquote>\n' + quote + '</blockquote>\n';
	};

	Renderer.prototype.html = function(html) {
	  return html;
	};

	Renderer.prototype.heading = function(text, level, raw) {
	  return '<h'
	    + level
	    + ' id="'
	    + this.options.headerPrefix
	    + raw.toLowerCase().replace(/[^\w]+/g, '-')
	    + '">'
	    + text
	    + '</h'
	    + level
	    + '>\n';
	};

	Renderer.prototype.hr = function() {
	  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
	};

	Renderer.prototype.list = function(body, ordered) {
	  var type = ordered ? 'ol' : 'ul';
	  return '<' + type + '>\n' + body + '</' + type + '>\n';
	};

	Renderer.prototype.listitem = function(text) {
	  return '<li>' + text + '</li>\n';
	};

	Renderer.prototype.paragraph = function(text) {
	  return '<p>' + text + '</p>\n';
	};

	Renderer.prototype.table = function(header, body) {
	  return '<table>\n'
	    + '<thead>\n'
	    + header
	    + '</thead>\n'
	    + '<tbody>\n'
	    + body
	    + '</tbody>\n'
	    + '</table>\n';
	};

	Renderer.prototype.tablerow = function(content) {
	  return '<tr>\n' + content + '</tr>\n';
	};

	Renderer.prototype.tablecell = function(content, flags) {
	  var type = flags.header ? 'th' : 'td';
	  var tag = flags.align
	    ? '<' + type + ' style="text-align:' + flags.align + '">'
	    : '<' + type + '>';
	  return tag + content + '</' + type + '>\n';
	};

	// span level renderer
	Renderer.prototype.strong = function(text) {
	  return '<strong>' + text + '</strong>';
	};

	Renderer.prototype.em = function(text) {
	  return '<em>' + text + '</em>';
	};

	Renderer.prototype.codespan = function(text) {
	  return '<code>' + text + '</code>';
	};

	Renderer.prototype.br = function() {
	  return this.options.xhtml ? '<br/>' : '<br>';
	};

	Renderer.prototype.del = function(text) {
	  return '<del>' + text + '</del>';
	};

	Renderer.prototype.link = function(href, title, text) {
	  if (this.options.sanitize) {
	    try {
	      var prot = decodeURIComponent(unescape(href))
	        .replace(/[^\w:]/g, '')
	        .toLowerCase();
	    } catch (e) {
	      return '';
	    }
	    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
	      return '';
	    }
	  }
	  var out = '<a href="' + href + '"';
	  if (title) {
	    out += ' title="' + title + '"';
	  }
	  out += '>' + text + '</a>';
	  return out;
	};

	Renderer.prototype.image = function(href, title, text) {
	  var out = '<img src="' + href + '" alt="' + text + '"';
	  if (title) {
	    out += ' title="' + title + '"';
	  }
	  out += this.options.xhtml ? '/>' : '>';
	  return out;
	};

	Renderer.prototype.text = function(text) {
	  return text;
	};

	/**
	 * Parsing & Compiling
	 */

	function Parser(options) {
	  this.tokens = [];
	  this.token = null;
	  this.options = options || marked.defaults;
	  this.options.renderer = this.options.renderer || new Renderer;
	  this.renderer = this.options.renderer;
	  this.renderer.options = this.options;
	}

	/**
	 * Static Parse Method
	 */

	Parser.parse = function(src, options, renderer) {
	  var parser = new Parser(options, renderer);
	  return parser.parse(src);
	};

	/**
	 * Parse Loop
	 */

	Parser.prototype.parse = function(src) {
	  this.inline = new InlineLexer(src.links, this.options, this.renderer);
	  this.tokens = src.reverse();

	  var out = '';
	  while (this.next()) {
	    out += this.tok();
	  }

	  return out;
	};

	/**
	 * Next Token
	 */

	Parser.prototype.next = function() {
	  return this.token = this.tokens.pop();
	};

	/**
	 * Preview Next Token
	 */

	Parser.prototype.peek = function() {
	  return this.tokens[this.tokens.length - 1] || 0;
	};

	/**
	 * Parse Text Tokens
	 */

	Parser.prototype.parseText = function() {
	  var body = this.token.text;

	  while (this.peek().type === 'text') {
	    body += '\n' + this.next().text;
	  }

	  return this.inline.output(body);
	};

	/**
	 * Parse Current Token
	 */

	Parser.prototype.tok = function() {
	  switch (this.token.type) {
	    case 'space': {
	      return '';
	    }
	    case 'hr': {
	      return this.renderer.hr();
	    }
	    case 'heading': {
	      return this.renderer.heading(
	        this.inline.output(this.token.text),
	        this.token.depth,
	        this.token.text);
	    }
	    case 'code': {
	      return this.renderer.code(this.token.text,
	        this.token.lang,
	        this.token.escaped);
	    }
	    case 'table': {
	      var header = ''
	        , body = ''
	        , i
	        , row
	        , cell
	        , flags
	        , j;

	      // header
	      cell = '';
	      for (i = 0; i < this.token.header.length; i++) {
	        flags = { header: true, align: this.token.align[i] };
	        cell += this.renderer.tablecell(
	          this.inline.output(this.token.header[i]),
	          { header: true, align: this.token.align[i] }
	        );
	      }
	      header += this.renderer.tablerow(cell);

	      for (i = 0; i < this.token.cells.length; i++) {
	        row = this.token.cells[i];

	        cell = '';
	        for (j = 0; j < row.length; j++) {
	          cell += this.renderer.tablecell(
	            this.inline.output(row[j]),
	            { header: false, align: this.token.align[j] }
	          );
	        }

	        body += this.renderer.tablerow(cell);
	      }
	      return this.renderer.table(header, body);
	    }
	    case 'blockquote_start': {
	      var body = '';

	      while (this.next().type !== 'blockquote_end') {
	        body += this.tok();
	      }

	      return this.renderer.blockquote(body);
	    }
	    case 'list_start': {
	      var body = ''
	        , ordered = this.token.ordered;

	      while (this.next().type !== 'list_end') {
	        body += this.tok();
	      }

	      return this.renderer.list(body, ordered);
	    }
	    case 'list_item_start': {
	      var body = '';

	      while (this.next().type !== 'list_item_end') {
	        body += this.token.type === 'text'
	          ? this.parseText()
	          : this.tok();
	      }

	      return this.renderer.listitem(body);
	    }
	    case 'loose_item_start': {
	      var body = '';

	      while (this.next().type !== 'list_item_end') {
	        body += this.tok();
	      }

	      return this.renderer.listitem(body);
	    }
	    case 'html': {
	      var html = !this.token.pre && !this.options.pedantic
	        ? this.inline.output(this.token.text)
	        : this.token.text;
	      return this.renderer.html(html);
	    }
	    case 'paragraph': {
	      return this.renderer.paragraph(this.inline.output(this.token.text));
	    }
	    case 'text': {
	      return this.renderer.paragraph(this.parseText());
	    }
	  }
	};

	/**
	 * Helpers
	 */

	function escape(html, encode) {
	  return html
	    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
	    .replace(/</g, '&lt;')
	    .replace(/>/g, '&gt;')
	    .replace(/"/g, '&quot;')
	    .replace(/'/g, '&#39;');
	}

	function unescape(html) {
	  return html.replace(/&([#\w]+);/g, function(_, n) {
	    n = n.toLowerCase();
	    if (n === 'colon') return ':';
	    if (n.charAt(0) === '#') {
	      return n.charAt(1) === 'x'
	        ? String.fromCharCode(parseInt(n.substring(2), 16))
	        : String.fromCharCode(+n.substring(1));
	    }
	    return '';
	  });
	}

	function replace(regex, opt) {
	  regex = regex.source;
	  opt = opt || '';
	  return function self(name, val) {
	    if (!name) return new RegExp(regex, opt);
	    val = val.source || val;
	    val = val.replace(/(^|[^\[])\^/g, '$1');
	    regex = regex.replace(name, val);
	    return self;
	  };
	}

	function noop() {}
	noop.exec = noop;

	function merge(obj) {
	  var i = 1
	    , target
	    , key;

	  for (; i < arguments.length; i++) {
	    target = arguments[i];
	    for (key in target) {
	      if (Object.prototype.hasOwnProperty.call(target, key)) {
	        obj[key] = target[key];
	      }
	    }
	  }

	  return obj;
	}


	/**
	 * Marked
	 */

	function marked(src, opt, callback) {
	  if (callback || typeof opt === 'function') {
	    if (!callback) {
	      callback = opt;
	      opt = null;
	    }

	    opt = merge({}, marked.defaults, opt || {});

	    var highlight = opt.highlight
	      , tokens
	      , pending
	      , i = 0;

	    try {
	      tokens = Lexer.lex(src, opt)
	    } catch (e) {
	      return callback(e);
	    }

	    pending = tokens.length;

	    var done = function(err) {
	      if (err) {
	        opt.highlight = highlight;
	        return callback(err);
	      }

	      var out;

	      try {
	        out = Parser.parse(tokens, opt);
	      } catch (e) {
	        err = e;
	      }

	      opt.highlight = highlight;

	      return err
	        ? callback(err)
	        : callback(null, out);
	    };

	    if (!highlight || highlight.length < 3) {
	      return done();
	    }

	    delete opt.highlight;

	    if (!pending) return done();

	    for (; i < tokens.length; i++) {
	      (function(token) {
	        if (token.type !== 'code') {
	          return --pending || done();
	        }
	        return highlight(token.text, token.lang, function(err, code) {
	          if (err) return done(err);
	          if (code == null || code === token.text) {
	            return --pending || done();
	          }
	          token.text = code;
	          token.escaped = true;
	          --pending || done();
	        });
	      })(tokens[i]);
	    }

	    return;
	  }
	  try {
	    if (opt) opt = merge({}, marked.defaults, opt);
	    return Parser.parse(Lexer.lex(src, opt), opt);
	  } catch (e) {
	    e.message += '\nPlease report this to https://github.com/chjj/marked.';
	    if ((opt || marked.defaults).silent) {
	      return '<p>An error occured:</p><pre>'
	        + escape(e.message + '', true)
	        + '</pre>';
	    }
	    throw e;
	  }
	}

	/**
	 * Options
	 */

	marked.options =
	marked.setOptions = function(opt) {
	  merge(marked.defaults, opt);
	  return marked;
	};

	marked.defaults = {
	  gfm: true,
	  tables: true,
	  breaks: false,
	  pedantic: false,
	  sanitize: false,
	  sanitizer: null,
	  mangle: true,
	  smartLists: false,
	  silent: false,
	  highlight: null,
	  langPrefix: 'lang-',
	  smartypants: false,
	  headerPrefix: '',
	  renderer: new Renderer,
	  xhtml: false
	};

	/**
	 * Expose
	 */

	marked.Parser = Parser;
	marked.parser = Parser.parse;

	marked.Renderer = Renderer;

	marked.Lexer = Lexer;
	marked.lexer = Lexer.lex;

	marked.InlineLexer = InlineLexer;
	marked.inlineLexer = InlineLexer.output;

	marked.parse = marked;

	if (true) {
	  module.exports = marked;
	} else if (typeof define === 'function' && define.amd) {
	  define(function() { return marked; });
	} else {
	  this.marked = marked;
	}

	}).call(function() {
	  return this || (typeof window !== 'undefined' ? window : global);
	}());

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	// This is CodeMirror (http://codemirror.net), a code editor
	// implemented in JavaScript on top of the browser's DOM.
	//
	// You can find some technical background for some of the code below
	// at http://marijnhaverbeke.nl/blog/#cm-internals .

	(function(mod) {
	  if (true) // CommonJS
	    module.exports = mod();
	  else if (typeof define == "function" && define.amd) // AMD
	    return define([], mod);
	  else // Plain browser env
	    (this || window).CodeMirror = mod();
	})(function() {
	  "use strict";

	  // BROWSER SNIFFING

	  // Kludges for bugs and behavior differences that can't be feature
	  // detected are enabled based on userAgent etc sniffing.
	  var userAgent = navigator.userAgent;
	  var platform = navigator.platform;

	  var gecko = /gecko\/\d/i.test(userAgent);
	  var ie_upto10 = /MSIE \d/.test(userAgent);
	  var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent);
	  var ie = ie_upto10 || ie_11up;
	  var ie_version = ie && (ie_upto10 ? document.documentMode || 6 : ie_11up[1]);
	  var webkit = /WebKit\//.test(userAgent);
	  var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(userAgent);
	  var chrome = /Chrome\//.test(userAgent);
	  var presto = /Opera\//.test(userAgent);
	  var safari = /Apple Computer/.test(navigator.vendor);
	  var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent);
	  var phantom = /PhantomJS/.test(userAgent);

	  var ios = /AppleWebKit/.test(userAgent) && /Mobile\/\w+/.test(userAgent);
	  // This is woefully incomplete. Suggestions for alternative methods welcome.
	  var mobile = ios || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent);
	  var mac = ios || /Mac/.test(platform);
	  var chromeOS = /\bCrOS\b/.test(userAgent);
	  var windows = /win/i.test(platform);

	  var presto_version = presto && userAgent.match(/Version\/(\d*\.\d*)/);
	  if (presto_version) presto_version = Number(presto_version[1]);
	  if (presto_version && presto_version >= 15) { presto = false; webkit = true; }
	  // Some browsers use the wrong event properties to signal cmd/ctrl on OS X
	  var flipCtrlCmd = mac && (qtwebkit || presto && (presto_version == null || presto_version < 12.11));
	  var captureRightClick = gecko || (ie && ie_version >= 9);

	  // Optimize some code when these features are not used.
	  var sawReadOnlySpans = false, sawCollapsedSpans = false;

	  // EDITOR CONSTRUCTOR

	  // A CodeMirror instance represents an editor. This is the object
	  // that user code is usually dealing with.

	  function CodeMirror(place, options) {
	    if (!(this instanceof CodeMirror)) return new CodeMirror(place, options);

	    this.options = options = options ? copyObj(options) : {};
	    // Determine effective options based on given values and defaults.
	    copyObj(defaults, options, false);
	    setGuttersForLineNumbers(options);

	    var doc = options.value;
	    if (typeof doc == "string") doc = new Doc(doc, options.mode, null, options.lineSeparator);
	    this.doc = doc;

	    var input = new CodeMirror.inputStyles[options.inputStyle](this);
	    var display = this.display = new Display(place, doc, input);
	    display.wrapper.CodeMirror = this;
	    updateGutters(this);
	    themeChanged(this);
	    if (options.lineWrapping)
	      this.display.wrapper.className += " CodeMirror-wrap";
	    if (options.autofocus && !mobile) display.input.focus();
	    initScrollbars(this);

	    this.state = {
	      keyMaps: [],  // stores maps added by addKeyMap
	      overlays: [], // highlighting overlays, as added by addOverlay
	      modeGen: 0,   // bumped when mode/overlay changes, used to invalidate highlighting info
	      overwrite: false,
	      delayingBlurEvent: false,
	      focused: false,
	      suppressEdits: false, // used to disable editing during key handlers when in readOnly mode
	      pasteIncoming: false, cutIncoming: false, // help recognize paste/cut edits in input.poll
	      selectingText: false,
	      draggingText: false,
	      highlight: new Delayed(), // stores highlight worker timeout
	      keySeq: null,  // Unfinished key sequence
	      specialChars: null
	    };

	    var cm = this;

	    // Override magic textarea content restore that IE sometimes does
	    // on our hidden textarea on reload
	    if (ie && ie_version < 11) setTimeout(function() { cm.display.input.reset(true); }, 20);

	    registerEventHandlers(this);
	    ensureGlobalHandlers();

	    startOperation(this);
	    this.curOp.forceUpdate = true;
	    attachDoc(this, doc);

	    if ((options.autofocus && !mobile) || cm.hasFocus())
	      setTimeout(bind(onFocus, this), 20);
	    else
	      onBlur(this);

	    for (var opt in optionHandlers) if (optionHandlers.hasOwnProperty(opt))
	      optionHandlers[opt](this, options[opt], Init);
	    maybeUpdateLineNumberWidth(this);
	    if (options.finishInit) options.finishInit(this);
	    for (var i = 0; i < initHooks.length; ++i) initHooks[i](this);
	    endOperation(this);
	    // Suppress optimizelegibility in Webkit, since it breaks text
	    // measuring on line wrapping boundaries.
	    if (webkit && options.lineWrapping &&
	        getComputedStyle(display.lineDiv).textRendering == "optimizelegibility")
	      display.lineDiv.style.textRendering = "auto";
	  }

	  // DISPLAY CONSTRUCTOR

	  // The display handles the DOM integration, both for input reading
	  // and content drawing. It holds references to DOM nodes and
	  // display-related state.

	  function Display(place, doc, input) {
	    var d = this;
	    this.input = input;

	    // Covers bottom-right square when both scrollbars are present.
	    d.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler");
	    d.scrollbarFiller.setAttribute("cm-not-content", "true");
	    // Covers bottom of gutter when coverGutterNextToScrollbar is on
	    // and h scrollbar is present.
	    d.gutterFiller = elt("div", null, "CodeMirror-gutter-filler");
	    d.gutterFiller.setAttribute("cm-not-content", "true");
	    // Will contain the actual code, positioned to cover the viewport.
	    d.lineDiv = elt("div", null, "CodeMirror-code");
	    // Elements are added to these to represent selection and cursors.
	    d.selectionDiv = elt("div", null, null, "position: relative; z-index: 1");
	    d.cursorDiv = elt("div", null, "CodeMirror-cursors");
	    // A visibility: hidden element used to find the size of things.
	    d.measure = elt("div", null, "CodeMirror-measure");
	    // When lines outside of the viewport are measured, they are drawn in this.
	    d.lineMeasure = elt("div", null, "CodeMirror-measure");
	    // Wraps everything that needs to exist inside the vertically-padded coordinate system
	    d.lineSpace = elt("div", [d.measure, d.lineMeasure, d.selectionDiv, d.cursorDiv, d.lineDiv],
	                      null, "position: relative; outline: none");
	    // Moved around its parent to cover visible view.
	    d.mover = elt("div", [elt("div", [d.lineSpace], "CodeMirror-lines")], null, "position: relative");
	    // Set to the height of the document, allowing scrolling.
	    d.sizer = elt("div", [d.mover], "CodeMirror-sizer");
	    d.sizerWidth = null;
	    // Behavior of elts with overflow: auto and padding is
	    // inconsistent across browsers. This is used to ensure the
	    // scrollable area is big enough.
	    d.heightForcer = elt("div", null, null, "position: absolute; height: " + scrollerGap + "px; width: 1px;");
	    // Will contain the gutters, if any.
	    d.gutters = elt("div", null, "CodeMirror-gutters");
	    d.lineGutter = null;
	    // Actual scrollable element.
	    d.scroller = elt("div", [d.sizer, d.heightForcer, d.gutters], "CodeMirror-scroll");
	    d.scroller.setAttribute("tabIndex", "-1");
	    // The element in which the editor lives.
	    d.wrapper = elt("div", [d.scrollbarFiller, d.gutterFiller, d.scroller], "CodeMirror");

	    // Work around IE7 z-index bug (not perfect, hence IE7 not really being supported)
	    if (ie && ie_version < 8) { d.gutters.style.zIndex = -1; d.scroller.style.paddingRight = 0; }
	    if (!webkit && !(gecko && mobile)) d.scroller.draggable = true;

	    if (place) {
	      if (place.appendChild) place.appendChild(d.wrapper);
	      else place(d.wrapper);
	    }

	    // Current rendered range (may be bigger than the view window).
	    d.viewFrom = d.viewTo = doc.first;
	    d.reportedViewFrom = d.reportedViewTo = doc.first;
	    // Information about the rendered lines.
	    d.view = [];
	    d.renderedView = null;
	    // Holds info about a single rendered line when it was rendered
	    // for measurement, while not in view.
	    d.externalMeasured = null;
	    // Empty space (in pixels) above the view
	    d.viewOffset = 0;
	    d.lastWrapHeight = d.lastWrapWidth = 0;
	    d.updateLineNumbers = null;

	    d.nativeBarWidth = d.barHeight = d.barWidth = 0;
	    d.scrollbarsClipped = false;

	    // Used to only resize the line number gutter when necessary (when
	    // the amount of lines crosses a boundary that makes its width change)
	    d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null;
	    // Set to true when a non-horizontal-scrolling line widget is
	    // added. As an optimization, line widget aligning is skipped when
	    // this is false.
	    d.alignWidgets = false;

	    d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;

	    // Tracks the maximum line length so that the horizontal scrollbar
	    // can be kept static when scrolling.
	    d.maxLine = null;
	    d.maxLineLength = 0;
	    d.maxLineChanged = false;

	    // Used for measuring wheel scrolling granularity
	    d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null;

	    // True when shift is held down.
	    d.shift = false;

	    // Used to track whether anything happened since the context menu
	    // was opened.
	    d.selForContextMenu = null;

	    d.activeTouch = null;

	    input.init(d);
	  }

	  // STATE UPDATES

	  // Used to get the editor into a consistent state again when options change.

	  function loadMode(cm) {
	    cm.doc.mode = CodeMirror.getMode(cm.options, cm.doc.modeOption);
	    resetModeState(cm);
	  }

	  function resetModeState(cm) {
	    cm.doc.iter(function(line) {
	      if (line.stateAfter) line.stateAfter = null;
	      if (line.styles) line.styles = null;
	    });
	    cm.doc.frontier = cm.doc.first;
	    startWorker(cm, 100);
	    cm.state.modeGen++;
	    if (cm.curOp) regChange(cm);
	  }

	  function wrappingChanged(cm) {
	    if (cm.options.lineWrapping) {
	      addClass(cm.display.wrapper, "CodeMirror-wrap");
	      cm.display.sizer.style.minWidth = "";
	      cm.display.sizerWidth = null;
	    } else {
	      rmClass(cm.display.wrapper, "CodeMirror-wrap");
	      findMaxLine(cm);
	    }
	    estimateLineHeights(cm);
	    regChange(cm);
	    clearCaches(cm);
	    setTimeout(function(){updateScrollbars(cm);}, 100);
	  }

	  // Returns a function that estimates the height of a line, to use as
	  // first approximation until the line becomes visible (and is thus
	  // properly measurable).
	  function estimateHeight(cm) {
	    var th = textHeight(cm.display), wrapping = cm.options.lineWrapping;
	    var perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3);
	    return function(line) {
	      if (lineIsHidden(cm.doc, line)) return 0;

	      var widgetsHeight = 0;
	      if (line.widgets) for (var i = 0; i < line.widgets.length; i++) {
	        if (line.widgets[i].height) widgetsHeight += line.widgets[i].height;
	      }

	      if (wrapping)
	        return widgetsHeight + (Math.ceil(line.text.length / perLine) || 1) * th;
	      else
	        return widgetsHeight + th;
	    };
	  }

	  function estimateLineHeights(cm) {
	    var doc = cm.doc, est = estimateHeight(cm);
	    doc.iter(function(line) {
	      var estHeight = est(line);
	      if (estHeight != line.height) updateLineHeight(line, estHeight);
	    });
	  }

	  function themeChanged(cm) {
	    cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
	      cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-");
	    clearCaches(cm);
	  }

	  function guttersChanged(cm) {
	    updateGutters(cm);
	    regChange(cm);
	    setTimeout(function(){alignHorizontally(cm);}, 20);
	  }

	  // Rebuild the gutter elements, ensure the margin to the left of the
	  // code matches their width.
	  function updateGutters(cm) {
	    var gutters = cm.display.gutters, specs = cm.options.gutters;
	    removeChildren(gutters);
	    for (var i = 0; i < specs.length; ++i) {
	      var gutterClass = specs[i];
	      var gElt = gutters.appendChild(elt("div", null, "CodeMirror-gutter " + gutterClass));
	      if (gutterClass == "CodeMirror-linenumbers") {
	        cm.display.lineGutter = gElt;
	        gElt.style.width = (cm.display.lineNumWidth || 1) + "px";
	      }
	    }
	    gutters.style.display = i ? "" : "none";
	    updateGutterSpace(cm);
	  }

	  function updateGutterSpace(cm) {
	    var width = cm.display.gutters.offsetWidth;
	    cm.display.sizer.style.marginLeft = width + "px";
	  }

	  // Compute the character length of a line, taking into account
	  // collapsed ranges (see markText) that might hide parts, and join
	  // other lines onto it.
	  function lineLength(line) {
	    if (line.height == 0) return 0;
	    var len = line.text.length, merged, cur = line;
	    while (merged = collapsedSpanAtStart(cur)) {
	      var found = merged.find(0, true);
	      cur = found.from.line;
	      len += found.from.ch - found.to.ch;
	    }
	    cur = line;
	    while (merged = collapsedSpanAtEnd(cur)) {
	      var found = merged.find(0, true);
	      len -= cur.text.length - found.from.ch;
	      cur = found.to.line;
	      len += cur.text.length - found.to.ch;
	    }
	    return len;
	  }

	  // Find the longest line in the document.
	  function findMaxLine(cm) {
	    var d = cm.display, doc = cm.doc;
	    d.maxLine = getLine(doc, doc.first);
	    d.maxLineLength = lineLength(d.maxLine);
	    d.maxLineChanged = true;
	    doc.iter(function(line) {
	      var len = lineLength(line);
	      if (len > d.maxLineLength) {
	        d.maxLineLength = len;
	        d.maxLine = line;
	      }
	    });
	  }

	  // Make sure the gutters options contains the element
	  // "CodeMirror-linenumbers" when the lineNumbers option is true.
	  function setGuttersForLineNumbers(options) {
	    var found = indexOf(options.gutters, "CodeMirror-linenumbers");
	    if (found == -1 && options.lineNumbers) {
	      options.gutters = options.gutters.concat(["CodeMirror-linenumbers"]);
	    } else if (found > -1 && !options.lineNumbers) {
	      options.gutters = options.gutters.slice(0);
	      options.gutters.splice(found, 1);
	    }
	  }

	  // SCROLLBARS

	  // Prepare DOM reads needed to update the scrollbars. Done in one
	  // shot to minimize update/measure roundtrips.
	  function measureForScrollbars(cm) {
	    var d = cm.display, gutterW = d.gutters.offsetWidth;
	    var docH = Math.round(cm.doc.height + paddingVert(cm.display));
	    return {
	      clientHeight: d.scroller.clientHeight,
	      viewHeight: d.wrapper.clientHeight,
	      scrollWidth: d.scroller.scrollWidth, clientWidth: d.scroller.clientWidth,
	      viewWidth: d.wrapper.clientWidth,
	      barLeft: cm.options.fixedGutter ? gutterW : 0,
	      docHeight: docH,
	      scrollHeight: docH + scrollGap(cm) + d.barHeight,
	      nativeBarWidth: d.nativeBarWidth,
	      gutterWidth: gutterW
	    };
	  }

	  function NativeScrollbars(place, scroll, cm) {
	    this.cm = cm;
	    var vert = this.vert = elt("div", [elt("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar");
	    var horiz = this.horiz = elt("div", [elt("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
	    place(vert); place(horiz);

	    on(vert, "scroll", function() {
	      if (vert.clientHeight) scroll(vert.scrollTop, "vertical");
	    });
	    on(horiz, "scroll", function() {
	      if (horiz.clientWidth) scroll(horiz.scrollLeft, "horizontal");
	    });

	    this.checkedZeroWidth = false;
	    // Need to set a minimum width to see the scrollbar on IE7 (but must not set it on IE8).
	    if (ie && ie_version < 8) this.horiz.style.minHeight = this.vert.style.minWidth = "18px";
	  }

	  NativeScrollbars.prototype = copyObj({
	    update: function(measure) {
	      var needsH = measure.scrollWidth > measure.clientWidth + 1;
	      var needsV = measure.scrollHeight > measure.clientHeight + 1;
	      var sWidth = measure.nativeBarWidth;

	      if (needsV) {
	        this.vert.style.display = "block";
	        this.vert.style.bottom = needsH ? sWidth + "px" : "0";
	        var totalHeight = measure.viewHeight - (needsH ? sWidth : 0);
	        // A bug in IE8 can cause this value to be negative, so guard it.
	        this.vert.firstChild.style.height =
	          Math.max(0, measure.scrollHeight - measure.clientHeight + totalHeight) + "px";
	      } else {
	        this.vert.style.display = "";
	        this.vert.firstChild.style.height = "0";
	      }

	      if (needsH) {
	        this.horiz.style.display = "block";
	        this.horiz.style.right = needsV ? sWidth + "px" : "0";
	        this.horiz.style.left = measure.barLeft + "px";
	        var totalWidth = measure.viewWidth - measure.barLeft - (needsV ? sWidth : 0);
	        this.horiz.firstChild.style.width =
	          (measure.scrollWidth - measure.clientWidth + totalWidth) + "px";
	      } else {
	        this.horiz.style.display = "";
	        this.horiz.firstChild.style.width = "0";
	      }

	      if (!this.checkedZeroWidth && measure.clientHeight > 0) {
	        if (sWidth == 0) this.zeroWidthHack();
	        this.checkedZeroWidth = true;
	      }

	      return {right: needsV ? sWidth : 0, bottom: needsH ? sWidth : 0};
	    },
	    setScrollLeft: function(pos) {
	      if (this.horiz.scrollLeft != pos) this.horiz.scrollLeft = pos;
	      if (this.disableHoriz) this.enableZeroWidthBar(this.horiz, this.disableHoriz);
	    },
	    setScrollTop: function(pos) {
	      if (this.vert.scrollTop != pos) this.vert.scrollTop = pos;
	      if (this.disableVert) this.enableZeroWidthBar(this.vert, this.disableVert);
	    },
	    zeroWidthHack: function() {
	      var w = mac && !mac_geMountainLion ? "12px" : "18px";
	      this.horiz.style.height = this.vert.style.width = w;
	      this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none";
	      this.disableHoriz = new Delayed;
	      this.disableVert = new Delayed;
	    },
	    enableZeroWidthBar: function(bar, delay) {
	      bar.style.pointerEvents = "auto";
	      function maybeDisable() {
	        // To find out whether the scrollbar is still visible, we
	        // check whether the element under the pixel in the bottom
	        // left corner of the scrollbar box is the scrollbar box
	        // itself (when the bar is still visible) or its filler child
	        // (when the bar is hidden). If it is still visible, we keep
	        // it enabled, if it's hidden, we disable pointer events.
	        var box = bar.getBoundingClientRect();
	        var elt = document.elementFromPoint(box.left + 1, box.bottom - 1);
	        if (elt != bar) bar.style.pointerEvents = "none";
	        else delay.set(1000, maybeDisable);
	      }
	      delay.set(1000, maybeDisable);
	    },
	    clear: function() {
	      var parent = this.horiz.parentNode;
	      parent.removeChild(this.horiz);
	      parent.removeChild(this.vert);
	    }
	  }, NativeScrollbars.prototype);

	  function NullScrollbars() {}

	  NullScrollbars.prototype = copyObj({
	    update: function() { return {bottom: 0, right: 0}; },
	    setScrollLeft: function() {},
	    setScrollTop: function() {},
	    clear: function() {}
	  }, NullScrollbars.prototype);

	  CodeMirror.scrollbarModel = {"native": NativeScrollbars, "null": NullScrollbars};

	  function initScrollbars(cm) {
	    if (cm.display.scrollbars) {
	      cm.display.scrollbars.clear();
	      if (cm.display.scrollbars.addClass)
	        rmClass(cm.display.wrapper, cm.display.scrollbars.addClass);
	    }

	    cm.display.scrollbars = new CodeMirror.scrollbarModel[cm.options.scrollbarStyle](function(node) {
	      cm.display.wrapper.insertBefore(node, cm.display.scrollbarFiller);
	      // Prevent clicks in the scrollbars from killing focus
	      on(node, "mousedown", function() {
	        if (cm.state.focused) setTimeout(function() { cm.display.input.focus(); }, 0);
	      });
	      node.setAttribute("cm-not-content", "true");
	    }, function(pos, axis) {
	      if (axis == "horizontal") setScrollLeft(cm, pos);
	      else setScrollTop(cm, pos);
	    }, cm);
	    if (cm.display.scrollbars.addClass)
	      addClass(cm.display.wrapper, cm.display.scrollbars.addClass);
	  }

	  function updateScrollbars(cm, measure) {
	    if (!measure) measure = measureForScrollbars(cm);
	    var startWidth = cm.display.barWidth, startHeight = cm.display.barHeight;
	    updateScrollbarsInner(cm, measure);
	    for (var i = 0; i < 4 && startWidth != cm.display.barWidth || startHeight != cm.display.barHeight; i++) {
	      if (startWidth != cm.display.barWidth && cm.options.lineWrapping)
	        updateHeightsInViewport(cm);
	      updateScrollbarsInner(cm, measureForScrollbars(cm));
	      startWidth = cm.display.barWidth; startHeight = cm.display.barHeight;
	    }
	  }

	  // Re-synchronize the fake scrollbars with the actual size of the
	  // content.
	  function updateScrollbarsInner(cm, measure) {
	    var d = cm.display;
	    var sizes = d.scrollbars.update(measure);

	    d.sizer.style.paddingRight = (d.barWidth = sizes.right) + "px";
	    d.sizer.style.paddingBottom = (d.barHeight = sizes.bottom) + "px";
	    d.heightForcer.style.borderBottom = sizes.bottom + "px solid transparent"

	    if (sizes.right && sizes.bottom) {
	      d.scrollbarFiller.style.display = "block";
	      d.scrollbarFiller.style.height = sizes.bottom + "px";
	      d.scrollbarFiller.style.width = sizes.right + "px";
	    } else d.scrollbarFiller.style.display = "";
	    if (sizes.bottom && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
	      d.gutterFiller.style.display = "block";
	      d.gutterFiller.style.height = sizes.bottom + "px";
	      d.gutterFiller.style.width = measure.gutterWidth + "px";
	    } else d.gutterFiller.style.display = "";
	  }

	  // Compute the lines that are visible in a given viewport (defaults
	  // the the current scroll position). viewport may contain top,
	  // height, and ensure (see op.scrollToPos) properties.
	  function visibleLines(display, doc, viewport) {
	    var top = viewport && viewport.top != null ? Math.max(0, viewport.top) : display.scroller.scrollTop;
	    top = Math.floor(top - paddingTop(display));
	    var bottom = viewport && viewport.bottom != null ? viewport.bottom : top + display.wrapper.clientHeight;

	    var from = lineAtHeight(doc, top), to = lineAtHeight(doc, bottom);
	    // Ensure is a {from: {line, ch}, to: {line, ch}} object, and
	    // forces those lines into the viewport (if possible).
	    if (viewport && viewport.ensure) {
	      var ensureFrom = viewport.ensure.from.line, ensureTo = viewport.ensure.to.line;
	      if (ensureFrom < from) {
	        from = ensureFrom;
	        to = lineAtHeight(doc, heightAtLine(getLine(doc, ensureFrom)) + display.wrapper.clientHeight);
	      } else if (Math.min(ensureTo, doc.lastLine()) >= to) {
	        from = lineAtHeight(doc, heightAtLine(getLine(doc, ensureTo)) - display.wrapper.clientHeight);
	        to = ensureTo;
	      }
	    }
	    return {from: from, to: Math.max(to, from + 1)};
	  }

	  // LINE NUMBERS

	  // Re-align line numbers and gutter marks to compensate for
	  // horizontal scrolling.
	  function alignHorizontally(cm) {
	    var display = cm.display, view = display.view;
	    if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) return;
	    var comp = compensateForHScroll(display) - display.scroller.scrollLeft + cm.doc.scrollLeft;
	    var gutterW = display.gutters.offsetWidth, left = comp + "px";
	    for (var i = 0; i < view.length; i++) if (!view[i].hidden) {
	      if (cm.options.fixedGutter && view[i].gutter)
	        view[i].gutter.style.left = left;
	      var align = view[i].alignable;
	      if (align) for (var j = 0; j < align.length; j++)
	        align[j].style.left = left;
	    }
	    if (cm.options.fixedGutter)
	      display.gutters.style.left = (comp + gutterW) + "px";
	  }

	  // Used to ensure that the line number gutter is still the right
	  // size for the current document size. Returns true when an update
	  // is needed.
	  function maybeUpdateLineNumberWidth(cm) {
	    if (!cm.options.lineNumbers) return false;
	    var doc = cm.doc, last = lineNumberFor(cm.options, doc.first + doc.size - 1), display = cm.display;
	    if (last.length != display.lineNumChars) {
	      var test = display.measure.appendChild(elt("div", [elt("div", last)],
	                                                 "CodeMirror-linenumber CodeMirror-gutter-elt"));
	      var innerW = test.firstChild.offsetWidth, padding = test.offsetWidth - innerW;
	      display.lineGutter.style.width = "";
	      display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding) + 1;
	      display.lineNumWidth = display.lineNumInnerWidth + padding;
	      display.lineNumChars = display.lineNumInnerWidth ? last.length : -1;
	      display.lineGutter.style.width = display.lineNumWidth + "px";
	      updateGutterSpace(cm);
	      return true;
	    }
	    return false;
	  }

	  function lineNumberFor(options, i) {
	    return String(options.lineNumberFormatter(i + options.firstLineNumber));
	  }

	  // Computes display.scroller.scrollLeft + display.gutters.offsetWidth,
	  // but using getBoundingClientRect to get a sub-pixel-accurate
	  // result.
	  function compensateForHScroll(display) {
	    return display.scroller.getBoundingClientRect().left - display.sizer.getBoundingClientRect().left;
	  }

	  // DISPLAY DRAWING

	  function DisplayUpdate(cm, viewport, force) {
	    var display = cm.display;

	    this.viewport = viewport;
	    // Store some values that we'll need later (but don't want to force a relayout for)
	    this.visible = visibleLines(display, cm.doc, viewport);
	    this.editorIsHidden = !display.wrapper.offsetWidth;
	    this.wrapperHeight = display.wrapper.clientHeight;
	    this.wrapperWidth = display.wrapper.clientWidth;
	    this.oldDisplayWidth = displayWidth(cm);
	    this.force = force;
	    this.dims = getDimensions(cm);
	    this.events = [];
	  }

	  DisplayUpdate.prototype.signal = function(emitter, type) {
	    if (hasHandler(emitter, type))
	      this.events.push(arguments);
	  };
	  DisplayUpdate.prototype.finish = function() {
	    for (var i = 0; i < this.events.length; i++)
	      signal.apply(null, this.events[i]);
	  };

	  function maybeClipScrollbars(cm) {
	    var display = cm.display;
	    if (!display.scrollbarsClipped && display.scroller.offsetWidth) {
	      display.nativeBarWidth = display.scroller.offsetWidth - display.scroller.clientWidth;
	      display.heightForcer.style.height = scrollGap(cm) + "px";
	      display.sizer.style.marginBottom = -display.nativeBarWidth + "px";
	      display.sizer.style.borderRightWidth = scrollGap(cm) + "px";
	      display.scrollbarsClipped = true;
	    }
	  }

	  // Does the actual updating of the line display. Bails out
	  // (returning false) when there is nothing to be done and forced is
	  // false.
	  function updateDisplayIfNeeded(cm, update) {
	    var display = cm.display, doc = cm.doc;

	    if (update.editorIsHidden) {
	      resetView(cm);
	      return false;
	    }

	    // Bail out if the visible area is already rendered and nothing changed.
	    if (!update.force &&
	        update.visible.from >= display.viewFrom && update.visible.to <= display.viewTo &&
	        (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo) &&
	        display.renderedView == display.view && countDirtyView(cm) == 0)
	      return false;

	    if (maybeUpdateLineNumberWidth(cm)) {
	      resetView(cm);
	      update.dims = getDimensions(cm);
	    }

	    // Compute a suitable new viewport (from & to)
	    var end = doc.first + doc.size;
	    var from = Math.max(update.visible.from - cm.options.viewportMargin, doc.first);
	    var to = Math.min(end, update.visible.to + cm.options.viewportMargin);
	    if (display.viewFrom < from && from - display.viewFrom < 20) from = Math.max(doc.first, display.viewFrom);
	    if (display.viewTo > to && display.viewTo - to < 20) to = Math.min(end, display.viewTo);
	    if (sawCollapsedSpans) {
	      from = visualLineNo(cm.doc, from);
	      to = visualLineEndNo(cm.doc, to);
	    }

	    var different = from != display.viewFrom || to != display.viewTo ||
	      display.lastWrapHeight != update.wrapperHeight || display.lastWrapWidth != update.wrapperWidth;
	    adjustView(cm, from, to);

	    display.viewOffset = heightAtLine(getLine(cm.doc, display.viewFrom));
	    // Position the mover div to align with the current scroll position
	    cm.display.mover.style.top = display.viewOffset + "px";

	    var toUpdate = countDirtyView(cm);
	    if (!different && toUpdate == 0 && !update.force && display.renderedView == display.view &&
	        (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo))
	      return false;

	    // For big changes, we hide the enclosing element during the
	    // update, since that speeds up the operations on most browsers.
	    var focused = activeElt();
	    if (toUpdate > 4) display.lineDiv.style.display = "none";
	    patchDisplay(cm, display.updateLineNumbers, update.dims);
	    if (toUpdate > 4) display.lineDiv.style.display = "";
	    display.renderedView = display.view;
	    // There might have been a widget with a focused element that got
	    // hidden or updated, if so re-focus it.
	    if (focused && activeElt() != focused && focused.offsetHeight) focused.focus();

	    // Prevent selection and cursors from interfering with the scroll
	    // width and height.
	    removeChildren(display.cursorDiv);
	    removeChildren(display.selectionDiv);
	    display.gutters.style.height = display.sizer.style.minHeight = 0;

	    if (different) {
	      display.lastWrapHeight = update.wrapperHeight;
	      display.lastWrapWidth = update.wrapperWidth;
	      startWorker(cm, 400);
	    }

	    display.updateLineNumbers = null;

	    return true;
	  }

	  function postUpdateDisplay(cm, update) {
	    var viewport = update.viewport;

	    for (var first = true;; first = false) {
	      if (!first || !cm.options.lineWrapping || update.oldDisplayWidth == displayWidth(cm)) {
	        // Clip forced viewport to actual scrollable area.
	        if (viewport && viewport.top != null)
	          viewport = {top: Math.min(cm.doc.height + paddingVert(cm.display) - displayHeight(cm), viewport.top)};
	        // Updated line heights might result in the drawn area not
	        // actually covering the viewport. Keep looping until it does.
	        update.visible = visibleLines(cm.display, cm.doc, viewport);
	        if (update.visible.from >= cm.display.viewFrom && update.visible.to <= cm.display.viewTo)
	          break;
	      }
	      if (!updateDisplayIfNeeded(cm, update)) break;
	      updateHeightsInViewport(cm);
	      var barMeasure = measureForScrollbars(cm);
	      updateSelection(cm);
	      updateScrollbars(cm, barMeasure);
	      setDocumentHeight(cm, barMeasure);
	    }

	    update.signal(cm, "update", cm);
	    if (cm.display.viewFrom != cm.display.reportedViewFrom || cm.display.viewTo != cm.display.reportedViewTo) {
	      update.signal(cm, "viewportChange", cm, cm.display.viewFrom, cm.display.viewTo);
	      cm.display.reportedViewFrom = cm.display.viewFrom; cm.display.reportedViewTo = cm.display.viewTo;
	    }
	  }

	  function updateDisplaySimple(cm, viewport) {
	    var update = new DisplayUpdate(cm, viewport);
	    if (updateDisplayIfNeeded(cm, update)) {
	      updateHeightsInViewport(cm);
	      postUpdateDisplay(cm, update);
	      var barMeasure = measureForScrollbars(cm);
	      updateSelection(cm);
	      updateScrollbars(cm, barMeasure);
	      setDocumentHeight(cm, barMeasure);
	      update.finish();
	    }
	  }

	  function setDocumentHeight(cm, measure) {
	    cm.display.sizer.style.minHeight = measure.docHeight + "px";
	    cm.display.heightForcer.style.top = measure.docHeight + "px";
	    cm.display.gutters.style.height = (measure.docHeight + cm.display.barHeight + scrollGap(cm)) + "px";
	  }

	  // Read the actual heights of the rendered lines, and update their
	  // stored heights to match.
	  function updateHeightsInViewport(cm) {
	    var display = cm.display;
	    var prevBottom = display.lineDiv.offsetTop;
	    for (var i = 0; i < display.view.length; i++) {
	      var cur = display.view[i], height;
	      if (cur.hidden) continue;
	      if (ie && ie_version < 8) {
	        var bot = cur.node.offsetTop + cur.node.offsetHeight;
	        height = bot - prevBottom;
	        prevBottom = bot;
	      } else {
	        var box = cur.node.getBoundingClientRect();
	        height = box.bottom - box.top;
	      }
	      var diff = cur.line.height - height;
	      if (height < 2) height = textHeight(display);
	      if (diff > .001 || diff < -.001) {
	        updateLineHeight(cur.line, height);
	        updateWidgetHeight(cur.line);
	        if (cur.rest) for (var j = 0; j < cur.rest.length; j++)
	          updateWidgetHeight(cur.rest[j]);
	      }
	    }
	  }

	  // Read and store the height of line widgets associated with the
	  // given line.
	  function updateWidgetHeight(line) {
	    if (line.widgets) for (var i = 0; i < line.widgets.length; ++i)
	      line.widgets[i].height = line.widgets[i].node.parentNode.offsetHeight;
	  }

	  // Do a bulk-read of the DOM positions and sizes needed to draw the
	  // view, so that we don't interleave reading and writing to the DOM.
	  function getDimensions(cm) {
	    var d = cm.display, left = {}, width = {};
	    var gutterLeft = d.gutters.clientLeft;
	    for (var n = d.gutters.firstChild, i = 0; n; n = n.nextSibling, ++i) {
	      left[cm.options.gutters[i]] = n.offsetLeft + n.clientLeft + gutterLeft;
	      width[cm.options.gutters[i]] = n.clientWidth;
	    }
	    return {fixedPos: compensateForHScroll(d),
	            gutterTotalWidth: d.gutters.offsetWidth,
	            gutterLeft: left,
	            gutterWidth: width,
	            wrapperWidth: d.wrapper.clientWidth};
	  }

	  // Sync the actual display DOM structure with display.view, removing
	  // nodes for lines that are no longer in view, and creating the ones
	  // that are not there yet, and updating the ones that are out of
	  // date.
	  function patchDisplay(cm, updateNumbersFrom, dims) {
	    var display = cm.display, lineNumbers = cm.options.lineNumbers;
	    var container = display.lineDiv, cur = container.firstChild;

	    function rm(node) {
	      var next = node.nextSibling;
	      // Works around a throw-scroll bug in OS X Webkit
	      if (webkit && mac && cm.display.currentWheelTarget == node)
	        node.style.display = "none";
	      else
	        node.parentNode.removeChild(node);
	      return next;
	    }

	    var view = display.view, lineN = display.viewFrom;
	    // Loop over the elements in the view, syncing cur (the DOM nodes
	    // in display.lineDiv) with the view as we go.
	    for (var i = 0; i < view.length; i++) {
	      var lineView = view[i];
	      if (lineView.hidden) {
	      } else if (!lineView.node || lineView.node.parentNode != container) { // Not drawn yet
	        var node = buildLineElement(cm, lineView, lineN, dims);
	        container.insertBefore(node, cur);
	      } else { // Already drawn
	        while (cur != lineView.node) cur = rm(cur);
	        var updateNumber = lineNumbers && updateNumbersFrom != null &&
	          updateNumbersFrom <= lineN && lineView.lineNumber;
	        if (lineView.changes) {
	          if (indexOf(lineView.changes, "gutter") > -1) updateNumber = false;
	          updateLineForChanges(cm, lineView, lineN, dims);
	        }
	        if (updateNumber) {
	          removeChildren(lineView.lineNumber);
	          lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options, lineN)));
	        }
	        cur = lineView.node.nextSibling;
	      }
	      lineN += lineView.size;
	    }
	    while (cur) cur = rm(cur);
	  }

	  // When an aspect of a line changes, a string is added to
	  // lineView.changes. This updates the relevant part of the line's
	  // DOM structure.
	  function updateLineForChanges(cm, lineView, lineN, dims) {
	    for (var j = 0; j < lineView.changes.length; j++) {
	      var type = lineView.changes[j];
	      if (type == "text") updateLineText(cm, lineView);
	      else if (type == "gutter") updateLineGutter(cm, lineView, lineN, dims);
	      else if (type == "class") updateLineClasses(lineView);
	      else if (type == "widget") updateLineWidgets(cm, lineView, dims);
	    }
	    lineView.changes = null;
	  }

	  // Lines with gutter elements, widgets or a background class need to
	  // be wrapped, and have the extra elements added to the wrapper div
	  function ensureLineWrapped(lineView) {
	    if (lineView.node == lineView.text) {
	      lineView.node = elt("div", null, null, "position: relative");
	      if (lineView.text.parentNode)
	        lineView.text.parentNode.replaceChild(lineView.node, lineView.text);
	      lineView.node.appendChild(lineView.text);
	      if (ie && ie_version < 8) lineView.node.style.zIndex = 2;
	    }
	    return lineView.node;
	  }

	  function updateLineBackground(lineView) {
	    var cls = lineView.bgClass ? lineView.bgClass + " " + (lineView.line.bgClass || "") : lineView.line.bgClass;
	    if (cls) cls += " CodeMirror-linebackground";
	    if (lineView.background) {
	      if (cls) lineView.background.className = cls;
	      else { lineView.background.parentNode.removeChild(lineView.background); lineView.background = null; }
	    } else if (cls) {
	      var wrap = ensureLineWrapped(lineView);
	      lineView.background = wrap.insertBefore(elt("div", null, cls), wrap.firstChild);
	    }
	  }

	  // Wrapper around buildLineContent which will reuse the structure
	  // in display.externalMeasured when possible.
	  function getLineContent(cm, lineView) {
	    var ext = cm.display.externalMeasured;
	    if (ext && ext.line == lineView.line) {
	      cm.display.externalMeasured = null;
	      lineView.measure = ext.measure;
	      return ext.built;
	    }
	    return buildLineContent(cm, lineView);
	  }

	  // Redraw the line's text. Interacts with the background and text
	  // classes because the mode may output tokens that influence these
	  // classes.
	  function updateLineText(cm, lineView) {
	    var cls = lineView.text.className;
	    var built = getLineContent(cm, lineView);
	    if (lineView.text == lineView.node) lineView.node = built.pre;
	    lineView.text.parentNode.replaceChild(built.pre, lineView.text);
	    lineView.text = built.pre;
	    if (built.bgClass != lineView.bgClass || built.textClass != lineView.textClass) {
	      lineView.bgClass = built.bgClass;
	      lineView.textClass = built.textClass;
	      updateLineClasses(lineView);
	    } else if (cls) {
	      lineView.text.className = cls;
	    }
	  }

	  function updateLineClasses(lineView) {
	    updateLineBackground(lineView);
	    if (lineView.line.wrapClass)
	      ensureLineWrapped(lineView).className = lineView.line.wrapClass;
	    else if (lineView.node != lineView.text)
	      lineView.node.className = "";
	    var textClass = lineView.textClass ? lineView.textClass + " " + (lineView.line.textClass || "") : lineView.line.textClass;
	    lineView.text.className = textClass || "";
	  }

	  function updateLineGutter(cm, lineView, lineN, dims) {
	    if (lineView.gutter) {
	      lineView.node.removeChild(lineView.gutter);
	      lineView.gutter = null;
	    }
	    if (lineView.gutterBackground) {
	      lineView.node.removeChild(lineView.gutterBackground);
	      lineView.gutterBackground = null;
	    }
	    if (lineView.line.gutterClass) {
	      var wrap = ensureLineWrapped(lineView);
	      lineView.gutterBackground = elt("div", null, "CodeMirror-gutter-background " + lineView.line.gutterClass,
	                                      "left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) +
	                                      "px; width: " + dims.gutterTotalWidth + "px");
	      wrap.insertBefore(lineView.gutterBackground, lineView.text);
	    }
	    var markers = lineView.line.gutterMarkers;
	    if (cm.options.lineNumbers || markers) {
	      var wrap = ensureLineWrapped(lineView);
	      var gutterWrap = lineView.gutter = elt("div", null, "CodeMirror-gutter-wrapper", "left: " +
	                                             (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px");
	      cm.display.input.setUneditable(gutterWrap);
	      wrap.insertBefore(gutterWrap, lineView.text);
	      if (lineView.line.gutterClass)
	        gutterWrap.className += " " + lineView.line.gutterClass;
	      if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"]))
	        lineView.lineNumber = gutterWrap.appendChild(
	          elt("div", lineNumberFor(cm.options, lineN),
	              "CodeMirror-linenumber CodeMirror-gutter-elt",
	              "left: " + dims.gutterLeft["CodeMirror-linenumbers"] + "px; width: "
	              + cm.display.lineNumInnerWidth + "px"));
	      if (markers) for (var k = 0; k < cm.options.gutters.length; ++k) {
	        var id = cm.options.gutters[k], found = markers.hasOwnProperty(id) && markers[id];
	        if (found)
	          gutterWrap.appendChild(elt("div", [found], "CodeMirror-gutter-elt", "left: " +
	                                     dims.gutterLeft[id] + "px; width: " + dims.gutterWidth[id] + "px"));
	      }
	    }
	  }

	  function updateLineWidgets(cm, lineView, dims) {
	    if (lineView.alignable) lineView.alignable = null;
	    for (var node = lineView.node.firstChild, next; node; node = next) {
	      var next = node.nextSibling;
	      if (node.className == "CodeMirror-linewidget")
	        lineView.node.removeChild(node);
	    }
	    insertLineWidgets(cm, lineView, dims);
	  }

	  // Build a line's DOM representation from scratch
	  function buildLineElement(cm, lineView, lineN, dims) {
	    var built = getLineContent(cm, lineView);
	    lineView.text = lineView.node = built.pre;
	    if (built.bgClass) lineView.bgClass = built.bgClass;
	    if (built.textClass) lineView.textClass = built.textClass;

	    updateLineClasses(lineView);
	    updateLineGutter(cm, lineView, lineN, dims);
	    insertLineWidgets(cm, lineView, dims);
	    return lineView.node;
	  }

	  // A lineView may contain multiple logical lines (when merged by
	  // collapsed spans). The widgets for all of them need to be drawn.
	  function insertLineWidgets(cm, lineView, dims) {
	    insertLineWidgetsFor(cm, lineView.line, lineView, dims, true);
	    if (lineView.rest) for (var i = 0; i < lineView.rest.length; i++)
	      insertLineWidgetsFor(cm, lineView.rest[i], lineView, dims, false);
	  }

	  function insertLineWidgetsFor(cm, line, lineView, dims, allowAbove) {
	    if (!line.widgets) return;
	    var wrap = ensureLineWrapped(lineView);
	    for (var i = 0, ws = line.widgets; i < ws.length; ++i) {
	      var widget = ws[i], node = elt("div", [widget.node], "CodeMirror-linewidget");
	      if (!widget.handleMouseEvents) node.setAttribute("cm-ignore-events", "true");
	      positionLineWidget(widget, node, lineView, dims);
	      cm.display.input.setUneditable(node);
	      if (allowAbove && widget.above)
	        wrap.insertBefore(node, lineView.gutter || lineView.text);
	      else
	        wrap.appendChild(node);
	      signalLater(widget, "redraw");
	    }
	  }

	  function positionLineWidget(widget, node, lineView, dims) {
	    if (widget.noHScroll) {
	      (lineView.alignable || (lineView.alignable = [])).push(node);
	      var width = dims.wrapperWidth;
	      node.style.left = dims.fixedPos + "px";
	      if (!widget.coverGutter) {
	        width -= dims.gutterTotalWidth;
	        node.style.paddingLeft = dims.gutterTotalWidth + "px";
	      }
	      node.style.width = width + "px";
	    }
	    if (widget.coverGutter) {
	      node.style.zIndex = 5;
	      node.style.position = "relative";
	      if (!widget.noHScroll) node.style.marginLeft = -dims.gutterTotalWidth + "px";
	    }
	  }

	  // POSITION OBJECT

	  // A Pos instance represents a position within the text.
	  var Pos = CodeMirror.Pos = function(line, ch) {
	    if (!(this instanceof Pos)) return new Pos(line, ch);
	    this.line = line; this.ch = ch;
	  };

	  // Compare two positions, return 0 if they are the same, a negative
	  // number when a is less, and a positive number otherwise.
	  var cmp = CodeMirror.cmpPos = function(a, b) { return a.line - b.line || a.ch - b.ch; };

	  function copyPos(x) {return Pos(x.line, x.ch);}
	  function maxPos(a, b) { return cmp(a, b) < 0 ? b : a; }
	  function minPos(a, b) { return cmp(a, b) < 0 ? a : b; }

	  // INPUT HANDLING

	  function ensureFocus(cm) {
	    if (!cm.state.focused) { cm.display.input.focus(); onFocus(cm); }
	  }

	  // This will be set to an array of strings when copying, so that,
	  // when pasting, we know what kind of selections the copied text
	  // was made out of.
	  var lastCopied = null;

	  function applyTextInput(cm, inserted, deleted, sel, origin) {
	    var doc = cm.doc;
	    cm.display.shift = false;
	    if (!sel) sel = doc.sel;

	    var paste = cm.state.pasteIncoming || origin == "paste";
	    var textLines = doc.splitLines(inserted), multiPaste = null;
	    // When pasing N lines into N selections, insert one line per selection
	    if (paste && sel.ranges.length > 1) {
	      if (lastCopied && lastCopied.join("\n") == inserted) {
	        if (sel.ranges.length % lastCopied.length == 0) {
	          multiPaste = [];
	          for (var i = 0; i < lastCopied.length; i++)
	            multiPaste.push(doc.splitLines(lastCopied[i]));
	        }
	      } else if (textLines.length == sel.ranges.length) {
	        multiPaste = map(textLines, function(l) { return [l]; });
	      }
	    }

	    // Normal behavior is to insert the new text into every selection
	    for (var i = sel.ranges.length - 1; i >= 0; i--) {
	      var range = sel.ranges[i];
	      var from = range.from(), to = range.to();
	      if (range.empty()) {
	        if (deleted && deleted > 0) // Handle deletion
	          from = Pos(from.line, from.ch - deleted);
	        else if (cm.state.overwrite && !paste) // Handle overwrite
	          to = Pos(to.line, Math.min(getLine(doc, to.line).text.length, to.ch + lst(textLines).length));
	      }
	      var updateInput = cm.curOp.updateInput;
	      var changeEvent = {from: from, to: to, text: multiPaste ? multiPaste[i % multiPaste.length] : textLines,
	                         origin: origin || (paste ? "paste" : cm.state.cutIncoming ? "cut" : "+input")};
	      makeChange(cm.doc, changeEvent);
	      signalLater(cm, "inputRead", cm, changeEvent);
	    }
	    if (inserted && !paste)
	      triggerElectric(cm, inserted);

	    ensureCursorVisible(cm);
	    cm.curOp.updateInput = updateInput;
	    cm.curOp.typing = true;
	    cm.state.pasteIncoming = cm.state.cutIncoming = false;
	  }

	  function handlePaste(e, cm) {
	    var pasted = e.clipboardData && e.clipboardData.getData("text/plain");
	    if (pasted) {
	      e.preventDefault();
	      if (!cm.isReadOnly() && !cm.options.disableInput)
	        runInOp(cm, function() { applyTextInput(cm, pasted, 0, null, "paste"); });
	      return true;
	    }
	  }

	  function triggerElectric(cm, inserted) {
	    // When an 'electric' character is inserted, immediately trigger a reindent
	    if (!cm.options.electricChars || !cm.options.smartIndent) return;
	    var sel = cm.doc.sel;

	    for (var i = sel.ranges.length - 1; i >= 0; i--) {
	      var range = sel.ranges[i];
	      if (range.head.ch > 100 || (i && sel.ranges[i - 1].head.line == range.head.line)) continue;
	      var mode = cm.getModeAt(range.head);
	      var indented = false;
	      if (mode.electricChars) {
	        for (var j = 0; j < mode.electricChars.length; j++)
	          if (inserted.indexOf(mode.electricChars.charAt(j)) > -1) {
	            indented = indentLine(cm, range.head.line, "smart");
	            break;
	          }
	      } else if (mode.electricInput) {
	        if (mode.electricInput.test(getLine(cm.doc, range.head.line).text.slice(0, range.head.ch)))
	          indented = indentLine(cm, range.head.line, "smart");
	      }
	      if (indented) signalLater(cm, "electricInput", cm, range.head.line);
	    }
	  }

	  function copyableRanges(cm) {
	    var text = [], ranges = [];
	    for (var i = 0; i < cm.doc.sel.ranges.length; i++) {
	      var line = cm.doc.sel.ranges[i].head.line;
	      var lineRange = {anchor: Pos(line, 0), head: Pos(line + 1, 0)};
	      ranges.push(lineRange);
	      text.push(cm.getRange(lineRange.anchor, lineRange.head));
	    }
	    return {text: text, ranges: ranges};
	  }

	  function disableBrowserMagic(field) {
	    field.setAttribute("autocorrect", "off");
	    field.setAttribute("autocapitalize", "off");
	    field.setAttribute("spellcheck", "false");
	  }

	  // TEXTAREA INPUT STYLE

	  function TextareaInput(cm) {
	    this.cm = cm;
	    // See input.poll and input.reset
	    this.prevInput = "";

	    // Flag that indicates whether we expect input to appear real soon
	    // now (after some event like 'keypress' or 'input') and are
	    // polling intensively.
	    this.pollingFast = false;
	    // Self-resetting timeout for the poller
	    this.polling = new Delayed();
	    // Tracks when input.reset has punted to just putting a short
	    // string into the textarea instead of the full selection.
	    this.inaccurateSelection = false;
	    // Used to work around IE issue with selection being forgotten when focus moves away from textarea
	    this.hasSelection = false;
	    this.composing = null;
	  };

	  function hiddenTextarea() {
	    var te = elt("textarea", null, null, "position: absolute; padding: 0; width: 1px; height: 1em; outline: none");
	    var div = elt("div", [te], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
	    // The textarea is kept positioned near the cursor to prevent the
	    // fact that it'll be scrolled into view on input from scrolling
	    // our fake cursor out of view. On webkit, when wrap=off, paste is
	    // very slow. So make the area wide instead.
	    if (webkit) te.style.width = "1000px";
	    else te.setAttribute("wrap", "off");
	    // If border: 0; -- iOS fails to open keyboard (issue #1287)
	    if (ios) te.style.border = "1px solid black";
	    disableBrowserMagic(te);
	    return div;
	  }

	  TextareaInput.prototype = copyObj({
	    init: function(display) {
	      var input = this, cm = this.cm;

	      // Wraps and hides input textarea
	      var div = this.wrapper = hiddenTextarea();
	      // The semihidden textarea that is focused when the editor is
	      // focused, and receives input.
	      var te = this.textarea = div.firstChild;
	      display.wrapper.insertBefore(div, display.wrapper.firstChild);

	      // Needed to hide big blue blinking cursor on Mobile Safari (doesn't seem to work in iOS 8 anymore)
	      if (ios) te.style.width = "0px";

	      on(te, "input", function() {
	        if (ie && ie_version >= 9 && input.hasSelection) input.hasSelection = null;
	        input.poll();
	      });

	      on(te, "paste", function(e) {
	        if (signalDOMEvent(cm, e) || handlePaste(e, cm)) return

	        cm.state.pasteIncoming = true;
	        input.fastPoll();
	      });

	      function prepareCopyCut(e) {
	        if (signalDOMEvent(cm, e)) return
	        if (cm.somethingSelected()) {
	          lastCopied = cm.getSelections();
	          if (input.inaccurateSelection) {
	            input.prevInput = "";
	            input.inaccurateSelection = false;
	            te.value = lastCopied.join("\n");
	            selectInput(te);
	          }
	        } else if (!cm.options.lineWiseCopyCut) {
	          return;
	        } else {
	          var ranges = copyableRanges(cm);
	          lastCopied = ranges.text;
	          if (e.type == "cut") {
	            cm.setSelections(ranges.ranges, null, sel_dontScroll);
	          } else {
	            input.prevInput = "";
	            te.value = ranges.text.join("\n");
	            selectInput(te);
	          }
	        }
	        if (e.type == "cut") cm.state.cutIncoming = true;
	      }
	      on(te, "cut", prepareCopyCut);
	      on(te, "copy", prepareCopyCut);

	      on(display.scroller, "paste", function(e) {
	        if (eventInWidget(display, e) || signalDOMEvent(cm, e)) return;
	        cm.state.pasteIncoming = true;
	        input.focus();
	      });

	      // Prevent normal selection in the editor (we handle our own)
	      on(display.lineSpace, "selectstart", function(e) {
	        if (!eventInWidget(display, e)) e_preventDefault(e);
	      });

	      on(te, "compositionstart", function() {
	        var start = cm.getCursor("from");
	        if (input.composing) input.composing.range.clear()
	        input.composing = {
	          start: start,
	          range: cm.markText(start, cm.getCursor("to"), {className: "CodeMirror-composing"})
	        };
	      });
	      on(te, "compositionend", function() {
	        if (input.composing) {
	          input.poll();
	          input.composing.range.clear();
	          input.composing = null;
	        }
	      });
	    },

	    prepareSelection: function() {
	      // Redraw the selection and/or cursor
	      var cm = this.cm, display = cm.display, doc = cm.doc;
	      var result = prepareSelection(cm);

	      // Move the hidden textarea near the cursor to prevent scrolling artifacts
	      if (cm.options.moveInputWithCursor) {
	        var headPos = cursorCoords(cm, doc.sel.primary().head, "div");
	        var wrapOff = display.wrapper.getBoundingClientRect(), lineOff = display.lineDiv.getBoundingClientRect();
	        result.teTop = Math.max(0, Math.min(display.wrapper.clientHeight - 10,
	                                            headPos.top + lineOff.top - wrapOff.top));
	        result.teLeft = Math.max(0, Math.min(display.wrapper.clientWidth - 10,
	                                             headPos.left + lineOff.left - wrapOff.left));
	      }

	      return result;
	    },

	    showSelection: function(drawn) {
	      var cm = this.cm, display = cm.display;
	      removeChildrenAndAdd(display.cursorDiv, drawn.cursors);
	      removeChildrenAndAdd(display.selectionDiv, drawn.selection);
	      if (drawn.teTop != null) {
	        this.wrapper.style.top = drawn.teTop + "px";
	        this.wrapper.style.left = drawn.teLeft + "px";
	      }
	    },

	    // Reset the input to correspond to the selection (or to be empty,
	    // when not typing and nothing is selected)
	    reset: function(typing) {
	      if (this.contextMenuPending) return;
	      var minimal, selected, cm = this.cm, doc = cm.doc;
	      if (cm.somethingSelected()) {
	        this.prevInput = "";
	        var range = doc.sel.primary();
	        minimal = hasCopyEvent &&
	          (range.to().line - range.from().line > 100 || (selected = cm.getSelection()).length > 1000);
	        var content = minimal ? "-" : selected || cm.getSelection();
	        this.textarea.value = content;
	        if (cm.state.focused) selectInput(this.textarea);
	        if (ie && ie_version >= 9) this.hasSelection = content;
	      } else if (!typing) {
	        this.prevInput = this.textarea.value = "";
	        if (ie && ie_version >= 9) this.hasSelection = null;
	      }
	      this.inaccurateSelection = minimal;
	    },

	    getField: function() { return this.textarea; },

	    supportsTouch: function() { return false; },

	    focus: function() {
	      if (this.cm.options.readOnly != "nocursor" && (!mobile || activeElt() != this.textarea)) {
	        try { this.textarea.focus(); }
	        catch (e) {} // IE8 will throw if the textarea is display: none or not in DOM
	      }
	    },

	    blur: function() { this.textarea.blur(); },

	    resetPosition: function() {
	      this.wrapper.style.top = this.wrapper.style.left = 0;
	    },

	    receivedFocus: function() { this.slowPoll(); },

	    // Poll for input changes, using the normal rate of polling. This
	    // runs as long as the editor is focused.
	    slowPoll: function() {
	      var input = this;
	      if (input.pollingFast) return;
	      input.polling.set(this.cm.options.pollInterval, function() {
	        input.poll();
	        if (input.cm.state.focused) input.slowPoll();
	      });
	    },

	    // When an event has just come in that is likely to add or change
	    // something in the input textarea, we poll faster, to ensure that
	    // the change appears on the screen quickly.
	    fastPoll: function() {
	      var missed = false, input = this;
	      input.pollingFast = true;
	      function p() {
	        var changed = input.poll();
	        if (!changed && !missed) {missed = true; input.polling.set(60, p);}
	        else {input.pollingFast = false; input.slowPoll();}
	      }
	      input.polling.set(20, p);
	    },

	    // Read input from the textarea, and update the document to match.
	    // When something is selected, it is present in the textarea, and
	    // selected (unless it is huge, in which case a placeholder is
	    // used). When nothing is selected, the cursor sits after previously
	    // seen text (can be empty), which is stored in prevInput (we must
	    // not reset the textarea when typing, because that breaks IME).
	    poll: function() {
	      var cm = this.cm, input = this.textarea, prevInput = this.prevInput;
	      // Since this is called a *lot*, try to bail out as cheaply as
	      // possible when it is clear that nothing happened. hasSelection
	      // will be the case when there is a lot of text in the textarea,
	      // in which case reading its value would be expensive.
	      if (this.contextMenuPending || !cm.state.focused ||
	          (hasSelection(input) && !prevInput && !this.composing) ||
	          cm.isReadOnly() || cm.options.disableInput || cm.state.keySeq)
	        return false;

	      var text = input.value;
	      // If nothing changed, bail.
	      if (text == prevInput && !cm.somethingSelected()) return false;
	      // Work around nonsensical selection resetting in IE9/10, and
	      // inexplicable appearance of private area unicode characters on
	      // some key combos in Mac (#2689).
	      if (ie && ie_version >= 9 && this.hasSelection === text ||
	          mac && /[\uf700-\uf7ff]/.test(text)) {
	        cm.display.input.reset();
	        return false;
	      }

	      if (cm.doc.sel == cm.display.selForContextMenu) {
	        var first = text.charCodeAt(0);
	        if (first == 0x200b && !prevInput) prevInput = "\u200b";
	        if (first == 0x21da) { this.reset(); return this.cm.execCommand("undo"); }
	      }
	      // Find the part of the input that is actually new
	      var same = 0, l = Math.min(prevInput.length, text.length);
	      while (same < l && prevInput.charCodeAt(same) == text.charCodeAt(same)) ++same;

	      var self = this;
	      runInOp(cm, function() {
	        applyTextInput(cm, text.slice(same), prevInput.length - same,
	                       null, self.composing ? "*compose" : null);

	        // Don't leave long text in the textarea, since it makes further polling slow
	        if (text.length > 1000 || text.indexOf("\n") > -1) input.value = self.prevInput = "";
	        else self.prevInput = text;

	        if (self.composing) {
	          self.composing.range.clear();
	          self.composing.range = cm.markText(self.composing.start, cm.getCursor("to"),
	                                             {className: "CodeMirror-composing"});
	        }
	      });
	      return true;
	    },

	    ensurePolled: function() {
	      if (this.pollingFast && this.poll()) this.pollingFast = false;
	    },

	    onKeyPress: function() {
	      if (ie && ie_version >= 9) this.hasSelection = null;
	      this.fastPoll();
	    },

	    onContextMenu: function(e) {
	      var input = this, cm = input.cm, display = cm.display, te = input.textarea;
	      var pos = posFromMouse(cm, e), scrollPos = display.scroller.scrollTop;
	      if (!pos || presto) return; // Opera is difficult.

	      // Reset the current text selection only if the click is done outside of the selection
	      // and 'resetSelectionOnContextMenu' option is true.
	      var reset = cm.options.resetSelectionOnContextMenu;
	      if (reset && cm.doc.sel.contains(pos) == -1)
	        operation(cm, setSelection)(cm.doc, simpleSelection(pos), sel_dontScroll);

	      var oldCSS = te.style.cssText, oldWrapperCSS = input.wrapper.style.cssText;
	      input.wrapper.style.cssText = "position: absolute"
	      var wrapperBox = input.wrapper.getBoundingClientRect()
	      te.style.cssText = "position: absolute; width: 30px; height: 30px; top: " + (e.clientY - wrapperBox.top - 5) +
	        "px; left: " + (e.clientX - wrapperBox.left - 5) + "px; z-index: 1000; background: " +
	        (ie ? "rgba(255, 255, 255, .05)" : "transparent") +
	        "; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
	      if (webkit) var oldScrollY = window.scrollY; // Work around Chrome issue (#2712)
	      display.input.focus();
	      if (webkit) window.scrollTo(null, oldScrollY);
	      display.input.reset();
	      // Adds "Select all" to context menu in FF
	      if (!cm.somethingSelected()) te.value = input.prevInput = " ";
	      input.contextMenuPending = true;
	      display.selForContextMenu = cm.doc.sel;
	      clearTimeout(display.detectingSelectAll);

	      // Select-all will be greyed out if there's nothing to select, so
	      // this adds a zero-width space so that we can later check whether
	      // it got selected.
	      function prepareSelectAllHack() {
	        if (te.selectionStart != null) {
	          var selected = cm.somethingSelected();
	          var extval = "\u200b" + (selected ? te.value : "");
	          te.value = "\u21da"; // Used to catch context-menu undo
	          te.value = extval;
	          input.prevInput = selected ? "" : "\u200b";
	          te.selectionStart = 1; te.selectionEnd = extval.length;
	          // Re-set this, in case some other handler touched the
	          // selection in the meantime.
	          display.selForContextMenu = cm.doc.sel;
	        }
	      }
	      function rehide() {
	        input.contextMenuPending = false;
	        input.wrapper.style.cssText = oldWrapperCSS
	        te.style.cssText = oldCSS;
	        if (ie && ie_version < 9) display.scrollbars.setScrollTop(display.scroller.scrollTop = scrollPos);

	        // Try to detect the user choosing select-all
	        if (te.selectionStart != null) {
	          if (!ie || (ie && ie_version < 9)) prepareSelectAllHack();
	          var i = 0, poll = function() {
	            if (display.selForContextMenu == cm.doc.sel && te.selectionStart == 0 &&
	                te.selectionEnd > 0 && input.prevInput == "\u200b")
	              operation(cm, commands.selectAll)(cm);
	            else if (i++ < 10) display.detectingSelectAll = setTimeout(poll, 500);
	            else display.input.reset();
	          };
	          display.detectingSelectAll = setTimeout(poll, 200);
	        }
	      }

	      if (ie && ie_version >= 9) prepareSelectAllHack();
	      if (captureRightClick) {
	        e_stop(e);
	        var mouseup = function() {
	          off(window, "mouseup", mouseup);
	          setTimeout(rehide, 20);
	        };
	        on(window, "mouseup", mouseup);
	      } else {
	        setTimeout(rehide, 50);
	      }
	    },

	    readOnlyChanged: function(val) {
	      if (!val) this.reset();
	    },

	    setUneditable: nothing,

	    needsContentAttribute: false
	  }, TextareaInput.prototype);

	  // CONTENTEDITABLE INPUT STYLE

	  function ContentEditableInput(cm) {
	    this.cm = cm;
	    this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null;
	    this.polling = new Delayed();
	    this.gracePeriod = false;
	  }

	  ContentEditableInput.prototype = copyObj({
	    init: function(display) {
	      var input = this, cm = input.cm;
	      var div = input.div = display.lineDiv;
	      disableBrowserMagic(div);

	      on(div, "paste", function(e) {
	        if (!signalDOMEvent(cm, e)) handlePaste(e, cm);
	      })

	      on(div, "compositionstart", function(e) {
	        var data = e.data;
	        input.composing = {sel: cm.doc.sel, data: data, startData: data};
	        if (!data) return;
	        var prim = cm.doc.sel.primary();
	        var line = cm.getLine(prim.head.line);
	        var found = line.indexOf(data, Math.max(0, prim.head.ch - data.length));
	        if (found > -1 && found <= prim.head.ch)
	          input.composing.sel = simpleSelection(Pos(prim.head.line, found),
	                                                Pos(prim.head.line, found + data.length));
	      });
	      on(div, "compositionupdate", function(e) {
	        input.composing.data = e.data;
	      });
	      on(div, "compositionend", function(e) {
	        var ours = input.composing;
	        if (!ours) return;
	        if (e.data != ours.startData && !/\u200b/.test(e.data))
	          ours.data = e.data;
	        // Need a small delay to prevent other code (input event,
	        // selection polling) from doing damage when fired right after
	        // compositionend.
	        setTimeout(function() {
	          if (!ours.handled)
	            input.applyComposition(ours);
	          if (input.composing == ours)
	            input.composing = null;
	        }, 50);
	      });

	      on(div, "touchstart", function() {
	        input.forceCompositionEnd();
	      });

	      on(div, "input", function() {
	        if (input.composing) return;
	        if (cm.isReadOnly() || !input.pollContent())
	          runInOp(input.cm, function() {regChange(cm);});
	      });

	      function onCopyCut(e) {
	        if (signalDOMEvent(cm, e)) return
	        if (cm.somethingSelected()) {
	          lastCopied = cm.getSelections();
	          if (e.type == "cut") cm.replaceSelection("", null, "cut");
	        } else if (!cm.options.lineWiseCopyCut) {
	          return;
	        } else {
	          var ranges = copyableRanges(cm);
	          lastCopied = ranges.text;
	          if (e.type == "cut") {
	            cm.operation(function() {
	              cm.setSelections(ranges.ranges, 0, sel_dontScroll);
	              cm.replaceSelection("", null, "cut");
	            });
	          }
	        }
	        // iOS exposes the clipboard API, but seems to discard content inserted into it
	        if (e.clipboardData && !ios) {
	          e.preventDefault();
	          e.clipboardData.clearData();
	          e.clipboardData.setData("text/plain", lastCopied.join("\n"));
	        } else {
	          // Old-fashioned briefly-focus-a-textarea hack
	          var kludge = hiddenTextarea(), te = kludge.firstChild;
	          cm.display.lineSpace.insertBefore(kludge, cm.display.lineSpace.firstChild);
	          te.value = lastCopied.join("\n");
	          var hadFocus = document.activeElement;
	          selectInput(te);
	          setTimeout(function() {
	            cm.display.lineSpace.removeChild(kludge);
	            hadFocus.focus();
	          }, 50);
	        }
	      }
	      on(div, "copy", onCopyCut);
	      on(div, "cut", onCopyCut);
	    },

	    prepareSelection: function() {
	      var result = prepareSelection(this.cm, false);
	      result.focus = this.cm.state.focused;
	      return result;
	    },

	    showSelection: function(info) {
	      if (!info || !this.cm.display.view.length) return;
	      if (info.focus) this.showPrimarySelection();
	      this.showMultipleSelections(info);
	    },

	    showPrimarySelection: function() {
	      var sel = window.getSelection(), prim = this.cm.doc.sel.primary();
	      var curAnchor = domToPos(this.cm, sel.anchorNode, sel.anchorOffset);
	      var curFocus = domToPos(this.cm, sel.focusNode, sel.focusOffset);
	      if (curAnchor && !curAnchor.bad && curFocus && !curFocus.bad &&
	          cmp(minPos(curAnchor, curFocus), prim.from()) == 0 &&
	          cmp(maxPos(curAnchor, curFocus), prim.to()) == 0)
	        return;

	      var start = posToDOM(this.cm, prim.from());
	      var end = posToDOM(this.cm, prim.to());
	      if (!start && !end) return;

	      var view = this.cm.display.view;
	      var old = sel.rangeCount && sel.getRangeAt(0);
	      if (!start) {
	        start = {node: view[0].measure.map[2], offset: 0};
	      } else if (!end) { // FIXME dangerously hacky
	        var measure = view[view.length - 1].measure;
	        var map = measure.maps ? measure.maps[measure.maps.length - 1] : measure.map;
	        end = {node: map[map.length - 1], offset: map[map.length - 2] - map[map.length - 3]};
	      }

	      try { var rng = range(start.node, start.offset, end.offset, end.node); }
	      catch(e) {} // Our model of the DOM might be outdated, in which case the range we try to set can be impossible
	      if (rng) {
	        if (!gecko && this.cm.state.focused) {
	          sel.collapse(start.node, start.offset);
	          if (!rng.collapsed) sel.addRange(rng);
	        } else {
	          sel.removeAllRanges();
	          sel.addRange(rng);
	        }
	        if (old && sel.anchorNode == null) sel.addRange(old);
	        else if (gecko) this.startGracePeriod();
	      }
	      this.rememberSelection();
	    },

	    startGracePeriod: function() {
	      var input = this;
	      clearTimeout(this.gracePeriod);
	      this.gracePeriod = setTimeout(function() {
	        input.gracePeriod = false;
	        if (input.selectionChanged())
	          input.cm.operation(function() { input.cm.curOp.selectionChanged = true; });
	      }, 20);
	    },

	    showMultipleSelections: function(info) {
	      removeChildrenAndAdd(this.cm.display.cursorDiv, info.cursors);
	      removeChildrenAndAdd(this.cm.display.selectionDiv, info.selection);
	    },

	    rememberSelection: function() {
	      var sel = window.getSelection();
	      this.lastAnchorNode = sel.anchorNode; this.lastAnchorOffset = sel.anchorOffset;
	      this.lastFocusNode = sel.focusNode; this.lastFocusOffset = sel.focusOffset;
	    },

	    selectionInEditor: function() {
	      var sel = window.getSelection();
	      if (!sel.rangeCount) return false;
	      var node = sel.getRangeAt(0).commonAncestorContainer;
	      return contains(this.div, node);
	    },

	    focus: function() {
	      if (this.cm.options.readOnly != "nocursor") this.div.focus();
	    },
	    blur: function() { this.div.blur(); },
	    getField: function() { return this.div; },

	    supportsTouch: function() { return true; },

	    receivedFocus: function() {
	      var input = this;
	      if (this.selectionInEditor())
	        this.pollSelection();
	      else
	        runInOp(this.cm, function() { input.cm.curOp.selectionChanged = true; });

	      function poll() {
	        if (input.cm.state.focused) {
	          input.pollSelection();
	          input.polling.set(input.cm.options.pollInterval, poll);
	        }
	      }
	      this.polling.set(this.cm.options.pollInterval, poll);
	    },

	    selectionChanged: function() {
	      var sel = window.getSelection();
	      return sel.anchorNode != this.lastAnchorNode || sel.anchorOffset != this.lastAnchorOffset ||
	        sel.focusNode != this.lastFocusNode || sel.focusOffset != this.lastFocusOffset;
	    },

	    pollSelection: function() {
	      if (!this.composing && !this.gracePeriod && this.selectionChanged()) {
	        var sel = window.getSelection(), cm = this.cm;
	        this.rememberSelection();
	        var anchor = domToPos(cm, sel.anchorNode, sel.anchorOffset);
	        var head = domToPos(cm, sel.focusNode, sel.focusOffset);
	        if (anchor && head) runInOp(cm, function() {
	          setSelection(cm.doc, simpleSelection(anchor, head), sel_dontScroll);
	          if (anchor.bad || head.bad) cm.curOp.selectionChanged = true;
	        });
	      }
	    },

	    pollContent: function() {
	      var cm = this.cm, display = cm.display, sel = cm.doc.sel.primary();
	      var from = sel.from(), to = sel.to();
	      if (from.line < display.viewFrom || to.line > display.viewTo - 1) return false;

	      var fromIndex;
	      if (from.line == display.viewFrom || (fromIndex = findViewIndex(cm, from.line)) == 0) {
	        var fromLine = lineNo(display.view[0].line);
	        var fromNode = display.view[0].node;
	      } else {
	        var fromLine = lineNo(display.view[fromIndex].line);
	        var fromNode = display.view[fromIndex - 1].node.nextSibling;
	      }
	      var toIndex = findViewIndex(cm, to.line);
	      if (toIndex == display.view.length - 1) {
	        var toLine = display.viewTo - 1;
	        var toNode = display.lineDiv.lastChild;
	      } else {
	        var toLine = lineNo(display.view[toIndex + 1].line) - 1;
	        var toNode = display.view[toIndex + 1].node.previousSibling;
	      }

	      var newText = cm.doc.splitLines(domTextBetween(cm, fromNode, toNode, fromLine, toLine));
	      var oldText = getBetween(cm.doc, Pos(fromLine, 0), Pos(toLine, getLine(cm.doc, toLine).text.length));
	      while (newText.length > 1 && oldText.length > 1) {
	        if (lst(newText) == lst(oldText)) { newText.pop(); oldText.pop(); toLine--; }
	        else if (newText[0] == oldText[0]) { newText.shift(); oldText.shift(); fromLine++; }
	        else break;
	      }

	      var cutFront = 0, cutEnd = 0;
	      var newTop = newText[0], oldTop = oldText[0], maxCutFront = Math.min(newTop.length, oldTop.length);
	      while (cutFront < maxCutFront && newTop.charCodeAt(cutFront) == oldTop.charCodeAt(cutFront))
	        ++cutFront;
	      var newBot = lst(newText), oldBot = lst(oldText);
	      var maxCutEnd = Math.min(newBot.length - (newText.length == 1 ? cutFront : 0),
	                               oldBot.length - (oldText.length == 1 ? cutFront : 0));
	      while (cutEnd < maxCutEnd &&
	             newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1))
	        ++cutEnd;

	      newText[newText.length - 1] = newBot.slice(0, newBot.length - cutEnd);
	      newText[0] = newText[0].slice(cutFront);

	      var chFrom = Pos(fromLine, cutFront);
	      var chTo = Pos(toLine, oldText.length ? lst(oldText).length - cutEnd : 0);
	      if (newText.length > 1 || newText[0] || cmp(chFrom, chTo)) {
	        replaceRange(cm.doc, newText, chFrom, chTo, "+input");
	        return true;
	      }
	    },

	    ensurePolled: function() {
	      this.forceCompositionEnd();
	    },
	    reset: function() {
	      this.forceCompositionEnd();
	    },
	    forceCompositionEnd: function() {
	      if (!this.composing || this.composing.handled) return;
	      this.applyComposition(this.composing);
	      this.composing.handled = true;
	      this.div.blur();
	      this.div.focus();
	    },
	    applyComposition: function(composing) {
	      if (this.cm.isReadOnly())
	        operation(this.cm, regChange)(this.cm)
	      else if (composing.data && composing.data != composing.startData)
	        operation(this.cm, applyTextInput)(this.cm, composing.data, 0, composing.sel);
	    },

	    setUneditable: function(node) {
	      node.contentEditable = "false"
	    },

	    onKeyPress: function(e) {
	      e.preventDefault();
	      if (!this.cm.isReadOnly())
	        operation(this.cm, applyTextInput)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0);
	    },

	    readOnlyChanged: function(val) {
	      this.div.contentEditable = String(val != "nocursor")
	    },

	    onContextMenu: nothing,
	    resetPosition: nothing,

	    needsContentAttribute: true
	  }, ContentEditableInput.prototype);

	  function posToDOM(cm, pos) {
	    var view = findViewForLine(cm, pos.line);
	    if (!view || view.hidden) return null;
	    var line = getLine(cm.doc, pos.line);
	    var info = mapFromLineView(view, line, pos.line);

	    var order = getOrder(line), side = "left";
	    if (order) {
	      var partPos = getBidiPartAt(order, pos.ch);
	      side = partPos % 2 ? "right" : "left";
	    }
	    var result = nodeAndOffsetInLineMap(info.map, pos.ch, side);
	    result.offset = result.collapse == "right" ? result.end : result.start;
	    return result;
	  }

	  function badPos(pos, bad) { if (bad) pos.bad = true; return pos; }

	  function domToPos(cm, node, offset) {
	    var lineNode;
	    if (node == cm.display.lineDiv) {
	      lineNode = cm.display.lineDiv.childNodes[offset];
	      if (!lineNode) return badPos(cm.clipPos(Pos(cm.display.viewTo - 1)), true);
	      node = null; offset = 0;
	    } else {
	      for (lineNode = node;; lineNode = lineNode.parentNode) {
	        if (!lineNode || lineNode == cm.display.lineDiv) return null;
	        if (lineNode.parentNode && lineNode.parentNode == cm.display.lineDiv) break;
	      }
	    }
	    for (var i = 0; i < cm.display.view.length; i++) {
	      var lineView = cm.display.view[i];
	      if (lineView.node == lineNode)
	        return locateNodeInLineView(lineView, node, offset);
	    }
	  }

	  function locateNodeInLineView(lineView, node, offset) {
	    var wrapper = lineView.text.firstChild, bad = false;
	    if (!node || !contains(wrapper, node)) return badPos(Pos(lineNo(lineView.line), 0), true);
	    if (node == wrapper) {
	      bad = true;
	      node = wrapper.childNodes[offset];
	      offset = 0;
	      if (!node) {
	        var line = lineView.rest ? lst(lineView.rest) : lineView.line;
	        return badPos(Pos(lineNo(line), line.text.length), bad);
	      }
	    }

	    var textNode = node.nodeType == 3 ? node : null, topNode = node;
	    if (!textNode && node.childNodes.length == 1 && node.firstChild.nodeType == 3) {
	      textNode = node.firstChild;
	      if (offset) offset = textNode.nodeValue.length;
	    }
	    while (topNode.parentNode != wrapper) topNode = topNode.parentNode;
	    var measure = lineView.measure, maps = measure.maps;

	    function find(textNode, topNode, offset) {
	      for (var i = -1; i < (maps ? maps.length : 0); i++) {
	        var map = i < 0 ? measure.map : maps[i];
	        for (var j = 0; j < map.length; j += 3) {
	          var curNode = map[j + 2];
	          if (curNode == textNode || curNode == topNode) {
	            var line = lineNo(i < 0 ? lineView.line : lineView.rest[i]);
	            var ch = map[j] + offset;
	            if (offset < 0 || curNode != textNode) ch = map[j + (offset ? 1 : 0)];
	            return Pos(line, ch);
	          }
	        }
	      }
	    }
	    var found = find(textNode, topNode, offset);
	    if (found) return badPos(found, bad);

	    // FIXME this is all really shaky. might handle the few cases it needs to handle, but likely to cause problems
	    for (var after = topNode.nextSibling, dist = textNode ? textNode.nodeValue.length - offset : 0; after; after = after.nextSibling) {
	      found = find(after, after.firstChild, 0);
	      if (found)
	        return badPos(Pos(found.line, found.ch - dist), bad);
	      else
	        dist += after.textContent.length;
	    }
	    for (var before = topNode.previousSibling, dist = offset; before; before = before.previousSibling) {
	      found = find(before, before.firstChild, -1);
	      if (found)
	        return badPos(Pos(found.line, found.ch + dist), bad);
	      else
	        dist += after.textContent.length;
	    }
	  }

	  function domTextBetween(cm, from, to, fromLine, toLine) {
	    var text = "", closing = false, lineSep = cm.doc.lineSeparator();
	    function recognizeMarker(id) { return function(marker) { return marker.id == id; }; }
	    function walk(node) {
	      if (node.nodeType == 1) {
	        var cmText = node.getAttribute("cm-text");
	        if (cmText != null) {
	          if (cmText == "") cmText = node.textContent.replace(/\u200b/g, "");
	          text += cmText;
	          return;
	        }
	        var markerID = node.getAttribute("cm-marker"), range;
	        if (markerID) {
	          var found = cm.findMarks(Pos(fromLine, 0), Pos(toLine + 1, 0), recognizeMarker(+markerID));
	          if (found.length && (range = found[0].find()))
	            text += getBetween(cm.doc, range.from, range.to).join(lineSep);
	          return;
	        }
	        if (node.getAttribute("contenteditable") == "false") return;
	        for (var i = 0; i < node.childNodes.length; i++)
	          walk(node.childNodes[i]);
	        if (/^(pre|div|p)$/i.test(node.nodeName))
	          closing = true;
	      } else if (node.nodeType == 3) {
	        var val = node.nodeValue;
	        if (!val) return;
	        if (closing) {
	          text += lineSep;
	          closing = false;
	        }
	        text += val;
	      }
	    }
	    for (;;) {
	      walk(from);
	      if (from == to) break;
	      from = from.nextSibling;
	    }
	    return text;
	  }

	  CodeMirror.inputStyles = {"textarea": TextareaInput, "contenteditable": ContentEditableInput};

	  // SELECTION / CURSOR

	  // Selection objects are immutable. A new one is created every time
	  // the selection changes. A selection is one or more non-overlapping
	  // (and non-touching) ranges, sorted, and an integer that indicates
	  // which one is the primary selection (the one that's scrolled into
	  // view, that getCursor returns, etc).
	  function Selection(ranges, primIndex) {
	    this.ranges = ranges;
	    this.primIndex = primIndex;
	  }

	  Selection.prototype = {
	    primary: function() { return this.ranges[this.primIndex]; },
	    equals: function(other) {
	      if (other == this) return true;
	      if (other.primIndex != this.primIndex || other.ranges.length != this.ranges.length) return false;
	      for (var i = 0; i < this.ranges.length; i++) {
	        var here = this.ranges[i], there = other.ranges[i];
	        if (cmp(here.anchor, there.anchor) != 0 || cmp(here.head, there.head) != 0) return false;
	      }
	      return true;
	    },
	    deepCopy: function() {
	      for (var out = [], i = 0; i < this.ranges.length; i++)
	        out[i] = new Range(copyPos(this.ranges[i].anchor), copyPos(this.ranges[i].head));
	      return new Selection(out, this.primIndex);
	    },
	    somethingSelected: function() {
	      for (var i = 0; i < this.ranges.length; i++)
	        if (!this.ranges[i].empty()) return true;
	      return false;
	    },
	    contains: function(pos, end) {
	      if (!end) end = pos;
	      for (var i = 0; i < this.ranges.length; i++) {
	        var range = this.ranges[i];
	        if (cmp(end, range.from()) >= 0 && cmp(pos, range.to()) <= 0)
	          return i;
	      }
	      return -1;
	    }
	  };

	  function Range(anchor, head) {
	    this.anchor = anchor; this.head = head;
	  }

	  Range.prototype = {
	    from: function() { return minPos(this.anchor, this.head); },
	    to: function() { return maxPos(this.anchor, this.head); },
	    empty: function() {
	      return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
	    }
	  };

	  // Take an unsorted, potentially overlapping set of ranges, and
	  // build a selection out of it. 'Consumes' ranges array (modifying
	  // it).
	  function normalizeSelection(ranges, primIndex) {
	    var prim = ranges[primIndex];
	    ranges.sort(function(a, b) { return cmp(a.from(), b.from()); });
	    primIndex = indexOf(ranges, prim);
	    for (var i = 1; i < ranges.length; i++) {
	      var cur = ranges[i], prev = ranges[i - 1];
	      if (cmp(prev.to(), cur.from()) >= 0) {
	        var from = minPos(prev.from(), cur.from()), to = maxPos(prev.to(), cur.to());
	        var inv = prev.empty() ? cur.from() == cur.head : prev.from() == prev.head;
	        if (i <= primIndex) --primIndex;
	        ranges.splice(--i, 2, new Range(inv ? to : from, inv ? from : to));
	      }
	    }
	    return new Selection(ranges, primIndex);
	  }

	  function simpleSelection(anchor, head) {
	    return new Selection([new Range(anchor, head || anchor)], 0);
	  }

	  // Most of the external API clips given positions to make sure they
	  // actually exist within the document.
	  function clipLine(doc, n) {return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1));}
	  function clipPos(doc, pos) {
	    if (pos.line < doc.first) return Pos(doc.first, 0);
	    var last = doc.first + doc.size - 1;
	    if (pos.line > last) return Pos(last, getLine(doc, last).text.length);
	    return clipToLen(pos, getLine(doc, pos.line).text.length);
	  }
	  function clipToLen(pos, linelen) {
	    var ch = pos.ch;
	    if (ch == null || ch > linelen) return Pos(pos.line, linelen);
	    else if (ch < 0) return Pos(pos.line, 0);
	    else return pos;
	  }
	  function isLine(doc, l) {return l >= doc.first && l < doc.first + doc.size;}
	  function clipPosArray(doc, array) {
	    for (var out = [], i = 0; i < array.length; i++) out[i] = clipPos(doc, array[i]);
	    return out;
	  }

	  // SELECTION UPDATES

	  // The 'scroll' parameter given to many of these indicated whether
	  // the new cursor position should be scrolled into view after
	  // modifying the selection.

	  // If shift is held or the extend flag is set, extends a range to
	  // include a given position (and optionally a second position).
	  // Otherwise, simply returns the range between the given positions.
	  // Used for cursor motion and such.
	  function extendRange(doc, range, head, other) {
	    if (doc.cm && doc.cm.display.shift || doc.extend) {
	      var anchor = range.anchor;
	      if (other) {
	        var posBefore = cmp(head, anchor) < 0;
	        if (posBefore != (cmp(other, anchor) < 0)) {
	          anchor = head;
	          head = other;
	        } else if (posBefore != (cmp(head, other) < 0)) {
	          head = other;
	        }
	      }
	      return new Range(anchor, head);
	    } else {
	      return new Range(other || head, head);
	    }
	  }

	  // Extend the primary selection range, discard the rest.
	  function extendSelection(doc, head, other, options) {
	    setSelection(doc, new Selection([extendRange(doc, doc.sel.primary(), head, other)], 0), options);
	  }

	  // Extend all selections (pos is an array of selections with length
	  // equal the number of selections)
	  function extendSelections(doc, heads, options) {
	    for (var out = [], i = 0; i < doc.sel.ranges.length; i++)
	      out[i] = extendRange(doc, doc.sel.ranges[i], heads[i], null);
	    var newSel = normalizeSelection(out, doc.sel.primIndex);
	    setSelection(doc, newSel, options);
	  }

	  // Updates a single range in the selection.
	  function replaceOneSelection(doc, i, range, options) {
	    var ranges = doc.sel.ranges.slice(0);
	    ranges[i] = range;
	    setSelection(doc, normalizeSelection(ranges, doc.sel.primIndex), options);
	  }

	  // Reset the selection to a single range.
	  function setSimpleSelection(doc, anchor, head, options) {
	    setSelection(doc, simpleSelection(anchor, head), options);
	  }

	  // Give beforeSelectionChange handlers a change to influence a
	  // selection update.
	  function filterSelectionChange(doc, sel, options) {
	    var obj = {
	      ranges: sel.ranges,
	      update: function(ranges) {
	        this.ranges = [];
	        for (var i = 0; i < ranges.length; i++)
	          this.ranges[i] = new Range(clipPos(doc, ranges[i].anchor),
	                                     clipPos(doc, ranges[i].head));
	      },
	      origin: options && options.origin
	    };
	    signal(doc, "beforeSelectionChange", doc, obj);
	    if (doc.cm) signal(doc.cm, "beforeSelectionChange", doc.cm, obj);
	    if (obj.ranges != sel.ranges) return normalizeSelection(obj.ranges, obj.ranges.length - 1);
	    else return sel;
	  }

	  function setSelectionReplaceHistory(doc, sel, options) {
	    var done = doc.history.done, last = lst(done);
	    if (last && last.ranges) {
	      done[done.length - 1] = sel;
	      setSelectionNoUndo(doc, sel, options);
	    } else {
	      setSelection(doc, sel, options);
	    }
	  }

	  // Set a new selection.
	  function setSelection(doc, sel, options) {
	    setSelectionNoUndo(doc, sel, options);
	    addSelectionToHistory(doc, doc.sel, doc.cm ? doc.cm.curOp.id : NaN, options);
	  }

	  function setSelectionNoUndo(doc, sel, options) {
	    if (hasHandler(doc, "beforeSelectionChange") || doc.cm && hasHandler(doc.cm, "beforeSelectionChange"))
	      sel = filterSelectionChange(doc, sel, options);

	    var bias = options && options.bias ||
	      (cmp(sel.primary().head, doc.sel.primary().head) < 0 ? -1 : 1);
	    setSelectionInner(doc, skipAtomicInSelection(doc, sel, bias, true));

	    if (!(options && options.scroll === false) && doc.cm)
	      ensureCursorVisible(doc.cm);
	  }

	  function setSelectionInner(doc, sel) {
	    if (sel.equals(doc.sel)) return;

	    doc.sel = sel;

	    if (doc.cm) {
	      doc.cm.curOp.updateInput = doc.cm.curOp.selectionChanged = true;
	      signalCursorActivity(doc.cm);
	    }
	    signalLater(doc, "cursorActivity", doc);
	  }

	  // Verify that the selection does not partially select any atomic
	  // marked ranges.
	  function reCheckSelection(doc) {
	    setSelectionInner(doc, skipAtomicInSelection(doc, doc.sel, null, false), sel_dontScroll);
	  }

	  // Return a selection that does not partially select any atomic
	  // ranges.
	  function skipAtomicInSelection(doc, sel, bias, mayClear) {
	    var out;
	    for (var i = 0; i < sel.ranges.length; i++) {
	      var range = sel.ranges[i];
	      var old = sel.ranges.length == doc.sel.ranges.length && doc.sel.ranges[i];
	      var newAnchor = skipAtomic(doc, range.anchor, old && old.anchor, bias, mayClear);
	      var newHead = skipAtomic(doc, range.head, old && old.head, bias, mayClear);
	      if (out || newAnchor != range.anchor || newHead != range.head) {
	        if (!out) out = sel.ranges.slice(0, i);
	        out[i] = new Range(newAnchor, newHead);
	      }
	    }
	    return out ? normalizeSelection(out, sel.primIndex) : sel;
	  }

	  function skipAtomicInner(doc, pos, oldPos, dir, mayClear) {
	    var line = getLine(doc, pos.line);
	    if (line.markedSpans) for (var i = 0; i < line.markedSpans.length; ++i) {
	      var sp = line.markedSpans[i], m = sp.marker;
	      if ((sp.from == null || (m.inclusiveLeft ? sp.from <= pos.ch : sp.from < pos.ch)) &&
	          (sp.to == null || (m.inclusiveRight ? sp.to >= pos.ch : sp.to > pos.ch))) {
	        if (mayClear) {
	          signal(m, "beforeCursorEnter");
	          if (m.explicitlyCleared) {
	            if (!line.markedSpans) break;
	            else {--i; continue;}
	          }
	        }
	        if (!m.atomic) continue;

	        if (oldPos) {
	          var near = m.find(dir < 0 ? 1 : -1), diff;
	          if (dir < 0 ? m.inclusiveRight : m.inclusiveLeft)
	            near = movePos(doc, near, -dir, near && near.line == pos.line ? line : null);
	          if (near && near.line == pos.line && (diff = cmp(near, oldPos)) && (dir < 0 ? diff < 0 : diff > 0))
	            return skipAtomicInner(doc, near, pos, dir, mayClear);
	        }

	        var far = m.find(dir < 0 ? -1 : 1);
	        if (dir < 0 ? m.inclusiveLeft : m.inclusiveRight)
	          far = movePos(doc, far, dir, far.line == pos.line ? line : null);
	        return far ? skipAtomicInner(doc, far, pos, dir, mayClear) : null;
	      }
	    }
	    return pos;
	  }

	  // Ensure a given position is not inside an atomic range.
	  function skipAtomic(doc, pos, oldPos, bias, mayClear) {
	    var dir = bias || 1;
	    var found = skipAtomicInner(doc, pos, oldPos, dir, mayClear) ||
	        (!mayClear && skipAtomicInner(doc, pos, oldPos, dir, true)) ||
	        skipAtomicInner(doc, pos, oldPos, -dir, mayClear) ||
	        (!mayClear && skipAtomicInner(doc, pos, oldPos, -dir, true));
	    if (!found) {
	      doc.cantEdit = true;
	      return Pos(doc.first, 0);
	    }
	    return found;
	  }

	  function movePos(doc, pos, dir, line) {
	    if (dir < 0 && pos.ch == 0) {
	      if (pos.line > doc.first) return clipPos(doc, Pos(pos.line - 1));
	      else return null;
	    } else if (dir > 0 && pos.ch == (line || getLine(doc, pos.line)).text.length) {
	      if (pos.line < doc.first + doc.size - 1) return Pos(pos.line + 1, 0);
	      else return null;
	    } else {
	      return new Pos(pos.line, pos.ch + dir);
	    }
	  }

	  // SELECTION DRAWING

	  function updateSelection(cm) {
	    cm.display.input.showSelection(cm.display.input.prepareSelection());
	  }

	  function prepareSelection(cm, primary) {
	    var doc = cm.doc, result = {};
	    var curFragment = result.cursors = document.createDocumentFragment();
	    var selFragment = result.selection = document.createDocumentFragment();

	    for (var i = 0; i < doc.sel.ranges.length; i++) {
	      if (primary === false && i == doc.sel.primIndex) continue;
	      var range = doc.sel.ranges[i];
	      if (range.from().line >= cm.display.viewTo || range.to().line < cm.display.viewFrom) continue;
	      var collapsed = range.empty();
	      if (collapsed || cm.options.showCursorWhenSelecting)
	        drawSelectionCursor(cm, range.head, curFragment);
	      if (!collapsed)
	        drawSelectionRange(cm, range, selFragment);
	    }
	    return result;
	  }

	  // Draws a cursor for the given range
	  function drawSelectionCursor(cm, head, output) {
	    var pos = cursorCoords(cm, head, "div", null, null, !cm.options.singleCursorHeightPerLine);

	    var cursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor"));
	    cursor.style.left = pos.left + "px";
	    cursor.style.top = pos.top + "px";
	    cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px";

	    if (pos.other) {
	      // Secondary cursor, shown when on a 'jump' in bi-directional text
	      var otherCursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor CodeMirror-secondarycursor"));
	      otherCursor.style.display = "";
	      otherCursor.style.left = pos.other.left + "px";
	      otherCursor.style.top = pos.other.top + "px";
	      otherCursor.style.height = (pos.other.bottom - pos.other.top) * .85 + "px";
	    }
	  }

	  // Draws the given range as a highlighted selection
	  function drawSelectionRange(cm, range, output) {
	    var display = cm.display, doc = cm.doc;
	    var fragment = document.createDocumentFragment();
	    var padding = paddingH(cm.display), leftSide = padding.left;
	    var rightSide = Math.max(display.sizerWidth, displayWidth(cm) - display.sizer.offsetLeft) - padding.right;

	    function add(left, top, width, bottom) {
	      if (top < 0) top = 0;
	      top = Math.round(top);
	      bottom = Math.round(bottom);
	      fragment.appendChild(elt("div", null, "CodeMirror-selected", "position: absolute; left: " + left +
	                               "px; top: " + top + "px; width: " + (width == null ? rightSide - left : width) +
	                               "px; height: " + (bottom - top) + "px"));
	    }

	    function drawForLine(line, fromArg, toArg) {
	      var lineObj = getLine(doc, line);
	      var lineLen = lineObj.text.length;
	      var start, end;
	      function coords(ch, bias) {
	        return charCoords(cm, Pos(line, ch), "div", lineObj, bias);
	      }

	      iterateBidiSections(getOrder(lineObj), fromArg || 0, toArg == null ? lineLen : toArg, function(from, to, dir) {
	        var leftPos = coords(from, "left"), rightPos, left, right;
	        if (from == to) {
	          rightPos = leftPos;
	          left = right = leftPos.left;
	        } else {
	          rightPos = coords(to - 1, "right");
	          if (dir == "rtl") { var tmp = leftPos; leftPos = rightPos; rightPos = tmp; }
	          left = leftPos.left;
	          right = rightPos.right;
	        }
	        if (fromArg == null && from == 0) left = leftSide;
	        if (rightPos.top - leftPos.top > 3) { // Different lines, draw top part
	          add(left, leftPos.top, null, leftPos.bottom);
	          left = leftSide;
	          if (leftPos.bottom < rightPos.top) add(left, leftPos.bottom, null, rightPos.top);
	        }
	        if (toArg == null && to == lineLen) right = rightSide;
	        if (!start || leftPos.top < start.top || leftPos.top == start.top && leftPos.left < start.left)
	          start = leftPos;
	        if (!end || rightPos.bottom > end.bottom || rightPos.bottom == end.bottom && rightPos.right > end.right)
	          end = rightPos;
	        if (left < leftSide + 1) left = leftSide;
	        add(left, rightPos.top, right - left, rightPos.bottom);
	      });
	      return {start: start, end: end};
	    }

	    var sFrom = range.from(), sTo = range.to();
	    if (sFrom.line == sTo.line) {
	      drawForLine(sFrom.line, sFrom.ch, sTo.ch);
	    } else {
	      var fromLine = getLine(doc, sFrom.line), toLine = getLine(doc, sTo.line);
	      var singleVLine = visualLine(fromLine) == visualLine(toLine);
	      var leftEnd = drawForLine(sFrom.line, sFrom.ch, singleVLine ? fromLine.text.length + 1 : null).end;
	      var rightStart = drawForLine(sTo.line, singleVLine ? 0 : null, sTo.ch).start;
	      if (singleVLine) {
	        if (leftEnd.top < rightStart.top - 2) {
	          add(leftEnd.right, leftEnd.top, null, leftEnd.bottom);
	          add(leftSide, rightStart.top, rightStart.left, rightStart.bottom);
	        } else {
	          add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom);
	        }
	      }
	      if (leftEnd.bottom < rightStart.top)
	        add(leftSide, leftEnd.bottom, null, rightStart.top);
	    }

	    output.appendChild(fragment);
	  }

	  // Cursor-blinking
	  function restartBlink(cm) {
	    if (!cm.state.focused) return;
	    var display = cm.display;
	    clearInterval(display.blinker);
	    var on = true;
	    display.cursorDiv.style.visibility = "";
	    if (cm.options.cursorBlinkRate > 0)
	      display.blinker = setInterval(function() {
	        display.cursorDiv.style.visibility = (on = !on) ? "" : "hidden";
	      }, cm.options.cursorBlinkRate);
	    else if (cm.options.cursorBlinkRate < 0)
	      display.cursorDiv.style.visibility = "hidden";
	  }

	  // HIGHLIGHT WORKER

	  function startWorker(cm, time) {
	    if (cm.doc.mode.startState && cm.doc.frontier < cm.display.viewTo)
	      cm.state.highlight.set(time, bind(highlightWorker, cm));
	  }

	  function highlightWorker(cm) {
	    var doc = cm.doc;
	    if (doc.frontier < doc.first) doc.frontier = doc.first;
	    if (doc.frontier >= cm.display.viewTo) return;
	    var end = +new Date + cm.options.workTime;
	    var state = copyState(doc.mode, getStateBefore(cm, doc.frontier));
	    var changedLines = [];

	    doc.iter(doc.frontier, Math.min(doc.first + doc.size, cm.display.viewTo + 500), function(line) {
	      if (doc.frontier >= cm.display.viewFrom) { // Visible
	        var oldStyles = line.styles, tooLong = line.text.length > cm.options.maxHighlightLength;
	        var highlighted = highlightLine(cm, line, tooLong ? copyState(doc.mode, state) : state, true);
	        line.styles = highlighted.styles;
	        var oldCls = line.styleClasses, newCls = highlighted.classes;
	        if (newCls) line.styleClasses = newCls;
	        else if (oldCls) line.styleClasses = null;
	        var ischange = !oldStyles || oldStyles.length != line.styles.length ||
	          oldCls != newCls && (!oldCls || !newCls || oldCls.bgClass != newCls.bgClass || oldCls.textClass != newCls.textClass);
	        for (var i = 0; !ischange && i < oldStyles.length; ++i) ischange = oldStyles[i] != line.styles[i];
	        if (ischange) changedLines.push(doc.frontier);
	        line.stateAfter = tooLong ? state : copyState(doc.mode, state);
	      } else {
	        if (line.text.length <= cm.options.maxHighlightLength)
	          processLine(cm, line.text, state);
	        line.stateAfter = doc.frontier % 5 == 0 ? copyState(doc.mode, state) : null;
	      }
	      ++doc.frontier;
	      if (+new Date > end) {
	        startWorker(cm, cm.options.workDelay);
	        return true;
	      }
	    });
	    if (changedLines.length) runInOp(cm, function() {
	      for (var i = 0; i < changedLines.length; i++)
	        regLineChange(cm, changedLines[i], "text");
	    });
	  }

	  // Finds the line to start with when starting a parse. Tries to
	  // find a line with a stateAfter, so that it can start with a
	  // valid state. If that fails, it returns the line with the
	  // smallest indentation, which tends to need the least context to
	  // parse correctly.
	  function findStartLine(cm, n, precise) {
	    var minindent, minline, doc = cm.doc;
	    var lim = precise ? -1 : n - (cm.doc.mode.innerMode ? 1000 : 100);
	    for (var search = n; search > lim; --search) {
	      if (search <= doc.first) return doc.first;
	      var line = getLine(doc, search - 1);
	      if (line.stateAfter && (!precise || search <= doc.frontier)) return search;
	      var indented = countColumn(line.text, null, cm.options.tabSize);
	      if (minline == null || minindent > indented) {
	        minline = search - 1;
	        minindent = indented;
	      }
	    }
	    return minline;
	  }

	  function getStateBefore(cm, n, precise) {
	    var doc = cm.doc, display = cm.display;
	    if (!doc.mode.startState) return true;
	    var pos = findStartLine(cm, n, precise), state = pos > doc.first && getLine(doc, pos-1).stateAfter;
	    if (!state) state = startState(doc.mode);
	    else state = copyState(doc.mode, state);
	    doc.iter(pos, n, function(line) {
	      processLine(cm, line.text, state);
	      var save = pos == n - 1 || pos % 5 == 0 || pos >= display.viewFrom && pos < display.viewTo;
	      line.stateAfter = save ? copyState(doc.mode, state) : null;
	      ++pos;
	    });
	    if (precise) doc.frontier = pos;
	    return state;
	  }

	  // POSITION MEASUREMENT

	  function paddingTop(display) {return display.lineSpace.offsetTop;}
	  function paddingVert(display) {return display.mover.offsetHeight - display.lineSpace.offsetHeight;}
	  function paddingH(display) {
	    if (display.cachedPaddingH) return display.cachedPaddingH;
	    var e = removeChildrenAndAdd(display.measure, elt("pre", "x"));
	    var style = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle;
	    var data = {left: parseInt(style.paddingLeft), right: parseInt(style.paddingRight)};
	    if (!isNaN(data.left) && !isNaN(data.right)) display.cachedPaddingH = data;
	    return data;
	  }

	  function scrollGap(cm) { return scrollerGap - cm.display.nativeBarWidth; }
	  function displayWidth(cm) {
	    return cm.display.scroller.clientWidth - scrollGap(cm) - cm.display.barWidth;
	  }
	  function displayHeight(cm) {
	    return cm.display.scroller.clientHeight - scrollGap(cm) - cm.display.barHeight;
	  }

	  // Ensure the lineView.wrapping.heights array is populated. This is
	  // an array of bottom offsets for the lines that make up a drawn
	  // line. When lineWrapping is on, there might be more than one
	  // height.
	  function ensureLineHeights(cm, lineView, rect) {
	    var wrapping = cm.options.lineWrapping;
	    var curWidth = wrapping && displayWidth(cm);
	    if (!lineView.measure.heights || wrapping && lineView.measure.width != curWidth) {
	      var heights = lineView.measure.heights = [];
	      if (wrapping) {
	        lineView.measure.width = curWidth;
	        var rects = lineView.text.firstChild.getClientRects();
	        for (var i = 0; i < rects.length - 1; i++) {
	          var cur = rects[i], next = rects[i + 1];
	          if (Math.abs(cur.bottom - next.bottom) > 2)
	            heights.push((cur.bottom + next.top) / 2 - rect.top);
	        }
	      }
	      heights.push(rect.bottom - rect.top);
	    }
	  }

	  // Find a line map (mapping character offsets to text nodes) and a
	  // measurement cache for the given line number. (A line view might
	  // contain multiple lines when collapsed ranges are present.)
	  function mapFromLineView(lineView, line, lineN) {
	    if (lineView.line == line)
	      return {map: lineView.measure.map, cache: lineView.measure.cache};
	    for (var i = 0; i < lineView.rest.length; i++)
	      if (lineView.rest[i] == line)
	        return {map: lineView.measure.maps[i], cache: lineView.measure.caches[i]};
	    for (var i = 0; i < lineView.rest.length; i++)
	      if (lineNo(lineView.rest[i]) > lineN)
	        return {map: lineView.measure.maps[i], cache: lineView.measure.caches[i], before: true};
	  }

	  // Render a line into the hidden node display.externalMeasured. Used
	  // when measurement is needed for a line that's not in the viewport.
	  function updateExternalMeasurement(cm, line) {
	    line = visualLine(line);
	    var lineN = lineNo(line);
	    var view = cm.display.externalMeasured = new LineView(cm.doc, line, lineN);
	    view.lineN = lineN;
	    var built = view.built = buildLineContent(cm, view);
	    view.text = built.pre;
	    removeChildrenAndAdd(cm.display.lineMeasure, built.pre);
	    return view;
	  }

	  // Get a {top, bottom, left, right} box (in line-local coordinates)
	  // for a given character.
	  function measureChar(cm, line, ch, bias) {
	    return measureCharPrepared(cm, prepareMeasureForLine(cm, line), ch, bias);
	  }

	  // Find a line view that corresponds to the given line number.
	  function findViewForLine(cm, lineN) {
	    if (lineN >= cm.display.viewFrom && lineN < cm.display.viewTo)
	      return cm.display.view[findViewIndex(cm, lineN)];
	    var ext = cm.display.externalMeasured;
	    if (ext && lineN >= ext.lineN && lineN < ext.lineN + ext.size)
	      return ext;
	  }

	  // Measurement can be split in two steps, the set-up work that
	  // applies to the whole line, and the measurement of the actual
	  // character. Functions like coordsChar, that need to do a lot of
	  // measurements in a row, can thus ensure that the set-up work is
	  // only done once.
	  function prepareMeasureForLine(cm, line) {
	    var lineN = lineNo(line);
	    var view = findViewForLine(cm, lineN);
	    if (view && !view.text) {
	      view = null;
	    } else if (view && view.changes) {
	      updateLineForChanges(cm, view, lineN, getDimensions(cm));
	      cm.curOp.forceUpdate = true;
	    }
	    if (!view)
	      view = updateExternalMeasurement(cm, line);

	    var info = mapFromLineView(view, line, lineN);
	    return {
	      line: line, view: view, rect: null,
	      map: info.map, cache: info.cache, before: info.before,
	      hasHeights: false
	    };
	  }

	  // Given a prepared measurement object, measures the position of an
	  // actual character (or fetches it from the cache).
	  function measureCharPrepared(cm, prepared, ch, bias, varHeight) {
	    if (prepared.before) ch = -1;
	    var key = ch + (bias || ""), found;
	    if (prepared.cache.hasOwnProperty(key)) {
	      found = prepared.cache[key];
	    } else {
	      if (!prepared.rect)
	        prepared.rect = prepared.view.text.getBoundingClientRect();
	      if (!prepared.hasHeights) {
	        ensureLineHeights(cm, prepared.view, prepared.rect);
	        prepared.hasHeights = true;
	      }
	      found = measureCharInner(cm, prepared, ch, bias);
	      if (!found.bogus) prepared.cache[key] = found;
	    }
	    return {left: found.left, right: found.right,
	            top: varHeight ? found.rtop : found.top,
	            bottom: varHeight ? found.rbottom : found.bottom};
	  }

	  var nullRect = {left: 0, right: 0, top: 0, bottom: 0};

	  function nodeAndOffsetInLineMap(map, ch, bias) {
	    var node, start, end, collapse;
	    // First, search the line map for the text node corresponding to,
	    // or closest to, the target character.
	    for (var i = 0; i < map.length; i += 3) {
	      var mStart = map[i], mEnd = map[i + 1];
	      if (ch < mStart) {
	        start = 0; end = 1;
	        collapse = "left";
	      } else if (ch < mEnd) {
	        start = ch - mStart;
	        end = start + 1;
	      } else if (i == map.length - 3 || ch == mEnd && map[i + 3] > ch) {
	        end = mEnd - mStart;
	        start = end - 1;
	        if (ch >= mEnd) collapse = "right";
	      }
	      if (start != null) {
	        node = map[i + 2];
	        if (mStart == mEnd && bias == (node.insertLeft ? "left" : "right"))
	          collapse = bias;
	        if (bias == "left" && start == 0)
	          while (i && map[i - 2] == map[i - 3] && map[i - 1].insertLeft) {
	            node = map[(i -= 3) + 2];
	            collapse = "left";
	          }
	        if (bias == "right" && start == mEnd - mStart)
	          while (i < map.length - 3 && map[i + 3] == map[i + 4] && !map[i + 5].insertLeft) {
	            node = map[(i += 3) + 2];
	            collapse = "right";
	          }
	        break;
	      }
	    }
	    return {node: node, start: start, end: end, collapse: collapse, coverStart: mStart, coverEnd: mEnd};
	  }

	  function measureCharInner(cm, prepared, ch, bias) {
	    var place = nodeAndOffsetInLineMap(prepared.map, ch, bias);
	    var node = place.node, start = place.start, end = place.end, collapse = place.collapse;

	    var rect;
	    if (node.nodeType == 3) { // If it is a text node, use a range to retrieve the coordinates.
	      for (var i = 0; i < 4; i++) { // Retry a maximum of 4 times when nonsense rectangles are returned
	        while (start && isExtendingChar(prepared.line.text.charAt(place.coverStart + start))) --start;
	        while (place.coverStart + end < place.coverEnd && isExtendingChar(prepared.line.text.charAt(place.coverStart + end))) ++end;
	        if (ie && ie_version < 9 && start == 0 && end == place.coverEnd - place.coverStart) {
	          rect = node.parentNode.getBoundingClientRect();
	        } else if (ie && cm.options.lineWrapping) {
	          var rects = range(node, start, end).getClientRects();
	          if (rects.length)
	            rect = rects[bias == "right" ? rects.length - 1 : 0];
	          else
	            rect = nullRect;
	        } else {
	          rect = range(node, start, end).getBoundingClientRect() || nullRect;
	        }
	        if (rect.left || rect.right || start == 0) break;
	        end = start;
	        start = start - 1;
	        collapse = "right";
	      }
	      if (ie && ie_version < 11) rect = maybeUpdateRectForZooming(cm.display.measure, rect);
	    } else { // If it is a widget, simply get the box for the whole widget.
	      if (start > 0) collapse = bias = "right";
	      var rects;
	      if (cm.options.lineWrapping && (rects = node.getClientRects()).length > 1)
	        rect = rects[bias == "right" ? rects.length - 1 : 0];
	      else
	        rect = node.getBoundingClientRect();
	    }
	    if (ie && ie_version < 9 && !start && (!rect || !rect.left && !rect.right)) {
	      var rSpan = node.parentNode.getClientRects()[0];
	      if (rSpan)
	        rect = {left: rSpan.left, right: rSpan.left + charWidth(cm.display), top: rSpan.top, bottom: rSpan.bottom};
	      else
	        rect = nullRect;
	    }

	    var rtop = rect.top - prepared.rect.top, rbot = rect.bottom - prepared.rect.top;
	    var mid = (rtop + rbot) / 2;
	    var heights = prepared.view.measure.heights;
	    for (var i = 0; i < heights.length - 1; i++)
	      if (mid < heights[i]) break;
	    var top = i ? heights[i - 1] : 0, bot = heights[i];
	    var result = {left: (collapse == "right" ? rect.right : rect.left) - prepared.rect.left,
	                  right: (collapse == "left" ? rect.left : rect.right) - prepared.rect.left,
	                  top: top, bottom: bot};
	    if (!rect.left && !rect.right) result.bogus = true;
	    if (!cm.options.singleCursorHeightPerLine) { result.rtop = rtop; result.rbottom = rbot; }

	    return result;
	  }

	  // Work around problem with bounding client rects on ranges being
	  // returned incorrectly when zoomed on IE10 and below.
	  function maybeUpdateRectForZooming(measure, rect) {
	    if (!window.screen || screen.logicalXDPI == null ||
	        screen.logicalXDPI == screen.deviceXDPI || !hasBadZoomedRects(measure))
	      return rect;
	    var scaleX = screen.logicalXDPI / screen.deviceXDPI;
	    var scaleY = screen.logicalYDPI / screen.deviceYDPI;
	    return {left: rect.left * scaleX, right: rect.right * scaleX,
	            top: rect.top * scaleY, bottom: rect.bottom * scaleY};
	  }

	  function clearLineMeasurementCacheFor(lineView) {
	    if (lineView.measure) {
	      lineView.measure.cache = {};
	      lineView.measure.heights = null;
	      if (lineView.rest) for (var i = 0; i < lineView.rest.length; i++)
	        lineView.measure.caches[i] = {};
	    }
	  }

	  function clearLineMeasurementCache(cm) {
	    cm.display.externalMeasure = null;
	    removeChildren(cm.display.lineMeasure);
	    for (var i = 0; i < cm.display.view.length; i++)
	      clearLineMeasurementCacheFor(cm.display.view[i]);
	  }

	  function clearCaches(cm) {
	    clearLineMeasurementCache(cm);
	    cm.display.cachedCharWidth = cm.display.cachedTextHeight = cm.display.cachedPaddingH = null;
	    if (!cm.options.lineWrapping) cm.display.maxLineChanged = true;
	    cm.display.lineNumChars = null;
	  }

	  function pageScrollX() { return window.pageXOffset || (document.documentElement || document.body).scrollLeft; }
	  function pageScrollY() { return window.pageYOffset || (document.documentElement || document.body).scrollTop; }

	  // Converts a {top, bottom, left, right} box from line-local
	  // coordinates into another coordinate system. Context may be one of
	  // "line", "div" (display.lineDiv), "local"/null (editor), "window",
	  // or "page".
	  function intoCoordSystem(cm, lineObj, rect, context) {
	    if (lineObj.widgets) for (var i = 0; i < lineObj.widgets.length; ++i) if (lineObj.widgets[i].above) {
	      var size = widgetHeight(lineObj.widgets[i]);
	      rect.top += size; rect.bottom += size;
	    }
	    if (context == "line") return rect;
	    if (!context) context = "local";
	    var yOff = heightAtLine(lineObj);
	    if (context == "local") yOff += paddingTop(cm.display);
	    else yOff -= cm.display.viewOffset;
	    if (context == "page" || context == "window") {
	      var lOff = cm.display.lineSpace.getBoundingClientRect();
	      yOff += lOff.top + (context == "window" ? 0 : pageScrollY());
	      var xOff = lOff.left + (context == "window" ? 0 : pageScrollX());
	      rect.left += xOff; rect.right += xOff;
	    }
	    rect.top += yOff; rect.bottom += yOff;
	    return rect;
	  }

	  // Coverts a box from "div" coords to another coordinate system.
	  // Context may be "window", "page", "div", or "local"/null.
	  function fromCoordSystem(cm, coords, context) {
	    if (context == "div") return coords;
	    var left = coords.left, top = coords.top;
	    // First move into "page" coordinate system
	    if (context == "page") {
	      left -= pageScrollX();
	      top -= pageScrollY();
	    } else if (context == "local" || !context) {
	      var localBox = cm.display.sizer.getBoundingClientRect();
	      left += localBox.left;
	      top += localBox.top;
	    }

	    var lineSpaceBox = cm.display.lineSpace.getBoundingClientRect();
	    return {left: left - lineSpaceBox.left, top: top - lineSpaceBox.top};
	  }

	  function charCoords(cm, pos, context, lineObj, bias) {
	    if (!lineObj) lineObj = getLine(cm.doc, pos.line);
	    return intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, bias), context);
	  }

	  // Returns a box for a given cursor position, which may have an
	  // 'other' property containing the position of the secondary cursor
	  // on a bidi boundary.
	  function cursorCoords(cm, pos, context, lineObj, preparedMeasure, varHeight) {
	    lineObj = lineObj || getLine(cm.doc, pos.line);
	    if (!preparedMeasure) preparedMeasure = prepareMeasureForLine(cm, lineObj);
	    function get(ch, right) {
	      var m = measureCharPrepared(cm, preparedMeasure, ch, right ? "right" : "left", varHeight);
	      if (right) m.left = m.right; else m.right = m.left;
	      return intoCoordSystem(cm, lineObj, m, context);
	    }
	    function getBidi(ch, partPos) {
	      var part = order[partPos], right = part.level % 2;
	      if (ch == bidiLeft(part) && partPos && part.level < order[partPos - 1].level) {
	        part = order[--partPos];
	        ch = bidiRight(part) - (part.level % 2 ? 0 : 1);
	        right = true;
	      } else if (ch == bidiRight(part) && partPos < order.length - 1 && part.level < order[partPos + 1].level) {
	        part = order[++partPos];
	        ch = bidiLeft(part) - part.level % 2;
	        right = false;
	      }
	      if (right && ch == part.to && ch > part.from) return get(ch - 1);
	      return get(ch, right);
	    }
	    var order = getOrder(lineObj), ch = pos.ch;
	    if (!order) return get(ch);
	    var partPos = getBidiPartAt(order, ch);
	    var val = getBidi(ch, partPos);
	    if (bidiOther != null) val.other = getBidi(ch, bidiOther);
	    return val;
	  }

	  // Used to cheaply estimate the coordinates for a position. Used for
	  // intermediate scroll updates.
	  function estimateCoords(cm, pos) {
	    var left = 0, pos = clipPos(cm.doc, pos);
	    if (!cm.options.lineWrapping) left = charWidth(cm.display) * pos.ch;
	    var lineObj = getLine(cm.doc, pos.line);
	    var top = heightAtLine(lineObj) + paddingTop(cm.display);
	    return {left: left, right: left, top: top, bottom: top + lineObj.height};
	  }

	  // Positions returned by coordsChar contain some extra information.
	  // xRel is the relative x position of the input coordinates compared
	  // to the found position (so xRel > 0 means the coordinates are to
	  // the right of the character position, for example). When outside
	  // is true, that means the coordinates lie outside the line's
	  // vertical range.
	  function PosWithInfo(line, ch, outside, xRel) {
	    var pos = Pos(line, ch);
	    pos.xRel = xRel;
	    if (outside) pos.outside = true;
	    return pos;
	  }

	  // Compute the character position closest to the given coordinates.
	  // Input must be lineSpace-local ("div" coordinate system).
	  function coordsChar(cm, x, y) {
	    var doc = cm.doc;
	    y += cm.display.viewOffset;
	    if (y < 0) return PosWithInfo(doc.first, 0, true, -1);
	    var lineN = lineAtHeight(doc, y), last = doc.first + doc.size - 1;
	    if (lineN > last)
	      return PosWithInfo(doc.first + doc.size - 1, getLine(doc, last).text.length, true, 1);
	    if (x < 0) x = 0;

	    var lineObj = getLine(doc, lineN);
	    for (;;) {
	      var found = coordsCharInner(cm, lineObj, lineN, x, y);
	      var merged = collapsedSpanAtEnd(lineObj);
	      var mergedPos = merged && merged.find(0, true);
	      if (merged && (found.ch > mergedPos.from.ch || found.ch == mergedPos.from.ch && found.xRel > 0))
	        lineN = lineNo(lineObj = mergedPos.to.line);
	      else
	        return found;
	    }
	  }

	  function coordsCharInner(cm, lineObj, lineNo, x, y) {
	    var innerOff = y - heightAtLine(lineObj);
	    var wrongLine = false, adjust = 2 * cm.display.wrapper.clientWidth;
	    var preparedMeasure = prepareMeasureForLine(cm, lineObj);

	    function getX(ch) {
	      var sp = cursorCoords(cm, Pos(lineNo, ch), "line", lineObj, preparedMeasure);
	      wrongLine = true;
	      if (innerOff > sp.bottom) return sp.left - adjust;
	      else if (innerOff < sp.top) return sp.left + adjust;
	      else wrongLine = false;
	      return sp.left;
	    }

	    var bidi = getOrder(lineObj), dist = lineObj.text.length;
	    var from = lineLeft(lineObj), to = lineRight(lineObj);
	    var fromX = getX(from), fromOutside = wrongLine, toX = getX(to), toOutside = wrongLine;

	    if (x > toX) return PosWithInfo(lineNo, to, toOutside, 1);
	    // Do a binary search between these bounds.
	    for (;;) {
	      if (bidi ? to == from || to == moveVisually(lineObj, from, 1) : to - from <= 1) {
	        var ch = x < fromX || x - fromX <= toX - x ? from : to;
	        var xDiff = x - (ch == from ? fromX : toX);
	        while (isExtendingChar(lineObj.text.charAt(ch))) ++ch;
	        var pos = PosWithInfo(lineNo, ch, ch == from ? fromOutside : toOutside,
	                              xDiff < -1 ? -1 : xDiff > 1 ? 1 : 0);
	        return pos;
	      }
	      var step = Math.ceil(dist / 2), middle = from + step;
	      if (bidi) {
	        middle = from;
	        for (var i = 0; i < step; ++i) middle = moveVisually(lineObj, middle, 1);
	      }
	      var middleX = getX(middle);
	      if (middleX > x) {to = middle; toX = middleX; if (toOutside = wrongLine) toX += 1000; dist = step;}
	      else {from = middle; fromX = middleX; fromOutside = wrongLine; dist -= step;}
	    }
	  }

	  var measureText;
	  // Compute the default text height.
	  function textHeight(display) {
	    if (display.cachedTextHeight != null) return display.cachedTextHeight;
	    if (measureText == null) {
	      measureText = elt("pre");
	      // Measure a bunch of lines, for browsers that compute
	      // fractional heights.
	      for (var i = 0; i < 49; ++i) {
	        measureText.appendChild(document.createTextNode("x"));
	        measureText.appendChild(elt("br"));
	      }
	      measureText.appendChild(document.createTextNode("x"));
	    }
	    removeChildrenAndAdd(display.measure, measureText);
	    var height = measureText.offsetHeight / 50;
	    if (height > 3) display.cachedTextHeight = height;
	    removeChildren(display.measure);
	    return height || 1;
	  }

	  // Compute the default character width.
	  function charWidth(display) {
	    if (display.cachedCharWidth != null) return display.cachedCharWidth;
	    var anchor = elt("span", "xxxxxxxxxx");
	    var pre = elt("pre", [anchor]);
	    removeChildrenAndAdd(display.measure, pre);
	    var rect = anchor.getBoundingClientRect(), width = (rect.right - rect.left) / 10;
	    if (width > 2) display.cachedCharWidth = width;
	    return width || 10;
	  }

	  // OPERATIONS

	  // Operations are used to wrap a series of changes to the editor
	  // state in such a way that each change won't have to update the
	  // cursor and display (which would be awkward, slow, and
	  // error-prone). Instead, display updates are batched and then all
	  // combined and executed at once.

	  var operationGroup = null;

	  var nextOpId = 0;
	  // Start a new operation.
	  function startOperation(cm) {
	    cm.curOp = {
	      cm: cm,
	      viewChanged: false,      // Flag that indicates that lines might need to be redrawn
	      startHeight: cm.doc.height, // Used to detect need to update scrollbar
	      forceUpdate: false,      // Used to force a redraw
	      updateInput: null,       // Whether to reset the input textarea
	      typing: false,           // Whether this reset should be careful to leave existing text (for compositing)
	      changeObjs: null,        // Accumulated changes, for firing change events
	      cursorActivityHandlers: null, // Set of handlers to fire cursorActivity on
	      cursorActivityCalled: 0, // Tracks which cursorActivity handlers have been called already
	      selectionChanged: false, // Whether the selection needs to be redrawn
	      updateMaxLine: false,    // Set when the widest line needs to be determined anew
	      scrollLeft: null, scrollTop: null, // Intermediate scroll position, not pushed to DOM yet
	      scrollToPos: null,       // Used to scroll to a specific position
	      focus: false,
	      id: ++nextOpId           // Unique ID
	    };
	    if (operationGroup) {
	      operationGroup.ops.push(cm.curOp);
	    } else {
	      cm.curOp.ownsGroup = operationGroup = {
	        ops: [cm.curOp],
	        delayedCallbacks: []
	      };
	    }
	  }

	  function fireCallbacksForOps(group) {
	    // Calls delayed callbacks and cursorActivity handlers until no
	    // new ones appear
	    var callbacks = group.delayedCallbacks, i = 0;
	    do {
	      for (; i < callbacks.length; i++)
	        callbacks[i].call(null);
	      for (var j = 0; j < group.ops.length; j++) {
	        var op = group.ops[j];
	        if (op.cursorActivityHandlers)
	          while (op.cursorActivityCalled < op.cursorActivityHandlers.length)
	            op.cursorActivityHandlers[op.cursorActivityCalled++].call(null, op.cm);
	      }
	    } while (i < callbacks.length);
	  }

	  // Finish an operation, updating the display and signalling delayed events
	  function endOperation(cm) {
	    var op = cm.curOp, group = op.ownsGroup;
	    if (!group) return;

	    try { fireCallbacksForOps(group); }
	    finally {
	      operationGroup = null;
	      for (var i = 0; i < group.ops.length; i++)
	        group.ops[i].cm.curOp = null;
	      endOperations(group);
	    }
	  }

	  // The DOM updates done when an operation finishes are batched so
	  // that the minimum number of relayouts are required.
	  function endOperations(group) {
	    var ops = group.ops;
	    for (var i = 0; i < ops.length; i++) // Read DOM
	      endOperation_R1(ops[i]);
	    for (var i = 0; i < ops.length; i++) // Write DOM (maybe)
	      endOperation_W1(ops[i]);
	    for (var i = 0; i < ops.length; i++) // Read DOM
	      endOperation_R2(ops[i]);
	    for (var i = 0; i < ops.length; i++) // Write DOM (maybe)
	      endOperation_W2(ops[i]);
	    for (var i = 0; i < ops.length; i++) // Read DOM
	      endOperation_finish(ops[i]);
	  }

	  function endOperation_R1(op) {
	    var cm = op.cm, display = cm.display;
	    maybeClipScrollbars(cm);
	    if (op.updateMaxLine) findMaxLine(cm);

	    op.mustUpdate = op.viewChanged || op.forceUpdate || op.scrollTop != null ||
	      op.scrollToPos && (op.scrollToPos.from.line < display.viewFrom ||
	                         op.scrollToPos.to.line >= display.viewTo) ||
	      display.maxLineChanged && cm.options.lineWrapping;
	    op.update = op.mustUpdate &&
	      new DisplayUpdate(cm, op.mustUpdate && {top: op.scrollTop, ensure: op.scrollToPos}, op.forceUpdate);
	  }

	  function endOperation_W1(op) {
	    op.updatedDisplay = op.mustUpdate && updateDisplayIfNeeded(op.cm, op.update);
	  }

	  function endOperation_R2(op) {
	    var cm = op.cm, display = cm.display;
	    if (op.updatedDisplay) updateHeightsInViewport(cm);

	    op.barMeasure = measureForScrollbars(cm);

	    // If the max line changed since it was last measured, measure it,
	    // and ensure the document's width matches it.
	    // updateDisplay_W2 will use these properties to do the actual resizing
	    if (display.maxLineChanged && !cm.options.lineWrapping) {
	      op.adjustWidthTo = measureChar(cm, display.maxLine, display.maxLine.text.length).left + 3;
	      cm.display.sizerWidth = op.adjustWidthTo;
	      op.barMeasure.scrollWidth =
	        Math.max(display.scroller.clientWidth, display.sizer.offsetLeft + op.adjustWidthTo + scrollGap(cm) + cm.display.barWidth);
	      op.maxScrollLeft = Math.max(0, display.sizer.offsetLeft + op.adjustWidthTo - displayWidth(cm));
	    }

	    if (op.updatedDisplay || op.selectionChanged)
	      op.preparedSelection = display.input.prepareSelection();
	  }

	  function endOperation_W2(op) {
	    var cm = op.cm;

	    if (op.adjustWidthTo != null) {
	      cm.display.sizer.style.minWidth = op.adjustWidthTo + "px";
	      if (op.maxScrollLeft < cm.doc.scrollLeft)
	        setScrollLeft(cm, Math.min(cm.display.scroller.scrollLeft, op.maxScrollLeft), true);
	      cm.display.maxLineChanged = false;
	    }

	    if (op.preparedSelection)
	      cm.display.input.showSelection(op.preparedSelection);
	    if (op.updatedDisplay || op.startHeight != cm.doc.height)
	      updateScrollbars(cm, op.barMeasure);
	    if (op.updatedDisplay)
	      setDocumentHeight(cm, op.barMeasure);

	    if (op.selectionChanged) restartBlink(cm);

	    if (cm.state.focused && op.updateInput)
	      cm.display.input.reset(op.typing);
	    if (op.focus && op.focus == activeElt() && (!document.hasFocus || document.hasFocus()))
	      ensureFocus(op.cm);
	  }

	  function endOperation_finish(op) {
	    var cm = op.cm, display = cm.display, doc = cm.doc;

	    if (op.updatedDisplay) postUpdateDisplay(cm, op.update);

	    // Abort mouse wheel delta measurement, when scrolling explicitly
	    if (display.wheelStartX != null && (op.scrollTop != null || op.scrollLeft != null || op.scrollToPos))
	      display.wheelStartX = display.wheelStartY = null;

	    // Propagate the scroll position to the actual DOM scroller
	    if (op.scrollTop != null && (display.scroller.scrollTop != op.scrollTop || op.forceScroll)) {
	      doc.scrollTop = Math.max(0, Math.min(display.scroller.scrollHeight - display.scroller.clientHeight, op.scrollTop));
	      display.scrollbars.setScrollTop(doc.scrollTop);
	      display.scroller.scrollTop = doc.scrollTop;
	    }
	    if (op.scrollLeft != null && (display.scroller.scrollLeft != op.scrollLeft || op.forceScroll)) {
	      doc.scrollLeft = Math.max(0, Math.min(display.scroller.scrollWidth - display.scroller.clientWidth, op.scrollLeft));
	      display.scrollbars.setScrollLeft(doc.scrollLeft);
	      display.scroller.scrollLeft = doc.scrollLeft;
	      alignHorizontally(cm);
	    }
	    // If we need to scroll a specific position into view, do so.
	    if (op.scrollToPos) {
	      var coords = scrollPosIntoView(cm, clipPos(doc, op.scrollToPos.from),
	                                     clipPos(doc, op.scrollToPos.to), op.scrollToPos.margin);
	      if (op.scrollToPos.isCursor && cm.state.focused) maybeScrollWindow(cm, coords);
	    }

	    // Fire events for markers that are hidden/unidden by editing or
	    // undoing
	    var hidden = op.maybeHiddenMarkers, unhidden = op.maybeUnhiddenMarkers;
	    if (hidden) for (var i = 0; i < hidden.length; ++i)
	      if (!hidden[i].lines.length) signal(hidden[i], "hide");
	    if (unhidden) for (var i = 0; i < unhidden.length; ++i)
	      if (unhidden[i].lines.length) signal(unhidden[i], "unhide");

	    if (display.wrapper.offsetHeight)
	      doc.scrollTop = cm.display.scroller.scrollTop;

	    // Fire change events, and delayed event handlers
	    if (op.changeObjs)
	      signal(cm, "changes", cm, op.changeObjs);
	    if (op.update)
	      op.update.finish();
	  }

	  // Run the given function in an operation
	  function runInOp(cm, f) {
	    if (cm.curOp) return f();
	    startOperation(cm);
	    try { return f(); }
	    finally { endOperation(cm); }
	  }
	  // Wraps a function in an operation. Returns the wrapped function.
	  function operation(cm, f) {
	    return function() {
	      if (cm.curOp) return f.apply(cm, arguments);
	      startOperation(cm);
	      try { return f.apply(cm, arguments); }
	      finally { endOperation(cm); }
	    };
	  }
	  // Used to add methods to editor and doc instances, wrapping them in
	  // operations.
	  function methodOp(f) {
	    return function() {
	      if (this.curOp) return f.apply(this, arguments);
	      startOperation(this);
	      try { return f.apply(this, arguments); }
	      finally { endOperation(this); }
	    };
	  }
	  function docMethodOp(f) {
	    return function() {
	      var cm = this.cm;
	      if (!cm || cm.curOp) return f.apply(this, arguments);
	      startOperation(cm);
	      try { return f.apply(this, arguments); }
	      finally { endOperation(cm); }
	    };
	  }

	  // VIEW TRACKING

	  // These objects are used to represent the visible (currently drawn)
	  // part of the document. A LineView may correspond to multiple
	  // logical lines, if those are connected by collapsed ranges.
	  function LineView(doc, line, lineN) {
	    // The starting line
	    this.line = line;
	    // Continuing lines, if any
	    this.rest = visualLineContinued(line);
	    // Number of logical lines in this visual line
	    this.size = this.rest ? lineNo(lst(this.rest)) - lineN + 1 : 1;
	    this.node = this.text = null;
	    this.hidden = lineIsHidden(doc, line);
	  }

	  // Create a range of LineView objects for the given lines.
	  function buildViewArray(cm, from, to) {
	    var array = [], nextPos;
	    for (var pos = from; pos < to; pos = nextPos) {
	      var view = new LineView(cm.doc, getLine(cm.doc, pos), pos);
	      nextPos = pos + view.size;
	      array.push(view);
	    }
	    return array;
	  }

	  // Updates the display.view data structure for a given change to the
	  // document. From and to are in pre-change coordinates. Lendiff is
	  // the amount of lines added or subtracted by the change. This is
	  // used for changes that span multiple lines, or change the way
	  // lines are divided into visual lines. regLineChange (below)
	  // registers single-line changes.
	  function regChange(cm, from, to, lendiff) {
	    if (from == null) from = cm.doc.first;
	    if (to == null) to = cm.doc.first + cm.doc.size;
	    if (!lendiff) lendiff = 0;

	    var display = cm.display;
	    if (lendiff && to < display.viewTo &&
	        (display.updateLineNumbers == null || display.updateLineNumbers > from))
	      display.updateLineNumbers = from;

	    cm.curOp.viewChanged = true;

	    if (from >= display.viewTo) { // Change after
	      if (sawCollapsedSpans && visualLineNo(cm.doc, from) < display.viewTo)
	        resetView(cm);
	    } else if (to <= display.viewFrom) { // Change before
	      if (sawCollapsedSpans && visualLineEndNo(cm.doc, to + lendiff) > display.viewFrom) {
	        resetView(cm);
	      } else {
	        display.viewFrom += lendiff;
	        display.viewTo += lendiff;
	      }
	    } else if (from <= display.viewFrom && to >= display.viewTo) { // Full overlap
	      resetView(cm);
	    } else if (from <= display.viewFrom) { // Top overlap
	      var cut = viewCuttingPoint(cm, to, to + lendiff, 1);
	      if (cut) {
	        display.view = display.view.slice(cut.index);
	        display.viewFrom = cut.lineN;
	        display.viewTo += lendiff;
	      } else {
	        resetView(cm);
	      }
	    } else if (to >= display.viewTo) { // Bottom overlap
	      var cut = viewCuttingPoint(cm, from, from, -1);
	      if (cut) {
	        display.view = display.view.slice(0, cut.index);
	        display.viewTo = cut.lineN;
	      } else {
	        resetView(cm);
	      }
	    } else { // Gap in the middle
	      var cutTop = viewCuttingPoint(cm, from, from, -1);
	      var cutBot = viewCuttingPoint(cm, to, to + lendiff, 1);
	      if (cutTop && cutBot) {
	        display.view = display.view.slice(0, cutTop.index)
	          .concat(buildViewArray(cm, cutTop.lineN, cutBot.lineN))
	          .concat(display.view.slice(cutBot.index));
	        display.viewTo += lendiff;
	      } else {
	        resetView(cm);
	      }
	    }

	    var ext = display.externalMeasured;
	    if (ext) {
	      if (to < ext.lineN)
	        ext.lineN += lendiff;
	      else if (from < ext.lineN + ext.size)
	        display.externalMeasured = null;
	    }
	  }

	  // Register a change to a single line. Type must be one of "text",
	  // "gutter", "class", "widget"
	  function regLineChange(cm, line, type) {
	    cm.curOp.viewChanged = true;
	    var display = cm.display, ext = cm.display.externalMeasured;
	    if (ext && line >= ext.lineN && line < ext.lineN + ext.size)
	      display.externalMeasured = null;

	    if (line < display.viewFrom || line >= display.viewTo) return;
	    var lineView = display.view[findViewIndex(cm, line)];
	    if (lineView.node == null) return;
	    var arr = lineView.changes || (lineView.changes = []);
	    if (indexOf(arr, type) == -1) arr.push(type);
	  }

	  // Clear the view.
	  function resetView(cm) {
	    cm.display.viewFrom = cm.display.viewTo = cm.doc.first;
	    cm.display.view = [];
	    cm.display.viewOffset = 0;
	  }

	  // Find the view element corresponding to a given line. Return null
	  // when the line isn't visible.
	  function findViewIndex(cm, n) {
	    if (n >= cm.display.viewTo) return null;
	    n -= cm.display.viewFrom;
	    if (n < 0) return null;
	    var view = cm.display.view;
	    for (var i = 0; i < view.length; i++) {
	      n -= view[i].size;
	      if (n < 0) return i;
	    }
	  }

	  function viewCuttingPoint(cm, oldN, newN, dir) {
	    var index = findViewIndex(cm, oldN), diff, view = cm.display.view;
	    if (!sawCollapsedSpans || newN == cm.doc.first + cm.doc.size)
	      return {index: index, lineN: newN};
	    for (var i = 0, n = cm.display.viewFrom; i < index; i++)
	      n += view[i].size;
	    if (n != oldN) {
	      if (dir > 0) {
	        if (index == view.length - 1) return null;
	        diff = (n + view[index].size) - oldN;
	        index++;
	      } else {
	        diff = n - oldN;
	      }
	      oldN += diff; newN += diff;
	    }
	    while (visualLineNo(cm.doc, newN) != newN) {
	      if (index == (dir < 0 ? 0 : view.length - 1)) return null;
	      newN += dir * view[index - (dir < 0 ? 1 : 0)].size;
	      index += dir;
	    }
	    return {index: index, lineN: newN};
	  }

	  // Force the view to cover a given range, adding empty view element
	  // or clipping off existing ones as needed.
	  function adjustView(cm, from, to) {
	    var display = cm.display, view = display.view;
	    if (view.length == 0 || from >= display.viewTo || to <= display.viewFrom) {
	      display.view = buildViewArray(cm, from, to);
	      display.viewFrom = from;
	    } else {
	      if (display.viewFrom > from)
	        display.view = buildViewArray(cm, from, display.viewFrom).concat(display.view);
	      else if (display.viewFrom < from)
	        display.view = display.view.slice(findViewIndex(cm, from));
	      display.viewFrom = from;
	      if (display.viewTo < to)
	        display.view = display.view.concat(buildViewArray(cm, display.viewTo, to));
	      else if (display.viewTo > to)
	        display.view = display.view.slice(0, findViewIndex(cm, to));
	    }
	    display.viewTo = to;
	  }

	  // Count the number of lines in the view whose DOM representation is
	  // out of date (or nonexistent).
	  function countDirtyView(cm) {
	    var view = cm.display.view, dirty = 0;
	    for (var i = 0; i < view.length; i++) {
	      var lineView = view[i];
	      if (!lineView.hidden && (!lineView.node || lineView.changes)) ++dirty;
	    }
	    return dirty;
	  }

	  // EVENT HANDLERS

	  // Attach the necessary event handlers when initializing the editor
	  function registerEventHandlers(cm) {
	    var d = cm.display;
	    on(d.scroller, "mousedown", operation(cm, onMouseDown));
	    // Older IE's will not fire a second mousedown for a double click
	    if (ie && ie_version < 11)
	      on(d.scroller, "dblclick", operation(cm, function(e) {
	        if (signalDOMEvent(cm, e)) return;
	        var pos = posFromMouse(cm, e);
	        if (!pos || clickInGutter(cm, e) || eventInWidget(cm.display, e)) return;
	        e_preventDefault(e);
	        var word = cm.findWordAt(pos);
	        extendSelection(cm.doc, word.anchor, word.head);
	      }));
	    else
	      on(d.scroller, "dblclick", function(e) { signalDOMEvent(cm, e) || e_preventDefault(e); });
	    // Some browsers fire contextmenu *after* opening the menu, at
	    // which point we can't mess with it anymore. Context menu is
	    // handled in onMouseDown for these browsers.
	    if (!captureRightClick) on(d.scroller, "contextmenu", function(e) {onContextMenu(cm, e);});

	    // Used to suppress mouse event handling when a touch happens
	    var touchFinished, prevTouch = {end: 0};
	    function finishTouch() {
	      if (d.activeTouch) {
	        touchFinished = setTimeout(function() {d.activeTouch = null;}, 1000);
	        prevTouch = d.activeTouch;
	        prevTouch.end = +new Date;
	      }
	    };
	    function isMouseLikeTouchEvent(e) {
	      if (e.touches.length != 1) return false;
	      var touch = e.touches[0];
	      return touch.radiusX <= 1 && touch.radiusY <= 1;
	    }
	    function farAway(touch, other) {
	      if (other.left == null) return true;
	      var dx = other.left - touch.left, dy = other.top - touch.top;
	      return dx * dx + dy * dy > 20 * 20;
	    }
	    on(d.scroller, "touchstart", function(e) {
	      if (!signalDOMEvent(cm, e) && !isMouseLikeTouchEvent(e)) {
	        clearTimeout(touchFinished);
	        var now = +new Date;
	        d.activeTouch = {start: now, moved: false,
	                         prev: now - prevTouch.end <= 300 ? prevTouch : null};
	        if (e.touches.length == 1) {
	          d.activeTouch.left = e.touches[0].pageX;
	          d.activeTouch.top = e.touches[0].pageY;
	        }
	      }
	    });
	    on(d.scroller, "touchmove", function() {
	      if (d.activeTouch) d.activeTouch.moved = true;
	    });
	    on(d.scroller, "touchend", function(e) {
	      var touch = d.activeTouch;
	      if (touch && !eventInWidget(d, e) && touch.left != null &&
	          !touch.moved && new Date - touch.start < 300) {
	        var pos = cm.coordsChar(d.activeTouch, "page"), range;
	        if (!touch.prev || farAway(touch, touch.prev)) // Single tap
	          range = new Range(pos, pos);
	        else if (!touch.prev.prev || farAway(touch, touch.prev.prev)) // Double tap
	          range = cm.findWordAt(pos);
	        else // Triple tap
	          range = new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0)));
	        cm.setSelection(range.anchor, range.head);
	        cm.focus();
	        e_preventDefault(e);
	      }
	      finishTouch();
	    });
	    on(d.scroller, "touchcancel", finishTouch);

	    // Sync scrolling between fake scrollbars and real scrollable
	    // area, ensure viewport is updated when scrolling.
	    on(d.scroller, "scroll", function() {
	      if (d.scroller.clientHeight) {
	        setScrollTop(cm, d.scroller.scrollTop);
	        setScrollLeft(cm, d.scroller.scrollLeft, true);
	        signal(cm, "scroll", cm);
	      }
	    });

	    // Listen to wheel events in order to try and update the viewport on time.
	    on(d.scroller, "mousewheel", function(e){onScrollWheel(cm, e);});
	    on(d.scroller, "DOMMouseScroll", function(e){onScrollWheel(cm, e);});

	    // Prevent wrapper from ever scrolling
	    on(d.wrapper, "scroll", function() { d.wrapper.scrollTop = d.wrapper.scrollLeft = 0; });

	    d.dragFunctions = {
	      enter: function(e) {if (!signalDOMEvent(cm, e)) e_stop(e);},
	      over: function(e) {if (!signalDOMEvent(cm, e)) { onDragOver(cm, e); e_stop(e); }},
	      start: function(e){onDragStart(cm, e);},
	      drop: operation(cm, onDrop),
	      leave: function(e) {if (!signalDOMEvent(cm, e)) { clearDragCursor(cm); }}
	    };

	    var inp = d.input.getField();
	    on(inp, "keyup", function(e) { onKeyUp.call(cm, e); });
	    on(inp, "keydown", operation(cm, onKeyDown));
	    on(inp, "keypress", operation(cm, onKeyPress));
	    on(inp, "focus", bind(onFocus, cm));
	    on(inp, "blur", bind(onBlur, cm));
	  }

	  function dragDropChanged(cm, value, old) {
	    var wasOn = old && old != CodeMirror.Init;
	    if (!value != !wasOn) {
	      var funcs = cm.display.dragFunctions;
	      var toggle = value ? on : off;
	      toggle(cm.display.scroller, "dragstart", funcs.start);
	      toggle(cm.display.scroller, "dragenter", funcs.enter);
	      toggle(cm.display.scroller, "dragover", funcs.over);
	      toggle(cm.display.scroller, "dragleave", funcs.leave);
	      toggle(cm.display.scroller, "drop", funcs.drop);
	    }
	  }

	  // Called when the window resizes
	  function onResize(cm) {
	    var d = cm.display;
	    if (d.lastWrapHeight == d.wrapper.clientHeight && d.lastWrapWidth == d.wrapper.clientWidth)
	      return;
	    // Might be a text scaling operation, clear size caches.
	    d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;
	    d.scrollbarsClipped = false;
	    cm.setSize();
	  }

	  // MOUSE EVENTS

	  // Return true when the given mouse event happened in a widget
	  function eventInWidget(display, e) {
	    for (var n = e_target(e); n != display.wrapper; n = n.parentNode) {
	      if (!n || (n.nodeType == 1 && n.getAttribute("cm-ignore-events") == "true") ||
	          (n.parentNode == display.sizer && n != display.mover))
	        return true;
	    }
	  }

	  // Given a mouse event, find the corresponding position. If liberal
	  // is false, it checks whether a gutter or scrollbar was clicked,
	  // and returns null if it was. forRect is used by rectangular
	  // selections, and tries to estimate a character position even for
	  // coordinates beyond the right of the text.
	  function posFromMouse(cm, e, liberal, forRect) {
	    var display = cm.display;
	    if (!liberal && e_target(e).getAttribute("cm-not-content") == "true") return null;

	    var x, y, space = display.lineSpace.getBoundingClientRect();
	    // Fails unpredictably on IE[67] when mouse is dragged around quickly.
	    try { x = e.clientX - space.left; y = e.clientY - space.top; }
	    catch (e) { return null; }
	    var coords = coordsChar(cm, x, y), line;
	    if (forRect && coords.xRel == 1 && (line = getLine(cm.doc, coords.line).text).length == coords.ch) {
	      var colDiff = countColumn(line, line.length, cm.options.tabSize) - line.length;
	      coords = Pos(coords.line, Math.max(0, Math.round((x - paddingH(cm.display).left) / charWidth(cm.display)) - colDiff));
	    }
	    return coords;
	  }

	  // A mouse down can be a single click, double click, triple click,
	  // start of selection drag, start of text drag, new cursor
	  // (ctrl-click), rectangle drag (alt-drag), or xwin
	  // middle-click-paste. Or it might be a click on something we should
	  // not interfere with, such as a scrollbar or widget.
	  function onMouseDown(e) {
	    var cm = this, display = cm.display;
	    if (signalDOMEvent(cm, e) || display.activeTouch && display.input.supportsTouch()) return;
	    display.shift = e.shiftKey;

	    if (eventInWidget(display, e)) {
	      if (!webkit) {
	        // Briefly turn off draggability, to allow widgets to do
	        // normal dragging things.
	        display.scroller.draggable = false;
	        setTimeout(function(){display.scroller.draggable = true;}, 100);
	      }
	      return;
	    }
	    if (clickInGutter(cm, e)) return;
	    var start = posFromMouse(cm, e);
	    window.focus();

	    switch (e_button(e)) {
	    case 1:
	      // #3261: make sure, that we're not starting a second selection
	      if (cm.state.selectingText)
	        cm.state.selectingText(e);
	      else if (start)
	        leftButtonDown(cm, e, start);
	      else if (e_target(e) == display.scroller)
	        e_preventDefault(e);
	      break;
	    case 2:
	      if (webkit) cm.state.lastMiddleDown = +new Date;
	      if (start) extendSelection(cm.doc, start);
	      setTimeout(function() {display.input.focus();}, 20);
	      e_preventDefault(e);
	      break;
	    case 3:
	      if (captureRightClick) onContextMenu(cm, e);
	      else delayBlurEvent(cm);
	      break;
	    }
	  }

	  var lastClick, lastDoubleClick;
	  function leftButtonDown(cm, e, start) {
	    if (ie) setTimeout(bind(ensureFocus, cm), 0);
	    else cm.curOp.focus = activeElt();

	    var now = +new Date, type;
	    if (lastDoubleClick && lastDoubleClick.time > now - 400 && cmp(lastDoubleClick.pos, start) == 0) {
	      type = "triple";
	    } else if (lastClick && lastClick.time > now - 400 && cmp(lastClick.pos, start) == 0) {
	      type = "double";
	      lastDoubleClick = {time: now, pos: start};
	    } else {
	      type = "single";
	      lastClick = {time: now, pos: start};
	    }

	    var sel = cm.doc.sel, modifier = mac ? e.metaKey : e.ctrlKey, contained;
	    if (cm.options.dragDrop && dragAndDrop && !cm.isReadOnly() &&
	        type == "single" && (contained = sel.contains(start)) > -1 &&
	        (cmp((contained = sel.ranges[contained]).from(), start) < 0 || start.xRel > 0) &&
	        (cmp(contained.to(), start) > 0 || start.xRel < 0))
	      leftButtonStartDrag(cm, e, start, modifier);
	    else
	      leftButtonSelect(cm, e, start, type, modifier);
	  }

	  // Start a text drag. When it ends, see if any dragging actually
	  // happen, and treat as a click if it didn't.
	  function leftButtonStartDrag(cm, e, start, modifier) {
	    var display = cm.display, startTime = +new Date;
	    var dragEnd = operation(cm, function(e2) {
	      if (webkit) display.scroller.draggable = false;
	      cm.state.draggingText = false;
	      off(document, "mouseup", dragEnd);
	      off(display.scroller, "drop", dragEnd);
	      if (Math.abs(e.clientX - e2.clientX) + Math.abs(e.clientY - e2.clientY) < 10) {
	        e_preventDefault(e2);
	        if (!modifier && +new Date - 200 < startTime)
	          extendSelection(cm.doc, start);
	        // Work around unexplainable focus problem in IE9 (#2127) and Chrome (#3081)
	        if (webkit || ie && ie_version == 9)
	          setTimeout(function() {document.body.focus(); display.input.focus();}, 20);
	        else
	          display.input.focus();
	      }
	    });
	    // Let the drag handler handle this.
	    if (webkit) display.scroller.draggable = true;
	    cm.state.draggingText = dragEnd;
	    // IE's approach to draggable
	    if (display.scroller.dragDrop) display.scroller.dragDrop();
	    on(document, "mouseup", dragEnd);
	    on(display.scroller, "drop", dragEnd);
	  }

	  // Normal selection, as opposed to text dragging.
	  function leftButtonSelect(cm, e, start, type, addNew) {
	    var display = cm.display, doc = cm.doc;
	    e_preventDefault(e);

	    var ourRange, ourIndex, startSel = doc.sel, ranges = startSel.ranges;
	    if (addNew && !e.shiftKey) {
	      ourIndex = doc.sel.contains(start);
	      if (ourIndex > -1)
	        ourRange = ranges[ourIndex];
	      else
	        ourRange = new Range(start, start);
	    } else {
	      ourRange = doc.sel.primary();
	      ourIndex = doc.sel.primIndex;
	    }

	    if (chromeOS ? e.shiftKey && e.metaKey : e.altKey) {
	      type = "rect";
	      if (!addNew) ourRange = new Range(start, start);
	      start = posFromMouse(cm, e, true, true);
	      ourIndex = -1;
	    } else if (type == "double") {
	      var word = cm.findWordAt(start);
	      if (cm.display.shift || doc.extend)
	        ourRange = extendRange(doc, ourRange, word.anchor, word.head);
	      else
	        ourRange = word;
	    } else if (type == "triple") {
	      var line = new Range(Pos(start.line, 0), clipPos(doc, Pos(start.line + 1, 0)));
	      if (cm.display.shift || doc.extend)
	        ourRange = extendRange(doc, ourRange, line.anchor, line.head);
	      else
	        ourRange = line;
	    } else {
	      ourRange = extendRange(doc, ourRange, start);
	    }

	    if (!addNew) {
	      ourIndex = 0;
	      setSelection(doc, new Selection([ourRange], 0), sel_mouse);
	      startSel = doc.sel;
	    } else if (ourIndex == -1) {
	      ourIndex = ranges.length;
	      setSelection(doc, normalizeSelection(ranges.concat([ourRange]), ourIndex),
	                   {scroll: false, origin: "*mouse"});
	    } else if (ranges.length > 1 && ranges[ourIndex].empty() && type == "single" && !e.shiftKey) {
	      setSelection(doc, normalizeSelection(ranges.slice(0, ourIndex).concat(ranges.slice(ourIndex + 1)), 0),
	                   {scroll: false, origin: "*mouse"});
	      startSel = doc.sel;
	    } else {
	      replaceOneSelection(doc, ourIndex, ourRange, sel_mouse);
	    }

	    var lastPos = start;
	    function extendTo(pos) {
	      if (cmp(lastPos, pos) == 0) return;
	      lastPos = pos;

	      if (type == "rect") {
	        var ranges = [], tabSize = cm.options.tabSize;
	        var startCol = countColumn(getLine(doc, start.line).text, start.ch, tabSize);
	        var posCol = countColumn(getLine(doc, pos.line).text, pos.ch, tabSize);
	        var left = Math.min(startCol, posCol), right = Math.max(startCol, posCol);
	        for (var line = Math.min(start.line, pos.line), end = Math.min(cm.lastLine(), Math.max(start.line, pos.line));
	             line <= end; line++) {
	          var text = getLine(doc, line).text, leftPos = findColumn(text, left, tabSize);
	          if (left == right)
	            ranges.push(new Range(Pos(line, leftPos), Pos(line, leftPos)));
	          else if (text.length > leftPos)
	            ranges.push(new Range(Pos(line, leftPos), Pos(line, findColumn(text, right, tabSize))));
	        }
	        if (!ranges.length) ranges.push(new Range(start, start));
	        setSelection(doc, normalizeSelection(startSel.ranges.slice(0, ourIndex).concat(ranges), ourIndex),
	                     {origin: "*mouse", scroll: false});
	        cm.scrollIntoView(pos);
	      } else {
	        var oldRange = ourRange;
	        var anchor = oldRange.anchor, head = pos;
	        if (type != "single") {
	          if (type == "double")
	            var range = cm.findWordAt(pos);
	          else
	            var range = new Range(Pos(pos.line, 0), clipPos(doc, Pos(pos.line + 1, 0)));
	          if (cmp(range.anchor, anchor) > 0) {
	            head = range.head;
	            anchor = minPos(oldRange.from(), range.anchor);
	          } else {
	            head = range.anchor;
	            anchor = maxPos(oldRange.to(), range.head);
	          }
	        }
	        var ranges = startSel.ranges.slice(0);
	        ranges[ourIndex] = new Range(clipPos(doc, anchor), head);
	        setSelection(doc, normalizeSelection(ranges, ourIndex), sel_mouse);
	      }
	    }

	    var editorSize = display.wrapper.getBoundingClientRect();
	    // Used to ensure timeout re-tries don't fire when another extend
	    // happened in the meantime (clearTimeout isn't reliable -- at
	    // least on Chrome, the timeouts still happen even when cleared,
	    // if the clear happens after their scheduled firing time).
	    var counter = 0;

	    function extend(e) {
	      var curCount = ++counter;
	      var cur = posFromMouse(cm, e, true, type == "rect");
	      if (!cur) return;
	      if (cmp(cur, lastPos) != 0) {
	        cm.curOp.focus = activeElt();
	        extendTo(cur);
	        var visible = visibleLines(display, doc);
	        if (cur.line >= visible.to || cur.line < visible.from)
	          setTimeout(operation(cm, function(){if (counter == curCount) extend(e);}), 150);
	      } else {
	        var outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0;
	        if (outside) setTimeout(operation(cm, function() {
	          if (counter != curCount) return;
	          display.scroller.scrollTop += outside;
	          extend(e);
	        }), 50);
	      }
	    }

	    function done(e) {
	      cm.state.selectingText = false;
	      counter = Infinity;
	      e_preventDefault(e);
	      display.input.focus();
	      off(document, "mousemove", move);
	      off(document, "mouseup", up);
	      doc.history.lastSelOrigin = null;
	    }

	    var move = operation(cm, function(e) {
	      if (!e_button(e)) done(e);
	      else extend(e);
	    });
	    var up = operation(cm, done);
	    cm.state.selectingText = up;
	    on(document, "mousemove", move);
	    on(document, "mouseup", up);
	  }

	  // Determines whether an event happened in the gutter, and fires the
	  // handlers for the corresponding event.
	  function gutterEvent(cm, e, type, prevent) {
	    try { var mX = e.clientX, mY = e.clientY; }
	    catch(e) { return false; }
	    if (mX >= Math.floor(cm.display.gutters.getBoundingClientRect().right)) return false;
	    if (prevent) e_preventDefault(e);

	    var display = cm.display;
	    var lineBox = display.lineDiv.getBoundingClientRect();

	    if (mY > lineBox.bottom || !hasHandler(cm, type)) return e_defaultPrevented(e);
	    mY -= lineBox.top - display.viewOffset;

	    for (var i = 0; i < cm.options.gutters.length; ++i) {
	      var g = display.gutters.childNodes[i];
	      if (g && g.getBoundingClientRect().right >= mX) {
	        var line = lineAtHeight(cm.doc, mY);
	        var gutter = cm.options.gutters[i];
	        signal(cm, type, cm, line, gutter, e);
	        return e_defaultPrevented(e);
	      }
	    }
	  }

	  function clickInGutter(cm, e) {
	    return gutterEvent(cm, e, "gutterClick", true);
	  }

	  // Kludge to work around strange IE behavior where it'll sometimes
	  // re-fire a series of drag-related events right after the drop (#1551)
	  var lastDrop = 0;

	  function onDrop(e) {
	    var cm = this;
	    clearDragCursor(cm);
	    if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e))
	      return;
	    e_preventDefault(e);
	    if (ie) lastDrop = +new Date;
	    var pos = posFromMouse(cm, e, true), files = e.dataTransfer.files;
	    if (!pos || cm.isReadOnly()) return;
	    // Might be a file drop, in which case we simply extract the text
	    // and insert it.
	    if (files && files.length && window.FileReader && window.File) {
	      var n = files.length, text = Array(n), read = 0;
	      var loadFile = function(file, i) {
	        if (cm.options.allowDropFileTypes &&
	            indexOf(cm.options.allowDropFileTypes, file.type) == -1)
	          return;

	        var reader = new FileReader;
	        reader.onload = operation(cm, function() {
	          var content = reader.result;
	          if (/[\x00-\x08\x0e-\x1f]{2}/.test(content)) content = "";
	          text[i] = content;
	          if (++read == n) {
	            pos = clipPos(cm.doc, pos);
	            var change = {from: pos, to: pos,
	                          text: cm.doc.splitLines(text.join(cm.doc.lineSeparator())),
	                          origin: "paste"};
	            makeChange(cm.doc, change);
	            setSelectionReplaceHistory(cm.doc, simpleSelection(pos, changeEnd(change)));
	          }
	        });
	        reader.readAsText(file);
	      };
	      for (var i = 0; i < n; ++i) loadFile(files[i], i);
	    } else { // Normal drop
	      // Don't do a replace if the drop happened inside of the selected text.
	      if (cm.state.draggingText && cm.doc.sel.contains(pos) > -1) {
	        cm.state.draggingText(e);
	        // Ensure the editor is re-focused
	        setTimeout(function() {cm.display.input.focus();}, 20);
	        return;
	      }
	      try {
	        var text = e.dataTransfer.getData("Text");
	        if (text) {
	          if (cm.state.draggingText && !(mac ? e.altKey : e.ctrlKey))
	            var selected = cm.listSelections();
	          setSelectionNoUndo(cm.doc, simpleSelection(pos, pos));
	          if (selected) for (var i = 0; i < selected.length; ++i)
	            replaceRange(cm.doc, "", selected[i].anchor, selected[i].head, "drag");
	          cm.replaceSelection(text, "around", "paste");
	          cm.display.input.focus();
	        }
	      }
	      catch(e){}
	    }
	  }

	  function onDragStart(cm, e) {
	    if (ie && (!cm.state.draggingText || +new Date - lastDrop < 100)) { e_stop(e); return; }
	    if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) return;

	    e.dataTransfer.setData("Text", cm.getSelection());
	    e.dataTransfer.effectAllowed = "copyMove"

	    // Use dummy image instead of default browsers image.
	    // Recent Safari (~6.0.2) have a tendency to segfault when this happens, so we don't do it there.
	    if (e.dataTransfer.setDragImage && !safari) {
	      var img = elt("img", null, null, "position: fixed; left: 0; top: 0;");
	      img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
	      if (presto) {
	        img.width = img.height = 1;
	        cm.display.wrapper.appendChild(img);
	        // Force a relayout, or Opera won't use our image for some obscure reason
	        img._top = img.offsetTop;
	      }
	      e.dataTransfer.setDragImage(img, 0, 0);
	      if (presto) img.parentNode.removeChild(img);
	    }
	  }

	  function onDragOver(cm, e) {
	    var pos = posFromMouse(cm, e);
	    if (!pos) return;
	    var frag = document.createDocumentFragment();
	    drawSelectionCursor(cm, pos, frag);
	    if (!cm.display.dragCursor) {
	      cm.display.dragCursor = elt("div", null, "CodeMirror-cursors CodeMirror-dragcursors");
	      cm.display.lineSpace.insertBefore(cm.display.dragCursor, cm.display.cursorDiv);
	    }
	    removeChildrenAndAdd(cm.display.dragCursor, frag);
	  }

	  function clearDragCursor(cm) {
	    if (cm.display.dragCursor) {
	      cm.display.lineSpace.removeChild(cm.display.dragCursor);
	      cm.display.dragCursor = null;
	    }
	  }

	  // SCROLL EVENTS

	  // Sync the scrollable area and scrollbars, ensure the viewport
	  // covers the visible area.
	  function setScrollTop(cm, val) {
	    if (Math.abs(cm.doc.scrollTop - val) < 2) return;
	    cm.doc.scrollTop = val;
	    if (!gecko) updateDisplaySimple(cm, {top: val});
	    if (cm.display.scroller.scrollTop != val) cm.display.scroller.scrollTop = val;
	    cm.display.scrollbars.setScrollTop(val);
	    if (gecko) updateDisplaySimple(cm);
	    startWorker(cm, 100);
	  }
	  // Sync scroller and scrollbar, ensure the gutter elements are
	  // aligned.
	  function setScrollLeft(cm, val, isScroller) {
	    if (isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) return;
	    val = Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth);
	    cm.doc.scrollLeft = val;
	    alignHorizontally(cm);
	    if (cm.display.scroller.scrollLeft != val) cm.display.scroller.scrollLeft = val;
	    cm.display.scrollbars.setScrollLeft(val);
	  }

	  // Since the delta values reported on mouse wheel events are
	  // unstandardized between browsers and even browser versions, and
	  // generally horribly unpredictable, this code starts by measuring
	  // the scroll effect that the first few mouse wheel events have,
	  // and, from that, detects the way it can convert deltas to pixel
	  // offsets afterwards.
	  //
	  // The reason we want to know the amount a wheel event will scroll
	  // is that it gives us a chance to update the display before the
	  // actual scrolling happens, reducing flickering.

	  var wheelSamples = 0, wheelPixelsPerUnit = null;
	  // Fill in a browser-detected starting value on browsers where we
	  // know one. These don't have to be accurate -- the result of them
	  // being wrong would just be a slight flicker on the first wheel
	  // scroll (if it is large enough).
	  if (ie) wheelPixelsPerUnit = -.53;
	  else if (gecko) wheelPixelsPerUnit = 15;
	  else if (chrome) wheelPixelsPerUnit = -.7;
	  else if (safari) wheelPixelsPerUnit = -1/3;

	  var wheelEventDelta = function(e) {
	    var dx = e.wheelDeltaX, dy = e.wheelDeltaY;
	    if (dx == null && e.detail && e.axis == e.HORIZONTAL_AXIS) dx = e.detail;
	    if (dy == null && e.detail && e.axis == e.VERTICAL_AXIS) dy = e.detail;
	    else if (dy == null) dy = e.wheelDelta;
	    return {x: dx, y: dy};
	  };
	  CodeMirror.wheelEventPixels = function(e) {
	    var delta = wheelEventDelta(e);
	    delta.x *= wheelPixelsPerUnit;
	    delta.y *= wheelPixelsPerUnit;
	    return delta;
	  };

	  function onScrollWheel(cm, e) {
	    var delta = wheelEventDelta(e), dx = delta.x, dy = delta.y;

	    var display = cm.display, scroll = display.scroller;
	    // Quit if there's nothing to scroll here
	    var canScrollX = scroll.scrollWidth > scroll.clientWidth;
	    var canScrollY = scroll.scrollHeight > scroll.clientHeight;
	    if (!(dx && canScrollX || dy && canScrollY)) return;

	    // Webkit browsers on OS X abort momentum scrolls when the target
	    // of the scroll event is removed from the scrollable element.
	    // This hack (see related code in patchDisplay) makes sure the
	    // element is kept around.
	    if (dy && mac && webkit) {
	      outer: for (var cur = e.target, view = display.view; cur != scroll; cur = cur.parentNode) {
	        for (var i = 0; i < view.length; i++) {
	          if (view[i].node == cur) {
	            cm.display.currentWheelTarget = cur;
	            break outer;
	          }
	        }
	      }
	    }

	    // On some browsers, horizontal scrolling will cause redraws to
	    // happen before the gutter has been realigned, causing it to
	    // wriggle around in a most unseemly way. When we have an
	    // estimated pixels/delta value, we just handle horizontal
	    // scrolling entirely here. It'll be slightly off from native, but
	    // better than glitching out.
	    if (dx && !gecko && !presto && wheelPixelsPerUnit != null) {
	      if (dy && canScrollY)
	        setScrollTop(cm, Math.max(0, Math.min(scroll.scrollTop + dy * wheelPixelsPerUnit, scroll.scrollHeight - scroll.clientHeight)));
	      setScrollLeft(cm, Math.max(0, Math.min(scroll.scrollLeft + dx * wheelPixelsPerUnit, scroll.scrollWidth - scroll.clientWidth)));
	      // Only prevent default scrolling if vertical scrolling is
	      // actually possible. Otherwise, it causes vertical scroll
	      // jitter on OSX trackpads when deltaX is small and deltaY
	      // is large (issue #3579)
	      if (!dy || (dy && canScrollY))
	        e_preventDefault(e);
	      display.wheelStartX = null; // Abort measurement, if in progress
	      return;
	    }

	    // 'Project' the visible viewport to cover the area that is being
	    // scrolled into view (if we know enough to estimate it).
	    if (dy && wheelPixelsPerUnit != null) {
	      var pixels = dy * wheelPixelsPerUnit;
	      var top = cm.doc.scrollTop, bot = top + display.wrapper.clientHeight;
	      if (pixels < 0) top = Math.max(0, top + pixels - 50);
	      else bot = Math.min(cm.doc.height, bot + pixels + 50);
	      updateDisplaySimple(cm, {top: top, bottom: bot});
	    }

	    if (wheelSamples < 20) {
	      if (display.wheelStartX == null) {
	        display.wheelStartX = scroll.scrollLeft; display.wheelStartY = scroll.scrollTop;
	        display.wheelDX = dx; display.wheelDY = dy;
	        setTimeout(function() {
	          if (display.wheelStartX == null) return;
	          var movedX = scroll.scrollLeft - display.wheelStartX;
	          var movedY = scroll.scrollTop - display.wheelStartY;
	          var sample = (movedY && display.wheelDY && movedY / display.wheelDY) ||
	            (movedX && display.wheelDX && movedX / display.wheelDX);
	          display.wheelStartX = display.wheelStartY = null;
	          if (!sample) return;
	          wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1);
	          ++wheelSamples;
	        }, 200);
	      } else {
	        display.wheelDX += dx; display.wheelDY += dy;
	      }
	    }
	  }

	  // KEY EVENTS

	  // Run a handler that was bound to a key.
	  function doHandleBinding(cm, bound, dropShift) {
	    if (typeof bound == "string") {
	      bound = commands[bound];
	      if (!bound) return false;
	    }
	    // Ensure previous input has been read, so that the handler sees a
	    // consistent view of the document
	    cm.display.input.ensurePolled();
	    var prevShift = cm.display.shift, done = false;
	    try {
	      if (cm.isReadOnly()) cm.state.suppressEdits = true;
	      if (dropShift) cm.display.shift = false;
	      done = bound(cm) != Pass;
	    } finally {
	      cm.display.shift = prevShift;
	      cm.state.suppressEdits = false;
	    }
	    return done;
	  }

	  function lookupKeyForEditor(cm, name, handle) {
	    for (var i = 0; i < cm.state.keyMaps.length; i++) {
	      var result = lookupKey(name, cm.state.keyMaps[i], handle, cm);
	      if (result) return result;
	    }
	    return (cm.options.extraKeys && lookupKey(name, cm.options.extraKeys, handle, cm))
	      || lookupKey(name, cm.options.keyMap, handle, cm);
	  }

	  var stopSeq = new Delayed;
	  function dispatchKey(cm, name, e, handle) {
	    var seq = cm.state.keySeq;
	    if (seq) {
	      if (isModifierKey(name)) return "handled";
	      stopSeq.set(50, function() {
	        if (cm.state.keySeq == seq) {
	          cm.state.keySeq = null;
	          cm.display.input.reset();
	        }
	      });
	      name = seq + " " + name;
	    }
	    var result = lookupKeyForEditor(cm, name, handle);

	    if (result == "multi")
	      cm.state.keySeq = name;
	    if (result == "handled")
	      signalLater(cm, "keyHandled", cm, name, e);

	    if (result == "handled" || result == "multi") {
	      e_preventDefault(e);
	      restartBlink(cm);
	    }

	    if (seq && !result && /\'$/.test(name)) {
	      e_preventDefault(e);
	      return true;
	    }
	    return !!result;
	  }

	  // Handle a key from the keydown event.
	  function handleKeyBinding(cm, e) {
	    var name = keyName(e, true);
	    if (!name) return false;

	    if (e.shiftKey && !cm.state.keySeq) {
	      // First try to resolve full name (including 'Shift-'). Failing
	      // that, see if there is a cursor-motion command (starting with
	      // 'go') bound to the keyname without 'Shift-'.
	      return dispatchKey(cm, "Shift-" + name, e, function(b) {return doHandleBinding(cm, b, true);})
	          || dispatchKey(cm, name, e, function(b) {
	               if (typeof b == "string" ? /^go[A-Z]/.test(b) : b.motion)
	                 return doHandleBinding(cm, b);
	             });
	    } else {
	      return dispatchKey(cm, name, e, function(b) { return doHandleBinding(cm, b); });
	    }
	  }

	  // Handle a key from the keypress event
	  function handleCharBinding(cm, e, ch) {
	    return dispatchKey(cm, "'" + ch + "'", e,
	                       function(b) { return doHandleBinding(cm, b, true); });
	  }

	  var lastStoppedKey = null;
	  function onKeyDown(e) {
	    var cm = this;
	    cm.curOp.focus = activeElt();
	    if (signalDOMEvent(cm, e)) return;
	    // IE does strange things with escape.
	    if (ie && ie_version < 11 && e.keyCode == 27) e.returnValue = false;
	    var code = e.keyCode;
	    cm.display.shift = code == 16 || e.shiftKey;
	    var handled = handleKeyBinding(cm, e);
	    if (presto) {
	      lastStoppedKey = handled ? code : null;
	      // Opera has no cut event... we try to at least catch the key combo
	      if (!handled && code == 88 && !hasCopyEvent && (mac ? e.metaKey : e.ctrlKey))
	        cm.replaceSelection("", null, "cut");
	    }

	    // Turn mouse into crosshair when Alt is held on Mac.
	    if (code == 18 && !/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className))
	      showCrossHair(cm);
	  }

	  function showCrossHair(cm) {
	    var lineDiv = cm.display.lineDiv;
	    addClass(lineDiv, "CodeMirror-crosshair");

	    function up(e) {
	      if (e.keyCode == 18 || !e.altKey) {
	        rmClass(lineDiv, "CodeMirror-crosshair");
	        off(document, "keyup", up);
	        off(document, "mouseover", up);
	      }
	    }
	    on(document, "keyup", up);
	    on(document, "mouseover", up);
	  }

	  function onKeyUp(e) {
	    if (e.keyCode == 16) this.doc.sel.shift = false;
	    signalDOMEvent(this, e);
	  }

	  function onKeyPress(e) {
	    var cm = this;
	    if (eventInWidget(cm.display, e) || signalDOMEvent(cm, e) || e.ctrlKey && !e.altKey || mac && e.metaKey) return;
	    var keyCode = e.keyCode, charCode = e.charCode;
	    if (presto && keyCode == lastStoppedKey) {lastStoppedKey = null; e_preventDefault(e); return;}
	    if ((presto && (!e.which || e.which < 10)) && handleKeyBinding(cm, e)) return;
	    var ch = String.fromCharCode(charCode == null ? keyCode : charCode);
	    if (handleCharBinding(cm, e, ch)) return;
	    cm.display.input.onKeyPress(e);
	  }

	  // FOCUS/BLUR EVENTS

	  function delayBlurEvent(cm) {
	    cm.state.delayingBlurEvent = true;
	    setTimeout(function() {
	      if (cm.state.delayingBlurEvent) {
	        cm.state.delayingBlurEvent = false;
	        onBlur(cm);
	      }
	    }, 100);
	  }

	  function onFocus(cm) {
	    if (cm.state.delayingBlurEvent) cm.state.delayingBlurEvent = false;

	    if (cm.options.readOnly == "nocursor") return;
	    if (!cm.state.focused) {
	      signal(cm, "focus", cm);
	      cm.state.focused = true;
	      addClass(cm.display.wrapper, "CodeMirror-focused");
	      // This test prevents this from firing when a context
	      // menu is closed (since the input reset would kill the
	      // select-all detection hack)
	      if (!cm.curOp && cm.display.selForContextMenu != cm.doc.sel) {
	        cm.display.input.reset();
	        if (webkit) setTimeout(function() { cm.display.input.reset(true); }, 20); // Issue #1730
	      }
	      cm.display.input.receivedFocus();
	    }
	    restartBlink(cm);
	  }
	  function onBlur(cm) {
	    if (cm.state.delayingBlurEvent) return;

	    if (cm.state.focused) {
	      signal(cm, "blur", cm);
	      cm.state.focused = false;
	      rmClass(cm.display.wrapper, "CodeMirror-focused");
	    }
	    clearInterval(cm.display.blinker);
	    setTimeout(function() {if (!cm.state.focused) cm.display.shift = false;}, 150);
	  }

	  // CONTEXT MENU HANDLING

	  // To make the context menu work, we need to briefly unhide the
	  // textarea (making it as unobtrusive as possible) to let the
	  // right-click take effect on it.
	  function onContextMenu(cm, e) {
	    if (eventInWidget(cm.display, e) || contextMenuInGutter(cm, e)) return;
	    if (signalDOMEvent(cm, e, "contextmenu")) return;
	    cm.display.input.onContextMenu(e);
	  }

	  function contextMenuInGutter(cm, e) {
	    if (!hasHandler(cm, "gutterContextMenu")) return false;
	    return gutterEvent(cm, e, "gutterContextMenu", false);
	  }

	  // UPDATING

	  // Compute the position of the end of a change (its 'to' property
	  // refers to the pre-change end).
	  var changeEnd = CodeMirror.changeEnd = function(change) {
	    if (!change.text) return change.to;
	    return Pos(change.from.line + change.text.length - 1,
	               lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0));
	  };

	  // Adjust a position to refer to the post-change position of the
	  // same text, or the end of the change if the change covers it.
	  function adjustForChange(pos, change) {
	    if (cmp(pos, change.from) < 0) return pos;
	    if (cmp(pos, change.to) <= 0) return changeEnd(change);

	    var line = pos.line + change.text.length - (change.to.line - change.from.line) - 1, ch = pos.ch;
	    if (pos.line == change.to.line) ch += changeEnd(change).ch - change.to.ch;
	    return Pos(line, ch);
	  }

	  function computeSelAfterChange(doc, change) {
	    var out = [];
	    for (var i = 0; i < doc.sel.ranges.length; i++) {
	      var range = doc.sel.ranges[i];
	      out.push(new Range(adjustForChange(range.anchor, change),
	                         adjustForChange(range.head, change)));
	    }
	    return normalizeSelection(out, doc.sel.primIndex);
	  }

	  function offsetPos(pos, old, nw) {
	    if (pos.line == old.line)
	      return Pos(nw.line, pos.ch - old.ch + nw.ch);
	    else
	      return Pos(nw.line + (pos.line - old.line), pos.ch);
	  }

	  // Used by replaceSelections to allow moving the selection to the
	  // start or around the replaced test. Hint may be "start" or "around".
	  function computeReplacedSel(doc, changes, hint) {
	    var out = [];
	    var oldPrev = Pos(doc.first, 0), newPrev = oldPrev;
	    for (var i = 0; i < changes.length; i++) {
	      var change = changes[i];
	      var from = offsetPos(change.from, oldPrev, newPrev);
	      var to = offsetPos(changeEnd(change), oldPrev, newPrev);
	      oldPrev = change.to;
	      newPrev = to;
	      if (hint == "around") {
	        var range = doc.sel.ranges[i], inv = cmp(range.head, range.anchor) < 0;
	        out[i] = new Range(inv ? to : from, inv ? from : to);
	      } else {
	        out[i] = new Range(from, from);
	      }
	    }
	    return new Selection(out, doc.sel.primIndex);
	  }

	  // Allow "beforeChange" event handlers to influence a change
	  function filterChange(doc, change, update) {
	    var obj = {
	      canceled: false,
	      from: change.from,
	      to: change.to,
	      text: change.text,
	      origin: change.origin,
	      cancel: function() { this.canceled = true; }
	    };
	    if (update) obj.update = function(from, to, text, origin) {
	      if (from) this.from = clipPos(doc, from);
	      if (to) this.to = clipPos(doc, to);
	      if (text) this.text = text;
	      if (origin !== undefined) this.origin = origin;
	    };
	    signal(doc, "beforeChange", doc, obj);
	    if (doc.cm) signal(doc.cm, "beforeChange", doc.cm, obj);

	    if (obj.canceled) return null;
	    return {from: obj.from, to: obj.to, text: obj.text, origin: obj.origin};
	  }

	  // Apply a change to a document, and add it to the document's
	  // history, and propagating it to all linked documents.
	  function makeChange(doc, change, ignoreReadOnly) {
	    if (doc.cm) {
	      if (!doc.cm.curOp) return operation(doc.cm, makeChange)(doc, change, ignoreReadOnly);
	      if (doc.cm.state.suppressEdits) return;
	    }

	    if (hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")) {
	      change = filterChange(doc, change, true);
	      if (!change) return;
	    }

	    // Possibly split or suppress the update based on the presence
	    // of read-only spans in its range.
	    var split = sawReadOnlySpans && !ignoreReadOnly && removeReadOnlyRanges(doc, change.from, change.to);
	    if (split) {
	      for (var i = split.length - 1; i >= 0; --i)
	        makeChangeInner(doc, {from: split[i].from, to: split[i].to, text: i ? [""] : change.text});
	    } else {
	      makeChangeInner(doc, change);
	    }
	  }

	  function makeChangeInner(doc, change) {
	    if (change.text.length == 1 && change.text[0] == "" && cmp(change.from, change.to) == 0) return;
	    var selAfter = computeSelAfterChange(doc, change);
	    addChangeToHistory(doc, change, selAfter, doc.cm ? doc.cm.curOp.id : NaN);

	    makeChangeSingleDoc(doc, change, selAfter, stretchSpansOverChange(doc, change));
	    var rebased = [];

	    linkedDocs(doc, function(doc, sharedHist) {
	      if (!sharedHist && indexOf(rebased, doc.history) == -1) {
	        rebaseHist(doc.history, change);
	        rebased.push(doc.history);
	      }
	      makeChangeSingleDoc(doc, change, null, stretchSpansOverChange(doc, change));
	    });
	  }

	  // Revert a change stored in a document's history.
	  function makeChangeFromHistory(doc, type, allowSelectionOnly) {
	    if (doc.cm && doc.cm.state.suppressEdits) return;

	    var hist = doc.history, event, selAfter = doc.sel;
	    var source = type == "undo" ? hist.done : hist.undone, dest = type == "undo" ? hist.undone : hist.done;

	    // Verify that there is a useable event (so that ctrl-z won't
	    // needlessly clear selection events)
	    for (var i = 0; i < source.length; i++) {
	      event = source[i];
	      if (allowSelectionOnly ? event.ranges && !event.equals(doc.sel) : !event.ranges)
	        break;
	    }
	    if (i == source.length) return;
	    hist.lastOrigin = hist.lastSelOrigin = null;

	    for (;;) {
	      event = source.pop();
	      if (event.ranges) {
	        pushSelectionToHistory(event, dest);
	        if (allowSelectionOnly && !event.equals(doc.sel)) {
	          setSelection(doc, event, {clearRedo: false});
	          return;
	        }
	        selAfter = event;
	      }
	      else break;
	    }

	    // Build up a reverse change object to add to the opposite history
	    // stack (redo when undoing, and vice versa).
	    var antiChanges = [];
	    pushSelectionToHistory(selAfter, dest);
	    dest.push({changes: antiChanges, generation: hist.generation});
	    hist.generation = event.generation || ++hist.maxGeneration;

	    var filter = hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange");

	    for (var i = event.changes.length - 1; i >= 0; --i) {
	      var change = event.changes[i];
	      change.origin = type;
	      if (filter && !filterChange(doc, change, false)) {
	        source.length = 0;
	        return;
	      }

	      antiChanges.push(historyChangeFromChange(doc, change));

	      var after = i ? computeSelAfterChange(doc, change) : lst(source);
	      makeChangeSingleDoc(doc, change, after, mergeOldSpans(doc, change));
	      if (!i && doc.cm) doc.cm.scrollIntoView({from: change.from, to: changeEnd(change)});
	      var rebased = [];

	      // Propagate to the linked documents
	      linkedDocs(doc, function(doc, sharedHist) {
	        if (!sharedHist && indexOf(rebased, doc.history) == -1) {
	          rebaseHist(doc.history, change);
	          rebased.push(doc.history);
	        }
	        makeChangeSingleDoc(doc, change, null, mergeOldSpans(doc, change));
	      });
	    }
	  }

	  // Sub-views need their line numbers shifted when text is added
	  // above or below them in the parent document.
	  function shiftDoc(doc, distance) {
	    if (distance == 0) return;
	    doc.first += distance;
	    doc.sel = new Selection(map(doc.sel.ranges, function(range) {
	      return new Range(Pos(range.anchor.line + distance, range.anchor.ch),
	                       Pos(range.head.line + distance, range.head.ch));
	    }), doc.sel.primIndex);
	    if (doc.cm) {
	      regChange(doc.cm, doc.first, doc.first - distance, distance);
	      for (var d = doc.cm.display, l = d.viewFrom; l < d.viewTo; l++)
	        regLineChange(doc.cm, l, "gutter");
	    }
	  }

	  // More lower-level change function, handling only a single document
	  // (not linked ones).
	  function makeChangeSingleDoc(doc, change, selAfter, spans) {
	    if (doc.cm && !doc.cm.curOp)
	      return operation(doc.cm, makeChangeSingleDoc)(doc, change, selAfter, spans);

	    if (change.to.line < doc.first) {
	      shiftDoc(doc, change.text.length - 1 - (change.to.line - change.from.line));
	      return;
	    }
	    if (change.from.line > doc.lastLine()) return;

	    // Clip the change to the size of this doc
	    if (change.from.line < doc.first) {
	      var shift = change.text.length - 1 - (doc.first - change.from.line);
	      shiftDoc(doc, shift);
	      change = {from: Pos(doc.first, 0), to: Pos(change.to.line + shift, change.to.ch),
	                text: [lst(change.text)], origin: change.origin};
	    }
	    var last = doc.lastLine();
	    if (change.to.line > last) {
	      change = {from: change.from, to: Pos(last, getLine(doc, last).text.length),
	                text: [change.text[0]], origin: change.origin};
	    }

	    change.removed = getBetween(doc, change.from, change.to);

	    if (!selAfter) selAfter = computeSelAfterChange(doc, change);
	    if (doc.cm) makeChangeSingleDocInEditor(doc.cm, change, spans);
	    else updateDoc(doc, change, spans);
	    setSelectionNoUndo(doc, selAfter, sel_dontScroll);
	  }

	  // Handle the interaction of a change to a document with the editor
	  // that this document is part of.
	  function makeChangeSingleDocInEditor(cm, change, spans) {
	    var doc = cm.doc, display = cm.display, from = change.from, to = change.to;

	    var recomputeMaxLength = false, checkWidthStart = from.line;
	    if (!cm.options.lineWrapping) {
	      checkWidthStart = lineNo(visualLine(getLine(doc, from.line)));
	      doc.iter(checkWidthStart, to.line + 1, function(line) {
	        if (line == display.maxLine) {
	          recomputeMaxLength = true;
	          return true;
	        }
	      });
	    }

	    if (doc.sel.contains(change.from, change.to) > -1)
	      signalCursorActivity(cm);

	    updateDoc(doc, change, spans, estimateHeight(cm));

	    if (!cm.options.lineWrapping) {
	      doc.iter(checkWidthStart, from.line + change.text.length, function(line) {
	        var len = lineLength(line);
	        if (len > display.maxLineLength) {
	          display.maxLine = line;
	          display.maxLineLength = len;
	          display.maxLineChanged = true;
	          recomputeMaxLength = false;
	        }
	      });
	      if (recomputeMaxLength) cm.curOp.updateMaxLine = true;
	    }

	    // Adjust frontier, schedule worker
	    doc.frontier = Math.min(doc.frontier, from.line);
	    startWorker(cm, 400);

	    var lendiff = change.text.length - (to.line - from.line) - 1;
	    // Remember that these lines changed, for updating the display
	    if (change.full)
	      regChange(cm);
	    else if (from.line == to.line && change.text.length == 1 && !isWholeLineUpdate(cm.doc, change))
	      regLineChange(cm, from.line, "text");
	    else
	      regChange(cm, from.line, to.line + 1, lendiff);

	    var changesHandler = hasHandler(cm, "changes"), changeHandler = hasHandler(cm, "change");
	    if (changeHandler || changesHandler) {
	      var obj = {
	        from: from, to: to,
	        text: change.text,
	        removed: change.removed,
	        origin: change.origin
	      };
	      if (changeHandler) signalLater(cm, "change", cm, obj);
	      if (changesHandler) (cm.curOp.changeObjs || (cm.curOp.changeObjs = [])).push(obj);
	    }
	    cm.display.selForContextMenu = null;
	  }

	  function replaceRange(doc, code, from, to, origin) {
	    if (!to) to = from;
	    if (cmp(to, from) < 0) { var tmp = to; to = from; from = tmp; }
	    if (typeof code == "string") code = doc.splitLines(code);
	    makeChange(doc, {from: from, to: to, text: code, origin: origin});
	  }

	  // SCROLLING THINGS INTO VIEW

	  // If an editor sits on the top or bottom of the window, partially
	  // scrolled out of view, this ensures that the cursor is visible.
	  function maybeScrollWindow(cm, coords) {
	    if (signalDOMEvent(cm, "scrollCursorIntoView")) return;

	    var display = cm.display, box = display.sizer.getBoundingClientRect(), doScroll = null;
	    if (coords.top + box.top < 0) doScroll = true;
	    else if (coords.bottom + box.top > (window.innerHeight || document.documentElement.clientHeight)) doScroll = false;
	    if (doScroll != null && !phantom) {
	      var scrollNode = elt("div", "\u200b", null, "position: absolute; top: " +
	                           (coords.top - display.viewOffset - paddingTop(cm.display)) + "px; height: " +
	                           (coords.bottom - coords.top + scrollGap(cm) + display.barHeight) + "px; left: " +
	                           coords.left + "px; width: 2px;");
	      cm.display.lineSpace.appendChild(scrollNode);
	      scrollNode.scrollIntoView(doScroll);
	      cm.display.lineSpace.removeChild(scrollNode);
	    }
	  }

	  // Scroll a given position into view (immediately), verifying that
	  // it actually became visible (as line heights are accurately
	  // measured, the position of something may 'drift' during drawing).
	  function scrollPosIntoView(cm, pos, end, margin) {
	    if (margin == null) margin = 0;
	    for (var limit = 0; limit < 5; limit++) {
	      var changed = false, coords = cursorCoords(cm, pos);
	      var endCoords = !end || end == pos ? coords : cursorCoords(cm, end);
	      var scrollPos = calculateScrollPos(cm, Math.min(coords.left, endCoords.left),
	                                         Math.min(coords.top, endCoords.top) - margin,
	                                         Math.max(coords.left, endCoords.left),
	                                         Math.max(coords.bottom, endCoords.bottom) + margin);
	      var startTop = cm.doc.scrollTop, startLeft = cm.doc.scrollLeft;
	      if (scrollPos.scrollTop != null) {
	        setScrollTop(cm, scrollPos.scrollTop);
	        if (Math.abs(cm.doc.scrollTop - startTop) > 1) changed = true;
	      }
	      if (scrollPos.scrollLeft != null) {
	        setScrollLeft(cm, scrollPos.scrollLeft);
	        if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) changed = true;
	      }
	      if (!changed) break;
	    }
	    return coords;
	  }

	  // Scroll a given set of coordinates into view (immediately).
	  function scrollIntoView(cm, x1, y1, x2, y2) {
	    var scrollPos = calculateScrollPos(cm, x1, y1, x2, y2);
	    if (scrollPos.scrollTop != null) setScrollTop(cm, scrollPos.scrollTop);
	    if (scrollPos.scrollLeft != null) setScrollLeft(cm, scrollPos.scrollLeft);
	  }

	  // Calculate a new scroll position needed to scroll the given
	  // rectangle into view. Returns an object with scrollTop and
	  // scrollLeft properties. When these are undefined, the
	  // vertical/horizontal position does not need to be adjusted.
	  function calculateScrollPos(cm, x1, y1, x2, y2) {
	    var display = cm.display, snapMargin = textHeight(cm.display);
	    if (y1 < 0) y1 = 0;
	    var screentop = cm.curOp && cm.curOp.scrollTop != null ? cm.curOp.scrollTop : display.scroller.scrollTop;
	    var screen = displayHeight(cm), result = {};
	    if (y2 - y1 > screen) y2 = y1 + screen;
	    var docBottom = cm.doc.height + paddingVert(display);
	    var atTop = y1 < snapMargin, atBottom = y2 > docBottom - snapMargin;
	    if (y1 < screentop) {
	      result.scrollTop = atTop ? 0 : y1;
	    } else if (y2 > screentop + screen) {
	      var newTop = Math.min(y1, (atBottom ? docBottom : y2) - screen);
	      if (newTop != screentop) result.scrollTop = newTop;
	    }

	    var screenleft = cm.curOp && cm.curOp.scrollLeft != null ? cm.curOp.scrollLeft : display.scroller.scrollLeft;
	    var screenw = displayWidth(cm) - (cm.options.fixedGutter ? display.gutters.offsetWidth : 0);
	    var tooWide = x2 - x1 > screenw;
	    if (tooWide) x2 = x1 + screenw;
	    if (x1 < 10)
	      result.scrollLeft = 0;
	    else if (x1 < screenleft)
	      result.scrollLeft = Math.max(0, x1 - (tooWide ? 0 : 10));
	    else if (x2 > screenw + screenleft - 3)
	      result.scrollLeft = x2 + (tooWide ? 0 : 10) - screenw;
	    return result;
	  }

	  // Store a relative adjustment to the scroll position in the current
	  // operation (to be applied when the operation finishes).
	  function addToScrollPos(cm, left, top) {
	    if (left != null || top != null) resolveScrollToPos(cm);
	    if (left != null)
	      cm.curOp.scrollLeft = (cm.curOp.scrollLeft == null ? cm.doc.scrollLeft : cm.curOp.scrollLeft) + left;
	    if (top != null)
	      cm.curOp.scrollTop = (cm.curOp.scrollTop == null ? cm.doc.scrollTop : cm.curOp.scrollTop) + top;
	  }

	  // Make sure that at the end of the operation the current cursor is
	  // shown.
	  function ensureCursorVisible(cm) {
	    resolveScrollToPos(cm);
	    var cur = cm.getCursor(), from = cur, to = cur;
	    if (!cm.options.lineWrapping) {
	      from = cur.ch ? Pos(cur.line, cur.ch - 1) : cur;
	      to = Pos(cur.line, cur.ch + 1);
	    }
	    cm.curOp.scrollToPos = {from: from, to: to, margin: cm.options.cursorScrollMargin, isCursor: true};
	  }

	  // When an operation has its scrollToPos property set, and another
	  // scroll action is applied before the end of the operation, this
	  // 'simulates' scrolling that position into view in a cheap way, so
	  // that the effect of intermediate scroll commands is not ignored.
	  function resolveScrollToPos(cm) {
	    var range = cm.curOp.scrollToPos;
	    if (range) {
	      cm.curOp.scrollToPos = null;
	      var from = estimateCoords(cm, range.from), to = estimateCoords(cm, range.to);
	      var sPos = calculateScrollPos(cm, Math.min(from.left, to.left),
	                                    Math.min(from.top, to.top) - range.margin,
	                                    Math.max(from.right, to.right),
	                                    Math.max(from.bottom, to.bottom) + range.margin);
	      cm.scrollTo(sPos.scrollLeft, sPos.scrollTop);
	    }
	  }

	  // API UTILITIES

	  // Indent the given line. The how parameter can be "smart",
	  // "add"/null, "subtract", or "prev". When aggressive is false
	  // (typically set to true for forced single-line indents), empty
	  // lines are not indented, and places where the mode returns Pass
	  // are left alone.
	  function indentLine(cm, n, how, aggressive) {
	    var doc = cm.doc, state;
	    if (how == null) how = "add";
	    if (how == "smart") {
	      // Fall back to "prev" when the mode doesn't have an indentation
	      // method.
	      if (!doc.mode.indent) how = "prev";
	      else state = getStateBefore(cm, n);
	    }

	    var tabSize = cm.options.tabSize;
	    var line = getLine(doc, n), curSpace = countColumn(line.text, null, tabSize);
	    if (line.stateAfter) line.stateAfter = null;
	    var curSpaceString = line.text.match(/^\s*/)[0], indentation;
	    if (!aggressive && !/\S/.test(line.text)) {
	      indentation = 0;
	      how = "not";
	    } else if (how == "smart") {
	      indentation = doc.mode.indent(state, line.text.slice(curSpaceString.length), line.text);
	      if (indentation == Pass || indentation > 150) {
	        if (!aggressive) return;
	        how = "prev";
	      }
	    }
	    if (how == "prev") {
	      if (n > doc.first) indentation = countColumn(getLine(doc, n-1).text, null, tabSize);
	      else indentation = 0;
	    } else if (how == "add") {
	      indentation = curSpace + cm.options.indentUnit;
	    } else if (how == "subtract") {
	      indentation = curSpace - cm.options.indentUnit;
	    } else if (typeof how == "number") {
	      indentation = curSpace + how;
	    }
	    indentation = Math.max(0, indentation);

	    var indentString = "", pos = 0;
	    if (cm.options.indentWithTabs)
	      for (var i = Math.floor(indentation / tabSize); i; --i) {pos += tabSize; indentString += "\t";}
	    if (pos < indentation) indentString += spaceStr(indentation - pos);

	    if (indentString != curSpaceString) {
	      replaceRange(doc, indentString, Pos(n, 0), Pos(n, curSpaceString.length), "+input");
	      line.stateAfter = null;
	      return true;
	    } else {
	      // Ensure that, if the cursor was in the whitespace at the start
	      // of the line, it is moved to the end of that space.
	      for (var i = 0; i < doc.sel.ranges.length; i++) {
	        var range = doc.sel.ranges[i];
	        if (range.head.line == n && range.head.ch < curSpaceString.length) {
	          var pos = Pos(n, curSpaceString.length);
	          replaceOneSelection(doc, i, new Range(pos, pos));
	          break;
	        }
	      }
	    }
	  }

	  // Utility for applying a change to a line by handle or number,
	  // returning the number and optionally registering the line as
	  // changed.
	  function changeLine(doc, handle, changeType, op) {
	    var no = handle, line = handle;
	    if (typeof handle == "number") line = getLine(doc, clipLine(doc, handle));
	    else no = lineNo(handle);
	    if (no == null) return null;
	    if (op(line, no) && doc.cm) regLineChange(doc.cm, no, changeType);
	    return line;
	  }

	  // Helper for deleting text near the selection(s), used to implement
	  // backspace, delete, and similar functionality.
	  function deleteNearSelection(cm, compute) {
	    var ranges = cm.doc.sel.ranges, kill = [];
	    // Build up a set of ranges to kill first, merging overlapping
	    // ranges.
	    for (var i = 0; i < ranges.length; i++) {
	      var toKill = compute(ranges[i]);
	      while (kill.length && cmp(toKill.from, lst(kill).to) <= 0) {
	        var replaced = kill.pop();
	        if (cmp(replaced.from, toKill.from) < 0) {
	          toKill.from = replaced.from;
	          break;
	        }
	      }
	      kill.push(toKill);
	    }
	    // Next, remove those actual ranges.
	    runInOp(cm, function() {
	      for (var i = kill.length - 1; i >= 0; i--)
	        replaceRange(cm.doc, "", kill[i].from, kill[i].to, "+delete");
	      ensureCursorVisible(cm);
	    });
	  }

	  // Used for horizontal relative motion. Dir is -1 or 1 (left or
	  // right), unit can be "char", "column" (like char, but doesn't
	  // cross line boundaries), "word" (across next word), or "group" (to
	  // the start of next group of word or non-word-non-whitespace
	  // chars). The visually param controls whether, in right-to-left
	  // text, direction 1 means to move towards the next index in the
	  // string, or towards the character to the right of the current
	  // position. The resulting position will have a hitSide=true
	  // property if it reached the end of the document.
	  function findPosH(doc, pos, dir, unit, visually) {
	    var line = pos.line, ch = pos.ch, origDir = dir;
	    var lineObj = getLine(doc, line);
	    function findNextLine() {
	      var l = line + dir;
	      if (l < doc.first || l >= doc.first + doc.size) return false
	      line = l;
	      return lineObj = getLine(doc, l);
	    }
	    function moveOnce(boundToLine) {
	      var next = (visually ? moveVisually : moveLogically)(lineObj, ch, dir, true);
	      if (next == null) {
	        if (!boundToLine && findNextLine()) {
	          if (visually) ch = (dir < 0 ? lineRight : lineLeft)(lineObj);
	          else ch = dir < 0 ? lineObj.text.length : 0;
	        } else return false
	      } else ch = next;
	      return true;
	    }

	    if (unit == "char") {
	      moveOnce()
	    } else if (unit == "column") {
	      moveOnce(true)
	    } else if (unit == "word" || unit == "group") {
	      var sawType = null, group = unit == "group";
	      var helper = doc.cm && doc.cm.getHelper(pos, "wordChars");
	      for (var first = true;; first = false) {
	        if (dir < 0 && !moveOnce(!first)) break;
	        var cur = lineObj.text.charAt(ch) || "\n";
	        var type = isWordChar(cur, helper) ? "w"
	          : group && cur == "\n" ? "n"
	          : !group || /\s/.test(cur) ? null
	          : "p";
	        if (group && !first && !type) type = "s";
	        if (sawType && sawType != type) {
	          if (dir < 0) {dir = 1; moveOnce();}
	          break;
	        }

	        if (type) sawType = type;
	        if (dir > 0 && !moveOnce(!first)) break;
	      }
	    }
	    var result = skipAtomic(doc, Pos(line, ch), pos, origDir, true);
	    if (!cmp(pos, result)) result.hitSide = true;
	    return result;
	  }

	  // For relative vertical movement. Dir may be -1 or 1. Unit can be
	  // "page" or "line". The resulting position will have a hitSide=true
	  // property if it reached the end of the document.
	  function findPosV(cm, pos, dir, unit) {
	    var doc = cm.doc, x = pos.left, y;
	    if (unit == "page") {
	      var pageSize = Math.min(cm.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
	      y = pos.top + dir * (pageSize - (dir < 0 ? 1.5 : .5) * textHeight(cm.display));
	    } else if (unit == "line") {
	      y = dir > 0 ? pos.bottom + 3 : pos.top - 3;
	    }
	    for (;;) {
	      var target = coordsChar(cm, x, y);
	      if (!target.outside) break;
	      if (dir < 0 ? y <= 0 : y >= doc.height) { target.hitSide = true; break; }
	      y += dir * 5;
	    }
	    return target;
	  }

	  // EDITOR METHODS

	  // The publicly visible API. Note that methodOp(f) means
	  // 'wrap f in an operation, performed on its `this` parameter'.

	  // This is not the complete set of editor methods. Most of the
	  // methods defined on the Doc type are also injected into
	  // CodeMirror.prototype, for backwards compatibility and
	  // convenience.

	  CodeMirror.prototype = {
	    constructor: CodeMirror,
	    focus: function(){window.focus(); this.display.input.focus();},

	    setOption: function(option, value) {
	      var options = this.options, old = options[option];
	      if (options[option] == value && option != "mode") return;
	      options[option] = value;
	      if (optionHandlers.hasOwnProperty(option))
	        operation(this, optionHandlers[option])(this, value, old);
	    },

	    getOption: function(option) {return this.options[option];},
	    getDoc: function() {return this.doc;},

	    addKeyMap: function(map, bottom) {
	      this.state.keyMaps[bottom ? "push" : "unshift"](getKeyMap(map));
	    },
	    removeKeyMap: function(map) {
	      var maps = this.state.keyMaps;
	      for (var i = 0; i < maps.length; ++i)
	        if (maps[i] == map || maps[i].name == map) {
	          maps.splice(i, 1);
	          return true;
	        }
	    },

	    addOverlay: methodOp(function(spec, options) {
	      var mode = spec.token ? spec : CodeMirror.getMode(this.options, spec);
	      if (mode.startState) throw new Error("Overlays may not be stateful.");
	      this.state.overlays.push({mode: mode, modeSpec: spec, opaque: options && options.opaque});
	      this.state.modeGen++;
	      regChange(this);
	    }),
	    removeOverlay: methodOp(function(spec) {
	      var overlays = this.state.overlays;
	      for (var i = 0; i < overlays.length; ++i) {
	        var cur = overlays[i].modeSpec;
	        if (cur == spec || typeof spec == "string" && cur.name == spec) {
	          overlays.splice(i, 1);
	          this.state.modeGen++;
	          regChange(this);
	          return;
	        }
	      }
	    }),

	    indentLine: methodOp(function(n, dir, aggressive) {
	      if (typeof dir != "string" && typeof dir != "number") {
	        if (dir == null) dir = this.options.smartIndent ? "smart" : "prev";
	        else dir = dir ? "add" : "subtract";
	      }
	      if (isLine(this.doc, n)) indentLine(this, n, dir, aggressive);
	    }),
	    indentSelection: methodOp(function(how) {
	      var ranges = this.doc.sel.ranges, end = -1;
	      for (var i = 0; i < ranges.length; i++) {
	        var range = ranges[i];
	        if (!range.empty()) {
	          var from = range.from(), to = range.to();
	          var start = Math.max(end, from.line);
	          end = Math.min(this.lastLine(), to.line - (to.ch ? 0 : 1)) + 1;
	          for (var j = start; j < end; ++j)
	            indentLine(this, j, how);
	          var newRanges = this.doc.sel.ranges;
	          if (from.ch == 0 && ranges.length == newRanges.length && newRanges[i].from().ch > 0)
	            replaceOneSelection(this.doc, i, new Range(from, newRanges[i].to()), sel_dontScroll);
	        } else if (range.head.line > end) {
	          indentLine(this, range.head.line, how, true);
	          end = range.head.line;
	          if (i == this.doc.sel.primIndex) ensureCursorVisible(this);
	        }
	      }
	    }),

	    // Fetch the parser token for a given character. Useful for hacks
	    // that want to inspect the mode state (say, for completion).
	    getTokenAt: function(pos, precise) {
	      return takeToken(this, pos, precise);
	    },

	    getLineTokens: function(line, precise) {
	      return takeToken(this, Pos(line), precise, true);
	    },

	    getTokenTypeAt: function(pos) {
	      pos = clipPos(this.doc, pos);
	      var styles = getLineStyles(this, getLine(this.doc, pos.line));
	      var before = 0, after = (styles.length - 1) / 2, ch = pos.ch;
	      var type;
	      if (ch == 0) type = styles[2];
	      else for (;;) {
	        var mid = (before + after) >> 1;
	        if ((mid ? styles[mid * 2 - 1] : 0) >= ch) after = mid;
	        else if (styles[mid * 2 + 1] < ch) before = mid + 1;
	        else { type = styles[mid * 2 + 2]; break; }
	      }
	      var cut = type ? type.indexOf("cm-overlay ") : -1;
	      return cut < 0 ? type : cut == 0 ? null : type.slice(0, cut - 1);
	    },

	    getModeAt: function(pos) {
	      var mode = this.doc.mode;
	      if (!mode.innerMode) return mode;
	      return CodeMirror.innerMode(mode, this.getTokenAt(pos).state).mode;
	    },

	    getHelper: function(pos, type) {
	      return this.getHelpers(pos, type)[0];
	    },

	    getHelpers: function(pos, type) {
	      var found = [];
	      if (!helpers.hasOwnProperty(type)) return found;
	      var help = helpers[type], mode = this.getModeAt(pos);
	      if (typeof mode[type] == "string") {
	        if (help[mode[type]]) found.push(help[mode[type]]);
	      } else if (mode[type]) {
	        for (var i = 0; i < mode[type].length; i++) {
	          var val = help[mode[type][i]];
	          if (val) found.push(val);
	        }
	      } else if (mode.helperType && help[mode.helperType]) {
	        found.push(help[mode.helperType]);
	      } else if (help[mode.name]) {
	        found.push(help[mode.name]);
	      }
	      for (var i = 0; i < help._global.length; i++) {
	        var cur = help._global[i];
	        if (cur.pred(mode, this) && indexOf(found, cur.val) == -1)
	          found.push(cur.val);
	      }
	      return found;
	    },

	    getStateAfter: function(line, precise) {
	      var doc = this.doc;
	      line = clipLine(doc, line == null ? doc.first + doc.size - 1: line);
	      return getStateBefore(this, line + 1, precise);
	    },

	    cursorCoords: function(start, mode) {
	      var pos, range = this.doc.sel.primary();
	      if (start == null) pos = range.head;
	      else if (typeof start == "object") pos = clipPos(this.doc, start);
	      else pos = start ? range.from() : range.to();
	      return cursorCoords(this, pos, mode || "page");
	    },

	    charCoords: function(pos, mode) {
	      return charCoords(this, clipPos(this.doc, pos), mode || "page");
	    },

	    coordsChar: function(coords, mode) {
	      coords = fromCoordSystem(this, coords, mode || "page");
	      return coordsChar(this, coords.left, coords.top);
	    },

	    lineAtHeight: function(height, mode) {
	      height = fromCoordSystem(this, {top: height, left: 0}, mode || "page").top;
	      return lineAtHeight(this.doc, height + this.display.viewOffset);
	    },
	    heightAtLine: function(line, mode) {
	      var end = false, lineObj;
	      if (typeof line == "number") {
	        var last = this.doc.first + this.doc.size - 1;
	        if (line < this.doc.first) line = this.doc.first;
	        else if (line > last) { line = last; end = true; }
	        lineObj = getLine(this.doc, line);
	      } else {
	        lineObj = line;
	      }
	      return intoCoordSystem(this, lineObj, {top: 0, left: 0}, mode || "page").top +
	        (end ? this.doc.height - heightAtLine(lineObj) : 0);
	    },

	    defaultTextHeight: function() { return textHeight(this.display); },
	    defaultCharWidth: function() { return charWidth(this.display); },

	    setGutterMarker: methodOp(function(line, gutterID, value) {
	      return changeLine(this.doc, line, "gutter", function(line) {
	        var markers = line.gutterMarkers || (line.gutterMarkers = {});
	        markers[gutterID] = value;
	        if (!value && isEmpty(markers)) line.gutterMarkers = null;
	        return true;
	      });
	    }),

	    clearGutter: methodOp(function(gutterID) {
	      var cm = this, doc = cm.doc, i = doc.first;
	      doc.iter(function(line) {
	        if (line.gutterMarkers && line.gutterMarkers[gutterID]) {
	          line.gutterMarkers[gutterID] = null;
	          regLineChange(cm, i, "gutter");
	          if (isEmpty(line.gutterMarkers)) line.gutterMarkers = null;
	        }
	        ++i;
	      });
	    }),

	    lineInfo: function(line) {
	      if (typeof line == "number") {
	        if (!isLine(this.doc, line)) return null;
	        var n = line;
	        line = getLine(this.doc, line);
	        if (!line) return null;
	      } else {
	        var n = lineNo(line);
	        if (n == null) return null;
	      }
	      return {line: n, handle: line, text: line.text, gutterMarkers: line.gutterMarkers,
	              textClass: line.textClass, bgClass: line.bgClass, wrapClass: line.wrapClass,
	              widgets: line.widgets};
	    },

	    getViewport: function() { return {from: this.display.viewFrom, to: this.display.viewTo};},

	    addWidget: function(pos, node, scroll, vert, horiz) {
	      var display = this.display;
	      pos = cursorCoords(this, clipPos(this.doc, pos));
	      var top = pos.bottom, left = pos.left;
	      node.style.position = "absolute";
	      node.setAttribute("cm-ignore-events", "true");
	      this.display.input.setUneditable(node);
	      display.sizer.appendChild(node);
	      if (vert == "over") {
	        top = pos.top;
	      } else if (vert == "above" || vert == "near") {
	        var vspace = Math.max(display.wrapper.clientHeight, this.doc.height),
	        hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth);
	        // Default to positioning above (if specified and possible); otherwise default to positioning below
	        if ((vert == 'above' || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight)
	          top = pos.top - node.offsetHeight;
	        else if (pos.bottom + node.offsetHeight <= vspace)
	          top = pos.bottom;
	        if (left + node.offsetWidth > hspace)
	          left = hspace - node.offsetWidth;
	      }
	      node.style.top = top + "px";
	      node.style.left = node.style.right = "";
	      if (horiz == "right") {
	        left = display.sizer.clientWidth - node.offsetWidth;
	        node.style.right = "0px";
	      } else {
	        if (horiz == "left") left = 0;
	        else if (horiz == "middle") left = (display.sizer.clientWidth - node.offsetWidth) / 2;
	        node.style.left = left + "px";
	      }
	      if (scroll)
	        scrollIntoView(this, left, top, left + node.offsetWidth, top + node.offsetHeight);
	    },

	    triggerOnKeyDown: methodOp(onKeyDown),
	    triggerOnKeyPress: methodOp(onKeyPress),
	    triggerOnKeyUp: onKeyUp,

	    execCommand: function(cmd) {
	      if (commands.hasOwnProperty(cmd))
	        return commands[cmd].call(null, this);
	    },

	    triggerElectric: methodOp(function(text) { triggerElectric(this, text); }),

	    findPosH: function(from, amount, unit, visually) {
	      var dir = 1;
	      if (amount < 0) { dir = -1; amount = -amount; }
	      for (var i = 0, cur = clipPos(this.doc, from); i < amount; ++i) {
	        cur = findPosH(this.doc, cur, dir, unit, visually);
	        if (cur.hitSide) break;
	      }
	      return cur;
	    },

	    moveH: methodOp(function(dir, unit) {
	      var cm = this;
	      cm.extendSelectionsBy(function(range) {
	        if (cm.display.shift || cm.doc.extend || range.empty())
	          return findPosH(cm.doc, range.head, dir, unit, cm.options.rtlMoveVisually);
	        else
	          return dir < 0 ? range.from() : range.to();
	      }, sel_move);
	    }),

	    deleteH: methodOp(function(dir, unit) {
	      var sel = this.doc.sel, doc = this.doc;
	      if (sel.somethingSelected())
	        doc.replaceSelection("", null, "+delete");
	      else
	        deleteNearSelection(this, function(range) {
	          var other = findPosH(doc, range.head, dir, unit, false);
	          return dir < 0 ? {from: other, to: range.head} : {from: range.head, to: other};
	        });
	    }),

	    findPosV: function(from, amount, unit, goalColumn) {
	      var dir = 1, x = goalColumn;
	      if (amount < 0) { dir = -1; amount = -amount; }
	      for (var i = 0, cur = clipPos(this.doc, from); i < amount; ++i) {
	        var coords = cursorCoords(this, cur, "div");
	        if (x == null) x = coords.left;
	        else coords.left = x;
	        cur = findPosV(this, coords, dir, unit);
	        if (cur.hitSide) break;
	      }
	      return cur;
	    },

	    moveV: methodOp(function(dir, unit) {
	      var cm = this, doc = this.doc, goals = [];
	      var collapse = !cm.display.shift && !doc.extend && doc.sel.somethingSelected();
	      doc.extendSelectionsBy(function(range) {
	        if (collapse)
	          return dir < 0 ? range.from() : range.to();
	        var headPos = cursorCoords(cm, range.head, "div");
	        if (range.goalColumn != null) headPos.left = range.goalColumn;
	        goals.push(headPos.left);
	        var pos = findPosV(cm, headPos, dir, unit);
	        if (unit == "page" && range == doc.sel.primary())
	          addToScrollPos(cm, null, charCoords(cm, pos, "div").top - headPos.top);
	        return pos;
	      }, sel_move);
	      if (goals.length) for (var i = 0; i < doc.sel.ranges.length; i++)
	        doc.sel.ranges[i].goalColumn = goals[i];
	    }),

	    // Find the word at the given position (as returned by coordsChar).
	    findWordAt: function(pos) {
	      var doc = this.doc, line = getLine(doc, pos.line).text;
	      var start = pos.ch, end = pos.ch;
	      if (line) {
	        var helper = this.getHelper(pos, "wordChars");
	        if ((pos.xRel < 0 || end == line.length) && start) --start; else ++end;
	        var startChar = line.charAt(start);
	        var check = isWordChar(startChar, helper)
	          ? function(ch) { return isWordChar(ch, helper); }
	          : /\s/.test(startChar) ? function(ch) {return /\s/.test(ch);}
	          : function(ch) {return !/\s/.test(ch) && !isWordChar(ch);};
	        while (start > 0 && check(line.charAt(start - 1))) --start;
	        while (end < line.length && check(line.charAt(end))) ++end;
	      }
	      return new Range(Pos(pos.line, start), Pos(pos.line, end));
	    },

	    toggleOverwrite: function(value) {
	      if (value != null && value == this.state.overwrite) return;
	      if (this.state.overwrite = !this.state.overwrite)
	        addClass(this.display.cursorDiv, "CodeMirror-overwrite");
	      else
	        rmClass(this.display.cursorDiv, "CodeMirror-overwrite");

	      signal(this, "overwriteToggle", this, this.state.overwrite);
	    },
	    hasFocus: function() { return this.display.input.getField() == activeElt(); },
	    isReadOnly: function() { return !!(this.options.readOnly || this.doc.cantEdit); },

	    scrollTo: methodOp(function(x, y) {
	      if (x != null || y != null) resolveScrollToPos(this);
	      if (x != null) this.curOp.scrollLeft = x;
	      if (y != null) this.curOp.scrollTop = y;
	    }),
	    getScrollInfo: function() {
	      var scroller = this.display.scroller;
	      return {left: scroller.scrollLeft, top: scroller.scrollTop,
	              height: scroller.scrollHeight - scrollGap(this) - this.display.barHeight,
	              width: scroller.scrollWidth - scrollGap(this) - this.display.barWidth,
	              clientHeight: displayHeight(this), clientWidth: displayWidth(this)};
	    },

	    scrollIntoView: methodOp(function(range, margin) {
	      if (range == null) {
	        range = {from: this.doc.sel.primary().head, to: null};
	        if (margin == null) margin = this.options.cursorScrollMargin;
	      } else if (typeof range == "number") {
	        range = {from: Pos(range, 0), to: null};
	      } else if (range.from == null) {
	        range = {from: range, to: null};
	      }
	      if (!range.to) range.to = range.from;
	      range.margin = margin || 0;

	      if (range.from.line != null) {
	        resolveScrollToPos(this);
	        this.curOp.scrollToPos = range;
	      } else {
	        var sPos = calculateScrollPos(this, Math.min(range.from.left, range.to.left),
	                                      Math.min(range.from.top, range.to.top) - range.margin,
	                                      Math.max(range.from.right, range.to.right),
	                                      Math.max(range.from.bottom, range.to.bottom) + range.margin);
	        this.scrollTo(sPos.scrollLeft, sPos.scrollTop);
	      }
	    }),

	    setSize: methodOp(function(width, height) {
	      var cm = this;
	      function interpret(val) {
	        return typeof val == "number" || /^\d+$/.test(String(val)) ? val + "px" : val;
	      }
	      if (width != null) cm.display.wrapper.style.width = interpret(width);
	      if (height != null) cm.display.wrapper.style.height = interpret(height);
	      if (cm.options.lineWrapping) clearLineMeasurementCache(this);
	      var lineNo = cm.display.viewFrom;
	      cm.doc.iter(lineNo, cm.display.viewTo, function(line) {
	        if (line.widgets) for (var i = 0; i < line.widgets.length; i++)
	          if (line.widgets[i].noHScroll) { regLineChange(cm, lineNo, "widget"); break; }
	        ++lineNo;
	      });
	      cm.curOp.forceUpdate = true;
	      signal(cm, "refresh", this);
	    }),

	    operation: function(f){return runInOp(this, f);},

	    refresh: methodOp(function() {
	      var oldHeight = this.display.cachedTextHeight;
	      regChange(this);
	      this.curOp.forceUpdate = true;
	      clearCaches(this);
	      this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop);
	      updateGutterSpace(this);
	      if (oldHeight == null || Math.abs(oldHeight - textHeight(this.display)) > .5)
	        estimateLineHeights(this);
	      signal(this, "refresh", this);
	    }),

	    swapDoc: methodOp(function(doc) {
	      var old = this.doc;
	      old.cm = null;
	      attachDoc(this, doc);
	      clearCaches(this);
	      this.display.input.reset();
	      this.scrollTo(doc.scrollLeft, doc.scrollTop);
	      this.curOp.forceScroll = true;
	      signalLater(this, "swapDoc", this, old);
	      return old;
	    }),

	    getInputField: function(){return this.display.input.getField();},
	    getWrapperElement: function(){return this.display.wrapper;},
	    getScrollerElement: function(){return this.display.scroller;},
	    getGutterElement: function(){return this.display.gutters;}
	  };
	  eventMixin(CodeMirror);

	  // OPTION DEFAULTS

	  // The default configuration options.
	  var defaults = CodeMirror.defaults = {};
	  // Functions to run when options are changed.
	  var optionHandlers = CodeMirror.optionHandlers = {};

	  function option(name, deflt, handle, notOnInit) {
	    CodeMirror.defaults[name] = deflt;
	    if (handle) optionHandlers[name] =
	      notOnInit ? function(cm, val, old) {if (old != Init) handle(cm, val, old);} : handle;
	  }

	  // Passed to option handlers when there is no old value.
	  var Init = CodeMirror.Init = {toString: function(){return "CodeMirror.Init";}};

	  // These two are, on init, called from the constructor because they
	  // have to be initialized before the editor can start at all.
	  option("value", "", function(cm, val) {
	    cm.setValue(val);
	  }, true);
	  option("mode", null, function(cm, val) {
	    cm.doc.modeOption = val;
	    loadMode(cm);
	  }, true);

	  option("indentUnit", 2, loadMode, true);
	  option("indentWithTabs", false);
	  option("smartIndent", true);
	  option("tabSize", 4, function(cm) {
	    resetModeState(cm);
	    clearCaches(cm);
	    regChange(cm);
	  }, true);
	  option("lineSeparator", null, function(cm, val) {
	    cm.doc.lineSep = val;
	    if (!val) return;
	    var newBreaks = [], lineNo = cm.doc.first;
	    cm.doc.iter(function(line) {
	      for (var pos = 0;;) {
	        var found = line.text.indexOf(val, pos);
	        if (found == -1) break;
	        pos = found + val.length;
	        newBreaks.push(Pos(lineNo, found));
	      }
	      lineNo++;
	    });
	    for (var i = newBreaks.length - 1; i >= 0; i--)
	      replaceRange(cm.doc, val, newBreaks[i], Pos(newBreaks[i].line, newBreaks[i].ch + val.length))
	  });
	  option("specialChars", /[\t\u0000-\u0019\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g, function(cm, val, old) {
	    cm.state.specialChars = new RegExp(val.source + (val.test("\t") ? "" : "|\t"), "g");
	    if (old != CodeMirror.Init) cm.refresh();
	  });
	  option("specialCharPlaceholder", defaultSpecialCharPlaceholder, function(cm) {cm.refresh();}, true);
	  option("electricChars", true);
	  option("inputStyle", mobile ? "contenteditable" : "textarea", function() {
	    throw new Error("inputStyle can not (yet) be changed in a running editor"); // FIXME
	  }, true);
	  option("rtlMoveVisually", !windows);
	  option("wholeLineUpdateBefore", true);

	  option("theme", "default", function(cm) {
	    themeChanged(cm);
	    guttersChanged(cm);
	  }, true);
	  option("keyMap", "default", function(cm, val, old) {
	    var next = getKeyMap(val);
	    var prev = old != CodeMirror.Init && getKeyMap(old);
	    if (prev && prev.detach) prev.detach(cm, next);
	    if (next.attach) next.attach(cm, prev || null);
	  });
	  option("extraKeys", null);

	  option("lineWrapping", false, wrappingChanged, true);
	  option("gutters", [], function(cm) {
	    setGuttersForLineNumbers(cm.options);
	    guttersChanged(cm);
	  }, true);
	  option("fixedGutter", true, function(cm, val) {
	    cm.display.gutters.style.left = val ? compensateForHScroll(cm.display) + "px" : "0";
	    cm.refresh();
	  }, true);
	  option("coverGutterNextToScrollbar", false, function(cm) {updateScrollbars(cm);}, true);
	  option("scrollbarStyle", "native", function(cm) {
	    initScrollbars(cm);
	    updateScrollbars(cm);
	    cm.display.scrollbars.setScrollTop(cm.doc.scrollTop);
	    cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft);
	  }, true);
	  option("lineNumbers", false, function(cm) {
	    setGuttersForLineNumbers(cm.options);
	    guttersChanged(cm);
	  }, true);
	  option("firstLineNumber", 1, guttersChanged, true);
	  option("lineNumberFormatter", function(integer) {return integer;}, guttersChanged, true);
	  option("showCursorWhenSelecting", false, updateSelection, true);

	  option("resetSelectionOnContextMenu", true);
	  option("lineWiseCopyCut", true);

	  option("readOnly", false, function(cm, val) {
	    if (val == "nocursor") {
	      onBlur(cm);
	      cm.display.input.blur();
	      cm.display.disabled = true;
	    } else {
	      cm.display.disabled = false;
	    }
	    cm.display.input.readOnlyChanged(val)
	  });
	  option("disableInput", false, function(cm, val) {if (!val) cm.display.input.reset();}, true);
	  option("dragDrop", true, dragDropChanged);
	  option("allowDropFileTypes", null);

	  option("cursorBlinkRate", 530);
	  option("cursorScrollMargin", 0);
	  option("cursorHeight", 1, updateSelection, true);
	  option("singleCursorHeightPerLine", true, updateSelection, true);
	  option("workTime", 100);
	  option("workDelay", 100);
	  option("flattenSpans", true, resetModeState, true);
	  option("addModeClass", false, resetModeState, true);
	  option("pollInterval", 100);
	  option("undoDepth", 200, function(cm, val){cm.doc.history.undoDepth = val;});
	  option("historyEventDelay", 1250);
	  option("viewportMargin", 10, function(cm){cm.refresh();}, true);
	  option("maxHighlightLength", 10000, resetModeState, true);
	  option("moveInputWithCursor", true, function(cm, val) {
	    if (!val) cm.display.input.resetPosition();
	  });

	  option("tabindex", null, function(cm, val) {
	    cm.display.input.getField().tabIndex = val || "";
	  });
	  option("autofocus", null);

	  // MODE DEFINITION AND QUERYING

	  // Known modes, by name and by MIME
	  var modes = CodeMirror.modes = {}, mimeModes = CodeMirror.mimeModes = {};

	  // Extra arguments are stored as the mode's dependencies, which is
	  // used by (legacy) mechanisms like loadmode.js to automatically
	  // load a mode. (Preferred mechanism is the require/define calls.)
	  CodeMirror.defineMode = function(name, mode) {
	    if (!CodeMirror.defaults.mode && name != "null") CodeMirror.defaults.mode = name;
	    if (arguments.length > 2)
	      mode.dependencies = Array.prototype.slice.call(arguments, 2);
	    modes[name] = mode;
	  };

	  CodeMirror.defineMIME = function(mime, spec) {
	    mimeModes[mime] = spec;
	  };

	  // Given a MIME type, a {name, ...options} config object, or a name
	  // string, return a mode config object.
	  CodeMirror.resolveMode = function(spec) {
	    if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
	      spec = mimeModes[spec];
	    } else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
	      var found = mimeModes[spec.name];
	      if (typeof found == "string") found = {name: found};
	      spec = createObj(found, spec);
	      spec.name = found.name;
	    } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
	      return CodeMirror.resolveMode("application/xml");
	    }
	    if (typeof spec == "string") return {name: spec};
	    else return spec || {name: "null"};
	  };

	  // Given a mode spec (anything that resolveMode accepts), find and
	  // initialize an actual mode object.
	  CodeMirror.getMode = function(options, spec) {
	    var spec = CodeMirror.resolveMode(spec);
	    var mfactory = modes[spec.name];
	    if (!mfactory) return CodeMirror.getMode(options, "text/plain");
	    var modeObj = mfactory(options, spec);
	    if (modeExtensions.hasOwnProperty(spec.name)) {
	      var exts = modeExtensions[spec.name];
	      for (var prop in exts) {
	        if (!exts.hasOwnProperty(prop)) continue;
	        if (modeObj.hasOwnProperty(prop)) modeObj["_" + prop] = modeObj[prop];
	        modeObj[prop] = exts[prop];
	      }
	    }
	    modeObj.name = spec.name;
	    if (spec.helperType) modeObj.helperType = spec.helperType;
	    if (spec.modeProps) for (var prop in spec.modeProps)
	      modeObj[prop] = spec.modeProps[prop];

	    return modeObj;
	  };

	  // Minimal default mode.
	  CodeMirror.defineMode("null", function() {
	    return {token: function(stream) {stream.skipToEnd();}};
	  });
	  CodeMirror.defineMIME("text/plain", "null");

	  // This can be used to attach properties to mode objects from
	  // outside the actual mode definition.
	  var modeExtensions = CodeMirror.modeExtensions = {};
	  CodeMirror.extendMode = function(mode, properties) {
	    var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : (modeExtensions[mode] = {});
	    copyObj(properties, exts);
	  };

	  // EXTENSIONS

	  CodeMirror.defineExtension = function(name, func) {
	    CodeMirror.prototype[name] = func;
	  };
	  CodeMirror.defineDocExtension = function(name, func) {
	    Doc.prototype[name] = func;
	  };
	  CodeMirror.defineOption = option;

	  var initHooks = [];
	  CodeMirror.defineInitHook = function(f) {initHooks.push(f);};

	  var helpers = CodeMirror.helpers = {};
	  CodeMirror.registerHelper = function(type, name, value) {
	    if (!helpers.hasOwnProperty(type)) helpers[type] = CodeMirror[type] = {_global: []};
	    helpers[type][name] = value;
	  };
	  CodeMirror.registerGlobalHelper = function(type, name, predicate, value) {
	    CodeMirror.registerHelper(type, name, value);
	    helpers[type]._global.push({pred: predicate, val: value});
	  };

	  // MODE STATE HANDLING

	  // Utility functions for working with state. Exported because nested
	  // modes need to do this for their inner modes.

	  var copyState = CodeMirror.copyState = function(mode, state) {
	    if (state === true) return state;
	    if (mode.copyState) return mode.copyState(state);
	    var nstate = {};
	    for (var n in state) {
	      var val = state[n];
	      if (val instanceof Array) val = val.concat([]);
	      nstate[n] = val;
	    }
	    return nstate;
	  };

	  var startState = CodeMirror.startState = function(mode, a1, a2) {
	    return mode.startState ? mode.startState(a1, a2) : true;
	  };

	  // Given a mode and a state (for that mode), find the inner mode and
	  // state at the position that the state refers to.
	  CodeMirror.innerMode = function(mode, state) {
	    while (mode.innerMode) {
	      var info = mode.innerMode(state);
	      if (!info || info.mode == mode) break;
	      state = info.state;
	      mode = info.mode;
	    }
	    return info || {mode: mode, state: state};
	  };

	  // STANDARD COMMANDS

	  // Commands are parameter-less actions that can be performed on an
	  // editor, mostly used for keybindings.
	  var commands = CodeMirror.commands = {
	    selectAll: function(cm) {cm.setSelection(Pos(cm.firstLine(), 0), Pos(cm.lastLine()), sel_dontScroll);},
	    singleSelection: function(cm) {
	      cm.setSelection(cm.getCursor("anchor"), cm.getCursor("head"), sel_dontScroll);
	    },
	    killLine: function(cm) {
	      deleteNearSelection(cm, function(range) {
	        if (range.empty()) {
	          var len = getLine(cm.doc, range.head.line).text.length;
	          if (range.head.ch == len && range.head.line < cm.lastLine())
	            return {from: range.head, to: Pos(range.head.line + 1, 0)};
	          else
	            return {from: range.head, to: Pos(range.head.line, len)};
	        } else {
	          return {from: range.from(), to: range.to()};
	        }
	      });
	    },
	    deleteLine: function(cm) {
	      deleteNearSelection(cm, function(range) {
	        return {from: Pos(range.from().line, 0),
	                to: clipPos(cm.doc, Pos(range.to().line + 1, 0))};
	      });
	    },
	    delLineLeft: function(cm) {
	      deleteNearSelection(cm, function(range) {
	        return {from: Pos(range.from().line, 0), to: range.from()};
	      });
	    },
	    delWrappedLineLeft: function(cm) {
	      deleteNearSelection(cm, function(range) {
	        var top = cm.charCoords(range.head, "div").top + 5;
	        var leftPos = cm.coordsChar({left: 0, top: top}, "div");
	        return {from: leftPos, to: range.from()};
	      });
	    },
	    delWrappedLineRight: function(cm) {
	      deleteNearSelection(cm, function(range) {
	        var top = cm.charCoords(range.head, "div").top + 5;
	        var rightPos = cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div");
	        return {from: range.from(), to: rightPos };
	      });
	    },
	    undo: function(cm) {cm.undo();},
	    redo: function(cm) {cm.redo();},
	    undoSelection: function(cm) {cm.undoSelection();},
	    redoSelection: function(cm) {cm.redoSelection();},
	    goDocStart: function(cm) {cm.extendSelection(Pos(cm.firstLine(), 0));},
	    goDocEnd: function(cm) {cm.extendSelection(Pos(cm.lastLine()));},
	    goLineStart: function(cm) {
	      cm.extendSelectionsBy(function(range) { return lineStart(cm, range.head.line); },
	                            {origin: "+move", bias: 1});
	    },
	    goLineStartSmart: function(cm) {
	      cm.extendSelectionsBy(function(range) {
	        return lineStartSmart(cm, range.head);
	      }, {origin: "+move", bias: 1});
	    },
	    goLineEnd: function(cm) {
	      cm.extendSelectionsBy(function(range) { return lineEnd(cm, range.head.line); },
	                            {origin: "+move", bias: -1});
	    },
	    goLineRight: function(cm) {
	      cm.extendSelectionsBy(function(range) {
	        var top = cm.charCoords(range.head, "div").top + 5;
	        return cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div");
	      }, sel_move);
	    },
	    goLineLeft: function(cm) {
	      cm.extendSelectionsBy(function(range) {
	        var top = cm.charCoords(range.head, "div").top + 5;
	        return cm.coordsChar({left: 0, top: top}, "div");
	      }, sel_move);
	    },
	    goLineLeftSmart: function(cm) {
	      cm.extendSelectionsBy(function(range) {
	        var top = cm.charCoords(range.head, "div").top + 5;
	        var pos = cm.coordsChar({left: 0, top: top}, "div");
	        if (pos.ch < cm.getLine(pos.line).search(/\S/)) return lineStartSmart(cm, range.head);
	        return pos;
	      }, sel_move);
	    },
	    goLineUp: function(cm) {cm.moveV(-1, "line");},
	    goLineDown: function(cm) {cm.moveV(1, "line");},
	    goPageUp: function(cm) {cm.moveV(-1, "page");},
	    goPageDown: function(cm) {cm.moveV(1, "page");},
	    goCharLeft: function(cm) {cm.moveH(-1, "char");},
	    goCharRight: function(cm) {cm.moveH(1, "char");},
	    goColumnLeft: function(cm) {cm.moveH(-1, "column");},
	    goColumnRight: function(cm) {cm.moveH(1, "column");},
	    goWordLeft: function(cm) {cm.moveH(-1, "word");},
	    goGroupRight: function(cm) {cm.moveH(1, "group");},
	    goGroupLeft: function(cm) {cm.moveH(-1, "group");},
	    goWordRight: function(cm) {cm.moveH(1, "word");},
	    delCharBefore: function(cm) {cm.deleteH(-1, "char");},
	    delCharAfter: function(cm) {cm.deleteH(1, "char");},
	    delWordBefore: function(cm) {cm.deleteH(-1, "word");},
	    delWordAfter: function(cm) {cm.deleteH(1, "word");},
	    delGroupBefore: function(cm) {cm.deleteH(-1, "group");},
	    delGroupAfter: function(cm) {cm.deleteH(1, "group");},
	    indentAuto: function(cm) {cm.indentSelection("smart");},
	    indentMore: function(cm) {cm.indentSelection("add");},
	    indentLess: function(cm) {cm.indentSelection("subtract");},
	    insertTab: function(cm) {cm.replaceSelection("\t");},
	    insertSoftTab: function(cm) {
	      var spaces = [], ranges = cm.listSelections(), tabSize = cm.options.tabSize;
	      for (var i = 0; i < ranges.length; i++) {
	        var pos = ranges[i].from();
	        var col = countColumn(cm.getLine(pos.line), pos.ch, tabSize);
	        spaces.push(new Array(tabSize - col % tabSize + 1).join(" "));
	      }
	      cm.replaceSelections(spaces);
	    },
	    defaultTab: function(cm) {
	      if (cm.somethingSelected()) cm.indentSelection("add");
	      else cm.execCommand("insertTab");
	    },
	    transposeChars: function(cm) {
	      runInOp(cm, function() {
	        var ranges = cm.listSelections(), newSel = [];
	        for (var i = 0; i < ranges.length; i++) {
	          var cur = ranges[i].head, line = getLine(cm.doc, cur.line).text;
	          if (line) {
	            if (cur.ch == line.length) cur = new Pos(cur.line, cur.ch - 1);
	            if (cur.ch > 0) {
	              cur = new Pos(cur.line, cur.ch + 1);
	              cm.replaceRange(line.charAt(cur.ch - 1) + line.charAt(cur.ch - 2),
	                              Pos(cur.line, cur.ch - 2), cur, "+transpose");
	            } else if (cur.line > cm.doc.first) {
	              var prev = getLine(cm.doc, cur.line - 1).text;
	              if (prev)
	                cm.replaceRange(line.charAt(0) + cm.doc.lineSeparator() +
	                                prev.charAt(prev.length - 1),
	                                Pos(cur.line - 1, prev.length - 1), Pos(cur.line, 1), "+transpose");
	            }
	          }
	          newSel.push(new Range(cur, cur));
	        }
	        cm.setSelections(newSel);
	      });
	    },
	    newlineAndIndent: function(cm) {
	      runInOp(cm, function() {
	        var len = cm.listSelections().length;
	        for (var i = 0; i < len; i++) {
	          var range = cm.listSelections()[i];
	          cm.replaceRange(cm.doc.lineSeparator(), range.anchor, range.head, "+input");
	          cm.indentLine(range.from().line + 1, null, true);
	        }
	        ensureCursorVisible(cm);
	      });
	    },
	    toggleOverwrite: function(cm) {cm.toggleOverwrite();}
	  };


	  // STANDARD KEYMAPS

	  var keyMap = CodeMirror.keyMap = {};

	  keyMap.basic = {
	    "Left": "goCharLeft", "Right": "goCharRight", "Up": "goLineUp", "Down": "goLineDown",
	    "End": "goLineEnd", "Home": "goLineStartSmart", "PageUp": "goPageUp", "PageDown": "goPageDown",
	    "Delete": "delCharAfter", "Backspace": "delCharBefore", "Shift-Backspace": "delCharBefore",
	    "Tab": "defaultTab", "Shift-Tab": "indentAuto",
	    "Enter": "newlineAndIndent", "Insert": "toggleOverwrite",
	    "Esc": "singleSelection"
	  };
	  // Note that the save and find-related commands aren't defined by
	  // default. User code or addons can define them. Unknown commands
	  // are simply ignored.
	  keyMap.pcDefault = {
	    "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo",
	    "Ctrl-Home": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Up": "goLineUp", "Ctrl-Down": "goLineDown",
	    "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd",
	    "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find",
	    "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll",
	    "Ctrl-[": "indentLess", "Ctrl-]": "indentMore",
	    "Ctrl-U": "undoSelection", "Shift-Ctrl-U": "redoSelection", "Alt-U": "redoSelection",
	    fallthrough: "basic"
	  };
	  // Very basic readline/emacs-style bindings, which are standard on Mac.
	  keyMap.emacsy = {
	    "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown",
	    "Alt-F": "goWordRight", "Alt-B": "goWordLeft", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd",
	    "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp", "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore",
	    "Alt-D": "delWordAfter", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars"
	  };
	  keyMap.macDefault = {
	    "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo",
	    "Cmd-Home": "goDocStart", "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft",
	    "Alt-Right": "goGroupRight", "Cmd-Left": "goLineLeft", "Cmd-Right": "goLineRight", "Alt-Backspace": "delGroupBefore",
	    "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find",
	    "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll",
	    "Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delWrappedLineLeft", "Cmd-Delete": "delWrappedLineRight",
	    "Cmd-U": "undoSelection", "Shift-Cmd-U": "redoSelection", "Ctrl-Up": "goDocStart", "Ctrl-Down": "goDocEnd",
	    fallthrough: ["basic", "emacsy"]
	  };
	  keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault;

	  // KEYMAP DISPATCH

	  function normalizeKeyName(name) {
	    var parts = name.split(/-(?!$)/), name = parts[parts.length - 1];
	    var alt, ctrl, shift, cmd;
	    for (var i = 0; i < parts.length - 1; i++) {
	      var mod = parts[i];
	      if (/^(cmd|meta|m)$/i.test(mod)) cmd = true;
	      else if (/^a(lt)?$/i.test(mod)) alt = true;
	      else if (/^(c|ctrl|control)$/i.test(mod)) ctrl = true;
	      else if (/^s(hift)$/i.test(mod)) shift = true;
	      else throw new Error("Unrecognized modifier name: " + mod);
	    }
	    if (alt) name = "Alt-" + name;
	    if (ctrl) name = "Ctrl-" + name;
	    if (cmd) name = "Cmd-" + name;
	    if (shift) name = "Shift-" + name;
	    return name;
	  }

	  // This is a kludge to keep keymaps mostly working as raw objects
	  // (backwards compatibility) while at the same time support features
	  // like normalization and multi-stroke key bindings. It compiles a
	  // new normalized keymap, and then updates the old object to reflect
	  // this.
	  CodeMirror.normalizeKeyMap = function(keymap) {
	    var copy = {};
	    for (var keyname in keymap) if (keymap.hasOwnProperty(keyname)) {
	      var value = keymap[keyname];
	      if (/^(name|fallthrough|(de|at)tach)$/.test(keyname)) continue;
	      if (value == "...") { delete keymap[keyname]; continue; }

	      var keys = map(keyname.split(" "), normalizeKeyName);
	      for (var i = 0; i < keys.length; i++) {
	        var val, name;
	        if (i == keys.length - 1) {
	          name = keys.join(" ");
	          val = value;
	        } else {
	          name = keys.slice(0, i + 1).join(" ");
	          val = "...";
	        }
	        var prev = copy[name];
	        if (!prev) copy[name] = val;
	        else if (prev != val) throw new Error("Inconsistent bindings for " + name);
	      }
	      delete keymap[keyname];
	    }
	    for (var prop in copy) keymap[prop] = copy[prop];
	    return keymap;
	  };

	  var lookupKey = CodeMirror.lookupKey = function(key, map, handle, context) {
	    map = getKeyMap(map);
	    var found = map.call ? map.call(key, context) : map[key];
	    if (found === false) return "nothing";
	    if (found === "...") return "multi";
	    if (found != null && handle(found)) return "handled";

	    if (map.fallthrough) {
	      if (Object.prototype.toString.call(map.fallthrough) != "[object Array]")
	        return lookupKey(key, map.fallthrough, handle, context);
	      for (var i = 0; i < map.fallthrough.length; i++) {
	        var result = lookupKey(key, map.fallthrough[i], handle, context);
	        if (result) return result;
	      }
	    }
	  };

	  // Modifier key presses don't count as 'real' key presses for the
	  // purpose of keymap fallthrough.
	  var isModifierKey = CodeMirror.isModifierKey = function(value) {
	    var name = typeof value == "string" ? value : keyNames[value.keyCode];
	    return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod";
	  };

	  // Look up the name of a key as indicated by an event object.
	  var keyName = CodeMirror.keyName = function(event, noShift) {
	    if (presto && event.keyCode == 34 && event["char"]) return false;
	    var base = keyNames[event.keyCode], name = base;
	    if (name == null || event.altGraphKey) return false;
	    if (event.altKey && base != "Alt") name = "Alt-" + name;
	    if ((flipCtrlCmd ? event.metaKey : event.ctrlKey) && base != "Ctrl") name = "Ctrl-" + name;
	    if ((flipCtrlCmd ? event.ctrlKey : event.metaKey) && base != "Cmd") name = "Cmd-" + name;
	    if (!noShift && event.shiftKey && base != "Shift") name = "Shift-" + name;
	    return name;
	  };

	  function getKeyMap(val) {
	    return typeof val == "string" ? keyMap[val] : val;
	  }

	  // FROMTEXTAREA

	  CodeMirror.fromTextArea = function(textarea, options) {
	    options = options ? copyObj(options) : {};
	    options.value = textarea.value;
	    if (!options.tabindex && textarea.tabIndex)
	      options.tabindex = textarea.tabIndex;
	    if (!options.placeholder && textarea.placeholder)
	      options.placeholder = textarea.placeholder;
	    // Set autofocus to true if this textarea is focused, or if it has
	    // autofocus and no other element is focused.
	    if (options.autofocus == null) {
	      var hasFocus = activeElt();
	      options.autofocus = hasFocus == textarea ||
	        textarea.getAttribute("autofocus") != null && hasFocus == document.body;
	    }

	    function save() {textarea.value = cm.getValue();}
	    if (textarea.form) {
	      on(textarea.form, "submit", save);
	      // Deplorable hack to make the submit method do the right thing.
	      if (!options.leaveSubmitMethodAlone) {
	        var form = textarea.form, realSubmit = form.submit;
	        try {
	          var wrappedSubmit = form.submit = function() {
	            save();
	            form.submit = realSubmit;
	            form.submit();
	            form.submit = wrappedSubmit;
	          };
	        } catch(e) {}
	      }
	    }

	    options.finishInit = function(cm) {
	      cm.save = save;
	      cm.getTextArea = function() { return textarea; };
	      cm.toTextArea = function() {
	        cm.toTextArea = isNaN; // Prevent this from being ran twice
	        save();
	        textarea.parentNode.removeChild(cm.getWrapperElement());
	        textarea.style.display = "";
	        if (textarea.form) {
	          off(textarea.form, "submit", save);
	          if (typeof textarea.form.submit == "function")
	            textarea.form.submit = realSubmit;
	        }
	      };
	    };

	    textarea.style.display = "none";
	    var cm = CodeMirror(function(node) {
	      textarea.parentNode.insertBefore(node, textarea.nextSibling);
	    }, options);
	    return cm;
	  };

	  // STRING STREAM

	  // Fed to the mode parsers, provides helper functions to make
	  // parsers more succinct.

	  var StringStream = CodeMirror.StringStream = function(string, tabSize) {
	    this.pos = this.start = 0;
	    this.string = string;
	    this.tabSize = tabSize || 8;
	    this.lastColumnPos = this.lastColumnValue = 0;
	    this.lineStart = 0;
	  };

	  StringStream.prototype = {
	    eol: function() {return this.pos >= this.string.length;},
	    sol: function() {return this.pos == this.lineStart;},
	    peek: function() {return this.string.charAt(this.pos) || undefined;},
	    next: function() {
	      if (this.pos < this.string.length)
	        return this.string.charAt(this.pos++);
	    },
	    eat: function(match) {
	      var ch = this.string.charAt(this.pos);
	      if (typeof match == "string") var ok = ch == match;
	      else var ok = ch && (match.test ? match.test(ch) : match(ch));
	      if (ok) {++this.pos; return ch;}
	    },
	    eatWhile: function(match) {
	      var start = this.pos;
	      while (this.eat(match)){}
	      return this.pos > start;
	    },
	    eatSpace: function() {
	      var start = this.pos;
	      while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) ++this.pos;
	      return this.pos > start;
	    },
	    skipToEnd: function() {this.pos = this.string.length;},
	    skipTo: function(ch) {
	      var found = this.string.indexOf(ch, this.pos);
	      if (found > -1) {this.pos = found; return true;}
	    },
	    backUp: function(n) {this.pos -= n;},
	    column: function() {
	      if (this.lastColumnPos < this.start) {
	        this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue);
	        this.lastColumnPos = this.start;
	      }
	      return this.lastColumnValue - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0);
	    },
	    indentation: function() {
	      return countColumn(this.string, null, this.tabSize) -
	        (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0);
	    },
	    match: function(pattern, consume, caseInsensitive) {
	      if (typeof pattern == "string") {
	        var cased = function(str) {return caseInsensitive ? str.toLowerCase() : str;};
	        var substr = this.string.substr(this.pos, pattern.length);
	        if (cased(substr) == cased(pattern)) {
	          if (consume !== false) this.pos += pattern.length;
	          return true;
	        }
	      } else {
	        var match = this.string.slice(this.pos).match(pattern);
	        if (match && match.index > 0) return null;
	        if (match && consume !== false) this.pos += match[0].length;
	        return match;
	      }
	    },
	    current: function(){return this.string.slice(this.start, this.pos);},
	    hideFirstChars: function(n, inner) {
	      this.lineStart += n;
	      try { return inner(); }
	      finally { this.lineStart -= n; }
	    }
	  };

	  // TEXTMARKERS

	  // Created with markText and setBookmark methods. A TextMarker is a
	  // handle that can be used to clear or find a marked position in the
	  // document. Line objects hold arrays (markedSpans) containing
	  // {from, to, marker} object pointing to such marker objects, and
	  // indicating that such a marker is present on that line. Multiple
	  // lines may point to the same marker when it spans across lines.
	  // The spans will have null for their from/to properties when the
	  // marker continues beyond the start/end of the line. Markers have
	  // links back to the lines they currently touch.

	  var nextMarkerId = 0;

	  var TextMarker = CodeMirror.TextMarker = function(doc, type) {
	    this.lines = [];
	    this.type = type;
	    this.doc = doc;
	    this.id = ++nextMarkerId;
	  };
	  eventMixin(TextMarker);

	  // Clear the marker.
	  TextMarker.prototype.clear = function() {
	    if (this.explicitlyCleared) return;
	    var cm = this.doc.cm, withOp = cm && !cm.curOp;
	    if (withOp) startOperation(cm);
	    if (hasHandler(this, "clear")) {
	      var found = this.find();
	      if (found) signalLater(this, "clear", found.from, found.to);
	    }
	    var min = null, max = null;
	    for (var i = 0; i < this.lines.length; ++i) {
	      var line = this.lines[i];
	      var span = getMarkedSpanFor(line.markedSpans, this);
	      if (cm && !this.collapsed) regLineChange(cm, lineNo(line), "text");
	      else if (cm) {
	        if (span.to != null) max = lineNo(line);
	        if (span.from != null) min = lineNo(line);
	      }
	      line.markedSpans = removeMarkedSpan(line.markedSpans, span);
	      if (span.from == null && this.collapsed && !lineIsHidden(this.doc, line) && cm)
	        updateLineHeight(line, textHeight(cm.display));
	    }
	    if (cm && this.collapsed && !cm.options.lineWrapping) for (var i = 0; i < this.lines.length; ++i) {
	      var visual = visualLine(this.lines[i]), len = lineLength(visual);
	      if (len > cm.display.maxLineLength) {
	        cm.display.maxLine = visual;
	        cm.display.maxLineLength = len;
	        cm.display.maxLineChanged = true;
	      }
	    }

	    if (min != null && cm && this.collapsed) regChange(cm, min, max + 1);
	    this.lines.length = 0;
	    this.explicitlyCleared = true;
	    if (this.atomic && this.doc.cantEdit) {
	      this.doc.cantEdit = false;
	      if (cm) reCheckSelection(cm.doc);
	    }
	    if (cm) signalLater(cm, "markerCleared", cm, this);
	    if (withOp) endOperation(cm);
	    if (this.parent) this.parent.clear();
	  };

	  // Find the position of the marker in the document. Returns a {from,
	  // to} object by default. Side can be passed to get a specific side
	  // -- 0 (both), -1 (left), or 1 (right). When lineObj is true, the
	  // Pos objects returned contain a line object, rather than a line
	  // number (used to prevent looking up the same line twice).
	  TextMarker.prototype.find = function(side, lineObj) {
	    if (side == null && this.type == "bookmark") side = 1;
	    var from, to;
	    for (var i = 0; i < this.lines.length; ++i) {
	      var line = this.lines[i];
	      var span = getMarkedSpanFor(line.markedSpans, this);
	      if (span.from != null) {
	        from = Pos(lineObj ? line : lineNo(line), span.from);
	        if (side == -1) return from;
	      }
	      if (span.to != null) {
	        to = Pos(lineObj ? line : lineNo(line), span.to);
	        if (side == 1) return to;
	      }
	    }
	    return from && {from: from, to: to};
	  };

	  // Signals that the marker's widget changed, and surrounding layout
	  // should be recomputed.
	  TextMarker.prototype.changed = function() {
	    var pos = this.find(-1, true), widget = this, cm = this.doc.cm;
	    if (!pos || !cm) return;
	    runInOp(cm, function() {
	      var line = pos.line, lineN = lineNo(pos.line);
	      var view = findViewForLine(cm, lineN);
	      if (view) {
	        clearLineMeasurementCacheFor(view);
	        cm.curOp.selectionChanged = cm.curOp.forceUpdate = true;
	      }
	      cm.curOp.updateMaxLine = true;
	      if (!lineIsHidden(widget.doc, line) && widget.height != null) {
	        var oldHeight = widget.height;
	        widget.height = null;
	        var dHeight = widgetHeight(widget) - oldHeight;
	        if (dHeight)
	          updateLineHeight(line, line.height + dHeight);
	      }
	    });
	  };

	  TextMarker.prototype.attachLine = function(line) {
	    if (!this.lines.length && this.doc.cm) {
	      var op = this.doc.cm.curOp;
	      if (!op.maybeHiddenMarkers || indexOf(op.maybeHiddenMarkers, this) == -1)
	        (op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this);
	    }
	    this.lines.push(line);
	  };
	  TextMarker.prototype.detachLine = function(line) {
	    this.lines.splice(indexOf(this.lines, line), 1);
	    if (!this.lines.length && this.doc.cm) {
	      var op = this.doc.cm.curOp;
	      (op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this);
	    }
	  };

	  // Collapsed markers have unique ids, in order to be able to order
	  // them, which is needed for uniquely determining an outer marker
	  // when they overlap (they may nest, but not partially overlap).
	  var nextMarkerId = 0;

	  // Create a marker, wire it up to the right lines, and
	  function markText(doc, from, to, options, type) {
	    // Shared markers (across linked documents) are handled separately
	    // (markTextShared will call out to this again, once per
	    // document).
	    if (options && options.shared) return markTextShared(doc, from, to, options, type);
	    // Ensure we are in an operation.
	    if (doc.cm && !doc.cm.curOp) return operation(doc.cm, markText)(doc, from, to, options, type);

	    var marker = new TextMarker(doc, type), diff = cmp(from, to);
	    if (options) copyObj(options, marker, false);
	    // Don't connect empty markers unless clearWhenEmpty is false
	    if (diff > 0 || diff == 0 && marker.clearWhenEmpty !== false)
	      return marker;
	    if (marker.replacedWith) {
	      // Showing up as a widget implies collapsed (widget replaces text)
	      marker.collapsed = true;
	      marker.widgetNode = elt("span", [marker.replacedWith], "CodeMirror-widget");
	      if (!options.handleMouseEvents) marker.widgetNode.setAttribute("cm-ignore-events", "true");
	      if (options.insertLeft) marker.widgetNode.insertLeft = true;
	    }
	    if (marker.collapsed) {
	      if (conflictingCollapsedRange(doc, from.line, from, to, marker) ||
	          from.line != to.line && conflictingCollapsedRange(doc, to.line, from, to, marker))
	        throw new Error("Inserting collapsed marker partially overlapping an existing one");
	      sawCollapsedSpans = true;
	    }

	    if (marker.addToHistory)
	      addChangeToHistory(doc, {from: from, to: to, origin: "markText"}, doc.sel, NaN);

	    var curLine = from.line, cm = doc.cm, updateMaxLine;
	    doc.iter(curLine, to.line + 1, function(line) {
	      if (cm && marker.collapsed && !cm.options.lineWrapping && visualLine(line) == cm.display.maxLine)
	        updateMaxLine = true;
	      if (marker.collapsed && curLine != from.line) updateLineHeight(line, 0);
	      addMarkedSpan(line, new MarkedSpan(marker,
	                                         curLine == from.line ? from.ch : null,
	                                         curLine == to.line ? to.ch : null));
	      ++curLine;
	    });
	    // lineIsHidden depends on the presence of the spans, so needs a second pass
	    if (marker.collapsed) doc.iter(from.line, to.line + 1, function(line) {
	      if (lineIsHidden(doc, line)) updateLineHeight(line, 0);
	    });

	    if (marker.clearOnEnter) on(marker, "beforeCursorEnter", function() { marker.clear(); });

	    if (marker.readOnly) {
	      sawReadOnlySpans = true;
	      if (doc.history.done.length || doc.history.undone.length)
	        doc.clearHistory();
	    }
	    if (marker.collapsed) {
	      marker.id = ++nextMarkerId;
	      marker.atomic = true;
	    }
	    if (cm) {
	      // Sync editor state
	      if (updateMaxLine) cm.curOp.updateMaxLine = true;
	      if (marker.collapsed)
	        regChange(cm, from.line, to.line + 1);
	      else if (marker.className || marker.title || marker.startStyle || marker.endStyle || marker.css)
	        for (var i = from.line; i <= to.line; i++) regLineChange(cm, i, "text");
	      if (marker.atomic) reCheckSelection(cm.doc);
	      signalLater(cm, "markerAdded", cm, marker);
	    }
	    return marker;
	  }

	  // SHARED TEXTMARKERS

	  // A shared marker spans multiple linked documents. It is
	  // implemented as a meta-marker-object controlling multiple normal
	  // markers.
	  var SharedTextMarker = CodeMirror.SharedTextMarker = function(markers, primary) {
	    this.markers = markers;
	    this.primary = primary;
	    for (var i = 0; i < markers.length; ++i)
	      markers[i].parent = this;
	  };
	  eventMixin(SharedTextMarker);

	  SharedTextMarker.prototype.clear = function() {
	    if (this.explicitlyCleared) return;
	    this.explicitlyCleared = true;
	    for (var i = 0; i < this.markers.length; ++i)
	      this.markers[i].clear();
	    signalLater(this, "clear");
	  };
	  SharedTextMarker.prototype.find = function(side, lineObj) {
	    return this.primary.find(side, lineObj);
	  };

	  function markTextShared(doc, from, to, options, type) {
	    options = copyObj(options);
	    options.shared = false;
	    var markers = [markText(doc, from, to, options, type)], primary = markers[0];
	    var widget = options.widgetNode;
	    linkedDocs(doc, function(doc) {
	      if (widget) options.widgetNode = widget.cloneNode(true);
	      markers.push(markText(doc, clipPos(doc, from), clipPos(doc, to), options, type));
	      for (var i = 0; i < doc.linked.length; ++i)
	        if (doc.linked[i].isParent) return;
	      primary = lst(markers);
	    });
	    return new SharedTextMarker(markers, primary);
	  }

	  function findSharedMarkers(doc) {
	    return doc.findMarks(Pos(doc.first, 0), doc.clipPos(Pos(doc.lastLine())),
	                         function(m) { return m.parent; });
	  }

	  function copySharedMarkers(doc, markers) {
	    for (var i = 0; i < markers.length; i++) {
	      var marker = markers[i], pos = marker.find();
	      var mFrom = doc.clipPos(pos.from), mTo = doc.clipPos(pos.to);
	      if (cmp(mFrom, mTo)) {
	        var subMark = markText(doc, mFrom, mTo, marker.primary, marker.primary.type);
	        marker.markers.push(subMark);
	        subMark.parent = marker;
	      }
	    }
	  }

	  function detachSharedMarkers(markers) {
	    for (var i = 0; i < markers.length; i++) {
	      var marker = markers[i], linked = [marker.primary.doc];;
	      linkedDocs(marker.primary.doc, function(d) { linked.push(d); });
	      for (var j = 0; j < marker.markers.length; j++) {
	        var subMarker = marker.markers[j];
	        if (indexOf(linked, subMarker.doc) == -1) {
	          subMarker.parent = null;
	          marker.markers.splice(j--, 1);
	        }
	      }
	    }
	  }

	  // TEXTMARKER SPANS

	  function MarkedSpan(marker, from, to) {
	    this.marker = marker;
	    this.from = from; this.to = to;
	  }

	  // Search an array of spans for a span matching the given marker.
	  function getMarkedSpanFor(spans, marker) {
	    if (spans) for (var i = 0; i < spans.length; ++i) {
	      var span = spans[i];
	      if (span.marker == marker) return span;
	    }
	  }
	  // Remove a span from an array, returning undefined if no spans are
	  // left (we don't store arrays for lines without spans).
	  function removeMarkedSpan(spans, span) {
	    for (var r, i = 0; i < spans.length; ++i)
	      if (spans[i] != span) (r || (r = [])).push(spans[i]);
	    return r;
	  }
	  // Add a span to a line.
	  function addMarkedSpan(line, span) {
	    line.markedSpans = line.markedSpans ? line.markedSpans.concat([span]) : [span];
	    span.marker.attachLine(line);
	  }

	  // Used for the algorithm that adjusts markers for a change in the
	  // document. These functions cut an array of spans at a given
	  // character position, returning an array of remaining chunks (or
	  // undefined if nothing remains).
	  function markedSpansBefore(old, startCh, isInsert) {
	    if (old) for (var i = 0, nw; i < old.length; ++i) {
	      var span = old[i], marker = span.marker;
	      var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh);
	      if (startsBefore || span.from == startCh && marker.type == "bookmark" && (!isInsert || !span.marker.insertLeft)) {
	        var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh);
	        (nw || (nw = [])).push(new MarkedSpan(marker, span.from, endsAfter ? null : span.to));
	      }
	    }
	    return nw;
	  }
	  function markedSpansAfter(old, endCh, isInsert) {
	    if (old) for (var i = 0, nw; i < old.length; ++i) {
	      var span = old[i], marker = span.marker;
	      var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh);
	      if (endsAfter || span.from == endCh && marker.type == "bookmark" && (!isInsert || span.marker.insertLeft)) {
	        var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh);
	        (nw || (nw = [])).push(new MarkedSpan(marker, startsBefore ? null : span.from - endCh,
	                                              span.to == null ? null : span.to - endCh));
	      }
	    }
	    return nw;
	  }

	  // Given a change object, compute the new set of marker spans that
	  // cover the line in which the change took place. Removes spans
	  // entirely within the change, reconnects spans belonging to the
	  // same marker that appear on both sides of the change, and cuts off
	  // spans partially within the change. Returns an array of span
	  // arrays with one element for each line in (after) the change.
	  function stretchSpansOverChange(doc, change) {
	    if (change.full) return null;
	    var oldFirst = isLine(doc, change.from.line) && getLine(doc, change.from.line).markedSpans;
	    var oldLast = isLine(doc, change.to.line) && getLine(doc, change.to.line).markedSpans;
	    if (!oldFirst && !oldLast) return null;

	    var startCh = change.from.ch, endCh = change.to.ch, isInsert = cmp(change.from, change.to) == 0;
	    // Get the spans that 'stick out' on both sides
	    var first = markedSpansBefore(oldFirst, startCh, isInsert);
	    var last = markedSpansAfter(oldLast, endCh, isInsert);

	    // Next, merge those two ends
	    var sameLine = change.text.length == 1, offset = lst(change.text).length + (sameLine ? startCh : 0);
	    if (first) {
	      // Fix up .to properties of first
	      for (var i = 0; i < first.length; ++i) {
	        var span = first[i];
	        if (span.to == null) {
	          var found = getMarkedSpanFor(last, span.marker);
	          if (!found) span.to = startCh;
	          else if (sameLine) span.to = found.to == null ? null : found.to + offset;
	        }
	      }
	    }
	    if (last) {
	      // Fix up .from in last (or move them into first in case of sameLine)
	      for (var i = 0; i < last.length; ++i) {
	        var span = last[i];
	        if (span.to != null) span.to += offset;
	        if (span.from == null) {
	          var found = getMarkedSpanFor(first, span.marker);
	          if (!found) {
	            span.from = offset;
	            if (sameLine) (first || (first = [])).push(span);
	          }
	        } else {
	          span.from += offset;
	          if (sameLine) (first || (first = [])).push(span);
	        }
	      }
	    }
	    // Make sure we didn't create any zero-length spans
	    if (first) first = clearEmptySpans(first);
	    if (last && last != first) last = clearEmptySpans(last);

	    var newMarkers = [first];
	    if (!sameLine) {
	      // Fill gap with whole-line-spans
	      var gap = change.text.length - 2, gapMarkers;
	      if (gap > 0 && first)
	        for (var i = 0; i < first.length; ++i)
	          if (first[i].to == null)
	            (gapMarkers || (gapMarkers = [])).push(new MarkedSpan(first[i].marker, null, null));
	      for (var i = 0; i < gap; ++i)
	        newMarkers.push(gapMarkers);
	      newMarkers.push(last);
	    }
	    return newMarkers;
	  }

	  // Remove spans that are empty and don't have a clearWhenEmpty
	  // option of false.
	  function clearEmptySpans(spans) {
	    for (var i = 0; i < spans.length; ++i) {
	      var span = spans[i];
	      if (span.from != null && span.from == span.to && span.marker.clearWhenEmpty !== false)
	        spans.splice(i--, 1);
	    }
	    if (!spans.length) return null;
	    return spans;
	  }

	  // Used for un/re-doing changes from the history. Combines the
	  // result of computing the existing spans with the set of spans that
	  // existed in the history (so that deleting around a span and then
	  // undoing brings back the span).
	  function mergeOldSpans(doc, change) {
	    var old = getOldSpans(doc, change);
	    var stretched = stretchSpansOverChange(doc, change);
	    if (!old) return stretched;
	    if (!stretched) return old;

	    for (var i = 0; i < old.length; ++i) {
	      var oldCur = old[i], stretchCur = stretched[i];
	      if (oldCur && stretchCur) {
	        spans: for (var j = 0; j < stretchCur.length; ++j) {
	          var span = stretchCur[j];
	          for (var k = 0; k < oldCur.length; ++k)
	            if (oldCur[k].marker == span.marker) continue spans;
	          oldCur.push(span);
	        }
	      } else if (stretchCur) {
	        old[i] = stretchCur;
	      }
	    }
	    return old;
	  }

	  // Used to 'clip' out readOnly ranges when making a change.
	  function removeReadOnlyRanges(doc, from, to) {
	    var markers = null;
	    doc.iter(from.line, to.line + 1, function(line) {
	      if (line.markedSpans) for (var i = 0; i < line.markedSpans.length; ++i) {
	        var mark = line.markedSpans[i].marker;
	        if (mark.readOnly && (!markers || indexOf(markers, mark) == -1))
	          (markers || (markers = [])).push(mark);
	      }
	    });
	    if (!markers) return null;
	    var parts = [{from: from, to: to}];
	    for (var i = 0; i < markers.length; ++i) {
	      var mk = markers[i], m = mk.find(0);
	      for (var j = 0; j < parts.length; ++j) {
	        var p = parts[j];
	        if (cmp(p.to, m.from) < 0 || cmp(p.from, m.to) > 0) continue;
	        var newParts = [j, 1], dfrom = cmp(p.from, m.from), dto = cmp(p.to, m.to);
	        if (dfrom < 0 || !mk.inclusiveLeft && !dfrom)
	          newParts.push({from: p.from, to: m.from});
	        if (dto > 0 || !mk.inclusiveRight && !dto)
	          newParts.push({from: m.to, to: p.to});
	        parts.splice.apply(parts, newParts);
	        j += newParts.length - 1;
	      }
	    }
	    return parts;
	  }

	  // Connect or disconnect spans from a line.
	  function detachMarkedSpans(line) {
	    var spans = line.markedSpans;
	    if (!spans) return;
	    for (var i = 0; i < spans.length; ++i)
	      spans[i].marker.detachLine(line);
	    line.markedSpans = null;
	  }
	  function attachMarkedSpans(line, spans) {
	    if (!spans) return;
	    for (var i = 0; i < spans.length; ++i)
	      spans[i].marker.attachLine(line);
	    line.markedSpans = spans;
	  }

	  // Helpers used when computing which overlapping collapsed span
	  // counts as the larger one.
	  function extraLeft(marker) { return marker.inclusiveLeft ? -1 : 0; }
	  function extraRight(marker) { return marker.inclusiveRight ? 1 : 0; }

	  // Returns a number indicating which of two overlapping collapsed
	  // spans is larger (and thus includes the other). Falls back to
	  // comparing ids when the spans cover exactly the same range.
	  function compareCollapsedMarkers(a, b) {
	    var lenDiff = a.lines.length - b.lines.length;
	    if (lenDiff != 0) return lenDiff;
	    var aPos = a.find(), bPos = b.find();
	    var fromCmp = cmp(aPos.from, bPos.from) || extraLeft(a) - extraLeft(b);
	    if (fromCmp) return -fromCmp;
	    var toCmp = cmp(aPos.to, bPos.to) || extraRight(a) - extraRight(b);
	    if (toCmp) return toCmp;
	    return b.id - a.id;
	  }

	  // Find out whether a line ends or starts in a collapsed span. If
	  // so, return the marker for that span.
	  function collapsedSpanAtSide(line, start) {
	    var sps = sawCollapsedSpans && line.markedSpans, found;
	    if (sps) for (var sp, i = 0; i < sps.length; ++i) {
	      sp = sps[i];
	      if (sp.marker.collapsed && (start ? sp.from : sp.to) == null &&
	          (!found || compareCollapsedMarkers(found, sp.marker) < 0))
	        found = sp.marker;
	    }
	    return found;
	  }
	  function collapsedSpanAtStart(line) { return collapsedSpanAtSide(line, true); }
	  function collapsedSpanAtEnd(line) { return collapsedSpanAtSide(line, false); }

	  // Test whether there exists a collapsed span that partially
	  // overlaps (covers the start or end, but not both) of a new span.
	  // Such overlap is not allowed.
	  function conflictingCollapsedRange(doc, lineNo, from, to, marker) {
	    var line = getLine(doc, lineNo);
	    var sps = sawCollapsedSpans && line.markedSpans;
	    if (sps) for (var i = 0; i < sps.length; ++i) {
	      var sp = sps[i];
	      if (!sp.marker.collapsed) continue;
	      var found = sp.marker.find(0);
	      var fromCmp = cmp(found.from, from) || extraLeft(sp.marker) - extraLeft(marker);
	      var toCmp = cmp(found.to, to) || extraRight(sp.marker) - extraRight(marker);
	      if (fromCmp >= 0 && toCmp <= 0 || fromCmp <= 0 && toCmp >= 0) continue;
	      if (fromCmp <= 0 && (cmp(found.to, from) > 0 || (sp.marker.inclusiveRight && marker.inclusiveLeft)) ||
	          fromCmp >= 0 && (cmp(found.from, to) < 0 || (sp.marker.inclusiveLeft && marker.inclusiveRight)))
	        return true;
	    }
	  }

	  // A visual line is a line as drawn on the screen. Folding, for
	  // example, can cause multiple logical lines to appear on the same
	  // visual line. This finds the start of the visual line that the
	  // given line is part of (usually that is the line itself).
	  function visualLine(line) {
	    var merged;
	    while (merged = collapsedSpanAtStart(line))
	      line = merged.find(-1, true).line;
	    return line;
	  }

	  // Returns an array of logical lines that continue the visual line
	  // started by the argument, or undefined if there are no such lines.
	  function visualLineContinued(line) {
	    var merged, lines;
	    while (merged = collapsedSpanAtEnd(line)) {
	      line = merged.find(1, true).line;
	      (lines || (lines = [])).push(line);
	    }
	    return lines;
	  }

	  // Get the line number of the start of the visual line that the
	  // given line number is part of.
	  function visualLineNo(doc, lineN) {
	    var line = getLine(doc, lineN), vis = visualLine(line);
	    if (line == vis) return lineN;
	    return lineNo(vis);
	  }
	  // Get the line number of the start of the next visual line after
	  // the given line.
	  function visualLineEndNo(doc, lineN) {
	    if (lineN > doc.lastLine()) return lineN;
	    var line = getLine(doc, lineN), merged;
	    if (!lineIsHidden(doc, line)) return lineN;
	    while (merged = collapsedSpanAtEnd(line))
	      line = merged.find(1, true).line;
	    return lineNo(line) + 1;
	  }

	  // Compute whether a line is hidden. Lines count as hidden when they
	  // are part of a visual line that starts with another line, or when
	  // they are entirely covered by collapsed, non-widget span.
	  function lineIsHidden(doc, line) {
	    var sps = sawCollapsedSpans && line.markedSpans;
	    if (sps) for (var sp, i = 0; i < sps.length; ++i) {
	      sp = sps[i];
	      if (!sp.marker.collapsed) continue;
	      if (sp.from == null) return true;
	      if (sp.marker.widgetNode) continue;
	      if (sp.from == 0 && sp.marker.inclusiveLeft && lineIsHiddenInner(doc, line, sp))
	        return true;
	    }
	  }
	  function lineIsHiddenInner(doc, line, span) {
	    if (span.to == null) {
	      var end = span.marker.find(1, true);
	      return lineIsHiddenInner(doc, end.line, getMarkedSpanFor(end.line.markedSpans, span.marker));
	    }
	    if (span.marker.inclusiveRight && span.to == line.text.length)
	      return true;
	    for (var sp, i = 0; i < line.markedSpans.length; ++i) {
	      sp = line.markedSpans[i];
	      if (sp.marker.collapsed && !sp.marker.widgetNode && sp.from == span.to &&
	          (sp.to == null || sp.to != span.from) &&
	          (sp.marker.inclusiveLeft || span.marker.inclusiveRight) &&
	          lineIsHiddenInner(doc, line, sp)) return true;
	    }
	  }

	  // LINE WIDGETS

	  // Line widgets are block elements displayed above or below a line.

	  var LineWidget = CodeMirror.LineWidget = function(doc, node, options) {
	    if (options) for (var opt in options) if (options.hasOwnProperty(opt))
	      this[opt] = options[opt];
	    this.doc = doc;
	    this.node = node;
	  };
	  eventMixin(LineWidget);

	  function adjustScrollWhenAboveVisible(cm, line, diff) {
	    if (heightAtLine(line) < ((cm.curOp && cm.curOp.scrollTop) || cm.doc.scrollTop))
	      addToScrollPos(cm, null, diff);
	  }

	  LineWidget.prototype.clear = function() {
	    var cm = this.doc.cm, ws = this.line.widgets, line = this.line, no = lineNo(line);
	    if (no == null || !ws) return;
	    for (var i = 0; i < ws.length; ++i) if (ws[i] == this) ws.splice(i--, 1);
	    if (!ws.length) line.widgets = null;
	    var height = widgetHeight(this);
	    updateLineHeight(line, Math.max(0, line.height - height));
	    if (cm) runInOp(cm, function() {
	      adjustScrollWhenAboveVisible(cm, line, -height);
	      regLineChange(cm, no, "widget");
	    });
	  };
	  LineWidget.prototype.changed = function() {
	    var oldH = this.height, cm = this.doc.cm, line = this.line;
	    this.height = null;
	    var diff = widgetHeight(this) - oldH;
	    if (!diff) return;
	    updateLineHeight(line, line.height + diff);
	    if (cm) runInOp(cm, function() {
	      cm.curOp.forceUpdate = true;
	      adjustScrollWhenAboveVisible(cm, line, diff);
	    });
	  };

	  function widgetHeight(widget) {
	    if (widget.height != null) return widget.height;
	    var cm = widget.doc.cm;
	    if (!cm) return 0;
	    if (!contains(document.body, widget.node)) {
	      var parentStyle = "position: relative;";
	      if (widget.coverGutter)
	        parentStyle += "margin-left: -" + cm.display.gutters.offsetWidth + "px;";
	      if (widget.noHScroll)
	        parentStyle += "width: " + cm.display.wrapper.clientWidth + "px;";
	      removeChildrenAndAdd(cm.display.measure, elt("div", [widget.node], null, parentStyle));
	    }
	    return widget.height = widget.node.parentNode.offsetHeight;
	  }

	  function addLineWidget(doc, handle, node, options) {
	    var widget = new LineWidget(doc, node, options);
	    var cm = doc.cm;
	    if (cm && widget.noHScroll) cm.display.alignWidgets = true;
	    changeLine(doc, handle, "widget", function(line) {
	      var widgets = line.widgets || (line.widgets = []);
	      if (widget.insertAt == null) widgets.push(widget);
	      else widgets.splice(Math.min(widgets.length - 1, Math.max(0, widget.insertAt)), 0, widget);
	      widget.line = line;
	      if (cm && !lineIsHidden(doc, line)) {
	        var aboveVisible = heightAtLine(line) < doc.scrollTop;
	        updateLineHeight(line, line.height + widgetHeight(widget));
	        if (aboveVisible) addToScrollPos(cm, null, widget.height);
	        cm.curOp.forceUpdate = true;
	      }
	      return true;
	    });
	    return widget;
	  }

	  // LINE DATA STRUCTURE

	  // Line objects. These hold state related to a line, including
	  // highlighting info (the styles array).
	  var Line = CodeMirror.Line = function(text, markedSpans, estimateHeight) {
	    this.text = text;
	    attachMarkedSpans(this, markedSpans);
	    this.height = estimateHeight ? estimateHeight(this) : 1;
	  };
	  eventMixin(Line);
	  Line.prototype.lineNo = function() { return lineNo(this); };

	  // Change the content (text, markers) of a line. Automatically
	  // invalidates cached information and tries to re-estimate the
	  // line's height.
	  function updateLine(line, text, markedSpans, estimateHeight) {
	    line.text = text;
	    if (line.stateAfter) line.stateAfter = null;
	    if (line.styles) line.styles = null;
	    if (line.order != null) line.order = null;
	    detachMarkedSpans(line);
	    attachMarkedSpans(line, markedSpans);
	    var estHeight = estimateHeight ? estimateHeight(line) : 1;
	    if (estHeight != line.height) updateLineHeight(line, estHeight);
	  }

	  // Detach a line from the document tree and its markers.
	  function cleanUpLine(line) {
	    line.parent = null;
	    detachMarkedSpans(line);
	  }

	  function extractLineClasses(type, output) {
	    if (type) for (;;) {
	      var lineClass = type.match(/(?:^|\s+)line-(background-)?(\S+)/);
	      if (!lineClass) break;
	      type = type.slice(0, lineClass.index) + type.slice(lineClass.index + lineClass[0].length);
	      var prop = lineClass[1] ? "bgClass" : "textClass";
	      if (output[prop] == null)
	        output[prop] = lineClass[2];
	      else if (!(new RegExp("(?:^|\s)" + lineClass[2] + "(?:$|\s)")).test(output[prop]))
	        output[prop] += " " + lineClass[2];
	    }
	    return type;
	  }

	  function callBlankLine(mode, state) {
	    if (mode.blankLine) return mode.blankLine(state);
	    if (!mode.innerMode) return;
	    var inner = CodeMirror.innerMode(mode, state);
	    if (inner.mode.blankLine) return inner.mode.blankLine(inner.state);
	  }

	  function readToken(mode, stream, state, inner) {
	    for (var i = 0; i < 10; i++) {
	      if (inner) inner[0] = CodeMirror.innerMode(mode, state).mode;
	      var style = mode.token(stream, state);
	      if (stream.pos > stream.start) return style;
	    }
	    throw new Error("Mode " + mode.name + " failed to advance stream.");
	  }

	  // Utility for getTokenAt and getLineTokens
	  function takeToken(cm, pos, precise, asArray) {
	    function getObj(copy) {
	      return {start: stream.start, end: stream.pos,
	              string: stream.current(),
	              type: style || null,
	              state: copy ? copyState(doc.mode, state) : state};
	    }

	    var doc = cm.doc, mode = doc.mode, style;
	    pos = clipPos(doc, pos);
	    var line = getLine(doc, pos.line), state = getStateBefore(cm, pos.line, precise);
	    var stream = new StringStream(line.text, cm.options.tabSize), tokens;
	    if (asArray) tokens = [];
	    while ((asArray || stream.pos < pos.ch) && !stream.eol()) {
	      stream.start = stream.pos;
	      style = readToken(mode, stream, state);
	      if (asArray) tokens.push(getObj(true));
	    }
	    return asArray ? tokens : getObj();
	  }

	  // Run the given mode's parser over a line, calling f for each token.
	  function runMode(cm, text, mode, state, f, lineClasses, forceToEnd) {
	    var flattenSpans = mode.flattenSpans;
	    if (flattenSpans == null) flattenSpans = cm.options.flattenSpans;
	    var curStart = 0, curStyle = null;
	    var stream = new StringStream(text, cm.options.tabSize), style;
	    var inner = cm.options.addModeClass && [null];
	    if (text == "") extractLineClasses(callBlankLine(mode, state), lineClasses);
	    while (!stream.eol()) {
	      if (stream.pos > cm.options.maxHighlightLength) {
	        flattenSpans = false;
	        if (forceToEnd) processLine(cm, text, state, stream.pos);
	        stream.pos = text.length;
	        style = null;
	      } else {
	        style = extractLineClasses(readToken(mode, stream, state, inner), lineClasses);
	      }
	      if (inner) {
	        var mName = inner[0].name;
	        if (mName) style = "m-" + (style ? mName + " " + style : mName);
	      }
	      if (!flattenSpans || curStyle != style) {
	        while (curStart < stream.start) {
	          curStart = Math.min(stream.start, curStart + 50000);
	          f(curStart, curStyle);
	        }
	        curStyle = style;
	      }
	      stream.start = stream.pos;
	    }
	    while (curStart < stream.pos) {
	      // Webkit seems to refuse to render text nodes longer than 57444 characters
	      var pos = Math.min(stream.pos, curStart + 50000);
	      f(pos, curStyle);
	      curStart = pos;
	    }
	  }

	  // Compute a style array (an array starting with a mode generation
	  // -- for invalidation -- followed by pairs of end positions and
	  // style strings), which is used to highlight the tokens on the
	  // line.
	  function highlightLine(cm, line, state, forceToEnd) {
	    // A styles array always starts with a number identifying the
	    // mode/overlays that it is based on (for easy invalidation).
	    var st = [cm.state.modeGen], lineClasses = {};
	    // Compute the base array of styles
	    runMode(cm, line.text, cm.doc.mode, state, function(end, style) {
	      st.push(end, style);
	    }, lineClasses, forceToEnd);

	    // Run overlays, adjust style array.
	    for (var o = 0; o < cm.state.overlays.length; ++o) {
	      var overlay = cm.state.overlays[o], i = 1, at = 0;
	      runMode(cm, line.text, overlay.mode, true, function(end, style) {
	        var start = i;
	        // Ensure there's a token end at the current position, and that i points at it
	        while (at < end) {
	          var i_end = st[i];
	          if (i_end > end)
	            st.splice(i, 1, end, st[i+1], i_end);
	          i += 2;
	          at = Math.min(end, i_end);
	        }
	        if (!style) return;
	        if (overlay.opaque) {
	          st.splice(start, i - start, end, "cm-overlay " + style);
	          i = start + 2;
	        } else {
	          for (; start < i; start += 2) {
	            var cur = st[start+1];
	            st[start+1] = (cur ? cur + " " : "") + "cm-overlay " + style;
	          }
	        }
	      }, lineClasses);
	    }

	    return {styles: st, classes: lineClasses.bgClass || lineClasses.textClass ? lineClasses : null};
	  }

	  function getLineStyles(cm, line, updateFrontier) {
	    if (!line.styles || line.styles[0] != cm.state.modeGen) {
	      var state = getStateBefore(cm, lineNo(line));
	      var result = highlightLine(cm, line, line.text.length > cm.options.maxHighlightLength ? copyState(cm.doc.mode, state) : state);
	      line.stateAfter = state;
	      line.styles = result.styles;
	      if (result.classes) line.styleClasses = result.classes;
	      else if (line.styleClasses) line.styleClasses = null;
	      if (updateFrontier === cm.doc.frontier) cm.doc.frontier++;
	    }
	    return line.styles;
	  }

	  // Lightweight form of highlight -- proceed over this line and
	  // update state, but don't save a style array. Used for lines that
	  // aren't currently visible.
	  function processLine(cm, text, state, startAt) {
	    var mode = cm.doc.mode;
	    var stream = new StringStream(text, cm.options.tabSize);
	    stream.start = stream.pos = startAt || 0;
	    if (text == "") callBlankLine(mode, state);
	    while (!stream.eol()) {
	      readToken(mode, stream, state);
	      stream.start = stream.pos;
	    }
	  }

	  // Convert a style as returned by a mode (either null, or a string
	  // containing one or more styles) to a CSS style. This is cached,
	  // and also looks for line-wide styles.
	  var styleToClassCache = {}, styleToClassCacheWithMode = {};
	  function interpretTokenStyle(style, options) {
	    if (!style || /^\s*$/.test(style)) return null;
	    var cache = options.addModeClass ? styleToClassCacheWithMode : styleToClassCache;
	    return cache[style] ||
	      (cache[style] = style.replace(/\S+/g, "cm-$&"));
	  }

	  // Render the DOM representation of the text of a line. Also builds
	  // up a 'line map', which points at the DOM nodes that represent
	  // specific stretches of text, and is used by the measuring code.
	  // The returned object contains the DOM node, this map, and
	  // information about line-wide styles that were set by the mode.
	  function buildLineContent(cm, lineView) {
	    // The padding-right forces the element to have a 'border', which
	    // is needed on Webkit to be able to get line-level bounding
	    // rectangles for it (in measureChar).
	    var content = elt("span", null, null, webkit ? "padding-right: .1px" : null);
	    var builder = {pre: elt("pre", [content], "CodeMirror-line"), content: content,
	                   col: 0, pos: 0, cm: cm,
	                   splitSpaces: (ie || webkit) && cm.getOption("lineWrapping")};
	    lineView.measure = {};

	    // Iterate over the logical lines that make up this visual line.
	    for (var i = 0; i <= (lineView.rest ? lineView.rest.length : 0); i++) {
	      var line = i ? lineView.rest[i - 1] : lineView.line, order;
	      builder.pos = 0;
	      builder.addToken = buildToken;
	      // Optionally wire in some hacks into the token-rendering
	      // algorithm, to deal with browser quirks.
	      if (hasBadBidiRects(cm.display.measure) && (order = getOrder(line)))
	        builder.addToken = buildTokenBadBidi(builder.addToken, order);
	      builder.map = [];
	      var allowFrontierUpdate = lineView != cm.display.externalMeasured && lineNo(line);
	      insertLineContent(line, builder, getLineStyles(cm, line, allowFrontierUpdate));
	      if (line.styleClasses) {
	        if (line.styleClasses.bgClass)
	          builder.bgClass = joinClasses(line.styleClasses.bgClass, builder.bgClass || "");
	        if (line.styleClasses.textClass)
	          builder.textClass = joinClasses(line.styleClasses.textClass, builder.textClass || "");
	      }

	      // Ensure at least a single node is present, for measuring.
	      if (builder.map.length == 0)
	        builder.map.push(0, 0, builder.content.appendChild(zeroWidthElement(cm.display.measure)));

	      // Store the map and a cache object for the current logical line
	      if (i == 0) {
	        lineView.measure.map = builder.map;
	        lineView.measure.cache = {};
	      } else {
	        (lineView.measure.maps || (lineView.measure.maps = [])).push(builder.map);
	        (lineView.measure.caches || (lineView.measure.caches = [])).push({});
	      }
	    }

	    // See issue #2901
	    if (webkit && /\bcm-tab\b/.test(builder.content.lastChild.className))
	      builder.content.className = "cm-tab-wrap-hack";

	    signal(cm, "renderLine", cm, lineView.line, builder.pre);
	    if (builder.pre.className)
	      builder.textClass = joinClasses(builder.pre.className, builder.textClass || "");

	    return builder;
	  }

	  function defaultSpecialCharPlaceholder(ch) {
	    var token = elt("span", "\u2022", "cm-invalidchar");
	    token.title = "\\u" + ch.charCodeAt(0).toString(16);
	    token.setAttribute("aria-label", token.title);
	    return token;
	  }

	  // Build up the DOM representation for a single token, and add it to
	  // the line map. Takes care to render special characters separately.
	  function buildToken(builder, text, style, startStyle, endStyle, title, css) {
	    if (!text) return;
	    var displayText = builder.splitSpaces ? text.replace(/ {3,}/g, splitSpaces) : text;
	    var special = builder.cm.state.specialChars, mustWrap = false;
	    if (!special.test(text)) {
	      builder.col += text.length;
	      var content = document.createTextNode(displayText);
	      builder.map.push(builder.pos, builder.pos + text.length, content);
	      if (ie && ie_version < 9) mustWrap = true;
	      builder.pos += text.length;
	    } else {
	      var content = document.createDocumentFragment(), pos = 0;
	      while (true) {
	        special.lastIndex = pos;
	        var m = special.exec(text);
	        var skipped = m ? m.index - pos : text.length - pos;
	        if (skipped) {
	          var txt = document.createTextNode(displayText.slice(pos, pos + skipped));
	          if (ie && ie_version < 9) content.appendChild(elt("span", [txt]));
	          else content.appendChild(txt);
	          builder.map.push(builder.pos, builder.pos + skipped, txt);
	          builder.col += skipped;
	          builder.pos += skipped;
	        }
	        if (!m) break;
	        pos += skipped + 1;
	        if (m[0] == "\t") {
	          var tabSize = builder.cm.options.tabSize, tabWidth = tabSize - builder.col % tabSize;
	          var txt = content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"));
	          txt.setAttribute("role", "presentation");
	          txt.setAttribute("cm-text", "\t");
	          builder.col += tabWidth;
	        } else if (m[0] == "\r" || m[0] == "\n") {
	          var txt = content.appendChild(elt("span", m[0] == "\r" ? "\u240d" : "\u2424", "cm-invalidchar"));
	          txt.setAttribute("cm-text", m[0]);
	          builder.col += 1;
	        } else {
	          var txt = builder.cm.options.specialCharPlaceholder(m[0]);
	          txt.setAttribute("cm-text", m[0]);
	          if (ie && ie_version < 9) content.appendChild(elt("span", [txt]));
	          else content.appendChild(txt);
	          builder.col += 1;
	        }
	        builder.map.push(builder.pos, builder.pos + 1, txt);
	        builder.pos++;
	      }
	    }
	    if (style || startStyle || endStyle || mustWrap || css) {
	      var fullStyle = style || "";
	      if (startStyle) fullStyle += startStyle;
	      if (endStyle) fullStyle += endStyle;
	      var token = elt("span", [content], fullStyle, css);
	      if (title) token.title = title;
	      return builder.content.appendChild(token);
	    }
	    builder.content.appendChild(content);
	  }

	  function splitSpaces(old) {
	    var out = " ";
	    for (var i = 0; i < old.length - 2; ++i) out += i % 2 ? " " : "\u00a0";
	    out += " ";
	    return out;
	  }

	  // Work around nonsense dimensions being reported for stretches of
	  // right-to-left text.
	  function buildTokenBadBidi(inner, order) {
	    return function(builder, text, style, startStyle, endStyle, title, css) {
	      style = style ? style + " cm-force-border" : "cm-force-border";
	      var start = builder.pos, end = start + text.length;
	      for (;;) {
	        // Find the part that overlaps with the start of this text
	        for (var i = 0; i < order.length; i++) {
	          var part = order[i];
	          if (part.to > start && part.from <= start) break;
	        }
	        if (part.to >= end) return inner(builder, text, style, startStyle, endStyle, title, css);
	        inner(builder, text.slice(0, part.to - start), style, startStyle, null, title, css);
	        startStyle = null;
	        text = text.slice(part.to - start);
	        start = part.to;
	      }
	    };
	  }

	  function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
	    var widget = !ignoreWidget && marker.widgetNode;
	    if (widget) builder.map.push(builder.pos, builder.pos + size, widget);
	    if (!ignoreWidget && builder.cm.display.input.needsContentAttribute) {
	      if (!widget)
	        widget = builder.content.appendChild(document.createElement("span"));
	      widget.setAttribute("cm-marker", marker.id);
	    }
	    if (widget) {
	      builder.cm.display.input.setUneditable(widget);
	      builder.content.appendChild(widget);
	    }
	    builder.pos += size;
	  }

	  // Outputs a number of spans to make up a line, taking highlighting
	  // and marked text into account.
	  function insertLineContent(line, builder, styles) {
	    var spans = line.markedSpans, allText = line.text, at = 0;
	    if (!spans) {
	      for (var i = 1; i < styles.length; i+=2)
	        builder.addToken(builder, allText.slice(at, at = styles[i]), interpretTokenStyle(styles[i+1], builder.cm.options));
	      return;
	    }

	    var len = allText.length, pos = 0, i = 1, text = "", style, css;
	    var nextChange = 0, spanStyle, spanEndStyle, spanStartStyle, title, collapsed;
	    for (;;) {
	      if (nextChange == pos) { // Update current marker set
	        spanStyle = spanEndStyle = spanStartStyle = title = css = "";
	        collapsed = null; nextChange = Infinity;
	        var foundBookmarks = [], endStyles
	        for (var j = 0; j < spans.length; ++j) {
	          var sp = spans[j], m = sp.marker;
	          if (m.type == "bookmark" && sp.from == pos && m.widgetNode) {
	            foundBookmarks.push(m);
	          } else if (sp.from <= pos && (sp.to == null || sp.to > pos || m.collapsed && sp.to == pos && sp.from == pos)) {
	            if (sp.to != null && sp.to != pos && nextChange > sp.to) {
	              nextChange = sp.to;
	              spanEndStyle = "";
	            }
	            if (m.className) spanStyle += " " + m.className;
	            if (m.css) css = (css ? css + ";" : "") + m.css;
	            if (m.startStyle && sp.from == pos) spanStartStyle += " " + m.startStyle;
	            if (m.endStyle && sp.to == nextChange) (endStyles || (endStyles = [])).push(m.endStyle, sp.to)
	            if (m.title && !title) title = m.title;
	            if (m.collapsed && (!collapsed || compareCollapsedMarkers(collapsed.marker, m) < 0))
	              collapsed = sp;
	          } else if (sp.from > pos && nextChange > sp.from) {
	            nextChange = sp.from;
	          }
	        }
	        if (endStyles) for (var j = 0; j < endStyles.length; j += 2)
	          if (endStyles[j + 1] == nextChange) spanEndStyle += " " + endStyles[j]

	        if (!collapsed || collapsed.from == pos) for (var j = 0; j < foundBookmarks.length; ++j)
	          buildCollapsedSpan(builder, 0, foundBookmarks[j]);
	        if (collapsed && (collapsed.from || 0) == pos) {
	          buildCollapsedSpan(builder, (collapsed.to == null ? len + 1 : collapsed.to) - pos,
	                             collapsed.marker, collapsed.from == null);
	          if (collapsed.to == null) return;
	          if (collapsed.to == pos) collapsed = false;
	        }
	      }
	      if (pos >= len) break;

	      var upto = Math.min(len, nextChange);
	      while (true) {
	        if (text) {
	          var end = pos + text.length;
	          if (!collapsed) {
	            var tokenText = end > upto ? text.slice(0, upto - pos) : text;
	            builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle,
	                             spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "", title, css);
	          }
	          if (end >= upto) {text = text.slice(upto - pos); pos = upto; break;}
	          pos = end;
	          spanStartStyle = "";
	        }
	        text = allText.slice(at, at = styles[i++]);
	        style = interpretTokenStyle(styles[i++], builder.cm.options);
	      }
	    }
	  }

	  // DOCUMENT DATA STRUCTURE

	  // By default, updates that start and end at the beginning of a line
	  // are treated specially, in order to make the association of line
	  // widgets and marker elements with the text behave more intuitive.
	  function isWholeLineUpdate(doc, change) {
	    return change.from.ch == 0 && change.to.ch == 0 && lst(change.text) == "" &&
	      (!doc.cm || doc.cm.options.wholeLineUpdateBefore);
	  }

	  // Perform a change on the document data structure.
	  function updateDoc(doc, change, markedSpans, estimateHeight) {
	    function spansFor(n) {return markedSpans ? markedSpans[n] : null;}
	    function update(line, text, spans) {
	      updateLine(line, text, spans, estimateHeight);
	      signalLater(line, "change", line, change);
	    }
	    function linesFor(start, end) {
	      for (var i = start, result = []; i < end; ++i)
	        result.push(new Line(text[i], spansFor(i), estimateHeight));
	      return result;
	    }

	    var from = change.from, to = change.to, text = change.text;
	    var firstLine = getLine(doc, from.line), lastLine = getLine(doc, to.line);
	    var lastText = lst(text), lastSpans = spansFor(text.length - 1), nlines = to.line - from.line;

	    // Adjust the line structure
	    if (change.full) {
	      doc.insert(0, linesFor(0, text.length));
	      doc.remove(text.length, doc.size - text.length);
	    } else if (isWholeLineUpdate(doc, change)) {
	      // This is a whole-line replace. Treated specially to make
	      // sure line objects move the way they are supposed to.
	      var added = linesFor(0, text.length - 1);
	      update(lastLine, lastLine.text, lastSpans);
	      if (nlines) doc.remove(from.line, nlines);
	      if (added.length) doc.insert(from.line, added);
	    } else if (firstLine == lastLine) {
	      if (text.length == 1) {
	        update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans);
	      } else {
	        var added = linesFor(1, text.length - 1);
	        added.push(new Line(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight));
	        update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
	        doc.insert(from.line + 1, added);
	      }
	    } else if (text.length == 1) {
	      update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0));
	      doc.remove(from.line + 1, nlines);
	    } else {
	      update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
	      update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans);
	      var added = linesFor(1, text.length - 1);
	      if (nlines > 1) doc.remove(from.line + 1, nlines - 1);
	      doc.insert(from.line + 1, added);
	    }

	    signalLater(doc, "change", doc, change);
	  }

	  // The document is represented as a BTree consisting of leaves, with
	  // chunk of lines in them, and branches, with up to ten leaves or
	  // other branch nodes below them. The top node is always a branch
	  // node, and is the document object itself (meaning it has
	  // additional methods and properties).
	  //
	  // All nodes have parent links. The tree is used both to go from
	  // line numbers to line objects, and to go from objects to numbers.
	  // It also indexes by height, and is used to convert between height
	  // and line object, and to find the total height of the document.
	  //
	  // See also http://marijnhaverbeke.nl/blog/codemirror-line-tree.html

	  function LeafChunk(lines) {
	    this.lines = lines;
	    this.parent = null;
	    for (var i = 0, height = 0; i < lines.length; ++i) {
	      lines[i].parent = this;
	      height += lines[i].height;
	    }
	    this.height = height;
	  }

	  LeafChunk.prototype = {
	    chunkSize: function() { return this.lines.length; },
	    // Remove the n lines at offset 'at'.
	    removeInner: function(at, n) {
	      for (var i = at, e = at + n; i < e; ++i) {
	        var line = this.lines[i];
	        this.height -= line.height;
	        cleanUpLine(line);
	        signalLater(line, "delete");
	      }
	      this.lines.splice(at, n);
	    },
	    // Helper used to collapse a small branch into a single leaf.
	    collapse: function(lines) {
	      lines.push.apply(lines, this.lines);
	    },
	    // Insert the given array of lines at offset 'at', count them as
	    // having the given height.
	    insertInner: function(at, lines, height) {
	      this.height += height;
	      this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at));
	      for (var i = 0; i < lines.length; ++i) lines[i].parent = this;
	    },
	    // Used to iterate over a part of the tree.
	    iterN: function(at, n, op) {
	      for (var e = at + n; at < e; ++at)
	        if (op(this.lines[at])) return true;
	    }
	  };

	  function BranchChunk(children) {
	    this.children = children;
	    var size = 0, height = 0;
	    for (var i = 0; i < children.length; ++i) {
	      var ch = children[i];
	      size += ch.chunkSize(); height += ch.height;
	      ch.parent = this;
	    }
	    this.size = size;
	    this.height = height;
	    this.parent = null;
	  }

	  BranchChunk.prototype = {
	    chunkSize: function() { return this.size; },
	    removeInner: function(at, n) {
	      this.size -= n;
	      for (var i = 0; i < this.children.length; ++i) {
	        var child = this.children[i], sz = child.chunkSize();
	        if (at < sz) {
	          var rm = Math.min(n, sz - at), oldHeight = child.height;
	          child.removeInner(at, rm);
	          this.height -= oldHeight - child.height;
	          if (sz == rm) { this.children.splice(i--, 1); child.parent = null; }
	          if ((n -= rm) == 0) break;
	          at = 0;
	        } else at -= sz;
	      }
	      // If the result is smaller than 25 lines, ensure that it is a
	      // single leaf node.
	      if (this.size - n < 25 &&
	          (this.children.length > 1 || !(this.children[0] instanceof LeafChunk))) {
	        var lines = [];
	        this.collapse(lines);
	        this.children = [new LeafChunk(lines)];
	        this.children[0].parent = this;
	      }
	    },
	    collapse: function(lines) {
	      for (var i = 0; i < this.children.length; ++i) this.children[i].collapse(lines);
	    },
	    insertInner: function(at, lines, height) {
	      this.size += lines.length;
	      this.height += height;
	      for (var i = 0; i < this.children.length; ++i) {
	        var child = this.children[i], sz = child.chunkSize();
	        if (at <= sz) {
	          child.insertInner(at, lines, height);
	          if (child.lines && child.lines.length > 50) {
	            while (child.lines.length > 50) {
	              var spilled = child.lines.splice(child.lines.length - 25, 25);
	              var newleaf = new LeafChunk(spilled);
	              child.height -= newleaf.height;
	              this.children.splice(i + 1, 0, newleaf);
	              newleaf.parent = this;
	            }
	            this.maybeSpill();
	          }
	          break;
	        }
	        at -= sz;
	      }
	    },
	    // When a node has grown, check whether it should be split.
	    maybeSpill: function() {
	      if (this.children.length <= 10) return;
	      var me = this;
	      do {
	        var spilled = me.children.splice(me.children.length - 5, 5);
	        var sibling = new BranchChunk(spilled);
	        if (!me.parent) { // Become the parent node
	          var copy = new BranchChunk(me.children);
	          copy.parent = me;
	          me.children = [copy, sibling];
	          me = copy;
	        } else {
	          me.size -= sibling.size;
	          me.height -= sibling.height;
	          var myIndex = indexOf(me.parent.children, me);
	          me.parent.children.splice(myIndex + 1, 0, sibling);
	        }
	        sibling.parent = me.parent;
	      } while (me.children.length > 10);
	      me.parent.maybeSpill();
	    },
	    iterN: function(at, n, op) {
	      for (var i = 0; i < this.children.length; ++i) {
	        var child = this.children[i], sz = child.chunkSize();
	        if (at < sz) {
	          var used = Math.min(n, sz - at);
	          if (child.iterN(at, used, op)) return true;
	          if ((n -= used) == 0) break;
	          at = 0;
	        } else at -= sz;
	      }
	    }
	  };

	  var nextDocId = 0;
	  var Doc = CodeMirror.Doc = function(text, mode, firstLine, lineSep) {
	    if (!(this instanceof Doc)) return new Doc(text, mode, firstLine, lineSep);
	    if (firstLine == null) firstLine = 0;

	    BranchChunk.call(this, [new LeafChunk([new Line("", null)])]);
	    this.first = firstLine;
	    this.scrollTop = this.scrollLeft = 0;
	    this.cantEdit = false;
	    this.cleanGeneration = 1;
	    this.frontier = firstLine;
	    var start = Pos(firstLine, 0);
	    this.sel = simpleSelection(start);
	    this.history = new History(null);
	    this.id = ++nextDocId;
	    this.modeOption = mode;
	    this.lineSep = lineSep;
	    this.extend = false;

	    if (typeof text == "string") text = this.splitLines(text);
	    updateDoc(this, {from: start, to: start, text: text});
	    setSelection(this, simpleSelection(start), sel_dontScroll);
	  };

	  Doc.prototype = createObj(BranchChunk.prototype, {
	    constructor: Doc,
	    // Iterate over the document. Supports two forms -- with only one
	    // argument, it calls that for each line in the document. With
	    // three, it iterates over the range given by the first two (with
	    // the second being non-inclusive).
	    iter: function(from, to, op) {
	      if (op) this.iterN(from - this.first, to - from, op);
	      else this.iterN(this.first, this.first + this.size, from);
	    },

	    // Non-public interface for adding and removing lines.
	    insert: function(at, lines) {
	      var height = 0;
	      for (var i = 0; i < lines.length; ++i) height += lines[i].height;
	      this.insertInner(at - this.first, lines, height);
	    },
	    remove: function(at, n) { this.removeInner(at - this.first, n); },

	    // From here, the methods are part of the public interface. Most
	    // are also available from CodeMirror (editor) instances.

	    getValue: function(lineSep) {
	      var lines = getLines(this, this.first, this.first + this.size);
	      if (lineSep === false) return lines;
	      return lines.join(lineSep || this.lineSeparator());
	    },
	    setValue: docMethodOp(function(code) {
	      var top = Pos(this.first, 0), last = this.first + this.size - 1;
	      makeChange(this, {from: top, to: Pos(last, getLine(this, last).text.length),
	                        text: this.splitLines(code), origin: "setValue", full: true}, true);
	      setSelection(this, simpleSelection(top));
	    }),
	    replaceRange: function(code, from, to, origin) {
	      from = clipPos(this, from);
	      to = to ? clipPos(this, to) : from;
	      replaceRange(this, code, from, to, origin);
	    },
	    getRange: function(from, to, lineSep) {
	      var lines = getBetween(this, clipPos(this, from), clipPos(this, to));
	      if (lineSep === false) return lines;
	      return lines.join(lineSep || this.lineSeparator());
	    },

	    getLine: function(line) {var l = this.getLineHandle(line); return l && l.text;},

	    getLineHandle: function(line) {if (isLine(this, line)) return getLine(this, line);},
	    getLineNumber: function(line) {return lineNo(line);},

	    getLineHandleVisualStart: function(line) {
	      if (typeof line == "number") line = getLine(this, line);
	      return visualLine(line);
	    },

	    lineCount: function() {return this.size;},
	    firstLine: function() {return this.first;},
	    lastLine: function() {return this.first + this.size - 1;},

	    clipPos: function(pos) {return clipPos(this, pos);},

	    getCursor: function(start) {
	      var range = this.sel.primary(), pos;
	      if (start == null || start == "head") pos = range.head;
	      else if (start == "anchor") pos = range.anchor;
	      else if (start == "end" || start == "to" || start === false) pos = range.to();
	      else pos = range.from();
	      return pos;
	    },
	    listSelections: function() { return this.sel.ranges; },
	    somethingSelected: function() {return this.sel.somethingSelected();},

	    setCursor: docMethodOp(function(line, ch, options) {
	      setSimpleSelection(this, clipPos(this, typeof line == "number" ? Pos(line, ch || 0) : line), null, options);
	    }),
	    setSelection: docMethodOp(function(anchor, head, options) {
	      setSimpleSelection(this, clipPos(this, anchor), clipPos(this, head || anchor), options);
	    }),
	    extendSelection: docMethodOp(function(head, other, options) {
	      extendSelection(this, clipPos(this, head), other && clipPos(this, other), options);
	    }),
	    extendSelections: docMethodOp(function(heads, options) {
	      extendSelections(this, clipPosArray(this, heads), options);
	    }),
	    extendSelectionsBy: docMethodOp(function(f, options) {
	      var heads = map(this.sel.ranges, f);
	      extendSelections(this, clipPosArray(this, heads), options);
	    }),
	    setSelections: docMethodOp(function(ranges, primary, options) {
	      if (!ranges.length) return;
	      for (var i = 0, out = []; i < ranges.length; i++)
	        out[i] = new Range(clipPos(this, ranges[i].anchor),
	                           clipPos(this, ranges[i].head));
	      if (primary == null) primary = Math.min(ranges.length - 1, this.sel.primIndex);
	      setSelection(this, normalizeSelection(out, primary), options);
	    }),
	    addSelection: docMethodOp(function(anchor, head, options) {
	      var ranges = this.sel.ranges.slice(0);
	      ranges.push(new Range(clipPos(this, anchor), clipPos(this, head || anchor)));
	      setSelection(this, normalizeSelection(ranges, ranges.length - 1), options);
	    }),

	    getSelection: function(lineSep) {
	      var ranges = this.sel.ranges, lines;
	      for (var i = 0; i < ranges.length; i++) {
	        var sel = getBetween(this, ranges[i].from(), ranges[i].to());
	        lines = lines ? lines.concat(sel) : sel;
	      }
	      if (lineSep === false) return lines;
	      else return lines.join(lineSep || this.lineSeparator());
	    },
	    getSelections: function(lineSep) {
	      var parts = [], ranges = this.sel.ranges;
	      for (var i = 0; i < ranges.length; i++) {
	        var sel = getBetween(this, ranges[i].from(), ranges[i].to());
	        if (lineSep !== false) sel = sel.join(lineSep || this.lineSeparator());
	        parts[i] = sel;
	      }
	      return parts;
	    },
	    replaceSelection: function(code, collapse, origin) {
	      var dup = [];
	      for (var i = 0; i < this.sel.ranges.length; i++)
	        dup[i] = code;
	      this.replaceSelections(dup, collapse, origin || "+input");
	    },
	    replaceSelections: docMethodOp(function(code, collapse, origin) {
	      var changes = [], sel = this.sel;
	      for (var i = 0; i < sel.ranges.length; i++) {
	        var range = sel.ranges[i];
	        changes[i] = {from: range.from(), to: range.to(), text: this.splitLines(code[i]), origin: origin};
	      }
	      var newSel = collapse && collapse != "end" && computeReplacedSel(this, changes, collapse);
	      for (var i = changes.length - 1; i >= 0; i--)
	        makeChange(this, changes[i]);
	      if (newSel) setSelectionReplaceHistory(this, newSel);
	      else if (this.cm) ensureCursorVisible(this.cm);
	    }),
	    undo: docMethodOp(function() {makeChangeFromHistory(this, "undo");}),
	    redo: docMethodOp(function() {makeChangeFromHistory(this, "redo");}),
	    undoSelection: docMethodOp(function() {makeChangeFromHistory(this, "undo", true);}),
	    redoSelection: docMethodOp(function() {makeChangeFromHistory(this, "redo", true);}),

	    setExtending: function(val) {this.extend = val;},
	    getExtending: function() {return this.extend;},

	    historySize: function() {
	      var hist = this.history, done = 0, undone = 0;
	      for (var i = 0; i < hist.done.length; i++) if (!hist.done[i].ranges) ++done;
	      for (var i = 0; i < hist.undone.length; i++) if (!hist.undone[i].ranges) ++undone;
	      return {undo: done, redo: undone};
	    },
	    clearHistory: function() {this.history = new History(this.history.maxGeneration);},

	    markClean: function() {
	      this.cleanGeneration = this.changeGeneration(true);
	    },
	    changeGeneration: function(forceSplit) {
	      if (forceSplit)
	        this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null;
	      return this.history.generation;
	    },
	    isClean: function (gen) {
	      return this.history.generation == (gen || this.cleanGeneration);
	    },

	    getHistory: function() {
	      return {done: copyHistoryArray(this.history.done),
	              undone: copyHistoryArray(this.history.undone)};
	    },
	    setHistory: function(histData) {
	      var hist = this.history = new History(this.history.maxGeneration);
	      hist.done = copyHistoryArray(histData.done.slice(0), null, true);
	      hist.undone = copyHistoryArray(histData.undone.slice(0), null, true);
	    },

	    addLineClass: docMethodOp(function(handle, where, cls) {
	      return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function(line) {
	        var prop = where == "text" ? "textClass"
	                 : where == "background" ? "bgClass"
	                 : where == "gutter" ? "gutterClass" : "wrapClass";
	        if (!line[prop]) line[prop] = cls;
	        else if (classTest(cls).test(line[prop])) return false;
	        else line[prop] += " " + cls;
	        return true;
	      });
	    }),
	    removeLineClass: docMethodOp(function(handle, where, cls) {
	      return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function(line) {
	        var prop = where == "text" ? "textClass"
	                 : where == "background" ? "bgClass"
	                 : where == "gutter" ? "gutterClass" : "wrapClass";
	        var cur = line[prop];
	        if (!cur) return false;
	        else if (cls == null) line[prop] = null;
	        else {
	          var found = cur.match(classTest(cls));
	          if (!found) return false;
	          var end = found.index + found[0].length;
	          line[prop] = cur.slice(0, found.index) + (!found.index || end == cur.length ? "" : " ") + cur.slice(end) || null;
	        }
	        return true;
	      });
	    }),

	    addLineWidget: docMethodOp(function(handle, node, options) {
	      return addLineWidget(this, handle, node, options);
	    }),
	    removeLineWidget: function(widget) { widget.clear(); },

	    markText: function(from, to, options) {
	      return markText(this, clipPos(this, from), clipPos(this, to), options, options && options.type || "range");
	    },
	    setBookmark: function(pos, options) {
	      var realOpts = {replacedWith: options && (options.nodeType == null ? options.widget : options),
	                      insertLeft: options && options.insertLeft,
	                      clearWhenEmpty: false, shared: options && options.shared,
	                      handleMouseEvents: options && options.handleMouseEvents};
	      pos = clipPos(this, pos);
	      return markText(this, pos, pos, realOpts, "bookmark");
	    },
	    findMarksAt: function(pos) {
	      pos = clipPos(this, pos);
	      var markers = [], spans = getLine(this, pos.line).markedSpans;
	      if (spans) for (var i = 0; i < spans.length; ++i) {
	        var span = spans[i];
	        if ((span.from == null || span.from <= pos.ch) &&
	            (span.to == null || span.to >= pos.ch))
	          markers.push(span.marker.parent || span.marker);
	      }
	      return markers;
	    },
	    findMarks: function(from, to, filter) {
	      from = clipPos(this, from); to = clipPos(this, to);
	      var found = [], lineNo = from.line;
	      this.iter(from.line, to.line + 1, function(line) {
	        var spans = line.markedSpans;
	        if (spans) for (var i = 0; i < spans.length; i++) {
	          var span = spans[i];
	          if (!(span.to != null && lineNo == from.line && from.ch >= span.to ||
	                span.from == null && lineNo != from.line ||
	                span.from != null && lineNo == to.line && span.from >= to.ch) &&
	              (!filter || filter(span.marker)))
	            found.push(span.marker.parent || span.marker);
	        }
	        ++lineNo;
	      });
	      return found;
	    },
	    getAllMarks: function() {
	      var markers = [];
	      this.iter(function(line) {
	        var sps = line.markedSpans;
	        if (sps) for (var i = 0; i < sps.length; ++i)
	          if (sps[i].from != null) markers.push(sps[i].marker);
	      });
	      return markers;
	    },

	    posFromIndex: function(off) {
	      var ch, lineNo = this.first, sepSize = this.lineSeparator().length;
	      this.iter(function(line) {
	        var sz = line.text.length + sepSize;
	        if (sz > off) { ch = off; return true; }
	        off -= sz;
	        ++lineNo;
	      });
	      return clipPos(this, Pos(lineNo, ch));
	    },
	    indexFromPos: function (coords) {
	      coords = clipPos(this, coords);
	      var index = coords.ch;
	      if (coords.line < this.first || coords.ch < 0) return 0;
	      var sepSize = this.lineSeparator().length;
	      this.iter(this.first, coords.line, function (line) {
	        index += line.text.length + sepSize;
	      });
	      return index;
	    },

	    copy: function(copyHistory) {
	      var doc = new Doc(getLines(this, this.first, this.first + this.size),
	                        this.modeOption, this.first, this.lineSep);
	      doc.scrollTop = this.scrollTop; doc.scrollLeft = this.scrollLeft;
	      doc.sel = this.sel;
	      doc.extend = false;
	      if (copyHistory) {
	        doc.history.undoDepth = this.history.undoDepth;
	        doc.setHistory(this.getHistory());
	      }
	      return doc;
	    },

	    linkedDoc: function(options) {
	      if (!options) options = {};
	      var from = this.first, to = this.first + this.size;
	      if (options.from != null && options.from > from) from = options.from;
	      if (options.to != null && options.to < to) to = options.to;
	      var copy = new Doc(getLines(this, from, to), options.mode || this.modeOption, from, this.lineSep);
	      if (options.sharedHist) copy.history = this.history;
	      (this.linked || (this.linked = [])).push({doc: copy, sharedHist: options.sharedHist});
	      copy.linked = [{doc: this, isParent: true, sharedHist: options.sharedHist}];
	      copySharedMarkers(copy, findSharedMarkers(this));
	      return copy;
	    },
	    unlinkDoc: function(other) {
	      if (other instanceof CodeMirror) other = other.doc;
	      if (this.linked) for (var i = 0; i < this.linked.length; ++i) {
	        var link = this.linked[i];
	        if (link.doc != other) continue;
	        this.linked.splice(i, 1);
	        other.unlinkDoc(this);
	        detachSharedMarkers(findSharedMarkers(this));
	        break;
	      }
	      // If the histories were shared, split them again
	      if (other.history == this.history) {
	        var splitIds = [other.id];
	        linkedDocs(other, function(doc) {splitIds.push(doc.id);}, true);
	        other.history = new History(null);
	        other.history.done = copyHistoryArray(this.history.done, splitIds);
	        other.history.undone = copyHistoryArray(this.history.undone, splitIds);
	      }
	    },
	    iterLinkedDocs: function(f) {linkedDocs(this, f);},

	    getMode: function() {return this.mode;},
	    getEditor: function() {return this.cm;},

	    splitLines: function(str) {
	      if (this.lineSep) return str.split(this.lineSep);
	      return splitLinesAuto(str);
	    },
	    lineSeparator: function() { return this.lineSep || "\n"; }
	  });

	  // Public alias.
	  Doc.prototype.eachLine = Doc.prototype.iter;

	  // Set up methods on CodeMirror's prototype to redirect to the editor's document.
	  var dontDelegate = "iter insert remove copy getEditor constructor".split(" ");
	  for (var prop in Doc.prototype) if (Doc.prototype.hasOwnProperty(prop) && indexOf(dontDelegate, prop) < 0)
	    CodeMirror.prototype[prop] = (function(method) {
	      return function() {return method.apply(this.doc, arguments);};
	    })(Doc.prototype[prop]);

	  eventMixin(Doc);

	  // Call f for all linked documents.
	  function linkedDocs(doc, f, sharedHistOnly) {
	    function propagate(doc, skip, sharedHist) {
	      if (doc.linked) for (var i = 0; i < doc.linked.length; ++i) {
	        var rel = doc.linked[i];
	        if (rel.doc == skip) continue;
	        var shared = sharedHist && rel.sharedHist;
	        if (sharedHistOnly && !shared) continue;
	        f(rel.doc, shared);
	        propagate(rel.doc, doc, shared);
	      }
	    }
	    propagate(doc, null, true);
	  }

	  // Attach a document to an editor.
	  function attachDoc(cm, doc) {
	    if (doc.cm) throw new Error("This document is already in use.");
	    cm.doc = doc;
	    doc.cm = cm;
	    estimateLineHeights(cm);
	    loadMode(cm);
	    if (!cm.options.lineWrapping) findMaxLine(cm);
	    cm.options.mode = doc.modeOption;
	    regChange(cm);
	  }

	  // LINE UTILITIES

	  // Find the line object corresponding to the given line number.
	  function getLine(doc, n) {
	    n -= doc.first;
	    if (n < 0 || n >= doc.size) throw new Error("There is no line " + (n + doc.first) + " in the document.");
	    for (var chunk = doc; !chunk.lines;) {
	      for (var i = 0;; ++i) {
	        var child = chunk.children[i], sz = child.chunkSize();
	        if (n < sz) { chunk = child; break; }
	        n -= sz;
	      }
	    }
	    return chunk.lines[n];
	  }

	  // Get the part of a document between two positions, as an array of
	  // strings.
	  function getBetween(doc, start, end) {
	    var out = [], n = start.line;
	    doc.iter(start.line, end.line + 1, function(line) {
	      var text = line.text;
	      if (n == end.line) text = text.slice(0, end.ch);
	      if (n == start.line) text = text.slice(start.ch);
	      out.push(text);
	      ++n;
	    });
	    return out;
	  }
	  // Get the lines between from and to, as array of strings.
	  function getLines(doc, from, to) {
	    var out = [];
	    doc.iter(from, to, function(line) { out.push(line.text); });
	    return out;
	  }

	  // Update the height of a line, propagating the height change
	  // upwards to parent nodes.
	  function updateLineHeight(line, height) {
	    var diff = height - line.height;
	    if (diff) for (var n = line; n; n = n.parent) n.height += diff;
	  }

	  // Given a line object, find its line number by walking up through
	  // its parent links.
	  function lineNo(line) {
	    if (line.parent == null) return null;
	    var cur = line.parent, no = indexOf(cur.lines, line);
	    for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
	      for (var i = 0;; ++i) {
	        if (chunk.children[i] == cur) break;
	        no += chunk.children[i].chunkSize();
	      }
	    }
	    return no + cur.first;
	  }

	  // Find the line at the given vertical position, using the height
	  // information in the document tree.
	  function lineAtHeight(chunk, h) {
	    var n = chunk.first;
	    outer: do {
	      for (var i = 0; i < chunk.children.length; ++i) {
	        var child = chunk.children[i], ch = child.height;
	        if (h < ch) { chunk = child; continue outer; }
	        h -= ch;
	        n += child.chunkSize();
	      }
	      return n;
	    } while (!chunk.lines);
	    for (var i = 0; i < chunk.lines.length; ++i) {
	      var line = chunk.lines[i], lh = line.height;
	      if (h < lh) break;
	      h -= lh;
	    }
	    return n + i;
	  }


	  // Find the height above the given line.
	  function heightAtLine(lineObj) {
	    lineObj = visualLine(lineObj);

	    var h = 0, chunk = lineObj.parent;
	    for (var i = 0; i < chunk.lines.length; ++i) {
	      var line = chunk.lines[i];
	      if (line == lineObj) break;
	      else h += line.height;
	    }
	    for (var p = chunk.parent; p; chunk = p, p = chunk.parent) {
	      for (var i = 0; i < p.children.length; ++i) {
	        var cur = p.children[i];
	        if (cur == chunk) break;
	        else h += cur.height;
	      }
	    }
	    return h;
	  }

	  // Get the bidi ordering for the given line (and cache it). Returns
	  // false for lines that are fully left-to-right, and an array of
	  // BidiSpan objects otherwise.
	  function getOrder(line) {
	    var order = line.order;
	    if (order == null) order = line.order = bidiOrdering(line.text);
	    return order;
	  }

	  // HISTORY

	  function History(startGen) {
	    // Arrays of change events and selections. Doing something adds an
	    // event to done and clears undo. Undoing moves events from done
	    // to undone, redoing moves them in the other direction.
	    this.done = []; this.undone = [];
	    this.undoDepth = Infinity;
	    // Used to track when changes can be merged into a single undo
	    // event
	    this.lastModTime = this.lastSelTime = 0;
	    this.lastOp = this.lastSelOp = null;
	    this.lastOrigin = this.lastSelOrigin = null;
	    // Used by the isClean() method
	    this.generation = this.maxGeneration = startGen || 1;
	  }

	  // Create a history change event from an updateDoc-style change
	  // object.
	  function historyChangeFromChange(doc, change) {
	    var histChange = {from: copyPos(change.from), to: changeEnd(change), text: getBetween(doc, change.from, change.to)};
	    attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);
	    linkedDocs(doc, function(doc) {attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);}, true);
	    return histChange;
	  }

	  // Pop all selection events off the end of a history array. Stop at
	  // a change event.
	  function clearSelectionEvents(array) {
	    while (array.length) {
	      var last = lst(array);
	      if (last.ranges) array.pop();
	      else break;
	    }
	  }

	  // Find the top change event in the history. Pop off selection
	  // events that are in the way.
	  function lastChangeEvent(hist, force) {
	    if (force) {
	      clearSelectionEvents(hist.done);
	      return lst(hist.done);
	    } else if (hist.done.length && !lst(hist.done).ranges) {
	      return lst(hist.done);
	    } else if (hist.done.length > 1 && !hist.done[hist.done.length - 2].ranges) {
	      hist.done.pop();
	      return lst(hist.done);
	    }
	  }

	  // Register a change in the history. Merges changes that are within
	  // a single operation, ore are close together with an origin that
	  // allows merging (starting with "+") into a single event.
	  function addChangeToHistory(doc, change, selAfter, opId) {
	    var hist = doc.history;
	    hist.undone.length = 0;
	    var time = +new Date, cur;

	    if ((hist.lastOp == opId ||
	         hist.lastOrigin == change.origin && change.origin &&
	         ((change.origin.charAt(0) == "+" && doc.cm && hist.lastModTime > time - doc.cm.options.historyEventDelay) ||
	          change.origin.charAt(0) == "*")) &&
	        (cur = lastChangeEvent(hist, hist.lastOp == opId))) {
	      // Merge this change into the last event
	      var last = lst(cur.changes);
	      if (cmp(change.from, change.to) == 0 && cmp(change.from, last.to) == 0) {
	        // Optimized case for simple insertion -- don't want to add
	        // new changesets for every character typed
	        last.to = changeEnd(change);
	      } else {
	        // Add new sub-event
	        cur.changes.push(historyChangeFromChange(doc, change));
	      }
	    } else {
	      // Can not be merged, start a new event.
	      var before = lst(hist.done);
	      if (!before || !before.ranges)
	        pushSelectionToHistory(doc.sel, hist.done);
	      cur = {changes: [historyChangeFromChange(doc, change)],
	             generation: hist.generation};
	      hist.done.push(cur);
	      while (hist.done.length > hist.undoDepth) {
	        hist.done.shift();
	        if (!hist.done[0].ranges) hist.done.shift();
	      }
	    }
	    hist.done.push(selAfter);
	    hist.generation = ++hist.maxGeneration;
	    hist.lastModTime = hist.lastSelTime = time;
	    hist.lastOp = hist.lastSelOp = opId;
	    hist.lastOrigin = hist.lastSelOrigin = change.origin;

	    if (!last) signal(doc, "historyAdded");
	  }

	  function selectionEventCanBeMerged(doc, origin, prev, sel) {
	    var ch = origin.charAt(0);
	    return ch == "*" ||
	      ch == "+" &&
	      prev.ranges.length == sel.ranges.length &&
	      prev.somethingSelected() == sel.somethingSelected() &&
	      new Date - doc.history.lastSelTime <= (doc.cm ? doc.cm.options.historyEventDelay : 500);
	  }

	  // Called whenever the selection changes, sets the new selection as
	  // the pending selection in the history, and pushes the old pending
	  // selection into the 'done' array when it was significantly
	  // different (in number of selected ranges, emptiness, or time).
	  function addSelectionToHistory(doc, sel, opId, options) {
	    var hist = doc.history, origin = options && options.origin;

	    // A new event is started when the previous origin does not match
	    // the current, or the origins don't allow matching. Origins
	    // starting with * are always merged, those starting with + are
	    // merged when similar and close together in time.
	    if (opId == hist.lastSelOp ||
	        (origin && hist.lastSelOrigin == origin &&
	         (hist.lastModTime == hist.lastSelTime && hist.lastOrigin == origin ||
	          selectionEventCanBeMerged(doc, origin, lst(hist.done), sel))))
	      hist.done[hist.done.length - 1] = sel;
	    else
	      pushSelectionToHistory(sel, hist.done);

	    hist.lastSelTime = +new Date;
	    hist.lastSelOrigin = origin;
	    hist.lastSelOp = opId;
	    if (options && options.clearRedo !== false)
	      clearSelectionEvents(hist.undone);
	  }

	  function pushSelectionToHistory(sel, dest) {
	    var top = lst(dest);
	    if (!(top && top.ranges && top.equals(sel)))
	      dest.push(sel);
	  }

	  // Used to store marked span information in the history.
	  function attachLocalSpans(doc, change, from, to) {
	    var existing = change["spans_" + doc.id], n = 0;
	    doc.iter(Math.max(doc.first, from), Math.min(doc.first + doc.size, to), function(line) {
	      if (line.markedSpans)
	        (existing || (existing = change["spans_" + doc.id] = {}))[n] = line.markedSpans;
	      ++n;
	    });
	  }

	  // When un/re-doing restores text containing marked spans, those
	  // that have been explicitly cleared should not be restored.
	  function removeClearedSpans(spans) {
	    if (!spans) return null;
	    for (var i = 0, out; i < spans.length; ++i) {
	      if (spans[i].marker.explicitlyCleared) { if (!out) out = spans.slice(0, i); }
	      else if (out) out.push(spans[i]);
	    }
	    return !out ? spans : out.length ? out : null;
	  }

	  // Retrieve and filter the old marked spans stored in a change event.
	  function getOldSpans(doc, change) {
	    var found = change["spans_" + doc.id];
	    if (!found) return null;
	    for (var i = 0, nw = []; i < change.text.length; ++i)
	      nw.push(removeClearedSpans(found[i]));
	    return nw;
	  }

	  // Used both to provide a JSON-safe object in .getHistory, and, when
	  // detaching a document, to split the history in two
	  function copyHistoryArray(events, newGroup, instantiateSel) {
	    for (var i = 0, copy = []; i < events.length; ++i) {
	      var event = events[i];
	      if (event.ranges) {
	        copy.push(instantiateSel ? Selection.prototype.deepCopy.call(event) : event);
	        continue;
	      }
	      var changes = event.changes, newChanges = [];
	      copy.push({changes: newChanges});
	      for (var j = 0; j < changes.length; ++j) {
	        var change = changes[j], m;
	        newChanges.push({from: change.from, to: change.to, text: change.text});
	        if (newGroup) for (var prop in change) if (m = prop.match(/^spans_(\d+)$/)) {
	          if (indexOf(newGroup, Number(m[1])) > -1) {
	            lst(newChanges)[prop] = change[prop];
	            delete change[prop];
	          }
	        }
	      }
	    }
	    return copy;
	  }

	  // Rebasing/resetting history to deal with externally-sourced changes

	  function rebaseHistSelSingle(pos, from, to, diff) {
	    if (to < pos.line) {
	      pos.line += diff;
	    } else if (from < pos.line) {
	      pos.line = from;
	      pos.ch = 0;
	    }
	  }

	  // Tries to rebase an array of history events given a change in the
	  // document. If the change touches the same lines as the event, the
	  // event, and everything 'behind' it, is discarded. If the change is
	  // before the event, the event's positions are updated. Uses a
	  // copy-on-write scheme for the positions, to avoid having to
	  // reallocate them all on every rebase, but also avoid problems with
	  // shared position objects being unsafely updated.
	  function rebaseHistArray(array, from, to, diff) {
	    for (var i = 0; i < array.length; ++i) {
	      var sub = array[i], ok = true;
	      if (sub.ranges) {
	        if (!sub.copied) { sub = array[i] = sub.deepCopy(); sub.copied = true; }
	        for (var j = 0; j < sub.ranges.length; j++) {
	          rebaseHistSelSingle(sub.ranges[j].anchor, from, to, diff);
	          rebaseHistSelSingle(sub.ranges[j].head, from, to, diff);
	        }
	        continue;
	      }
	      for (var j = 0; j < sub.changes.length; ++j) {
	        var cur = sub.changes[j];
	        if (to < cur.from.line) {
	          cur.from = Pos(cur.from.line + diff, cur.from.ch);
	          cur.to = Pos(cur.to.line + diff, cur.to.ch);
	        } else if (from <= cur.to.line) {
	          ok = false;
	          break;
	        }
	      }
	      if (!ok) {
	        array.splice(0, i + 1);
	        i = 0;
	      }
	    }
	  }

	  function rebaseHist(hist, change) {
	    var from = change.from.line, to = change.to.line, diff = change.text.length - (to - from) - 1;
	    rebaseHistArray(hist.done, from, to, diff);
	    rebaseHistArray(hist.undone, from, to, diff);
	  }

	  // EVENT UTILITIES

	  // Due to the fact that we still support jurassic IE versions, some
	  // compatibility wrappers are needed.

	  var e_preventDefault = CodeMirror.e_preventDefault = function(e) {
	    if (e.preventDefault) e.preventDefault();
	    else e.returnValue = false;
	  };
	  var e_stopPropagation = CodeMirror.e_stopPropagation = function(e) {
	    if (e.stopPropagation) e.stopPropagation();
	    else e.cancelBubble = true;
	  };
	  function e_defaultPrevented(e) {
	    return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false;
	  }
	  var e_stop = CodeMirror.e_stop = function(e) {e_preventDefault(e); e_stopPropagation(e);};

	  function e_target(e) {return e.target || e.srcElement;}
	  function e_button(e) {
	    var b = e.which;
	    if (b == null) {
	      if (e.button & 1) b = 1;
	      else if (e.button & 2) b = 3;
	      else if (e.button & 4) b = 2;
	    }
	    if (mac && e.ctrlKey && b == 1) b = 3;
	    return b;
	  }

	  // EVENT HANDLING

	  // Lightweight event framework. on/off also work on DOM nodes,
	  // registering native DOM handlers.

	  var on = CodeMirror.on = function(emitter, type, f) {
	    if (emitter.addEventListener)
	      emitter.addEventListener(type, f, false);
	    else if (emitter.attachEvent)
	      emitter.attachEvent("on" + type, f);
	    else {
	      var map = emitter._handlers || (emitter._handlers = {});
	      var arr = map[type] || (map[type] = []);
	      arr.push(f);
	    }
	  };

	  var noHandlers = []
	  function getHandlers(emitter, type, copy) {
	    var arr = emitter._handlers && emitter._handlers[type]
	    if (copy) return arr && arr.length > 0 ? arr.slice() : noHandlers
	    else return arr || noHandlers
	  }

	  var off = CodeMirror.off = function(emitter, type, f) {
	    if (emitter.removeEventListener)
	      emitter.removeEventListener(type, f, false);
	    else if (emitter.detachEvent)
	      emitter.detachEvent("on" + type, f);
	    else {
	      var handlers = getHandlers(emitter, type, false)
	      for (var i = 0; i < handlers.length; ++i)
	        if (handlers[i] == f) { handlers.splice(i, 1); break; }
	    }
	  };

	  var signal = CodeMirror.signal = function(emitter, type /*, values...*/) {
	    var handlers = getHandlers(emitter, type, true)
	    if (!handlers.length) return;
	    var args = Array.prototype.slice.call(arguments, 2);
	    for (var i = 0; i < handlers.length; ++i) handlers[i].apply(null, args);
	  };

	  var orphanDelayedCallbacks = null;

	  // Often, we want to signal events at a point where we are in the
	  // middle of some work, but don't want the handler to start calling
	  // other methods on the editor, which might be in an inconsistent
	  // state or simply not expect any other events to happen.
	  // signalLater looks whether there are any handlers, and schedules
	  // them to be executed when the last operation ends, or, if no
	  // operation is active, when a timeout fires.
	  function signalLater(emitter, type /*, values...*/) {
	    var arr = getHandlers(emitter, type, false)
	    if (!arr.length) return;
	    var args = Array.prototype.slice.call(arguments, 2), list;
	    if (operationGroup) {
	      list = operationGroup.delayedCallbacks;
	    } else if (orphanDelayedCallbacks) {
	      list = orphanDelayedCallbacks;
	    } else {
	      list = orphanDelayedCallbacks = [];
	      setTimeout(fireOrphanDelayed, 0);
	    }
	    function bnd(f) {return function(){f.apply(null, args);};};
	    for (var i = 0; i < arr.length; ++i)
	      list.push(bnd(arr[i]));
	  }

	  function fireOrphanDelayed() {
	    var delayed = orphanDelayedCallbacks;
	    orphanDelayedCallbacks = null;
	    for (var i = 0; i < delayed.length; ++i) delayed[i]();
	  }

	  // The DOM events that CodeMirror handles can be overridden by
	  // registering a (non-DOM) handler on the editor for the event name,
	  // and preventDefault-ing the event in that handler.
	  function signalDOMEvent(cm, e, override) {
	    if (typeof e == "string")
	      e = {type: e, preventDefault: function() { this.defaultPrevented = true; }};
	    signal(cm, override || e.type, cm, e);
	    return e_defaultPrevented(e) || e.codemirrorIgnore;
	  }

	  function signalCursorActivity(cm) {
	    var arr = cm._handlers && cm._handlers.cursorActivity;
	    if (!arr) return;
	    var set = cm.curOp.cursorActivityHandlers || (cm.curOp.cursorActivityHandlers = []);
	    for (var i = 0; i < arr.length; ++i) if (indexOf(set, arr[i]) == -1)
	      set.push(arr[i]);
	  }

	  function hasHandler(emitter, type) {
	    return getHandlers(emitter, type).length > 0
	  }

	  // Add on and off methods to a constructor's prototype, to make
	  // registering events on such objects more convenient.
	  function eventMixin(ctor) {
	    ctor.prototype.on = function(type, f) {on(this, type, f);};
	    ctor.prototype.off = function(type, f) {off(this, type, f);};
	  }

	  // MISC UTILITIES

	  // Number of pixels added to scroller and sizer to hide scrollbar
	  var scrollerGap = 30;

	  // Returned or thrown by various protocols to signal 'I'm not
	  // handling this'.
	  var Pass = CodeMirror.Pass = {toString: function(){return "CodeMirror.Pass";}};

	  // Reused option objects for setSelection & friends
	  var sel_dontScroll = {scroll: false}, sel_mouse = {origin: "*mouse"}, sel_move = {origin: "+move"};

	  function Delayed() {this.id = null;}
	  Delayed.prototype.set = function(ms, f) {
	    clearTimeout(this.id);
	    this.id = setTimeout(f, ms);
	  };

	  // Counts the column offset in a string, taking tabs into account.
	  // Used mostly to find indentation.
	  var countColumn = CodeMirror.countColumn = function(string, end, tabSize, startIndex, startValue) {
	    if (end == null) {
	      end = string.search(/[^\s\u00a0]/);
	      if (end == -1) end = string.length;
	    }
	    for (var i = startIndex || 0, n = startValue || 0;;) {
	      var nextTab = string.indexOf("\t", i);
	      if (nextTab < 0 || nextTab >= end)
	        return n + (end - i);
	      n += nextTab - i;
	      n += tabSize - (n % tabSize);
	      i = nextTab + 1;
	    }
	  };

	  // The inverse of countColumn -- find the offset that corresponds to
	  // a particular column.
	  var findColumn = CodeMirror.findColumn = function(string, goal, tabSize) {
	    for (var pos = 0, col = 0;;) {
	      var nextTab = string.indexOf("\t", pos);
	      if (nextTab == -1) nextTab = string.length;
	      var skipped = nextTab - pos;
	      if (nextTab == string.length || col + skipped >= goal)
	        return pos + Math.min(skipped, goal - col);
	      col += nextTab - pos;
	      col += tabSize - (col % tabSize);
	      pos = nextTab + 1;
	      if (col >= goal) return pos;
	    }
	  }

	  var spaceStrs = [""];
	  function spaceStr(n) {
	    while (spaceStrs.length <= n)
	      spaceStrs.push(lst(spaceStrs) + " ");
	    return spaceStrs[n];
	  }

	  function lst(arr) { return arr[arr.length-1]; }

	  var selectInput = function(node) { node.select(); };
	  if (ios) // Mobile Safari apparently has a bug where select() is broken.
	    selectInput = function(node) { node.selectionStart = 0; node.selectionEnd = node.value.length; };
	  else if (ie) // Suppress mysterious IE10 errors
	    selectInput = function(node) { try { node.select(); } catch(_e) {} };

	  function indexOf(array, elt) {
	    for (var i = 0; i < array.length; ++i)
	      if (array[i] == elt) return i;
	    return -1;
	  }
	  function map(array, f) {
	    var out = [];
	    for (var i = 0; i < array.length; i++) out[i] = f(array[i], i);
	    return out;
	  }

	  function nothing() {}

	  function createObj(base, props) {
	    var inst;
	    if (Object.create) {
	      inst = Object.create(base);
	    } else {
	      nothing.prototype = base;
	      inst = new nothing();
	    }
	    if (props) copyObj(props, inst);
	    return inst;
	  };

	  function copyObj(obj, target, overwrite) {
	    if (!target) target = {};
	    for (var prop in obj)
	      if (obj.hasOwnProperty(prop) && (overwrite !== false || !target.hasOwnProperty(prop)))
	        target[prop] = obj[prop];
	    return target;
	  }

	  function bind(f) {
	    var args = Array.prototype.slice.call(arguments, 1);
	    return function(){return f.apply(null, args);};
	  }

	  var nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
	  var isWordCharBasic = CodeMirror.isWordChar = function(ch) {
	    return /\w/.test(ch) || ch > "\x80" &&
	      (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch));
	  };
	  function isWordChar(ch, helper) {
	    if (!helper) return isWordCharBasic(ch);
	    if (helper.source.indexOf("\\w") > -1 && isWordCharBasic(ch)) return true;
	    return helper.test(ch);
	  }

	  function isEmpty(obj) {
	    for (var n in obj) if (obj.hasOwnProperty(n) && obj[n]) return false;
	    return true;
	  }

	  // Extending unicode characters. A series of a non-extending char +
	  // any number of extending chars is treated as a single unit as far
	  // as editing and measuring is concerned. This is not fully correct,
	  // since some scripts/fonts/browsers also treat other configurations
	  // of code points as a group.
	  var extendingChars = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
	  function isExtendingChar(ch) { return ch.charCodeAt(0) >= 768 && extendingChars.test(ch); }

	  // DOM UTILITIES

	  function elt(tag, content, className, style) {
	    var e = document.createElement(tag);
	    if (className) e.className = className;
	    if (style) e.style.cssText = style;
	    if (typeof content == "string") e.appendChild(document.createTextNode(content));
	    else if (content) for (var i = 0; i < content.length; ++i) e.appendChild(content[i]);
	    return e;
	  }

	  var range;
	  if (document.createRange) range = function(node, start, end, endNode) {
	    var r = document.createRange();
	    r.setEnd(endNode || node, end);
	    r.setStart(node, start);
	    return r;
	  };
	  else range = function(node, start, end) {
	    var r = document.body.createTextRange();
	    try { r.moveToElementText(node.parentNode); }
	    catch(e) { return r; }
	    r.collapse(true);
	    r.moveEnd("character", end);
	    r.moveStart("character", start);
	    return r;
	  };

	  function removeChildren(e) {
	    for (var count = e.childNodes.length; count > 0; --count)
	      e.removeChild(e.firstChild);
	    return e;
	  }

	  function removeChildrenAndAdd(parent, e) {
	    return removeChildren(parent).appendChild(e);
	  }

	  var contains = CodeMirror.contains = function(parent, child) {
	    if (child.nodeType == 3) // Android browser always returns false when child is a textnode
	      child = child.parentNode;
	    if (parent.contains)
	      return parent.contains(child);
	    do {
	      if (child.nodeType == 11) child = child.host;
	      if (child == parent) return true;
	    } while (child = child.parentNode);
	  };

	  function activeElt() {
	    var activeElement = document.activeElement;
	    while (activeElement && activeElement.root && activeElement.root.activeElement)
	      activeElement = activeElement.root.activeElement;
	    return activeElement;
	  }
	  // Older versions of IE throws unspecified error when touching
	  // document.activeElement in some cases (during loading, in iframe)
	  if (ie && ie_version < 11) activeElt = function() {
	    try { return document.activeElement; }
	    catch(e) { return document.body; }
	  };

	  function classTest(cls) { return new RegExp("(^|\\s)" + cls + "(?:$|\\s)\\s*"); }
	  var rmClass = CodeMirror.rmClass = function(node, cls) {
	    var current = node.className;
	    var match = classTest(cls).exec(current);
	    if (match) {
	      var after = current.slice(match.index + match[0].length);
	      node.className = current.slice(0, match.index) + (after ? match[1] + after : "");
	    }
	  };
	  var addClass = CodeMirror.addClass = function(node, cls) {
	    var current = node.className;
	    if (!classTest(cls).test(current)) node.className += (current ? " " : "") + cls;
	  };
	  function joinClasses(a, b) {
	    var as = a.split(" ");
	    for (var i = 0; i < as.length; i++)
	      if (as[i] && !classTest(as[i]).test(b)) b += " " + as[i];
	    return b;
	  }

	  // WINDOW-WIDE EVENTS

	  // These must be handled carefully, because naively registering a
	  // handler for each editor will cause the editors to never be
	  // garbage collected.

	  function forEachCodeMirror(f) {
	    if (!document.body.getElementsByClassName) return;
	    var byClass = document.body.getElementsByClassName("CodeMirror");
	    for (var i = 0; i < byClass.length; i++) {
	      var cm = byClass[i].CodeMirror;
	      if (cm) f(cm);
	    }
	  }

	  var globalsRegistered = false;
	  function ensureGlobalHandlers() {
	    if (globalsRegistered) return;
	    registerGlobalHandlers();
	    globalsRegistered = true;
	  }
	  function registerGlobalHandlers() {
	    // When the window resizes, we need to refresh active editors.
	    var resizeTimer;
	    on(window, "resize", function() {
	      if (resizeTimer == null) resizeTimer = setTimeout(function() {
	        resizeTimer = null;
	        forEachCodeMirror(onResize);
	      }, 100);
	    });
	    // When the window loses focus, we want to show the editor as blurred
	    on(window, "blur", function() {
	      forEachCodeMirror(onBlur);
	    });
	  }

	  // FEATURE DETECTION

	  // Detect drag-and-drop
	  var dragAndDrop = function() {
	    // There is *some* kind of drag-and-drop support in IE6-8, but I
	    // couldn't get it to work yet.
	    if (ie && ie_version < 9) return false;
	    var div = elt('div');
	    return "draggable" in div || "dragDrop" in div;
	  }();

	  var zwspSupported;
	  function zeroWidthElement(measure) {
	    if (zwspSupported == null) {
	      var test = elt("span", "\u200b");
	      removeChildrenAndAdd(measure, elt("span", [test, document.createTextNode("x")]));
	      if (measure.firstChild.offsetHeight != 0)
	        zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !(ie && ie_version < 8);
	    }
	    var node = zwspSupported ? elt("span", "\u200b") :
	      elt("span", "\u00a0", null, "display: inline-block; width: 1px; margin-right: -1px");
	    node.setAttribute("cm-text", "");
	    return node;
	  }

	  // Feature-detect IE's crummy client rect reporting for bidi text
	  var badBidiRects;
	  function hasBadBidiRects(measure) {
	    if (badBidiRects != null) return badBidiRects;
	    var txt = removeChildrenAndAdd(measure, document.createTextNode("A\u062eA"));
	    var r0 = range(txt, 0, 1).getBoundingClientRect();
	    if (!r0 || r0.left == r0.right) return false; // Safari returns null in some cases (#2780)
	    var r1 = range(txt, 1, 2).getBoundingClientRect();
	    return badBidiRects = (r1.right - r0.right < 3);
	  }

	  // See if "".split is the broken IE version, if so, provide an
	  // alternative way to split lines.
	  var splitLinesAuto = CodeMirror.splitLines = "\n\nb".split(/\n/).length != 3 ? function(string) {
	    var pos = 0, result = [], l = string.length;
	    while (pos <= l) {
	      var nl = string.indexOf("\n", pos);
	      if (nl == -1) nl = string.length;
	      var line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl);
	      var rt = line.indexOf("\r");
	      if (rt != -1) {
	        result.push(line.slice(0, rt));
	        pos += rt + 1;
	      } else {
	        result.push(line);
	        pos = nl + 1;
	      }
	    }
	    return result;
	  } : function(string){return string.split(/\r\n?|\n/);};

	  var hasSelection = window.getSelection ? function(te) {
	    try { return te.selectionStart != te.selectionEnd; }
	    catch(e) { return false; }
	  } : function(te) {
	    try {var range = te.ownerDocument.selection.createRange();}
	    catch(e) {}
	    if (!range || range.parentElement() != te) return false;
	    return range.compareEndPoints("StartToEnd", range) != 0;
	  };

	  var hasCopyEvent = (function() {
	    var e = elt("div");
	    if ("oncopy" in e) return true;
	    e.setAttribute("oncopy", "return;");
	    return typeof e.oncopy == "function";
	  })();

	  var badZoomedRects = null;
	  function hasBadZoomedRects(measure) {
	    if (badZoomedRects != null) return badZoomedRects;
	    var node = removeChildrenAndAdd(measure, elt("span", "x"));
	    var normal = node.getBoundingClientRect();
	    var fromRange = range(node, 0, 1).getBoundingClientRect();
	    return badZoomedRects = Math.abs(normal.left - fromRange.left) > 1;
	  }

	  // KEY NAMES

	  var keyNames = CodeMirror.keyNames = {
	    3: "Enter", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt",
	    19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End",
	    36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert",
	    46: "Delete", 59: ";", 61: "=", 91: "Mod", 92: "Mod", 93: "Mod",
	    106: "*", 107: "=", 109: "-", 110: ".", 111: "/", 127: "Delete",
	    173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\",
	    221: "]", 222: "'", 63232: "Up", 63233: "Down", 63234: "Left", 63235: "Right", 63272: "Delete",
	    63273: "Home", 63275: "End", 63276: "PageUp", 63277: "PageDown", 63302: "Insert"
	  };
	  (function() {
	    // Number keys
	    for (var i = 0; i < 10; i++) keyNames[i + 48] = keyNames[i + 96] = String(i);
	    // Alphabetic keys
	    for (var i = 65; i <= 90; i++) keyNames[i] = String.fromCharCode(i);
	    // Function keys
	    for (var i = 1; i <= 12; i++) keyNames[i + 111] = keyNames[i + 63235] = "F" + i;
	  })();

	  // BIDI HELPERS

	  function iterateBidiSections(order, from, to, f) {
	    if (!order) return f(from, to, "ltr");
	    var found = false;
	    for (var i = 0; i < order.length; ++i) {
	      var part = order[i];
	      if (part.from < to && part.to > from || from == to && part.to == from) {
	        f(Math.max(part.from, from), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr");
	        found = true;
	      }
	    }
	    if (!found) f(from, to, "ltr");
	  }

	  function bidiLeft(part) { return part.level % 2 ? part.to : part.from; }
	  function bidiRight(part) { return part.level % 2 ? part.from : part.to; }

	  function lineLeft(line) { var order = getOrder(line); return order ? bidiLeft(order[0]) : 0; }
	  function lineRight(line) {
	    var order = getOrder(line);
	    if (!order) return line.text.length;
	    return bidiRight(lst(order));
	  }

	  function lineStart(cm, lineN) {
	    var line = getLine(cm.doc, lineN);
	    var visual = visualLine(line);
	    if (visual != line) lineN = lineNo(visual);
	    var order = getOrder(visual);
	    var ch = !order ? 0 : order[0].level % 2 ? lineRight(visual) : lineLeft(visual);
	    return Pos(lineN, ch);
	  }
	  function lineEnd(cm, lineN) {
	    var merged, line = getLine(cm.doc, lineN);
	    while (merged = collapsedSpanAtEnd(line)) {
	      line = merged.find(1, true).line;
	      lineN = null;
	    }
	    var order = getOrder(line);
	    var ch = !order ? line.text.length : order[0].level % 2 ? lineLeft(line) : lineRight(line);
	    return Pos(lineN == null ? lineNo(line) : lineN, ch);
	  }
	  function lineStartSmart(cm, pos) {
	    var start = lineStart(cm, pos.line);
	    var line = getLine(cm.doc, start.line);
	    var order = getOrder(line);
	    if (!order || order[0].level == 0) {
	      var firstNonWS = Math.max(0, line.text.search(/\S/));
	      var inWS = pos.line == start.line && pos.ch <= firstNonWS && pos.ch;
	      return Pos(start.line, inWS ? 0 : firstNonWS);
	    }
	    return start;
	  }

	  function compareBidiLevel(order, a, b) {
	    var linedir = order[0].level;
	    if (a == linedir) return true;
	    if (b == linedir) return false;
	    return a < b;
	  }
	  var bidiOther;
	  function getBidiPartAt(order, pos) {
	    bidiOther = null;
	    for (var i = 0, found; i < order.length; ++i) {
	      var cur = order[i];
	      if (cur.from < pos && cur.to > pos) return i;
	      if ((cur.from == pos || cur.to == pos)) {
	        if (found == null) {
	          found = i;
	        } else if (compareBidiLevel(order, cur.level, order[found].level)) {
	          if (cur.from != cur.to) bidiOther = found;
	          return i;
	        } else {
	          if (cur.from != cur.to) bidiOther = i;
	          return found;
	        }
	      }
	    }
	    return found;
	  }

	  function moveInLine(line, pos, dir, byUnit) {
	    if (!byUnit) return pos + dir;
	    do pos += dir;
	    while (pos > 0 && isExtendingChar(line.text.charAt(pos)));
	    return pos;
	  }

	  // This is needed in order to move 'visually' through bi-directional
	  // text -- i.e., pressing left should make the cursor go left, even
	  // when in RTL text. The tricky part is the 'jumps', where RTL and
	  // LTR text touch each other. This often requires the cursor offset
	  // to move more than one unit, in order to visually move one unit.
	  function moveVisually(line, start, dir, byUnit) {
	    var bidi = getOrder(line);
	    if (!bidi) return moveLogically(line, start, dir, byUnit);
	    var pos = getBidiPartAt(bidi, start), part = bidi[pos];
	    var target = moveInLine(line, start, part.level % 2 ? -dir : dir, byUnit);

	    for (;;) {
	      if (target > part.from && target < part.to) return target;
	      if (target == part.from || target == part.to) {
	        if (getBidiPartAt(bidi, target) == pos) return target;
	        part = bidi[pos += dir];
	        return (dir > 0) == part.level % 2 ? part.to : part.from;
	      } else {
	        part = bidi[pos += dir];
	        if (!part) return null;
	        if ((dir > 0) == part.level % 2)
	          target = moveInLine(line, part.to, -1, byUnit);
	        else
	          target = moveInLine(line, part.from, 1, byUnit);
	      }
	    }
	  }

	  function moveLogically(line, start, dir, byUnit) {
	    var target = start + dir;
	    if (byUnit) while (target > 0 && isExtendingChar(line.text.charAt(target))) target += dir;
	    return target < 0 || target > line.text.length ? null : target;
	  }

	  // Bidirectional ordering algorithm
	  // See http://unicode.org/reports/tr9/tr9-13.html for the algorithm
	  // that this (partially) implements.

	  // One-char codes used for character types:
	  // L (L):   Left-to-Right
	  // R (R):   Right-to-Left
	  // r (AL):  Right-to-Left Arabic
	  // 1 (EN):  European Number
	  // + (ES):  European Number Separator
	  // % (ET):  European Number Terminator
	  // n (AN):  Arabic Number
	  // , (CS):  Common Number Separator
	  // m (NSM): Non-Spacing Mark
	  // b (BN):  Boundary Neutral
	  // s (B):   Paragraph Separator
	  // t (S):   Segment Separator
	  // w (WS):  Whitespace
	  // N (ON):  Other Neutrals

	  // Returns null if characters are ordered as they appear
	  // (left-to-right), or an array of sections ({from, to, level}
	  // objects) in the order in which they occur visually.
	  var bidiOrdering = (function() {
	    // Character types for codepoints 0 to 0xff
	    var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN";
	    // Character types for codepoints 0x600 to 0x6ff
	    var arabicTypes = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm";
	    function charType(code) {
	      if (code <= 0xf7) return lowTypes.charAt(code);
	      else if (0x590 <= code && code <= 0x5f4) return "R";
	      else if (0x600 <= code && code <= 0x6ed) return arabicTypes.charAt(code - 0x600);
	      else if (0x6ee <= code && code <= 0x8ac) return "r";
	      else if (0x2000 <= code && code <= 0x200b) return "w";
	      else if (code == 0x200c) return "b";
	      else return "L";
	    }

	    var bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
	    var isNeutral = /[stwN]/, isStrong = /[LRr]/, countsAsLeft = /[Lb1n]/, countsAsNum = /[1n]/;
	    // Browsers seem to always treat the boundaries of block elements as being L.
	    var outerType = "L";

	    function BidiSpan(level, from, to) {
	      this.level = level;
	      this.from = from; this.to = to;
	    }

	    return function(str) {
	      if (!bidiRE.test(str)) return false;
	      var len = str.length, types = [];
	      for (var i = 0, type; i < len; ++i)
	        types.push(type = charType(str.charCodeAt(i)));

	      // W1. Examine each non-spacing mark (NSM) in the level run, and
	      // change the type of the NSM to the type of the previous
	      // character. If the NSM is at the start of the level run, it will
	      // get the type of sor.
	      for (var i = 0, prev = outerType; i < len; ++i) {
	        var type = types[i];
	        if (type == "m") types[i] = prev;
	        else prev = type;
	      }

	      // W2. Search backwards from each instance of a European number
	      // until the first strong type (R, L, AL, or sor) is found. If an
	      // AL is found, change the type of the European number to Arabic
	      // number.
	      // W3. Change all ALs to R.
	      for (var i = 0, cur = outerType; i < len; ++i) {
	        var type = types[i];
	        if (type == "1" && cur == "r") types[i] = "n";
	        else if (isStrong.test(type)) { cur = type; if (type == "r") types[i] = "R"; }
	      }

	      // W4. A single European separator between two European numbers
	      // changes to a European number. A single common separator between
	      // two numbers of the same type changes to that type.
	      for (var i = 1, prev = types[0]; i < len - 1; ++i) {
	        var type = types[i];
	        if (type == "+" && prev == "1" && types[i+1] == "1") types[i] = "1";
	        else if (type == "," && prev == types[i+1] &&
	                 (prev == "1" || prev == "n")) types[i] = prev;
	        prev = type;
	      }

	      // W5. A sequence of European terminators adjacent to European
	      // numbers changes to all European numbers.
	      // W6. Otherwise, separators and terminators change to Other
	      // Neutral.
	      for (var i = 0; i < len; ++i) {
	        var type = types[i];
	        if (type == ",") types[i] = "N";
	        else if (type == "%") {
	          for (var end = i + 1; end < len && types[end] == "%"; ++end) {}
	          var replace = (i && types[i-1] == "!") || (end < len && types[end] == "1") ? "1" : "N";
	          for (var j = i; j < end; ++j) types[j] = replace;
	          i = end - 1;
	        }
	      }

	      // W7. Search backwards from each instance of a European number
	      // until the first strong type (R, L, or sor) is found. If an L is
	      // found, then change the type of the European number to L.
	      for (var i = 0, cur = outerType; i < len; ++i) {
	        var type = types[i];
	        if (cur == "L" && type == "1") types[i] = "L";
	        else if (isStrong.test(type)) cur = type;
	      }

	      // N1. A sequence of neutrals takes the direction of the
	      // surrounding strong text if the text on both sides has the same
	      // direction. European and Arabic numbers act as if they were R in
	      // terms of their influence on neutrals. Start-of-level-run (sor)
	      // and end-of-level-run (eor) are used at level run boundaries.
	      // N2. Any remaining neutrals take the embedding direction.
	      for (var i = 0; i < len; ++i) {
	        if (isNeutral.test(types[i])) {
	          for (var end = i + 1; end < len && isNeutral.test(types[end]); ++end) {}
	          var before = (i ? types[i-1] : outerType) == "L";
	          var after = (end < len ? types[end] : outerType) == "L";
	          var replace = before || after ? "L" : "R";
	          for (var j = i; j < end; ++j) types[j] = replace;
	          i = end - 1;
	        }
	      }

	      // Here we depart from the documented algorithm, in order to avoid
	      // building up an actual levels array. Since there are only three
	      // levels (0, 1, 2) in an implementation that doesn't take
	      // explicit embedding into account, we can build up the order on
	      // the fly, without following the level-based algorithm.
	      var order = [], m;
	      for (var i = 0; i < len;) {
	        if (countsAsLeft.test(types[i])) {
	          var start = i;
	          for (++i; i < len && countsAsLeft.test(types[i]); ++i) {}
	          order.push(new BidiSpan(0, start, i));
	        } else {
	          var pos = i, at = order.length;
	          for (++i; i < len && types[i] != "L"; ++i) {}
	          for (var j = pos; j < i;) {
	            if (countsAsNum.test(types[j])) {
	              if (pos < j) order.splice(at, 0, new BidiSpan(1, pos, j));
	              var nstart = j;
	              for (++j; j < i && countsAsNum.test(types[j]); ++j) {}
	              order.splice(at, 0, new BidiSpan(2, nstart, j));
	              pos = j;
	            } else ++j;
	          }
	          if (pos < i) order.splice(at, 0, new BidiSpan(1, pos, i));
	        }
	      }
	      if (order[0].level == 1 && (m = str.match(/^\s+/))) {
	        order[0].from = m[0].length;
	        order.unshift(new BidiSpan(0, 0, m[0].length));
	      }
	      if (lst(order).level == 1 && (m = str.match(/\s+$/))) {
	        lst(order).to -= m[0].length;
	        order.push(new BidiSpan(0, len - m[0].length, len));
	      }
	      if (order[0].level == 2)
	        order.unshift(new BidiSpan(1, order[0].to, order[0].to));
	      if (order[0].level != lst(order).level)
	        order.push(new BidiSpan(order[0].level, len, len));

	      return order;
	    };
	  })();

	  // THE END

	  CodeMirror.version = "5.14.2";

	  return CodeMirror;
	});


/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	(function(mod) {
	  if (true) // CommonJS
	    mod(__webpack_require__(178));
	  else if (typeof define == "function" && define.amd) // AMD
	    define(["../../lib/codemirror"], mod);
	  else // Plain browser env
	    mod(CodeMirror);
	})(function(CodeMirror) {
	  "use strict";

	  var HINT_ELEMENT_CLASS        = "CodeMirror-hint";
	  var ACTIVE_HINT_ELEMENT_CLASS = "CodeMirror-hint-active";

	  // This is the old interface, kept around for now to stay
	  // backwards-compatible.
	  CodeMirror.showHint = function(cm, getHints, options) {
	    if (!getHints) return cm.showHint(options);
	    if (options && options.async) getHints.async = true;
	    var newOpts = {hint: getHints};
	    if (options) for (var prop in options) newOpts[prop] = options[prop];
	    return cm.showHint(newOpts);
	  };

	  CodeMirror.defineExtension("showHint", function(options) {
	    options = parseOptions(this, this.getCursor("start"), options);
	    var selections = this.listSelections()
	    if (selections.length > 1) return;
	    // By default, don't allow completion when something is selected.
	    // A hint function can have a `supportsSelection` property to
	    // indicate that it can handle selections.
	    if (this.somethingSelected()) {
	      if (!options.hint.supportsSelection) return;
	      // Don't try with cross-line selections
	      for (var i = 0; i < selections.length; i++)
	        if (selections[i].head.line != selections[i].anchor.line) return;
	    }

	    if (this.state.completionActive) this.state.completionActive.close();
	    var completion = this.state.completionActive = new Completion(this, options);
	    if (!completion.options.hint) return;

	    CodeMirror.signal(this, "startCompletion", this);
	    completion.update(true);
	  });

	  function Completion(cm, options) {
	    this.cm = cm;
	    this.options = options;
	    this.widget = null;
	    this.debounce = 0;
	    this.tick = 0;
	    this.startPos = this.cm.getCursor("start");
	    this.startLen = this.cm.getLine(this.startPos.line).length - this.cm.getSelection().length;

	    var self = this;
	    cm.on("cursorActivity", this.activityFunc = function() { self.cursorActivity(); });
	  }

	  var requestAnimationFrame = window.requestAnimationFrame || function(fn) {
	    return setTimeout(fn, 1000/60);
	  };
	  var cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;

	  Completion.prototype = {
	    close: function() {
	      if (!this.active()) return;
	      this.cm.state.completionActive = null;
	      this.tick = null;
	      this.cm.off("cursorActivity", this.activityFunc);

	      if (this.widget && this.data) CodeMirror.signal(this.data, "close");
	      if (this.widget) this.widget.close();
	      CodeMirror.signal(this.cm, "endCompletion", this.cm);
	    },

	    active: function() {
	      return this.cm.state.completionActive == this;
	    },

	    pick: function(data, i) {
	      var completion = data.list[i];
	      if (completion.hint) completion.hint(this.cm, data, completion);
	      else this.cm.replaceRange(getText(completion), completion.from || data.from,
	                                completion.to || data.to, "complete");
	      CodeMirror.signal(data, "pick", completion);
	      this.close();
	    },

	    cursorActivity: function() {
	      if (this.debounce) {
	        cancelAnimationFrame(this.debounce);
	        this.debounce = 0;
	      }

	      var pos = this.cm.getCursor(), line = this.cm.getLine(pos.line);
	      if (pos.line != this.startPos.line || line.length - pos.ch != this.startLen - this.startPos.ch ||
	          pos.ch < this.startPos.ch || this.cm.somethingSelected() ||
	          (pos.ch && this.options.closeCharacters.test(line.charAt(pos.ch - 1)))) {
	        this.close();
	      } else {
	        var self = this;
	        this.debounce = requestAnimationFrame(function() {self.update();});
	        if (this.widget) this.widget.disable();
	      }
	    },

	    update: function(first) {
	      if (this.tick == null) return
	      var self = this, myTick = ++this.tick
	      fetchHints(this.options.hint, this.cm, this.options, function(data) {
	        if (self.tick == myTick) self.finishUpdate(data, first)
	      })
	    },

	    finishUpdate: function(data, first) {
	      if (this.data) CodeMirror.signal(this.data, "update");

	      var picked = (this.widget && this.widget.picked) || (first && this.options.completeSingle);
	      if (this.widget) this.widget.close();

	      if (data && this.data && isNewCompletion(this.data, data)) return;
	      this.data = data;

	      if (data && data.list.length) {
	        if (picked && data.list.length == 1) {
	          this.pick(data, 0);
	        } else {
	          this.widget = new Widget(this, data);
	          CodeMirror.signal(data, "shown");
	        }
	      }
	    }
	  };

	  function isNewCompletion(old, nw) {
	    var moved = CodeMirror.cmpPos(nw.from, old.from)
	    return moved > 0 && old.to.ch - old.from.ch != nw.to.ch - nw.from.ch
	  }

	  function parseOptions(cm, pos, options) {
	    var editor = cm.options.hintOptions;
	    var out = {};
	    for (var prop in defaultOptions) out[prop] = defaultOptions[prop];
	    if (editor) for (var prop in editor)
	      if (editor[prop] !== undefined) out[prop] = editor[prop];
	    if (options) for (var prop in options)
	      if (options[prop] !== undefined) out[prop] = options[prop];
	    if (out.hint.resolve) out.hint = out.hint.resolve(cm, pos)
	    return out;
	  }

	  function getText(completion) {
	    if (typeof completion == "string") return completion;
	    else return completion.text;
	  }

	  function buildKeyMap(completion, handle) {
	    var baseMap = {
	      Up: function() {handle.moveFocus(-1);},
	      Down: function() {handle.moveFocus(1);},
	      PageUp: function() {handle.moveFocus(-handle.menuSize() + 1, true);},
	      PageDown: function() {handle.moveFocus(handle.menuSize() - 1, true);},
	      Home: function() {handle.setFocus(0);},
	      End: function() {handle.setFocus(handle.length - 1);},
	      Enter: handle.pick,
	      Tab: handle.pick,
	      Esc: handle.close
	    };
	    var custom = completion.options.customKeys;
	    var ourMap = custom ? {} : baseMap;
	    function addBinding(key, val) {
	      var bound;
	      if (typeof val != "string")
	        bound = function(cm) { return val(cm, handle); };
	      // This mechanism is deprecated
	      else if (baseMap.hasOwnProperty(val))
	        bound = baseMap[val];
	      else
	        bound = val;
	      ourMap[key] = bound;
	    }
	    if (custom)
	      for (var key in custom) if (custom.hasOwnProperty(key))
	        addBinding(key, custom[key]);
	    var extra = completion.options.extraKeys;
	    if (extra)
	      for (var key in extra) if (extra.hasOwnProperty(key))
	        addBinding(key, extra[key]);
	    return ourMap;
	  }

	  function getHintElement(hintsElement, el) {
	    while (el && el != hintsElement) {
	      if (el.nodeName.toUpperCase() === "LI" && el.parentNode == hintsElement) return el;
	      el = el.parentNode;
	    }
	  }

	  function Widget(completion, data) {
	    this.completion = completion;
	    this.data = data;
	    this.picked = false;
	    var widget = this, cm = completion.cm;

	    var hints = this.hints = document.createElement("ul");
	    hints.className = "CodeMirror-hints";
	    this.selectedHint = data.selectedHint || 0;

	    var completions = data.list;
	    for (var i = 0; i < completions.length; ++i) {
	      var elt = hints.appendChild(document.createElement("li")), cur = completions[i];
	      var className = HINT_ELEMENT_CLASS + (i != this.selectedHint ? "" : " " + ACTIVE_HINT_ELEMENT_CLASS);
	      if (cur.className != null) className = cur.className + " " + className;
	      elt.className = className;
	      if (cur.render) cur.render(elt, data, cur);
	      else elt.appendChild(document.createTextNode(cur.displayText || getText(cur)));
	      elt.hintId = i;
	    }

	    var pos = cm.cursorCoords(completion.options.alignWithWord ? data.from : null);
	    var left = pos.left, top = pos.bottom, below = true;
	    hints.style.left = left + "px";
	    hints.style.top = top + "px";
	    // If we're at the edge of the screen, then we want the menu to appear on the left of the cursor.
	    var winW = window.innerWidth || Math.max(document.body.offsetWidth, document.documentElement.offsetWidth);
	    var winH = window.innerHeight || Math.max(document.body.offsetHeight, document.documentElement.offsetHeight);
	    (completion.options.container || document.body).appendChild(hints);
	    var box = hints.getBoundingClientRect(), overlapY = box.bottom - winH;
	    if (overlapY > 0) {
	      var height = box.bottom - box.top, curTop = pos.top - (pos.bottom - box.top);
	      if (curTop - height > 0) { // Fits above cursor
	        hints.style.top = (top = pos.top - height) + "px";
	        below = false;
	      } else if (height > winH) {
	        hints.style.height = (winH - 5) + "px";
	        hints.style.top = (top = pos.bottom - box.top) + "px";
	        var cursor = cm.getCursor();
	        if (data.from.ch != cursor.ch) {
	          pos = cm.cursorCoords(cursor);
	          hints.style.left = (left = pos.left) + "px";
	          box = hints.getBoundingClientRect();
	        }
	      }
	    }
	    var overlapX = box.right - winW;
	    if (overlapX > 0) {
	      if (box.right - box.left > winW) {
	        hints.style.width = (winW - 5) + "px";
	        overlapX -= (box.right - box.left) - winW;
	      }
	      hints.style.left = (left = pos.left - overlapX) + "px";
	    }

	    cm.addKeyMap(this.keyMap = buildKeyMap(completion, {
	      moveFocus: function(n, avoidWrap) { widget.changeActive(widget.selectedHint + n, avoidWrap); },
	      setFocus: function(n) { widget.changeActive(n); },
	      menuSize: function() { return widget.screenAmount(); },
	      length: completions.length,
	      close: function() { completion.close(); },
	      pick: function() { widget.pick(); },
	      data: data
	    }));

	    if (completion.options.closeOnUnfocus) {
	      var closingOnBlur;
	      cm.on("blur", this.onBlur = function() { closingOnBlur = setTimeout(function() { completion.close(); }, 100); });
	      cm.on("focus", this.onFocus = function() { clearTimeout(closingOnBlur); });
	    }

	    var startScroll = cm.getScrollInfo();
	    cm.on("scroll", this.onScroll = function() {
	      var curScroll = cm.getScrollInfo(), editor = cm.getWrapperElement().getBoundingClientRect();
	      var newTop = top + startScroll.top - curScroll.top;
	      var point = newTop - (window.pageYOffset || (document.documentElement || document.body).scrollTop);
	      if (!below) point += hints.offsetHeight;
	      if (point <= editor.top || point >= editor.bottom) return completion.close();
	      hints.style.top = newTop + "px";
	      hints.style.left = (left + startScroll.left - curScroll.left) + "px";
	    });

	    CodeMirror.on(hints, "dblclick", function(e) {
	      var t = getHintElement(hints, e.target || e.srcElement);
	      if (t && t.hintId != null) {widget.changeActive(t.hintId); widget.pick();}
	    });

	    CodeMirror.on(hints, "click", function(e) {
	      var t = getHintElement(hints, e.target || e.srcElement);
	      if (t && t.hintId != null) {
	        widget.changeActive(t.hintId);
	        if (completion.options.completeOnSingleClick) widget.pick();
	      }
	    });

	    CodeMirror.on(hints, "mousedown", function() {
	      setTimeout(function(){cm.focus();}, 20);
	    });

	    CodeMirror.signal(data, "select", completions[0], hints.firstChild);
	    return true;
	  }

	  Widget.prototype = {
	    close: function() {
	      if (this.completion.widget != this) return;
	      this.completion.widget = null;
	      this.hints.parentNode.removeChild(this.hints);
	      this.completion.cm.removeKeyMap(this.keyMap);

	      var cm = this.completion.cm;
	      if (this.completion.options.closeOnUnfocus) {
	        cm.off("blur", this.onBlur);
	        cm.off("focus", this.onFocus);
	      }
	      cm.off("scroll", this.onScroll);
	    },

	    disable: function() {
	      this.completion.cm.removeKeyMap(this.keyMap);
	      var widget = this;
	      this.keyMap = {Enter: function() { widget.picked = true; }};
	      this.completion.cm.addKeyMap(this.keyMap);
	    },

	    pick: function() {
	      this.completion.pick(this.data, this.selectedHint);
	    },

	    changeActive: function(i, avoidWrap) {
	      if (i >= this.data.list.length)
	        i = avoidWrap ? this.data.list.length - 1 : 0;
	      else if (i < 0)
	        i = avoidWrap ? 0  : this.data.list.length - 1;
	      if (this.selectedHint == i) return;
	      var node = this.hints.childNodes[this.selectedHint];
	      node.className = node.className.replace(" " + ACTIVE_HINT_ELEMENT_CLASS, "");
	      node = this.hints.childNodes[this.selectedHint = i];
	      node.className += " " + ACTIVE_HINT_ELEMENT_CLASS;
	      if (node.offsetTop < this.hints.scrollTop)
	        this.hints.scrollTop = node.offsetTop - 3;
	      else if (node.offsetTop + node.offsetHeight > this.hints.scrollTop + this.hints.clientHeight)
	        this.hints.scrollTop = node.offsetTop + node.offsetHeight - this.hints.clientHeight + 3;
	      CodeMirror.signal(this.data, "select", this.data.list[this.selectedHint], node);
	    },

	    screenAmount: function() {
	      return Math.floor(this.hints.clientHeight / this.hints.firstChild.offsetHeight) || 1;
	    }
	  };

	  function applicableHelpers(cm, helpers) {
	    if (!cm.somethingSelected()) return helpers
	    var result = []
	    for (var i = 0; i < helpers.length; i++)
	      if (helpers[i].supportsSelection) result.push(helpers[i])
	    return result
	  }

	  function fetchHints(hint, cm, options, callback) {
	    if (hint.async) {
	      hint(cm, callback, options)
	    } else {
	      var result = hint(cm, options)
	      if (result && result.then) result.then(callback)
	      else callback(result)
	    }
	  }

	  function resolveAutoHints(cm, pos) {
	    var helpers = cm.getHelpers(pos, "hint"), words
	    if (helpers.length) {
	      var resolved = function(cm, callback, options) {
	        var app = applicableHelpers(cm, helpers);
	        function run(i) {
	          if (i == app.length) return callback(null)
	          fetchHints(app[i], cm, options, function(result) {
	            if (result && result.list.length > 0) callback(result)
	            else run(i + 1)
	          })
	        }
	        run(0)
	      }
	      resolved.async = true
	      resolved.supportsSelection = true
	      return resolved
	    } else if (words = cm.getHelper(cm.getCursor(), "hintWords")) {
	      return function(cm) { return CodeMirror.hint.fromList(cm, {words: words}) }
	    } else if (CodeMirror.hint.anyword) {
	      return function(cm, options) { return CodeMirror.hint.anyword(cm, options) }
	    } else {
	      return function() {}
	    }
	  }

	  CodeMirror.registerHelper("hint", "auto", {
	    resolve: resolveAutoHints
	  });

	  CodeMirror.registerHelper("hint", "fromList", function(cm, options) {
	    var cur = cm.getCursor(), token = cm.getTokenAt(cur);
	    var to = CodeMirror.Pos(cur.line, token.end);
	    if (token.string && /\w/.test(token.string[token.string.length - 1])) {
	      var term = token.string, from = CodeMirror.Pos(cur.line, token.start);
	    } else {
	      var term = "", from = to;
	    }
	    var found = [];
	    for (var i = 0; i < options.words.length; i++) {
	      var word = options.words[i];
	      if (word.slice(0, term.length) == term)
	        found.push(word);
	    }

	    if (found.length) return {list: found, from: from, to: to};
	  });

	  CodeMirror.commands.autocomplete = CodeMirror.showHint;

	  var defaultOptions = {
	    hint: CodeMirror.hint.auto,
	    completeSingle: true,
	    alignWithWord: true,
	    closeCharacters: /[\s()\[\]{};:>,]/,
	    closeOnUnfocus: true,
	    completeOnSingleClick: true,
	    container: null,
	    customKeys: null,
	    extraKeys: null
	  };

	  CodeMirror.defineOption("hintOptions", null);
	});


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	(function(mod) {
	  if (true) // CommonJS
	    mod(__webpack_require__(178));
	  else if (typeof define == "function" && define.amd) // AMD
	    define(["../../lib/codemirror"], mod);
	  else // Plain browser env
	    mod(CodeMirror);
	})(function(CodeMirror) {
	  "use strict";

	  var noOptions = {};
	  var nonWS = /[^\s\u00a0]/;
	  var Pos = CodeMirror.Pos;

	  function firstNonWS(str) {
	    var found = str.search(nonWS);
	    return found == -1 ? 0 : found;
	  }

	  CodeMirror.commands.toggleComment = function(cm) {
	    cm.toggleComment();
	  };

	  CodeMirror.defineExtension("toggleComment", function(options) {
	    if (!options) options = noOptions;
	    var cm = this;
	    var minLine = Infinity, ranges = this.listSelections(), mode = null;
	    for (var i = ranges.length - 1; i >= 0; i--) {
	      var from = ranges[i].from(), to = ranges[i].to();
	      if (from.line >= minLine) continue;
	      if (to.line >= minLine) to = Pos(minLine, 0);
	      minLine = from.line;
	      if (mode == null) {
	        if (cm.uncomment(from, to, options)) mode = "un";
	        else { cm.lineComment(from, to, options); mode = "line"; }
	      } else if (mode == "un") {
	        cm.uncomment(from, to, options);
	      } else {
	        cm.lineComment(from, to, options);
	      }
	    }
	  });

	  // Rough heuristic to try and detect lines that are part of multi-line string
	  function probablyInsideString(cm, pos, line) {
	    return /\bstring\b/.test(cm.getTokenTypeAt(Pos(pos.line, 0))) && !/^[\'\"`]/.test(line)
	  }

	  CodeMirror.defineExtension("lineComment", function(from, to, options) {
	    if (!options) options = noOptions;
	    var self = this, mode = self.getModeAt(from);
	    var firstLine = self.getLine(from.line);
	    if (firstLine == null || probablyInsideString(self, from, firstLine)) return;

	    var commentString = options.lineComment || mode.lineComment;
	    if (!commentString) {
	      if (options.blockCommentStart || mode.blockCommentStart) {
	        options.fullLines = true;
	        self.blockComment(from, to, options);
	      }
	      return;
	    }

	    var end = Math.min(to.ch != 0 || to.line == from.line ? to.line + 1 : to.line, self.lastLine() + 1);
	    var pad = options.padding == null ? " " : options.padding;
	    var blankLines = options.commentBlankLines || from.line == to.line;

	    self.operation(function() {
	      if (options.indent) {
	        var baseString = null;
	        for (var i = from.line; i < end; ++i) {
	          var line = self.getLine(i);
	          var whitespace = line.slice(0, firstNonWS(line));
	          if (baseString == null || baseString.length > whitespace.length) {
	            baseString = whitespace;
	          }
	        }
	        for (var i = from.line; i < end; ++i) {
	          var line = self.getLine(i), cut = baseString.length;
	          if (!blankLines && !nonWS.test(line)) continue;
	          if (line.slice(0, cut) != baseString) cut = firstNonWS(line);
	          self.replaceRange(baseString + commentString + pad, Pos(i, 0), Pos(i, cut));
	        }
	      } else {
	        for (var i = from.line; i < end; ++i) {
	          if (blankLines || nonWS.test(self.getLine(i)))
	            self.replaceRange(commentString + pad, Pos(i, 0));
	        }
	      }
	    });
	  });

	  CodeMirror.defineExtension("blockComment", function(from, to, options) {
	    if (!options) options = noOptions;
	    var self = this, mode = self.getModeAt(from);
	    var startString = options.blockCommentStart || mode.blockCommentStart;
	    var endString = options.blockCommentEnd || mode.blockCommentEnd;
	    if (!startString || !endString) {
	      if ((options.lineComment || mode.lineComment) && options.fullLines != false)
	        self.lineComment(from, to, options);
	      return;
	    }

	    var end = Math.min(to.line, self.lastLine());
	    if (end != from.line && to.ch == 0 && nonWS.test(self.getLine(end))) --end;

	    var pad = options.padding == null ? " " : options.padding;
	    if (from.line > end) return;

	    self.operation(function() {
	      if (options.fullLines != false) {
	        var lastLineHasText = nonWS.test(self.getLine(end));
	        self.replaceRange(pad + endString, Pos(end));
	        self.replaceRange(startString + pad, Pos(from.line, 0));
	        var lead = options.blockCommentLead || mode.blockCommentLead;
	        if (lead != null) for (var i = from.line + 1; i <= end; ++i)
	          if (i != end || lastLineHasText)
	            self.replaceRange(lead + pad, Pos(i, 0));
	      } else {
	        self.replaceRange(endString, to);
	        self.replaceRange(startString, from);
	      }
	    });
	  });

	  CodeMirror.defineExtension("uncomment", function(from, to, options) {
	    if (!options) options = noOptions;
	    var self = this, mode = self.getModeAt(from);
	    var end = Math.min(to.ch != 0 || to.line == from.line ? to.line : to.line - 1, self.lastLine()), start = Math.min(from.line, end);

	    // Try finding line comments
	    var lineString = options.lineComment || mode.lineComment, lines = [];
	    var pad = options.padding == null ? " " : options.padding, didSomething;
	    lineComment: {
	      if (!lineString) break lineComment;
	      for (var i = start; i <= end; ++i) {
	        var line = self.getLine(i);
	        var found = line.indexOf(lineString);
	        if (found > -1 && !/comment/.test(self.getTokenTypeAt(Pos(i, found + 1)))) found = -1;
	        if (found == -1 && (i != end || i == start) && nonWS.test(line)) break lineComment;
	        if (found > -1 && nonWS.test(line.slice(0, found))) break lineComment;
	        lines.push(line);
	      }
	      self.operation(function() {
	        for (var i = start; i <= end; ++i) {
	          var line = lines[i - start];
	          var pos = line.indexOf(lineString), endPos = pos + lineString.length;
	          if (pos < 0) continue;
	          if (line.slice(endPos, endPos + pad.length) == pad) endPos += pad.length;
	          didSomething = true;
	          self.replaceRange("", Pos(i, pos), Pos(i, endPos));
	        }
	      });
	      if (didSomething) return true;
	    }

	    // Try block comments
	    var startString = options.blockCommentStart || mode.blockCommentStart;
	    var endString = options.blockCommentEnd || mode.blockCommentEnd;
	    if (!startString || !endString) return false;
	    var lead = options.blockCommentLead || mode.blockCommentLead;
	    var startLine = self.getLine(start), endLine = end == start ? startLine : self.getLine(end);
	    var open = startLine.indexOf(startString), close = endLine.lastIndexOf(endString);
	    if (close == -1 && start != end) {
	      endLine = self.getLine(--end);
	      close = endLine.lastIndexOf(endString);
	    }
	    if (open == -1 || close == -1 ||
	        !/comment/.test(self.getTokenTypeAt(Pos(start, open + 1))) ||
	        !/comment/.test(self.getTokenTypeAt(Pos(end, close + 1))))
	      return false;

	    // Avoid killing block comments completely outside the selection.
	    // Positions of the last startString before the start of the selection, and the first endString after it.
	    var lastStart = startLine.lastIndexOf(startString, from.ch);
	    var firstEnd = lastStart == -1 ? -1 : startLine.slice(0, from.ch).indexOf(endString, lastStart + startString.length);
	    if (lastStart != -1 && firstEnd != -1 && firstEnd + endString.length != from.ch) return false;
	    // Positions of the first endString after the end of the selection, and the last startString before it.
	    firstEnd = endLine.indexOf(endString, to.ch);
	    var almostLastStart = endLine.slice(to.ch).lastIndexOf(startString, firstEnd - to.ch);
	    lastStart = (firstEnd == -1 || almostLastStart == -1) ? -1 : to.ch + almostLastStart;
	    if (firstEnd != -1 && lastStart != -1 && lastStart != to.ch) return false;

	    self.operation(function() {
	      self.replaceRange("", Pos(end, close - (pad && endLine.slice(close - pad.length, close) == pad ? pad.length : 0)),
	                        Pos(end, close + endString.length));
	      var openEnd = open + startString.length;
	      if (pad && startLine.slice(openEnd, openEnd + pad.length) == pad) openEnd += pad.length;
	      self.replaceRange("", Pos(start, open), Pos(start, openEnd));
	      if (lead) for (var i = start + 1; i <= end; ++i) {
	        var line = self.getLine(i), found = line.indexOf(lead);
	        if (found == -1 || nonWS.test(line.slice(0, found))) continue;
	        var foundEnd = found + lead.length;
	        if (pad && line.slice(foundEnd, foundEnd + pad.length) == pad) foundEnd += pad.length;
	        self.replaceRange("", Pos(i, found), Pos(i, foundEnd));
	      }
	    });
	    return true;
	  });
	});


/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	(function(mod) {
	  if (true) // CommonJS
	    mod(__webpack_require__(178));
	  else if (typeof define == "function" && define.amd) // AMD
	    define(["../../lib/codemirror"], mod);
	  else // Plain browser env
	    mod(CodeMirror);
	})(function(CodeMirror) {
	  var ie_lt8 = /MSIE \d/.test(navigator.userAgent) &&
	    (document.documentMode == null || document.documentMode < 8);

	  var Pos = CodeMirror.Pos;

	  var matching = {"(": ")>", ")": "(<", "[": "]>", "]": "[<", "{": "}>", "}": "{<"};

	  function findMatchingBracket(cm, where, strict, config) {
	    var line = cm.getLineHandle(where.line), pos = where.ch - 1;
	    var match = (pos >= 0 && matching[line.text.charAt(pos)]) || matching[line.text.charAt(++pos)];
	    if (!match) return null;
	    var dir = match.charAt(1) == ">" ? 1 : -1;
	    if (strict && (dir > 0) != (pos == where.ch)) return null;
	    var style = cm.getTokenTypeAt(Pos(where.line, pos + 1));

	    var found = scanForBracket(cm, Pos(where.line, pos + (dir > 0 ? 1 : 0)), dir, style || null, config);
	    if (found == null) return null;
	    return {from: Pos(where.line, pos), to: found && found.pos,
	            match: found && found.ch == match.charAt(0), forward: dir > 0};
	  }

	  // bracketRegex is used to specify which type of bracket to scan
	  // should be a regexp, e.g. /[[\]]/
	  //
	  // Note: If "where" is on an open bracket, then this bracket is ignored.
	  //
	  // Returns false when no bracket was found, null when it reached
	  // maxScanLines and gave up
	  function scanForBracket(cm, where, dir, style, config) {
	    var maxScanLen = (config && config.maxScanLineLength) || 10000;
	    var maxScanLines = (config && config.maxScanLines) || 1000;

	    var stack = [];
	    var re = config && config.bracketRegex ? config.bracketRegex : /[(){}[\]]/;
	    var lineEnd = dir > 0 ? Math.min(where.line + maxScanLines, cm.lastLine() + 1)
	                          : Math.max(cm.firstLine() - 1, where.line - maxScanLines);
	    for (var lineNo = where.line; lineNo != lineEnd; lineNo += dir) {
	      var line = cm.getLine(lineNo);
	      if (!line) continue;
	      var pos = dir > 0 ? 0 : line.length - 1, end = dir > 0 ? line.length : -1;
	      if (line.length > maxScanLen) continue;
	      if (lineNo == where.line) pos = where.ch - (dir < 0 ? 1 : 0);
	      for (; pos != end; pos += dir) {
	        var ch = line.charAt(pos);
	        if (re.test(ch) && (style === undefined || cm.getTokenTypeAt(Pos(lineNo, pos + 1)) == style)) {
	          var match = matching[ch];
	          if ((match.charAt(1) == ">") == (dir > 0)) stack.push(ch);
	          else if (!stack.length) return {pos: Pos(lineNo, pos), ch: ch};
	          else stack.pop();
	        }
	      }
	    }
	    return lineNo - dir == (dir > 0 ? cm.lastLine() : cm.firstLine()) ? false : null;
	  }

	  function matchBrackets(cm, autoclear, config) {
	    // Disable brace matching in long lines, since it'll cause hugely slow updates
	    var maxHighlightLen = cm.state.matchBrackets.maxHighlightLineLength || 1000;
	    var marks = [], ranges = cm.listSelections();
	    for (var i = 0; i < ranges.length; i++) {
	      var match = ranges[i].empty() && findMatchingBracket(cm, ranges[i].head, false, config);
	      if (match && cm.getLine(match.from.line).length <= maxHighlightLen) {
	        var style = match.match ? "CodeMirror-matchingbracket" : "CodeMirror-nonmatchingbracket";
	        marks.push(cm.markText(match.from, Pos(match.from.line, match.from.ch + 1), {className: style}));
	        if (match.to && cm.getLine(match.to.line).length <= maxHighlightLen)
	          marks.push(cm.markText(match.to, Pos(match.to.line, match.to.ch + 1), {className: style}));
	      }
	    }

	    if (marks.length) {
	      // Kludge to work around the IE bug from issue #1193, where text
	      // input stops going to the textare whever this fires.
	      if (ie_lt8 && cm.state.focused) cm.focus();

	      var clear = function() {
	        cm.operation(function() {
	          for (var i = 0; i < marks.length; i++) marks[i].clear();
	        });
	      };
	      if (autoclear) setTimeout(clear, 800);
	      else return clear;
	    }
	  }

	  var currentlyHighlighted = null;
	  function doMatchBrackets(cm) {
	    cm.operation(function() {
	      if (currentlyHighlighted) {currentlyHighlighted(); currentlyHighlighted = null;}
	      currentlyHighlighted = matchBrackets(cm, false, cm.state.matchBrackets);
	    });
	  }

	  CodeMirror.defineOption("matchBrackets", false, function(cm, val, old) {
	    if (old && old != CodeMirror.Init)
	      cm.off("cursorActivity", doMatchBrackets);
	    if (val) {
	      cm.state.matchBrackets = typeof val == "object" ? val : {};
	      cm.on("cursorActivity", doMatchBrackets);
	    }
	  });

	  CodeMirror.defineExtension("matchBrackets", function() {matchBrackets(this, true);});
	  CodeMirror.defineExtension("findMatchingBracket", function(pos, strict, config){
	    return findMatchingBracket(this, pos, strict, config);
	  });
	  CodeMirror.defineExtension("scanForBracket", function(pos, dir, style, config){
	    return scanForBracket(this, pos, dir, style, config);
	  });
	});


/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	(function(mod) {
	  if (true) // CommonJS
	    mod(__webpack_require__(178));
	  else if (typeof define == "function" && define.amd) // AMD
	    define(["../../lib/codemirror"], mod);
	  else // Plain browser env
	    mod(CodeMirror);
	})(function(CodeMirror) {
	  var defaults = {
	    pairs: "()[]{}''\"\"",
	    triples: "",
	    explode: "[]{}"
	  };

	  var Pos = CodeMirror.Pos;

	  CodeMirror.defineOption("autoCloseBrackets", false, function(cm, val, old) {
	    if (old && old != CodeMirror.Init) {
	      cm.removeKeyMap(keyMap);
	      cm.state.closeBrackets = null;
	    }
	    if (val) {
	      cm.state.closeBrackets = val;
	      cm.addKeyMap(keyMap);
	    }
	  });

	  function getOption(conf, name) {
	    if (name == "pairs" && typeof conf == "string") return conf;
	    if (typeof conf == "object" && conf[name] != null) return conf[name];
	    return defaults[name];
	  }

	  var bind = defaults.pairs + "`";
	  var keyMap = {Backspace: handleBackspace, Enter: handleEnter};
	  for (var i = 0; i < bind.length; i++)
	    keyMap["'" + bind.charAt(i) + "'"] = handler(bind.charAt(i));

	  function handler(ch) {
	    return function(cm) { return handleChar(cm, ch); };
	  }

	  function getConfig(cm) {
	    var deflt = cm.state.closeBrackets;
	    if (!deflt) return null;
	    var mode = cm.getModeAt(cm.getCursor());
	    return mode.closeBrackets || deflt;
	  }

	  function handleBackspace(cm) {
	    var conf = getConfig(cm);
	    if (!conf || cm.getOption("disableInput")) return CodeMirror.Pass;

	    var pairs = getOption(conf, "pairs");
	    var ranges = cm.listSelections();
	    for (var i = 0; i < ranges.length; i++) {
	      if (!ranges[i].empty()) return CodeMirror.Pass;
	      var around = charsAround(cm, ranges[i].head);
	      if (!around || pairs.indexOf(around) % 2 != 0) return CodeMirror.Pass;
	    }
	    for (var i = ranges.length - 1; i >= 0; i--) {
	      var cur = ranges[i].head;
	      cm.replaceRange("", Pos(cur.line, cur.ch - 1), Pos(cur.line, cur.ch + 1), "+delete");
	    }
	  }

	  function handleEnter(cm) {
	    var conf = getConfig(cm);
	    var explode = conf && getOption(conf, "explode");
	    if (!explode || cm.getOption("disableInput")) return CodeMirror.Pass;

	    var ranges = cm.listSelections();
	    for (var i = 0; i < ranges.length; i++) {
	      if (!ranges[i].empty()) return CodeMirror.Pass;
	      var around = charsAround(cm, ranges[i].head);
	      if (!around || explode.indexOf(around) % 2 != 0) return CodeMirror.Pass;
	    }
	    cm.operation(function() {
	      cm.replaceSelection("\n\n", null);
	      cm.execCommand("goCharLeft");
	      ranges = cm.listSelections();
	      for (var i = 0; i < ranges.length; i++) {
	        var line = ranges[i].head.line;
	        cm.indentLine(line, null, true);
	        cm.indentLine(line + 1, null, true);
	      }
	    });
	  }

	  function contractSelection(sel) {
	    var inverted = CodeMirror.cmpPos(sel.anchor, sel.head) > 0;
	    return {anchor: new Pos(sel.anchor.line, sel.anchor.ch + (inverted ? -1 : 1)),
	            head: new Pos(sel.head.line, sel.head.ch + (inverted ? 1 : -1))};
	  }

	  function handleChar(cm, ch) {
	    var conf = getConfig(cm);
	    if (!conf || cm.getOption("disableInput")) return CodeMirror.Pass;

	    var pairs = getOption(conf, "pairs");
	    var pos = pairs.indexOf(ch);
	    if (pos == -1) return CodeMirror.Pass;
	    var triples = getOption(conf, "triples");

	    var identical = pairs.charAt(pos + 1) == ch;
	    var ranges = cm.listSelections();
	    var opening = pos % 2 == 0;

	    var type, next;
	    for (var i = 0; i < ranges.length; i++) {
	      var range = ranges[i], cur = range.head, curType;
	      var next = cm.getRange(cur, Pos(cur.line, cur.ch + 1));
	      if (opening && !range.empty()) {
	        curType = "surround";
	      } else if ((identical || !opening) && next == ch) {
	        if (triples.indexOf(ch) >= 0 && cm.getRange(cur, Pos(cur.line, cur.ch + 3)) == ch + ch + ch)
	          curType = "skipThree";
	        else
	          curType = "skip";
	      } else if (identical && cur.ch > 1 && triples.indexOf(ch) >= 0 &&
	                 cm.getRange(Pos(cur.line, cur.ch - 2), cur) == ch + ch &&
	                 (cur.ch <= 2 || cm.getRange(Pos(cur.line, cur.ch - 3), Pos(cur.line, cur.ch - 2)) != ch)) {
	        curType = "addFour";
	      } else if (identical) {
	        if (!CodeMirror.isWordChar(next) && enteringString(cm, cur, ch)) curType = "both";
	        else return CodeMirror.Pass;
	      } else if (opening && (cm.getLine(cur.line).length == cur.ch ||
	                             isClosingBracket(next, pairs) ||
	                             /\s/.test(next))) {
	        curType = "both";
	      } else {
	        return CodeMirror.Pass;
	      }
	      if (!type) type = curType;
	      else if (type != curType) return CodeMirror.Pass;
	    }

	    var left = pos % 2 ? pairs.charAt(pos - 1) : ch;
	    var right = pos % 2 ? ch : pairs.charAt(pos + 1);
	    cm.operation(function() {
	      if (type == "skip") {
	        cm.execCommand("goCharRight");
	      } else if (type == "skipThree") {
	        for (var i = 0; i < 3; i++)
	          cm.execCommand("goCharRight");
	      } else if (type == "surround") {
	        var sels = cm.getSelections();
	        for (var i = 0; i < sels.length; i++)
	          sels[i] = left + sels[i] + right;
	        cm.replaceSelections(sels, "around");
	        sels = cm.listSelections().slice();
	        for (var i = 0; i < sels.length; i++)
	          sels[i] = contractSelection(sels[i]);
	        cm.setSelections(sels);
	      } else if (type == "both") {
	        cm.replaceSelection(left + right, null);
	        cm.triggerElectric(left + right);
	        cm.execCommand("goCharLeft");
	      } else if (type == "addFour") {
	        cm.replaceSelection(left + left + left + left, "before");
	        cm.execCommand("goCharRight");
	      }
	    });
	  }

	  function isClosingBracket(ch, pairs) {
	    var pos = pairs.lastIndexOf(ch);
	    return pos > -1 && pos % 2 == 1;
	  }

	  function charsAround(cm, pos) {
	    var str = cm.getRange(Pos(pos.line, pos.ch - 1),
	                          Pos(pos.line, pos.ch + 1));
	    return str.length == 2 ? str : null;
	  }

	  // Project the token type that will exists after the given char is
	  // typed, and use it to determine whether it would cause the start
	  // of a string token.
	  function enteringString(cm, pos, ch) {
	    var line = cm.getLine(pos.line);
	    var token = cm.getTokenAt(pos);
	    if (/\bstring2?\b/.test(token.type)) return false;
	    var stream = new CodeMirror.StringStream(line.slice(0, pos.ch) + ch + line.slice(pos.ch), 4);
	    stream.pos = stream.start = token.start;
	    for (;;) {
	      var type1 = cm.getMode().token(stream, token.state);
	      if (stream.pos >= pos.ch + 1) return /\bstring2?\b/.test(type1);
	      stream.start = stream.pos;
	    }
	  }
	});


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	(function(mod) {
	  if (true) // CommonJS
	    mod(__webpack_require__(178));
	  else if (typeof define == "function" && define.amd) // AMD
	    define(["../../lib/codemirror"], mod);
	  else // Plain browser env
	    mod(CodeMirror);
	})(function(CodeMirror) {
	  "use strict";
	  var GUTTER_ID = "CodeMirror-lint-markers";

	  function showTooltip(e, content) {
	    var tt = document.createElement("div");
	    tt.className = "CodeMirror-lint-tooltip";
	    tt.appendChild(content.cloneNode(true));
	    document.body.appendChild(tt);

	    function position(e) {
	      if (!tt.parentNode) return CodeMirror.off(document, "mousemove", position);
	      tt.style.top = Math.max(0, e.clientY - tt.offsetHeight - 5) + "px";
	      tt.style.left = (e.clientX + 5) + "px";
	    }
	    CodeMirror.on(document, "mousemove", position);
	    position(e);
	    if (tt.style.opacity != null) tt.style.opacity = 1;
	    return tt;
	  }
	  function rm(elt) {
	    if (elt.parentNode) elt.parentNode.removeChild(elt);
	  }
	  function hideTooltip(tt) {
	    if (!tt.parentNode) return;
	    if (tt.style.opacity == null) rm(tt);
	    tt.style.opacity = 0;
	    setTimeout(function() { rm(tt); }, 600);
	  }

	  function showTooltipFor(e, content, node) {
	    var tooltip = showTooltip(e, content);
	    function hide() {
	      CodeMirror.off(node, "mouseout", hide);
	      if (tooltip) { hideTooltip(tooltip); tooltip = null; }
	    }
	    var poll = setInterval(function() {
	      if (tooltip) for (var n = node;; n = n.parentNode) {
	        if (n && n.nodeType == 11) n = n.host;
	        if (n == document.body) return;
	        if (!n) { hide(); break; }
	      }
	      if (!tooltip) return clearInterval(poll);
	    }, 400);
	    CodeMirror.on(node, "mouseout", hide);
	  }

	  function LintState(cm, options, hasGutter) {
	    this.marked = [];
	    this.options = options;
	    this.timeout = null;
	    this.hasGutter = hasGutter;
	    this.onMouseOver = function(e) { onMouseOver(cm, e); };
	    this.waitingFor = 0
	  }

	  function parseOptions(_cm, options) {
	    if (options instanceof Function) return {getAnnotations: options};
	    if (!options || options === true) options = {};
	    return options;
	  }

	  function clearMarks(cm) {
	    var state = cm.state.lint;
	    if (state.hasGutter) cm.clearGutter(GUTTER_ID);
	    for (var i = 0; i < state.marked.length; ++i)
	      state.marked[i].clear();
	    state.marked.length = 0;
	  }

	  function makeMarker(labels, severity, multiple, tooltips) {
	    var marker = document.createElement("div"), inner = marker;
	    marker.className = "CodeMirror-lint-marker-" + severity;
	    if (multiple) {
	      inner = marker.appendChild(document.createElement("div"));
	      inner.className = "CodeMirror-lint-marker-multiple";
	    }

	    if (tooltips != false) CodeMirror.on(inner, "mouseover", function(e) {
	      showTooltipFor(e, labels, inner);
	    });

	    return marker;
	  }

	  function getMaxSeverity(a, b) {
	    if (a == "error") return a;
	    else return b;
	  }

	  function groupByLine(annotations) {
	    var lines = [];
	    for (var i = 0; i < annotations.length; ++i) {
	      var ann = annotations[i], line = ann.from.line;
	      (lines[line] || (lines[line] = [])).push(ann);
	    }
	    return lines;
	  }

	  function annotationTooltip(ann) {
	    var severity = ann.severity;
	    if (!severity) severity = "error";
	    var tip = document.createElement("div");
	    tip.className = "CodeMirror-lint-message-" + severity;
	    tip.appendChild(document.createTextNode(ann.message));
	    return tip;
	  }

	  function lintAsync(cm, getAnnotations, passOptions) {
	    var state = cm.state.lint
	    var id = ++state.waitingFor
	    function abort() {
	      id = -1
	      cm.off("change", abort)
	    }
	    cm.on("change", abort)
	    getAnnotations(cm.getValue(), function(annotations, arg2) {
	      cm.off("change", abort)
	      if (state.waitingFor != id) return
	      if (arg2 && annotations instanceof CodeMirror) annotations = arg2
	      updateLinting(cm, annotations)
	    }, passOptions, cm);
	  }

	  function startLinting(cm) {
	    var state = cm.state.lint, options = state.options;
	    var passOptions = options.options || options; // Support deprecated passing of `options` property in options
	    var getAnnotations = options.getAnnotations || cm.getHelper(CodeMirror.Pos(0, 0), "lint");
	    if (!getAnnotations) return;
	    if (options.async || getAnnotations.async) {
	      lintAsync(cm, getAnnotations, passOptions)
	    } else {
	      updateLinting(cm, getAnnotations(cm.getValue(), passOptions, cm));
	    }
	  }

	  function updateLinting(cm, annotationsNotSorted) {
	    clearMarks(cm);
	    var state = cm.state.lint, options = state.options;

	    var annotations = groupByLine(annotationsNotSorted);

	    for (var line = 0; line < annotations.length; ++line) {
	      var anns = annotations[line];
	      if (!anns) continue;

	      var maxSeverity = null;
	      var tipLabel = state.hasGutter && document.createDocumentFragment();

	      for (var i = 0; i < anns.length; ++i) {
	        var ann = anns[i];
	        var severity = ann.severity;
	        if (!severity) severity = "error";
	        maxSeverity = getMaxSeverity(maxSeverity, severity);

	        if (options.formatAnnotation) ann = options.formatAnnotation(ann);
	        if (state.hasGutter) tipLabel.appendChild(annotationTooltip(ann));

	        if (ann.to) state.marked.push(cm.markText(ann.from, ann.to, {
	          className: "CodeMirror-lint-mark-" + severity,
	          __annotation: ann
	        }));
	      }

	      if (state.hasGutter)
	        cm.setGutterMarker(line, GUTTER_ID, makeMarker(tipLabel, maxSeverity, anns.length > 1,
	                                                       state.options.tooltips));
	    }
	    if (options.onUpdateLinting) options.onUpdateLinting(annotationsNotSorted, annotations, cm);
	  }

	  function onChange(cm) {
	    var state = cm.state.lint;
	    if (!state) return;
	    clearTimeout(state.timeout);
	    state.timeout = setTimeout(function(){startLinting(cm);}, state.options.delay || 500);
	  }

	  function popupTooltips(annotations, e) {
	    var target = e.target || e.srcElement;
	    var tooltip = document.createDocumentFragment();
	    for (var i = 0; i < annotations.length; i++) {
	      var ann = annotations[i];
	      tooltip.appendChild(annotationTooltip(ann));
	    }
	    showTooltipFor(e, tooltip, target);
	  }

	  function onMouseOver(cm, e) {
	    var target = e.target || e.srcElement;
	    if (!/\bCodeMirror-lint-mark-/.test(target.className)) return;
	    var box = target.getBoundingClientRect(), x = (box.left + box.right) / 2, y = (box.top + box.bottom) / 2;
	    var spans = cm.findMarksAt(cm.coordsChar({left: x, top: y}, "client"));

	    var annotations = [];
	    for (var i = 0; i < spans.length; ++i) {
	      var ann = spans[i].__annotation;
	      if (ann) annotations.push(ann);
	    }
	    if (annotations.length) popupTooltips(annotations, e);
	  }

	  CodeMirror.defineOption("lint", false, function(cm, val, old) {
	    if (old && old != CodeMirror.Init) {
	      clearMarks(cm);
	      if (cm.state.lint.options.lintOnChange !== false)
	        cm.off("change", onChange);
	      CodeMirror.off(cm.getWrapperElement(), "mouseover", cm.state.lint.onMouseOver);
	      clearTimeout(cm.state.lint.timeout);
	      delete cm.state.lint;
	    }

	    if (val) {
	      var gutters = cm.getOption("gutters"), hasLintGutter = false;
	      for (var i = 0; i < gutters.length; ++i) if (gutters[i] == GUTTER_ID) hasLintGutter = true;
	      var state = cm.state.lint = new LintState(cm, parseOptions(cm, val), hasLintGutter);
	      if (state.options.lintOnChange !== false)
	        cm.on("change", onChange);
	      if (state.options.tooltips != false)
	        CodeMirror.on(cm.getWrapperElement(), "mouseover", state.onMouseOver);

	      startLinting(cm);
	    }
	  });

	  CodeMirror.defineExtension("performLint", function() {
	    if (this.state.lint) startLinting(this);
	  });
	});


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	// A rough approximation of Sublime Text's keybindings
	// Depends on addon/search/searchcursor.js and optionally addon/dialog/dialogs.js

	(function(mod) {
	  if (true) // CommonJS
	    mod(__webpack_require__(178), __webpack_require__(185), __webpack_require__(181));
	  else if (typeof define == "function" && define.amd) // AMD
	    define(["../lib/codemirror", "../addon/search/searchcursor", "../addon/edit/matchbrackets"], mod);
	  else // Plain browser env
	    mod(CodeMirror);
	})(function(CodeMirror) {
	  "use strict";

	  var map = CodeMirror.keyMap.sublime = {fallthrough: "default"};
	  var cmds = CodeMirror.commands;
	  var Pos = CodeMirror.Pos;
	  var mac = CodeMirror.keyMap["default"] == CodeMirror.keyMap.macDefault;
	  var ctrl = mac ? "Cmd-" : "Ctrl-";

	  // This is not exactly Sublime's algorithm. I couldn't make heads or tails of that.
	  function findPosSubword(doc, start, dir) {
	    if (dir < 0 && start.ch == 0) return doc.clipPos(Pos(start.line - 1));
	    var line = doc.getLine(start.line);
	    if (dir > 0 && start.ch >= line.length) return doc.clipPos(Pos(start.line + 1, 0));
	    var state = "start", type;
	    for (var pos = start.ch, e = dir < 0 ? 0 : line.length, i = 0; pos != e; pos += dir, i++) {
	      var next = line.charAt(dir < 0 ? pos - 1 : pos);
	      var cat = next != "_" && CodeMirror.isWordChar(next) ? "w" : "o";
	      if (cat == "w" && next.toUpperCase() == next) cat = "W";
	      if (state == "start") {
	        if (cat != "o") { state = "in"; type = cat; }
	      } else if (state == "in") {
	        if (type != cat) {
	          if (type == "w" && cat == "W" && dir < 0) pos--;
	          if (type == "W" && cat == "w" && dir > 0) { type = "w"; continue; }
	          break;
	        }
	      }
	    }
	    return Pos(start.line, pos);
	  }

	  function moveSubword(cm, dir) {
	    cm.extendSelectionsBy(function(range) {
	      if (cm.display.shift || cm.doc.extend || range.empty())
	        return findPosSubword(cm.doc, range.head, dir);
	      else
	        return dir < 0 ? range.from() : range.to();
	    });
	  }

	  cmds[map["Alt-Left"] = "goSubwordLeft"] = function(cm) { moveSubword(cm, -1); };
	  cmds[map["Alt-Right"] = "goSubwordRight"] = function(cm) { moveSubword(cm, 1); };

	  if (mac) map["Cmd-Left"] = "goLineStartSmart";

	  var scrollLineCombo = mac ? "Ctrl-Alt-" : "Ctrl-";

	  cmds[map[scrollLineCombo + "Up"] = "scrollLineUp"] = function(cm) {
	    var info = cm.getScrollInfo();
	    if (!cm.somethingSelected()) {
	      var visibleBottomLine = cm.lineAtHeight(info.top + info.clientHeight, "local");
	      if (cm.getCursor().line >= visibleBottomLine)
	        cm.execCommand("goLineUp");
	    }
	    cm.scrollTo(null, info.top - cm.defaultTextHeight());
	  };
	  cmds[map[scrollLineCombo + "Down"] = "scrollLineDown"] = function(cm) {
	    var info = cm.getScrollInfo();
	    if (!cm.somethingSelected()) {
	      var visibleTopLine = cm.lineAtHeight(info.top, "local")+1;
	      if (cm.getCursor().line <= visibleTopLine)
	        cm.execCommand("goLineDown");
	    }
	    cm.scrollTo(null, info.top + cm.defaultTextHeight());
	  };

	  cmds[map["Shift-" + ctrl + "L"] = "splitSelectionByLine"] = function(cm) {
	    var ranges = cm.listSelections(), lineRanges = [];
	    for (var i = 0; i < ranges.length; i++) {
	      var from = ranges[i].from(), to = ranges[i].to();
	      for (var line = from.line; line <= to.line; ++line)
	        if (!(to.line > from.line && line == to.line && to.ch == 0))
	          lineRanges.push({anchor: line == from.line ? from : Pos(line, 0),
	                           head: line == to.line ? to : Pos(line)});
	    }
	    cm.setSelections(lineRanges, 0);
	  };

	  map["Shift-Tab"] = "indentLess";

	  cmds[map["Esc"] = "singleSelectionTop"] = function(cm) {
	    var range = cm.listSelections()[0];
	    cm.setSelection(range.anchor, range.head, {scroll: false});
	  };

	  cmds[map[ctrl + "L"] = "selectLine"] = function(cm) {
	    var ranges = cm.listSelections(), extended = [];
	    for (var i = 0; i < ranges.length; i++) {
	      var range = ranges[i];
	      extended.push({anchor: Pos(range.from().line, 0),
	                     head: Pos(range.to().line + 1, 0)});
	    }
	    cm.setSelections(extended);
	  };

	  map["Shift-Ctrl-K"] = "deleteLine";

	  function insertLine(cm, above) {
	    if (cm.isReadOnly()) return CodeMirror.Pass
	    cm.operation(function() {
	      var len = cm.listSelections().length, newSelection = [], last = -1;
	      for (var i = 0; i < len; i++) {
	        var head = cm.listSelections()[i].head;
	        if (head.line <= last) continue;
	        var at = Pos(head.line + (above ? 0 : 1), 0);
	        cm.replaceRange("\n", at, null, "+insertLine");
	        cm.indentLine(at.line, null, true);
	        newSelection.push({head: at, anchor: at});
	        last = head.line + 1;
	      }
	      cm.setSelections(newSelection);
	    });
	  }

	  cmds[map[ctrl + "Enter"] = "insertLineAfter"] = function(cm) { return insertLine(cm, false); };

	  cmds[map["Shift-" + ctrl + "Enter"] = "insertLineBefore"] = function(cm) { return insertLine(cm, true); };

	  function wordAt(cm, pos) {
	    var start = pos.ch, end = start, line = cm.getLine(pos.line);
	    while (start && CodeMirror.isWordChar(line.charAt(start - 1))) --start;
	    while (end < line.length && CodeMirror.isWordChar(line.charAt(end))) ++end;
	    return {from: Pos(pos.line, start), to: Pos(pos.line, end), word: line.slice(start, end)};
	  }

	  cmds[map[ctrl + "D"] = "selectNextOccurrence"] = function(cm) {
	    var from = cm.getCursor("from"), to = cm.getCursor("to");
	    var fullWord = cm.state.sublimeFindFullWord == cm.doc.sel;
	    if (CodeMirror.cmpPos(from, to) == 0) {
	      var word = wordAt(cm, from);
	      if (!word.word) return;
	      cm.setSelection(word.from, word.to);
	      fullWord = true;
	    } else {
	      var text = cm.getRange(from, to);
	      var query = fullWord ? new RegExp("\\b" + text + "\\b") : text;
	      var cur = cm.getSearchCursor(query, to);
	      if (cur.findNext()) {
	        cm.addSelection(cur.from(), cur.to());
	      } else {
	        cur = cm.getSearchCursor(query, Pos(cm.firstLine(), 0));
	        if (cur.findNext())
	          cm.addSelection(cur.from(), cur.to());
	      }
	    }
	    if (fullWord)
	      cm.state.sublimeFindFullWord = cm.doc.sel;
	  };

	  var mirror = "(){}[]";
	  function selectBetweenBrackets(cm) {
	    var pos = cm.getCursor(), opening = cm.scanForBracket(pos, -1);
	    if (!opening) return;
	    for (;;) {
	      var closing = cm.scanForBracket(pos, 1);
	      if (!closing) return;
	      if (closing.ch == mirror.charAt(mirror.indexOf(opening.ch) + 1)) {
	        cm.setSelection(Pos(opening.pos.line, opening.pos.ch + 1), closing.pos, false);
	        return true;
	      }
	      pos = Pos(closing.pos.line, closing.pos.ch + 1);
	    }
	  }

	  cmds[map["Shift-" + ctrl + "Space"] = "selectScope"] = function(cm) {
	    selectBetweenBrackets(cm) || cm.execCommand("selectAll");
	  };
	  cmds[map["Shift-" + ctrl + "M"] = "selectBetweenBrackets"] = function(cm) {
	    if (!selectBetweenBrackets(cm)) return CodeMirror.Pass;
	  };

	  cmds[map[ctrl + "M"] = "goToBracket"] = function(cm) {
	    cm.extendSelectionsBy(function(range) {
	      var next = cm.scanForBracket(range.head, 1);
	      if (next && CodeMirror.cmpPos(next.pos, range.head) != 0) return next.pos;
	      var prev = cm.scanForBracket(range.head, -1);
	      return prev && Pos(prev.pos.line, prev.pos.ch + 1) || range.head;
	    });
	  };

	  var swapLineCombo = mac ? "Cmd-Ctrl-" : "Shift-Ctrl-";

	  cmds[map[swapLineCombo + "Up"] = "swapLineUp"] = function(cm) {
	    if (cm.isReadOnly()) return CodeMirror.Pass
	    var ranges = cm.listSelections(), linesToMove = [], at = cm.firstLine() - 1, newSels = [];
	    for (var i = 0; i < ranges.length; i++) {
	      var range = ranges[i], from = range.from().line - 1, to = range.to().line;
	      newSels.push({anchor: Pos(range.anchor.line - 1, range.anchor.ch),
	                    head: Pos(range.head.line - 1, range.head.ch)});
	      if (range.to().ch == 0 && !range.empty()) --to;
	      if (from > at) linesToMove.push(from, to);
	      else if (linesToMove.length) linesToMove[linesToMove.length - 1] = to;
	      at = to;
	    }
	    cm.operation(function() {
	      for (var i = 0; i < linesToMove.length; i += 2) {
	        var from = linesToMove[i], to = linesToMove[i + 1];
	        var line = cm.getLine(from);
	        cm.replaceRange("", Pos(from, 0), Pos(from + 1, 0), "+swapLine");
	        if (to > cm.lastLine())
	          cm.replaceRange("\n" + line, Pos(cm.lastLine()), null, "+swapLine");
	        else
	          cm.replaceRange(line + "\n", Pos(to, 0), null, "+swapLine");
	      }
	      cm.setSelections(newSels);
	      cm.scrollIntoView();
	    });
	  };

	  cmds[map[swapLineCombo + "Down"] = "swapLineDown"] = function(cm) {
	    if (cm.isReadOnly()) return CodeMirror.Pass
	    var ranges = cm.listSelections(), linesToMove = [], at = cm.lastLine() + 1;
	    for (var i = ranges.length - 1; i >= 0; i--) {
	      var range = ranges[i], from = range.to().line + 1, to = range.from().line;
	      if (range.to().ch == 0 && !range.empty()) from--;
	      if (from < at) linesToMove.push(from, to);
	      else if (linesToMove.length) linesToMove[linesToMove.length - 1] = to;
	      at = to;
	    }
	    cm.operation(function() {
	      for (var i = linesToMove.length - 2; i >= 0; i -= 2) {
	        var from = linesToMove[i], to = linesToMove[i + 1];
	        var line = cm.getLine(from);
	        if (from == cm.lastLine())
	          cm.replaceRange("", Pos(from - 1), Pos(from), "+swapLine");
	        else
	          cm.replaceRange("", Pos(from, 0), Pos(from + 1, 0), "+swapLine");
	        cm.replaceRange(line + "\n", Pos(to, 0), null, "+swapLine");
	      }
	      cm.scrollIntoView();
	    });
	  };

	  cmds[map[ctrl + "/"] = "toggleCommentIndented"] = function(cm) {
	    cm.toggleComment({ indent: true });
	  }

	  cmds[map[ctrl + "J"] = "joinLines"] = function(cm) {
	    var ranges = cm.listSelections(), joined = [];
	    for (var i = 0; i < ranges.length; i++) {
	      var range = ranges[i], from = range.from();
	      var start = from.line, end = range.to().line;
	      while (i < ranges.length - 1 && ranges[i + 1].from().line == end)
	        end = ranges[++i].to().line;
	      joined.push({start: start, end: end, anchor: !range.empty() && from});
	    }
	    cm.operation(function() {
	      var offset = 0, ranges = [];
	      for (var i = 0; i < joined.length; i++) {
	        var obj = joined[i];
	        var anchor = obj.anchor && Pos(obj.anchor.line - offset, obj.anchor.ch), head;
	        for (var line = obj.start; line <= obj.end; line++) {
	          var actual = line - offset;
	          if (line == obj.end) head = Pos(actual, cm.getLine(actual).length + 1);
	          if (actual < cm.lastLine()) {
	            cm.replaceRange(" ", Pos(actual), Pos(actual + 1, /^\s*/.exec(cm.getLine(actual + 1))[0].length));
	            ++offset;
	          }
	        }
	        ranges.push({anchor: anchor || head, head: head});
	      }
	      cm.setSelections(ranges, 0);
	    });
	  };

	  cmds[map["Shift-" + ctrl + "D"] = "duplicateLine"] = function(cm) {
	    cm.operation(function() {
	      var rangeCount = cm.listSelections().length;
	      for (var i = 0; i < rangeCount; i++) {
	        var range = cm.listSelections()[i];
	        if (range.empty())
	          cm.replaceRange(cm.getLine(range.head.line) + "\n", Pos(range.head.line, 0));
	        else
	          cm.replaceRange(cm.getRange(range.from(), range.to()), range.from());
	      }
	      cm.scrollIntoView();
	    });
	  };

	  map[ctrl + "T"] = "transposeChars";

	  function sortLines(cm, caseSensitive) {
	    if (cm.isReadOnly()) return CodeMirror.Pass
	    var ranges = cm.listSelections(), toSort = [], selected;
	    for (var i = 0; i < ranges.length; i++) {
	      var range = ranges[i];
	      if (range.empty()) continue;
	      var from = range.from().line, to = range.to().line;
	      while (i < ranges.length - 1 && ranges[i + 1].from().line == to)
	        to = range[++i].to().line;
	      toSort.push(from, to);
	    }
	    if (toSort.length) selected = true;
	    else toSort.push(cm.firstLine(), cm.lastLine());

	    cm.operation(function() {
	      var ranges = [];
	      for (var i = 0; i < toSort.length; i += 2) {
	        var from = toSort[i], to = toSort[i + 1];
	        var start = Pos(from, 0), end = Pos(to);
	        var lines = cm.getRange(start, end, false);
	        if (caseSensitive)
	          lines.sort();
	        else
	          lines.sort(function(a, b) {
	            var au = a.toUpperCase(), bu = b.toUpperCase();
	            if (au != bu) { a = au; b = bu; }
	            return a < b ? -1 : a == b ? 0 : 1;
	          });
	        cm.replaceRange(lines, start, end);
	        if (selected) ranges.push({anchor: start, head: end});
	      }
	      if (selected) cm.setSelections(ranges, 0);
	    });
	  }

	  cmds[map["F9"] = "sortLines"] = function(cm) { sortLines(cm, true); };
	  cmds[map[ctrl + "F9"] = "sortLinesInsensitive"] = function(cm) { sortLines(cm, false); };

	  cmds[map["F2"] = "nextBookmark"] = function(cm) {
	    var marks = cm.state.sublimeBookmarks;
	    if (marks) while (marks.length) {
	      var current = marks.shift();
	      var found = current.find();
	      if (found) {
	        marks.push(current);
	        return cm.setSelection(found.from, found.to);
	      }
	    }
	  };

	  cmds[map["Shift-F2"] = "prevBookmark"] = function(cm) {
	    var marks = cm.state.sublimeBookmarks;
	    if (marks) while (marks.length) {
	      marks.unshift(marks.pop());
	      var found = marks[marks.length - 1].find();
	      if (!found)
	        marks.pop();
	      else
	        return cm.setSelection(found.from, found.to);
	    }
	  };

	  cmds[map[ctrl + "F2"] = "toggleBookmark"] = function(cm) {
	    var ranges = cm.listSelections();
	    var marks = cm.state.sublimeBookmarks || (cm.state.sublimeBookmarks = []);
	    for (var i = 0; i < ranges.length; i++) {
	      var from = ranges[i].from(), to = ranges[i].to();
	      var found = cm.findMarks(from, to);
	      for (var j = 0; j < found.length; j++) {
	        if (found[j].sublimeBookmark) {
	          found[j].clear();
	          for (var k = 0; k < marks.length; k++)
	            if (marks[k] == found[j])
	              marks.splice(k--, 1);
	          break;
	        }
	      }
	      if (j == found.length)
	        marks.push(cm.markText(from, to, {sublimeBookmark: true, clearWhenEmpty: false}));
	    }
	  };

	  cmds[map["Shift-" + ctrl + "F2"] = "clearBookmarks"] = function(cm) {
	    var marks = cm.state.sublimeBookmarks;
	    if (marks) for (var i = 0; i < marks.length; i++) marks[i].clear();
	    marks.length = 0;
	  };

	  cmds[map["Alt-F2"] = "selectBookmarks"] = function(cm) {
	    var marks = cm.state.sublimeBookmarks, ranges = [];
	    if (marks) for (var i = 0; i < marks.length; i++) {
	      var found = marks[i].find();
	      if (!found)
	        marks.splice(i--, 0);
	      else
	        ranges.push({anchor: found.from, head: found.to});
	    }
	    if (ranges.length)
	      cm.setSelections(ranges, 0);
	  };

	  map["Alt-Q"] = "wrapLines";

	  var cK = ctrl + "K ";

	  function modifyWordOrSelection(cm, mod) {
	    cm.operation(function() {
	      var ranges = cm.listSelections(), indices = [], replacements = [];
	      for (var i = 0; i < ranges.length; i++) {
	        var range = ranges[i];
	        if (range.empty()) { indices.push(i); replacements.push(""); }
	        else replacements.push(mod(cm.getRange(range.from(), range.to())));
	      }
	      cm.replaceSelections(replacements, "around", "case");
	      for (var i = indices.length - 1, at; i >= 0; i--) {
	        var range = ranges[indices[i]];
	        if (at && CodeMirror.cmpPos(range.head, at) > 0) continue;
	        var word = wordAt(cm, range.head);
	        at = word.from;
	        cm.replaceRange(mod(word.word), word.from, word.to);
	      }
	    });
	  }

	  map[cK + ctrl + "Backspace"] = "delLineLeft";

	  cmds[map["Backspace"] = "smartBackspace"] = function(cm) {
	    if (cm.somethingSelected()) return CodeMirror.Pass;

	    var cursor = cm.getCursor();
	    var toStartOfLine = cm.getRange({line: cursor.line, ch: 0}, cursor);
	    var column = CodeMirror.countColumn(toStartOfLine, null, cm.getOption("tabSize"));
	    var indentUnit = cm.getOption("indentUnit");

	    if (toStartOfLine && !/\S/.test(toStartOfLine) && column % indentUnit == 0) {
	      var prevIndent = new Pos(cursor.line,
	        CodeMirror.findColumn(toStartOfLine, column - indentUnit, indentUnit));

	      // If no smart delete is happening (due to tab sizing) just do a regular delete
	      if (prevIndent.ch == cursor.ch) return CodeMirror.Pass;

	      return cm.replaceRange("", prevIndent, cursor, "+delete");
	    } else {
	      return CodeMirror.Pass;
	    }
	  };

	  cmds[map[cK + ctrl + "K"] = "delLineRight"] = function(cm) {
	    cm.operation(function() {
	      var ranges = cm.listSelections();
	      for (var i = ranges.length - 1; i >= 0; i--)
	        cm.replaceRange("", ranges[i].anchor, Pos(ranges[i].to().line), "+delete");
	      cm.scrollIntoView();
	    });
	  };

	  cmds[map[cK + ctrl + "U"] = "upcaseAtCursor"] = function(cm) {
	    modifyWordOrSelection(cm, function(str) { return str.toUpperCase(); });
	  };
	  cmds[map[cK + ctrl + "L"] = "downcaseAtCursor"] = function(cm) {
	    modifyWordOrSelection(cm, function(str) { return str.toLowerCase(); });
	  };

	  cmds[map[cK + ctrl + "Space"] = "setSublimeMark"] = function(cm) {
	    if (cm.state.sublimeMark) cm.state.sublimeMark.clear();
	    cm.state.sublimeMark = cm.setBookmark(cm.getCursor());
	  };
	  cmds[map[cK + ctrl + "A"] = "selectToSublimeMark"] = function(cm) {
	    var found = cm.state.sublimeMark && cm.state.sublimeMark.find();
	    if (found) cm.setSelection(cm.getCursor(), found);
	  };
	  cmds[map[cK + ctrl + "W"] = "deleteToSublimeMark"] = function(cm) {
	    var found = cm.state.sublimeMark && cm.state.sublimeMark.find();
	    if (found) {
	      var from = cm.getCursor(), to = found;
	      if (CodeMirror.cmpPos(from, to) > 0) { var tmp = to; to = from; from = tmp; }
	      cm.state.sublimeKilled = cm.getRange(from, to);
	      cm.replaceRange("", from, to);
	    }
	  };
	  cmds[map[cK + ctrl + "X"] = "swapWithSublimeMark"] = function(cm) {
	    var found = cm.state.sublimeMark && cm.state.sublimeMark.find();
	    if (found) {
	      cm.state.sublimeMark.clear();
	      cm.state.sublimeMark = cm.setBookmark(cm.getCursor());
	      cm.setCursor(found);
	    }
	  };
	  cmds[map[cK + ctrl + "Y"] = "sublimeYank"] = function(cm) {
	    if (cm.state.sublimeKilled != null)
	      cm.replaceSelection(cm.state.sublimeKilled, null, "paste");
	  };

	  map[cK + ctrl + "G"] = "clearBookmarks";
	  cmds[map[cK + ctrl + "C"] = "showInCenter"] = function(cm) {
	    var pos = cm.cursorCoords(null, "local");
	    cm.scrollTo(null, (pos.top + pos.bottom) / 2 - cm.getScrollInfo().clientHeight / 2);
	  };

	  cmds[map["Shift-Alt-Up"] = "selectLinesUpward"] = function(cm) {
	    cm.operation(function() {
	      var ranges = cm.listSelections();
	      for (var i = 0; i < ranges.length; i++) {
	        var range = ranges[i];
	        if (range.head.line > cm.firstLine())
	          cm.addSelection(Pos(range.head.line - 1, range.head.ch));
	      }
	    });
	  };
	  cmds[map["Shift-Alt-Down"] = "selectLinesDownward"] = function(cm) {
	    cm.operation(function() {
	      var ranges = cm.listSelections();
	      for (var i = 0; i < ranges.length; i++) {
	        var range = ranges[i];
	        if (range.head.line < cm.lastLine())
	          cm.addSelection(Pos(range.head.line + 1, range.head.ch));
	      }
	    });
	  };

	  function getTarget(cm) {
	    var from = cm.getCursor("from"), to = cm.getCursor("to");
	    if (CodeMirror.cmpPos(from, to) == 0) {
	      var word = wordAt(cm, from);
	      if (!word.word) return;
	      from = word.from;
	      to = word.to;
	    }
	    return {from: from, to: to, query: cm.getRange(from, to), word: word};
	  }

	  function findAndGoTo(cm, forward) {
	    var target = getTarget(cm);
	    if (!target) return;
	    var query = target.query;
	    var cur = cm.getSearchCursor(query, forward ? target.to : target.from);

	    if (forward ? cur.findNext() : cur.findPrevious()) {
	      cm.setSelection(cur.from(), cur.to());
	    } else {
	      cur = cm.getSearchCursor(query, forward ? Pos(cm.firstLine(), 0)
	                                              : cm.clipPos(Pos(cm.lastLine())));
	      if (forward ? cur.findNext() : cur.findPrevious())
	        cm.setSelection(cur.from(), cur.to());
	      else if (target.word)
	        cm.setSelection(target.from, target.to);
	    }
	  };
	  cmds[map[ctrl + "F3"] = "findUnder"] = function(cm) { findAndGoTo(cm, true); };
	  cmds[map["Shift-" + ctrl + "F3"] = "findUnderPrevious"] = function(cm) { findAndGoTo(cm,false); };
	  cmds[map["Alt-F3"] = "findAllUnder"] = function(cm) {
	    var target = getTarget(cm);
	    if (!target) return;
	    var cur = cm.getSearchCursor(target.query);
	    var matches = [];
	    var primaryIndex = -1;
	    while (cur.findNext()) {
	      matches.push({anchor: cur.from(), head: cur.to()});
	      if (cur.from().line <= target.from.line && cur.from().ch <= target.from.ch)
	        primaryIndex++;
	    }
	    cm.setSelections(matches, primaryIndex);
	  };

	  map["Shift-" + ctrl + "["] = "fold";
	  map["Shift-" + ctrl + "]"] = "unfold";
	  map[cK + ctrl + "0"] = map[cK + ctrl + "j"] = "unfoldAll";

	  map[ctrl + "I"] = "findIncremental";
	  map["Shift-" + ctrl + "I"] = "findIncrementalReverse";
	  map[ctrl + "H"] = "replace";
	  map["F3"] = "findNext";
	  map["Shift-F3"] = "findPrev";

	  CodeMirror.normalizeKeyMap(map);
	});


/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	(function(mod) {
	  if (true) // CommonJS
	    mod(__webpack_require__(178));
	  else if (typeof define == "function" && define.amd) // AMD
	    define(["../../lib/codemirror"], mod);
	  else // Plain browser env
	    mod(CodeMirror);
	})(function(CodeMirror) {
	  "use strict";
	  var Pos = CodeMirror.Pos;

	  function SearchCursor(doc, query, pos, caseFold) {
	    this.atOccurrence = false; this.doc = doc;
	    if (caseFold == null && typeof query == "string") caseFold = false;

	    pos = pos ? doc.clipPos(pos) : Pos(0, 0);
	    this.pos = {from: pos, to: pos};

	    // The matches method is filled in based on the type of query.
	    // It takes a position and a direction, and returns an object
	    // describing the next occurrence of the query, or null if no
	    // more matches were found.
	    if (typeof query != "string") { // Regexp match
	      if (!query.global) query = new RegExp(query.source, query.ignoreCase ? "ig" : "g");
	      this.matches = function(reverse, pos) {
	        if (reverse) {
	          query.lastIndex = 0;
	          var line = doc.getLine(pos.line).slice(0, pos.ch), cutOff = 0, match, start;
	          for (;;) {
	            query.lastIndex = cutOff;
	            var newMatch = query.exec(line);
	            if (!newMatch) break;
	            match = newMatch;
	            start = match.index;
	            cutOff = match.index + (match[0].length || 1);
	            if (cutOff == line.length) break;
	          }
	          var matchLen = (match && match[0].length) || 0;
	          if (!matchLen) {
	            if (start == 0 && line.length == 0) {match = undefined;}
	            else if (start != doc.getLine(pos.line).length) {
	              matchLen++;
	            }
	          }
	        } else {
	          query.lastIndex = pos.ch;
	          var line = doc.getLine(pos.line), match = query.exec(line);
	          var matchLen = (match && match[0].length) || 0;
	          var start = match && match.index;
	          if (start + matchLen != line.length && !matchLen) matchLen = 1;
	        }
	        if (match && matchLen)
	          return {from: Pos(pos.line, start),
	                  to: Pos(pos.line, start + matchLen),
	                  match: match};
	      };
	    } else { // String query
	      var origQuery = query;
	      if (caseFold) query = query.toLowerCase();
	      var fold = caseFold ? function(str){return str.toLowerCase();} : function(str){return str;};
	      var target = query.split("\n");
	      // Different methods for single-line and multi-line queries
	      if (target.length == 1) {
	        if (!query.length) {
	          // Empty string would match anything and never progress, so
	          // we define it to match nothing instead.
	          this.matches = function() {};
	        } else {
	          this.matches = function(reverse, pos) {
	            if (reverse) {
	              var orig = doc.getLine(pos.line).slice(0, pos.ch), line = fold(orig);
	              var match = line.lastIndexOf(query);
	              if (match > -1) {
	                match = adjustPos(orig, line, match);
	                return {from: Pos(pos.line, match), to: Pos(pos.line, match + origQuery.length)};
	              }
	             } else {
	               var orig = doc.getLine(pos.line).slice(pos.ch), line = fold(orig);
	               var match = line.indexOf(query);
	               if (match > -1) {
	                 match = adjustPos(orig, line, match) + pos.ch;
	                 return {from: Pos(pos.line, match), to: Pos(pos.line, match + origQuery.length)};
	               }
	            }
	          };
	        }
	      } else {
	        var origTarget = origQuery.split("\n");
	        this.matches = function(reverse, pos) {
	          var last = target.length - 1;
	          if (reverse) {
	            if (pos.line - (target.length - 1) < doc.firstLine()) return;
	            if (fold(doc.getLine(pos.line).slice(0, origTarget[last].length)) != target[target.length - 1]) return;
	            var to = Pos(pos.line, origTarget[last].length);
	            for (var ln = pos.line - 1, i = last - 1; i >= 1; --i, --ln)
	              if (target[i] != fold(doc.getLine(ln))) return;
	            var line = doc.getLine(ln), cut = line.length - origTarget[0].length;
	            if (fold(line.slice(cut)) != target[0]) return;
	            return {from: Pos(ln, cut), to: to};
	          } else {
	            if (pos.line + (target.length - 1) > doc.lastLine()) return;
	            var line = doc.getLine(pos.line), cut = line.length - origTarget[0].length;
	            if (fold(line.slice(cut)) != target[0]) return;
	            var from = Pos(pos.line, cut);
	            for (var ln = pos.line + 1, i = 1; i < last; ++i, ++ln)
	              if (target[i] != fold(doc.getLine(ln))) return;
	            if (fold(doc.getLine(ln).slice(0, origTarget[last].length)) != target[last]) return;
	            return {from: from, to: Pos(ln, origTarget[last].length)};
	          }
	        };
	      }
	    }
	  }

	  SearchCursor.prototype = {
	    findNext: function() {return this.find(false);},
	    findPrevious: function() {return this.find(true);},

	    find: function(reverse) {
	      var self = this, pos = this.doc.clipPos(reverse ? this.pos.from : this.pos.to);
	      function savePosAndFail(line) {
	        var pos = Pos(line, 0);
	        self.pos = {from: pos, to: pos};
	        self.atOccurrence = false;
	        return false;
	      }

	      for (;;) {
	        if (this.pos = this.matches(reverse, pos)) {
	          this.atOccurrence = true;
	          return this.pos.match || true;
	        }
	        if (reverse) {
	          if (!pos.line) return savePosAndFail(0);
	          pos = Pos(pos.line-1, this.doc.getLine(pos.line-1).length);
	        }
	        else {
	          var maxLine = this.doc.lineCount();
	          if (pos.line == maxLine - 1) return savePosAndFail(maxLine);
	          pos = Pos(pos.line + 1, 0);
	        }
	      }
	    },

	    from: function() {if (this.atOccurrence) return this.pos.from;},
	    to: function() {if (this.atOccurrence) return this.pos.to;},

	    replace: function(newText, origin) {
	      if (!this.atOccurrence) return;
	      var lines = CodeMirror.splitLines(newText);
	      this.doc.replaceRange(lines, this.pos.from, this.pos.to, origin);
	      this.pos.to = Pos(this.pos.from.line + lines.length - 1,
	                        lines[lines.length - 1].length + (lines.length == 1 ? this.pos.from.ch : 0));
	    }
	  };

	  // Maps a position in a case-folded line back to a position in the original line
	  // (compensating for codepoints increasing in number during folding)
	  function adjustPos(orig, folded, pos) {
	    if (orig.length == folded.length) return pos;
	    for (var pos1 = Math.min(pos, orig.length);;) {
	      var len1 = orig.slice(0, pos1).toLowerCase().length;
	      if (len1 < pos) ++pos1;
	      else if (len1 > pos) --pos1;
	      else return pos1;
	    }
	  }

	  CodeMirror.defineExtension("getSearchCursor", function(query, pos, caseFold) {
	    return new SearchCursor(this.doc, query, pos, caseFold);
	  });
	  CodeMirror.defineDocExtension("getSearchCursor", function(query, pos, caseFold) {
	    return new SearchCursor(this, query, pos, caseFold);
	  });

	  CodeMirror.defineExtension("selectMatches", function(query, caseFold) {
	    var ranges = [];
	    var cur = this.getSearchCursor(query, this.getCursor("from"), caseFold);
	    while (cur.findNext()) {
	      if (CodeMirror.cmpPos(cur.to(), this.getCursor("to")) > 0) break;
	      ranges.push({anchor: cur.from(), head: cur.to()});
	    }
	    if (ranges.length)
	      this.setSelections(ranges, 0);
	  });
	});


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _codemirror = __webpack_require__(178);

	var _codemirror2 = _interopRequireDefault(_codemirror);

	var _graphqlType = __webpack_require__(164);

	var _graphqlTypeIntrospection = __webpack_require__(120);

	/**
	 * Registers a "hint" helper for CodeMirror.
	 *
	 * Using CodeMirror's "hint" addon: https://codemirror.net/demo/complete.html
	 * Given an editor, this helper will take the token at the cursor and return a
	 * list of suggested tokens.
	 *
	 * Options:
	 *
	 *   - schema: GraphQLSchema provides the hinter with positionally relevant info
	 *
	 * Additional Events:
	 *
	 *   - hasCompletion (codemirror, data, token) - signaled when the hinter has a
	 *     new list of completion suggestions.
	 *
	 */
	_codemirror2['default'].registerHelper('hint', 'graphql', function (editor, options) {
	  var schema = options.schema;
	  if (!schema) {
	    return;
	  }

	  var cur = editor.getCursor();
	  var token = editor.getTokenAt(cur);
	  var typeInfo = getTypeInfo(schema, token.state);

	  var state = token.state;
	  var kind = state.kind;
	  var step = state.step;

	  if (token.type === 'comment') {
	    return;
	  }

	  // Definition kinds
	  if (kind === 'Document') {
	    return hintList(editor, options, cur, token, [{ text: 'query' }, { text: 'mutation' }, { text: 'fragment' }, { text: '{' }]);
	  }

	  // Field names
	  if (kind === 'SelectionSet' || kind === 'Field' || kind === 'AliasedField') {
	    if (typeInfo.parentType) {
	      var fields;
	      if (typeInfo.parentType.getFields) {
	        var fieldObj = typeInfo.parentType.getFields();
	        fields = Object.keys(fieldObj).map(function (fieldName) {
	          return fieldObj[fieldName];
	        });
	      } else {
	        fields = [];
	      }
	      if (_graphqlType.isAbstractType(typeInfo.parentType)) {
	        fields.push(_graphqlTypeIntrospection.TypeNameMetaFieldDef);
	      }
	      if (typeInfo.parentType === schema.getQueryType()) {
	        fields.push(_graphqlTypeIntrospection.SchemaMetaFieldDef, _graphqlTypeIntrospection.TypeMetaFieldDef);
	      }
	      return hintList(editor, options, cur, token, fields.map(function (field) {
	        return {
	          text: field.name,
	          type: field.type,
	          description: field.description
	        };
	      }));
	    }
	  }

	  // Argument names
	  if (kind === 'Arguments' || kind === 'Argument' && step === 0) {
	    var argDefs = typeInfo.argDefs;
	    if (argDefs) {
	      return hintList(editor, options, cur, token, argDefs.map(function (argDef) {
	        return {
	          text: argDef.name,
	          type: argDef.type,
	          description: argDef.description
	        };
	      }));
	    }
	  }

	  // Input Object fields
	  if (kind === 'ObjectValue' || kind === 'ObjectField' && step === 0) {
	    if (typeInfo.objectFieldDefs) {
	      var objectFields = Object.keys(typeInfo.objectFieldDefs).map(function (fieldName) {
	        return typeInfo.objectFieldDefs[fieldName];
	      });
	      return hintList(editor, options, cur, token, objectFields.map(function (field) {
	        return {
	          text: field.name,
	          type: field.type,
	          description: field.description
	        };
	      }));
	    }
	  }

	  // Input values: Enum and Boolean
	  if (kind === 'EnumValue' || kind === 'ListValue' && step === 1 || kind === 'ObjectField' && step === 2 || kind === 'Argument' && step === 2) {
	    var namedInputType = _graphqlType.getNamedType(typeInfo.inputType);
	    if (namedInputType instanceof _graphqlType.GraphQLEnumType) {
	      var valueMap = namedInputType.getValues();
	      var values = Object.keys(valueMap).map(function (valueName) {
	        return valueMap[valueName];
	      });
	      return hintList(editor, options, cur, token, values.map(function (value) {
	        return {
	          text: value.name,
	          type: namedInputType,
	          description: value.description
	        };
	      }));
	    } else if (namedInputType === _graphqlType.GraphQLBoolean) {
	      return hintList(editor, options, cur, token, [{ text: 'true', type: _graphqlType.GraphQLBoolean, description: 'Not false.' }, { text: 'false', type: _graphqlType.GraphQLBoolean, description: 'Not true.' }]);
	    }
	  }

	  // Fragment type conditions
	  if (kind === 'FragmentDefinition' && step === 3 || kind === 'InlineFragment' && step === 2 || kind === 'NamedType' && (state.prevState.kind === 'FragmentDefinition' || state.prevState.kind === 'InlineFragment')) {
	    var possibleTypes;
	    if (typeInfo.parentType) {
	      possibleTypes = _graphqlType.isAbstractType(typeInfo.parentType) ? typeInfo.parentType.getPossibleTypes() : [typeInfo.parentType];
	    } else {
	      var typeMap = schema.getTypeMap();
	      possibleTypes = Object.keys(typeMap).map(function (typeName) {
	        return typeMap[typeName];
	      }).filter(_graphqlType.isCompositeType);
	    }
	    return hintList(editor, options, cur, token, possibleTypes.map(function (type) {
	      return {
	        text: type.name,
	        description: type.description
	      };
	    }));
	  }

	  // Variable definition types
	  if (kind === 'VariableDefinition' && step === 2 || kind === 'ListType' && step === 1 || kind === 'NamedType' && (state.prevState.kind === 'VariableDefinition' || state.prevState.kind === 'ListType')) {
	    var inputTypeMap = schema.getTypeMap();
	    var inputTypes = Object.keys(inputTypeMap).map(function (typeName) {
	      return inputTypeMap[typeName];
	    }).filter(_graphqlType.isInputType);
	    return hintList(editor, options, cur, token, inputTypes.map(function (type) {
	      return {
	        text: type.name,
	        description: type.description
	      };
	    }));
	  }

	  // Directive names
	  if (kind === 'Directive') {
	    var directives = schema.getDirectives().filter(function (directive) {
	      return directive.onField && state.prevState.kind === 'Field' || directive.onFragment && (state.prevState.kind === 'FragmentDefinition' || state.prevState.kind === 'InlineFragment' || state.prevState.kind === 'FragmentSpread') || directive.onOperation && (state.prevState.kind === 'Query' || state.prevState.kind === 'Mutation');
	    });
	    return hintList(editor, options, cur, token, directives.map(function (directive) {
	      return {
	        text: directive.name,
	        description: directive.description
	      };
	    }));
	  }
	});

	// Utility for collecting rich type information given any token's state
	// from the graphql-mode parser.
	function getTypeInfo(schema, tokenState) {
	  var info = {
	    type: null,
	    parentType: null,
	    inputType: null,
	    directiveDef: null,
	    fieldDef: null,
	    argDef: null,
	    argDefs: null,
	    objectFieldDefs: null
	  };

	  forEachState(tokenState, function (state) {
	    switch (state.kind) {
	      case 'Query':case 'ShortQuery':
	        info.type = schema.getQueryType();
	        break;
	      case 'Mutation':
	        info.type = schema.getMutationType();
	        break;
	      case 'InlineFragment':
	      case 'FragmentDefinition':
	        info.type = state.type && schema.getType(state.type);
	        break;
	      case 'Field':
	        info.fieldDef = info.type && state.name ? getFieldDef(schema, info.parentType, state.name) : null;
	        info.type = info.fieldDef && info.fieldDef.type;
	        break;
	      case 'SelectionSet':
	        info.parentType = _graphqlType.getNamedType(info.type);
	        break;
	      case 'Directive':
	        info.directiveDef = state.name && schema.getDirective(state.name);
	        break;
	      case 'Arguments':
	        info.argDefs = state.prevState.kind === 'Field' ? info.fieldDef && info.fieldDef.args : state.prevState.kind === 'Directive' ? info.directiveDef && info.directiveDef.args : null;
	        break;
	      case 'Argument':
	        info.argDef = null;
	        if (info.argDefs) {
	          for (var i = 0; i < info.argDefs.length; i++) {
	            if (info.argDefs[i].name === state.name) {
	              info.argDef = info.argDefs[i];
	              break;
	            }
	          }
	        }
	        info.inputType = info.argDef && info.argDef.type;
	        break;
	      case 'ListValue':
	        var nullableType = _graphqlType.getNullableType(info.inputType);
	        info.inputType = nullableType instanceof _graphqlType.GraphQLList ? nullableType.ofType : null;
	        break;
	      case 'ObjectValue':
	        var objectType = _graphqlType.getNamedType(info.inputType);
	        info.objectFieldDefs = objectType instanceof _graphqlType.GraphQLInputObjectType ? objectType.getFields() : null;
	        break;
	      case 'ObjectField':
	        var objectField = state.name && info.objectFieldDefs ? info.objectFieldDefs[state.name] : null;
	        info.inputType = objectField && objectField.type;
	        break;
	    }
	  });

	  return info;
	}

	// Utility for iterating through a state stack bottom-up.
	function forEachState(stack, fn) {
	  var reverseStateStack = [];
	  var state = stack;
	  while (state && state.kind) {
	    reverseStateStack.push(state);
	    state = state.prevState;
	  }
	  for (var i = reverseStateStack.length - 1; i >= 0; i--) {
	    fn(reverseStateStack[i]);
	  }
	}

	// Gets the field definition given a type and field name
	function getFieldDef(schema, type, fieldName) {
	  if (fieldName === _graphqlTypeIntrospection.SchemaMetaFieldDef.name && schema.getQueryType() === type) {
	    return _graphqlTypeIntrospection.SchemaMetaFieldDef;
	  }
	  if (fieldName === _graphqlTypeIntrospection.TypeMetaFieldDef.name && schema.getQueryType() === type) {
	    return _graphqlTypeIntrospection.TypeMetaFieldDef;
	  }
	  if (fieldName === _graphqlTypeIntrospection.TypeNameMetaFieldDef.name && _graphqlType.isCompositeType(type)) {
	    return _graphqlTypeIntrospection.TypeNameMetaFieldDef;
	  }
	  if (type.getFields) {
	    return type.getFields()[fieldName];
	  }
	}

	// Create the expected hint response given a possible list and a token
	function hintList(editor, options, cursor, token, list) {
	  var hints = filterAndSortList(list, normalizeText(token.string));
	  if (!hints) {
	    return;
	  }

	  var tokenStart = token.type === null ? token.end : /\w/.test(token.string[0]) ? token.start : token.start + 1;

	  var results = {
	    list: hints,
	    from: _codemirror2['default'].Pos(cursor.line, tokenStart),
	    to: _codemirror2['default'].Pos(cursor.line, token.end)
	  };

	  _codemirror2['default'].signal(editor, 'hasCompletion', editor, results, token);

	  return results;
	}

	// Given a list of hint entries and currently typed text, sort and filter to
	// provide a concise list.
	function filterAndSortList(list, text) {
	  var sorted = !text ? list : list.map(function (entry) {
	    return {
	      proximity: getProximity(normalizeText(entry.text), text),
	      entry: entry
	    };
	  }).filter(function (pair) {
	    return pair.proximity <= 2;
	  }).sort(function (a, b) {
	    return a.proximity - b.proximity || a.entry.text.length - b.entry.text.length;
	  }).map(function (pair) {
	    return pair.entry;
	  });

	  return sorted.length > 0 ? sorted : list;
	}

	function normalizeText(text) {
	  return text.toLowerCase().replace(/\W/g, '');
	}

	// Determine a numeric proximity for a suggestion based on current text.
	function getProximity(suggestion, text) {
	  // start with lexical distance
	  var proximity = lexicalDistance(text, suggestion);
	  if (suggestion.length > text.length) {
	    // do not penalize long suggestions.
	    proximity -= suggestion.length - text.length - 1;
	    // penalize suggestions not starting with this phrase
	    proximity += suggestion.indexOf(text) === 0 ? 0 : 0.5;
	  }
	  return proximity;
	}

	/**
	 * Computes the lexical distance between strings A and B.
	 *
	 * The "distance" between two strings is given by counting the minimum number
	 * of edits needed to transform string A into string B. An edit can be an
	 * insertion, deletion, or substitution of a single character, or a swap of two
	 * adjacent characters.
	 *
	 * This distance can be useful for detecting typos in input or sorting
	 *
	 * @param {string} a
	 * @param {string} b
	 * @return {int} distance in number of edits
	 */
	function lexicalDistance(a, b) {
	  var i;
	  var j;
	  var d = [];
	  var aLength = a.length;
	  var bLength = b.length;

	  for (i = 0; i <= aLength; i++) {
	    d[i] = [i];
	  }

	  for (j = 1; j <= bLength; j++) {
	    d[0][j] = j;
	  }

	  for (i = 1; i <= aLength; i++) {
	    for (j = 1; j <= bLength; j++) {
	      var cost = a[i - 1] === b[j - 1] ? 0 : 1;

	      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);

	      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
	        d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + cost);
	      }
	    }
	  }

	  return d[aLength][bLength];
	}

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _codemirror = __webpack_require__(178);

	var _codemirror2 = _interopRequireDefault(_codemirror);

	var _graphqlLanguage = __webpack_require__(79);

	var _graphqlValidation = __webpack_require__(166);

	/**
	 * Registers a "lint" helper for CodeMirror.
	 *
	 * Using CodeMirror's "lint" addon: https://codemirror.net/demo/lint.html
	 * Given the text within an editor, this helper will take that text and return
	 * a list of linter issues, derived from GraphQL's parse and validate steps.
	 *
	 * Options:
	 *
	 *   - schema: GraphQLSchema provides the linter with positionally relevant info
	 *
	 */
	_codemirror2['default'].registerHelper('lint', 'graphql', function (text, options, editor) {
	  var schema = options.schema;
	  try {
	    var ast = _graphqlLanguage.parse(text);
	  } catch (error) {
	    var location = error.locations[0];
	    var pos = _codemirror2['default'].Pos(location.line - 1, location.column);
	    var token = editor.getTokenAt(pos);
	    return [{
	      message: error.message,
	      severity: 'error',
	      type: 'syntax',
	      from: _codemirror2['default'].Pos(location.line - 1, token.start),
	      to: _codemirror2['default'].Pos(location.line - 1, token.end)
	    }];
	  }
	  var errors = schema ? _graphqlValidation.validate(schema, ast) : [];
	  return mapCat(errors, function (error) {
	    return errorAnnotations(editor, error);
	  });
	});

	function errorAnnotations(editor, error) {
	  return error.nodes.map(function (node) {
	    var highlightNode = node.kind !== 'Variable' && node.name ? node.name : node.variable ? node.variable : node;
	    return {
	      message: error.message,
	      severity: 'error',
	      type: 'validation',
	      from: editor.posFromIndex(highlightNode.loc.start),
	      to: editor.posFromIndex(highlightNode.loc.end)
	    };
	  });
	}

	// General utility for map-cating (aka flat-mapping).
	function mapCat(array, mapper) {
	  return Array.prototype.concat.apply([], array.map(mapper));
	}

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _codemirror = __webpack_require__(178);

	var _codemirror2 = _interopRequireDefault(_codemirror);

	/**
	 * The GraphQL mode is defined as a tokenizer along with a list of rules, each
	 * of which is either a function or an array.
	 *
	 *   * Function: Provided a token and the stream, returns an expected next step.
	 *   * Array: A list of steps to take in order.
	 *
	 * A step is either another rule, or a terminal description of a token. If it
	 * is a rule, that rule is pushed onto the stack and the parsing continues from
	 * that point.
	 *
	 * If it is a terminal description, the token is checked against it using a
	 * `match` function. If the match is successful, the token is colored and the
	 * rule is stepped forward. If the match is unsuccessful, the remainder of the
	 * rule is skipped and the previous rule is advanced.
	 *
	 * This parsing algorithm allows for incremental online parsing within various
	 * levels of the syntax tree and results in a structured `state` linked-list
	 * which contains the relevant information to produce valuable typeaheads.
	 */
	_codemirror2['default'].defineMode('graphql', function (config) {
	  return {
	    config: config,
	    token: getToken,
	    indent: indent,
	    startState: function startState() {
	      var initialState = { level: 0 };
	      pushRule(initialState, 'Document');
	      return initialState;
	    },
	    electricInput: /^\s*[})\]]/,
	    fold: 'brace',
	    lineComment: '#',
	    closeBrackets: {
	      pairs: '()[]{}""',
	      explode: '()[]{}'
	    }
	  };
	});

	function getToken(stream, state) {
	  if (state.needsAdvance) {
	    state.needsAdvance = false;
	    advanceRule(state);
	  }

	  // Remember initial indentation
	  if (stream.sol()) {
	    state.indentLevel = Math.floor(stream.indentation() / this.config.tabSize);
	  }

	  // Consume spaces and ignored characters
	  if (stream.eatSpace() || stream.eatWhile(',')) {
	    return null;
	  }

	  // Tokenize line comment
	  if (stream.match(this.lineComment)) {
	    stream.skipToEnd();
	    return 'comment';
	  }

	  // Lex a token from the stream
	  var token = lex(stream);

	  // If there's no matching token, skip ahead.
	  if (!token) {
	    stream.match(/\w+|./);
	    return 'invalidchar';
	  }

	  // Save state before continuing.
	  saveState(state);

	  // Handle changes in expected indentation level
	  if (token.kind === 'Punctuation') {
	    if (/^[{([]/.test(token.value)) {
	      // Push on the stack of levels one level deeper than the current level.
	      state.levels = (state.levels || []).concat(state.indentLevel + 1);
	    } else if (/^[})\]]/.test(token.value)) {
	      // Pop from the stack of levels.
	      // If the top of the stack is lower than the current level, lower the
	      // current level to match.
	      var levels = state.levels = (state.levels || []).slice(0, -1);
	      if (levels.length > 0 && levels[levels.length - 1] < state.indentLevel) {
	        state.indentLevel = levels[levels.length - 1];
	      }
	    }
	  }

	  while (state.rule) {
	    // If this is a forking rule, determine what rule to use based on
	    // the current token, otherwise expect based on the current step.
	    var expected = typeof state.rule === 'function' ? state.step === 0 ? state.rule(token, stream) : null : state.rule[state.step];

	    if (expected) {
	      // Un-wrap optional/list ParseRules.
	      if (expected.ofRule) {
	        expected = expected.ofRule;
	      }

	      // A string represents a Rule
	      if (typeof expected === 'string') {
	        pushRule(state, expected);
	        continue;
	      }

	      // Otherwise, match a Terminal.
	      if (expected.match && expected.match(token)) {
	        if (expected.update) {
	          expected.update(state, token);
	        }
	        // If this token was a punctuator, advance the parse rule, otherwise
	        // mark the state to be advanced before the next token. This ensures
	        // that tokens which can be appended to keep the appropriate state.
	        if (token.kind === 'Punctuation') {
	          advanceRule(state);
	        } else {
	          state.needsAdvance = true;
	        }
	        return expected.style;
	      }
	    }

	    unsuccessful(state);
	  }

	  // The parser does not know how to interpret this token, do not affect state.
	  restoreState(state);
	  return 'invalidchar';
	}

	function indent(state, textAfter) {
	  var levels = state.levels;
	  // If there is no stack of levels, use the current level.
	  // Otherwise, use the top level, pre-emptively dedenting for close braces.
	  var level = !levels || levels.length === 0 ? state.indentLevel : levels[levels.length - 1] - (this.electricInput.test(textAfter) ? 1 : 0);
	  return level * this.config.indentUnit;
	}

	function assign(to, from) {
	  var keys = Object.keys(from);
	  for (var i = 0; i < keys.length; i++) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}

	var stateCache = {};

	// Save the current state in the cache.
	function saveState(state) {
	  assign(stateCache, state);
	}

	// Restore from the state cache.
	function restoreState(state) {
	  assign(state, stateCache);
	}

	// Push a new rule onto the state.
	function pushRule(state, ruleKind) {
	  state.prevState = assign({}, state);
	  state.kind = ruleKind;
	  state.name = null;
	  state.type = null;
	  state.rule = ParseRules[ruleKind];
	  state.step = 0;
	}

	// Pop the current rule from the state.
	function popRule(state) {
	  state.kind = state.prevState.kind;
	  state.name = state.prevState.name;
	  state.type = state.prevState.type;
	  state.rule = state.prevState.rule;
	  state.step = state.prevState.step;
	  state.prevState = state.prevState.prevState;
	}

	// Advance the step of the current rule.
	function advanceRule(state) {
	  // Advance the step in the rule. If the rule is completed, pop
	  // the rule and advance the parent rule as well (recursively).
	  state.step++;
	  while (state.rule && !(Array.isArray(state.rule) && state.step < state.rule.length)) {
	    popRule(state);
	    // Do not advance a List step so it has the opportunity to repeat itself.
	    if (state.rule && !(Array.isArray(state.rule) && state.rule[state.step].isList)) {
	      state.step++;
	    }
	  }
	}

	// Unwind the state after an unsuccessful match.
	function unsuccessful(state) {
	  // Fall back to the parent rule until you get to an optional or list rule or
	  // until the entire stack of rules is empty.
	  while (state.rule && !(Array.isArray(state.rule) && state.rule[state.step].ofRule)) {
	    popRule(state);
	  }

	  // If there is still a rule, it must be an optional or list rule.
	  // Consider this rule a success so that we may move past it.
	  if (state.rule) {
	    advanceRule(state);
	  }
	}

	// Given a stream, returns a { kind, value } pair, or null.
	function lex(stream) {
	  var kinds = Object.keys(LexRules);
	  for (var i = 0; i < kinds.length; i++) {
	    var match = stream.match(LexRules[kinds[i]]);
	    if (match) {
	      return { kind: kinds[i], value: match[0] };
	    }
	  }
	}

	// An optional rule.
	function opt(ofRule) {
	  return { ofRule: ofRule };
	}

	// A list of another rule.
	function list(ofRule) {
	  return { ofRule: ofRule, isList: true };
	}

	// Token of a kind
	function t(kind, style) {
	  return { style: style, match: function match(token) {
	      return token.kind === kind;
	    } };
	}

	// Punctuator
	function p(value, style) {
	  return {
	    style: style || 'punctuation',
	    match: function match(token) {
	      return token.kind === 'Punctuation' && token.value === value;
	    }
	  };
	}

	// A keyword Token
	function word(value) {
	  return {
	    style: 'keyword',
	    match: function match(token) {
	      return token.kind === 'Name' && token.value === value;
	    }
	  };
	}

	// A Name Token which will decorate the state with a `name`
	function name(style) {
	  return {
	    style: style,
	    match: function match(token) {
	      return token.kind === 'Name';
	    },
	    update: function update(state, token) {
	      state.name = token.value;
	    }
	  };
	}

	// A Name Token which will decorate the state with a `type`
	function type(style) {
	  return {
	    style: style,
	    match: function match(token) {
	      return token.kind === 'Name';
	    },
	    update: function update(state, token) {
	      state.type = token.value;
	    }
	  };
	}

	/**
	 * The lexer rules. These are exactly as described by the spec.
	 */
	var LexRules = {
	  // The Name token.
	  Name: /^[_A-Za-z][_0-9A-Za-z]*/,

	  // All Punctuation used in GraphQL
	  Punctuation: /^(?:!|\$|\(|\)|\.\.\.|:|=|@|\[|\]|\{|\})/,

	  // Combines the IntValue and FloatValue tokens.
	  Number: /^-?(?:0|(?:[1-9][0-9]*))(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?/,

	  // Note the closing quote is made optional as an IDE experience improvment.
	  String: /^"(?:[^"\\]|\\(?:b|f|n|r|t|u[0-9a-fA-F]{4}))*"?/
	};

	/**
	 * The parser rules. These are very close to, but not exactly the same as the
	 * spec. Minor deviations allow for a simpler implementation. The resulting
	 * parser can parse everything the spec declares possible.
	 */
	var ParseRules = {
	  Document: [list('Definition')],
	  Definition: function Definition(token) {
	    switch (token.value) {
	      case 'query':
	        return 'Query';
	      case 'mutation':
	        return 'Mutation';
	      case 'fragment':
	        return 'FragmentDefinition';
	      case '{':
	        return 'ShortQuery';
	    }
	  },
	  // Note: instead of "Operation", these rules have been separated out.
	  Query: [word('query'), name('def'), opt('VariableDefinitions'), list('Directive'), 'SelectionSet'],
	  ShortQuery: ['SelectionSet'],
	  Mutation: [word('mutation'), name('def'), opt('VariableDefinitions'), list('Directive'), 'SelectionSet'],
	  VariableDefinitions: [p('('), list('VariableDefinition'), p(')')],
	  VariableDefinition: ['Variable', p(':'), 'Type', opt('DefaultValue')],
	  Variable: [p('$', 'variable'), name('variable')],
	  DefaultValue: [p('='), 'Value'],
	  SelectionSet: [p('{'), list('Selection'), p('}')],
	  Selection: function Selection(token, stream) {
	    return token.value === '...' ? stream.match(/[\s\u00a0,]*on\b/, false) ? 'InlineFragment' : 'FragmentSpread' : stream.match(/[\s\u00a0,]*:/, false) ? 'AliasedField' : 'Field';
	  },
	  // Note: this minor deviation of "AliasedField" simplifies the lookahead.
	  AliasedField: [name('qualifier'), p(':'), 'Field'],
	  Field: [name('property'), opt('Arguments'), list('Directive'), opt('SelectionSet')],
	  Arguments: [p('('), list('Argument'), p(')')],
	  Argument: [name('attribute'), p(':'), 'Value'],
	  FragmentSpread: [p('...'), name('def'), list('Directive')],
	  InlineFragment: [p('...'), word('on'), type('atom'), list('Directive'), 'SelectionSet'],
	  FragmentDefinition: [word('fragment'), name('def'), word('on'), type('atom'), list('Directive'), 'SelectionSet'],
	  // Variables could be parsed in cases where only Const is expected by spec.
	  Value: function Value(token) {
	    switch (token.kind) {
	      case 'Number':
	        return 'NumberValue';
	      case 'String':
	        return 'StringValue';
	      case 'Punctuation':
	        switch (token.value) {
	          case '[':
	            return 'ListValue';
	          case '{':
	            return 'ObjectValue';
	          case '$':
	            return 'Variable';
	        }
	        return null;
	      case 'Name':
	        switch (token.value) {
	          case 'true':case 'false':
	            return 'BooleanValue';
	        }
	        return 'EnumValue';
	    }
	  },
	  NumberValue: [t('Number', 'number')],
	  StringValue: [t('String', 'string')],
	  BooleanValue: [t('Name', 'builtin')],
	  EnumValue: [name('string-2')],
	  ListValue: [p('['), list('Value'), p(']')],
	  ObjectValue: [p('{'), list('ObjectField'), p('}')],
	  ObjectField: [name('attribute'), p(':'), 'Value'],
	  Type: function Type(token) {
	    return token.value === '[' ? 'ListType' : 'NamedType';
	  },
	  // NonNullType has been merged into ListType and NamedType to simplify.
	  ListType: [p('['), 'NamedType', p(']'), opt(p('!'))],
	  NamedType: [name('atom'), opt(p('!'))],
	  Directive: [p('@', 'meta'), name('meta'), opt('Arguments')]
	};

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	// TODO actually recognize syntax of TypeScript constructs

	(function(mod) {
	  if (true) // CommonJS
	    mod(__webpack_require__(178));
	  else if (typeof define == "function" && define.amd) // AMD
	    define(["../../lib/codemirror"], mod);
	  else // Plain browser env
	    mod(CodeMirror);
	})(function(CodeMirror) {
	"use strict";

	function expressionAllowed(stream, state, backUp) {
	  return /^(?:operator|sof|keyword c|case|new|[\[{}\(,;:]|=>)$/.test(state.lastType) ||
	    (state.lastType == "quasi" && /\{\s*$/.test(stream.string.slice(0, stream.pos - (backUp || 0))))
	}

	CodeMirror.defineMode("javascript", function(config, parserConfig) {
	  var indentUnit = config.indentUnit;
	  var statementIndent = parserConfig.statementIndent;
	  var jsonldMode = parserConfig.jsonld;
	  var jsonMode = parserConfig.json || jsonldMode;
	  var isTS = parserConfig.typescript;
	  var wordRE = parserConfig.wordCharacters || /[\w$\xa1-\uffff]/;

	  // Tokenizer

	  var keywords = function(){
	    function kw(type) {return {type: type, style: "keyword"};}
	    var A = kw("keyword a"), B = kw("keyword b"), C = kw("keyword c");
	    var operator = kw("operator"), atom = {type: "atom", style: "atom"};

	    var jsKeywords = {
	      "if": kw("if"), "while": A, "with": A, "else": B, "do": B, "try": B, "finally": B,
	      "return": C, "break": C, "continue": C, "new": kw("new"), "delete": C, "throw": C, "debugger": C,
	      "var": kw("var"), "const": kw("var"), "let": kw("var"),
	      "function": kw("function"), "catch": kw("catch"),
	      "for": kw("for"), "switch": kw("switch"), "case": kw("case"), "default": kw("default"),
	      "in": operator, "typeof": operator, "instanceof": operator,
	      "true": atom, "false": atom, "null": atom, "undefined": atom, "NaN": atom, "Infinity": atom,
	      "this": kw("this"), "class": kw("class"), "super": kw("atom"),
	      "yield": C, "export": kw("export"), "import": kw("import"), "extends": C
	    };

	    // Extend the 'normal' keywords with the TypeScript language extensions
	    if (isTS) {
	      var type = {type: "variable", style: "variable-3"};
	      var tsKeywords = {
	        // object-like things
	        "interface": kw("class"),
	        "implements": C,
	        "namespace": C,
	        "module": kw("module"),
	        "enum": kw("module"),

	        // scope modifiers
	        "public": kw("modifier"),
	        "private": kw("modifier"),
	        "protected": kw("modifier"),
	        "abstract": kw("modifier"),

	        // operators
	        "as": operator,

	        // types
	        "string": type, "number": type, "boolean": type, "any": type
	      };

	      for (var attr in tsKeywords) {
	        jsKeywords[attr] = tsKeywords[attr];
	      }
	    }

	    return jsKeywords;
	  }();

	  var isOperatorChar = /[+\-*&%=<>!?|~^]/;
	  var isJsonldKeyword = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;

	  function readRegexp(stream) {
	    var escaped = false, next, inSet = false;
	    while ((next = stream.next()) != null) {
	      if (!escaped) {
	        if (next == "/" && !inSet) return;
	        if (next == "[") inSet = true;
	        else if (inSet && next == "]") inSet = false;
	      }
	      escaped = !escaped && next == "\\";
	    }
	  }

	  // Used as scratch variables to communicate multiple values without
	  // consing up tons of objects.
	  var type, content;
	  function ret(tp, style, cont) {
	    type = tp; content = cont;
	    return style;
	  }
	  function tokenBase(stream, state) {
	    var ch = stream.next();
	    if (ch == '"' || ch == "'") {
	      state.tokenize = tokenString(ch);
	      return state.tokenize(stream, state);
	    } else if (ch == "." && stream.match(/^\d+(?:[eE][+\-]?\d+)?/)) {
	      return ret("number", "number");
	    } else if (ch == "." && stream.match("..")) {
	      return ret("spread", "meta");
	    } else if (/[\[\]{}\(\),;\:\.]/.test(ch)) {
	      return ret(ch);
	    } else if (ch == "=" && stream.eat(">")) {
	      return ret("=>", "operator");
	    } else if (ch == "0" && stream.eat(/x/i)) {
	      stream.eatWhile(/[\da-f]/i);
	      return ret("number", "number");
	    } else if (ch == "0" && stream.eat(/o/i)) {
	      stream.eatWhile(/[0-7]/i);
	      return ret("number", "number");
	    } else if (ch == "0" && stream.eat(/b/i)) {
	      stream.eatWhile(/[01]/i);
	      return ret("number", "number");
	    } else if (/\d/.test(ch)) {
	      stream.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/);
	      return ret("number", "number");
	    } else if (ch == "/") {
	      if (stream.eat("*")) {
	        state.tokenize = tokenComment;
	        return tokenComment(stream, state);
	      } else if (stream.eat("/")) {
	        stream.skipToEnd();
	        return ret("comment", "comment");
	      } else if (expressionAllowed(stream, state, 1)) {
	        readRegexp(stream);
	        stream.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/);
	        return ret("regexp", "string-2");
	      } else {
	        stream.eatWhile(isOperatorChar);
	        return ret("operator", "operator", stream.current());
	      }
	    } else if (ch == "`") {
	      state.tokenize = tokenQuasi;
	      return tokenQuasi(stream, state);
	    } else if (ch == "#") {
	      stream.skipToEnd();
	      return ret("error", "error");
	    } else if (isOperatorChar.test(ch)) {
	      stream.eatWhile(isOperatorChar);
	      return ret("operator", "operator", stream.current());
	    } else if (wordRE.test(ch)) {
	      stream.eatWhile(wordRE);
	      var word = stream.current(), known = keywords.propertyIsEnumerable(word) && keywords[word];
	      return (known && state.lastType != ".") ? ret(known.type, known.style, word) :
	                     ret("variable", "variable", word);
	    }
	  }

	  function tokenString(quote) {
	    return function(stream, state) {
	      var escaped = false, next;
	      if (jsonldMode && stream.peek() == "@" && stream.match(isJsonldKeyword)){
	        state.tokenize = tokenBase;
	        return ret("jsonld-keyword", "meta");
	      }
	      while ((next = stream.next()) != null) {
	        if (next == quote && !escaped) break;
	        escaped = !escaped && next == "\\";
	      }
	      if (!escaped) state.tokenize = tokenBase;
	      return ret("string", "string");
	    };
	  }

	  function tokenComment(stream, state) {
	    var maybeEnd = false, ch;
	    while (ch = stream.next()) {
	      if (ch == "/" && maybeEnd) {
	        state.tokenize = tokenBase;
	        break;
	      }
	      maybeEnd = (ch == "*");
	    }
	    return ret("comment", "comment");
	  }

	  function tokenQuasi(stream, state) {
	    var escaped = false, next;
	    while ((next = stream.next()) != null) {
	      if (!escaped && (next == "`" || next == "$" && stream.eat("{"))) {
	        state.tokenize = tokenBase;
	        break;
	      }
	      escaped = !escaped && next == "\\";
	    }
	    return ret("quasi", "string-2", stream.current());
	  }

	  var brackets = "([{}])";
	  // This is a crude lookahead trick to try and notice that we're
	  // parsing the argument patterns for a fat-arrow function before we
	  // actually hit the arrow token. It only works if the arrow is on
	  // the same line as the arguments and there's no strange noise
	  // (comments) in between. Fallback is to only notice when we hit the
	  // arrow, and not declare the arguments as locals for the arrow
	  // body.
	  function findFatArrow(stream, state) {
	    if (state.fatArrowAt) state.fatArrowAt = null;
	    var arrow = stream.string.indexOf("=>", stream.start);
	    if (arrow < 0) return;

	    var depth = 0, sawSomething = false;
	    for (var pos = arrow - 1; pos >= 0; --pos) {
	      var ch = stream.string.charAt(pos);
	      var bracket = brackets.indexOf(ch);
	      if (bracket >= 0 && bracket < 3) {
	        if (!depth) { ++pos; break; }
	        if (--depth == 0) break;
	      } else if (bracket >= 3 && bracket < 6) {
	        ++depth;
	      } else if (wordRE.test(ch)) {
	        sawSomething = true;
	      } else if (/["'\/]/.test(ch)) {
	        return;
	      } else if (sawSomething && !depth) {
	        ++pos;
	        break;
	      }
	    }
	    if (sawSomething && !depth) state.fatArrowAt = pos;
	  }

	  // Parser

	  var atomicTypes = {"atom": true, "number": true, "variable": true, "string": true, "regexp": true, "this": true, "jsonld-keyword": true};

	  function JSLexical(indented, column, type, align, prev, info) {
	    this.indented = indented;
	    this.column = column;
	    this.type = type;
	    this.prev = prev;
	    this.info = info;
	    if (align != null) this.align = align;
	  }

	  function inScope(state, varname) {
	    for (var v = state.localVars; v; v = v.next)
	      if (v.name == varname) return true;
	    for (var cx = state.context; cx; cx = cx.prev) {
	      for (var v = cx.vars; v; v = v.next)
	        if (v.name == varname) return true;
	    }
	  }

	  function parseJS(state, style, type, content, stream) {
	    var cc = state.cc;
	    // Communicate our context to the combinators.
	    // (Less wasteful than consing up a hundred closures on every call.)
	    cx.state = state; cx.stream = stream; cx.marked = null, cx.cc = cc; cx.style = style;

	    if (!state.lexical.hasOwnProperty("align"))
	      state.lexical.align = true;

	    while(true) {
	      var combinator = cc.length ? cc.pop() : jsonMode ? expression : statement;
	      if (combinator(type, content)) {
	        while(cc.length && cc[cc.length - 1].lex)
	          cc.pop()();
	        if (cx.marked) return cx.marked;
	        if (type == "variable" && inScope(state, content)) return "variable-2";
	        return style;
	      }
	    }
	  }

	  // Combinator utils

	  var cx = {state: null, column: null, marked: null, cc: null};
	  function pass() {
	    for (var i = arguments.length - 1; i >= 0; i--) cx.cc.push(arguments[i]);
	  }
	  function cont() {
	    pass.apply(null, arguments);
	    return true;
	  }
	  function register(varname) {
	    function inList(list) {
	      for (var v = list; v; v = v.next)
	        if (v.name == varname) return true;
	      return false;
	    }
	    var state = cx.state;
	    cx.marked = "def";
	    if (state.context) {
	      if (inList(state.localVars)) return;
	      state.localVars = {name: varname, next: state.localVars};
	    } else {
	      if (inList(state.globalVars)) return;
	      if (parserConfig.globalVars)
	        state.globalVars = {name: varname, next: state.globalVars};
	    }
	  }

	  // Combinators

	  var defaultVars = {name: "this", next: {name: "arguments"}};
	  function pushcontext() {
	    cx.state.context = {prev: cx.state.context, vars: cx.state.localVars};
	    cx.state.localVars = defaultVars;
	  }
	  function popcontext() {
	    cx.state.localVars = cx.state.context.vars;
	    cx.state.context = cx.state.context.prev;
	  }
	  function pushlex(type, info) {
	    var result = function() {
	      var state = cx.state, indent = state.indented;
	      if (state.lexical.type == "stat") indent = state.lexical.indented;
	      else for (var outer = state.lexical; outer && outer.type == ")" && outer.align; outer = outer.prev)
	        indent = outer.indented;
	      state.lexical = new JSLexical(indent, cx.stream.column(), type, null, state.lexical, info);
	    };
	    result.lex = true;
	    return result;
	  }
	  function poplex() {
	    var state = cx.state;
	    if (state.lexical.prev) {
	      if (state.lexical.type == ")")
	        state.indented = state.lexical.indented;
	      state.lexical = state.lexical.prev;
	    }
	  }
	  poplex.lex = true;

	  function expect(wanted) {
	    function exp(type) {
	      if (type == wanted) return cont();
	      else if (wanted == ";") return pass();
	      else return cont(exp);
	    };
	    return exp;
	  }

	  function statement(type, value) {
	    if (type == "var") return cont(pushlex("vardef", value.length), vardef, expect(";"), poplex);
	    if (type == "keyword a") return cont(pushlex("form"), expression, statement, poplex);
	    if (type == "keyword b") return cont(pushlex("form"), statement, poplex);
	    if (type == "{") return cont(pushlex("}"), block, poplex);
	    if (type == ";") return cont();
	    if (type == "if") {
	      if (cx.state.lexical.info == "else" && cx.state.cc[cx.state.cc.length - 1] == poplex)
	        cx.state.cc.pop()();
	      return cont(pushlex("form"), expression, statement, poplex, maybeelse);
	    }
	    if (type == "function") return cont(functiondef);
	    if (type == "for") return cont(pushlex("form"), forspec, statement, poplex);
	    if (type == "variable") return cont(pushlex("stat"), maybelabel);
	    if (type == "switch") return cont(pushlex("form"), expression, pushlex("}", "switch"), expect("{"),
	                                      block, poplex, poplex);
	    if (type == "case") return cont(expression, expect(":"));
	    if (type == "default") return cont(expect(":"));
	    if (type == "catch") return cont(pushlex("form"), pushcontext, expect("("), funarg, expect(")"),
	                                     statement, poplex, popcontext);
	    if (type == "class") return cont(pushlex("form"), className, poplex);
	    if (type == "export") return cont(pushlex("stat"), afterExport, poplex);
	    if (type == "import") return cont(pushlex("stat"), afterImport, poplex);
	    if (type == "module") return cont(pushlex("form"), pattern, pushlex("}"), expect("{"), block, poplex, poplex)
	    return pass(pushlex("stat"), expression, expect(";"), poplex);
	  }
	  function expression(type) {
	    return expressionInner(type, false);
	  }
	  function expressionNoComma(type) {
	    return expressionInner(type, true);
	  }
	  function expressionInner(type, noComma) {
	    if (cx.state.fatArrowAt == cx.stream.start) {
	      var body = noComma ? arrowBodyNoComma : arrowBody;
	      if (type == "(") return cont(pushcontext, pushlex(")"), commasep(pattern, ")"), poplex, expect("=>"), body, popcontext);
	      else if (type == "variable") return pass(pushcontext, pattern, expect("=>"), body, popcontext);
	    }

	    var maybeop = noComma ? maybeoperatorNoComma : maybeoperatorComma;
	    if (atomicTypes.hasOwnProperty(type)) return cont(maybeop);
	    if (type == "function") return cont(functiondef, maybeop);
	    if (type == "keyword c") return cont(noComma ? maybeexpressionNoComma : maybeexpression);
	    if (type == "(") return cont(pushlex(")"), maybeexpression, comprehension, expect(")"), poplex, maybeop);
	    if (type == "operator" || type == "spread") return cont(noComma ? expressionNoComma : expression);
	    if (type == "[") return cont(pushlex("]"), arrayLiteral, poplex, maybeop);
	    if (type == "{") return contCommasep(objprop, "}", null, maybeop);
	    if (type == "quasi") return pass(quasi, maybeop);
	    if (type == "new") return cont(maybeTarget(noComma));
	    return cont();
	  }
	  function maybeexpression(type) {
	    if (type.match(/[;\}\)\],]/)) return pass();
	    return pass(expression);
	  }
	  function maybeexpressionNoComma(type) {
	    if (type.match(/[;\}\)\],]/)) return pass();
	    return pass(expressionNoComma);
	  }

	  function maybeoperatorComma(type, value) {
	    if (type == ",") return cont(expression);
	    return maybeoperatorNoComma(type, value, false);
	  }
	  function maybeoperatorNoComma(type, value, noComma) {
	    var me = noComma == false ? maybeoperatorComma : maybeoperatorNoComma;
	    var expr = noComma == false ? expression : expressionNoComma;
	    if (type == "=>") return cont(pushcontext, noComma ? arrowBodyNoComma : arrowBody, popcontext);
	    if (type == "operator") {
	      if (/\+\+|--/.test(value)) return cont(me);
	      if (value == "?") return cont(expression, expect(":"), expr);
	      return cont(expr);
	    }
	    if (type == "quasi") { return pass(quasi, me); }
	    if (type == ";") return;
	    if (type == "(") return contCommasep(expressionNoComma, ")", "call", me);
	    if (type == ".") return cont(property, me);
	    if (type == "[") return cont(pushlex("]"), maybeexpression, expect("]"), poplex, me);
	  }
	  function quasi(type, value) {
	    if (type != "quasi") return pass();
	    if (value.slice(value.length - 2) != "${") return cont(quasi);
	    return cont(expression, continueQuasi);
	  }
	  function continueQuasi(type) {
	    if (type == "}") {
	      cx.marked = "string-2";
	      cx.state.tokenize = tokenQuasi;
	      return cont(quasi);
	    }
	  }
	  function arrowBody(type) {
	    findFatArrow(cx.stream, cx.state);
	    return pass(type == "{" ? statement : expression);
	  }
	  function arrowBodyNoComma(type) {
	    findFatArrow(cx.stream, cx.state);
	    return pass(type == "{" ? statement : expressionNoComma);
	  }
	  function maybeTarget(noComma) {
	    return function(type) {
	      if (type == ".") return cont(noComma ? targetNoComma : target);
	      else return pass(noComma ? expressionNoComma : expression);
	    };
	  }
	  function target(_, value) {
	    if (value == "target") { cx.marked = "keyword"; return cont(maybeoperatorComma); }
	  }
	  function targetNoComma(_, value) {
	    if (value == "target") { cx.marked = "keyword"; return cont(maybeoperatorNoComma); }
	  }
	  function maybelabel(type) {
	    if (type == ":") return cont(poplex, statement);
	    return pass(maybeoperatorComma, expect(";"), poplex);
	  }
	  function property(type) {
	    if (type == "variable") {cx.marked = "property"; return cont();}
	  }
	  function objprop(type, value) {
	    if (type == "variable" || cx.style == "keyword") {
	      cx.marked = "property";
	      if (value == "get" || value == "set") return cont(getterSetter);
	      return cont(afterprop);
	    } else if (type == "number" || type == "string") {
	      cx.marked = jsonldMode ? "property" : (cx.style + " property");
	      return cont(afterprop);
	    } else if (type == "jsonld-keyword") {
	      return cont(afterprop);
	    } else if (type == "modifier") {
	      return cont(objprop)
	    } else if (type == "[") {
	      return cont(expression, expect("]"), afterprop);
	    } else if (type == "spread") {
	      return cont(expression);
	    }
	  }
	  function getterSetter(type) {
	    if (type != "variable") return pass(afterprop);
	    cx.marked = "property";
	    return cont(functiondef);
	  }
	  function afterprop(type) {
	    if (type == ":") return cont(expressionNoComma);
	    if (type == "(") return pass(functiondef);
	  }
	  function commasep(what, end) {
	    function proceed(type) {
	      if (type == ",") {
	        var lex = cx.state.lexical;
	        if (lex.info == "call") lex.pos = (lex.pos || 0) + 1;
	        return cont(what, proceed);
	      }
	      if (type == end) return cont();
	      return cont(expect(end));
	    }
	    return function(type) {
	      if (type == end) return cont();
	      return pass(what, proceed);
	    };
	  }
	  function contCommasep(what, end, info) {
	    for (var i = 3; i < arguments.length; i++)
	      cx.cc.push(arguments[i]);
	    return cont(pushlex(end, info), commasep(what, end), poplex);
	  }
	  function block(type) {
	    if (type == "}") return cont();
	    return pass(statement, block);
	  }
	  function maybetype(type) {
	    if (isTS && type == ":") return cont(typedef);
	  }
	  function maybedefault(_, value) {
	    if (value == "=") return cont(expressionNoComma);
	  }
	  function typedef(type) {
	    if (type == "variable") {cx.marked = "variable-3"; return cont();}
	  }
	  function vardef() {
	    return pass(pattern, maybetype, maybeAssign, vardefCont);
	  }
	  function pattern(type, value) {
	    if (type == "modifier") return cont(pattern)
	    if (type == "variable") { register(value); return cont(); }
	    if (type == "spread") return cont(pattern);
	    if (type == "[") return contCommasep(pattern, "]");
	    if (type == "{") return contCommasep(proppattern, "}");
	  }
	  function proppattern(type, value) {
	    if (type == "variable" && !cx.stream.match(/^\s*:/, false)) {
	      register(value);
	      return cont(maybeAssign);
	    }
	    if (type == "variable") cx.marked = "property";
	    if (type == "spread") return cont(pattern);
	    if (type == "}") return pass();
	    return cont(expect(":"), pattern, maybeAssign);
	  }
	  function maybeAssign(_type, value) {
	    if (value == "=") return cont(expressionNoComma);
	  }
	  function vardefCont(type) {
	    if (type == ",") return cont(vardef);
	  }
	  function maybeelse(type, value) {
	    if (type == "keyword b" && value == "else") return cont(pushlex("form", "else"), statement, poplex);
	  }
	  function forspec(type) {
	    if (type == "(") return cont(pushlex(")"), forspec1, expect(")"), poplex);
	  }
	  function forspec1(type) {
	    if (type == "var") return cont(vardef, expect(";"), forspec2);
	    if (type == ";") return cont(forspec2);
	    if (type == "variable") return cont(formaybeinof);
	    return pass(expression, expect(";"), forspec2);
	  }
	  function formaybeinof(_type, value) {
	    if (value == "in" || value == "of") { cx.marked = "keyword"; return cont(expression); }
	    return cont(maybeoperatorComma, forspec2);
	  }
	  function forspec2(type, value) {
	    if (type == ";") return cont(forspec3);
	    if (value == "in" || value == "of") { cx.marked = "keyword"; return cont(expression); }
	    return pass(expression, expect(";"), forspec3);
	  }
	  function forspec3(type) {
	    if (type != ")") cont(expression);
	  }
	  function functiondef(type, value) {
	    if (value == "*") {cx.marked = "keyword"; return cont(functiondef);}
	    if (type == "variable") {register(value); return cont(functiondef);}
	    if (type == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, statement, popcontext);
	  }
	  function funarg(type) {
	    if (type == "spread") return cont(funarg);
	    return pass(pattern, maybetype, maybedefault);
	  }
	  function className(type, value) {
	    if (type == "variable") {register(value); return cont(classNameAfter);}
	  }
	  function classNameAfter(type, value) {
	    if (value == "extends") return cont(expression, classNameAfter);
	    if (type == "{") return cont(pushlex("}"), classBody, poplex);
	  }
	  function classBody(type, value) {
	    if (type == "variable" || cx.style == "keyword") {
	      if (value == "static") {
	        cx.marked = "keyword";
	        return cont(classBody);
	      }
	      cx.marked = "property";
	      if (value == "get" || value == "set") return cont(classGetterSetter, functiondef, classBody);
	      return cont(functiondef, classBody);
	    }
	    if (value == "*") {
	      cx.marked = "keyword";
	      return cont(classBody);
	    }
	    if (type == ";") return cont(classBody);
	    if (type == "}") return cont();
	  }
	  function classGetterSetter(type) {
	    if (type != "variable") return pass();
	    cx.marked = "property";
	    return cont();
	  }
	  function afterExport(_type, value) {
	    if (value == "*") { cx.marked = "keyword"; return cont(maybeFrom, expect(";")); }
	    if (value == "default") { cx.marked = "keyword"; return cont(expression, expect(";")); }
	    return pass(statement);
	  }
	  function afterImport(type) {
	    if (type == "string") return cont();
	    return pass(importSpec, maybeFrom);
	  }
	  function importSpec(type, value) {
	    if (type == "{") return contCommasep(importSpec, "}");
	    if (type == "variable") register(value);
	    if (value == "*") cx.marked = "keyword";
	    return cont(maybeAs);
	  }
	  function maybeAs(_type, value) {
	    if (value == "as") { cx.marked = "keyword"; return cont(importSpec); }
	  }
	  function maybeFrom(_type, value) {
	    if (value == "from") { cx.marked = "keyword"; return cont(expression); }
	  }
	  function arrayLiteral(type) {
	    if (type == "]") return cont();
	    return pass(expressionNoComma, maybeArrayComprehension);
	  }
	  function maybeArrayComprehension(type) {
	    if (type == "for") return pass(comprehension, expect("]"));
	    if (type == ",") return cont(commasep(maybeexpressionNoComma, "]"));
	    return pass(commasep(expressionNoComma, "]"));
	  }
	  function comprehension(type) {
	    if (type == "for") return cont(forspec, comprehension);
	    if (type == "if") return cont(expression, comprehension);
	  }

	  function isContinuedStatement(state, textAfter) {
	    return state.lastType == "operator" || state.lastType == "," ||
	      isOperatorChar.test(textAfter.charAt(0)) ||
	      /[,.]/.test(textAfter.charAt(0));
	  }

	  // Interface

	  return {
	    startState: function(basecolumn) {
	      var state = {
	        tokenize: tokenBase,
	        lastType: "sof",
	        cc: [],
	        lexical: new JSLexical((basecolumn || 0) - indentUnit, 0, "block", false),
	        localVars: parserConfig.localVars,
	        context: parserConfig.localVars && {vars: parserConfig.localVars},
	        indented: basecolumn || 0
	      };
	      if (parserConfig.globalVars && typeof parserConfig.globalVars == "object")
	        state.globalVars = parserConfig.globalVars;
	      return state;
	    },

	    token: function(stream, state) {
	      if (stream.sol()) {
	        if (!state.lexical.hasOwnProperty("align"))
	          state.lexical.align = false;
	        state.indented = stream.indentation();
	        findFatArrow(stream, state);
	      }
	      if (state.tokenize != tokenComment && stream.eatSpace()) return null;
	      var style = state.tokenize(stream, state);
	      if (type == "comment") return style;
	      state.lastType = type == "operator" && (content == "++" || content == "--") ? "incdec" : type;
	      return parseJS(state, style, type, content, stream);
	    },

	    indent: function(state, textAfter) {
	      if (state.tokenize == tokenComment) return CodeMirror.Pass;
	      if (state.tokenize != tokenBase) return 0;
	      var firstChar = textAfter && textAfter.charAt(0), lexical = state.lexical;
	      // Kludge to prevent 'maybelse' from blocking lexical scope pops
	      if (!/^\s*else\b/.test(textAfter)) for (var i = state.cc.length - 1; i >= 0; --i) {
	        var c = state.cc[i];
	        if (c == poplex) lexical = lexical.prev;
	        else if (c != maybeelse) break;
	      }
	      if (lexical.type == "stat" && firstChar == "}") lexical = lexical.prev;
	      if (statementIndent && lexical.type == ")" && lexical.prev.type == "stat")
	        lexical = lexical.prev;
	      var type = lexical.type, closing = firstChar == type;

	      if (type == "vardef") return lexical.indented + (state.lastType == "operator" || state.lastType == "," ? lexical.info + 1 : 0);
	      else if (type == "form" && firstChar == "{") return lexical.indented;
	      else if (type == "form") return lexical.indented + indentUnit;
	      else if (type == "stat")
	        return lexical.indented + (isContinuedStatement(state, textAfter) ? statementIndent || indentUnit : 0);
	      else if (lexical.info == "switch" && !closing && parserConfig.doubleIndentSwitch != false)
	        return lexical.indented + (/^(?:case|default)\b/.test(textAfter) ? indentUnit : 2 * indentUnit);
	      else if (lexical.align) return lexical.column + (closing ? 0 : 1);
	      else return lexical.indented + (closing ? 0 : indentUnit);
	    },

	    electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
	    blockCommentStart: jsonMode ? null : "/*",
	    blockCommentEnd: jsonMode ? null : "*/",
	    lineComment: jsonMode ? null : "//",
	    fold: "brace",
	    closeBrackets: "()[]{}''\"\"``",

	    helperType: jsonMode ? "json" : "javascript",
	    jsonldMode: jsonldMode,
	    jsonMode: jsonMode,

	    expressionAllowed: expressionAllowed,
	    skipExpression: function(state) {
	      var top = state.cc[state.cc.length - 1]
	      if (top == expression || top == expressionNoComma) state.cc.pop()
	    }
	  };
	});

	CodeMirror.registerHelper("wordChars", "javascript", /[\w$]/);

	CodeMirror.defineMIME("text/javascript", "javascript");
	CodeMirror.defineMIME("text/ecmascript", "javascript");
	CodeMirror.defineMIME("application/javascript", "javascript");
	CodeMirror.defineMIME("application/x-javascript", "javascript");
	CodeMirror.defineMIME("application/ecmascript", "javascript");
	CodeMirror.defineMIME("application/json", {name: "javascript", json: true});
	CodeMirror.defineMIME("application/x-json", {name: "javascript", json: true});
	CodeMirror.defineMIME("application/ld+json", {name: "javascript", jsonld: true});
	CodeMirror.defineMIME("text/typescript", { name: "javascript", typescript: true });
	CodeMirror.defineMIME("application/typescript", { name: "javascript", typescript: true });

	});


/***/ }
/******/ ]);