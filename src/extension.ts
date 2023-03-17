import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let enable = vscode.commands.registerCommand('subway-surfers-gameplay.enable', () => {
		const panel = vscode.window.createWebviewPanel(
			'subSurf',
			'Subway Surfers Gameplay',
			vscode.ViewColumn.Beside,
			{
				enableScripts: true
			}
		);

		panel.webview.html = getWebviewContent();
		panel.webview.html
	});

	context.subscriptions.push(enable);
}

function getWebviewContent(){
	return `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Subway Surfers Gameplay</title>
	</head>
	<body>
	<iframe style="position: absolute; display:flex; flex-grow: 1; width: 100%; height: 100%; align-items:stretch; overflow-y: auto; border: none; margin: 0; padding: 0; margin: 0; padding: 0;" src="https://www.youtube.com/embed/ZtHCnXMjIXY?autoplay=1&mute=1&loop=1&controls=0&disablekb=1&modestbranding=1" title="YouTube video player" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
	</body>
	</html>`;
}

// This method is called when your extension is deactivated
export function deactivate() {}
