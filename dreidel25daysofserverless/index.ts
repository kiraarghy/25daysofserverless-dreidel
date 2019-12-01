import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const dreidelVals = ["נ", "ג", "ה", "ש"] as const;

const httpTrigger: AzureFunction = async function(
    context: Context
): Promise<void> {
    context.res = {
        body: dreidelVals[Math.round(Math.random() * 3)]
    };
};

export default httpTrigger;
