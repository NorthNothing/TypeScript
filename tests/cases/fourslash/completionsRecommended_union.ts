/// <reference path="fourslash.ts" />

// @strictNullChecks: true

////const enum E { A = "A", B = "B" }
////const enum E2 { X = "X", Y = "Y" }
////const e: E | undefined = /*a*/
////const e2: E | E2 = /*b*/

verify.completions(
    {
        marker: "a",
        includes: {
            name: "E",
            isRecommended: true,
            sortText: completion.SortText.CurrentFileScope
        },
        isNewIdentifierLocation: true,
    },
    {
        marker: "b",
        // Arbitrarily chooses one to be recommended
        includes: [
            {
                name: "E",
                isRecommended: true,
                sortText: completion.SortText.CurrentFileScope
            },
            {
                name: "E2",
                sortText: completion.SortText.CurrentFileScope
            }
        ],
        isNewIdentifierLocation: true,
    },
);
