import { memo } from 'react';
import { User } from '../../types';
import styles from './Results.module.scss';
import { UserCard } from '../../components';

type ResultsProps = {
  data: User[];
};

export const Results = memo((props: ResultsProps) => {
  const { data } = props;
  if (!data.length) return null;
  return (
    <ul className={styles.list}>
      {data.map((user, index) => (
        <UserCard user={user} key={user.id.name + index} />
      ))}
    </ul>
  );
});

Results.displayName = 'Results';
