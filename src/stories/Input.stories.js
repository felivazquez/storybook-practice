import Input from '../components/Input';

export default {
  title: 'Input',
  component: Input,
};

export const Email = () => (
  <Input
    label="Email"
    type="text"
    name="email"
    placeholder="Ingresá tu email"
  />
);
