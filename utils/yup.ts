import { toast } from 'react-toastify';

/* eslint-disable @typescript-eslint/no-explicit-any */
export function isValid(schema: any, data: any) {
  try {
    return schema.validateSync(data, {
      abortEarly: false,
    });
  } catch (error: any) {
    toast.error(error?.errors[0]);

    return false;
  }
}
