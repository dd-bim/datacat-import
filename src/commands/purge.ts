import { GluegunCommand, GluegunToolbox } from 'gluegun'
import Client from '../Client';
import { IMPORT_TAG_ID } from '../utils';

const cmd: GluegunCommand = {
    name: 'purge',
    description: 'Removes all imported records',
    run: async function (toolbox: GluegunToolbox) {
        const { print } = toolbox;
        const api = new Client(toolbox);

        api.checkAuthentication();

        try {
            const results = await api.search({ tagged: [IMPORT_TAG_ID] }, 10000);

            print.warning(`About to delete ${results.search.totalElements} records....`);

            for (const { id, name } of results.search.nodes) {
                await api.deleteRecord({ catalogEntryId: id });
                print.success(`${print.checkmark} Deleted catalog record ${name} (${id})...`);
            }

        } catch (e) {
            print.error(`${print.xmark} An error has occured ...`);
            print.newline();
            print.error(e);
        }
    }
};

module.exports = cmd;
