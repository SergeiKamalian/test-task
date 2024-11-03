/**
 * UserCard component that displays user information including their picture,
 * full name, and email address.
 *
 * This component is memoized for performance optimization, ensuring that it
 * only re-renders when the user prop changes. It utilizes the `useMemo`
 * hook to compute the full name from the user's first name, last name,
 * and title, enhancing efficiency by avoiding unnecessary calculations on re-renders.
 *
 * @component
 * @param {Object} props - The properties for the UserCard component.
 * @param {User} props.user - The user object containing user information.
 * @returns {JSX.Element} A list item representing the user card with user details.
 *
 * @example
 * // Usage of the UserCard component
 * import { UserCard } from './UserCard';
 * import { User } from '../../types';
 *
 * const exampleUser = {
 *   id: { name: 'unique-id' },
 *   name: { first: 'John', last: 'Doe', title: 'Mr.' },
 *   email: 'john.doe@example.com',
 *   picture: { large: 'https://example.com/johndoe.jpg' },
 * };
 *
 * function App() {
 *   return (
 *     <ul>
 *       <UserCard user={exampleUser} />
 *     </ul>
 *   );
 * }
 */
import { memo, useMemo } from 'react';
import { User } from '../../types';
import styles from './UserCard.module.scss';

type UserCardProps = {
  user: User;
};

export const UserCard = memo((props: UserCardProps) => {
  const { user } = props;
  const fullName = useMemo(
    () => `${user.name.first} ${user.name.last} ${user.name.title}`.trim(),
    [user.name.first, user.name.last, user.name.title],
  );
  return (
    <li key={user.id.name} className={styles.userCard}>
      <div className={styles.userCardMainInfo}>
        <img className={styles.userImage} src={user.picture.large} alt={user.name.first} />
        <div className={styles.userInfo}>
          <span className={styles.userName}>{fullName}</span>
          <span className={styles.userEmail}>{user.email}</span>
        </div>
      </div>
    </li>
  );
});

UserCard.displayName = 'UserCard';
