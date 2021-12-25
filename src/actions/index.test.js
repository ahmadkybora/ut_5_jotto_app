import moxios from "moxios";
import { getSecretWord } from './';

describe("getSecretWord", () => {
    // تنظیمات اولیه مورد نیاز را اینجا انجام میدهیم
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    });

    test("secredWord is returned", () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: 'party'
            })
        });

        return getSecretWord()
            .then((secretWord) => {
                expect(secretWord).toBe('party');
            })
    })  
})