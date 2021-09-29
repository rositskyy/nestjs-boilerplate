import { ArgumentMetadata, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { ValidatePipeException } from '../exceptions/validate-pipe.exception';

@Injectable()
export class GlobalPipes implements PipeTransform {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }

    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    const parsedErrors = errors.reduce((acc, curr) => {
      acc[curr.property] = Object.values(curr.constraints).map((v) => v);
      return acc;
    }, {});

    if (Object.keys(parsedErrors).length > 0) {
      throw new ValidatePipeException(HttpStatus.BAD_REQUEST, 'Validation error', parsedErrors);
    }

    return value;
  }

  private toValidate(metatype: any): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
