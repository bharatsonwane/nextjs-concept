
// // swagger defination
exports.definition = {
    employeePersonalRequest: {
        required: [
            "title", "firstName", "middleName", "lastName", "gender", "dob",
        ],
        properties: {
            title: {
                type: "string",
                example: "mrs"
            },
            firstName: {
                type: "string",
            },
            middleName: {
                type: "string",
            },
            lastName: {
                type: "string",
            },
            maidenName: {
                type: "string",
            },
            gender: {
                type: "string",
                example: "female"
            },
            dob: {
                type: "string",
                example: "1995-07-31T20:15:00.025Z"
            },
            bloodGroup: {
                type: "string",
                example: "B+"
            },
            marriedStatus: {
                type: "string",
                example: "unmarried"
            },
            pan: {
                type: "string",
                example: "p1234"
            },
            aadhar: {
                type: "string",
                example: "123-123-123-123"
            }
        }
    },
    employeeContactRequest: {
        required: ["employeeId"],
        properties: {
            contacts: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        id: {
                            type: "number",
                            example: 1
                        },
                        contactType: {
                            type: "string",
                            example: "personalPhone"
                        },
                        value: {
                            type: "string",
                            example: "888888888"
                        },
                    }
                }
            },
            addresses: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        id: {
                            type: "number",
                            example: 1
                        },
                        addressType: {
                            type: "string",
                            example: "current"
                        },
                        country: {
                            type: "string",
                            example: "India"
                        },
                        zipCode: {
                            type: "string",
                            example: "411058"
                        },
                        state: {
                            type: "string",
                            example: "Maharashtra"
                        },
                        district: {
                            type: "string",
                            example: "Pune"
                        },
                        taluka: {
                            type: "string",
                            example: "Haveli"
                        },
                        villageCity: {
                            type: "string",
                            example: "Warje"
                        },
                        street: {
                            type: "string",
                            example: "Mumbai banglore higway"
                        },
                        landmark: {
                            type: "string",
                            example: "Warje"
                        },
                        area: {
                            type: "string",
                            example: "Wall street"
                        },
                        houseNo: {
                            type: "string",
                            example: "504"
                        },
                    }
                }
            },
        }
    },
    employeeJobRequest: {
        required: [
            "role", "designation", "hiringDate", "joiningDate", "password"
        ],
        properties: {
            currentJobDetail: {
                type: "object",
                properties: {
                    id: {
                        type: "number",
                        example: "6"
                    },
                    hiringDate: {
                        type: "string",
                        example: "2020-05-25T20:15:00.025Z"
                    },
                    joiningDate: {
                        type: "string",
                        example: "2020-07-31T20:15:00.025Z"
                    },
                    modeOfWork: {
                        type: "string",
                        example: "home"
                    },
                    probationPeriodMonth: {
                        type: "number",
                        example: "6"
                    },
                    userRoleLookupId: {
                        type: "number",
                        example: 2
                    },
                    CTC: {
                        type: "string",
                        example: "2.45LPA"
                    },
                    designationLookupId: {
                        type: "number",
                        example: 5
                    },
                }
            },
            experience: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        id: {
                            type: "number",
                            example: 1
                        },
                        organisationName: {
                            type: "string",
                            example: "Stackmint Pvt. Ltd."
                        },
                        startDate: {
                            type: "string",
                            example: "2017-05-25T20:15:00.025Z"
                        },
                        endDate: {
                            type: "string",
                            example: "2022-05-25T20:15:00.025Z"
                        },
                        designationLookupId: { // fk
                            type: "number",
                            example: 15
                        },
                    }
                }
            }
        }
    },
    employeeSkillRequest: {
        required: [
            "skillName", "skillLevel", "employeeId"
        ],
        properties: {
            skills: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        id: {
                            type: "number",
                            example: "6"
                        },
                        notes: {
                            type: "string",
                            example: "Skill detail info."
                        },
                        skillType: {
                            type: "number",
                        },
                        skillName: {
                            type: "number",
                        },
                        skillLevel: {
                            type: "number",
                        },
                        skillExperienceYear: {
                            type: "number",
                        },
                    }
                }
            },
            hobbiesRecord: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        id: {
                            type: "number",
                            example: 1
                        },
                        hobbiesType: {
                            type: "number",
                            example: 9
                        },
                        hobbiesName: {
                            type: "number",
                        },
                    }

                }
            },
        },
    },
    employeeBankRequest: {
        required: ["employeeId", "bankName", "branchName", "ifscCode", "micrCode", "accountNumber", "isActive",],
        properties: {
            id: {
                type: "number",
                example: 1
            },
            bankName: {
                type: "string",
            },
            branchName: {
                type: "string",
            },
            ifscCode: {
                type: "string",
            },
            micrCode: {
                type: "string",
            },
            accountNumber: {
                type: "string"
            },
            isActive: {
                type: "boolean"
            }
        }
    },

    updateEmployeeStatusRequest: {
        required: ["employeeId", "userStatus", "userId"],
        properties: {
            userId: {
                type: "number",
                example: 1
            },
            userStatus: {
                type: "string",
                example: "inactive"
            },
        }
    },

    getLeaveByEmployeeId: {
        properties: {
            employees: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        id: {
                            type: "number",
                            example: 1
                        },
                        title: {
                            type: "string",
                            example: "mrs"
                        },
                        firstName: {
                            type: "string",
                        },
                        middleName: {
                            type: "string",
                        },
                        lastName: {
                            type: "string",
                        },
                        maidenName: {
                            type: "string",
                        },
                        gender: {
                            type: "string",
                            example: "female"
                        },
                        dob: {
                            type: "string",
                            example: "1995-07-31T20:15:00.025Z"
                        },
                        bloodGroup: {
                            type: "string",
                            example: "B+"
                        },
                        marriedStatus: {
                            type: "string",
                            example: "unmarried"
                        },
                        leaves: {
                            properties: {
                                title: {
                                    type: "string",
                                },
                                description: {
                                    type: "string"
                                },
                                leaveType: {
                                    type: "string",
                                    example: "medical"
                                },
                                startDate: {
                                    type: "string",
                                    example: "2222-07-31T20:15:00.025Z"
                                },
                                endDate: {
                                    type: "string",
                                    example: "2222-07-31T20:15:00.025Z"
                                },
                            },
                        },
                    },
                }
            }
        }
    },

    employeeStatus: {
        properties: {
            comment: {
                type: 'string',
                example: "yes fired or onbord "
            },
            lookupId: {
                type: 'number',
                example: 46
            }
        }
    },
    allocableEmployees: {
        properties: {
            allocableEmployees: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        id: {
                            type: "number",
                            example: 1
                        },
                        firstName: {
                            type: "string",
                            example: "John",
                        },
                        lastName: {
                            type: 'string',
                            example: "furniture"
                        },
                        currentStatusOfAllocation: {
                            type: 'string',
                            example: 'partial'
                        }
                    }
                }
            }
        }
    },
    getAllazureUsers: {
        properties: {
            getAllazureUsers: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        displayName: {
                            type: "string",
                            example: "john.furniture"
                        },
                        userPrincipalName: {
                            type: "string",
                            example: "john.furniture@11j4n0.onmicrosoft.com",
                        },
                        id: {
                            type: 'number',
                            example: "59dc5589-4506-49d7-a9b0-8d46f6d65b8d"
                        },
                    }
                }
            }
        }

    },

    uploadDocuments: {
        "requestBody": {
            "required": true,
            "consumes": {
                "multipart/form-data": {
                    "schema": {
                        "type": "object",
                        "properties": {
                            "media": {
                                "type": "string",
                                "format": "base64"
                            }
                        }
                    }
                }
            },
        }
    },
}


