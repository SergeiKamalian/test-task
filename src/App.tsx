import { Results } from './views';
import styles from './App.module.scss';
import { useInfiniteScroll } from './hooks';
import { Loader } from './components';

const App = () => {
  const { loading, data, observerRef } = useInfiniteScroll();

  return (
    <main className={styles.app}>
      <h1 className={styles.appTitle}>Test task for EMCD</h1>
      <Results data={data} />
      {loading && <Loader />}
      <div ref={observerRef} style={{ height: '20px' }} />
    </main>
  );
};

export default App;
