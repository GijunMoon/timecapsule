const rewire = require("rewire")
const index = rewire("./index")
const checkLocalEmail = index.__get__("checkLocalEmail")
const reducer = index.__get__("reducer")
const validate = index.__get__("validate")
const parseQuestionnaireData = index.__get__("parseQuestionnaireData")
// @ponicode
describe("checkLocalEmail", () => {
    test("0", () => {
        let callFunction = () => {
            checkLocalEmail("user@host:300")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            checkLocalEmail("email@google.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            checkLocalEmail("something@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            checkLocalEmail("EMAIL@GOOGLE.COM")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            checkLocalEmail("TestUpperCase@Example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            checkLocalEmail(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("reducer", () => {
    test("0", () => {
        let callFunction = () => {
            reducer("Abruzzo", { type: "array", payload: { error: "multiple errors occurred" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            reducer("Alabama", { type: "ERROR", payload: { error: "ValueError" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            reducer("Abruzzo", { type: "UPDATE", payload: { error: "Message box: foo; bar\n" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            reducer("Abruzzo", { type: "UPDATE", payload: { error: "ValueError" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            reducer("Abruzzo", { type: "UPDATE", payload: { error: "multiple errors occurred" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            reducer(undefined, { type: undefined, payload: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("validate", () => {
    test("0", () => {
        let callFunction = () => {
            validate("user1+user2@mycompany.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            validate("bar.[@[0.0.0.0]")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            validate("ponicode.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            validate("TestUpperCase@Example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            validate("user@host:300")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            validate(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("parseQuestionnaireData", () => {
    test("0", () => {
        let callFunction = () => {
            parseQuestionnaireData({ answers: [false, true, true] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            parseQuestionnaireData({ answers: [true, true, true] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            parseQuestionnaireData({ answers: [false, true, false] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            parseQuestionnaireData({ answers: [true, false, false] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            parseQuestionnaireData({ answers: [false, false, false] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            parseQuestionnaireData(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
