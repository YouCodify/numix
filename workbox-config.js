module.exports = {
    globDirectory: '.',
    globPatterns: [
        '**/*.{html,json,js,css,png,ico,map}'
    ],
    swDest: 'sw.js',
    ignoreURLParametersMatching: [
        /^utm_/,
        /^fbclid$/
    ]
};