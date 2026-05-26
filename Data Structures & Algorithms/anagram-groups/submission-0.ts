class Solution {
    groupAnagrams(strs: string[]): string[][] {
        const anagramsHash: object = {};

        for (const str of strs) {
            const key = str.split("").sort().join("");
            if (anagramsHash[key] === undefined) anagramsHash[key] = [];
            anagramsHash[key].push(str);
        }

        const ans = [];

        for (const anagramList of Object.values(anagramsHash)) ans.push(anagramList);

        return ans;
    }
}
