import { checkForURL } from "../src/client/js/checkURL"
test('valid url', () => {
    expect(checkForURL(`https://jestjs.io/docs/asynchronous`)).toBe(true);
  });


