import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtil';

import Input from './Input';

//-------------------------------------------------------
// مهم
// اگر میخواهسد useState را بدون React فراخوانی کنید
// ابتدا بصورت گلوبال یک متغییر بسازید و jest.fn را داخل آن بریزید
// سپس از متد jest.mock استفاده کنید طبق زیر
// const mockSetCurrentGuess = jest.fn();
// jest.mock('react', () => ({
//     ...jest.requireActual(),
//     useState: (initialState) => [initialState, mockSetCurrentGuess]
// }));
// //-------------------------------------------------------

// اگر میخواهسد useState را بدون React فراخوانی کنید
// ابتدا بصورت گلوبال یک متغییر بسازید و jest.fn را داخل آن بریزید
// سپس از متد jest.mock استفاده کنید طبق زیر
// mock entire module for destructuring useState on import
// const mockSetCurrentGuess = jest.fn();
// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: (initialState) => [initialState, mockSetCurrentGuess]
// }))

const setup = (secretWord='party') => {
    return shallow(<Input secretWord={secretWord}/>);
}

describe('render', () => {
    describe('success is false', () => {
    //   const wrapper = setup();
    //   let wrapper;
    //   beforeEach(() => {
    //     wrapper = setup({ success: false });
    //   })
    //   test('Input renders without error', () => {
    //     const inputComponent = findByTestAttr(wrapper, 'component-input');
    //     expect(inputComponent.length).toBe(1);
    //   });
    //   test('input box displays', () => {
    //     const inputBox = findByTestAttr(wrapper, 'input-box');
    //     expect(inputBox.exists()).toBe(true);
    //   });
        let mockSetCurrentGuess;
        let wrapper;
        beforeEach(() => {
            mockSetCurrentGuess = jest.fn();
            React.useState = () => ["", mockSetCurrentGuess];
            wrapper = setup();
        })
      test('display change ', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box');
        const mockEvent = { target: { value: 'train' } };
    
        inputBox.simulate("change", mockEvent);
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
      });
    });
});



// 1 بوسیله این متد می توان یک متد را تست کرد آنرا داخل یک متغییر بریزید
// 2 متد useState را شبیه سازی کنید و مقدار اولیه متغییر را یک رشته خالی انتخاب کنید
// 3 
// 4 
// 5 مقدار تارگت مورد نظر را بوسیله این متد بگیرید
// 6 رویداد چنج را شبیه سازی کنید
// 7  استفاده کنید تا مطمئن شوید که یک تابع ساختگی با آرگومان های خاص فراخوانی شده است
// test('display change ', () => {
//     // let mockSetCurrentGuess = jest.fn(); // 1
//     // React.useState = () => ["", mockSetCurrentGuess]; // 2
//     const wrapper = setup(); // 3
//     const inputBox = findByTestAttr(wrapper, 'input-box'); // 4
//     const mockEvent = { target: { value: 'train' } }; // 5

//     inputBox.simulate("change", mockEvent); // 6
//     expect(mockSetCurrentGuess).toHaveBeenCalledWith('train'); // 7
// });


