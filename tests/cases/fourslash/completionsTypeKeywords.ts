/// <reference path="fourslash.ts" />

// @noLib: true

////type T = /**/

verify.completions({
    marker: "",
    exact: [
        completion.globalThisEntry,
        { name: "T", sortText: completion.SortText.CurrentFileScope },
        ...completion.typeKeywords
    ],
});
