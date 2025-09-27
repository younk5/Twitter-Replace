import { definePluginSettings } from "@api/Settings";
import definePlugin, { OptionType } from "@utils/types";
import { showToast } from "@webpack/common";

const settings = definePluginSettings({
    enabled: {
        type: OptionType.BOOLEAN,
        description: "Enable/disable the plugin",
        default: true,
    },
    replaceWith: {
        type: OptionType.STRING,
        description: "The domain to replace Twitter with",
        default: "twittervx.com",
    },
    removeQuery: {
        type: OptionType.BOOLEAN,
        description: "Remove the query string from the link",
        default: true,
    },
    showToast: {
        type: OptionType.BOOLEAN,
        description: "Show a toast when links are replaced",
        default: false,
    },
});

/**
 * Link twitter para twittervx mantendo o path
 */
function replaceTwitterLinksInText(
    text: string,
    replaceWith: string = "twittervx.com",
    removeQuery: boolean = true
): string {
    return text.replace(/(?:https?:\/\/)?(?:www\.)?x\.com[^\s)"]*/gi, (match: string) => {
        try {
            const candidate = match.startsWith("http") ? match : `https://${match}`;
            const url = new URL(candidate);
            url.host = replaceWith;
            if (removeQuery) url.search = "";
            return url.toString().replace(/\/$/, "");
        } catch (error) {
            return match;
        }
    });
}

export default definePlugin({
    name: "TwitterVx Replace Links",
    description: "Replace Twitter links with TwitterVx links",
    authors: [{ name: "Star/Younk", id: BigInt(424379062845177876) }],
    settings,

    onBeforeMessageSend(_, msg) {
        if (!settings.store.enabled) return;

        const original = msg.content;
        const converted = replaceTwitterLinksInText(original, settings.store.replaceWith, settings.store.removeQuery);

        if (converted !== original) {
            msg.content = converted;
            if (settings.store.showToast) {
                showToast("TwitterVx links replaced");
            }
        }
    },
});
