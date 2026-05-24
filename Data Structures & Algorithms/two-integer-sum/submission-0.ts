class Solution {
    twoSum(nums: number[], target: number): number[] {
        if (nums.length === 2) return [0, 1];

        const seen = {};

        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            if (seen[complement] !== undefined) return [seen[complement], i];
            seen[nums[i]] = i;
        }
    }
}
