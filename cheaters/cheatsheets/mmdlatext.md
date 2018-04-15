{
    "id": "mmdlatex",
    "style": "css/h4dark.css",
    "layout": "default"
}
%%%END
### Conversion of citations from MultiMarkDown 4 to LaTeX

<!--
#### Move
(← moves in the opposite direction. Use xSHIFT to hightlight)

| Command | Description|
| -- | -- |
| xOPT → |Next word|
| xCTRL → |Next subword |
| xCMD → |End of line|

-->

#### Parenthetical citations
| MMD4 | natbib | Output |
| --|--|
| [#jon90] | \citep{jon90} | (Jones et al., 1990) |
| [#jon90]\[] | \citep{jon90} |
| \[chap. 2][#jon90] | \citep[chap. 2]{jon90} | (Jones et al., 1990, chap. 2) |
| \[chap. 2]\[véase]\[#jon90] | \citep[chap. 2][véase]{jon90} | (véase Jones et al., 1990, chap. 2) |
| | \citep\[véase]\[]{jon90} | (véase Jones et al., 1990) |

#### Textual citations
| MMD4 | natbib | Output |
|--|--|
| [#jon90;] | \citet{jon90} | Jones et al. (1990) |
| [#jon90;][] | \citet{jon90} | |
| [chap. 2][#jon90;] | \citet[chap. 2]{jon90} | Jones et al. (1990, chap. 2) |
| [chap. 2\]\[véase][#jon90;] | \citet[chap. 2][véase]{jon90} | |

#### Full author list
| MMD4 | natbib | Output |
|--|--|
| | \citep\ *{jon90} | (Jones, Baker, et Williams, 1990) |
| | \citet\*{jon90} | Jones, Baker, et Williams (1990) |

#### Multiple citations
| MMD4 | natbib | Output |
|--|--| -- |
| [#jon90,james91] | \citep{jon90,jam91} | (Jones et al., 1990; James et al. 1991) |
| | \citep{jon90,jon91} | (Jones et al., 1990, 1991) |
| | \citep{jon90a,jon90b} | (Jones et al., 1990a,b) |
| | \citet{jon90,jam91} | Jones et al. (1990); James et al. (1991) |



In Scrivener, it is possible to write _[][#jon90],[][#james91]_ if we add to the Compile \| Replacements dialog:

    ][],[# --> ,
    ],[][# --> ,

#### Partial citations
| MMD4 | natbib | Output |
| --|-- |
| | \citeauthor{jon90} | Jones et al. |
| | \citeauthor*{jon90} | Jones, Baker, et Williams |
| | \citeyear{jon90} | 1990 |
| | \citeyearpar{jon90} | (1990) |


#### Forcing upper cased names
| MMD4 | natbib | Output |
| --|-- |
| | \Citep{dRob98} | (Della Robbia, 1998) |
| | \Citet{dRob98} | Della Robbia (1998) |
| | \Citeauthor{dRob98} | Della Robbia |

#### Including a source in bibliography that was not cited
| MMD4 | natbib | Output |
| --|-- | -- |
| \[Not cited][#jon90] | | |
