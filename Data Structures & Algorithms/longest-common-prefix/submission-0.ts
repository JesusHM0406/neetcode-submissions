class Solution {
    longestCommonPrefix(strs: string[]): string {
        const firstStr = strs[0];

        for (let i = 0; i < firstStr.length; i++) {
            for (const str of strs) {
                if (str.length === i || str[i] !== firstStr[i]) return str.slice(0, i);
            }
        }

        return firstStr;
    }
}
