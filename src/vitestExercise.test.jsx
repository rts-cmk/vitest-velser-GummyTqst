import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import {
  doubleNumber,
  uppercaseString,
  handleNullUndefined,
  fetchData,
  throwError,
  getUser
} from './vitestExercise.js';

// Øvelse 1 — simple tests
describe('Basic utility tests', () => {
  it('should double a number input', () => {
    expect(doubleNumber(5)).toBe(10);
  });

  it('should uppercase a string input', () => {
    expect(uppercaseString('hello')).toBe('HELLO');
  });

  it('should handle null or undefined', () => {
    expect(handleNullUndefined(null)).toBeNull();
    expect(handleNullUndefined(undefined)).toBeUndefined();
  });
});


// Øvelse 2 — Structure with beforeEach / afterEach
describe('Struktur', () => {
  let data;

  beforeEach(() => {
    data = {
      number: 5,
      string: 'hello',
      nullValue: null,
      undefinedValue: undefined
    };
  });

  afterEach(() => {
    data = null;
  });

  describe('Number test', () => {
    it('should double the number', () => {
      expect(doubleNumber(data.number)).toBe(10);
    });
  });

  describe('String test', () => {
    it('should uppercase the string', () => {
      expect(uppercaseString(data.string)).toBe('HELLO');
    });
  });

  describe('Null and Undefined test', () => {
    it('should handle null value', () => {
      expect(handleNullUndefined(data.nullValue)).toBeNull();
    });

    it('should handle undefined value', () => {
      expect(handleNullUndefined(data.undefinedValue)).toBeUndefined();
    });
  });
});


// Øvelse 3 — Async tests
describe("fetchData", () => {
  it("resolves with success message", async () => {
    const result = await fetchData(true);
    expect(result).toBe("Data loaded successfully");
  });

  it("rejects with an error message", async () => {
    // Using .rejects for async error checking
    await expect(fetchData(false)).rejects.toThrow("Failed to load data");
  });
});


// Øvelse 4 — Error handling
describe('Error Handling Test', () => {
  it('should throw an error', () => {
    expect(() => throwError()).toThrow('This is an error');
  });
});


// Øvelse 5 — Mocking
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
    const fakeUser = { id: 1, name: 'John Doe' };
    api.get.mockResolvedValue({ data: fakeUser });

    const result = await getUser(api, 1);

    expect(api.get).toHaveBeenCalledWith('/user/1');
    expect(result).toEqual(fakeUser);
  });
});


// Øvelse 6 - Coverage