//  // swagger paths
exports.path = {
    "/employee/personal": {
        post: {
            tags: ["Employee"],
            operationId: "createEmployee",
            summary: "Create Employee",
            description: "Create employee.",
            security: [{ JWT: [] }],
            parameters: [
                {
                    name: "employee",
                    required: true,
                    in: "body",
                    type: "object",
                    description: "Employee information.",
                    schema: {
                        "$ref": `#/definitions/employeePersonalRequest`
                    }
                }
            ],
            responses: {
                200: {
                    description: "employee personal information added/updated successfully.",
                    // schema: {
                    //     $ref: "#/definitions/employee"
                    // }
                }
            }
        },
    },
    "/employee/{employeeId}/personal": {
        put: {
            tags: ["Employee"],
            operationId: "updateEmployee",
            summary: "Update Employee",
            description: "Update employee.",
            security: [{ JWT: [] }],
            parameters: [
                {
                    "name": "employeeId",
                    "in": "path",
                    "required": true,
                    "type": "string"
                },
                {
                    name: "employee",
                    required: true,
                    in: "body",
                    type: "object",
                    description: "Employee information.",
                    schema: {
                        "$ref": `#/definitions/employeePersonalRequest`
                    }
                },
            ],
            responses: {
                200: {
                    description: "employee personal information added/updated successfully.",
                    // schema: {
                    //     $ref: "#/definitions/employee"
                    // }
                }
            }
        },
    },

    "/employee/{employeeId}/contact": {
        put: {
            tags: ["Employee"],
            operationId: "employeeContact",
            summary: "Add/update employee contact.",
            description: "Add/update employee contact detail.",
            security: [{ JWT: [] }],
            parameters: [
                {
                    "name": "employeeId",
                    "in": "path",
                    "required": true,
                    "type": "string"
                },
                {
                    name: "employeeContact",
                    required: true,
                    in: "body",
                    type: "object",
                    description: "Employee information.",
                    schema: {
                        "$ref": `#/definitions/employeeContactRequest`
                    }
                }
            ],
            responses: {
                200: {
                    description: "employee contact detail added/updated successfully.",
                    // schema: {
                    //     $ref: "#/definitions/employee"
                    // }
                }
            }
        },
    },

    
    "/employee/{employeeId}/job": {
        put: {
            tags: ["Employee"],
            operationId: "employeeJob",
            summary: "Add/update employee job.",
            description: "Add/update employee job detail.",
            security: [{ JWT: [] }],
            parameters: [
                {
                    "name": "employeeId",
                    "in": "path",
                    "required": true,
                    "type": "string"
                },
                {
                    name: "employeeJob",
                    required: true,
                    in: "body",
                    type: "object",
                    description: "Employee information.",
                    schema: {
                        "$ref": `#/definitions/employeeJobRequest`
                    }
                }
            ],
            responses: {
                200: {
                    description: "employee job detail added/updated successfully.",
                    // schema: {
                    //     $ref: "#/definitions/employee"
                    // }
                }
            }
        },
    },


    "/employee/{employeeId}/skill": {
        put: {
            tags: ["Employee"],
            operationId: "employeeSkill",
            summary: "Add/update employee skill.",
            description: "Add/update employee skill detail.",
            security: [{ JWT: [] }],
            parameters: [
                {
                    "name": "employeeId",
                    "in": "path",
                    "required": true,
                    "type": "string"
                },
                {
                    name: "employeeSkill",
                    required: true,
                    in: "body",
                    type: "object",
                    description: "Employee information.",
                    schema: {
                        "$ref": `#/definitions/employeeSkillRequest`
                    }
                }
            ],
            responses: {
                200: {
                    description: "employee skill detail added/updated successfully.",
                    // schema: {
                    //     $ref: "#/definitions/employee"
                    // }
                }
            }
        },
    },

    "/employee/{employeeId}/bank": {
        put: {
            tags: ["Employee"],
            operationId: "employeeBank",
            summary: "Add/update employee bank detail.",
            description: "Add/update employee bank detail.",
            security: [{ JWT: [] }],
            parameters: [
                {
                    "name": "employeeId",
                    "in": "path",
                    "required": true,
                    "type": "string"
                },
                {
                    name: "employeeBank",
                    required: true,
                    in: "body",
                    type: "object",
                    description: "Employee information.",
                    schema: {
                        "$ref": `#/definitions/employeeBankRequest`
                    }
                }
            ],
            responses: {
                200: {
                    description: "employee bank detail added/updated successfully.",
                    // schema: {
                    //     $ref: "#/definitions/employee"
                    // }
                }
            }
        },
    },


    "/employee/{employeeId}/document": {
        post: {
            tags: ["Employee"],
            operationId: "employeeDocument",
            summary: "Add employee Document.",
            description: "Addemployee document .",
            security: [{ JWT: [] }],
            parameters: [
                {
                    "name": "employeeId",
                    "in": "path",
                    "required": true,
                    "type": "string"
                },
                {
                    name: "file",
                    required: true,
                    in: "formData",
                    type: "file",
                    description: "Employee information.",
                    schema: {
                        "$ref": `#/definitions/uploadDocuments`
                    }
                }
            ],
            responses: {
                200: {
                    description: "employee document detail added/updated successfully.",
                    // schema: {
                    //     $ref: "#/definitions/employee"
                    // }
                }
            }
        },
    },


    "/employee/{employeeId}": {
        patch: {
            tags: ["Employee"],
            operationId: "updateEmployeeStatus",
            summary: "Update Employee Activation Status.",
            description: "Update Employee Activation Status.",
            security: [{ JWT: [] }],
            parameters: [
                {
                    "name": "employeeId",
                    "in": "path",
                    "required": true,
                    "type": "string"
                },
                {
                    name: "updateEmployeeStatus",
                    required: true,
                    in: "body",
                    type: "object",
                    description: "Employee information.",
                    schema: {
                        "$ref": `#/definitions/updateEmployeeStatusRequest`
                    }
                }
            ],
            responses: {
                200: {
                    description: "Retrieve employee list successfully.",
                    // schema: {
                    //     $ref: "#/definitions/employee"
                    // }
                }
            }
        },

        get: {
            tags: ["Employee"],
            operationId: "retreiveSpecificEmployee",
            summary: "Get Specific employee details.",
            description: "Get Specific employee details.",
            security: [{ JWT: [] }],
            parameters: [
                {
                    "name": "employeeId",
                    "in": "path",
                    "required": true,
                    "type": "string"
                }
            ],
            responses: {
                200: {
                    description: "Retrieve specific employee detail successfully.",
                    // schema: {
                    //     $ref: "#/definitions/employee"
                    // }
                }
            }
        },


    },


    "/employee/": {
        get: {
            tags: ["Employee"],
            operationId: "retreiveEmployeeList",
            summary: "Retrieve Employee list.",
            description: "Retrieve Employee list.",
            security: [{ JWT: [] }],
            parameters: [],
            responses: {
                200: {
                    description: "Retrieve employee list successfully.",
                    // schema: {
                    //     $ref: "#/definitions/employee"
                    // }
                }
            }
        },
    },

    "/employee/{employeeId}/leave": {
        get: {
            tags: ["Employee"],
            operationId: "retreiveEmployeeListOfLeave",
            summary: "Retrieve specific Employee records of leave.",
            description: "Retrieve specific Employee records of leave.",
            security: [{ JWT: [] }],
            parameters: [
                {
                    "name": "employeeId",
                    "in": "path",
                    "required": true,
                    "type": "string"
                }
            ],
            responses: {
                200: {
                    description: "Retrieve leave record of specific employee  successfully.",
                    schema: {
                        $ref: "#/definitions/getLeaveByEmployeeId"
                    }
                },
                404: {
                    description: "Invalid employee ID supplied",
                }
            }
        },
    },

    "/employee/{employeeId}/statusOfemployee": {
        post: {
            tags: ["Employee"],
            operationId: "createEmployeeOnAzure",
            summary: "employee status like onbord and make his account on 365",
            description: "employee status like onbord and make his account on 365",
            security: [{ JWT: [] }],
            parameters: [
                {
                    "name": "employeeId",
                    "in": "path",
                    "required": true,
                    "type": "string"
                },
                {
                    name: "employeeStatus",
                    required: true,
                    in: "body",
                    type: "object",
                    description: "Employee status information.",
                    schema: {
                        "$ref": `#/definitions/employeeStatus`
                    }
                }
            ],
            responses: {
                200: {
                    description: "employee personal information added/updated successfully.",
                    // schema: {
                    //     $ref: "#/definitions/employee"
                    // }
                }
            }
        },
    },

    "/employee/currentAllocableEmployee": {
        get: {
            tags: ["Employee"],
            operationId: "currentAllocableEmployee",
            summary: "Get record of employee can be allocated.",
            description: "Get record of employee can be allocated .",
            security: [{ JWT: [] }],
            parameters: [],
            responses: {
                200: {
                    description: "project employee serched successfully.",
                    schema: {
                        $ref: "#/definitions/allocableEmployees"
                    }
                },
            }
        },
    },

    "/employee/getAllazureUsers": {

        get: {
            tags: ["Employee"],
            operationId: "retreiveAllUserProfileFromAzure",
            summary: "Get  All Azure user Profile Detail.!",
            description: "Get All Azure user Profile Detail.!",
            security: [{ JWT: [] }],
            parameters: [],
            responses: {
                200: {
                    description: "Retrieve all azure user profile successfully.",
                    schema: {
                        $ref: "#/definitions/getAllazureUsers"
                    }
                }
            }
        }


    }

}

