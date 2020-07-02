&nbsp;&nbsp;

**Note:** I'm sorry the code isn't formatted perfectly and isn't responsive... I'm working on it. Who knew React Markdown didn't account for code formatting and rendering out of the box...

&nbsp;&nbsp;

Hello! Hopefully you've read the post before this one and know what this series is about. So, I'm not going to explain it... Let's dive right in (with a super easy question... this is the first post after all).

&nbsp;&nbsp;

## The [Question](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/)

&nbsp;&nbsp;

Given the array `nums`, for each `nums[i]` find out how many numbers in the array are smaller than it. That is, for each `nums[i]` you have to count the number of valid `j's` such that `j != i` **and** `nums[j] < nums[i]`.

&nbsp;&nbsp;

Return the answer in an array.

&nbsp;&nbsp;

## Examples

&nbsp;&nbsp;

**Example 1:**

&nbsp;&nbsp;

```
Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation:
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1).
For nums[3]=2 there exist one smaller number than it (1).
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
```

&nbsp;&nbsp;

**Example 2:**

&nbsp;&nbsp;

```
Input: nums = [6,5,4,8]
Output: [2,1,0,3]
```

&nbsp;&nbsp;

**Example 3:**

&nbsp;&nbsp;

```
Input: nums = [7,7,7,7]
Output: [0,0,0,0]
```

&nbsp;&nbsp;

## Approach 1

&nbsp;&nbsp;

The one thing I've learned while attempting algorithmic problems is that its always best to find a brute force solution first and then work on it to make it more efficient. Its always better to find a solution first — no matter how bad — rather than trying to find the perfect solution and getting stuck.

&nbsp;&nbsp;

So, lets try brute force. Reading the question, it basically tells us that for **every** element in the array we need to find how many elements are smaller than it. Questions where you're given an array and need to find something about an element in comparison with the other elements of the array usually imply the usage of nested for loop.

&nbsp;&nbsp;

Breaking down the overall logic, I need to loop over each element of the array, and then for each element of the array, I need to loop over all the elements again and each time I see an element smaller than the current element, I need to increment a counter. Then, I need to push the final count for that number into an array. Lastly, I need to return the array. Looking at the code should help:

&nbsp;&nbsp;

```jsx
//nested loop approach
let result = [];
for (let i = 0; i < nums.length; i++) {
  let count = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] < nums[i]) {
      count++;
    }
  }
  result.push(count);
}
return result;
```

&nbsp;&nbsp;

## Approach 2

&nbsp;&nbsp;

Now that our basic idea is complete (and works... I tested it), its time to try to make the code more efficient, or at the very least approach the problem in a smarter way and write better code.

&nbsp;&nbsp;

Looking at the examples, the arrays be receive are not sorted... and its obvious that if we sort the arrays in ascending order, the indexes of the elements would be the number of elements bigger than them!

&nbsp;&nbsp;

**For example:**

&nbsp;&nbsp;

Input: \[ 12, 7, 89, 3, 75 \]

&nbsp;&nbsp;

Sorted: \[ 3, 7, 12, 75, 89 \]

&nbsp;&nbsp;

Result:

&nbsp;&nbsp;

1. Index of 3 = 0, Elements smaller than 3 = 0
2. Index of 7 = 1, Elements smaller than 7 = 1
3. Index of 12 = 2, Elements smaller than 12 = 2
4. Index of 75 = 3, Elements smaller than 75 = 3
5. Index of 89 = 4, Elements smaller than 89 = 4

&nbsp;&nbsp;

Pretty smart, I know! The only thing we need to take care of though, is that we need to return the result based on the order of the original array. Here's my code:

&nbsp;&nbsp;

```jsx
//faster, shorter approach
let sorted = [...nums].sort((a, b) => a - b);
return nums.map((num) => sorted.indexOf(num));
```

&nbsp;&nbsp;

Its beautiful... I know. The `indexOf` method always returns the first index of the element it finds in the array, which is why arrays with duplicates also work with this solution. Also, because we map over the `nums` array and use the elements from there to find their indexes in the `sorted` array, original order is maintained! Lastly, the `map` function returns an array, which is why we can write the last line the way it is written and it still works!

&nbsp;&nbsp;

So thats it! Well, for this solution, that is. I'll see you in the next post. Apologies if my explanation isn't the best. Hopefully I will get better over time.
