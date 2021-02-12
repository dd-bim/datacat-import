import { GluegunCommand, GluegunToolbox } from 'gluegun'
import Client from '../Client';
import { RelationshipRecordType, SimpleRecordType } from '../types';
import { ASB_ID, FACHMODELL_ID, RAS_ID } from '../utils';

const cmd: GluegunCommand = {
    name: 'prepare',
    description: 'Creates a marking tag to query all imported records',
    run: async function (toolbox: GluegunToolbox) {
        const { print } = toolbox;
        const api = new Client(toolbox);

        api.checkAuthentication();

        try {
            await api.createTag();
            print.success(`${print.checkmark} Import tag initialized...`);
        } catch (e) {
            print.error(`${print.xmark} Error initializing tag. It might already exist...`);
        }

        try {
            await api.createRecord({
                catalogEntryType: SimpleRecordType.Bag,
                properties: {
                    id: FACHMODELL_ID,
                    names: [{
                        languageTag: "de-DE",
                        value: "LG-BIM"
                    }]
                },
                tags: ["6f96aaa7-e08f-49bb-ac63-93061d4c5db2"]
            });

            await api.createRecord({
                catalogEntryType: SimpleRecordType.Bag,
                properties: {
                    id: ASB_ID,
                    names: [{
                        languageTag: "de-DE",
                        value: "ASB-Ing"
                    }]
                },
                tags: ["5997da9b-a716-45ae-84a9-e2a7d186bcf9"]
            });

            await api.createRecord({
                catalogEntryType: SimpleRecordType.Bag,
                properties: {
                    id: RAS_ID,
                    names: [{
                        languageTag: "de-DE",
                        value: "RAS-Verm"
                    }]
                },
                tags: ["5997da9b-a716-45ae-84a9-e2a7d186bcf9"]
            });

            await api.createRelationship({
                relationshipType: RelationshipRecordType.Collects,
                fromId: FACHMODELL_ID,
                toIds: [ASB_ID, RAS_ID]
            })
        } catch (e) {
            print.error(`${print.xmark} Error initializing Fachmodell and Gruppen. They might already exist...`);
        }
    }
};

module.exports = cmd;
