import { GluegunToolbox } from "gluegun";
import jwtDecode, { JwtPayload } from "jwt-decode";
import { GraphQLClient } from "graphql-request";
import { CreateCatalogEntryInput, CreateRelationshipInput, DeleteCatalogEntryInput, getSdk, Sdk, SearchInput, SearchQuery } from './types';
import { IMPORT_TAG_ID } from "./utils";

const ACCESS_TOKEN = ".datacat_access_token";

export default class Client {
    private readonly toolbox: GluegunToolbox;
    private sdk: Sdk;

    public isAuthenticated = false;

    constructor(toolbox: GluegunToolbox) {
        const { print, filesystem } = toolbox;

        this.toolbox = toolbox;

        const accessTokenFilePath = this.getAccessTokenFilePath();
        if (filesystem.inspect(accessTokenFilePath)) {
            const { uri, token, payload } = this.readCredentials(accessTokenFilePath);

            if (!this.checkCredentials(payload)) return;

            const headers = { Authorization: `Bearer ${token}` };
            const client = new GraphQLClient(uri, { headers });

            print.info(`Using cached credentials for user ${payload.sub}`);
            this.sdk = getSdk(client);
            this.isAuthenticated = true;
        }
    }

    readCredentials(filePath: string): { uri: string, token: string, payload: JwtPayload } {
        const { filesystem } = this.toolbox;
        const content = filesystem.read(filePath);
        const [uri, token] = content.split("\n");
        const payload = jwtDecode<JwtPayload>(token)
        return { uri, token, payload };
    }

    checkCredentials(payload: JwtPayload): boolean {
        const exp = new Date(payload.exp * 1000);
        const now = new Date();
        return now < exp;
    }

    checkAuthentication(): void {
        const { print, filesystem } = this.toolbox;
        const filePath = this.getAccessTokenFilePath();

        if (filesystem.inspect(filePath)) {
            const { payload } = this.readCredentials(filePath);
            if (this.checkCredentials(payload)) return;
        }

        print.error(`${print.xmark} Client not authenticated. Login first...`);
        process.exit(0);
    }

    getAccessTokenFilePath(): string {
        const { filesystem } = this.toolbox;
        const homeDir = filesystem.homedir();
        return filesystem.resolve(homeDir, ACCESS_TOKEN);
    }

    async authenticate(uri: string, username: string, password: string): Promise<void> {
        const { print, filesystem } = this.toolbox;

        print.info("Authenticating against API using provided credentials...");

        const client = new GraphQLClient(uri);
        const sdk = getSdk(client);
        const userSession = await sdk.login({
            input: {
                username,
                password
            }
        });

        if (userSession) {
            const token = userSession.login;
            filesystem.write(this.getAccessTokenFilePath(), [uri, token].join("\n"));
            this.isAuthenticated = true;
            print.success(`${print.checkmark} Authentication successful!`);
        } else {
            print.error(`${print.xmark} Error authenticating user "${username}"!`);
            process.exit(0);
        }
    }

    clearCredentials(): void {
        const { print, filesystem } = this.toolbox;
        filesystem.remove(this.getAccessTokenFilePath());
        print.success(`${print.checkmark} Cleared credentials!`);
    }

    async createTag(): Promise<void> {
        await this.sdk.addTag({
            input: {
                tagId: IMPORT_TAG_ID,
                name: IMPORT_TAG_ID
            }
        });
    }

    async search(input: SearchInput, pageSize = 20): Promise<SearchQuery> {
        return this.sdk.search({
            input,
            pageSize
        });
    }

    async existsById(id: string): Promise<boolean> {
        return !!(await (this.sdk.hasRecord({id}))).node;
    }

    async subjectExistsById(id: string): Promise<boolean> {
        return !!(await (this.sdk.hasSubject({id}))).getSubject;
    }

    async propertyGroupExistsById(id: string): Promise<boolean> {
        return !!(await this.sdk.hasPropertyGroup({ id })).search.totalElements;
    }

    async createRecord(input: CreateCatalogEntryInput): Promise<string> {
        input.tags = [IMPORT_TAG_ID, ...(input.tags ?? [])];
        return (await this.sdk.createRecord({ input })).createCatalogEntry.catalogEntry.id;
    }

    async deleteRecord(input: DeleteCatalogEntryInput): Promise<string> {
        return (await this.sdk.deleteRecord({ input })).deleteCatalogEntry.catalogEntry.id;
    }

    async createRelationship(input: CreateRelationshipInput): Promise<string> {
        return (await this.sdk.createRelationship({ input })).createRelationship.relationship.id;
    }
}
