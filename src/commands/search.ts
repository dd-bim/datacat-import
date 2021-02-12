import { GluegunCommand, GluegunToolbox } from 'gluegun'
import Client from '../Client';
// import * as XLSX from 'xlsx';

const SEARCH_QUESTION = {
    type: 'input',
    name: 'query',
    message: 'SearchTerm:'
};

const cmd: GluegunCommand = {
    name: 'search',
    description: 'Import ASB-Ing in BIMStruct Excel format',
    run: async function (toolbox: GluegunToolbox) {
        const { print, prompt } = toolbox;
        const api = new Client(toolbox);

        api.checkAuthentication();

        const { query } = await prompt.ask(SEARCH_QUESTION);
        const result = await api.search({ query });
        const { nodes, totalElements } = result.search;
        const rows = [
            ["ID", "Type", "Name"]
        ];

        result.search.nodes.forEach(({ id, recordType, name }) => rows.push([id, recordType, name]));

        print.success(`${nodes.length} / ${totalElements} results...`);
        print.table(rows, { format: "markdown" });

    }
};

module.exports = cmd;
