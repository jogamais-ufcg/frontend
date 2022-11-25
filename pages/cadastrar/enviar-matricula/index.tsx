import BackHeader from '../../../components/BackHeader';
import Input from '../../../components/Input';
import PageContainer from '../../../components/PageContainer';

export default function SendEnrollment() {
  return (
    <PageContainer headTitle="Enviar Matrícula">
      <BackHeader title="Enviar documentos" />

      <Input
        label="RDM ou outro documento similar"
        placeholder="Realizar upload do arquivo"
        type="file"
      />
    </PageContainer>
  );
}
