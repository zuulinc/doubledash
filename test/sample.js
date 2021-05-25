/*

    expect(isNull(null)).toBe(false);
    
    expect(isNull(arguments)).toBe(false);
    expect(isNull(undefined)).toBe(false);
    expect(isNull(new Date)).toBe(false);
    expect(isNull(new Error)).toBe(false);
    expect(isNull([1, 2, 3])).toBe(false);
    expect(isNull([])).toBe(false);
    expect(isNull({ '0': 1, 'length': 1 })).toBe(false);
    expect(isNull({})).toBe(false);
    expect(isNull('a')).toBe(false);
    expect(isNull('')).toBe(false);
    expect(isNull(1)).toBe(false);
    expect(isNull(0)).toBe(false);
    expect(isNull(NaN)).toBe(false);
    expect(isNull(true)).toBe(false);
    expect(isNull(false)).toBe(false);
    expect(isNull(/x/)).toBe(false);
    expect(isNull()).toBe(false);

    expect(isNull(Object(false)).toBe(false);
    expect(isNull(Object(0)).toBe(false);
    expect(isNull(Object('a')).toBe(false);

*/