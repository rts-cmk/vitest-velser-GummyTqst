import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';


// Øvelse 1
// it('should double a number input', () => {
//     expect(5 + 5).toBe(10);
// });

// it('should uppercase a string input', () => {
//     expect('hello').toString('HELLO');
// });

// it('should handle null or undefined', () => {
//     expect(null).toBeNull();
//     expect(undefined).toBeUndefined();
// });


// Øvelse 2 - Strukturering af tests med describe, beforeEach og afterEach
describe('Struktur', () => {
    let data;

    beforeEach(() => {
        data = {
            number: 5,
            string: 'hello',
            nullValue: null,
            undefinedValue: undefined
        }
    })

    afterEach(() => {
        data = null;
    })

    describe('Number test', () => {
        it('should double the number', () => {
            expect(data.number * 2).toBe(10);
        })
    })

    describe('String test', () => {
        it('should uppercase the string', () => {
            expect(data.string.toUpperCase()).toBe('HELLO');
        })
    })

    describe('Null and Undefined test', () => {
        it('should handle null value', () => {
            expect(data.nullValue).toBeNull();
        })
        it('should handle undefined value', () => {
            expect(data.undefinedValue).toBeUndefined();
        })
    })
})


// Øvelse 3 - Asynkrone tests

// describe('Async Test', () => {
//     it('should resolve a promise successfully', async () => {
//         const fetchData = () => {
//             return new Promise((resolve) => {
//                 setTimeout(() => {
//                     resolve('data received');
//                 }, 100);
//             });
//         }

//         const data = await fetchData();
//         expect(data).toBe('data received');
//     })

//     it('should handle promise rejection', async () => {
//         const fetchDataWithError = () => {
//             return new Promise((_, reject) => {
//                 setTimeout(() => {
//                     reject('error occurred');
//                 }, 100);
//             });
//         }

//         try {
//             await fetchDataWithError();
//         } catch (error) {
//             expect(error).toBe('error occurred');
//         }
//     })
// })


// Øvelse 4 - Test af fejl og undtagelser
describe('Error Handling Test', () => {
    const throwError = () => {
        throw new Error('This is an error');
    }

    it('should throw an error', () => {
        expect(throwError).toThrow('This is an error');
    })
})

// Øvelse 5 - Mocking
vi.mock("./api", () => {
    return {
        api: {
            get: vi.fn()
        },
    };
});

import { api } from "./api";

describe('User API Test', () => {
    it('should fetch user data', async () => {
        const fakeUser = { id: 1, name: 'John Doe'};
        api.get.mockResolvedValue({ data: fakeUser});

        const result = await api.get('/user/1');

        expect(api.get).toHaveBeenCalledWith('/user/1');
        expect(result.data).toEqual(fakeUser);
    })
})

// Øvelse 6 - Coverage

