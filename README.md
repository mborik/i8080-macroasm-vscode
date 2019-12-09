# Support for macro-assembler of Intel 8080/8085 in Visual Studio Code

The **i8080 Macro-Assembler** extension for Visual Studio Code provides the following features inside VS Code:

* syntax highlighting of Intel 8080/8085 assembly sources of well known [Macroassembler AS](http://john.ccac.rwth-aachen.de:8000/as/)
* [problem matcher](#problem-matchers) of Macroassembler AS compilation output
* label and symbol documenter on hover, defintion provider, completition proposer
* macro documenter and argument definition provider
* snippets for macros and source control keywords

## Problem matchers

There is predefined problem matcher `errmatcher-as` to handle reported errors from compilation output of Macroassembler AS.
This value can be used in `.vscode/tasks.json` of your project's build task, for example:
```json
    ...
    "problemMatcher": "$errmatcher-as"
    ...
```

## IntelliSense showcase

### Symbol Provider:
- provide symbols or labels in current file in "Go to Symbol in File..." [`Ctrl+Shift+O`, `Cmd+Shift+O`]
- provide symbols or labels also in all includes in "Go to Symbol in Workspace..." [`Ctrl+T`, `Cmd+T`]

### Definition Provider:
- generated map of every symbol defined considers also modules or temporal labels:

### Completion Proposer
- inteligent completion of directives, pseudo-instructions, instructions, registers, labels or symbols:

### Hover over symbol:
- show symbol's value or specific definiton:


## License

This extension is subject to [these license terms](LICENSE).

The source code to this extension is available on [github](https://github.com/mborik/i8080-macroasm-vscode) and licensed under the [MIT license](LICENSE).
