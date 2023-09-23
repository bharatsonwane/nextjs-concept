
// // swagger definition
exports.definition = {
    client: {
        required: [

        ],
        properties: {

        }
    },
}


//  // swagger paths
exports.path = {
    "/lookup": {
        get: {
            tags: ["Lookup"],
            operationId: "retreiveLookupList",
            summary: "Retrieve Lookup list.",
            description: "Retrieve Lookup list.",
            // security: [{ JWT: [] }],
            parameters: [],
            responses: {
                200: {
                    description: "Retrieve lookup list successfully.",
                    // schema: {
                    //     $ref: "#/definitions/employee"
                    // }
                }
            }
        },
    },


}