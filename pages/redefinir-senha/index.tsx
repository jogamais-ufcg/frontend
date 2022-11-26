import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Input from '../../components/Input';
import PageContainer from '../../components/PageContainer';

export default function ResetPassword() {
  return (
    <PageContainer headTitle="Redefinir senha">
      <Input
        icon={faEnvelope}
        label="Email"
        placeholder="meumelhor@email.com"
        type="email"
      />
    </PageContainer>
  );
}
