import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'propertiesToArrayPipe'
})
export class PropertiesToArrayPipe implements PipeTransform {
    transform(data: Object) {
        const keys = Object.keys(data);
        const t = [];
        keys.forEach((x) => {
                if (typeof data[x] === 'boolean') {
                    t.push(x);
                }
            });
        return t;
    }
}
