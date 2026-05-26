class Solution {
    groupAnagrams(strs: string[]): string[][] {
        const anagramsHash: object = {};

        for (const str of strs) {
            const key = str.split("").sort().join("");
            if (anagramsHash[key] === undefined) anagramsHash[key] = [];
            anagramsHash[key].push(str);
        }

        return Object.values(anagramsHash);
    }
}
