import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const dreidelVals = ["נ", "ג", "ה", "ש"] as const;

const httpTrigger: AzureFunction = async function(
    context: Context
): Promise<void> {
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: dreidelVals[Math.round(Math.random() * 4)]
    };
};

export default httpTrigger;
