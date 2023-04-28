import ConvertNumberToString from "../controllers/NumberToStringController";

test("can print something",()=>{
    expect(ConvertNumberToString(1)).not.toBeNull();
})

test("only accepts numbers",()=>{
    expect(ConvertNumberToString("a")).toBeNull();
    expect(ConvertNumberToString("ABC")).toBeNull();
    expect(ConvertNumberToString("a34%3")).toBeNull();
})

test("can only accept positive numbers",()=>{
    expect(ConvertNumberToString(-1)).toBeNull();
})

test("can transform one number to proper value",()=>{
    expect(ConvertNumberToString(1)).toBe("A");
})