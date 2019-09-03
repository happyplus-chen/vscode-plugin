// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log('Congratulations, your extension "jestr" is now active!');
  let debugButton = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left,
    4.5
  );

  debugButton.command = "extension.runXxx";
  debugButton.text = '3.0';
  debugButton.tooltip = "Debug the given target";
  debugButton.show();

  let runTest = vscode.commands.registerCommand(
    "extension.jestRun",
    function() {
	  debugButton.text = debugButton.text === '2.0' ? '3.0':'2.0'
      vscode.window.showInformationMessage("run!");
    }
  );
  let runDebugger = vscode.commands.registerCommand(
    "extension.jestDebug",
    function(uri) {
      vscode.window.showInformationMessage("debug!");
      console.log(uri);
    }
  );

  let runXxx = vscode.commands.registerCommand(
    "extension.runXxx",
    function() {
	  debugButton.text = debugButton.text === '2.0' ? '3.0':'2.0'
      vscode.window.showInformationMessage("run!");
    }
  );

  context.subscriptions.push(runTest);
  context.subscriptions.push(runDebugger);
  context.subscriptions.push(runXxx);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
  console.log("您的扩展“vscode-plugin-demo”已被释放！");
}

module.exports = {
  activate,
  deactivate
};
