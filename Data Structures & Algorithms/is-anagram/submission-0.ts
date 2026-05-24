class Solution {
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const count = {};

        for (const c of s) {
            if (count[c] === undefined) count[c] = 0;
            count[c]++;
        }

        for (const c of t) {
            if (count[c] === undefined) return false;
            count[c]--;
            if (count[c] < 0) return false;
        }

        return true;
    }
}
