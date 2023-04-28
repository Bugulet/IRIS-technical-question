import ConvertStringToNumber from "../controllers/StringToNumberController";

test("can print something",()=>{
    expect(ConvertStringToNumber("AA")).not.toBeNull();
})

test("only accepts strings",()=>{
    expect(ConvertStringToNumber(1)).toBeNull();
})

test("can transform one letter to proper value",()=>{
    expect(ConvertStringToNumber("A")).toBe(1);
})

test("can accept lowercase letters",()=>{
    expect(ConvertStringToNumber("a")).toBe(1);
})

test("can only accept alpha characters",()=>{
    expect(ConvertStringToNumber("a3wf!")).toBeNull();
})
