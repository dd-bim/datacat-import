import { GluegunCommand, GluegunToolbox } from "gluegun";
import Client from "../Client";

const cmd: GluegunCommand = {
    name: "logout",
    description: "Remove cached credentials",
    run: async function (toolbox: GluegunToolbox) {
        const api = new Client(toolbox);
        api.clearCredentials();
    }
};

module.exports = cmd;
