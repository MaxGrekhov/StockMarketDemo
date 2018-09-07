const presets = [
    ["@babel/preset-react"],
    ["@babel/preset-env", {
        targets: ["last 2 version", "> 1%", "IE 11"],
        useBuiltIns: "entry"
    }]
];

const plugins = [
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-async-to-generator"
];

module.exports = { presets, plugins };