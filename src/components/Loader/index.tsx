/**
 * Loader component that displays a loading indicator.
 *
 * This component is memoized for performance optimization, preventing unnecessary re-renders.
 * It uses SCSS modules for styling, ensuring that the styles are scoped locally to avoid
 * conflicts with other styles in the application.
 *
 * @component
 * @returns {JSX.Element} A div element with a loading animation.
 *
 * @example
 * // Usage of the Loader component
 * import { Loader } from './Loader';
 *
 * function App() {
 *   return (
 *     <div>
 *       <h1>Loading data...</h1>
 *       <Loader />
 *     </div>
 *   );
 * }
 */
import { memo } from 'react';
import styles from './Loading.module.scss';

export const Loader = memo(() => {
  return <div className={styles.loader} />;
});

Loader.displayName = 'Loader';
