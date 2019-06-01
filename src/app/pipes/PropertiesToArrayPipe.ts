import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'propertiesToArrayPipe'
})
export class PropertiesToArrayPipe implements PipeTransform {
    transform(data: Object, type: string = null) {
        const keys = Object.keys(data);
        if (type !== null) {
            const t = [];
            keys.forEach((x) => {
                if (typeof data[x] === type) {
                    t.push(x);
                }
            });
            return t;
        }
        return keys;
    }
}
