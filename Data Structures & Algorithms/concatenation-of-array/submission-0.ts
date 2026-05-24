class Solution {
    getConcatenation(nums: number[]): number[] {
        const ans: number[] = []
        for (let i = 0; i < 2; i++) {
            for (const num of nums) ans.push(num);
        }
        return ans;
    }
}
