'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: This method returns the first argument it receives,
 * any value can be an arguement and that value gets returned.
 * 
 * @param {Value} value: It can be any value.
 * 
 * @return {Value} value: Returns value.
 */
function identity(value){
    return value;                
}
module.exports.identity = identity;

/**
 * typeOf: Designed to return a string representation of the 
 * datatype, of any value passed as an arguement.
 * 
 * @param {Value} value: It can be any value.
 * 
 * @return {String} Returns a string representation of the datatype
 * passed as the arguement 
 */
function typeOf(value){
    if(value===null){
        return 'null';
    }
    else if(Array.isArray(value)===true){
        return "array";
    }
    else if(typeof value ==='object'){
        return "object";
    }
    else if(typeof(value)==="string"){
        return "string";
    }
    else if(typeof(value)==="number"){
        return "number";
    }
    else if(typeof(value)==="undefined"){
        return "undefined";
    }
    else if(typeof(value)==="boolean"){
        return "boolean";
    }
    else if(value instanceof Date){
        return "date";
    }
    else if(typeof(value)==="function"){
        return "function";
    }
    else{
        return "undefined";
    }
}
module.exports.typeOf = typeOf;

/**
 * first: Designed accept an array and a number as arguements, and
 * return the first element of the array up to the input number starting
 * from the 0th index.
 * 
 * @param {Array} array: The collection over which to iterate.
 * @param {Number} number: The number items that are 
 * returned from the array starting from the 0th index.
 *
 * @return {Array}: Returns a new array made from the elements starting from 
 * the first index to the nth number index from the number arguement.
 */
function first(array, number){
    if(typeOf(array)!=='array'|| number < 0){            
        return [];                                   
    }
    else if(typeOf(number)!=='number'|| number===undefined){   
        return array[0];                               
    }
    else if(number>array.length){                       
        return array;                            
    }
    else{
        return array.slice(0, number);                       
    }
}
module.exports.first = first;

/**
 * last: Designed accept an array and a number as arguements, and
 * return the last elements of the array from the arguement number from the
 * end up until the end of the array
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Number} number: The number items that are 
 * returned from the array starting from last index place 
 * down to the number subtracted from the last index place.
 * 
 * @return {Array}: Returns a new array made from the elements starting from 
 * the last index down to the nth number index from the number arguement.
 */
function last(array, number){
    if(typeOf(array)!=='array'|| number < 0){                    
        return [];                                                
    }
    else if(typeOf(number)!=='number'|| number===undefined){      
        return array[array.length-1];                              
    }
    else if(number>array.length){                                  
        return array;                                               
    }
    else{
        return array.slice((array.length)-number, array.length);   
    }                                                              
}
module.exports.last = last;


/**
 * indexOf: Designed to return the first occurence of the arguement
 * value in the arguement array. If there is no match the function
 * returns "-1".
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Value} value: Can be any value.
 * 
 * @return {Number}: The return number for the index place of the matching value
 * in the array, or "-1" if there is no match in the array.
 */
function indexOf(array, value){           
    for(let i = 0; i < array.length; i++){      
        if(array[i]===value){                  
            return i;                          
        }
    }
    return -1;                                 
}
module.exports.indexOf = indexOf;

/**
 * contains: This function checks to see if the arguement array
 * contains the value anywhere in any index and returns a boolean.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Value} value: Can be any value.
 * 
 * @return {Boolean}: True or False if the value is in the array.
 */
function contains(array, value){            
    return array.includes(value) ? true : false;    
}
module.exports.contains = contains;


/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * unique: Designed to take an array as an arguement and return a
 * new array with all of the duplicate elements removed that were
 * present in the arguement array.
 * 
 * @param {Array} array: The array over which to iterate.
 * 
 * @return {Array}: A new array with the duplicates removed from
 * the arguement array.
 */
function unique(array){                          
    return [...new Set(array)];                        
}
module.exports.unique = unique;


