/** 题目描述
 * 
 * 输入一个整形数组（可能有正数和负数），
 * 求数组中连续子数组（最少有一个元素）的最大和。
 * 要求时间复杂度为O(n)。
 * 1,返回最大和结果
 * 2,返回索引
 */

function getMaxInArray(arr) {
    let start = 0,
        end = 0,
        sum = 0,
        max = 0;
    for (let i = 0; i < arr.length; i++) {
        start = sum > 0 ? start : i
        sum += arr[i]
        sum = sum > 0 ? sum : 0
        if (sum > max) {
            max = sum;
            end = i;
        }
    }
    return {
        start,
        end,
        max
    }
}

let arr = [1, -2, 3, 10, -4, 7, 2, -5] //18
let arr2 = [-1, -2, 3, -10, -4, 7, 2, -5] //9
let arr3 = [-1, -2, -3, -10, -4, -7, -2, -5] //0
let arr4 = [-1, 2, -3, 4, -5, 6, -7, 8] //8
console.log(getMaxInArray(arr))
console.log(getMaxInArray(arr2))
console.log(getMaxInArray(arr3))
console.log(getMaxInArray(arr4))