provideCodeLenses: function(model, token) {
    return [
        {
            range: {
                startLineNumber: 1,
                startColumn: 1,
                endLineNumber: 2,
                endColumn: 1
            },
            id: "First Line",
            command: {
                id: commandId,
                title: "First Line",
                arguments: { from: 1, to: 2 },
            }
        }
    ];
}