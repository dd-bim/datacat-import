import { GluegunCommand, GluegunToolbox } from 'gluegun'
import Client from '../Client';
import * as XLSX from 'xlsx';
import { RelationshipRecordType, SimpleRecordType } from '../types';
import { ASB_CONFIG, Mode, RAS_CONFIG } from '../utils';

const FILEPATH_QUESTION = {
    type: 'input',
    name: 'filePath',
    message: 'Import file path:'
}

const MODE_QUESTION = {
    type: 'select',
    name: 'mode',
    message: 'Mode:',
    choices: ['ASB', 'RAS']
}

const cmd: GluegunCommand = {
    name: 'import',
    description: 'Importiert Excel-Struktur',
    run: async function (toolbox: GluegunToolbox) {
        const api = new Client(toolbox);

        api.checkAuthentication();

        const { prompt } = toolbox;
        const { filePath, mode } = await prompt.ask([FILEPATH_QUESTION, MODE_QUESTION]);

        let config: Mode;
        switch (mode) {
            case "ASB": {
                config = ASB_CONFIG;
                break;
            }
            case "RAS": {
                config = RAS_CONFIG;
                break;
            }
        }

        const workbook = XLSX.readFile(filePath);

        await importSubjects(api, toolbox, workbook, config);
        await importProperties(api, toolbox, workbook);
        await importGroupPropertyMappings(api, toolbox, workbook, config);
    }
};

async function importSubjects(api: Client, toolbox: GluegunToolbox, workbook: XLSX.WorkBook, mode = ASB_CONFIG) {
    const { print } = toolbox;
    const sheet = workbook.Sheets["Merkmalsgruppen"];
    const range = XLSX.utils.decode_range("A5:100");

    const rows = [];

    for (let r = range.s.r; r <= range.e.r; ++r) {
        const getValue = (c: number) => {
            const col = XLSX.utils.encode_cell({ c, r });
            return sheet[col] ? sheet[col].w : "";
        }

        if (!getValue(2)) {
            continue;
        }

        rows.push({
            id: getValue(mode.idIdx),
            category: getValue(mode.categoryIdx),
            name: getValue(mode.nameIdx),
            fullname: getValue(mode.fullNameIdx),
            description: getValue(mode.descriptionIdx)
        });
    }

    for (const { id, category, fullname, name, description } of rows) {
        const sanitizedName = `${name.replace("_", " ").trim()} (${fullname})`;

        if (category === "Klasse") {
            try {
                await api.createRecord({
                    catalogEntryType: SimpleRecordType.Subject,
                    tags: ["e9b2cd6d-76f7-4c55-96ab-12d084d21e96"],
                    properties: {
                        id,
                        version: {
                            versionId: "1.0"
                        },
                        names: [{
                            languageTag: "de-DE",
                            value: sanitizedName
                        }],
                        descriptions: [{
                            languageTag: "de-DE",
                            value: description
                        }],
                    }
                });
                print.success(`${print.checkmark} Created new record "Klasse"... ${name} (${id})`);
            } catch (e) {
                print.warning(`${print.xmark} Error creating record "Klasse"... ${name} (${id})`);
                print.newline();
                print.error(e);
                process.exit(0);
            }
        } else if (category === "Domäne") {
            try {
                await api.createRecord({
                    catalogEntryType: SimpleRecordType.Measure,
                    properties: {
                        id,
                        version: {
                            versionId: "1.0"
                        },
                        names: [{
                            languageTag: "de-DE",
                            value: sanitizedName
                        }],
                        descriptions: [{
                            languageTag: "de-DE",
                            value: description
                        }],
                    }
                });
                print.success(`${print.checkmark} Created new record "Domäne"... ${name} (${id})`);
            } catch (e) {
                print.warning(`${print.xmark} Error creating record "Domäne"... ${name} (${id})`);
                print.newline();
                print.error(e);
                process.exit(0);
            }
        } else if (category === "besondere Verwendung") {
            try {
                await api.createRecord({
                    catalogEntryType: SimpleRecordType.Nest,
                    tags: ["a27c8e3c-5fd1-47c9-806a-6ded070efae8"],
                    properties: {
                        id,
                        version: {
                            versionId: "1.0"
                        },
                        names: [{
                            languageTag: "de-DE",
                            value: sanitizedName
                        }],
                        descriptions: [{
                            languageTag: "de-DE",
                            value: description
                        }],
                    }
                });
                print.success(`${print.checkmark} Created new record "besondere Verwendung"... ${name} (${id})`);
            } catch (e) {
                print.warning(`${print.xmark} Error creating record "besondere Verwendung"... ${name} (${id})`);
                print.newline();
                print.error(e);
                process.exit(0);
            }
        }
    }
}