/**
 * filter: Designed to filter values in a collection based on a test. 
 * Takes a collection, Array or Object, and passes each value 
 * in the collection through a test Function. The test Function returns 
 * true if the value passes the test, false otherwise. Values that pass 
 * the test are collected and returned in an output Array.
 * 
 * @param {Array or Object} collection: The collection to filter.
 * @param {Function} test: The Function to be applied to each value in 
 * the collection. The test Function must return a Boolean based on some 
 * logic which tests the value given to it.
 * 
 * @return {Array}: An Array containing the filtered collection values. 
 * The Array will contain only the values that passed the test.
 * 
 * Usage: 
 * 
 *      const letters = ['a', 'b', 'b', 'c'];
 *      const onlyBs = filter(letters, function(letter) {
 *          return letter === 'b';
 *      });
 *      console.log(onlyBs); // -> ['b', 'b']
 */
 
function filter(collection, test){                       
    let result = [];                                    
    each(collection, function(element, index, array){                        
        if(test(element, index, array) === true){                        
            result.push(element);                             
        }
        });
    return result;                                      
}

module.exports.filter = filter;


/**
 * reject: Takes two arguements an array and a function, reject loops over the
 * array and tests each element against the arguement function and for each
 * element that tests negative, that element will be pushed into a new array
 * that will be returned at the end of the loop. This is the opposite of filter.
 * 
 * @param {Array or Object} collection: The collection to filter for false values.
 * @param {Function} test: The Function to be applied to each value in 
 * the collection. The test Function must return a Boolean based on some 
 * logic which tests the value given to it.
 * 
 * @return {Array}: An Array containing the filtered collection values. 
 * The Array will contain only the values that failed the test.
 */
function reject(collection, test){                       
    let result = [];                                   
    each(collection, function(e,i,a){                       
        if(test(e,i,a)===false){                       
            result.push(e);                             
        }
        });
    return result;                                     
}
module.exports.reject = reject;

/**
 * partition: Designed to take an array as an arguement and a test function, 
 * Each element that passes the test get pushed into a passing array, each
 * element that fails the test will be pushed into a failing array. The return
 * for the function is 
 * 
 * @param {Array} arr: The collection over which to iterate.
 * @param {Function} test: The Function to be applied to each value in 
 * the collection. The test Function must return a Boolean based on some 
 * logic which tests the value given to it.
 * 
 * @return {Array}: An array of two arrays, the first array being the
 * passing array full of elements that passed the test function, 
 * then second array full of element that failed the test function.
 */
function partition(arr, test){               
    let result = [];                                
    let truArr = filter(arr, test);              
    let falArr = reject(arr, test);              
    result.push(truArr, falArr);                    
    return result;                                 
}
module.exports.partition = partition;

/**
 * map: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection. and each value in the
 * collection gets pushed to a new array that will be returned at the 
 * end of the iteration over the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the 
 * collection
 * 
 * @return {Array}: An array composed of the values from the collection
 * now "mapped," from the arguement action function.
 */
function map(collection, func){                       
    let result = [];                                       
    each(collection, function(value, index, collection){ 
        let mapped = func(value, index, collection);        
        result.push(mapped);                                
    });
    return result;                                         
}
module.exports.map = map;

/**
 * pluck: Designed to loop an array of objects and take a object's property
 * as a arguement. If that property is in the nested object then function
 * returns an array of the matching property from the object array.
 * 
 * @param {Array} array: An array of objects
 * @param {Property} property: The property from each object in the array that
 * will be pushed into a new return array.
 * 
 * @return {Array}: An array composed of the values that match the property 
 * arguement from the nested objects in the array.
 */
function pluck(array, property){                   
    return map(array, object => object[property]);
}
module.exports.pluck = pluck;

