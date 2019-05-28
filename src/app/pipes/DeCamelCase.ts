import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'deCamelCase'
})
export class DeCamelCase implements PipeTransform {
    transform(data: string) {
        const str = data.replace(/^\w|[A-Z]/g, this.replacer);
        return str;
    }
    replacer(match, p1, p2 ,offset, string) {
        // p1 is nondigits, p2 digits, and p3 non-alphanumerics
        if (p1 === 0) {
            return match.toUpperCase();
        }
        return ' ' + match;
      }
}