async function importProperties(api: Client, toolbox: GluegunToolbox, workbook: XLSX.WorkBook) {
    const { print } = toolbox;
    const sheet = workbook.Sheets["Merkmale"];
    const range = XLSX.utils.decode_range("A5:Y100");

    const rows = [];

    for (let r = range.s.r; r <= range.e.r; ++r) {
        const getValue = (c: number) => {
            const col = XLSX.utils.encode_cell({ c, r });
            return sheet[col] ? sheet[col].w : "";
        }

        if (!getValue(2)) continue;

        rows.push({
            id: getValue(3),
            fullname: getValue(0),
            name: getValue(2),
            description: getValue(4),
            example: getValue(5),
            datatype: getValue(18),
            values: getValue(19),
            unit: getValue(20)
        });
    }

    for (const { id, fullname, name, description, example, datatype, values } of rows) {
        const sanitizedName = `${name.replace("_", " ").trim()} (${fullname})`;

        try {
            await api.createRecord({
                catalogEntryType: SimpleRecordType.Property,
                properties: {
                    id,
                    version: {
                        versionId: "1.0"
                    },
                    names: [{
                        languageTag: "de-DE",
                        value: sanitizedName
                    }],
                    descriptions: [{
                        languageTag: "de-DE",
                        value: [description, example].join("\n")
                    }]
                }
            });
            print.success(`${print.checkmark} Created new record "Merkmal"... ${name} (${id})`);
        } catch (e) {
            print.error(`${print.xmark} Error creating record "Merkmal"... ${name} (${id})`);
            print.newline();
            print.error(e);
            process.exit(0);
        }

        if (datatype === "Aufzählung") {
            const valueLabels = values.split(";").map(x => x.trim());
            const valueIds = [];

            try {
                for (const label of valueLabels) {
                    const newId = await api.createRecord({
                        catalogEntryType: SimpleRecordType.Value,
                        properties: {
                            version: {
                                versionId: "1.0"
                            },
                            names: [{
                                languageTag: "de-DE",
                                value: label
                            }]
                        }
                    });
                    print.success(`${print.checkmark} Created value... ${label} (${newId})`);
                    valueIds.push(newId);
                }

                const measureId = await api.createRecord({
                    catalogEntryType: SimpleRecordType.Measure,
                    properties: {
                        version: {
                            versionId: "1.0"
                        },
                        names: [{
                            languageTag: "de-DE",
                            value: `Werteliste ${sanitizedName}`
                        }]
                    }
                });

                await api.createRelationship({
                    relationshipType: RelationshipRecordType.AssignsValues,
                    fromId: measureId,
                    toIds: valueIds
                });

                await api.createRelationship({
                    relationshipType: RelationshipRecordType.AssignsMeasures,
                    fromId: id,
                    toIds: [measureId]
                })
            } catch (e) {
                print.error(`${print.xmark} Error creating record "Merkmal"... ${name} (${id})`);
                print.newline();
                print.error(e);
                process.exit(0);
            }
        }
    }
}

async function importGroupPropertyMappings(api: Client, toolbox: GluegunToolbox, workbook: XLSX.WorkBook, mode: Mode = ASB_CONFIG) {
    const { print } = toolbox;
    const sheet = workbook.Sheets["Relation-Merkmal-Gruppe"];
    const range = XLSX.utils.decode_range("A4:G191");

    const rows = [];

    for (let r = range.s.r; r <= range.e.r; ++r) {
        const getValue = (c: number) => {
            const col = XLSX.utils.encode_cell({ c, r });
            return sheet[col] ? sheet[col].w : "";
        }

        rows.push({
            fromId: getValue(6),
            toId: getValue(3),
        });
    }

    const relationships = {};
    rows.forEach(({ fromId, toId }) => {
        if (!relationships[fromId]) {
            relationships[fromId] = [];
        }
        relationships[fromId].push(toId);
    });

    const subjects = [];
    for (const [fromId, properties] of Object.entries<string[]>(relationships)) {
        try {
            if (await api.subjectExistsById(fromId)) {
                subjects.push(fromId);
                const id = await api.createRelationship({
                    relationshipType: RelationshipRecordType.AssignsProperties,
                    fromId: fromId,
                    toIds: properties
                });
                print.success(`${print.checkmark} Created new "AssignsProperties" relationship... ${id} starting from ${fromId}`);
            } else if (await api.propertyGroupExistsById(fromId)) {
                const id = await api.createRelationship({
                    relationshipType: RelationshipRecordType.Collects,
                    fromId: fromId,
                    toIds: properties
                });
                print.success(`${print.checkmark} Created new "Collects" relationship... ${id} starting from ${fromId}`);
            } else {
                print.info(`Skipping nonexistent subject record... ${fromId}`);
            }
        } catch (e) {
            print.error(`${print.xmark} Error creating relationship for subject... ${fromId}`);
            print.newline();
            print.error(e);
            process.exit(0);
        }
    }

    try {
        api.createRelationship({
            relationshipType: RelationshipRecordType.Collects,
            fromId: mode.group,
            toIds: subjects
        });
        print.success(`${print.checkmark} Created group mapping for imported subjects...`);
    } catch (e) {
        print.error(`${print.xmark} Error creating group mapping...`);
    }
}

module.exports = cmd;
