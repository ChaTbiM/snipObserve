
function getModelsNames() {
    const FileSet = require('file-set')
    const fileSet = new FileSet(['models/TabAnnexe*.js', 'models/TabCur*.js', 'models/TabDb*.js',
        'models/TabRel*.js', 'models/TabSem*.js'
    ])

    ModelsNames = fileSet.files.map((path) => {
        return path.split("/")[1].split(".js")[0];
    })

    return ModelsNames;
}

const utils = {
    getModelsNames
}

module.exports = utils;

