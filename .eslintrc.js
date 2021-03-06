module.exports = {
    env: {
        browser: true,
        node: true,
        jest: true,
    },
    extends: [
        "airbnb",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
        "plugin:prettier/recommended",
        "prettier/@typescript-eslint"
    ],
    plugins: [
        "@typescript-eslint",
        "promise"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        },
        project: "./tsconfig.json"
    },
    rules: {
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/prop-types': 'off',
        '@typescript-eslint/interface-name-prefix': [1, {
            prefixWithI: 'always',
        }],
        "prettier/prettier": [
            2,
            {
                arrowParens: "avoid",
                bracketSpacing: false,
                jsxBracketSameLine: true,
                printWidth: 120,
                singleQuote: true,
                trailingComma: "es5",
                tabWidth: 4,
            },
        ],
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.ts', '.tsx'],
            },
        ],
        'import/extensions': [
           "error",
           "ignorePackages",
           {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"
           }
        ]
    }
}
