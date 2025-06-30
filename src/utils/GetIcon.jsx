import { icons } from '../icons';

const GetIcon = ({ name, className }) => {
  const Icon = icons[name];
  if (!Icon) return null;
  return <Icon className={className} />;
};

export default GetIcon;
