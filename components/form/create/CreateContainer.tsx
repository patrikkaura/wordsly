import { memo } from 'react';

import CardForm from '../CardForm';

function CreateContainer() {
  return <CardForm />;
}

export default memo(CreateContainer);
