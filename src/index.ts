type EnvType = {
    DESTINATION_URL: string;
    STATUS_CODE: number;
};

const handler: ExportedHandler = {
    async fetch(request: Request, env: EnvType) {
        const destinationURL = env.DESTINATION_URL || 'https://www.google.com/';
        const statusCode = env.STATUS_CODE || 301;
        return Response.redirect(destinationURL, statusCode);
    },
};

export default handler; 