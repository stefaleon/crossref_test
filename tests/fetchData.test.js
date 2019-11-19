const fetchData = require("../fetchData");

xtest("verify crossref fetched data count", () => {
  return fetchData().then(items => expect(items.length).toEqual(20));
});

xtest("verify a crossref fetched data value", () => {
  return fetchData().then(items =>
    expect(items[0].ISSN[0]).toEqual("2575-985X")
  );
});

xtest("verify a crossref fetched data type", () => {
  return fetchData().then(items =>
    expect(typeof items[19].ISSN).toBe("object")
  );
});

xtest("verify a crossref fetched data type", () => {
  return fetchData().then(items =>
    expect(typeof items[19].ISSN[0]).toBe("string")
  );
});
