// // swagger defination
exports.studentDefination = {
    studentObject: {
        properties: {
            firstName: {
                type: "string",
                example: "Akshay"
            },
            lastName: {
                type: "string",
                example: "Sonwane"
            },
            dateOfBirth: {
                type: "string",
                "format": "date",
                example: "1970-01-01"
            },
            gender: {
                type: "string",
                example: "male"
            },
            knownLanguages: {
                type: "array",
                example: ['english', 'hindi']
            },
            address: {
                type: "string",
                example: "Pune, India"
            },
            course: {
                type: "string",
                example: "art"
            },
        }
    },
    updateStudentObj: {
        properties: {
            id: {
                type: "string",
            },
            firstName: {
                type: "string",
                example: "Akshay"
            },
            lastName: {
                type: "string",
                example: "Sonwane"
            },
            dateOfBirth: {
                type: "string",
                "format": "date",
                example: "1970-01-01"
            },
            gender: {
                type: "string",
                example: "male"
            },
            knownLanguages: {
                type: "array",
                example: ['english', 'hindi']
            },
            address: {
                type: "string",
                example: "Pune, India"
            },
            course: {
                type: "string",
                example: "art"
            },
        }
    }
}

// library: { redux: false, saga: false, numpy: false, pandas: false }


//  // swagger paths
exports.studentPath = {
    "/student": {
        post: {
            description: "Add new Student.",
            operationId: "addNewStudent",
            tags: ["Student (Learning)"],
            // security: [{ JWT: [] }],
            summary: "Add a new student info",
            parameters: [
                {
                    name: "Student",
                    required: true,
                    in: "body",
                    type: "object",
                    description: "Student information.",
                    schema: {
                        "$ref": `#/definitions/studentObject`
                    }
                }
            ],
            responses: {
                200: {
                    description: "new Student created successfully.",
                    // schema: {
                    //     $ref: "#/definitions/studentObject"
                    // }
                }
            }
        },
        get: {
            description: "Retrieve Student list.",
            operationId: "retreiveStudentList",
            tags: ["Student (Learning)"],
            // security: [{ JWT: [] }],
            summary: "Retrieve Student list.",
            parameters: [],
            responses: {
                200: {
                    description: "Retrieve Student list successfully.",
                    // schema: {
                    //     $ref: "#/definitions/studentObject"
                    // }
                }
            }
        },
        put: {
            description: "Update student Student.",
            operationId: "updateStudent",
            tags: ["Student (Learning)"],
            // security: [{ JWT: [] }],
            summary: "Update Student",
            parameters: [
                {
                    name: "Student",
                    required: true,
                    in: "body",
                    type: "object",
                    description: "Student information.",
                    schema: {
                        "$ref": `#/definitions/updateStudentObj`
                    }
                }
            ],
            responses: {
                200: {
                    description: "Student Updated successfully.",
                    // schema: {
                    //     $ref: "#/definitions/studentObject"
                    // }
                }
            }
        },
    },
    "/student/{id}": {
        get: {
            description: "Retrieve specific Student Student.",
            operationId: "retrieveStudent",
            tags: ["Student (Learning)"],
            // security: [{ JWT: [] }],
            summary: "Retrieve Student.",
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
                    description: "Retrieve specific Student successfully.",
                    // schema: {
                    //     $ref: "#/definitions/studentObject"
                    // }
                }
            }
        },
        delete: {
            description: "Student Student deleted successfully.",
            operationId: "deleteStudent",
            tags: ["Student (Learning)"],
            // security: [{ JWT: [] }],
            summary: "Delete Student.",
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
                    description: "Delete specific Student successfully.",
                    // schema: {
                    //     $ref: "#/definitions/studentObject"
                    // }
                }
            }
        }
    },
}