const mkRegex = (str: TemplateStringsArray, opts: string = 'i') =>
	new RegExp(str.raw[0].replace(/\s/gm, ''), opts);

export default {
	commentLine: /^(?:;+)\s*(.*)$/,
	endComment: /(?:;+)\s*(.*)$/,
	includeLine: /(\binclude\s+)((["'])([^\3]+)\3).*$/i,
	macroLine: /\bmacro(?:\s+([^\/;$]+))?/i,
	horizontalRule: /^(.)\1+$/,
	labelPhraseRule: /((\$\$(?!\.))?[\w\.]+)/,
	labelDefinition: /^\@?((\$\$(?!\.))?[\w\.]+)(?::|\s|$)/,
	parentLabel: /^(((\@|\$\$)(?!\.))?\w[\w\.]*)(?::|\s|$)/,
	evalExpression: /^\@?([\w\.]+)\:?\s+(equ|set)\s+(.+)(;.*)?$/i,
	shouldSuggestInstruction: /^(((\$\$(?!\.))?[\w\.]+):?)?\s+(\w+)?(?!.+)$/,
	shouldSuggest1ArgRegister: mkRegex`
		(?:
			(pop|push|dad|ldax|lxi|stax|inx|dcx)|
			(ad[cd]|s[bu]b|ana|ora|xra|cmp|mov|mvi|inr|dcr)
		)
		\s+([a-z]\w*)?$`,
	shouldSuggest2ArgRegister: mkRegex`
		(lxi|mvi|mov)
		\s+(\w+)(,\s*?[^\n$]*)$`,
	defineExpression: mkRegex`
		^\@?([\w\.]+)\:?\s+(
			b?include|read|d[bdqstw]
		)\s+([^\$;]+)(;.*)?$`,
	keyword: mkRegex`^(
		set|equ|label|forward|port|eval|enum|enumconf|nextenum|
		r?org|align|(?:de)?phase|shift|b?include|read|end|
		maxnest|function|(?:end)?struct|(?:end)?section|
		cpu|segment|save|restore|pushv|popv|macro|endm|exitm|
		public|global|shared|irpc?|rept|while|switch|(?:else|end)case|d[bdqstw]|
		assert|fatal|error|warning|message|display|title|prtit|prtexit|fail|
		page|newpage|radix|outradix|encoding|charset|codepage|macexp_(?:dft|ovr)|listing|
		if|ifn?def|ifn?used|ifn?exist|ifn?b|else|elseif|endif|
		(?:(?:no)?(?:expand|expif|expmacro|export|intlabel|globalsymbols))|
		sqrt|a?sinh?|a?cosh?|a?tanh?|a?coth?|exp|alog|a?ld|ln|log|int|
		bitcnt|firstbit|lastbit|bitpos|sgn|abs|toupper|tolower|upstring|lowstring|
		strlen|substr|charfromstr|strstr|val|exprtype
	)$`,
}
