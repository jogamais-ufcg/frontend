import * as yup from 'yup';

export const firstStepSchema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  email: yup
    .string()
    .email('O email precisa estar em um formato válido')
    .required('Email é obrigatório'),
  password: yup
    .string()
    .required('Senha é obrigatória')
    .min(8, 'A senha precisa ter no mínimo 8 caracteres'),
  cellphone: yup.string().required('Celular é obrigatório'),
  isUFCGMember: yup.boolean().default(false),
});

export type FirstStepData = yup.InferType<typeof firstStepSchema>;

export const rgStepSchema = yup.object({
  cpf: yup.string().required('CPF é obrigatório'),
  documentFront: yup.string().required('Foto da frente do RG é obrigatória'),
  documentBack: yup
    .string()
    .required('Foto da parte de trás do RG é obrigatória'),
});

export const studentStepSchema = yup.object({
  cpf: yup.string().required('CPF é obrigatório'),
  enrollment: yup.string().required('Matrícula é obrigatória'),
  enrollmentDocument: yup
    .string()
    .required('Foto do comprovante de matrícula é obrigatória'),
});

export type SecondStepData =
  | {
      cpf: string;
      documentFront: string;
      documentBack: string;
    }
  | {
      cpf: string;
      enrollment: string;
      enrollmentDocument: string;
    };
