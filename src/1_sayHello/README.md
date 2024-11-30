# Say Hello Function
* Sebelum mulai belajar, kita akan coba buat say hello function dengan file TypeScript
* src/sayHello.ts
  ```TSX
    export function sayHello(name: String): String {
      return `Hello ${name}`;
    }
  ```
* test/sayHello.test.ts
  ```TSX
    import { sayHello } from '../src/say-hello';

    describe('sayHello', () => {
      it('should return hello sandy', () => {
        expect(sayHello('sandy')).toBe('Hello sandy');
      });
    });
  ```
  