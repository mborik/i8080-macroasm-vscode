import * as vscode from 'vscode';
import { ASMHoverProvider } from "./hover";
import { ASMSymbolDocumenter } from "./symbolDocumenter";
import { ASMCompletionProposer } from './completionProposer';
import { ASMDefinitionProvider } from './definitionProvider';
import { ASMDocumentSymbolProvider, ASMWorkspaceSymbolProvider } from './symbolProvider';

let symbolDocumenter: ASMSymbolDocumenter | undefined;
export const EXTENSION_LANGUAGE_ID = 'i8080-macroasm';

export function activate(ctx: vscode.ExtensionContext) {
	const languageSelector: vscode.DocumentFilter = { language: EXTENSION_LANGUAGE_ID, scheme: "file" };
	const settings = vscode.workspace.getConfiguration(EXTENSION_LANGUAGE_ID);

	symbolDocumenter = new ASMSymbolDocumenter(settings);

	ctx.subscriptions.push(
		vscode.languages.registerHoverProvider(languageSelector, new ASMHoverProvider(symbolDocumenter)),
		vscode.languages.registerCompletionItemProvider(languageSelector, new ASMCompletionProposer(symbolDocumenter), ',', '.', ' '),
		vscode.languages.registerDefinitionProvider(languageSelector, new ASMDefinitionProvider(symbolDocumenter)),
		vscode.languages.registerDocumentSymbolProvider(languageSelector, new ASMDocumentSymbolProvider(symbolDocumenter)),
		vscode.languages.registerWorkspaceSymbolProvider(new ASMWorkspaceSymbolProvider(symbolDocumenter)),
	);
}

export function deactivate() {
	if (symbolDocumenter) {
		symbolDocumenter.destroy();
		symbolDocumenter = undefined;
	}
}
