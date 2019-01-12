module.exports = {
    presets: [
        "@babel/preset-react",
        "@babel/preset-typescript",
        [
            "@babel/preset-env",
            {
                modules: false
            }
        ]
    ],
    plugins: [
        "@babel/proposal-class-properties",
        "@babel/proposal-object-rest-spread",
        "babel-plugin-styled-components"
    ]
}
