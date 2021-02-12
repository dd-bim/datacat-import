export const IMPORT_TAG_ID = "CLI-IMPORT";
export const FACHMODELL_ID = "FACHMODELL-LG-BIM";
export const ASB_ID = "GRUPPE-LG-BIM-ASB-ING";
export const RAS_ID = "GRUPPE-LG-BIM-RAS";

export type Mode = {
    group: string,
    idIdx: number;
    categoryIdx: number;
    fullNameIdx: number;
    nameIdx: number;
    descriptionIdx: number;

};

export const ASB_CONFIG: Mode = {
    group: ASB_ID,
    idIdx: 3,
    categoryIdx: 4,
    fullNameIdx: 0,
    nameIdx: 2,
    descriptionIdx: 5
}

export const RAS_CONFIG: Mode = {
    group: RAS_ID,
    idIdx: 3,
    categoryIdx: 5,
    fullNameIdx: 0,
    nameIdx: 2,
    descriptionIdx: 4
}
