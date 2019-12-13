export default {
	// i8080 instruction set
	instructions: [
		'aci\t',  'adc\t',  'add\t',  'adi\t',  'ana\t',  'ani\t',  'call\t', 'cc\t',
		'cm\t',   'cma\n',  'cmc\n',  'cmp\t',  'cnc\t',  'cnz\t',  'cp\t',   'cpe\t',
		'cpi\t',  'cpo\t',  'cz\t',   'daa\n',  'dad\t',  'dcr\t',  'dcx\t',  'di\n',
		'ei\n',   'hlt\n',  'in\t',   'inr\t',  'inx\t',  'jc\t',   'jm\t',   'jmp\t',
		'jnc\t',  'jnz\t',  'jp\t',   'jpe\t',  'jpo\t',  'jz\t',   'lda\t',  'ldax\t',
		'lhld\t', 'lxi\t',  'mov\t',  'mvi\t',  'nop',    'ora\t',  'ori\t',  'out\t',
		'pchl\n', 'pop\t',  'push\t', 'ral\n',  'rar\n',  'rc\t',   'ret\n',  'rlc\n',
		'rm\t',   'rnc\t',  'rnz\t',  'rp\t',   'rpe\t',  'rpo\t',  'rrc\n',  'rst\t',
		'rz\t',   'sbb\t',  'sbi\t',  'shld\t', 'sphl\n', 'sta\t',  'stax\t', 'stc\n',
		'sub\t',  'sui\t',  'xchg\n', 'xra\t',  'xri\t',  'xthl\n'
	],
	// i8085 extended instruction set
	instructions8085: [
		'rim\n',  'sim\n',  'dsub\n', 'arhl\n', 'rdel\n', 'ldhi\t',
		'ldsi\t', 'shlx\n', 'lhlx\n', 'jx5\n',  'jnx5\n', 'rstv\n'
	],
	registers: [
		/*  0 */ 'a', 'b', 'c', 'd', 'e', 'h', 'l', 'm',
		/*  8 */ 'h', 'd', 'b', 'psw', 'sp'
	],
	// quick pointer into `registers`
	regR16Index: 8
}
