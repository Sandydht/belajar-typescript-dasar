# Say Hello Function
* Sebelum mulai belajar, kita akan coba buat say hello function dengan file TypeScript
* src/say-hello.ts
  ```TSX
    export function sayHello(name: String): String {
      return `Hello ${name}`;
    }
  ```
* test/say-hello.test.ts
  ```TSX
    import { sayHello } from '../src/say-hello';

    describe('sayHello', () => {
      it('should return hello sandy', () => {
        expect(sayHello('sandy')).toBe('Hello sandy');
      });
    });
  ```
  