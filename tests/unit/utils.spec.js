import { extractSeparator } from "@/utils";

describe("extractSeperator", () => {
  it("should extract the seperator", () => {
    const txt = `@sep=#1#jack#male`;
    expect(extractSeparator(txt)).not.toContain("@sep=#");
  });
});