/**
 * every: Designed to loop over a collection, Array or Object, and applies the 
 * action a test function to each value in the collection, if every value in
 * the collection passes the test then every will return true, if any value
 * in the test fails, then every will return false. If there is no test function
 * arguement, and each value is truthy then the function will return true.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} test: The Function to be applied to each value in 
 * the collection. The test Function must return a Boolean based on some 
 * logic which tests the value given to it.
 * 
 * @return {Boolean}: True if every value tests positive against the test or is truthy if
 * there is no test give, false if any value fails the test or if any value in the 
 * collection is falsey.
 */
function every(collection, test){                         
    if(test !== undefined){                                     
        if(typeOf(collection)==='array'){                    
            return filter(collection, test).length === collection.length ? true : false;
        }                                                                              
        if(typeOf(collection)==='object'){                   
            for (let key in collection) {                     
                if(test(collection[key], key, collection)===false){
                    return false;
                }
            }   
            return true;                                      
        }
    }
    else{                                                     
        if(typeOf(collection)==='array'){                    
            for(let i = 0; i < collection.length; i++){        
                if(collection[i]===false){
                    return false;
                }
            }
            return true;                                      
        }
    }
}
module.exports.every = every;

/**
 * some: Designed to loop over a collection, Array or Object, and applies the 
 * action a test function to each value in the collection, if every value in
 * the collection passes any test then every will return true. If not one
 * value in the collection passes any test then then function will return
 * false.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} test: The Function to be applied to each value in 
 * the collection. The test Function must return a Boolean based on some 
 * logic which tests the value given to it.
 * 
 * @return {Boolean}: True if at least one value tests positive against the
 * test or is truthy if there is no test give, false if every value 
 * fails the test or if every value in the collection is falsey.
 */
function some(collection, test){                              
    if(test !== undefined){                                        
        if(typeOf(collection)==='array'){                         
            for(let i = 0; i < collection.length; i++){            
                if(test(collection[i])===true){                    
                    return true;                                    
                }
            }
            return false;                                          
        }
        if(typeOf(collection)==='object'){                      
            for (let key in collection) {                           
                if(test(collection[key], key, collection)===true){ 
                    return true;                                    
                }
            }
            return false;                                          
        }   
    }
    else{                                                          
        if(typeOf(collection)==='array'){                        
            for(let i = 0; i < collection.length; i++){            
                if(collection[i]===true){                          
                    return true;                                   
                }
            }
            return false;                                           
        }
    }
}
module.exports.some = some;

/**
 * reduce: Takes an array and a callback function and uses that function 
 * on each value in the array, the return will be a single value, that
 * has been "reduced". If no initial value is (or seed) is present 
 * then the function sets the accumulator to the first index in the array.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Function} func: The callback function to be applied to each value in the 
 * collection
 * @param {Number} seed: The initial value supplied sets this as the accumulator
 * value skipping over the "current value."
 * 
 * @return {Value}: The return value is the iterated value in the accumulator.
 */
function reduce(array, func, seed){                              
    if(!array.length && seed===undefined){                            
        throw new TypeError("Reduce of empty array and no initial value!"); 
    }
    let accumulator = seed;                                               
    let index = 0;                                                        
    if(seed===undefined){                                                
        accumulator = array[0];                                       
        index = 1;                                                        
    }
    for(; index < array.length; index++){                             
        accumulator = func(accumulator, array[index], index, array);
    }                                                                     
    return accumulator;                                                    
}
module.exports.reduce = reduce;

/**
 * extend: This function iterates over any amount of arguement objects and
 * mutates the first arguement object. This first object inherits all of the 
 * properties from each of the second paramenters object or objects as
 * an arguement.
 * 
 * @param {Object} obj1: The object that will inherit properties.
 * @param {Object or Objects} obj2: The object or objects from which each
 * property will be inherited.
 * 
 * @return {Object}: The return is the first arguement object except mutated
 * with the newly inherityed properties from the second arguement's object
 * or objects.
 */
function extend(obj1, ...obj2){               
    return Object.assign(obj1, ...obj2);             
}
module.exports.extend = extend;