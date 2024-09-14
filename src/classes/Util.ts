export class Util {

    static readFile(filename: string) {
        const basePath = location.pathname.replace('/docs', '')
        //@ts-ignore
        const examplesContext = require.context('!!raw-loader!@site/examples', true, /\.js$/);
        let relativePath = `.${basePath}/${filename}`.replace(/^\.\//, './');
        if (filename.includes('/')) {
            relativePath = `./${filename}`.replace(/^\.\//, './');
        }
        console.log(relativePath)
        const exampleFiles = examplesContext.keys().reduce((acc, key) => {
            acc[key] = examplesContext(key);
            return acc;
        }, {});
        let fileContent = '';
        if (relativePath in exampleFiles) {
            fileContent = exampleFiles[relativePath].default;
        } else {
            fileContent = 'Error: File not found';
        }
        return fileContent
    }

}