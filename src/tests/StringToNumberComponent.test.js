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
