// // swagger defination
exports.projectDefination = {
    projectObject: {
        properties: {
            title: {
                type: "string",
                example: "Learning JavaScript."
            },
            date: {
                type: "string",
                "format": "date",
                example: "1970-01-01"
            },
            description: {
                type: "string",
                example: "Javscript Description"
            },
            technology: {
                properties: {
                    uiTech: {
                        type: "string",
                        example: "react"
                    },
                    backEndTech: {
                        type: "string",
                        example: "python"
                    },
                }
            },
            library: {
                type: "array",
                example: ['redux', 'saga', 'numpy', 'pandas']
                // properties: {
                //     redux: {
                //         type: "boolean",
                //         example: 'true'
                //     },
                //     saga: {
                //         type: "boolean",
                //         example: 'true'
                //     },
                //     numpy: {
                //         type: "boolean",
                //         example: 'false'
                //     },
                //     pandas: {
                //         type: "boolean",
                //         example: 'false'
                //     },
                // }
            }
        }
    },
    updateProjectObj: {
        properties: {
            id: {
                type: "string",
            },
            title: {
                type: "string",
                example: "Learning JavaScript."
            },
            date: {
                type: "string",
                "format": "date",
                example: "1970-01-01"
            },
            description: {
                type: "string",
                example: "Javscript Description"
            },
            technology: {
                properties: {
                    uiTech: {
                        type: "string",
                        example: "react"
                    },
                    backEndTech: {
                        type: "string",
                        example: "python"
                    },
                }
            },
            library: {
                type: "array",
                example: ['redux', 'saga', 'numpy', 'pandas']
            }
        }
    }
}

// library: { redux: false, saga: false, numpy: false, pandas: false }


//  // swagger paths
exports.projectPath = {
    "/project": {
        post: {
            description: "Create new project Project.",
            operationId: "createProject",
            tags: ["Project (Learning)"],
            // security: [{ JWT: [] }],
            summary: "Create a new Project",
            parameters: [
                {
                    name: "Project",
                    required: true,
                    in: "body",
                    type: "object",
                    description: "Project information.",
                    schema: {
                        "$ref": `#/definitions/projectObject`
                    }
                }
            ],
            responses: {
                200: {
                    description: "new Project created successfully.",
                    // schema: {
                    //     $ref: "#/definitions/projectObject"
                    // }
                }
            }
        },
        get: {
            description: "Retrieve Project Project list.",
            operationId: "retreiveProjectList",
            tags: ["Project (Learning)"],
            // security: [{ JWT: [] }],
            summary: "Retrieve Project list.",
            parameters: [],
            responses: {
                200: {
                    description: "Retrieve Project list successfully.",
                    // schema: {
                    //     $ref: "#/definitions/projectObject"
                    // }
                }
            }
        },
        put: {
            description: "Update project Project.",
            operationId: "updateProject",
            tags: ["Project (Learning)"],
            // security: [{ JWT: [] }],
            summary: "Update Project",
            parameters: [
                {
                    name: "Project",
                    required: true,
                    in: "body",
                    type: "object",
                    description: "Project information.",
                    schema: {
                        "$ref": `#/definitions/updateProjectObj`
                    }
                }
            ],
            responses: {
                200: {
                    description: "Project Updated successfully.",
                    // schema: {
                    //     $ref: "#/definitions/projectObject"
                    // }
                }
            }
        },
    },
    "/project/{id}": {
        get: {
            description: "Retrieve specific Project Project.",
            operationId: "retrieveProject",
            tags: ["Project (Learning)"],
            // security: [{ JWT: [] }],
            summary: "Retrieve Project.",
            parameters: [
                {
                    "name": "id",
                    "in": "path",
                    "required": true,
                    "type": "string"
                }
            ],
            responses: {
                200: {
                    description: "Retrieve specific Project successfully.",
                    // schema: {
                    //     $ref: "#/definitions/projectObject"
                    // }
                }
            }
        },
        delete: {
            description: "Project Project deleted successfully.",
            operationId: "deleteProject",
            tags: ["Project (Learning)"],
            // security: [{ JWT: [] }],
            summary: "Delete Project.",
            parameters: [
                {
                    "name": "id",
                    "in": "path",
                    "required": true,
                    "type": "string"
                }
            ],
            responses: {
                200: {
                    description: "Delete specific Project successfully.",
                    // schema: {
                    //     $ref: "#/definitions/projectObject"
                    // }
                }
            }
        }
    },
}