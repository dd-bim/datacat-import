import { GluegunCommand, GluegunToolbox } from "gluegun";
import Client from "../Client";
import { PASSWORD_QUESTION, URI_QUESTION, USERNAME_QUESTION } from "../questions";

const cmd: GluegunCommand = {
    name: "login",
    description: "Login to datacat endpoint",
    run: async function (toolbox: GluegunToolbox) {
        const { prompt } = toolbox;
        const { uri, username, password } = await prompt.ask([URI_QUESTION, USERNAME_QUESTION, PASSWORD_QUESTION]);
        const api = new Client(toolbox);

        api.authenticate(uri, username, password);
    }
};

module.exports = cmd;
