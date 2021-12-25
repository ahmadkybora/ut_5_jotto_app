import React from 'react';
import { shallow } from 'enzyme';
import GuessedWords from './GuessedWords';
import { findByTestAttr, checkProps } from '../test/testUtil';

// بصورت پیس فرض اینجا یک پرارپرتی میگذاریم
const defaultProps = {
    guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
};

// const defaultProps = {
//   guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
// };

// اگر پراپ کامپوننت مورد نظر دارای مقدار بود وگرنه از پراپ پیش فرض استفاده کن

const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessedWords {...setupProps } />)
  };
  
test('does not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps);
});

// const setup = (props = {}) => {
//     const setupProps = {...defaultProps, ...props };
//     shallow(<GuessedWords { ...setupProps }/>);
// }

// test('does not throw', () => {
//     checkProps(GuessedWords, defaultProps);
// });

// describe("if there are words", () => {
//     let wrapper;
//     // اعمال تنظیمات قبل از انجام تست بوسیله متد beforEach
//     beforeEach(() => {
//         wrapper = setup({ guessedWords: [] });
//     })
//     test("renders without error", () => {
//         // const wrapper = setup({ guessedWords: [] });
//         const component = findByTestAttr(wrapper, 'component-guessed-words');
//         expect(component.length).toBe(1);
//     });

//     test("renders guessed words", () => {
//         // const wrapper = setup({ guessedWords: [] });
//         const instructions = findByTestAttr(wrapper, 'guess-instructions');
//         expect(instructions.text().length).not.toBe(0);
//     })
// });

// اگر وجود نداشت
describe('if there are no words guessed', () => {
    let wrapper
    beforeEach(() => {
      wrapper = setup({ guessedWords: [] });
    });
    test('renders without error', () => {
      const component = findByTestAttr(wrapper, 'component-guessed-words');
      expect(component.length).toBe(1);
    });
    test('renders instructions to guess a word', () => {
      const instructions = findByTestAttr(wrapper, 'guess-instructions');
      expect(instructions.text().length).not.toBe(0);
    });
});

// اگر وجود داشت
describe('if there are words guessed', () => {
    let wrapper;
    const guessedWords = [
      { guessedWord: 'train', letterMatchCount: 3 },
      { guessedWord: 'agile', letterMatchCount: 1 },
      { guessedWord: 'party', letterMatchCount: 5 },
    ];
    beforeEach(() => {
      wrapper = setup({ guessedWords });
    });
    test ('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });
    test('renders "guessed words" section', () => {
        const guessedWordNodes = findByTestAttr(wrapper, 'guessed-words');
        expect(guessedWordNodes.length).toBe(1);
    });
    test('correct number of guessed words', () => {
        const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordNodes.length).toBe(guessedWords.length);
    });
    test('includes guess word index for each word', () => {
    });
});

