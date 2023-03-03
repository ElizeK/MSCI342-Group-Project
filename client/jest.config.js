module.exports = {
    preset: 'ts-jest',
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        "^.+\\.(js|jsx)$": "babel-jest",
    },
    moduleFileExtensions: ['js', 'jsx'],
    moduleDirectories: ['node_modules', 'bower_components', 'shared'],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(scss|sass|css)$": "identity-obj-proxy",
        "@fontsource/oswald": "identity-obj-proxy",
        "@fontsource/inter": "identity-obj-proxy",
        "@mui/material": "identity-obj-proxy",
        "@faker-js/faker": "identity-obj-proxy",
        "@testing-library/user-event": "identity-obj-proxy",
        '@mui/icons-material/Favorite': "identity-obj-proxy",
        '@mui/icons-material/ExpandMore': "identity-obj-proxy",
        '@mui/icons-material/MoreVert': "identity-obj-proxy",



    },
};