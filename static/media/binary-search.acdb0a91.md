# A Note on Binary Search

Whenever I need to do binary search, I am always left wondering whether I left something out of my implementation. For instance, when I split my array in half, am I supposed to include the midpoint? There are these small details in the implementation that can really throw off your results.

I saw this [video](https://www.youtube.com/watch?v=tgVSkMA8joQ) some time ago, and I thought that it gave a great way to think about binary search. I used the tips in that video to implement the binary search algorithm again. Below is the code and some notes.

## My Code
    #include <iostream>
    #include <algorithm>
    using namespace std;

    int binarySearch(int nums[], int toInsert, int left, int right) {
        while (left < right) {
            int mid = (left + right) / 2;
            if (nums[mid] >= toInsert) {
                right = mid;
            } else if (nums[mid] < toInsert) {
                left = mid + 1;
            }
        }
        return left;
    }

    int main()
    {
        int nums[] = { 5, 3, 3, 5, 9, 2, 1, 0, 7, 10 };
        sort(nums, nums + 10);
        for (int num : nums) {
            cout << num << " ";
        }
        cout << endl;
        for (int i = -5; i < 13; i++) {
            cout << i << " " << binarySearch(nums, i, 0, 10) << endl;
        }
        return 0;
    }

## Notes
* A good way to think about binary search is to ask yourself, where is the first place in the array that I should insert this element? If you keep this question in mind, you will not be left wondering what you should return if the element does not exist.
* Since we want the first place to place the element, we are checking for left < right in our while loop. We want to keep running binary search until we find the first location where we run out of elements to check.
* When we split the array, we either set the left pointer to be 1 more than the midpoint if the midpoint's value is less than the desired value, or we set the right pointer to be the midpoint. The left pointer gets an additional 1 tacked on because we can never insert our desired element at the midpoint when the midpoint's value is less than the desired value. The right pointer gets set to the midpoint because we could still insert the desired element at that position.
* If we think about binary search as inserting an element in the first possible location, we can think of our left and right pointers as the outermost places that we could insert the element.