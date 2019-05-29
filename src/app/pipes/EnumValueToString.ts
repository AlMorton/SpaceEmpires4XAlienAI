import { PipeTransform, Pipe } from '@angular/core';
import { TechTypes } from '../enums/TechTypes';
@Pipe({
    name: 'enumValueToString'
})
export class EnumValueToString<TEnum> implements PipeTransform {
    transform(data: number) {
        let keys = Object.keys(TechTypes);
        keys = keys.slice(keys.length / 2);
        return keys[data];
    }
}
